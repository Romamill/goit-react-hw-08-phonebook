import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Loader from './Loader/Loader';

function PublicRoute({ redirectTo = '/' }) {
  const { token } = useSelector(state => state.auth);
  const isAuthenticated = token;
  return isAuthenticated ? (
    <Navigate to={redirectTo} />
  ) : (
    <Suspense fallback={<Loader/>}>
      <Outlet />
    </Suspense>
  );
}

export default PublicRoute;
