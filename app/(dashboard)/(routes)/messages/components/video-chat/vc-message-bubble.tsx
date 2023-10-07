import { MessageBubbleProps } from "../message/MessageBubble";
import Image from "next/image";

type VCMessageBubbleType = {
  isAppended: boolean;
};
export default function VCMessageBubble(
  props: VCMessageBubbleType & MessageBubbleProps
) {
  return (
    <div
      className={`flex text-sm py-0.5  max-w-[100%]  ${
        props.message === "sent" ? "justify-start" : "justify-end"
      } ${!props.isAppended && "mt-6"}`}
    >
      <div
        className={` flex ${
          props.message === "recieved" && "flex-row-reverse"
        }  w-[100%]`}
      >
        <div className="rounded-full w-[48px] h-[48px] mx-4">
          {!props.isAppended && (
            <Image
              width={48}
              height={48}
              alt="profile"
              src={"/assets/images/mentee-profile-screen/my-profile.png"}
              className=".object-center"
            />
          )}
        </div>

        <div className="max-w-[80%] w-fit flex-col">
          <div
            className={`p-3 rounded-[8px]  justify-between ${
              props.message === "recieved"
                ? "bg-Accent6 rounded-br-none"
                : "bg-[#f5f5f5] rounded-bl-none"
            }  `}
          >
            <p className="text-Neutra50 ">{props.text}</p>
            {props.timeStamp && (
              <div>
                <p className="text-Neutra20 mt-4 text-xs"> {props.timeStamp}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
