"use client";
import { Header } from "@/components/Header";
import hydra from "@/hydra-client";
import { HydraChat } from "hydra-ai";

const Page = () => {
  return (
    <div className="container h-[100dvh] mx-auto px-5 pb-10 flex flex-col justify-center items-center">
      <Header />
      <div className="flex-grow min-h-[400px] overflow-y-auto text-xs w-full max-w-2xl rounded-lg bg-secondary">
        <HydraChat
          hydraClient={hydra}
          initialMessages={[
            {
              sender: "Hydra",
              message: `I am a Hydra-powered AI agent.`,
              type: "text",
            },
          ]}
          inputBackgroundColor="#343437"
          inputTextColor="white"
          loadingIconColor="gray"
          aiIconColor="#70bfae"
        />
      </div>
    </div>
  );
};

export default Page;
