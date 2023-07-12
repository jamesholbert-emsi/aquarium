import { redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";

export async function loader() {
  return redirect("/fish");
}

export default function Index() {
  return (
    <main className="">
    </main>
  );
}
