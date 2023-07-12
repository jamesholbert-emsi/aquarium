import { LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getAllFish, getLifeEventsByFishId } from "~/models/fish.server";

export async function loader({ params }: LoaderArgs) {
  const fishId = params["fishId"];
  invariant(typeof fishId === "string", "must have fish id");
  const lifeEvents = await getLifeEventsByFishId(fishId);
  return lifeEvents;
}

export default function Index() {
  const lifeEvents = useLoaderData<typeof loader>();

  return (
    <main className="">
      Life Events for fishies
      {lifeEvents.map((event, i) => (
        <div key={i}>{event.description}</div>
      ))}
      <div>
        <Link to="/fish/edit">Edit This Fish (can't yet)</Link>
      </div>
    </main>
  );
}
