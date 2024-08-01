import * as React from "react";
import { cn } from "@/lib/utils";

// ToDo: This should be in the component library.

interface HydraChatMessage {
  sender: string;
  message?: string;
  type: "text" | "component";
  component?: React.ReactElement;
}

interface HydraMessageHistoryProps
  extends React.HTMLAttributes<HTMLDivElement> {
  messages: HydraChatMessage[];
  hideComponent?: boolean;
}

const HydraMessageHistory = React.forwardRef<
  HTMLDivElement,
  HydraMessageHistoryProps
>(({ className, messages, hideComponent = false, ...props }, ref) => {
  const messagesEndRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div ref={ref} className={cn("flex flex-col p-4", className)} {...props}>
      <div className="flex-grow overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="mb-6">
            <div className="flex flex-row items-start">
              <MessageIcon sender={message.sender} />
              <MessageContent message={message} />
            </div>
            {message.type === "component" &&
              !hideComponent &&
              message.component}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
});

HydraMessageHistory.displayName = "HydraMessageHistory";

const MessageIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { sender: string }
>(({ className, sender, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "h-6 w-6 min-w-[1.5rem] min-h-[1.5rem] rounded mr-4",
      sender === "Input" ? "bg-blue-300" : "bg-gray-300",
      className
    )}
    {...props}
  />
));

MessageIcon.displayName = "MessageIcon";

const MessageContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { message: HydraChatMessage }
>(({ className, message, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      message.sender === "Input" ? "text-blue-600" : "text-gray-600",
      className
    )}
    {...props}
  >
    {message.message}
  </div>
));

MessageContent.displayName = "MessageContent";

export { HydraMessageHistory, MessageIcon, MessageContent };
