import { usePathname } from 'next/navigation';

const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Home',
      href: '/',
      active: pathname === '/documents/',
      position: 'top',
    },
    {
      name: 'Profile',
      href: '/profile',
      active: isNavItemActive(pathname, '/documents/profile'),
      position: 'top',
    },
    {
      name: 'Notifications',
      href: '/notifications',
      active: isNavItemActive(pathname, '/documents/notifications'),
      position: 'top',
    },
    {
      name: 'Projects',
      href: '/projects',
      active: isNavItemActive(pathname, '/documents/projects'),
      position: 'top',
    },
    {
      name: 'Settings',
      href: '/settings',
      active: isNavItemActive(pathname, '/documents/settings'),
      position: 'bottom',
    },
    {
      name: 'Delivery',
      href: '/delivery',
      active: isNavItemActive(pathname, '/documents/delivery'),
      position: 'top',
    },
  ];
};

export default NavItems;
