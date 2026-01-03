import "./globals.css";
import localFont from "next/font/local";
import Provider from "../components/Provider";

const helveticaNeue = localFont({
  src: "../public/fonts/HelveticaNeue-Light.woff2",
  weight: "300",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={helveticaNeue.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
