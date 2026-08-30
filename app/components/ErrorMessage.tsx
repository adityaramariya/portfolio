import Button from "./ui/button/button";

type ErrorMessageProps = {
  message?: string;
  onRetry?: () => void;
};

const ErrorMessage = ({
  message = "something went wrong",
  onRetry,
}: ErrorMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 tex-center">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      {/* <p className="mt-2 text-gray-500">{message}</p> */}

      {onRetry && (
        <div className="mt-4">
          <Button label="Try again" onClick={onRetry} />
        </div>
      )}
    </div>
  );
};

export default ErrorMessage;
