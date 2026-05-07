import styles from './Titulo.module.css'

function Titulo() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="home" className={styles.container}>
      <h1 className={styles.nome}>
        Olá, eu sou o <span className={styles.destaque}>Gabriel Moura</span>
      </h1>
      <p className={styles.subtitulo}>
        Transformando ideias em sistemas completos, modernos e funcionais.
      </p>
      <div className={styles.botoes}>
        <button onClick={() => scrollTo('projetos')} className={styles.btnPrimario}>
          Veja Meu Trabalho
        </button>
        <button onClick={() => scrollTo('contato')} className={styles.btnSecundario}>
          Entre em Contato
        </button>
      </div>
    </div>
  )
}

export default Titulo