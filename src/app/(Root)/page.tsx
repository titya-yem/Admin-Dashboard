import { Box, Container, Text } from "@radix-ui/themes";
import Image from "next/image";
import phone from "@/../public/svg/Phone.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import heroImage from "@/../public/hero-image.png";
import Features from "@/components/Features";
import UserCommunity from "@/components/UserCommunity";
import Support from "../../components/Support";

const Home = () => {
  // Get user's name from Clerk and push user to
  // dashboard if subscripe if not push to pricing page

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.2)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <Container>
        <main className="flex flex-col-reverse md:flex-row justify-between items-center dark:bg-gray-900">
          {/* Left side */}
          <Box className="w-full md:w-1/2 lg:space-x-4 px-4 md:px-0">
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-center md:text-left md:pl-4 pb-6 md:pt-10 lg:pt-20 font-bold text-[#36CEF2]">
              Kith Financial Powered-by AI &{" "}
              <span className="text-[#007ACC]">
                infrastructure to grow your revenue
              </span>
            </h1>
            <Text
              as="p"
              className="text-sm lg:text-base text-center md:text-left md:pl-4 "
            >
              Take control of your finances with Kith Financial. Our AI-driven
              savings plan analyzes your expenses, generates a personalized
              strategy, and provides detailed reports—all in one place. Start
              saving smarter today!
            </Text>
            <div className="flex flex-col md:flex-row justify-between items-center p-5 rounded-md mt-4 bg-[#60cbe6] gap-x-4">
              <div className="flex justify-center items-center gap-x-2 mb-4 md:mb-0">
                <Image src={phone} alt="phone number" width={25} />
                <Text as="p" className="text-base font-semibold text-white">
                  (+1) 123-456-7890
                </Text>
              </div>
              <Link href="/Dashboard" passHref>
                <Button
                  variant="ghost"
                  className="px-8 py-5 text-sm md:text-base rounded-full duration-200 text-white bg-[#007ACC] hover:text-[#007ACC] cursor-pointer"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </Box>

          {/* Right side */}
          <Box>
            <Image
              src={heroImage}
              alt="Personal dashboard powered-by AI"
              className="md:absolute md:top-18 md:right-0 min-[1650px]:!right-2/12 w-[500px] md:w-[350px] lg:w-[480px] xl:w-[500px] pt-[1px]"
            />
          </Box>
        </main>
      </Container>

      {/* Other components in Home page */}
      <Features />
      <UserCommunity />
      <Support />
    </>
  );
};

export default Home;
