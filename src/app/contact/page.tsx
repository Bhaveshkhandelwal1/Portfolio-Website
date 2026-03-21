import React from 'react'
import { BorderMagicButton } from '@/components/ui/border-magic-button'

function Contact() {
  return (
    <div className="space-y-8 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <BorderMagicButton>
          Get in Touch
        </BorderMagicButton>
      </div>

      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          I&apos;m always open to discussing new opportunities, interesting projects, or just connecting with fellow developers. Feel free to reach out!
        </p>

        <div className="space-y-4">
          <div className="border rounded-lg p-6 space-y-2">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              📍 Location
            </h3>
            <p className="text-muted-foreground">Bengaluru – Karnataka, India</p>
          </div>

          <div className="border rounded-lg p-6 space-y-2">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              📧 Email
            </h3>
            <a
              href="mailto:bhaveshkhandelwal1232@gmail.com"
              className="text-primary hover:underline"
            >
              bhaveshkhandelwal1232@gmail.com
            </a>
          </div>

          <div className="border rounded-lg p-6 space-y-2">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              📱 Phone
            </h3>
            <a
              href="tel:9351337249"
              className="text-primary hover:underline"
            >
              9351337249
            </a>
          </div>

          <div className="border rounded-lg p-6 space-y-2">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              💼 LeetCode
            </h3>
            <a
              href="https://leetcode.com/bhaveshkhandelwal_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              bhaveshkhandelwal_
            </a>
          </div>
        </div>

        <div className="pt-4 flex justify-center">
          <a href="mailto:bhaveshkhandelwal1232@gmail.com">
            <BorderMagicButton>
              Send Email
            </BorderMagicButton>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
