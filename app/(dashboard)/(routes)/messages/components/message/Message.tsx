import Image from "next/image";

type MessageCardProps = {
	userName?: string;
	image?: string;
	text?: string;
	messageCount?: number;
};

export default function MessageCard(props: MessageCardProps) {
	return (
		<div className=" border-[0.5px] px-4 py-3">
			<div className=" h-[50px]  w-[263px] flex space-x-3  items-center ">
				<div className="rounded-full w-[40px] h-[40px]">
					<Image
						src={"/assets/Rectangle 49.png"}
						alt={props.userName || ""}
						height={45}
						width={45}
						className=".object-center"
					/>
				</div>

				<div className="flex-col w-[200px] ">
					<h5 className=" capitalize text-sm text-NeutalBase font-medium">
						{props.userName}
					</h5>
					<p className=" w-full  text-xs truncate text-Neutra40">
						You have got this, keep going and do not doubt your self at any
						point
					</p>
				</div>
			</div>
		</div>
	);
}
