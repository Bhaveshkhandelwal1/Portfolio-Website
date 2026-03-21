import React from 'react'
import { BorderMagicButton } from '@/components/ui/border-magic-button'

function Blogs() {
  return (
    <div className="space-y-8 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
        <BorderMagicButton>
          Read More
        </BorderMagicButton>
      </div>

      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Coming soon! I&apos;ll be sharing my thoughts on software development, algorithms, and tech insights here.
        </p>

        <div className="pt-4">
          <BorderMagicButton>
            Subscribe for Updates
          </BorderMagicButton>
        </div>
      </div>
    </div>
  )
}

export default Blogs