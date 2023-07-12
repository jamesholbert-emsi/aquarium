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

export const useAllFishTypeData = () => {
  const allFishData = useRouteLoaderData("routes/fish") as SerializeFrom<
    typeof loader
  >;
  return allFishData;
};

export const useAllFishData = () => {
  const data = [
    {
      name: "Nemo",
      distinguishing_characteristics: "something",
      fish_type_id: "0a4e26b0-0b8a-47fe-a325-6e68ce83f3bb",
    },
  ];
  return data;
};
