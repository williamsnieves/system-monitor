"use client";

interface Props {
  message: string;
}

function Alert({ message }: Props) {
  return (
    <div className="p-4 mb-4 bg-red-500 text-white text-center rounded-lg shadow-md animate-pulse">
      {message}
    </div>
  );
}

export default Alert;
