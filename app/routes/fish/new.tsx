import { ActionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Fish, addFish } from "~/models/fish.server";

export async function action({ request }: ActionArgs) {
  const body = await request.formData();

  //   const id = body.get("id");
  //   invariant(typeof id === "string", "id field must be string");
  const formPayload = Object.fromEntries(body) as unknown as Fish;

  const updatedFish = await addFish(formPayload);

  if (updatedFish) {
    return redirect("/fish");
  }

  return updatedFish;
}

export default function Index() {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div className="w-full max-w-xs">
        <Form
          className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
          method="post"
        >
          <Input name="name" placeHolder="Red Fish" />
          <Input name="scientificname" placeHolder="Very Red Fish" />
          <Input
            name="distinguishingcharacteristics"
            placeHolder="comma separated characteristics"
          />
          <Input name="habitat" placeHolder="The Ocean" />
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

export const inputPrettyNames: Record<string, string> = {
  name: "Common Name",
  scientificname: "Scientific Name",
  distinguishingcharacteristics: "Distinguishing Characteristics",
  habitat: "Habitat",
};

export const Input = ({
  name,
  placeHolder,
  defaultValue,
}: {
  defaultValue?: string;
  name: string;
  placeHolder: string;
}) => {
  return (
    <div className="mb-4">
      <label
        className="block mb-2 text-sm font-bold text-gray-700"
        htmlFor={name}
      >
        {inputPrettyNames[name]}
      </label>
      <input
        defaultValue={defaultValue}
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
        id={name}
        name={name}
        type="text"
        placeholder={placeHolder}
      />
    </div>
  );
};
