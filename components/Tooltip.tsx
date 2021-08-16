import React, { ReactNode } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/animations/scale.css'

type TooltipProps = {
  content: ReactNode
  className?: string
  children?: ReactNode
}

const Tooltip = ({ children, content, className }: TooltipProps) => {
  return (
    <Tippy
      animation="scale"
      appendTo={() => document.body}
      maxWidth="20rem"
      interactive
      content={
        <div
          className={`rounded p-3 text-xs bg-th-bkg-3 leading-5 shadow-md text-th-fgd-3 outline-none focus:outline-none ${className}`}
        >
          {content}
        </div>
      }
    >
      <div className="outline-none focus:outline-none">{children}</div>
    </Tippy>
  )
}

const Content = ({ className = '', children }) => {
  return (
    <div
      className={`inline-block cursor-help border-b border-th-fgd-3 border-dashed border-opacity-20 default-transition hover:border-th-bkg-2 ${className}`}
    >
      {children}
    </div>
  )
}

Tooltip.Content = Content

export default Tooltip
