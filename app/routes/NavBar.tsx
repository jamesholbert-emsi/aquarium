import { Link } from "@remix-run/react";

const NavBar = () => {
  return (
    <div className="flex">
      <Link to="/fish">Wiki Button</Link>
      <Link to="/fish">Trivia Button</Link>
    </div>
  );
};
export default NavBar;
