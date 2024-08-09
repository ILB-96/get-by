"use client";

import { useTransition } from "react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Icons } from "../icons";

export const SignOutButton = () => {
  const [isPending, startTransition] = useTransition();

  const handleSignOut = () => {
    startTransition(async () => {
      await signOut();
    });
  };

  return (
    <Button variant="outline" onClick={handleSignOut} disabled={isPending}>
      {isPending && <Icons.Loader />}
      Sign out
    </Button>
  );
};
