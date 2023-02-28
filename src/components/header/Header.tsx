import { Layout, Menu } from 'antd';

import styles from './styles.module.scss';

const { Header: AntdHeader } = Layout;

const Header = () => {
  return (
      <AntdHeader>
        <div className={styles.logo}>Мин татар телендә сөйләшәм</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={new Array(5).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `Меню ${key}`,
            };
          })}
        />
      </AntdHeader>
  );
};

export default Header;
