import Image from "next/image";
import VCMessageBubble from "./vc-message-bubble";

export default function VCLayout() {
  return (
    <div className="w-[100%] h-[90vh] flex">
      <div className="w-[720px] h-[100%]">
        <VCRHS />
      </div>
      <div className=" flex-col flex1  min-w-[400px] h-[100%]">
        <div
          overflow-x-scroll
          className="h-[90%] overflow-x-scroll hide-message-layout-scroll"
        >
          <VCLHS />
        </div>

        <div>
          <p> input here</p>
        </div>
      </div>
    </div>
  );
}

// using bg-color for until image assets available now, -- update html element with right tag when for video streaming
function VCRHS() {
  return (
    <div className="w-[100%]  h-[100%] relative  border">
      <div className="w-[100%] h-[100%] bg-black flex flex-col  justify-between text-white py-7">
        <div className="w-[100%] h-[20px] flex justify-between  items-center p-7">
          <p> Record icon</p>
          <p> Add users icon</p>
        </div>
        <div className="w-[100%] h-[20px] flex justify-center space-x-4  items-center p-7">
          <p> icon</p>
          <p> icon</p>
          <p> icon</p>
          <p> icon</p>
        </div>
      </div>
      <div className="w-[148px] h-[140px] bg-red-200 absolute bottom-[100px] right-[70px] rounded-[5px]"></div>
    </div>
  );
}

function VCLHS() {
  return (
    <div className="py-4 w-[100%]">
      <div>
        <VCMessageBubble
          message={"sent"}
          text="Hello Dave!"
          timeStamp="11:00am"
          isAppended={false}
        />

        <VCMessageBubble
          message={"recieved"}
          text="It is a pleasure meeting you."
          timeStamp="11:00am"
          isAppended={false}
        />
        <VCMessageBubble
          message={"recieved"}
          text="Thank you very much joines"
          timeStamp="11:12am"
          isAppended={true}
        />
        <VCMessageBubble
          message={"recieved"}
          text="I am happy to meet you too"
          timeStamp="11:13am"
          isAppended={true}
        />
        <VCMessageBubble
          message={"sent"}
          text="Hello Dave!"
          timeStamp="11:00am"
          isAppended={false}
        />

        <VCMessageBubble
          message={"recieved"}
          text="It is a pleasure meeting you."
          timeStamp="11:00am"
          isAppended={false}
        />
        <VCMessageBubble
          message={"recieved"}
          text="Thank you very much joines"
          timeStamp="11:12am"
          isAppended={true}
        />
        <VCMessageBubble
          message={"recieved"}
          text="I am happy to meet you too"
          timeStamp="11:13am"
          isAppended={true}
        />
      </div>
    </div>
  );
}
