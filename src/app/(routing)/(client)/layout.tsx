'use client'
import React from "react"
import "../../styles/globals.css"
// import AsideBar from "@/widgets/asideBar"

export default function Layout({ children }: { children: React.ReactNode }) {

    return <div>

        <div className="flex bg-muted/40 dark:bg-[#141a2a]  ">
        
        
            {children}
        </div>
    </div>
}