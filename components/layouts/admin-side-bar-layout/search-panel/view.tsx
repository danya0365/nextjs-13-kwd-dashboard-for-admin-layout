'use client';

import useViewModel from './view-model';
import { animated } from '@react-spring/web';
import { ForwardedRef, HTMLAttributes, forwardRef } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  setIsSearchPanelOpen: (isOpen: boolean) => void;
};

const SearchPanelView = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const { isOpen, setIsSearchPanelOpen, ...restProps } = props;
    const { transitions } = useViewModel({ isOpen });
    return transitions(
      (style, toggle) =>
        toggle && (
          <animated.section
            ref={ref}
            className="dark:bg-darker dark:text-light fixed inset-y-0 z-20 w-full max-w-xs bg-white shadow-xl focus:outline-none sm:max-w-md"
            {...restProps}
            style={style}
          >
            <div className="absolute right-0 translate-x-full transform p-2">
              {/* Close button */}
              <button
                onClick={() => {
                  setIsSearchPanelOpen(false);
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
            <h2 className="sr-only">Search panel</h2>
            {/* Panel content */}
            <div className="flex h-screen flex-col">
              {/* Panel header (Search input) */}
              <div className="dark:focus-within:text-light relative flex-shrink-0 border-b px-4 py-8 text-gray-400 focus-within:text-gray-700 dark:border-indigo-800">
                <span className="absolute inset-y-0 inline-flex items-center px-4">
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
                {/* x-ref="searchInput" */}
                <input
                  type="text"
                  className="dark:bg-dark dark:text-light w-full rounded-full border py-2 pl-10 pr-4 focus:outline-none focus:ring dark:border-transparent"
                  placeholder="Search..."
                />
              </div>
              {/* Panel content (Search result) */}
              <div className="h flex-1 space-y-4 overflow-y-hidden px-4 pb-4 hover:overflow-y-auto">
                <h3 className="dark:text-light py-2 text-sm font-semibold text-gray-600">
                  History
                </h3>
                <p className="px=4">Search result</p>
                {/*  */}
                {/* Search content */}
                {/*  */}
              </div>
            </div>
          </animated.section>
        )
    );
  }
);

export default SearchPanelView;
