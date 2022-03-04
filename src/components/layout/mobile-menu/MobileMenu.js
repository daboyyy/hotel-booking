// components
import Navbar from '../navbar/Navbar';
// hooks
import { useMenu } from '../../../hooks/useMenu';
// styles
import styles from './mobileMenu.module.css';

const menuList = [
  {
    id: 1,
    name: 'Home',
  },
  {
    id: 2,
    name: 'Explore',
  },
  {
    id: 3,
    name: 'Trips',
  },
  {
    id: 4,
    name: 'Profile',
  },
];

const MobileMenu = () => {
  const { onClickMenu } = useMenu();

  return (
    <div className={styles.menu}>
      <Navbar onClickMenu={onClickMenu} />
      <main className={styles.menuList}>
        {menuList.map((data) => (
          <p key={data.id}>{data.name}</p>
        ))}
      </main>
    </div>
  );
};

export default MobileMenu;
