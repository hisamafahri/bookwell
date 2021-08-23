import * as React from "react";

function KeyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 19a4 4 0 100-8 4 4 0 000 8zM10.85 12.15L19 4M18 5l2 2M15 8l2 2"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default KeyIcon;