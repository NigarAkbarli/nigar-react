import { NavBar } from "../../components/NavBar/NavBar";
import logo from './Group 2.svg'
import "./Header.scss";


export const Header = () => {
  return (
    <header className="narrow-container">
      <img src={logo} alt="logo" />
      <NavBar/>
      <button className="burger-menu mobile-only">burger</button>
    </header>
  );
};
