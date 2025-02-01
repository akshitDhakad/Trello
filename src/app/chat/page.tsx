import ChatCard from "@/components/Chat/ChatCard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

const ChatPage = () => {
  return (
    <DefaultLayout>
      <ChatCard />
    </DefaultLayout>
  );
};

export default ChatPage;
