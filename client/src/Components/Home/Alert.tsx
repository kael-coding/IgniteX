type AlertProps = {
  message: string;
  onClose: () => void;
};

export default function Alert({ message, onClose }: AlertProps) {
  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between text-red-600 max-w-md w-full bg-red-600/10 h-12 shadow-lg rounded-lg">
      {/* Left colored bar */}
      <div className="h-full w-1.5 bg-red-600 rounded-l-lg"></div>

      {/* Message and icon */}
      <div className="flex items-center px-3">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="icon line"
        >
          <path
            style={{
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 1.95,
            }}
            d="M11.95 16.5h.1"
          />
          <path
            d="M3 12a9 9 0 0 1 9-9h0a9 9 0 0 1 9 9h0a9 9 0 0 1-9 9h0a9 9 0 0 1-9-9m9 0V7"
            style={{
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 1.5,
            }}
          />
        </svg>
        <p className="text-sm ml-2">{message}</p>
      </div>

      {/* Close button */}
      <button
        type="button"
        aria-label="close"
        onClick={onClose}
        className="active:scale-90 transition-all mr-3"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
