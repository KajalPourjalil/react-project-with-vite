import Pic from "../assets/pngwing.com.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={Pic} alt="logo"/>
      <h1 className="logo-text">ReactFacts</h1>
      <h3 className="title">React Course - Project 1</h3>
    </div>
  );
}

export default Navbar;
