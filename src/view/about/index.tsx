import { lazy } from 'react';

const About = lazy(() => import('./AboutPage'));
const AboutMessage = lazy(() => import('./AboutMessage'));

export { About, AboutMessage };
