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
