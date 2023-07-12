import type { FishType } from "../../models/fish.server";
import InTheAquarium from "./InTheAquarium";

const FishTypeDetail = ({
  fish,
  aquarium,
}: {
  fish: FishType;
  aquarium: any;
}) => {
  console.log(aquarium);
  return (
    <div>
      <img src={fish.image_url} className="w-full" alt="" />
      <div className="p-4">
        <InTheAquarium
          aquarium={aquarium.filter((f: any) => fish.id === f.fish_type_id)}
        />
        <hr className="mb-4 mt-4" />
        <h3 className="text-lg">Details </h3>
        <div className="mt-2 text-gray-700">
          <div>Name: {fish.name}</div>
          <div>Scientific Name: {fish.scientific_name}</div>
          <div>Family: {fish.family}</div>
          <div>Color: {fish.color}</div>
        </div>

        <hr className="mb-4 mt-4" />

        <h3 className="text-lg">Fish Care </h3>
        <div className="mt-2 text-gray-700">
          <div>Fish Diet: {fish.fish_diet}</div>
          <div>Aggressiveness: {fish.aggressiveness}</div>
          <div>Reef Safe: {fish.is_reef_safe ? "Yes" : "No"}</div>
          <div>Minimun Tank Size: {fish.minimum_tank_size_gallons}</div>
          <div>Max size: {fish.max_size_inches}</div>
          <div>Relative Care: {fish.relative_care}</div>
          <div>Description: {fish.description}</div>
        </div>
      </div>
    </div>
  );
};

export default FishTypeDetail;
