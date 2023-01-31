import { createBrowserRouter } from 'react-router-dom';

import { Landing } from '@pages/landing';

export enum Paths {
    Landing = '/',
}

export const router = createBrowserRouter([
    {
        path: Paths.Landing,
        element: <Landing />,
    },
]);
