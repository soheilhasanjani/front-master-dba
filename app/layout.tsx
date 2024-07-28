import type { Metadata } from "next";
import Providers from "@/components/providers";
import { IRANYekanX } from "@/theme/fonts";
import "@/styles/globals.css";
import {
  postPanelCustomValueGetMainPageKeyWord,
  postPanelCustomValueGetWebSiteTitle,
} from "@/apis/panelCustomValueApi";

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  // Wait for the promises to resolve
  const [title, keywords] = await Promise.all([
    postPanelCustomValueGetWebSiteTitle(),
    postPanelCustomValueGetMainPageKeyWord(),
  ]);

  return {
    title: title,
    keywords: keywords,
    robots: "index, follow",
    openGraph: {
      title: title,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={IRANYekanX.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
