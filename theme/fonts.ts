import localFont from "next/font/local";

const BYekan = localFont({
  src: [
    {
      path: "../public/fonts/BYekan-webfont.eot",
    },
    {
      path: "../public/fonts/BYekan-webfont.ttf",
    },
    {
      path: "../public/fonts/BYekan-webfont.woff",
    },
  ],
  variable: "--font-b-yekan",
  display: "swap",
});

export { BYekan };
