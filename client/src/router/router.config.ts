import { lazy, ComponentType } from 'react';
import homeIcon from '../assert/image/home.png';
import experimentIcon from '../assert/image/experiment.png';
import practiceIcon from '../assert/image/practice.png';
const Home = lazy(() => import('../page/Home'));
const LayoutStudy = lazy(() => import('../page/LayoutStudy'));
const Editor = lazy(() => import('../page/Editor'));
const Dragger = lazy(() => import('../page/Dragger'));

export interface MenuItem {
    title: string;
    icon?: string;
    path: string;
    subs?: Array<Omit<MenuItem, 'subs'>>;
    component?: ComponentType;
    children?: Array<MenuItem>;
}
export const menus: Array<MenuItem> = [
    {
        title: '首页',
        icon: homeIcon,
        path: '/home',
        component: Home,
    },
    {
        title: '练习场',
        icon: practiceIcon,
        path: '/practice',
        children: [
            {
                title: '布局',
                path: '/layout',
                component: LayoutStudy,
            },
            {
                title: 'React-Grid-Layout',
                path: '/dragger',
                component: Dragger,
            },
        ],
    },
    {
        title: '试验场',
        icon: experimentIcon,
        path: '/experiment',
        children: [
            {
                title: '编辑器',
                path: '/editor',
                component: Editor,
            },
        ],
    },
];
