import { DirectMessage } from "@/model/direct-message";
import SendMessageForm from "./send-message-form";

interface SendMessageFormListProps {
  messages: DirectMessage[];
}

export const SendMessageFormList = ({ messages }: SendMessageFormListProps) => {
  return (
    <div className=" flex flex-row overflow-auto mt-10 p-5">
      {messages.map((message) => (
        <SendMessageForm key={message.id} message={message} />
      ))}
    </div>
  );
};
