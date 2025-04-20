`use client`

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
export function ModeToggle() {
  const { setTheme } = useTheme()
  let theme = localStorage.getItem("theme")
  return (
    <>
      {theme == "dark" ? <button onClick={() => setTheme("light")} ><Moon className="" size={"28px"} /></button> : <button onClick={() => setTheme("dark")}><Sun className="" size={"28px"} /></button>}
    </>
  )
}