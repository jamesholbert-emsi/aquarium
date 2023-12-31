import { LoaderArgs, SerializeFrom } from "@remix-run/node";
import {
  Link,
  Outlet,
  useLoaderData,
  useRouteLoaderData,
} from "@remix-run/react";
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
      <h1 className="flex justify-center p-5 text-xl text-white bg-blue-600 ">
        <Link to="/fish" className="mr-2">
          Aquarium
        </Link>
        /{" "}
        <Link className="ml-2" to={`/fish/${fishTypeData?.id}`}>
          {fishTypeData?.name}
        </Link>
        {}
      </h1>
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
