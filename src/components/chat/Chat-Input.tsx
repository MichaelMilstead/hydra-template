// ToDo: This should be in the component library.

export const HydraChatInput: React.FC<{
  inputMessage: string;
  setInputMessage: (message: string) => void;
  handleSendMessage: (message: string) => void;
  inputPlaceholder?: string;
}> = ({
  inputMessage,
  setInputMessage,
  handleSendMessage,
  inputPlaceholder = "message hydraai",
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage(inputMessage);
      setInputMessage(""); // Clear the input after submission
    }
  };

  return (
    <div className="flex items-center rounded-lg p-2 m-2 bottom-4 left-0 right-0 w-full max-w-full mx-auto">
      <input
        type="text"
        placeholder={inputPlaceholder}
        className="flex-grow bg-transparent placeholder-gray-500 outline-none"
        onChange={(e) => setInputMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        value={inputMessage}
      />
      <div className="flex ml-2">
        <SendIcon
          className="w-3 h-3 cursor-pointer button"
          onClick={() => {
            handleSendMessage(inputMessage);
            setInputMessage("");
          }}
        />
      </div>
    </div>
  );
};

export default function SendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={props.onClick}
    >
      <path d="M2 12h20" />
      <path d="M12 2l10 10-10 10" />
    </svg>
  );
}
