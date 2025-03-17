import { Box, Container, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import logo from "@/../public/Logo.png";
import Link from "next/link";
import { linkLists } from "@/constants/LinkLists";
import { Button } from "../ui/button";
import sendImage from "@/../public/svg/Send.svg";
import footerLine from "@/../public/svg/footer-line.svg";

const Footer = () => {
  return (
    <div className="bg-[#1E1941]">
      <Container>
        {/* Top side */}
        <div className="flex flex-col md:flex-row justify-between mt-16 px-2">
          <Box className="space-y-8 w-1/5">
            <Image src={logo} alt="Kith Financial Logo" width={150} />
            <Text as="p" className="text-sm md:text-base text-white">
              Using an admin dashboard has never been easier thanks to Kith
              Financial.
            </Text>
          </Box>

          <Box className="*:text-white">
            <Heading as="h4" size="5" className="pb-2">
              Quick Access
            </Heading>
            <ul>
              {linkLists.map((li) => {
                return (
                  <li key={li.name} className="pt-2 underline text-center">
                    <Link href={li.url} className="text-sm md:text-base">
                      {li.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Box>

          <Box className="*:text-white">
            <Heading as="h4" size="5" className="pb-6">
              Questions ?
            </Heading>
            <Link
              href="facebook/Kith Financial.com"
              className="text-sm md:text-base underline"
            >
              Kith Financial
            </Link>
            <div className="flex justify-center items-center pt-4">
              <input
                type="text"
                placeholder="Email Address"
                className="text-sm md:text-base pl-2 py-3 rounded-l-lg text-black bg-white"
              />
              <Button
                variant="ghost"
                className="py-6 rounded-l-none bg-[#3223DA] hover:bg-[#2345da] cursor-pointer"
              >
                <Image src={sendImage} alt="Send us an email" width={20} />
              </Button>
            </div>
          </Box>
        </div>

        {/* Footer Line */}
        <Image src={footerLine} alt="footer line" className="mt-10" />

        {/* Bottom side */}
        <Text as="p" className="pt-8 pl-2 text-sm text-gray-300">
          Copyright © 2024-2025 Kith Financial. All rights reserved. Privacy
          Policy
        </Text>
      </Container>
    </div>
  );
};

export default Footer;
