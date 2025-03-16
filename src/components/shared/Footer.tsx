import { Box, Container, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import logo from "@/../public/Logo.png";
import Link from "next/link";
import { linkLists } from "@/constants/LinkLists";

const Footer = () => {
  return (
    <div className="bg-[#1E1941]">
      <Container>
        {/* Top side */}
        <div>
          <Box>
            <Image src={logo} alt="Kith Financial Logo" />
            <Text as="p" className="text-white">
              Using an admin dashboard has never been easier thanks to Kith
              Financial.
            </Text>
          </Box>

          <Box className="*:text-white">
            <Heading as="h4" size="5">
              Quick Access
            </Heading>
            <ul>
              {linkLists.map((li) => {
                return (
                  <li key={li.name}>
                    <Link href={li.url}>{li.name}</Link>
                  </li>
                );
              })}
            </ul>
          </Box>

          <Box className="*:text-white">
            <Heading as="h4" size="5">
              Questions ?
            </Heading>
            <Link href="facebook/Kith Financial.com" className="underline">
              Kith Financial
            </Link>
          </Box>
        </div>

        {/* Bottom side */}
        <Box></Box>
      </Container>
    </div>
  );
};

export default Footer;
