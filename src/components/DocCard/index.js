import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

/** A documentation entry point, adapted from the sibling BVK homepage cards. */
export default function DocCard({title, description, to, cta}) {
  return (
    <article className={styles.card}>
      <Heading as="h3" className={styles.title}>{title}</Heading>
      <p className={styles.description}>{description}</p>
      <Link className={styles.link} to={to}>{cta}</Link>
    </article>
  );
}
