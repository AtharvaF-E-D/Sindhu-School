import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SchoolsCurriculumPage from './pages/SchoolsCurriculumPage';
import CoreValuesPage from './pages/CoreValuesPage';
import LegacyLeadershipPage from './pages/LegacyLeadershipPage';
import WhyChooseSesPage from './pages/WhyChooseSesPage';
import AcademicsCurriculumPage from './pages/AcademicsCurriculumPage';
import AcademicsApproachPage from './pages/AcademicsApproachPage';
import AcademicsRollOfHonourPage from './pages/AcademicsRollOfHonourPage';
import AcademicsFaqPage from './pages/AcademicsFaqPage';
import StudentsChroniclePage from './pages/StudentsChroniclePage';
import CreativeArtsGalleryPage from './pages/CreativeArtsGalleryPage';
import SportsPage from './pages/SportsPage';
import ParentPathwayAppPage from './pages/ParentPathwayAppPage';
import SesAlumniPage from './pages/SesAlumniPage';
import NotableAlumniPage from './pages/NotableAlumniPage';

const ROUTE_SEGMENTS = {
  notableAlumni: new Set([
    'notable-alumni',
    'noatble-alumani',
    'alumni-event-gallery',
    'event-gallery',
    'event-gallary',
  ]),
  sesAlumni: new Set([
    'alumni-connect',
    'alumni-connected',
    'alumani-connected',
    'ses-alumni',
    'ses-alumani',
    'alumni-register',
    'alumni-highlights',
    'distinguished-alumni',
    'alumni-network',
  ]),
  parentPathwayApp: new Set([
    'parents-pathway',
    'parent-pathway',
    'student-protected-app',
    'students-protected-app',
    'kids-protect',
    'attendance',
    'family-participation',
  ]),
  sports: new Set(['sports', 'students-chronicle-sports']),
  creativeArtsGallery: new Set([
    'creative-arts-gallery',
    'creative-arts',
    'creative-art-gallery',
    'gallery',
    'students-chronicle-creative-arts',
    'students-chronicle-gallery',
  ]),
  studentsChronicle: new Set([
    'students-chronicle',
    'life-at-ses',
    'ses-chronicles',
    'students-chronicle-life',
  ]),
  academicsFaq: new Set([
    'faq',
    'academics-faq',
  ]),
  academicsRollOfHonour: new Set([
    'roll-of-honour',
    'honour',
    'academics-roll-of-honour',
  ]),
  academicsApproach: new Set([
    'our-approach',
    'approach',
    'academics-approach',
    'academics-our-approach',
  ]),
  academicsCurriculum: new Set([
    'academics',
    'curriculum',
    'our-curriculum',
    'academics-curriculum',
  ]),
  whyChoose: new Set(['why-choose-ses', 'why-choose']),
  legacy: new Set([
    'legacy',
    'legacy-leadership',
    'leadership',
    'heritage',
    'founder-tribute',
    'presidents-message',
  ]),
  coreValues: new Set(['core-values', 'values']),
  schoolsCurriculum: new Set([
    'schools-curriculum',
    'schools',
    'schools-directory',
    'our-schools-network',
  ]),
  about: new Set([
    'about',
    'about-society',
    'about-us',
    'vision-mission',
    'our-vision',
    'vision',
    'our-mission',
    'mission',
  ]),
};

