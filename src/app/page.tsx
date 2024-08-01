"use client";
import { Header } from "@/components/Header";
import hydra from "@/hydra-client";
import { HydraChat, useHydraChat } from "@/components/chat/Chat";
import { HydraChatInput } from "@/components/chat/Chat-Input";

const Page = () => {
  const {
    inputMessage,
    setInputMessage,
    isLoading,
    messageHistory,
    handleSendMessage,
  } = useHydraChat(hydra, [], "Hydra");

  return (
    <div className="container h-[100dvh] mx-auto px-5 pb-10 flex flex-col justify-center items-center">
      <Header />
      <HydraChat
        hydraClient={hydra}
        initialMessages={messageHistory}
        aiName="Hydra"
      />
      <HydraChatInput
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
        inputPlaceholder="Type your message here..."
      />
    </div>
  );
};

export default Page;
