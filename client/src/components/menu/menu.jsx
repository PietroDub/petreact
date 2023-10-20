import styles from "./menu.module.css";
import logo from "../../assets/logo.jpg";
const Menu = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.logo}>
        <div>
          <img src={logo} alt="Logo do pet" />
        </div>

      </div>
        <div className={styles.Letras}>
          <h2>Sobre</h2>
          <h2>adoção</h2>
          <h2>Loja</h2>
        </div>
      <input type="text" placeholder="Buscar" />
      <div className={styles.Login}>
     <h2>Login</h2>
      </div>
    </div>
  );
};

export default Menu;
