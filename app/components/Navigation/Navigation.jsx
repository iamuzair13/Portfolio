"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, ChevronRight, ArrowRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavigationMenuContent } from "@radix-ui/react-navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Capabilities from "./capabilities";
import Solutions from "./solutions";
import Company from "./company";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WSButton from "@/app/UI/WSButton/WSButton";

export default function Navigation() {
  const [showTabs, setShowTabs] = useState(true);
  const [showContent, setShowContent] = useState(false);

  function handleShowTabs() {
    setShowTabs(false);
    setShowContent(true);
  }

  return (
    <nav className="w-full   sticky flex flex-row justify-center pr-[5%] pl-[4%] top-0 z-50 bg-black bg-cover bg-end bg-no-repeat  text-white">
      <div className="container  flex items-center flex-row justify-between  ">
        {/* Logo */}
        <div className="w-[20%] max-lg:w-[50%] ">
          <Link href={"/"}>
            <Avatar className=" w-full h-24   rounded-none">
              <AvatarImage
                src="/Logos/123.png"
                alt="Logo"
                className="object-cover"
              />
            </Avatar>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 w-[80%] justify-center">
          <NavigationMenu>
            <NavigationMenuList className="  flex flex-row w-full  justify-between items-center xl:gap-15 lg:gap-8 ">
              <NavigationMenuItem className={"group"}>
                <NavigationMenuTrigger
                  className={
                    "group-hover:text-gray-400 text-sm bg-transparent hover:bg-transparent lg:text-[14px] xl:text-[14px]	z-[100]"
                  }
                >
                  Services
                </NavigationMenuTrigger>

                <NavigationMenuContent className="min-w-[20rem] w-[50rem] bg-white shadow p-4 flex gap-8">
                  <Capabilities />
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* <NavigationMenuItem className={"group"}>
                <NavigationMenuTrigger
                  className={
                    "group-hover:text-gray-400 text-sm font-semibold	bg-transparent hover:bg-transparent lg:text-[10px] xl:text-[14px]"
                  }
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[20rem] w-[40rem] bg-white shadow p-4">
                  <Solutions />
                </NavigationMenuContent>
              </NavigationMenuItem> */}

              {/* <NavigationMenuItem className={"group"}>
                <NavigationMenuLink
                  className={
                    "group-hover:text-gray-400 text-sm font-semibold lg:text-[10px] xl:text-[14px]	"
                  }
                  asChild
                >
                  <Link href="#">Client Stories</Link>
                </NavigationMenuLink>
              </NavigationMenuItem> */}

              <NavigationMenuItem className={"group"}>
                <NavigationMenuLink
                  className={
                    "group-hover:text-gray-400 text-sm 	lg:text-[14px] xl:text-[14px]"
                  }
                  asChild
                >
                  <Link href="/blog">Blog</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* <NavigationMenuItem className={"group"}>
                <NavigationMenuTrigger
                  className={
                    "group-hover:text-gray-400 text-sm 	bg-transparent hover:bg-transparent  lg:text-[14px] xl:text-[14px]"
                  }
                >
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[20rem] w-[40rem] bg-white shadow p-4">
                  <Company />
                </NavigationMenuContent>
              </NavigationMenuItem> */}

              <NavigationMenuItem className={"group"}>
                <NavigationMenuLink
                  className={
                    "group-hover:text-gray-400 text-sm 	lg:text-[14px] xl:text-[14px]"
                  }
                  asChild
                >
                  <Link href="/blog">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className={"group"}>
                <NavigationMenuLink
                  className={
                    "group-hover:text-gray-400 text-sm 	lg:text-[14px] xl:text-[14px]"
                  }
                  asChild
                >
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block sm:w-[160px] md:w-[200px] flex flex-row justify-center w-[20%] ">
          <Link href={"/contact/sales"}>
            <WSButton
              value="Book Intro Call"
              icon={
                <ChevronRight className="absolute inset-0 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
              }
              hovericon={
                <ArrowRight className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              }
            />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden px-4">
          <Sheet>
            <SheetTrigger
              onClick={() => {
                setShowTabs(true);
                setShowContent(false);
              }}
            >
              <Menu />
            </SheetTrigger>
            <SheetContent className={"py-2 w-full"}>
              <Tabs>
                <TabsList className="w-full border-none shadow-none ">
                  {showTabs && (
                    <div className="flex flex-col w-full space-y-2 mt-70">
                      <TabsTrigger
                        value="capabilities"
                        className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-md border-none shadow-none"
                      >
                        <span onClick={handleShowTabs}>Services</span>
                        <ChevronRight className="w-4 h-4" />
                      </TabsTrigger>

                      {/* <TabsTrigger
                        value="solutions"
                        className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-md border-none shadow-none"
                      >
                        <span onClick={handleShowTabs}>Solutions</span>
                        <ChevronRight className="w-4 h-4" />
                      </TabsTrigger> */}

                      <div className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <span>Blog</span>
                      </div>
                      <div className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <span>About</span>
                      </div>
                      <div className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <span>Contact</span>
                      </div>

                      {/* <TabsTrigger
                        value="company"
                        className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-md border-none shadow-none"
                      >
                        <span onClick={handleShowTabs}>Company</span>
                        <ChevronRight className="w-4 h-4" />
                      </TabsTrigger> */}
                    </div>
                  )}
                </TabsList>

                {showContent && (
                  <div>
                    <Button
                      onClick={() => {
                        setShowTabs(true);
                        setShowContent(false);
                      }}
                      className="max-md:w-full bg-white text-black px-4 "
                    >
                      Back
                    </Button>
                    <TabsContent value="capabilities">
                      <Capabilities />
                    </TabsContent>
                    <TabsContent value="solutions">
                      <Solutions />
                    </TabsContent>
                    <TabsContent value="company">
                      <Company />
                    </TabsContent>
                  </div>
                )}
              </Tabs>
              {/* <div className="md:hidder">
                <Button className="bg-[#0a49eb] hover:bg-[#0f3bbe]">
                  Book Intro Call
                </Button>
              </div> */}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
