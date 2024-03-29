import { useRouter } from 'next/router';
import Head from 'next/head';
import Projects from '../data/Projects';
import styles from '../styles/Project.module.scss';
import AnchorLink from '../components/AnchorLink/AnchorLink';

const ProjectPage = () => {
  const router = useRouter();
  const projectId = router.query.project;
  return (
    <div className={styles.container}>
      {Projects.map(project => {
        if (project.slug == projectId) 
          return (
            <main className={styles.project} key={project.key}>
              <Head>
                <title>{project.name} | Brad Preston</title>
                <meta name="description" content={project.bio} />
                <link rel="icon" href="/favicon.png" />
              </Head>
              <AnchorLink href="/" content="Go back home" next={true} />
              <h1>{project.name}</h1>

              <h2>About {project.name}:</h2>
              <p>{project.bio}</p>

              <h2>My Role in the project:</h2>
              <p>{project.part}</p>

              <h2>Challenges I overcame:</h2>
              <p>{project.challenges}</p>

              <h2>Tech stack for this project:</h2>
              <ul>
                {project.stack?.map(tech => {
                  return <li key={tech}>{tech}</li>;
                })}
              </ul>
              <AnchorLink
                next={true}
                href={project.link}
                target="_blank"
                title={`Link to ${project.name}`}
                content={`Visit ${project.name}`}
              />
            </main>
          );
      })}
    </div>
  );
};

export default ProjectPage;
