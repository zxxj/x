import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

export const Router = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};
