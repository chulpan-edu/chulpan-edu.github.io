import { FC } from 'react';
import { Layout } from 'antd';

const { Content: AntdContent } = Layout;

import styles from './styles.module.scss';

type TProps = {
  children: React.ReactNode;
};

export const Content: FC<TProps> = ({ children }) => {
  return (
    <AntdContent>
      <div className={styles['site-layout-content']}>{children}</div>
    </AntdContent>
  );
};
