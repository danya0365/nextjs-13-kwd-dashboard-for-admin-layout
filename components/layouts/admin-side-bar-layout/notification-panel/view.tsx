'use client';

import useViewModel from './view-model';
import { animated } from '@react-spring/web';
import { ForwardedRef, HTMLAttributes, forwardRef } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  setIsNotificationPanelOpen: (isOpen: boolean) => void;
};

const NotificationPanelView = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const { isOpen, setIsNotificationPanelOpen, ...restProps } = props;
    const { transitions } = useViewModel({ isOpen });
    return transitions(
      (style, toggle) =>
        toggle && (
          <animated.section
            ref={ref}
            tabIndex={-1}
            aria-labelledby="notificationPanelLabel"
            className="dark:bg-darker dark:text-light fixed inset-y-0 z-20 w-full max-w-xs bg-white focus:outline-none sm:max-w-md"
            {...restProps}
            style={style}
          >
            <div className="absolute right-0 translate-x-full transform p-2">
              {/* Close button */}
              <button
                onClick={() => {
                  setIsNotificationPanelOpen(false);
                }}
                className="rounded-md p-2 text-white focus:outline-none focus:ring"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* x-data="{ activeTabe: 'action' }" */}
            <div className="flex h-screen flex-col">
              {/* Panel header */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-between border-b px-4 pt-4 dark:border-indigo-800">
                  <h2
                    id="notificationPanelLabel"
                    className="pb-4 font-semibold"
                  >
                    Notifications
                  </h2>
                  <div className="space-x-2">
                    {/* @click.prevent="activeTabe = 'action'" */}
                    {/* :class="{'border-indigo-700 dark:border-indigo-600': activeTabe == 'action', 'border-transparent': activeTabe != 'action'}" */}
                    <button className="translate-y-px transform border-b px-px pb-4 transition-all duration-200 focus:outline-none">
                      Action
                    </button>
                    {/* @click.prevent="activeTabe = 'user'"
:class="{'border-indigo-700 dark:border-indigo-600': activeTabe == 'user', 'border-transparent': activeTabe != 'user'}" */}
                    <button className="translate-y-px transform border-b px-px pb-4 transition-all duration-200 focus:outline-none">
                      User
                    </button>
                  </div>
                </div>
              </div>
              {/* Panel content (tabs) */}
              <div className="flex-1 overflow-y-hidden pt-4 hover:overflow-y-auto">
                {/* Action tab */}
                {/* x-show.transition.in="activeTabe == 'action'" */}
                <div className="space-y-4">
                  <p className="px-4">Action tab content</p>
                  {/*  */}
                  {/* Action tab content */}
                  {/*  */}
                </div>
                {/* User tab */}
                {/* x-show.transition.in="activeTabe == 'user'" */}
                <div className="space-y-4">
                  <p className="px-4">User tab content</p>
                  {/*  */}
                  {/* User tab content */}
                  {/*  */}
                </div>
              </div>
            </div>
          </animated.section>
        )
    );
  }
);

export default NotificationPanelView;
