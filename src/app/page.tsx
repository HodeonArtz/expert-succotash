import ScreenGrid from "./_components/templates/screen-grid/ScreenGrid";

export default function Home() {
  return (
    <ScreenGrid
      aside={<h1 role="figure">Brand</h1>}
      topbar={<span>search bar</span>}
    >
      content
    </ScreenGrid>
  );
}
