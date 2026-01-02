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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Cloudrive</title>
        <meta
          name="google-site-verification"
          content="pjDL48b1IMVte3ajtoeTdKOHwJspD1mho6KFXM6pKfk"
        />
      </head>
      <body className={helveticaNeue.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
