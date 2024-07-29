import { Header } from "@/components/Header";
import hydra from "@/hydra-client";
import { HydraChat } from "hydra-ai";

const Page = async () => {
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
      />
    </div>
  );
};

export default Page;
