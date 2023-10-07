"use client";

import Button from "@/components/ui/Button";
import { DashboardMenteeNavImg } from "@/public";
import React from "react";

export default function MenteeProfilePage() {
	return (
		<div>
			<Button
				className="p-3"
				variant="secondary"
				type="button"
				icon={DashboardMenteeNavImg}
				title="Dashboard"
			/>
		</div>
	);
}
