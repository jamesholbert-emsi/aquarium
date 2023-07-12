import type { Fish } from "../../models/fish.server";
const FishDetail = (fish: Fish) => {
  return (
    <div className="border-4 border-solid border-black bg-gray-300">
      <img src={fish.image_url} className="w-full" />
      <div>Name: {fish.name}</div>
      <div>Distinguishing Features: {fish.distinguishingCharacteristics}</div>
      <div>Life Events: </div>
    </div>
  );
};

export default FishDetail;
