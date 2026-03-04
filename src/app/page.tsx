import BrandLogo from "./_components/atoms/brand-logo/BrandLogo";
import ScreenGrid from "./_components/templates/screen-grid/ScreenGrid";

export default function Home() {
  return (
    <ScreenGrid brand={<BrandLogo />} aside={} topbar={<span>search bar</span>}>
      content
    </ScreenGrid>
  );
}
