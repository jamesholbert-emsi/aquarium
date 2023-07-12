import { useAllFishData } from "../fish";
import { Link } from "@remix-run/react";
import { getAllFish } from "~/models/fish.server";
import SingleFish from "./SingleFish";
import FishDetail from "./FishDetail";
import NavBar from "../NavBar";

export async function loader() {
  return await getAllFish();
}

export default function Index() {
  const fishies = useAllFishData();

  const fishes = fishies.map((f) => <SingleFish {...f} key={f.name} />);
  // const aquarium = fish.slice(2);
  return (
    <main className="">
      <h1 className="flex justify-center bg-blue-600 p-5 text-xl text-white">
        The O-Fish-ial Lightcast Aquarium
      </h1>

      {fishes}
      {/* <div>
        <Link to="/fish/new">Add Fish</Link>
      </div>
      <NavBar /> */}
    </main>
  );
}
