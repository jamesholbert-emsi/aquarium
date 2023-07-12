import type { FishType } from "../../models/fish.server";
import { Link } from "@remix-run/react";

const InTheAquarium = ({ aquarium }: { aquarium: FishType[] }) => {
  const inTheAquarium = aquarium.map((fish) => {
    return (
      <div key={fish.id}>
        <div>Name: {fish.name}</div>
        <div>In the Aquarium since: {fish.created_at}</div>
      </div>
    );
  });
  const toReturn = aquarium.length ? (
    <Link to="">
      <div>
        <h3 className="text-lg">In the Aquarium </h3>
        {inTheAquarium}
      </div>
    </Link>
  ) : (
    <></>
  );

  return toReturn;
};

export default InTheAquarium;
