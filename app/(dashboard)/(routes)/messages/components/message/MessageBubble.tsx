type MessageBubbleProps = {
  text: string;
  message: "sent" | "recieved";
  timeStamp: string;
  showTimeStamp: boolean;
};

export default function MessageBubble(props: MessageBubbleProps) {
  return (
    <div className=" flex-col text-sm py-0.5">
      <div
        className={`border-[0.5px] border-Neutra10 p-3 rounded-[8px] ${
          props.message === "recieved" && "bg-Accent6"
        }  `}
      >
        <p className="text-Neutra50 ">
          In our next session, I will review your resume and your cv. So before
          our next session, edit those aspects I pointed out so that we can go
          over it together
        </p>
      </div>
      {props.showTimeStamp && (
        <div
          className={`${
            props.message === "recieved" && "flex flex-row-reverse"
          }`}
        >
          <p className="text-Neutra20 pt-1 mb-2 "> 2 : 00</p>
        </div>
      )}
    </div>
  );
}
