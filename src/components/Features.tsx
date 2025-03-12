import { Box, Container, Section, Text } from "@radix-ui/themes";
import Image from "next/image";
import bankingImage from "@/../public/svg/banking.svg";

const Features = () => {
  return (
    <Container>
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-40 text-center font-bold">
        Our amazing features are most useful for the users
      </h1>

      <Section>
        <Box className="shadow-lg p-6 rounded-md bg-white dark:bg-gray-800">
          <Box className="bg-gray-300 p-6">
            <Image src={bankingImage} alt="Saving Plan" />
          </Box>
          <h2 className="text-2xl font-bold mt-4">Saving Plan</h2>
          <Text as="p" className="mt-2">
            AI-powered savings tailored to your goals. Track, optimize, and grow
            your finances effortlessly!
          </Text>
        </Box>
      </Section>
    </Container>
  );
};

export default Features;
