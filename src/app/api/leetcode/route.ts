import { NextResponse } from "next/server";

export async function GET() {
  const username = "bhaveshkhandelwal_";

  const query = `
    query userProfileCalendar($username: String!, $year: Int) {
      matchedUser(username: $username) {
        userCalendar(year: $year) {
          submissionCalendar
        }
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
  `;

  async function fetchYear(year: number) {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({ query, variables: { username, year } }),
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("LeetCode API error");
    return res.json();
  }

  try {
    const currentYear = new Date().getFullYear();
    const [currJson, prevJson] = await Promise.all([
      fetchYear(currentYear),
      fetchYear(currentYear - 1),
    ]);

    const matchedUser = currJson.data?.matchedUser;
    if (!matchedUser) return NextResponse.json(null, { status: 502 });

    // Merge calendars from both years
    const currCal = JSON.parse(matchedUser.userCalendar?.submissionCalendar ?? "{}");
    const prevCal = JSON.parse(prevJson.data?.matchedUser?.userCalendar?.submissionCalendar ?? "{}");
    const mergedCalendar = JSON.stringify({ ...prevCal, ...currCal });

    return NextResponse.json({
      ...matchedUser,
      userCalendar: { submissionCalendar: mergedCalendar },
    });
  } catch {
    return NextResponse.json(null, { status: 502 });
  }
}
