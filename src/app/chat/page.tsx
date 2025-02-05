import ChatCard from "@/components/Chat/ChatCard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ChatMessageContainer from "@/components/Chat/ChatMessageContainer";

export const metadata: Metadata = {
  title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

const ChatPage = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-12 gap-1">
        <ChatCard />
        <ChatMessageContainer />
      </div>
    </DefaultLayout>
  );
};

export default ChatPage;
