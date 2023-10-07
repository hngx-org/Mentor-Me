import * as React from "react";
import { SVGProps } from "react";
export const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#565656"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15 6 3 3m-5 11h8M5 16l-1 4 4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0L5 16Z"
    />
  </svg>
);

export const AwardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g
      stroke="#2A2A2A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M4.258 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0l-4.73 2.73c-1.72 1.16-1.72 1.16-1.72 2.98Z" />
      <path d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.632 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z" />
    </g>
  </svg>
);

export const NaijaFlagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={26}
    fill="none"
    {...props}
  >
    <g fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <path fill="#fff" d="M-6.5-6.5h52v39h-52v-39Z" />
      <path
        fill="#008753"
        d="M28.161-6.5H45.5v39H28.161v-39ZM-6.5-6.5h17.33v39H-6.5v-39Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M-6.5-6.5h52v39h-52z" />
      </clipPath>
    </defs>
  </svg>
);

export const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 6.44v3.33M12.02 2C8.34 2 5.36 4.98 5.36 8.66v2.1c0 .68-.28 1.7-.63 2.28l-1.27 2.12c-.78 1.31-.24 2.77 1.2 3.25a23.34 23.34 0 0 0 14.73 0 2.22 2.22 0 0 0 1.2-3.25l-1.27-2.12c-.35-.58-.63-1.61-.63-2.28v-2.1C18.68 5 15.68 2 12.02 2Z"
    />
    <path
      stroke="#292D32"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15.33 18.82c0 1.83-1.5 3.33-3.33 3.33-.91 0-1.75-.38-2.35-.98-.6-.6-.98-1.44-.98-2.35"
    />
  </svg>
);

export const NotificationBingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g stroke="#292D32" strokeMiterlimit={10} strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        d="M12 6.44v3.33M12.019 2c-3.68 0-6.66 2.98-6.66 6.66v2.1c0 .68-.28 1.7-.63 2.28l-1.27 2.12c-.78 1.31-.24 2.77 1.2 3.25a23.34 23.34 0 0 0 14.73 0 2.22 2.22 0 0 0 1.2-3.25l-1.27-2.12c-.35-.58-.63-1.61-.63-2.28v-2.1C18.679 5 15.679 2 12.019 2Z"
      />
      <path d="M15.332 18.82c0 1.83-1.5 3.33-3.33 3.33-.91 0-1.75-.38-2.35-.98-.6-.6-.98-1.44-.98-2.35" />
    </g>
    <path fill="#D53232" d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </svg>
);

export const CartOutlineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#292D32"
      d="M18.19 17.75H7.54c-.99 0-1.94-.42-2.61-1.15A3.573 3.573 0 0 1 4 13.9l.83-9.96c.03-.31-.08-.61-.29-.84-.21-.23-.5-.35-.81-.35H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.74c.73 0 1.42.31 1.91.84.27.3.47.65.58 1.04h12.49c1.01 0 1.94.4 2.62 1.12.67.73 1.01 1.68.93 2.69l-.54 7.5c-.11 1.83-1.71 3.31-3.54 3.31ZM6.28 4.62l-.78 9.4c-.05.58.14 1.13.53 1.56.39.43.93.66 1.51.66h10.65c1.04 0 1.98-.88 2.06-1.92l.54-7.5a2.04 2.04 0 0 0-2.06-2.21H6.28v.01ZM16.25 22.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5ZM8.25 22.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5Z"
    />
    <path
      fill="#292D32"
      d="M21 8.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75Z"
    />
  </svg>
);

export const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.392 2.35 2.617 6.975c-.65.516-1.067 1.608-.925 2.425L2.8 16.033c.2 1.183 1.333 2.141 2.533 2.141h9.334c1.191 0 2.333-.966 2.533-2.141L18.308 9.4c.134-.817-.283-1.909-.925-2.425l-5.775-4.617c-.891-.717-2.333-.717-3.216-.008Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 12.917a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167Z"
    />
  </svg>
);

export const MessageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.083 15.834h-.417c-3.333 0-5-.834-5-5V6.667c0-3.333 1.667-5 5-5h6.667c3.333 0 5 1.667 5 5v4.167c0 3.333-1.667 5-5 5h-.417a.845.845 0 0 0-.667.333L11 17.834c-.55.733-1.45.733-2 0l-1.25-1.667c-.133-.183-.441-.333-.666-.333Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.33 9.167h.008M9.996 9.167h.008M6.662 9.167h.008"
    />
  </svg>
);

export const BookingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.5 18.334h5c4.166 0 5.833-1.667 5.833-5.834v-5c0-4.166-1.667-5.833-5.834-5.833h-5c-4.166 0-5.833 1.667-5.833 5.833v5c0 4.167 1.667 5.834 5.833 5.834ZM13.125 7.5h-6.25M13.125 12.5h-6.25"
    />
  </svg>
);

export const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <path
      stroke="#818181"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2.125}
      d="M13.558 8.4 4.96 17l8.6 8.6M29.042 17H5.199"
    />
  </svg>
);

export const ArrowRigthIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
    className="hover:stroke-red"
  >
    <path
      stroke="#818181"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2.125}
      d="m20.441 8.4 8.6 8.6-8.6 8.6M4.959 17h23.843"
    />
  </svg>
);

export const CaretIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.5984 7.45898L11.1651 12.8923C10.5234 13.534 9.47344 13.534 8.83177 12.8923L3.39844 7.45898"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const VerifiedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
    focusable="true"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h24v24H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.00195)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={512}
        height={512}
      />
    </defs>
  </svg>
);

export const CalenderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    focusable="true"
    {...props}
  >
    <path
      stroke="#121212"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.75}
      d="M4 1v1.5M8 1v1.5M1.75 4.545h8.5M10.5 4.25V8.5C10.5 10 9.75 11 8 11H4c-1.75 0-2.5-1-2.5-2.5V4.25c0-1.5.75-2.5 2.5-2.5h4c1.75 0 2.5 1 2.5 2.5Z"
    />
    <path
      stroke="#121212"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.847 6.85h.004M7.847 8.35h.004M5.997 6.85h.005M5.997 8.35h.005M4.148 6.85h.004M4.148 8.35h.004"
    />
  </svg>
);

export const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    focusable="true"
    {...props}
  >
    <path
      stroke="#121212"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.458}
      d="M11.945 6.512c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5Z"
    />
    <path
      stroke="#121212"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.458}
      d="m8.802 8.102-1.55-.925c-.27-.16-.49-.545-.49-.86v-2.05"
    />
  </svg>
);
