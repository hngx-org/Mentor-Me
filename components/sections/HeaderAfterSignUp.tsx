import Image from "next/image";
import React from "react";

import { BulletIcon, NotifyIcon, ProfileIcon } from "@/public/SVGs";

interface Steps {
	step: number;
}

export default function HeaderAfterSignUp({ step }: Steps) {
	const isStep1To4 = step >= 1 && step <= 4;
	const h1ClassName = isStep1To4
		? "font-Hanken font-[700] text-2xl text-Neutra20"
		: "font-Hanken font-[700] text-2xl text-NeutalBase";

	return (
		<nav className="flex justify-between items-center py-5 px-9 bg-[#FFFF] cursor-pointer border-b">
			<div className="flex items-center">
				<h1 className={h1ClassName}>Mentor Account </h1>

				{step === 1 && (
					<>
						{" "}
						<span>
							<BulletIcon />
						</span>
						<p className="font-Hanken font-[700] text-2xl text-NeutalBase">
							Certifications
						</p>
					</>
				)}
				{step === 2 && (
					<>
						{" "}
						<span>
							<BulletIcon />
						</span>
						<p className="font-Hanken font-[700] text-2xl text-NeutalBase">
							Achievements & Awards
						</p>
					</>
				)}
				{step === 3 && (
					<>
						<span>
							<BulletIcon />
						</span>
						<p className="font-Hanken font-[700] text-2xl text-NeutalBase">
							Qualifications
						</p>
					</>
				)}
				{step === 4 && (
					<>
						<span>
							<BulletIcon />
						</span>
						<p className="font-Hanken font-[700] text-2xl text-NeutalBase">
							Identification
						</p>
					</>
				)}
			</div>

			<div className="flex items-center gap-5">
				<NotifyIcon />

				<div className="flex items-center gap-2">
					<ProfileIcon />
					<div className="flex flex-col  font-Inter ">
						<span className=" text-[11px]">Funmi Oladapo</span>

						<span className=" text-[10px]">C++ Developer</span>
					</div>
				</div>
			</div>
		</nav>
	);
}
