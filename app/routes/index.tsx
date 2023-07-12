import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="">
      Main Page Index
      <Link className="block text-blue-500" to="/fish">Fish Admin</Link>
    </main>
  );
}
