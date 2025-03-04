import Link from "next/link";
import AgentPulse from "./AgentPulse";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 left-0 right-0 px-4 md:px-0 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="md:container lg:px-10 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <AgentPulse size="small" />
            <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              AgentTube
            </h1>
          </Link>

          <div className="flex items-center gap-4">
            {/* Ensure "Manage Plan" is only visible when signed in */}
            <SignedIn>
              <Link href="/manage-plan">
                <Button
                  variant="outline"
                  className="mr-4 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text"
                >
                  Manage Plan
                </Button>
              </Link>

              <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full border bg-blue-100 border-blue-200">
                <UserButton />
              </div>
            </SignedIn>

            {/* Show "Sign In" only when signed out */}
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  className="mr-4 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text"
                >
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
