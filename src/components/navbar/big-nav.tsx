"use client";
import React from "react";
import Link from "next/link";
import { navItems } from "./config";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { LogoLink, NavContent } from "@/styles/style";
import Image from "next/image";

const BigNav = () => {
  const pathname = usePathname();

  return (
    <NavContent>
      <LogoLink href="/">
        <Image src="/logo.png" alt="getby logo" width={700} height={405} />
      </LogoLink>
      {navItems.map((item) => {
        return (
          <Button key={item.name} variant="link" asChild>
            <Link
              href={item.href}
              className={pathname === item.href ? "bg-surface" : ""}
            >
              {item.name}
            </Link>
          </Button>
        );
      })}
    </NavContent>
  );
};

export default BigNav;
