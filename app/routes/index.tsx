import { redirect } from "@remix-run/node";

export async function loader() {
  return redirect("/fish");
}

export default function Index() {
  return (
    <main className="">
    </main>
  );
}
