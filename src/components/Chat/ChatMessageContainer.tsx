import Link from "next/link";
import Image from "next/image";
import { Chat } from "@/types/chat";
import TextEditor from "@/components/TextEditor/TextEditor";

const chatData: Chat[] = [
  {
    avatar: "/images/user/user-01.png",
    name: "Devid Heilo",
    text: "How are you?",
    time: 12,
    textCount: 3,
    dot: 3,
  },
  {
    avatar: "/images/user/user-02.png",
    name: "Henry Fisher",
    text: "Waiting for you!",
    time: 12,
    textCount: 0,
    dot: 1,
  },
  {
    avatar: "/images/user/user-04.png",
    name: "Jhon Doe",
    text: "What's up?",
    time: 32,
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "/images/user/user-05.png",
    name: "Jane Doe",
    text: "Great",
    time: 32,
    textCount: 2,
    dot: 6,
  },
  {
    avatar: "/images/user/user-01.png",
    name: "Jhon Doe",
    text: "How are you?",
    time: 32,
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "/images/user/user-03.png",
    name: "Jhon Doe",
    text: "How are you?",
    time: 32,
    textCount: 3,
    dot: 6,
  },
  {
    avatar: "/images/user/user-05.png",
    name: "Jane Doe",
    text: "Great",
    time: 32,
    textCount: 2,
    dot: 6,
  },
  {
    avatar: "/images/user/user-01.png",
    name: "Jhon Doe",
    text: "How are you?",
    time: 32,
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "/images/user/user-03.png",
    name: "Jhon Doe",
    text: "How are you?",
    time: 32,
    textCount: 3,
    dot: 6,
  },
];

const ChatMessageContainer = () => {
  return (
    <div className="relative col-span-9 flex h-[85vh] flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">

      <h4 className="sticky top-0 z-10 w-full bg-white px-2 py-2 text-xl font-semibold text-black shadow-sm dark:text-white">
        Devid Heilo
      </h4>
      <div className="flex-1 overflow-y-auto px-2 py-3">
        {chatData.map((chat, key) => (
          <div
            className="flex items-center px-4 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
          >
            <div className="relative h-8 w-8  rounded-full">
              <Image
                src={chat.avatar}
                alt="User"
                fill
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>

            <div className="ml-4 flex flex-1 items-center justify-between">
              <div>
                <h6 className="text-sm font-medium text-black dark:text-white">
                  {chat.name}
                </h6>
                <p className="text-xs text-black dark:text-white">
                  {chat.text}{" "}
                  <span className="text-xs"> · {chat.time} min</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute transform -translate-y-16 -bottom-4 z-10 w-full bg-white">
        <TextEditor />
      </div>
    </div>
  );
};

export default ChatMessageContainer;
