import { Kanit } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { classNames } from "@/helpers";
import AdminSideBarLayoutView from "@/components/layouts/admin-side-bar-layout";
import { Metadata } from "next";

const fontKanit = Kanit({
  subsets: ["thai"],
  variable: "--font-kanit",
  weight: "500",
});

const meta = {
  title: "nextjs-13-kwd-dashboard-for-admin-layout",
  description: "nextjs-13-kwd-dashboard-for-admin-layout",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={classNames("antialiased loading", fontKanit.className)}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
        >
          <AdminSideBarLayoutView>{children}</AdminSideBarLayoutView>
        </ThemeProvider>
      </body>
    </html>
  );
}
