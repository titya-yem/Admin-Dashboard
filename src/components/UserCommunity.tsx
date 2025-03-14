import { Box, Container, Text } from "@radix-ui/themes";
import Image from "next/image";
import communityImage from "@/../public/community-image.png";

const UserCommunity = () => {
  return (
    <Box className="mt-24 md:mt-28 py-6 bg-[#DBF0FF]">
      <Container>
        <div className="flex justify-between items-center gap-4">
          {/* Left Side */}
          <Image
            src={communityImage}
            alt="Kith Financial community image"
            className=""
          />

          {/* Right Side */}
          <Box className="w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl w-[260px] md:w-[450px] lg:w-[680px] text-center font-bold">
              Active community of users
            </h1>
            <Text as="p" className="text-sm lg:text-base pt-6 pb-2 md:pl-26">
              Meet the fastest and most popular admin dashboard templates
              available and fit for your choice.
            </Text>
          </Box>

          <Box></Box>
        </div>
      </Container>
    </Box>
  );
};

export default UserCommunity;
