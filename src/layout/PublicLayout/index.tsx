import { Layout } from 'antd';
import Footer from '../../components/Footer/Footer';

function PublicLayout({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Content>{children}</Layout.Content>
      <Footer />
    </Layout>
  );
}
export default PublicLayout;
