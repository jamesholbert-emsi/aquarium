import { LoaderArgs, SerializeFrom } from "@remix-run/node";
import { Outlet, useLoaderData, useRouteLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getLifeEventsByFishId } from "~/models/fish.server";
import { useAllFishTypeData, useAllFishData } from "../fish";
import FishTypeDetail from "./FishTypeDetail";

export async function loader({ params }: LoaderArgs) {
  const fishId = params["fishId"];
  invariant(typeof fishId === "string", "must have fish id");

  const lifeEvents = await getLifeEventsByFishId(fishId);
  return { fishId, lifeEvents };
}

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();
  const lifeEvents = loaderData.lifeEvents;
  const fishData = useAllFishData();

  const fishTypeData = useFishTypeData();
  return (
    <div className="">
      {fishTypeData && (
        <>
          <FishTypeDetail fish={fishTypeData} aquarium={fishData} />
          <h3>Life Events for {fishTypeData.name}</h3>
          {lifeEvents.map((event, i) => (
            <div key={i}>{event.description}</div>
          ))}
        </>
      )}
      <Outlet />
    </div>
  );
}

export const useFishTypeData = () => {
  const loaderData = useRouteLoaderData("routes/fish/$fishId") as SerializeFrom<
    typeof loader
  >;

  const allFishData = useAllFishTypeData();
  const fishTypeData = allFishData.find(
    (fish) => fish.id === loaderData.fishId
  );
  return fishTypeData;
};
