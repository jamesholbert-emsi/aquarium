import { Link, Outlet } from "@remix-run/react";

export default function FishLayout() {
  return (
    <div className="">
      <nav className="h-5">Fish Section Nav</nav>
      <Outlet />
    </div>
  );
}
