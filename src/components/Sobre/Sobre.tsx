import styles from './Sobre.module.css'
import { FaCode, FaServer, FaCog } from 'react-icons/fa'

function Sobre() {
  return (
    <div id="sobre" className={styles.container}>
      <h2 className={styles.titulo}>Sobre Mim</h2>
      <div className={styles.conteudo}>
        <img src="/jo.png" alt="Gabriel Moura" className={styles.foto} />
        <div className={styles.texto}>
          <p className={styles.descricao}>
            Estudante de Desenvolvimento de Software Multiplataforma na Fatec, atuando na construção de aplicações full stack com foco em performance, usabilidade e boas práticas de desenvolvimento. Busco criar soluções modernas que integrem experiência do usuário, arquitetura eficiente e tecnologia.
          </p>
          <div className={styles.habilidades}>
            <div className={styles.card}>
              <h3 className={styles.categoriatitulo}>
                <FaCode color="#c9a84c" /> Desenvolvimento
              </h3>
              <ul className={styles.lista}>
                <li>React</li>
                <li>Node.js</li>
                <li>Vite</li>
                <li>Express</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3 className={styles.categoriatitulo}>
                <FaServer color="#c9a84c" /> Linguagens
              </h3>
              <ul className={styles.lista}>
                <li>Typescript</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3 className={styles.categoriatitulo}>
                <FaCog color="#c9a84c" /> Ferramentas
              </h3>
              <ul className={styles.lista}>
                <li>Git</li>
                <li>GitHub</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre