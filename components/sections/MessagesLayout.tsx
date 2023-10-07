import Button from "@/components/ui/Button";

import MessageBubble from "../ui/messages/MessageBubble";
import MessageUserProfile from "../ui/messages/UserProfile";
import MessageCard from "../cards/MessageCard";
import {
  AddIconCircle,
  DocumentIcon,
  EmojiIcon,
  MicrophoneIcon,
} from "@/public/assets/icons";

// adjust height when nav and sidebar availabe
type MessagesLayoutProps = {
  children: React.ReactNode;
};

export default function MessagesLayout() {
  return (
    <div className="md:h-[83dvh]  w-[100%] pl-4 pt-4  overflow-clip lg:h-[90dvh]">
      <div className="flex w-[100%] justify-center h-[100%]">
        <div className="border border-b-[0] rounded-t-[8px]  w-[305px] h-[100%] pb-10">
          <div className="py-5  flex flex-col space-y-5 items-center  w-[100%] ">
            <Button
              variant="primary"
              type="button"
              title="Write Message"
              className=" px-2 py-2"
            />
            <p> search input here</p>
          </div>
          <div className="overflow-y-scroll hide-message-layout-scroll h-[85%]">
            <MessageCard userName="Patricia Flow" />
            <MessageCard userName="Mauteen" />
            <MessageCard userName="Naomi Hyde" />
            <MessageCard userName="Grace Daniels" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
          </div>
        </div>
        <div className="flex flex-col space-between h-[100%]">
          <div className="px-4">
            <MessageUserProfile
              userName="Patricia flow"
              userId=""
              userImage=""
            />
          </div>

          <div className=" hide-message-layout-scroll overflow-y-scroll px-4 ">
            <MessageBubble
              message={"sent"}
              timeStamp="2:35pm"
              text="   In our next session, I will review your resume and your cv. So
            before our next session, edit those aspects I pointed out so that we
            can go over it together"
            />
            <MessageBubble
              message={"sent"}
              text="You have got this, keep going and do not doubt your self at any point."
              timeStamp="2:37pm"
            />
            <MessageBubble message={"recieved"} text="thank you" />
            <MessageBubble
              message={"recieved"}
              text="Alright, Patricia. I will do that."
              timeStamp="2:37pm"
            />
            <MessageBubble
              message={"sent"}
              timeStamp="2:35pm"
              text="   In our next session, I will review your resume and your cv. So
            before our next session, edit those aspects I pointed out so that we
            can go over it together"
            />
            <MessageBubble
              message={"sent"}
              text="You have got this, keep going and do not doubt your self at any point."
              timeStamp="2:37pm"
            />
            <MessageBubble message={"recieved"} text="thank you" />
            <MessageBubble
              message={"recieved"}
              text="Alright, Patricia. I will do that."
              timeStamp="2:37pm"
            />
            <MessageBubble
              message={"sent"}
              timeStamp="2:35pm"
              text="   In our next session, I will review your resume and your cv. So
            before our next session, edit those aspects I pointed out so that we
            can go over it together"
            />
          </div>
          <MessageLHSInput />
        </div>
      </div>
    </div>
  );
}

// switch bg-neutra to actual color when available

export function MessageLHSInput() {
  return (
    <div className="flex w-[100%] h-fit bg-[#efeff0] py-4 px-2 space-between items-center ">
      <div className="h-[38px] bg-white grow rounded-full p-4 flex items-center">
        <EmojiIcon />
        <input
          className=" mx-4 flex grow active:border-0 p-1 focus:outline-none"
          placeholder="Type here..."
        />
        <MicrophoneIcon />
      </div>
      <div className="flex items-center border:none h-[38px] space-x-4 px-4">
        <span className="p-2 bg-Neutra10 rounded-full ">
          <DocumentIcon />
        </span>
        <span className="p-2 bg-Neutra10 rounded-full ">
          <AddIconCircle />
        </span>
      </div>
    </div>
  );
}
