import styles from "./sobre.module.css"
import sobreimg from "../../assets/Littlesobre.png"
const Sobre = () => {
  return (
    <div className={styles.about}>
<img src={sobreimg} alt="imagem sobre nós" />
<div className={styles.titleabout}>
    <h2>SOBRE NÓS</h2>
</div>
    <div className={styles.textabout}>
  <p>Uma empresa localizada no interior paulista, a Little Petshop é uma pet shop dedicada a atender e suprir as necessidades dos nossos amados pets. 
    Acreditamos que assim como nós, nossos companheiros peludos merecem o melhor em cuidados e atenção. 
    Por isso, oferecemos uma ampla gama de serviços e produtos para garantir o bem-estar e a felicidade dos animais de estimação. 
    Valorizamos cada cliente de quatro patas que entra em nossa loja.
     Nossa equipe é composta por profissionais dedicados e apaixonados por animais, prontos para oferecer um atendimento especializado e carinhoso. 
     Estamos empenhados em proporcionar um ambiente acolhedor e seguro, onde os pets se sintam confortáveis e amados.</p>
    </div>
    </div>
  )
}

export default Sobre