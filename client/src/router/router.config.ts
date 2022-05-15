import { lazy, ComponentType } from 'react';

const Home = lazy(() => import('../page/Home'));
const LayoutStudy = lazy(() => import('../page/LayoutStudy'));
export interface MenuItem {
    title: string;
    icon?: string;
    path: string;
    subs?: Array<Omit<MenuItem, 'subs'>>;
    component: ComponentType;
}
export const menus: Array<MenuItem> = [
    {
        title: '首页',
        icon: 'home',
        path: '/home',
        component: Home,
    },
    {
        title: '布局',
        icon: 'grid',
        path: '/layout',
        component: LayoutStudy,
    },
];
