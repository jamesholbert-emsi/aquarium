import { Link } from "@remix-run/react";
import { useFishTypeData } from "../$fishId";

export default function Index() {
  const fishTypeData = useFishTypeData();

  return (
    <div>
      <Link to={`/fish/${fishTypeData?.id}/edit`}>
        Edit This Fish (can't yet)
      </Link>
    </div>
  );
}
