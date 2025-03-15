import { Box, Section, Text } from "@radix-ui/themes";
import Image from "next/image";

interface featuresProps {
  heading: string;
  image: string;
  text: string;
}

const UserFeatures = (featuresProps: featuresProps) => {
  const { heading, image, text } = featuresProps;

  return (
    <Box className="w-[360px]">
      <Box className="shadow p-6 rounded-md bg-white dark:bg-gray-800">
        <Box>
          <div className="flex items-center gap-8">
            <Image
              src={image}
              alt="Saving Plan"
              width={50}
              height={50}
              unoptimized
              className="p-2 rounded-full bg-gray-200"
            />
            <h2 className="text-xl md:text-2xl font-bold">{heading}</h2>
          </div>
          <Text as="p" className="text-sm lg:text-base pl-20 mt-2 ">
            {text}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default UserFeatures;
