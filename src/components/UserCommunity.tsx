import { Box, Container, Text, Flex } from "@radix-ui/themes";
import Image from "next/image";
import communityImage from "@/../public/community-image.png";
import { userCommunityProps } from "@/constants/UserCommunity";

const UserCommunity = ({
  userCommunityLists,
}: {
  userCommunityLists: userCommunityProps;
}) => {
  return (
    <Box className="mt-24 md:mt-28 py-10 bg-[#DBF0FF]">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Left Side */}
          <Image
            src={communityImage}
            alt="Kith Financial community image"
            className="w-full md:w-[450px] lg:w-[600px]"
          />

          {/* Right Side */}
          <div>
            <Box className="*:lg:text-left mx-auto lg:mx-4 xl:mx-auto md:w-2/3 lg:w-[85%]">
              <h1 className="text-2xl md:text-3xl lg:text-4xl w-[260px] md:w-full text-center mx-auto font-bold">
                Active community of users
              </h1>
              <Text
                as="p"
                className="text-sm lg:text-base lg:w-[90%] xl:w-[80%] pt-4 lg:pt-6 pb-4 text-center"
              >
                Meet the fastest and most popular admin dashboard templates
                available and fit for your choice.
              </Text>
            </Box>

            {/* Users reviews */}
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-6 gap-x-2">
              {userCommunityLists.map((li) => (
                <Flex
                  key={li.heading}
                  align="center"
                  gap="4"
                  className="w-[250px] h-[90px] p-2 rounded-xl bg-white"
                >
                  <Image src={li.image} alt={li.alt} />

                  <Box>
                    <h1 className="text-4xl font-bold">{li.heading}</h1>
                    <Text as="p" className="pl-1 text-gray-400">
                      {li.text}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default UserCommunity;
