import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import CasesPage from './pages/CasesPage';
import SolutionsPage from './pages/SolutionsPage';
import DemoPage from './pages/DemoPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: '首页',
    path: '/',
    element: <HomePage />
  },
  {
    name: '产品功能',
    path: '/features',
    element: <FeaturesPage />
  },
  {
    name: '案例展示',
    path: '/cases',
    element: <CasesPage />
  },
  {
    name: '解决方案',
    path: '/solutions',
    element: <SolutionsPage />
  },
  {
    name: '在线演示',
    path: '/demo',
    element: <DemoPage />
  },
  {
    name: '联系我们',
    path: '/contact',
    element: <ContactPage />
  },
  {
    name: '关于我们',
    path: '/about',
    element: <AboutPage />
  }
];

export default routes;