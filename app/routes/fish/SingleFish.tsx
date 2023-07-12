import { Link } from "@remix-run/react";
import type { Fish } from "../../models/fish.server";
const SingleFish = (fish: Fish) => {
  return (
    <div className="mb-3">
      <Link to={`/fish/${fish.id}`}>
        <img src={fish.image_url} className="w-full" />
        <div className="p-2 pl-4 text-lg">{fish.name}</div>
      </Link>
    </div>
  );
};

export default SingleFish;
