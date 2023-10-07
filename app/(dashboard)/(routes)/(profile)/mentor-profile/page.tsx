import React from "react";
import UserHero from "./userHero";
import UserDetails from "./userDetails";
import UserExperience from "./userExperience";

export default function ProfilePage() {
	return <div>
		<UserHero />
		<UserDetails />
		<UserExperience />
	</div>;
}
