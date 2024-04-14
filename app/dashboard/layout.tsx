import Sidebar from "@/components/layouts/DashboardLayout/Sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <main className="ps-56">
        {/* <Breadcrumbs
            separator={<b style={{ color: "#bababa" }}> / &nbsp;</b>}
            item={NavLink}
            finalItem={"b"}
            finalProps={{
              style: { color: "#bababa" },
            }}
          /> */}
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
