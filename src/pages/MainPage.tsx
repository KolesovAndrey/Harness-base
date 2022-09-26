import { Outlet } from 'react-router-dom';

const MainPage: React.FC = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <Outlet />
    </div>
  );
};

export default MainPage;
