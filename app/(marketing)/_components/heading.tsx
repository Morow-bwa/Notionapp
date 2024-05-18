"use client"

import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/spinner"

export const Heading = () => {
    const {  isAuthenticated, isLoading } = useConvexAuth();

    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Documents, & Plans. Unifed. Welcome to 
                <span className="underline"> Yotion!</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Yotion is the connected workspace where <br />
                better, faster work happens.
            </h3>
            {isLoading && (
                <div>
                <Spinner size="lg"/>
                </div>
            )}
            {isAuthenticated && !isLoading && (
                <Button>
                    Join to Yotion
                        <ArrowRight className="h-4 w-4 ml-2"/>
                </Button>
            )}
        </div>
    )
}