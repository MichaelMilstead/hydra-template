"use client";
import { Header } from "@/components/Header";
import hydra, { initHydraRegistration } from "@/hydra-client";
import { HydraChat } from "hydra-ai";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    initHydraRegistration();
  }, []);

  return (
    <div className="container h-[100dvh] mx-auto px-5 pb-10 flex flex-col justify-center items-center">
      <Header />
      <div className="flex-grow min-h-[400px] overflow-y-auto text-md w-full max-w-8xl rounded-lg bg-secondary">
        <HydraChat
          hydraClient={hydra}
          initialMessages={[
            {
              sender: "Hydra",
              message: `Try asking something like "Show me users who like to hike." Hydra will figure out the correct component to use, and the data to fill it with.`,
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
