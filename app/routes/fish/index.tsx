import { Link, useLoaderData } from "@remix-run/react";
import { getAllFish } from "~/models/fish.server";

export async function loader() {
  return await getAllFish();
}

export default function Index() {
  const fishies = useLoaderData<typeof loader>();

  fishies.forEach((fish) => console.log(fish.name));
  return (
    <main className="">
      Main page for fishies
      {fishies.map((fish) => (
        <div>
          <Link to={`/fish/${fish.id}`} key={fish.name}>
            {fish.name}
          </Link>
        </div>
      ))}
      <div>
        <Link to="/fish/new">Add Fish</Link>
      </div>
      <div>
        <Link to="/fish/edit">Edit Fish</Link>
      </div>
    </main>
  );
}
