// icon:basic_cards_hearts | Linea Iconset https://linea.io/ | Benjamin Sigidi
import * as React from "react";

function IconLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      height="3em"
      width="3em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M44 59L16 45 36 5l27 14z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M31.899 14.004L28 6 1 20l18 39 13-6.036M38 9l-1 2M7 23l-1-2M43 53l-1 2"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M33 25c-2.848 5.281 3 15 3 15s11.151.28 14-5c1.18-2.188 1.377-5.718-1-7-2.188-1.18-5.82-1.188-7 1 1.18-2.188.188-4.82-2-6-2.376-1.282-5.819-.187-7 2z"
      />
    </svg>
  );
}

export default IconLogo;
