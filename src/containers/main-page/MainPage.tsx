import { useState } from 'react';
import { Layout } from 'antd';

import Header from '@components/header/Header.js';

const MainPage = () => {
  const [count, setCount] = useState(0);

  return (
    <Layout className="layout">
      <Header />
    </Layout>
  );
};

export default MainPage;
