import Link from "next/link";

import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 left-0 right-0 px-4 md:px-0 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
      <div className="md:container lg:px-10 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
           
            <h1 className="font-bold text-white text-2xl">AgentTube</h1>
          </Link>

          <div className="flex items-center gap-4">
            {/* Ensure "Manage Plan" is only visible when signed in */}
            <SignedIn>
              <Link href="/manage-plan">
                <Button
                 
                  className="bg-blue-600 hover:bg-blue-700 text-white border border-blue-500"
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
                  className="mr-4 text-white bg-blue-600"
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
