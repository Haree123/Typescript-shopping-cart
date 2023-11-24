import { ReactNode } from "react";

import Navbar from "./navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-6 md:px-8 lg:px-24 xl:px-48 2xl:px-60 my-6">
        {children}
      </div>
    </>
  );
};

export default Layout;
