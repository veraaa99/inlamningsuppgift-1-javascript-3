"use client"

import { useDraftModeEnvironment } from "next-sanity/hooks"

export const DisableDraftMode = () => {

    const env = useDraftModeEnvironment()

    if(env !== "live" && env !== "unknown") {
        return null
    }

  return (
    <a href="/api/draft-mode/disable" className="fixed bottom-4 right-4 bg-slate-600 text-slate-200 px-4 py-2">
        Disable the Draft Mode
    </a>
  )
}