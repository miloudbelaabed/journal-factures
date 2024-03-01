import { Button, Col, Row, Tag, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { COLOR_PRIMARY2, COLOR_SECONDARY } from '../../../config/constants';

const { Text } = Typography;
const styles = {
  btn: {
    border: 'none',
    color: COLOR_PRIMARY2,
    boxShadow: 'none',
    fontWeight: 'bold',
    fontSize: 18,
    justifyContent: 'center',
    margin: 0,
    cursor: 'pointer',
  },
};
function DrawerComponenet({ setOpen }: { setOpen(): void }) {
  const { isAuthenticated, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <Row
      gutter={24}
      justify="center"
      style={{ textAlign: 'center', lineHeight: 4, padding: 20 }}
    >
      <Col span={24}>
        <Link style={styles.btn} to="/" onClick={setOpen}>
          accueil
        </Link>
      </Col>

      <Col span={24}>
        <Button style={{ ...styles.btn, backgroundColor: '#f2f2f2' }}>
          contactez_nous
        </Button>

        {/* <Link to='/profile' onClick={setOpen}> */}
        {/*    <Button type='default' icon={<UserOutlined />}>فضاء المستخدم</Button> */}
        {/* </Link> */}
      </Col>

      <Col>
        {isAuthenticated && (
          <Tag color={COLOR_SECONDARY}>
            مرحبا بك : بلعابد ميلود
            <Button
              style={{
                backgroundColor: COLOR_SECONDARY,
                color: '#fff',
                border: 'none',
              }}
              onClick={handleLogout}
            >
              <Text underline style={{ color: 'white' }}>
                Logout
              </Text>
            </Button>
          </Tag>
        )}
      </Col>
      <Col span={24} />
    </Row>
  );
}

export default DrawerComponenet;
