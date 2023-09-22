import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Suspense fallback={<Loader/>}>
      <Header />
      <Outlet />
    </Suspense>
  );
}

export default Layout;
