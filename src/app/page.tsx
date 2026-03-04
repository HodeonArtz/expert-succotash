import BrandLogo from "./_components/atoms/brand-logo/BrandLogo";
import Navbar from "./_components/organisms/Navbar/Navbar";
import ScreenGrid from "./_components/templates/screen-grid/ScreenGrid";

export default function Home() {
  return (
    <ScreenGrid
      brand={<BrandLogo />}
      aside={<Navbar />}
      topbar={<span>search bar</span>}
    >
      content
    </ScreenGrid>
  );
}
