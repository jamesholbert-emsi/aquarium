import { SerializeFrom } from "@remix-run/node";
import { Link, Outlet, useRouteLoaderData } from "@remix-run/react";
import { getAllFish } from "~/models/fish.server";

export async function loader() {
  return await getAllFish();
}

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

export const useAllFishData = () => {
  const allFishData = useRouteLoaderData("routes/fish") as SerializeFrom<
    typeof loader
  >;
  return allFishData;
};
