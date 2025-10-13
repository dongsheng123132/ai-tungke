import SamplePage from './pages/SamplePage';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Sample Page',
    path: '/',
    element: <SamplePage />
  }
];

export default routes;