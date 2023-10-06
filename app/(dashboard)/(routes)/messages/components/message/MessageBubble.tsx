type MessageBubbleProps = {
  text: string;
  message: "sent" | "recieved";
  timeStamp?: string;
};

export default function MessageBubble(props: MessageBubbleProps) {
  return (
    <div
      className={`flex text-sm py-0.5  max-w-[100%] ${
        props.message === "sent" ? "justify-start" : "justify-end"
      }`}
    >
      <div className="max-w-[50%] w-fit flex-col">
        <div
          className={`border-[0.5px] border-Neutra10 p-3 rounded-[8px] ${
            props.message === "recieved" && "bg-Accent6"
          }  `}
        >
          <p className="text-Neutra50 ">{props.text}</p>
        </div>
        {props.timeStamp && (
          <div
            className={`${
              props.message === "recieved" && "flex flex-row-reverse"
            }`}
          >
            <p className="text-Neutra20 pt-1 mb-2 "> {props.timeStamp}</p>
          </div>
        )}
      </div>
    </div>
  );
}
