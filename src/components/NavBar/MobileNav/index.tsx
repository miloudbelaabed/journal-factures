import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { AlignCenterOutlined } from '@ant-design/icons';
import DrawerComponenet from './Drawer';
import { COLOR_PRIMARY2 } from '../../../config/constants';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '140px',
    justifyContent: 'center',
  },
  fnposLogo: {
    width: '100px',
    height: '100px',
    backgroundImage: 'url(./logo-fnpos.png)',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  aps: {
    width: '100px',
    height: '100px',
    backgroundImage: 'url(./logo_ministere.png)',
    backgroundSize: '95%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    marginRight: '10px',
  },
  divider: {
    minWidth: '100%',
    margin: '0',
    backgroundColor: '#ccc',
    height: '3px',
  },
  items: {
    width: '80%',
    textAlign: 'center' as const,
    color: `${COLOR_PRIMARY2}`,
  },

  btn: {
    border: 'none',
    color: COLOR_PRIMARY2,
    boxShadow: 'none',
    fontWeight: 'bold',
    fontSize: 18,
  },
};

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <Row
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: '12vh',
          backgroundColor: 'white',
        }}
      >
        <Col>
          <div style={styles.fnposLogo} />
        </Col>
        <Col>
          <AlignCenterOutlined
            style={{ fontSize: '30px', color: COLOR_PRIMARY2 }}
            onClick={handleClose}
          />
        </Col>
        <Col>
          <div style={styles.aps} />
        </Col>
      </Row>
      <Row gutter={24} style={{ justifyContent: 'center' }}>
        <Col span={24}>
          {open && <DrawerComponenet setOpen={handleClose} />}
        </Col>
      </Row>
    </>
  );
}
