import { getServerSession } from "next-auth";
import React from "react";
import { SignInButton } from "./sign-in-button";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";

import BigNav from "./big-nav";
import { NavContainer } from "@/styles/style";
import { SignOutButton } from "./sign-out-button";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <NavContainer>
      <BigNav />
      {session ? <SignOutButton /> : <SignInButton />}
    </NavContainer>
  );
};

export default Navbar;
