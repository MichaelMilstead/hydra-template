"use client";
import { Header } from "@/components/Header";
import hydra from "@/hydra-client";
import { HydraChat } from "hydra-ai-backup";

const Page = () => {
  return (
    <div className="container mx-auto px-5 mb-10 flex flex-col justify-center items-center">
      <Header />
      <div className="flex-grow h-full overflow-y-auto  text-xs w-full max-w-2xl rounded-lg ">
        <HydraChat
          hydraClient={hydra}
          initialMessages={[
            {
              sender: "Hydra",
              message: `I am a Hydra-powered AI agent.`,
              type: "text",
            },
          ]}
          inputTextColor="white"
          loadingIconColor="gray"
          aiIconColor="#70bfae"
        />
      </div>
    </div>
  );
};

export default Page;
