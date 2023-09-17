'use client';

import useViewModel from './view-model';
import { animated } from '@react-spring/web';
import { ForwardedRef, HTMLAttributes, forwardRef } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
};

const UserDropdownMenuView = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const { isOpen } = props;
    const { transitions } = useViewModel({ isOpen });
    return transitions(
      (style, toggle) =>
        toggle && (
          <animated.div
            ref={ref}
            className="dark:bg-dark absolute bottom-full left-5 mb-4 w-56 min-w-max rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            tabIndex={-1}
            role="menu"
            aria-orientation="vertical"
            aria-label="User menu"
            style={style}
          >
            <a
              href="#"
              role="menuitem"
              className="dark:text-light block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:hover:bg-indigo-600"
            >
              Your Profile
            </a>
            <a
              href="#"
              role="menuitem"
              className="dark:text-light block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:hover:bg-indigo-600"
            >
              Settings
            </a>
            <a
              href="#"
              role="menuitem"
              className="dark:text-light block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:hover:bg-indigo-600"
            >
              Logout
            </a>
          </animated.div>
        )
    );
  }
);

export default UserDropdownMenuView;
