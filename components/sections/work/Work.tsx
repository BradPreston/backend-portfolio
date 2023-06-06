import AnchorLink from "../../AnchorLink/AnchorLink";
import Projects from "../../../data/Projects";
import styles from "./Work.module.scss";

function Work() {
  return (
    <section id="work" className={styles.work}>
      <h2>My Work</h2>
      <div id="projectLinks" className={styles.projectLinks}>
        {Projects.map(project => {
          return (
            <AnchorLink next={true} href={`/${project.slug}`} title={project.name} key={project.name} content={project.name} />
          );
        })}
      </div>
    </section>
  )
}

export default Work;