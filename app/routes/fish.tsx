import { Link, Outlet } from "@remix-run/react";

export default function FishLayout() {
  return (
    <div className="">
      <nav className="h-5">
        <Link to="/fish">Fish Section</Link> Nav
      </nav>
      <Outlet />
    </div>
  );
}
