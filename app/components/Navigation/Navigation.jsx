"use client";

import {  useState } from "react";
import Link from "next/link";
import { Menu, ChevronRight, ArrowRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavigationMenuContent } from "@radix-ui/react-navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Capabilities from "./capabilities";
import Company from "./company";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WSButton from "@/app/UI/WSButton/WSButton";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Add this import

export default function Navigation() {
  const [showTabs, setShowTabs] = useState(true);
  const [showContent, setShowContent] = useState(false);
const [open, setOpen] = useState(false);

  function handleShowTabs() {
    setShowTabs(false);
    setShowContent(true);
  }

  

  return (
    <nav className="w-full sticky flex flex-row justify-center top-0 z-50 bg-black bg-cover bg-end bg-no-repeat text-white">
      <div className="grid grid-cols-12 gap-4 w-full max-lg:flex max-lg:flex-row max-lg:justify-between items-center py-4 px-[5%]">
        {/* <div className="container flex items-center flex-row justify-center"> */}
        {/* Logo */}
        <div className="col-span-3">
          <Link href={"/"}>
            <Avatar className=" w-full max-lg:w-[150px] h-24 max-lg:h-16 rounded-none">
              <AvatarImage
                src="/Logos/ProgrammersSQUAD-final-logof.png"
                alt="Logo"
                className="object-cover"
              />
            </Avatar>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="col-span-6">
          <div className="hidden lg:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="  flex flex-row w-full  justify-between items-center xl:gap-15 lg:gap-8 ">
                <NavigationMenuItem className={"group "}>
                  <NavigationMenuTrigger
                    className={
                      "group-hover:text-white text-sm bg-black hover:bg-black lg:text-[14px] xl:text-[14px]	z-[100]"
                    }
                  >
                    Services
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="min-w-[20rem] w-[56rem] bg-black text-white shadow p-4 flex gap-8">
                    <Capabilities />
                  </NavigationMenuContent>
                </NavigationMenuItem>

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

                <NavigationMenuItem className={"group"}>
                  <NavigationMenuLink
                    className={
                      "group-hover:text-gray-400 text-sm 	lg:text-[14px] xl:text-[14px]"
                    }
                    asChild
                  >
                    <Link href="/contact">About</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className={"group"}>
                  <NavigationMenuLink
                    className={
                      "group-hover:text-gray-400 text-sm 	lg:text-[14px] xl:text-[14px]"
                    }
                    asChild
                  >
                    <Link href="/contact/sales">Contact</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuViewport className="bg-black border border-purple-500 rounded-3xl shadow-lg" />
            </NavigationMenu>
          </div>
        </div>

        {/* Desktop Button */}
        <div className="col-span-3 flex justify-end">
          <div className="hidden lg:block sm:w-[160px] md:w-[200px] flex flex-row justify-center ">
            <Link href={"/contact/sales"}>
              <WSButton
                value="Book a 15-Min Call"
                icon={
                  <ChevronRight className="absolute inset-0 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
                }
                hovericon={
                  <ArrowRight className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                }
              />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden px-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              onClick={() => {
                setShowTabs(true);
                setShowContent(false);
                setOpen(true);
              }}
            >
              <Menu />
            </SheetTrigger>
            <SheetContent className={"py-2 w-full"}>
              {/* Add a visually hidden DialogTitle for accessibility */}
              <VisuallyHidden>
                <h2>Mobile Navigation Menu</h2>
              </VisuallyHidden>
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

                      <div
                        className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                        onClick={() => setOpen(false)}
                      >
                        <Link href="/blog">Blog</Link>
                      </div>
                      <div
                        className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                        onClick={() => setOpen(false)}
                      >
                        <Link href="/contact">About</Link>
                      </div>
                      <div
                        className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                        onClick={() => setOpen(false)}
                      >
                        <Link href="/contact/sales">Contact</Link>
                      </div>
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
                      <Capabilities onClose={() => setOpen(false)} />
                    </TabsContent>
                  </div>
                )}
              </Tabs>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
