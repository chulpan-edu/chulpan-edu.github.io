import { Link } from 'react-router-dom';

import ReactIcon from '@assets/images/icons/react.svg';
import { ReactComponent as ViteIcon } from '@assets/images/icons/vite.svg';
import styles from './style.module.scss';

const Header = () => {
  return (
    <nav className={styles.header}>
      Vite
      <Link to="/about">
        <ViteIcon />
      </Link>
      <span>React</span>
      <Link to="/about">
        <img src={ReactIcon} alt={'react-icon'} />
      </Link>
      template
    </nav>
  );
};

export default Header;
