import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { HydraClient } from "hydra-ai";
import HydraChatMessage from "@/components/chat/Chat-Message";
import { HydraMessageHistory } from "@/components/chat/Message-History";

interface HydraChatProps extends React.HTMLAttributes<HTMLDivElement> {
  hydraClient: HydraClient;
  initialMessages: HydraChatMessage[];
  aiName?: string;
  handleComponent?: (component: React.ReactElement) => any;
}

export const useHydraChat = (
  // TODO: This should be in the package imo, Magán
  hydra: HydraClient,
  initialMessages: HydraChatMessage[],
  aiName: string = "Hydra",
  handleComponent?: (component: React.ReactElement) => any
) => {
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageHistory, setMessageHistory] = useState<HydraChatMessage[]>([
    ...initialMessages,
  ]);

  const handleSendMessage = async (text: string) => {
    if (!text) return;
    const userMessage: HydraChatMessage = {
      sender: "Input",
      message: text,
      type: "text",
    };
    setMessageHistory((prevHistory) => [...prevHistory, userMessage]);
    await processUserMessage(text);
  };

  const processUserMessage = async (message: string) => {
    setIsLoading(true);
    const response = await hydra.generateComponent(
      `previous messages are ${JSON.stringify(
        messageHistory
      )} latest message: ${message}`
    );

    if (response.component && handleComponent) {
      handleComponent(response.component);
    }

    const hydraMessage: HydraChatMessage = {
      component: response.component,
      sender: aiName,
      type: "component",
      message: response.message,
    };
    setIsLoading(false);
    setMessageHistory((prevHistory) => [...prevHistory, hydraMessage]);
  };

  return {
    inputMessage,
    setInputMessage,
    isLoading,
    messageHistory,
    handleSendMessage,
  };
};

const HydraChatComponent = React.forwardRef<HTMLDivElement, HydraChatProps>(
  // ToDo: This should be in the component library.
  (
    {
      className,
      hydraClient: hydra,
      initialMessages,
      aiName = "Hydra",
      handleComponent,
      ...props
    },
    ref
  ) => {
    const { isLoading, messageHistory } = useHydraChat(
      hydra,
      initialMessages,
      aiName,
      handleComponent
    );

    return (
      <div
        ref={ref}
        className={cn("relative flex flex-col p-4 h-full w-full", className)}
        {...props}
      >
        <div className="flex-grow overflow-auto mb-20">
          <HydraMessageHistory
            messages={messageHistory}
            hideComponent={handleComponent ? true : false}
          />
          {isLoading && (
            <div className="text-center p-4">
              <SpokeSpinner />
            </div>
          )}
        </div>
      </div>
    );
  }
);

HydraChatComponent.displayName = "HydraChat";

interface SpokeSpinnerProps {
  color?: string;
}

export default function SpokeSpinner({ color = "" }: SpokeSpinnerProps) {
  return (
    <div className="w-4 h-4">
      <svg
        stroke={color || "white"}
        strokeWidth="1"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        color={color || "white"}
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 animate-spin"
      >
        <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"></path>
      </svg>
    </div>
  );
}

export { HydraChatComponent as HydraChat };
