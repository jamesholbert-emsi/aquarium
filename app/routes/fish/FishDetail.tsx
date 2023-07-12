import type { FishType } from "../../models/fish.server";
const FishDetail = (fish: FishType) => {
  return (
    <div className="">
      <img src={fish.image_url} className="w-full" alt="" />
      <div>Name: {fish.name}</div>
      <div>Distinguishing Features: {fish.name}</div>
      <div>Life Events: </div>
    </div>
  );
};

export default FishDetail;
