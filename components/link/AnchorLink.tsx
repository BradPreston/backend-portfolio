import ILink from '../../interfaces/Link';
import Link from 'next/link';
import styles from './AnchorLink.module.scss';

const AnchorLink = ({
  href,
  content,
  title,
  target,
  next,
  children
}: ILink) => {
  return (
    <>
      {next ? (
        <Link href={href} className={styles.link} title={title}>
            {content}
            {children}
        </Link>
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
