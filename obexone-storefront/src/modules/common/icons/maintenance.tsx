import React from "react"

import { IconProps } from "types/icon"

const Maintenance: React.FC<IconProps> = ({
  size = "16",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
    <path
      d="M19.4 7.4a1.1 1.1 0 0 0-1.5 0l-1.3 1.3 2.6 2.6 1.3-1.3a1.1 1.1 0 0 0 0-1.5l-1.1-1.1zm-4.2 3.1l-4.6 4.6a3.1 3.1 0 1 1-2.4-2.4l4.6-4.6 2.4 2.4zm-6.7 3.5a1.9 1.9 0 1 0 2.6 0 1.9 1.9 0 0 0-2.6 0z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    </svg>
  )
}

export default Maintenance
