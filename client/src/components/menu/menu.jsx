import styles from "./menu.module.css";
import logo from "../../assets/logo.jpg";
const Menu = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.logo}>
        <div>
          <img src={logo} alt="Logo do pet" />
        </div>
        <h1>littlePetShop</h1>
      </div>
      <input type="text" placeholder="Buscar" />
    </div>
  );
};

export default Menu;