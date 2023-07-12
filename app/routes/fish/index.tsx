import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="">
      Main page for fishies
      <div>

      <Link to="/fish/new">Add Fish</Link>
      </div>
      <div>

      <Link to="/fish/edit">Edit Fish</Link>
      </div>
    </main>
  );
}
