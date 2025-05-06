'use client';

import Link from 'next/link';
import styles from './page.module.css';

export default function ProjectOnePage() {
  return (
    <main>
      {/* Banner */}
      <div className={styles.banner}>
        <h1>SafeTrack</h1>
        <div className={styles.meta}>
          <h4>Duration: 10 weeks</h4>
          <h4>Tools: Figma</h4>
          <h4>Team: 4 designers</h4>
        </div>
      </div>

      {/* Back to home / case studies nav (optional) */}
      {/* <div className={styles.nav}>
        <Link href="/" className={styles.navLink}>← Home</Link>
        <Link href="/case-studies/" className={styles.navLink}>← All Case Studies</Link>
      </div> */}

      {/* Page content */}
      <section className={styles.content}>
        <p>This page is still under construction</p>
      </section>
    </main>
  );
}
