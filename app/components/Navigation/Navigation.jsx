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
    <nav className="w-full sticky px-[5%] top-0 z-50 bg-black bg-cover bg-end bg-no-repeat  text-white">
      <div className="container mx-auto my-0 flex items-center  justify-between min-h-[100px]   py-8">
        {/* Logo */}
        <div className="flex items-center  max-lg:px-2 w-auto max-w-[300px]  pt-4 ">
          <Avatar className="rounded-none w-[250px] flex items-start justify-end ">
            <AvatarImage
              src="/Logos/final-logo-2ND-WHITE.png"
              alt="Logo"
              className="w-full h-full object-cover invert  brightness-0 " 
            />
          </Avatar>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className=" flex flex-row items-center gap-12 ">
              <NavigationMenuItem className={"group"}>
                <NavigationMenuTrigger
                  className={
                    "group-hover:text-gray-400 text-sm font-semibold bg-transparent hover:bg-transparent  text-[14px]	"
                  }
                >
                  Capabilities
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[20rem] w-[40rem] bg-white shadow p-4 flex gap-8">
                  <Capabilities />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className={"group"}>
                <NavigationMenuTrigger
                  className={
                    "group-hover:text-gray-400 text-sm font-semibold	bg-transparent hover:bg-transparent   text-[14px]"
                  }
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[20rem] w-[40rem] bg-white shadow p-4">
                  <Solutions />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className={"group"}>
                <NavigationMenuLink
                  className={
                    "group-hover:text-gray-400 text-sm font-semibold   text-[14px]	"
                  }
                  asChild
                >
                  <Link href="#">Client Stories</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className={"group"}>
                <NavigationMenuLink
                  className={
                    "group-hover:text-gray-400 text-sm font-semibold	   text-[14px]"
                  }
                  asChild
                >
                  <Link href="#">Blog</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className={"group"}>
                <NavigationMenuTrigger
                  className={
                    "group-hover:text-gray-400 text-sm font-semibold	bg-transparent hover:bg-transparent   text-[14px]"
                  }
                >
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[20rem] w-[40rem] bg-white shadow p-4">
                  <Company />
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <WSButton
            value="Book Intro Call"
            icon={
              <ChevronRight className="absolute inset-0 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
            }
            hovericon={
              <ArrowRight className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
            }
          />
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
                        <span onClick={handleShowTabs}>Capabilities</span>
                        <ChevronRight className="w-4 h-4" />
                      </TabsTrigger>

                      <TabsTrigger
                        value="solutions"
                        className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-md border-none shadow-none"
                      >
                        <span onClick={handleShowTabs}>Solutions</span>
                        <ChevronRight className="w-4 h-4" />
                      </TabsTrigger>

                      <div className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <span>Client Stories</span>
                      </div>

                      <div className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <span>Blogs</span>
                      </div>

                      <TabsTrigger
                        value="company"
                        className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-md border-none shadow-none"
                      >
                        <span onClick={handleShowTabs}>Company</span>
                        <ChevronRight className="w-4 h-4" />
                      </TabsTrigger>
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
