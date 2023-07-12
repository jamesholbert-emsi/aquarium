import { Link } from "@remix-run/react";
import { useAllFishData } from "../fish";

export default function Index() {
  const fishies = useAllFishData();

  return (
    <main className="">
      <h1 className="text-lg">The O-Fish-ial Lightcast Aquarium</h1>
      {fishies.map((fish) => (
        <div key={fish.name}>
          <Link to={`/fish/${fish.id}`}>{fish.name}</Link>
        </div>
      ))}
      <div>
        <Link to="/fish/new">Add Fish</Link>
      </div>
    </main>
  );
}
