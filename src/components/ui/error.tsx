import React from "react";
import cx from "clsx";
interface ErrorProps {
  message: string | undefined;
  className?: string;
}

const Error = ({ message, className }: ErrorProps) => {
  if (!message) return null;
  return (
    <div className='w-full'>
      <span className={cx("text-red-700", className)}>{message}</span>
    </div>
  );
};

export default Error;
