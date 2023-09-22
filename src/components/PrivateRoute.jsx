import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import Loader from './Loader/Loader';

function PrivateRoute({ redirectTo }) {
  const { token } = useSelector(state => state.auth);

  return token ? (
    <Suspense fallback={<Loader/>}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to={redirectTo} />
  );
}

export default PrivateRoute;
