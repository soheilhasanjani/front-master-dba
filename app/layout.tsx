import type { Metadata } from "next";
import Providers from "@/components/providers";
import { IRANYekanX } from "@/theme/fonts";
import "@/styles/globals.css";
import {
  postPanelCustomValueGetLogImage,
  postPanelCustomValueGetMainPageKeyWord,
  postPanelCustomValueGetWebSiteTitle,
} from "@/apis/panelCustomValueApi";
import staticFileUrl from "@/utils/staticFileUrl";
import { Agent, setGlobalDispatcher } from "undici";

setGlobalDispatcher(new Agent({ connect: { timeout: 60_000 } }));

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  // Wait for the promises to resolve
  const [title, keywords, logo] = await Promise.all([
    postPanelCustomValueGetWebSiteTitle(),
    postPanelCustomValueGetMainPageKeyWord(),
    postPanelCustomValueGetLogImage(),
  ]);

  return {
    title: title,
    keywords: keywords,
    description: keywords,
    robots: "index, follow",
    openGraph: {
      title: title,
      description: keywords,
      images: staticFileUrl(logo),
    },
    twitter: {
      description: keywords,
      images: staticFileUrl(logo),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={IRANYekanX.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
