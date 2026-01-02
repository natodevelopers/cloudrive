import "./globals.css";
import localFont from "next/font/local";
import Provider from "../components/Provider";

export const helveticaNeue = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaNeue-Light.woff2",
      weight: "300",
    },
  ],
});

export const sohneBreit = localFont({
  src: [
    {
      path: "../public/fonts/SohneBreit-Halbfett.woff2",
      weight: "700",
    },
  ],
});

export const metadata = {
  title: "Cloudrive",
  other: {
    "google-site-verification":
      "pjDL48b1IMVte3ajtoeTdKOHwJspD1mho6KFXM6pKfk",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={helveticaNeue.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
