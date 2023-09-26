"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import AdminSideBarLayoutView from "./view";
import LoadingView from "./loading/view";

export interface Props {}

const AdminSideBarLayout = ({ children }: PropsWithChildren<Props>) => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) {
    return <LoadingView isLoading={true} />;
  }
  return <AdminSideBarLayoutView>{children}</AdminSideBarLayoutView>;
};

export default AdminSideBarLayout;
