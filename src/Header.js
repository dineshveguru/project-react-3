import world from "./images/world.png";
function Header() {
  return (
    <div className="header--container">
      <img src={world} />
      <p>My travel Journal</p>
    </div>
  );
}

export default Header;
