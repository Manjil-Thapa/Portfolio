'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import { forwardRef } from 'react';

const navMenu = [
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

const Navbar = () => {
  return (
    <nav className='flex max-w-screen-xl m-auto justify-between'>
      <Image src='Logo.svg' alt='logo' width={200} height={40} />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='w-[400px] gap-3 p-4 md:w-[200px] md:grid-cols-2 '>
                {navMenu.map(navItem => (
                  <ListItem
                    key={navItem.title}
                    title={navItem.title}
                    href={navItem.href}
                  >
                    {navItem.title}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;

const ListItem = forwardRef((props, ref) => {
  const { className, title, children, ...rest } = props;

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors
          hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...rest}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = 'ListItem';
