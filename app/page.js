// app/page.js
'use client';

import Link from 'next/link';
import styles from './page.module.css';

const dropItems = [
  { href: '/about/',      label: 'About Me' },
  { href: '/projects/',   label: 'Blogs' },
  { href: '/gallery/',    label: 'Gallery' },
  { href: '/resume.pdf',  label: 'Resume' },  // now links to the PDF in public/
];

const caseStudies = [
  {
    slug: 'project-one',
    title: 'SafeTrack',
    desc: 'an all-in-one plaform for real-time tracking, emergency updates, and on-demand services to keep your family protected.',
    image: '/placeholder1.png',
  },
  {
    slug: 'project-two',
    title: 'BeSpurr',
    desc: 'a dynamic Snapchat Map extension that empowers users to efficiently discover, host, and attend spontaneous events on their own terms.',
    image: '/placeholder2.png',
  },
];

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', textAlign: 'center' }}>
      {/* Top‐right About Me button */}
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <Link href="/about/">
          <button style={{ padding: '10px 20px', fontSize: 14, cursor: 'pointer' }}>
            About Me
          </button>
        </Link>
      </div>

      {/* Welcome Banner with dropping cubes */}
      <div className={styles.welcomeContainer}>
        {dropItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className={styles.cube}
            {...(item.href.endsWith('.pdf') && { target: '_blank', rel: 'noopener noreferrer' })}
          >
            {item.label}
          </Link>
        ))}

        <h1>Hi I’m Cecilia, a UI/UX student</h1>
        <h4>Welcome to my portfolioooooo</h4>
      </div>

      {/* Case Studies Section */}
      <section className={styles.caseStudiesSection}>
        <h2>Case Studies</h2>
        <div className={styles.caseStudiesGrid}>
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}/`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'box-shadow .2s',
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)')
                }
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                <img
                  src={cs.image}
                  alt={cs.title}
                  style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1rem', textAlign: 'left' }}>
                  <h3 style={{ margin: '0 0 .5rem' }}>{cs.title}</h3>
                  <p style={{ margin: 0, color: '#555' }}>{cs.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
