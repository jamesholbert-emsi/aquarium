import { Link, useLoaderData } from "@remix-run/react";
import { getAllFish } from "~/models/fish.server";

export async function loader() {
  return await getAllFish();
}

export default function Index() {
  const fish = useLoaderData<typeof loader>();

  fish.forEach((f) => console.log(f.name));
  return (
    <main className="">
      Main page for fishies
      <div>
        <Link to="/fish/new">Add Fish</Link>
      </div>
      <div>
        <Link to="/fish/edit">Edit Fish</Link>
      </div>
    </main>
  );
}
