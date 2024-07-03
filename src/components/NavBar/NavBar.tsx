import logoSVG from "../../assets/svg/logo.svg";
import style from "../../components/NavBar/NavBar.module.css";
const NavBar = () => {
  return (
    <div className={style["main-header"]}>
      <div className="logo-wrapper">
        <img src={logoSVG} alt="logo" />
      </div>
      <nav className="links-wrapper">
        <div className="main-menu"></div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="utility-menu">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
