import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DirectMessage } from "@/model/direct-message";
import { useState } from "react";

interface SendMessageFormProps {
  message: DirectMessage;
}

export default function SendMessageForm({ message }: SendMessageFormProps) {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [messageText, setMessageText] = useState(message.message);

  const handleSendMessage = () => {
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 500); // Simulate delay for sending message
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSendMessage();
  };

  return (
    <Card className="w-full max-w-md mx-5 min-w-64">
      {!isSent && (
        <CardHeader>
          <CardTitle>Send Message</CardTitle>
          <CardDescription>
            Send a message to <span className="font-medium">{message.to}</span>
          </CardDescription>
        </CardHeader>
      )}
      <CardContent>
        {isSent ? (
          <div className="text-center h-full w-full flex justify-center items-center">
            Sent!
          </div>
        ) : (
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message..."
                defaultValue={message.message}
                className="min-h-[150px]"
                onChange={(e) => setMessageText(e.target.value)}
              />
            </div>
            <Button type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
