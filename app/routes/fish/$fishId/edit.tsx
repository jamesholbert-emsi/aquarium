import { Form } from "@remix-run/react";
import { Input } from "../new";
import { ActionArgs, redirect } from "@remix-run/node";
import { Fish, updateFish } from "~/models/fish.server";
import { useFishTypeData } from "../$fishId";

export async function action({ request, params }: ActionArgs) {
  const body = await request.formData();

  //   const id = body.get("id");
  //   invariant(typeof id === "string", "id field must be string");
  const formPayload = Object.fromEntries(body) as unknown as Fish;

  const updatedFish = await updateFish(formPayload);

  if (updatedFish) {
    return redirect(`/fish/${params.fishId}`);
  }

  return updatedFish;
}

export function ErrorBoundary() {
  return "Can't edit right now!";
}

export default function Edit() {
  const fishTypeData = useFishTypeData();

  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div className="w-full max-w-xs">
        <Form
          className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
          method="patch"
        >
          <Input
            name="name"
            placeHolder="Red Fish"
            defaultValue={fishTypeData?.name}
          />
          <Input
            name="scientificname"
            placeHolder="Very Red Fish"
            defaultValue={fishTypeData?.scientificName}
          />
          <Input
            name="distinguishingcharacteristics"
            placeHolder="comma separated characteristics"
            defaultValue={fishTypeData?.distinguishingCharacteristics?.join(
              ", "
            )}
          />
          <Input
            name="habitat"
            placeHolder="The Ocean"
            defaultValue={fishTypeData?.habitat}
          />
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Save
          </button>
        </Form>
        <p className="text-xs text-center text-gray-500">
          &copy;2023 Lightcast. All rights reserved.
        </p>
      </div>
    </div>
  );
}
