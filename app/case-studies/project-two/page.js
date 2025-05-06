'use client';

import Link from 'next/link';
import styles from './page.module.css';

export default function ProjectTwoPage() {
  return (
    <main>
      {/* Banner */}
      <div className={styles.banner}>
        <h1>BeSpurr</h1>
        <div className={styles.meta}>
          <h4>Duration: 8 weeks</h4>
          <h4>Tools: Figma &amp; Figjam</h4>
          <h4>Team: 5 Designers</h4>
        </div>
      </div>

      {/* Navigation */}
      {/* <div className={styles.nav}>
        <Link href="/" className={styles.navLink}>← Home</Link>
        <Link href="/case-studies/" className={styles.navLink}>← All Case Studies</Link>
      </div> */}

      {/* Content */}
      <section className={styles.content}>
        <p>
          This page is still under construction
        </p>
      </section>
    </main>
  );
}
