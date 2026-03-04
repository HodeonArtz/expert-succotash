import "./ScreenGrid.css";

interface ScreenGridProps {
  aside: React.ReactNode;
  topbar: React.ReactNode;
  children: React.ReactNode;
}

export default function ScreenGrid({
  aside,
  topbar,
  children,
}: ScreenGridProps) {
  return (
    <div className="screen-grid">
      <aside className="screen-grid__cell screen-grid__cell--aside">
        {aside}
      </aside>
      <section className="screen-grid__cell screen-grid__cell--topbar">
        {topbar}
      </section>
      <main className="screen-grid__cell">{children}</main>
    </div>
  );
}
