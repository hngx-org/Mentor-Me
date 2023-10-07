import { CallIcon, VideoIcon } from "@/public/assets/icons";
import Image from "next/image";
type MessageUserProfileProps = {
  userImage: string;
  userName: string;
  userId: string;
};
export default function MessageUserProfile(props: MessageUserProfileProps) {
  return (
    <div className="p-4 border-b-[0.5px] border-Neutra10 h-[91px] mb-12">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <div className="rounded-full w-[50px] h-[50px]">
            <Image
              src={"/assets/Rectangle 49.png"}
              alt={props.userName || ""}
              height={55}
              width={55}
              className=".object-center"
            />
          </div>
          <p className="capitalize text-lg  font-medium text-NeutalBase">
            {props.userName}
          </p>
        </div>

        <div className="flex justify-between space-x-4 items-center">
          <VideoIcon />
          <CallIcon />
        </div>
      </div>
    </div>
  );
}
