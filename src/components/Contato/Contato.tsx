import styles from './Contato.module.css'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

function Contato() {
  return (
    <div id="contato" className={styles.container}>
      <h2 className={styles.titulo}>Entre em Contato</h2>
      <p className={styles.subtitulo}>
        Estou sempre aberto a novas oportunidades e projetos. Não hesite em entrar em contato!
      </p>
      <div className={styles.info}>
        <div className={styles.item}>
          <FaEnvelope color="#c9a84c" size={24} />
          <div>
            <p className={styles.label}>Email</p>
            <a href="mailto:gafmoura@gmail.com" className={styles.link}>gafmoura@gmail.com</a>
          </div>
        </div>
        <div className={styles.item}>
          <FaLinkedin color="#c9a84c" size={24} />
          <div>
            <p className={styles.label}>LinkedIn</p>
            <a href="https://linkedin.com/in/gabriel-moura7" target="_blank" rel="noreferrer" className={styles.link}>linkedin.com/in/gabriel-moura7</a>
          </div>
        </div>
        <div className={styles.item}>
          <FaGithub color="#c9a84c" size={24} />
          <div>
            <p className={styles.label}>GitHub</p>
            <a href="https://github.com/gafmoura7" target="_blank" rel="noreferrer" className={styles.link}>github.com/gafmoura7</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato