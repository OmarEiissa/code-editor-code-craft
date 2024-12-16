import { SignInButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

function LoginButton({
  className,
  spanClass,
}: {
  className?: string;
  spanClass?: string;
}) {
  return (
    <SignInButton mode="modal">
      <button
        type="button"
        aria-label="Sign in"
        className={`flex items-center gap-2 px-1.5 py-1 md:px-4 md:py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 font-medium shadow-lg shadow-blue-500/20 ${className}`}
      >
        <LogIn className="w-4 h-4 transition-transform" />
        <span className={`md:block hidden ${spanClass}`}>Sign In</span>
      </button>
    </SignInButton>
  );
}
export default LoginButton;
