import userImage from "@/../public/svg/User.svg";
import successImage from "@/../public/svg/Financial-Success.svg";
import ratingImage from "@/../public/svg/Rating.svg";
import happyImage from "@/../public/svg/Smiling.svg";

export type userCommunityProps = {
  image: string;
  alt: string;
  heading: string;
  text: string;
}[];

export const userCommunityLists: userCommunityProps = [
  {
    image: userImage,
    alt: "Our active users",
    heading: "10,000+",
    text: "Active users",
  },
  {
    image: successImage,
    alt: "Our user report the success rate using our plateform",
    heading: "92%",
    text: "Success rate",
  },
  {
    image: ratingImage,
    alt: "Our rating by our users",
    heading: "4.8/5",
    text: "User reviews",
  },
  {
    image: happyImage,
    alt: "Our users report the happiness score when using our plateform",
    heading: "98%",
    text: "Happiness score",
  },
];
