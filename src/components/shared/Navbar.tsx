"use client";

import { Container, Text } from "@radix-ui/themes";
import Image from "next/image";
import logo from "@/../public/Logo.png";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import menu from "@/../public/svg/menu.svg";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Price", path: "/Price" },
    { name: "Contact Us", path: "/Contact-us" },
  ];

  return (
    <header>
      <Container className="py-4 bg-white dark:bg-gray-800 shadow dark:shadow-none">
        {/* Desktop Nav */}
        <div className="flex justify-between items-center px-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image src={logo} alt="Kith Financial logo" width={150} />
            </Link>
            <div className="hidden md:block w-[1px] h-10 bg-gray-400"></div>
            <nav className="hidden md:block">
              <ul className="flex items-center gap-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`hover:font-medium hover:text-[#007ACC] ${
                        pathname === link.path
                          ? "text-[#007ACC] font-semibold"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <Button className="hidden md:block px-6 py-2 text-white bg-[#007ACC] hover:bg-[#005e9c] duration-150 cursor-pointer">
            Sign In
          </Button>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
            <SheetTrigger className="md:hidden">
              <Image
                src={menu}
                alt="toggle menu"
                width={20}
                className="dark:invert"
              />
            </SheetTrigger>
            <SheetContent className="w-2/3">
              <SheetHeader>
                <SheetTitle>
                  <Text as="p" className="text-xl font-bold text-[#007ACC]">
                    Kith Financial
                  </Text>
                </SheetTitle>
                <SheetDescription asChild>
                  <ul className="flex flex-col items-center gap-3 pt-10">
                    {navLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          href={link.path}
                          onClick={() => setIsOpen(!isOpen)}
                          className={`text-lg hover:font-medium hover:text-[#007ACC] ${
                            pathname === link.path
                              ? "text-[#007ACC] font-semibold"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}

                    <Button className="px-14 py-5 mt-10 text-base font-medium text-white bg-[#007ACC] hover:bg-[#005e9c] duration-150 cursor-pointer">
                      Sign In
                    </Button>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
