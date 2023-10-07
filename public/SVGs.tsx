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

export const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.7281 5.93359C17.8736 6.14026 19.158 7.37359 19.158 10.0736V10.1603C19.158 13.1403 17.594 14.3336 13.6884 14.3336H8.00036C4.09475 14.3336 2.53076 13.1403 2.53076 10.1603V10.0736C2.53076 7.39359 3.79768 6.16026 6.89071 5.94026"
      stroke="white"
      stroke-width={1.5}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.8486 10.0007V2.41406"
      stroke="white"
      stroke-width={1.5}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.7754 3.89935L10.8484 1.66602L7.92139 3.89935"
      stroke="white"
      stroke-width={1.5}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 12H18"
      stroke="#008080"
      stroke-width={1.5}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 18V6"
      stroke="#008080"
      stroke-width={1.5}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const PendingStatusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.25 12.81C17.25 12.98 17.24 13.14 17.22 13.3C17.07 15.07 16.02 15.95 14.1 15.95H13.84C13.68 15.95 13.52 16.03 13.42 16.16L12.63 17.21C12.28 17.68 11.72 17.68 11.37 17.21L10.58 16.16C10.49 16.05 10.3 15.95 10.16 15.95H9.9C7.81 15.95 6.75 15.43 6.75 12.8V10.17C6.75 8.25 7.64 7.2 9.4 7.05C9.56 7.04 9.73 7.04 9.9 7.04H14.1C16.19 7.04 17.25 8.09 17.25 10.19V12.81Z"
      fill="#FBBC05"
    />
  </svg>
);

export const ApprovedStatusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.5599 10.7405L20.1999 9.16055C19.9399 8.86055 19.7299 8.30055 19.7299 7.90055V6.20055C19.7299 5.14055 18.8599 4.27055 17.7999 4.27055H16.0999C15.7099 4.27055 15.1399 4.06055 14.8399 3.80055L13.2599 2.44055C12.5699 1.85055 11.4399 1.85055 10.7399 2.44055L9.16988 3.81055C8.86988 4.06055 8.29988 4.27055 7.90988 4.27055H6.17988C5.11988 4.27055 4.24988 5.14055 4.24988 6.20055V7.91055C4.24988 8.30055 4.03988 8.86055 3.78988 9.16055L2.43988 10.7505C1.85988 11.4405 1.85988 12.5605 2.43988 13.2505L3.78988 14.8405C4.03988 15.1405 4.24988 15.7005 4.24988 16.0905V17.8005C4.24988 18.8605 5.11988 19.7305 6.17988 19.7305H7.90988C8.29988 19.7305 8.86988 19.9405 9.16988 20.2005L10.7499 21.5605C11.4399 22.1505 12.5699 22.1505 13.2699 21.5605L14.8499 20.2005C15.1499 19.9405 15.7099 19.7305 16.1099 19.7305H17.8099C18.8699 19.7305 19.7399 18.8605 19.7399 17.8005V16.1005C19.7399 15.7105 19.9499 15.1405 20.2099 14.8405L21.5699 13.2605C22.1499 12.5705 22.1499 11.4305 21.5599 10.7405ZM16.1599 10.1105L11.3299 14.9405C11.1899 15.0805 10.9999 15.1605 10.7999 15.1605C10.5999 15.1605 10.4099 15.0805 10.2699 14.9405L7.84988 12.5205C7.55988 12.2305 7.55988 11.7505 7.84988 11.4605C8.13988 11.1705 8.61988 11.1705 8.90988 11.4605L10.7999 13.3505L15.0999 9.05055C15.3899 8.76055 15.8699 8.76055 16.1599 9.05055C16.4499 9.34055 16.4499 9.82055 16.1599 10.1105Z"
      fill="#009444"
    />
  </svg>
);

export const RejectedStatusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
      fill="#FF2E2E"
    />
  </svg>
);

export const CancelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.75781 17.2438L12.0008 12.0008L17.2438 17.2438M17.2438 6.75781L11.9998 12.0008L6.75781 6.75781"
      stroke="#536066"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const BulletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx="16" cy="16" r="8" fill="#ccc" />
  </svg>
);

export const SmallBulletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx="16" cy="16" r="8" fill="teal" />
  </svg>
);
