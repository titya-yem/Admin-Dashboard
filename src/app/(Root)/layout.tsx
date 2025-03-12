import Features from "@/components/Features";
import Navbar from "@/components/shared/Navbar";
import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Features />
    </>
  );
};

export default layout;
