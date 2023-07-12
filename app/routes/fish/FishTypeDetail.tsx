import type { Fish } from "../../models/fish.server";
export type FishType = {
  name: string;
  scientificName?: string;
  family?: string;
  color?: string;
  diet?: string;
  aggressiveness?: string;
  tank?: string;
  size?: string;
  reefSafe?: boolean;
  care?: string;
  distinguishingCharacteristics?: string;
  description?: string;
};

// const InTheAquarium = ({ aquarium }) => {
//   const list = aquarium.map((f) => {
//     <div>something?</div>;
//   });
//   return list;
// };

const FishTypeDetail = (fish: Fish) => {
  return (
    <div>
      <img src={fish.image_url} className="w-full" />
      <div className="p-4">
        <h3 className="text-lg">In the Aquarium </h3>

        <hr className="mb-4 mt-4" />
        <h3 className="text-lg">Details </h3>
        <div className="mt-2 text-gray-700">
          <div>Name: {fish.name}</div>
          <div>Scientific Name: {fish.scientificName}</div>
          <div>Family: {fish.family}</div>
          <div>Color: {fish.color}</div>
        </div>

        <hr className="mb-4 mt-4" />

        <h3 className="text-lg">Fish Care </h3>
        <div className="mt-2 text-gray-700">
          <div>Fish Diet: {fish.diet}</div>
          <div>Aggressiveness: {fish.aggressiveness}</div>
          <div>Reef Safe: {fish.reefSafe}</div>
          <div>Minimun Tank Size: {fish.tank}</div>
          <div>Max size: {fish.size}</div>
          <div>Relative Care: {fish.care}</div>
          <div>Description: {fish.description}</div>
        </div>
      </div>
    </div>
  );
};

export default FishTypeDetail;