const resolveRoute = (hash, path) => {
  const hashSegment = hash.replace(/^#/, '');
  const pathSegment = path.replace(/^\/+|\/+$/g, '');
  const segment = hash === '#' ? 'home' : hashSegment || pathSegment;

  if (ROUTE_SEGMENTS.notableAlumni.has(segment)) {
    if (
      segment === 'alumni-event-gallery' ||
      segment === 'event-gallery' ||
      segment === 'event-gallary'
    ) {
      return { page: 'notable-alumni', targetId: 'alumni-event-gallery' };
    }
    return { page: 'notable-alumni', targetId: null };
  }

  if (ROUTE_SEGMENTS.sesAlumni.has(segment)) {
    if (
      segment === 'alumni-highlights' ||
      segment === 'distinguished-alumni' ||
      segment === 'alumni-network'
    ) {
      return { page: 'ses-alumni', targetId: segment };
    }
    return { page: 'ses-alumni', targetId: null };
  }

  if (ROUTE_SEGMENTS.parentPathwayApp.has(segment)) {
    if (
      segment === 'kids-protect' ||
      segment === 'attendance' ||
      segment === 'family-participation'
    ) {
      return { page: 'parent-pathway-app', targetId: segment };
    }
    return { page: 'parent-pathway-app', targetId: null };
  }

  if (ROUTE_SEGMENTS.sports.has(segment)) {
    return { page: 'sports', targetId: null };
  }

  if (ROUTE_SEGMENTS.creativeArtsGallery.has(segment)) {
    return { page: 'creative-arts-gallery', targetId: null };
  }

  if (ROUTE_SEGMENTS.studentsChronicle.has(segment)) {
    return { page: 'students-chronicle', targetId: null };
  }

  if (ROUTE_SEGMENTS.academicsFaq.has(segment)) {
    return { page: 'academics-faq', targetId: null };
  }

  if (ROUTE_SEGMENTS.academicsRollOfHonour.has(segment)) {
    return { page: 'academics-roll-of-honour', targetId: null };
  }

  if (ROUTE_SEGMENTS.academicsApproach.has(segment)) {
    return { page: 'academics-approach', targetId: null };
  }

  if (ROUTE_SEGMENTS.academicsCurriculum.has(segment)) {
    return { page: 'academics-curriculum', targetId: null };
  }

  if (ROUTE_SEGMENTS.whyChoose.has(segment)) {
    return { page: 'why-choose-ses', targetId: null };
  }

  if (ROUTE_SEGMENTS.legacy.has(segment)) {
    if (segment === 'presidents-message') {
      return { page: 'legacy-leadership', targetId: 'veena-d-bajaj' };
    }
    if (segment === 'founder-tribute') {
      return { page: 'legacy-leadership', targetId: 'founder-tribute' };
    }
    return { page: 'legacy-leadership', targetId: null };
  }

  if (ROUTE_SEGMENTS.coreValues.has(segment)) {
    return { page: 'core-values', targetId: null };
  }

  if (ROUTE_SEGMENTS.schoolsCurriculum.has(segment)) {
    if (segment === 'schools-directory' || segment === 'our-schools-network') {
      return { page: 'schools-curriculum', targetId: segment };
    }
    return { page: 'schools-curriculum', targetId: null };
  }

  if (ROUTE_SEGMENTS.about.has(segment)) {
    if (segment === 'vision-mission' || segment === 'our-vision' || segment === 'vision') {
      return { page: 'about', targetId: 'our-vision' };
    }
    if (segment === 'our-mission' || segment === 'mission') {
      return { page: 'about', targetId: 'our-mission' };
    }
    return { page: 'about', targetId: null };
  }

  if (segment === 'home' || segment === '') {
    return { page: 'home', targetId: null };
  }

  return { page: null, targetId: segment };
};

const PAGE_TITLES = {
  home: 'Sindhu Education Society | Excellence Since 1952',
  about: 'About Society | Sindhu Education Society',
  'schools-curriculum': 'Schools & Curriculum | Sindhu Education Society',
  'core-values': 'Core Values | Sindhu Education Society',
  'legacy-leadership': 'Legacy & Leadership | Sindhu Education Society',
  'why-choose-ses': 'Why Choose SES | Sindhu Education Society',
  'academics-curriculum': 'Our Curriculum | Academics | Sindhu Education Society',
  'academics-approach': 'Our Approach | Academics | Sindhu Education Society',
  'academics-roll-of-honour': 'Roll of Honour | Academics | Sindhu Education Society',
  'academics-faq': 'FAQ | Academics | Sindhu Education Society',
  'students-chronicle': 'Life at SES | Students Chronicle | Sindhu Education Society',
  'creative-arts-gallery': 'Creative Arts & Gallery | Students Chronicle | Sindhu Education Society',
  sports: 'Sports | Students Chronicle | Sindhu Education Society',
  'parent-pathway-app': 'Student Protected App | Parent Pathway | Sindhu Education Society',
  'ses-alumni': 'SES Alumni | Alumni Connect | Sindhu Education Society',
  'notable-alumni': 'Notable Alumni | Alumni Connect | Sindhu Education Society',
};

function App() {
  const initialRoute = resolveRoute(
    window.location.hash.toLowerCase(),
    window.location.pathname.toLowerCase()
  );

  const [currentPage, setCurrentPage] = useState(initialRoute.page || 'home');
  const [scrollTarget, setScrollTarget] = useState(initialRoute.targetId);

  useEffect(() => {
    document.title = PAGE_TITLES[currentPage] || PAGE_TITLES.home;
  }, [currentPage]);

  useEffect(() => {
    if (!scrollTarget) return;
    let rafId = 0;
    const timer = window.setTimeout(() => {
      rafId = window.requestAnimationFrame(() => {
        const el = document.getElementById(scrollTarget);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setScrollTarget(null);
      });
    }, 60);

    return () => {
      window.clearTimeout(timer);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [currentPage, scrollTarget]);

  useEffect(() => {
    const handleHashOrLocation = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      const resolved = resolveRoute(hash, path);

      if (resolved.page) {
        setCurrentPage(resolved.page);
        if (resolved.targetId) {
          setScrollTarget(resolved.targetId);
        } else {
          setScrollTarget(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }

      if (resolved.targetId) {
        const existing = document.getElementById(resolved.targetId);
        if (existing) {
          existing.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashOrLocation);
    window.addEventListener('popstate', handleHashOrLocation);

    return () => {
      window.removeEventListener('hashchange', handleHashOrLocation);
      window.removeEventListener('popstate', handleHashOrLocation);
    };
  }, []);

  return (
    <div>
      {currentPage === 'notable-alumni' ? (
        <NotableAlumniPage />
      ) : currentPage === 'ses-alumni' ? (
        <SesAlumniPage />
      ) : currentPage === 'parent-pathway-app' ? (
        <ParentPathwayAppPage />
      ) : currentPage === 'sports' ? (
        <SportsPage />
      ) : currentPage === 'creative-arts-gallery' ? (
        <CreativeArtsGalleryPage />
      ) : currentPage === 'students-chronicle' ? (
        <StudentsChroniclePage />
      ) : currentPage === 'academics-faq' ? (
        <AcademicsFaqPage />
      ) : currentPage === 'academics-roll-of-honour' ? (
        <AcademicsRollOfHonourPage />
      ) : currentPage === 'academics-approach' ? (
        <AcademicsApproachPage />
      ) : currentPage === 'academics-curriculum' ? (
        <AcademicsCurriculumPage />
      ) : currentPage === 'why-choose-ses' ? (
        <WhyChooseSesPage />
      ) : currentPage === 'legacy-leadership' ? (
        <LegacyLeadershipPage />
      ) : currentPage === 'core-values' ? (
        <CoreValuesPage />
      ) : currentPage === 'schools-curriculum' ? (
        <SchoolsCurriculumPage />
      ) : currentPage === 'about' ? (
        <AboutPage />
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;
