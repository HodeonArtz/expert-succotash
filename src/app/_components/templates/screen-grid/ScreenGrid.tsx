import { ReactNode } from "react";
import "./ScreenGrid.css";

interface ScreenGridProps {
  brand: ReactNode;
  aside: ReactNode;
  topbar: ReactNode;
  children: ReactNode;
}

export default function ScreenGrid({
  brand,
  aside,
  topbar,
  children,
}: ScreenGridProps) {
  return (
    <div className="screen-grid">
      <aside className="screen-grid__cell screen-grid__cell--aside">
        <figure className="screen-grid__brand">{brand}</figure>
        {aside}
      </aside>
      <section className="screen-grid__cell screen-grid__cell--topbar">
        {topbar}
      </section>
      <main className="screen-grid__cell screen-grid__cell--main">
        {children}
      </main>
    </div>
  );
}
