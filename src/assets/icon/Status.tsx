import * as React from "react";

export function Accept(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={16} cy={16} r={16} fill="#65CB00" />
      <path
        d="M9.778 16l4.444 4.444 8.89-8.888"
        stroke="#fff"
        strokeWidth={1.111}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Waiting(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={16} cy={16} r={16} fill="#00B4D8" />
      <path
        d="M16 24a8 8 0 100-16 8 8 0 000 16z"
        stroke="#fff"
        strokeWidth={1.111}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 11.556V16l2.667 2.667"
        stroke="#fff"
        strokeWidth={1.111}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export function Reject(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={16} cy={16} r={16} fill="#F5002D" />
      <path
        d="M21.333 10.667L10.667 21.333M10.667 10.667l10.666 10.666"
        stroke="#fff"
        strokeWidth={1.111}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
