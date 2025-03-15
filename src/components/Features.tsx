import UserFeatures from "./shared/UserFeatures";
import { Container } from "@radix-ui/themes";
import bankingImage from "@/../public/svg/banking.svg";
import expensesImage from "@/../public/svg/expenses.svg";
import reportsImage from "@/../public/svg/reports.svg";
import freeImage from "@/../public/svg/shipping.svg";
import transactionsImage from "@/../public/svg/transactions.svg";
import safetyImage from "@/../public/svg/safety.svg";

const Features = () => {
  return (
    <Container>
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-24 md:mt-40 w-[260px] md:w-[450px] lg:w-[680px] mx-auto text-center font-bold">
        Our amazing features are most useful for the users
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-7 mt-12 md:mt-14">
        <UserFeatures
          heading="Saving Plan"
          image={bankingImage}
          text="AI-powered savings tailored to your goals. Track, optimize, and grow your finances effortlessly!"
        />
        <UserFeatures
          heading="Expenses"
          image={expensesImage}
          text="Easily track and manage your spending with AI insights to optimize your savings."
        />
        <UserFeatures
          heading="Reports"
          image={reportsImage}
          text="Get detailed financial reports with AI-driven insights to track and improve your savings."
        />
        <UserFeatures
          heading="Free Plan"
          image={freeImage}
          text="Enjoy savings tools at no cost. Track expenses, get insights, and start saving smarter—completely free!"
        />
        <UserFeatures
          heading="Transactions"
          image={transactionsImage}
          text="Monitor your spending effortlessly with real-time tracking and AI-powered insights."
        />
        <UserFeatures
          heading="Safety"
          image={safetyImage}
          text="Your data is protected with top-tier security and encryption, ensuring complete privacy and trust."
        />
      </div>
    </Container>
  );
};

export default Features;
