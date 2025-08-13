"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

import { LogInIcon, LogOutIcon, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const Header = () => {
  const { data: session, error, isPending, refetch } = authClient.useSession();

  return (
    <header className="flex items-center justify-between p-5">
      <Image src="/logo.svg" alt="BEWEAR" width={100} height={26.14} />

      <div className="flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            {session?.user ? (
              <div className="flex justify-between p-3">
                <div className="flex w-full items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={session.user.image as string | undefined}
                      />
                      <AvatarFallback>
                        {session?.user?.name.split(" ")?.[0]?.[0]}
                        {session?.user?.name.split(" ")?.[1]?.[0]}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <h3 className="font-semibold">{session?.user?.name}</h3>
                      <span className="text-muted-foreground block text-xs">
                        {session?.user?.email}
                      </span>
                    </div>
                  </div>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => authClient.signOut()}
                  >
                    <LogOutIcon />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between p-4">
                <h2 className="font-semibold">Olá. Faça seu login!</h2>
                <Button size="icon" asChild variant="outline">
                  <Link href="/authentication">
                    <LogInIcon />
                  </Link>
                </Button>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
