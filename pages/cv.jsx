import '../i18n';

import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useLanguageToggle from '../hooks/useLanguageToggle';
import styles from '../styles/pages/cv.module.css';

export default function CvPage() {
  const { t } = useTranslation();
  const { currentLanguage, setLanguage } = useLanguageToggle();
  const jobs = t('jobs', { returnObjects: true });
  const cv = t('cv', { returnObjects: true });
  const education = cv.education || [];
  const skills = cv.skills || [];
  const languages = cv.languages || [];

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <article className={styles.cvPage}>
      <div className={`${styles.cvToolbar} no-print`}>
        <div className={styles.cvLangToggle}>
          <button
            type="button"
            data-active={currentLanguage === 'en'}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            type="button"
            data-active={currentLanguage === 'pt'}
            onClick={() => setLanguage('pt')}
          >
            PT
          </button>
        </div>
        <button type="button" onClick={handlePrint}>
          {cv.print}
        </button>
        <a href="/resume.pdf" download>
          {cv.download}
        </a>
        <Link href="/">{cv.portfolio}</Link>
      </div>

      <header className={styles.cvHeader}>
        <h1 className={styles.cvTitle}>{cv.title}</h1>
        <p className={styles.cvSubtitle}>{cv.subtitle}</p>
        <p className={styles.cvTagline}>{cv.tagline}</p>
      </header>

      <section className={styles.cvSection}>
        <h2>{cv.sections.summary}</h2>
        <p>{cv.summary}</p>
      </section>

      <section className={styles.cvSection}>
        <h2>{cv.sections.experience}</h2>
        {jobs.map((job) => (
          <div
            key={`${job.workplace}-${job.duration[0]}`}
            className={styles.cvJob}
          >
            <h3>
              {job.position} @ {job.workplace}
            </h3>
            <p className={styles.cvJobMeta}>{job.duration.join(' · ')}</p>
            <ul>
              {job.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.cvSection}>
        <h2>{cv.sections.education}</h2>
        <div className={styles.cvGrid}>
          {education.map((item) => (
            <div key={item.school} className={styles.cvCard}>
              <strong>{item.school}</strong>
              <p>{item.degree}</p>
              <p className={styles.cvJobMeta}>{item.period}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cvSection}>
        <div className={styles.cvGrid}>
          <div>
            <h2>{cv.sections.skills}</h2>
            <ul>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{cv.sections.languages}</h2>
            <ul>
              {languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.cvSection}>
        <h2>{cv.sections.contact}</h2>
        <ul className={styles.cvContactList}>
          <li>{cv.contact.location}</li>
          <li>{cv.contact.phone}</li>
          <li>
            <a href={`mailto:${cv.contact.email}`}>{cv.contact.email}</a>
          </li>
          <li>
            <a
              href={`https://${cv.contact.linkedin}`}
              target="_blank"
              rel="noreferrer"
            >
              {cv.contact.linkedin}
            </a>
          </li>
          <li>
            <a
              href={`https://${cv.contact.portfolio}`}
              target="_blank"
              rel="noreferrer"
            >
              {cv.contact.portfolio}
            </a>
          </li>
          <li>
            <a
              href={`https://${cv.contact.github}`}
              target="_blank"
              rel="noreferrer"
            >
              {cv.contact.github}
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
