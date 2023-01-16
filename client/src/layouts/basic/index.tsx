import { Outlet } from 'react-router';
import Header from '../../components/Header';
import Loader from '../../components/Loader';

const BasicLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer> </footer>
    </>
  );
};

export default BasicLayout;
