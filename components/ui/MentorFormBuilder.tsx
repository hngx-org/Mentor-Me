"use client";

// This component renders only the forms and NOT the heading or the progressbar
// It accepts props(from formData) that were passed down from the parent component to render the input fields in the form
//  The buttons trigger the change of the currForm state from here using props. Which in turn changes which form is shown

import { MentorCreationArrDown } from "@/public";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function MentorFormBuilder(props: {
	children?: any;
	content: any;
	handleBack(): unknown;
	handleClick: () => void;
}) {
	const form = useRef(null);

	return (
		<form ref={form} className="flex flex-col gap-6">
			{props.content.map((input: any) => {
				// if the input is not a text-area, i.e every screen except screen 4, return this
				if (input.type != "textarea") {
					return (
						<div key={input.id} className="flex flex-col gap-2 relative z-[1]">
							<label
								htmlFor=""
								className="font-Inter text-Neutral60 font-[500]"
							>
								{input.label}
							</label>

							<input
								className="w-full border-[#d0d5dd] border-[1px] rounded-md p-4 placeholder:text-[#98A2B3] "
								type="text"
								placeholder={input.placeholder}
								required
							/>

							{input.nature == "dropdown" ? (
								<Image
									className="absolute right-4 translate-y-[-50%] top-[70%]"
									src={MentorCreationArrDown}
									alt="arrow-down"
								/>
							) : (
								""
							)}
						</div>
					);

					// if its a text area, i.e screen 4, return this
				} else {
					return (
						<div key={input.id} className="w-full mt-10 flex flex-col gap-2">
							<label
								htmlFor="textArea"
								className="font-Inter text-Neutral60 font-[500]"
							>
								{input.label}
							</label>
							<textarea
								className=" border-[#D0D5DD] w-full border-[1px] p-4 rounded-lg"
								id="textArea"
								cols={30 as number}
								rows={10 as number}
								placeholder="Write something"
							></textarea>
							<p className="font-Inter text-Neutra30">
								Not more than 250 words
							</p>
						</div>
					);
				}
			})}

			{/* this children prop is for the variations for each of the forms. So it's basically a fix*/}
			{props.children}

			{/* container for the buttons */}
			<div className="flex gap-3 mt-[50px] justify-between">
				<div
					className="cursor-pointer border-[#121212] font-semibold border-[1px] w-[100%] max-w-[200px] py-5 rounded-md font-Inter text-center"
					onClick={() => {
						props.handleBack();
					}}
				>
					Back
				</div>
				<button
					className=" bg-[#121212] text-white font-semibold border-[1px] w-[100%] max-w-[200px] py-5 rounded-md font-Inter text-center"
					onClick={(e) => {
						e.preventDefault();
						const valid = (form.current! as HTMLFormElement).reportValidity();

						if (valid) {
							props.handleClick();
						}
					}}
				>
					Next
				</button>
			</div>
		</form>
	);
}
