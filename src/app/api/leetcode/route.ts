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

    try {
        const res = await fetch("https://leetcode.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Referer: "https://leetcode.com",
            },
            body: JSON.stringify({
                query,
                variables: { username, year: new Date().getFullYear() },
            }),
            next: { revalidate: 3600 }, // cache for 1h
        });

        if (!res.ok) throw new Error("LeetCode API error");

        const json = await res.json();
        return NextResponse.json(json.data?.matchedUser ?? null);
    } catch {
        return NextResponse.json(null, { status: 502 });
    }
}
