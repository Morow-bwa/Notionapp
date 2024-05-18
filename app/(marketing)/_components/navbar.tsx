"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

import { SignInButton, UserButton } from "@clerk/clerk-react";

import { cn } from "@/lib/utils";
import Link from "next/link";

import { Logo } from "./logo";
import { useConvexAuth } from "convex/react";


export const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth()
    const scrolled = useScrollTop();

    return (
        <div className={cn("z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
        )}>
            <Logo />
            <div className="md:ml-aut0 md:justify-end justify-between w-full flex items-center gap-x-2">
                {isLoading && (
                    <Spinner />
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                    <SignInButton mode="modal">
                        <Button variant="ghost" size="sm">
                            Log in
                        </Button>
                    </SignInButton>
                    <SignInButton mode="modal">
                        <Button size="sm">
                            Get Yotion free
                        </Button>
                    </SignInButton>
                    </>
                )}
                {isAuthenticated && !isLoading && (
                    <>
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/documents">
                            Enter Yotion
                        </Link>
                    </Button>
                    <UserButton 
                    afterSignOutUrl="/"
                    />
                    </>
                )}
                <ModeToggle />
            </div>
        </div>
    );
};