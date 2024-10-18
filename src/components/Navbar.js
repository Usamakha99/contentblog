"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './theme-button';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 bg-background/50 sticky top-0  backdrop-blur border-b z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-8">
          <div className="flex items-center justify-end w-full">
            <span className="flex items-center justify-start w-full text-xl font-bold mr-6 ">!!!!</span>

          <div className=" hidden md:flex md:space-x-8 items-center ">
  <Link
    href="/"
    className="text-white-800 hover:scale-105 hover:font-semibold transition-transform duration-300 rounded-md text-sm font-medium "  >
    Home
  </Link>
  <Link
    href="/about"
    className="text-white-800 hover:scale-105 hover:font-semibold transition-transform duration-300 rounded-md text-sm font-medium"
  >
    About
  </Link>
  <Link
    href="/blog"
    className="text-white-800 hover:scale-105 hover:font-semibold transition-transform duration-300 rounded-md text-sm font-medium"
  >
    Blog
  </Link>
  <Link
    href="/contact"
    className="text-white-800 hover:scale-105 hover:font-semibold transition-transform duration-300 rounded-md text-sm font-medium"
  >
    Contact
  </Link>

  <div className="flex item-center ">
    <Button className="mx-1 text-xs" variant="outline">Login</Button>
    <Button className="mx-1 text-xs" variant="outline">SignUp</Button>
    <ModeToggle />
  </div>
</div>
          </div>
          <div className="-mr-2 flex md:hidden">
          <span className= "mx-2"> <ModeToggle /></span>
            <Sheet>
              <SheetTrigger>

                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>

              </SheetTrigger>
              
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-bold my-4">Blogistan</SheetTitle>
                  <SheetDescription>

                    <div className=" flex flex-col gap-6">
                      <Link href="/" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                        Home
                      </Link>
                      <Link href="/about" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                        About
                      </Link>
                      <Link href="/blog" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                        Blog
                      </Link>
                      <Link href="/contact" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                        Contact
                      </Link>

                      <div className="">
                        <Button className="mx-1 text-xs" variant="outline">Login</Button>
                        <Button className="mx-1 text-xs" variant="outline">SignUp</Button>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;
