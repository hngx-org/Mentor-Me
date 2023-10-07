import React, { ReactNode } from 'react'

import SidebarMentor from '@/components/sections/SideBars/SidebarMentor'
import { NavbarMentee } from '@/components/sections/nav-bars/NavbarMentee'

export default function MentorResourcesLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-y-4">
      <div className="row-start-1 row-end-3 col-start-1 col-end-2 h-full">
        {/* TODO change sidebarmentor to position sticky */}
        <SidebarMentor />
      </div>
      <NavbarMentee path={'Resources'} />
      {children}
    </div>
  )
}
