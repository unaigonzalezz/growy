
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: "Growy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-900"><NextTopLoader />{children}</body>
    </html>
  );
}
