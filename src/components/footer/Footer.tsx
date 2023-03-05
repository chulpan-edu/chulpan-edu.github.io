import { FC } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content: AntdContent, Footer: AntdFooter } = Layout;

export const Footer: FC = () => {
  return (
    <AntdFooter style={{ textAlign: 'center', backgroundColor: '#001529', color: 'rgba(255, 255, 255, 0.65)' }}>
      Детский сад №302 ©2023
    </AntdFooter>
  );
};
