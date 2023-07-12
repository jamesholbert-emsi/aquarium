import { Link } from "@remix-run/react";
import type { FishType } from "../../models/fish.server";
const SingleFish = (fish: FishType) => {
  return (
    <div className="mb-3">
      <Link to={`/fish/${fish.id}`}>
        <img src={fish.image_url} className="w-full" alt="" />
        <div className="p-2 pl-4 text-lg">{fish.name}</div>
      </Link>
    </div>
  );
};

export default SingleFish;
