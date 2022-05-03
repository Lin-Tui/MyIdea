import React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import getRouter from './router/router';
import './index.scss';
import ThemeController from './component/ThemeController';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <ThemeController>
            <Provider store={store}>{getRouter()}</Provider>
        </ThemeController>
    </React.StrictMode>
);
