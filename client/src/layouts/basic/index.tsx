import { Outlet } from 'react-router';
import Loader from '../../components/Loader';

const BasicLayout = () => {
  return (
    <>
      <header></header>
      <main
        // make background color black
        className="bg-black"
      >
        <div>ggg</div>
        <Loader />
        <Outlet />
      </main>
      <footer> </footer>
    </>
  );
};

export default BasicLayout;
