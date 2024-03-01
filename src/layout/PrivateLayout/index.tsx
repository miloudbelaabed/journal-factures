import { Layout } from 'antd';

import { useState } from 'react';

import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/Nav';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar';

import { useHeader } from '../../contexts/AppContext';
import ContentHeader from '../../components/ContentHeader';

function PrivateLayout() {
  const [state, setState] = useState(window.innerWidth);
  const { headerContent } = useHeader();
  const handleWindowResize = () => {
    setState(window.innerWidth);
  };
  window.addEventListener('resize', handleWindowResize);
  const styles = {
    container: {
      padding: '1.5rem',
    },
  };
  return (
    <>
      <NavBar />

      <Layout style={{ minHeight: '85vh' }}>
        <ContentHeader title={headerContent} />
        <Layout>
          <SideBar />
          <Layout.Content style={styles.container}>
            <Outlet />
          </Layout.Content>
        </Layout>

        <Footer />
      </Layout>
    </>
  );
}
export default PrivateLayout;
