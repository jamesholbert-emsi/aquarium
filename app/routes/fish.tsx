import { SerializeFrom } from "@remix-run/node";
import { Outlet, useRouteLoaderData } from "@remix-run/react";
import { getAllFish } from "~/models/fish.server";

export async function loader() {
  return await getAllFish();
}

export default function FishLayout() {
  return (
    <div className="">
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
