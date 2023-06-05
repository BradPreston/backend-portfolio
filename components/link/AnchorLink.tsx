import type { Link } from '../../types';
import NextLink from 'next/link';
import styles from './AnchorLink.module.scss';

const AnchorLink = ({
  href,
  content,
  title,
  target,
  next,
  children
}: Link) => {
  return (
    <>
      {next ? (
        <NextLink href={href} className={styles.link} title={title} target={target}>
            {content}
            {children}
        </NextLink>
      ) : (
        <a
          href={href}
          title={title}
          target={target}
          className={styles.link}
          key={title}
        >
          {content}
        </a>
      )}
    </>
  );
};

export default AnchorLink;
