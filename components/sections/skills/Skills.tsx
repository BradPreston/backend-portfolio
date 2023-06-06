import AnchorLink from "../../AnchorLink/AnchorLink";
import styles from "./Skills.module.scss";

function Skills() {
  return (
    <section className={styles.tech}>
      <h2>My skills</h2>
      <div className={styles.stackWrapper}>
        <div className={styles.stack}>
          <h3>Preferred stack:</h3>
          <ul>
            <li key="next">NextJS</li>
            <li key="typescript">TypeScript</li>
            <li key="nodeJS">Node</li>
            <li key="golang">Golang</li>
            <li key="sql">SQL</li>
            <li key="nosql">NoSQL</li>
          </ul>
        </div>
        <div className={styles.stack}>
          <h3>Tech I've used:</h3>
          <ul>
            <li key="express">Express</li>
            <li key="php">PHP</li>
            <li key="laravel">Laravel</li>
            <li key="docker">Docker</li>
            <li key="mongodb">MongoDB</li>
            <li key="postgresql">PostgreSQL</li>
          </ul>
        </div>
      </div>
      <AnchorLink
        href="/Brad-Preston-Resume-2023.pdf"
        title="Download my resume"
        target="_blank"
        content="Download my resume"
        key="download"
      />
    </section>
  )
}

export default Skills;