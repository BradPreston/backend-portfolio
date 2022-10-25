import Project from '../../interfaces/Project';
import Image from 'next/legacy/image';
import styles from './Project.module.scss';
import AnchorLink from '../link/AnchorLink';
import { useEffect } from 'react';

export default function PortfolioProject({ name, link }: Project) {
  useEffect(() => {
    var projects = document.querySelectorAll('#projectLinks a');
    projects.forEach(project => {
      project.classList.add('projectCard');
    });
  });
  return (
    <AnchorLink href={link} next={true}>
      <span className={styles.project}>
        <h3>{name}</h3>
      </span>
    </AnchorLink>
  );
}
