import React from "react";
import { useRouter } from "next/navigation";

const Button = ({ href = "/", children = "Learn More", ...props }) => {
  const router = useRouter();
  return (
    <button
      {...props}
      onClick={() => router.push(href)}
      className="mt-4 w-30 cursor-pointer rounded-lg bg-[var(--highlight)] py-2 text-center text-sm font-medium text-[var(--text-white)]"
    >
      {children}
    </button>
  );
};

export default Button;
