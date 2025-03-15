import { Box, Container, Text } from "@radix-ui/themes";
import { Button } from "./ui/button";
import Image from "next/image";
import serviceImage from "@/../public/customer-service.png";

const Support = () => {
  return (
    <Container className="my-16">
      <div className="relative flex flex-col md:flex-row justify-between items-center px-4 md:gap-x-16 lg:gap-x-48 overflow-hidden md:rounded-xl py-20 md:px-20 *:text-white bg-[#5191F1]">
        {/* Background Image */}
        <Image
          src={serviceImage}
          alt="Kith Financial customer service"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30 blur-sm pointer-events-none"
        />

        {/* Left Side */}
        <Box className="space-y-4 md:space-y-6 md:w-1/2 z-10 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Issues and Support for Clients
          </h1>
          <Text as="p" className="text-sm md:text-base">
            For Kith Financial support, please visit our Facebook Page or you
            may submit a contact form, send an email, or provide suggestions.
          </Text>
        </Box>

        {/* Right Side */}
        <Box className="mt-6 md:mt-0 md:w-1/2 z-10 text-center md:text-left">
          <Text as="p" className="text-sm md:text-base">
            We try our best to provide support to the users of Kith Financial.
            Thanks to many of our users, Kith Financial has a great community
            support. We will try to respond to your issue as soon as possible.
            For a faster response, please include as much information about your
            issue as possible.
          </Text>
          <Button className="text-base md:text-lg mt-6 py-5 px-6 lg:py-6 lg:px-8 rounded-full hover:bg-white hover:text-[#5191F1] duration-200 bg-transparent border border-white cursor-pointer">
            Contact Us Via Facebook Page
          </Button>
        </Box>
      </div>
    </Container>
  );
};

export default Support;
