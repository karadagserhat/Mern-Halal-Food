import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const HomeLayout = lazy(() => import('./pages/HomeLayout'));
const Landing = lazy(() => import('./pages/Landing'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const DashboardLayout = lazy(() => import('./pages/DashboardLayout'));
const Error = lazy(() => import('./pages/Error'));
const AddBrand = lazy(() => import('./pages/AddBrand'));
const Stats = lazy(() => import('./pages/Stats'));
const AllBrands = lazy(() => import('./pages/AllBrands'));
const Profile = lazy(() => import('./pages/Profile'));
const Admin = lazy(() => import('./pages/Admin'));
const EditBrand = lazy(() => import('./pages/EditBrand'));

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as addBrandAction } from './pages/AddBrand';
import { action as editBrandAction } from './pages/EditBrand';
import { action as deleteBrandAction } from './pages/DeleteBrand';
import { action as profileAction } from './pages/Profile';
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { loader as allBrandsLoader } from './pages/AllBrands';
import { loader as editBrandLoader } from './pages/EditBrand';
import { loader as adminLoader } from './pages/Admin';
import { loader as statsLoader } from './pages/Stats';
import ErrorElement from './components/ErrorElement';
import SpinnerFullPage from './components/SpinnerFullPage';

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.documentElement.classList.toggle('dark-mode', isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 mins
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction(queryClient),
      },
      {
        path: 'dashboard',
        element: (
          <DashboardLayout
            isDarkThemeEnabled={isDarkThemeEnabled}
            queryClient={queryClient}
          />
        ),
        loader: dashboardLoader(queryClient),
        children: [
          {
            index: true,
            element: <AddBrand />,
            action: addBrandAction(queryClient),
          },
          {
            path: 'stats',
            element: <Stats />,
            loader: statsLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: 'all-brands',
            element: <AllBrands />,
            loader: allBrandsLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: 'profile',
            element: <Profile />,
            action: profileAction(queryClient),
          },
          {
            path: 'admin',
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: 'edit-brand/:id',
            element: <EditBrand />,
            loader: editBrandLoader(queryClient),
            action: editBrandAction(queryClient),
          },
          {
            path: 'delete-brand/:id',
            action: deleteBrandAction(queryClient),
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <Suspense fallback={<SpinnerFullPage />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
};
export default App;
