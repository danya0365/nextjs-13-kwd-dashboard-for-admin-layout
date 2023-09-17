'use client';

import { MenuItem } from './menu-item/view';
import UserMenuView from './user-menu/view';
import useViewModel from './view-model';
import { animated } from '@react-spring/web';
import { ForwardedRef, HTMLAttributes, forwardRef } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  setIsNotificationPanelOpen: (isOpen: boolean) => void;
  setIsSearchPanelOpen: (isOpen: boolean) => void;
  setIsSettingPanelOpen: (isOpen: boolean) => void;
};

const SidebarView = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      isOpen,
      setIsNotificationPanelOpen,
      setIsSearchPanelOpen,
      setIsSettingPanelOpen,
      ...restProps
    } = props;
    const { transitions } = useViewModel({ isOpen });
    return transitions(
      (style, toggle) =>
        toggle && (
          <animated.aside
            tabIndex={-1}
            className="dark:bg-darker fixed inset-y-0 z-10 flex flex-shrink-0 overflow-hidden border-r bg-white focus:outline-none dark:border-indigo-800 lg:static"
            ref={ref}
            {...restProps}
            style={style}
          >
            {/* Mini column */}
            <div className="flex h-full flex-shrink-0 flex-col border-r px-2 py-4 dark:border-indigo-800">
              {/* Brand */}
              <div className="flex-shrink-0">
                <a
                  href="#"
                  className="dark:text-light inline-block text-xl font-bold uppercase tracking-wider text-indigo-700"
                >
                  K-WD
                </a>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center space-y-4">
                <button
                  onClick={() => {
                    setIsNotificationPanelOpen(true);
                  }}
                  className="dark:hover:text-light dark:bg-dark rounded-full bg-indigo-50 p-2 text-indigo-400 transition-colors duration-200 hover:bg-indigo-100 hover:text-indigo-600 focus:bg-indigo-100 focus:outline-none focus:ring-indigo-800 dark:hover:bg-indigo-700 dark:focus:bg-indigo-700"
                >
                  <span className="sr-only">Open Notification panel</span>
                  <svg
                    className="h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setIsSearchPanelOpen(true);
                  }}
                  className="dark:hover:text-light dark:bg-dark rounded-full bg-indigo-50 p-2 text-indigo-400 transition-colors duration-200 hover:bg-indigo-100 hover:text-indigo-600 focus:bg-indigo-100 focus:outline-none focus:ring-indigo-800 dark:hover:bg-indigo-700 dark:focus:bg-indigo-700"
                >
                  <span className="sr-only">Open search panel</span>
                  <svg
                    className="h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setIsSettingPanelOpen(true);
                  }}
                  className="dark:hover:text-light dark:bg-dark rounded-full bg-indigo-50 p-2 text-indigo-400 transition-colors duration-200 hover:bg-indigo-100 hover:text-indigo-600 focus:bg-indigo-100 focus:outline-none focus:ring-indigo-800 dark:hover:bg-indigo-700 dark:focus:bg-indigo-700"
                >
                  <span className="sr-only">Open settings panel</span>
                  <svg
                    className="h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </div>
              {/* Mini column footer */}
              <div className="relative flex flex-shrink-0 items-center justify-center">
                {/* User avatar button */}
                <UserMenuView />
              </div>
            </div>
            {/* Sidebar links */}
            <nav
              aria-label="Main"
              className="w-64 flex-1 space-y-2 overflow-y-hidden px-2 py-4 hover:overflow-y-auto"
            >
              {/* Dashboards links */}
              <MenuItem.MenuItemView
                title="Dashboard"
                icon={
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                }
              >
                <MenuItem.SubMenuItemView>Default</MenuItem.SubMenuItemView>
                <MenuItem.SubMenuItemView>
                  Project Management
                </MenuItem.SubMenuItemView>
                <MenuItem.SubMenuItemView>E-Commerce</MenuItem.SubMenuItemView>
              </MenuItem.MenuItemView>
              {/* Components links */}
              <MenuItem.MenuItemView
                title="Components"
                icon={
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                }
              >
                <MenuItem.SubMenuItemView>Alerts</MenuItem.SubMenuItemView>
                <MenuItem.SubMenuItemView>Buttons</MenuItem.SubMenuItemView>
                <MenuItem.SubMenuItemView>Cards</MenuItem.SubMenuItemView>
                <MenuItem.SubMenuItemView>Dropdowns</MenuItem.SubMenuItemView>
                <MenuItem.SubMenuItemView>Forms</MenuItem.SubMenuItemView>
                <MenuItem.SubMenuItemView>Lists</MenuItem.SubMenuItemView>
                <MenuItem.SubMenuItemView>Modals</MenuItem.SubMenuItemView>
              </MenuItem.MenuItemView>
              {/* Pages links */}
              <MenuItem.MenuItemView
                title="Pages"
                icon={
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                }
              >
                <MenuItem.SubMenuItemView>Blank</MenuItem.SubMenuItemView>
                <MenuItem.SubMenuItemView>Profile</MenuItem.SubMenuItemView>
                <MenuItem.SubMenuItemView>Pricing</MenuItem.SubMenuItemView>
                <MenuItem.SubMenuItemView>Kanban</MenuItem.SubMenuItemView>
                <MenuItem.SubMenuItemView>Feed</MenuItem.SubMenuItemView>
              </MenuItem.MenuItemView>
              {/* Authentication links */}
              <MenuItem.MenuItemView
                title="Authentication"
                icon={
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                }
              >
                <MenuItem.SubMenuItemView>Register</MenuItem.SubMenuItemView>
                <MenuItem.SubMenuItemView>Login</MenuItem.SubMenuItemView>
                <MenuItem.SubMenuItemView>
                  Password Reset
                </MenuItem.SubMenuItemView>
              </MenuItem.MenuItemView>
              {/* Layouts links */}
              <MenuItem.MenuItemView
                title="Layouts"
                icon={
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                }
              >
                <MenuItem.SubMenuItemView>
                  Two Columns Sidebar
                </MenuItem.SubMenuItemView>
                <MenuItem.SubMenuItemView>
                  Mini + One Columns Sidebar
                </MenuItem.SubMenuItemView>
              </MenuItem.MenuItemView>
            </nav>
          </animated.aside>
        )
    );
  }
);

export default SidebarView;
