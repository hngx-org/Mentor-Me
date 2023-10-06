import MessageCard from "./Message";
import MessageBubble from "./MessageBubble";
import MessageUserProfile from "./UserProfile";

type MessagesLayoutProps = {
  children: React.ReactNode;
};

export default function MessagesLayout() {
  return (
    <div className="h-[100vh] max-h-[100vh] w-[100%] px-4 pt-4 overflow-hidden">
      <div className="flex w-[100%] justify-center h-[100%]">
        <div className="border border-b-[0] rounded-t-[8px]  w-[305px] h-[100%] over">
          <div className="p-4  flex flex-col space-y-5 items-center">
            <p> button here</p>
            <p> search input here</p>
          </div>
          <div className="overflow-scroll h-[100%] py-4">
            <MessageCard userName="Patricia Flow" />
            <MessageCard userName="Mauteen" />
            <MessageCard userName="Naomi Hyde" />
            <MessageCard userName="Grace Daniels" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
            <MessageCard userName="Nuga Olaoluwa" />
          </div>
        </div>
        <div className="p-4  flex-1 mb-10">
          <MessageUserProfile userName="Patricia flow" userId="" userImage="" />
          <div className="max-h-[80%] overflow-scroll  ">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export function MessagesBodyLayout() {
  return (
    <div className="flex w-[100%]">
      <div></div>
    </div>
  );
}
