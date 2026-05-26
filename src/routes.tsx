import Home from '@/pages/Home';
import Discover from '@/pages/Discover';
import Publish from '@/pages/Publish';
import Profile from '@/pages/Profile';
import VideoDetail from '@/pages/VideoDetail';

export interface RouteConfig {
  path: string;
  element: React.ComponentType;
}

export const routes: RouteConfig[] = [
  { path: '/', element: Home },
  { path: '/discover', element: Discover },
  { path: '/publish', element: Publish },
  { path: '/profile', element: Profile },
  { path: '/user/:id', element: Profile },
  { path: '/video/:id', element: VideoDetail },
];
