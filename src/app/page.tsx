"use client";
import { Header } from "@/components/Header";
import hydra from "@/hydra-client";
import { HydraChat } from "hydra-ai-backup";

const Page = () => {
  return (
    <div className="container mx-auto px-5 mb-10">
      <Header />
      <HydraChat
        hydraClient={hydra}
        initialMessages={[
          {
            sender: "Hydra",
            message: `I am a Hydra-powered AI agent`,
            type: "text",
          },
        ]}
        inputTextColor="white"
      />
    </div>
  );
};

export default Page;
