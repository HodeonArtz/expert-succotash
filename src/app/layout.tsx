import "./_styles/index.css";
import BrandLogo from "./_components/atoms/brand-logo/BrandLogo";
import Input from "./_components/atoms/input/Input";
import Navbar from "./_components/organisms/Navbar/Navbar";
import ScreenGrid from "./_components/templates/screen-grid/ScreenGrid";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-background`}>
        <ScreenGrid brand={<BrandLogo />} aside={<Navbar />} topbar={<Input />}>
          {children}
        </ScreenGrid>
      </body>
    </html>
  );
}
