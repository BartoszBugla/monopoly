import { ThemeProvider } from '@mui/system';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
);
