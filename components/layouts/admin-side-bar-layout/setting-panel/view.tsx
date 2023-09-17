"use client";

import { classNames } from "@/helpers";
import useViewModel from "./view-model";
import { animated } from "@react-spring/web";
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  isDarkTheme: boolean;
  setLightTheme: () => void;
  setDarkTheme: () => void;
  setIsSettingPanelOpen: (isOpen: boolean) => void;
};

const SettingPanelView = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      isOpen,
      isDarkTheme,
      setLightTheme,
      setDarkTheme,
      setIsSettingPanelOpen,
      ...restProps
    } = props;
    const { transitions } = useViewModel({ isOpen });
    return transitions(
      (style, toggle) =>
        toggle && (
          <animated.section
            ref={ref}
            tabIndex={-1}
            className="dark:bg-darker dark:text-light fixed inset-y-0 right-0 z-20 w-full max-w-xs bg-white shadow-xl focus:outline-none sm:max-w-md"
            aria-labelledby="settingPanelLabel"
            {...restProps}
            style={style}
          >
            <div className="absolute left-0 -translate-x-full transform p-2">
              {/* Close button */}
              <button
                onClick={() => setIsSettingPanelOpen(false)}
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
            {/* Panel content */}
            <div className="flex h-screen flex-col">
              {/* Panel header */}
              <div className="flex flex-shrink-0 flex-col items-center justify-center space-y-4 border-b px-4 py-8 dark:border-indigo-700">
                <span
                  aria-hidden="true"
                  className="text-gray-500 dark:text-indigo-600"
                >
                  <svg
                    className="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </span>
                <h2
                  id="settingPanelLabel"
                  className="dark:text-light text-xl font-medium text-gray-500"
                >
                  Settings
                </h2>
              </div>
              {/* Content */}
              <div className="flex-1 overflow-hidden hover:overflow-y-auto">
                {/* Theme */}
                <div className="space-y-4 p-4 md:p-8">
                  <h6 className="dark:text-light text-lg font-medium text-gray-400">
                    Mode
                  </h6>
                  <div className="flex items-center space-x-8">
                    {/* Light button */}
                    <button
                      onClick={() => {
                        setLightTheme();
                      }}
                      className={classNames(
                        "flex items-center justify-center space-x-4 rounded-md border px-4 py-2 transition-colors hover:border-gray-900 hover:text-gray-900 focus:outline-none focus:ring focus:ring-indigo-400 dark:border-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-100 dark:focus:ring-indigo-700",
                        !isDarkTheme &&
                          "border-gray-900 text-gray-900 dark:border-indigo-500 dark:text-indigo-100",
                        isDarkTheme && "text-gray-500 dark:text-indigo-500"
                      )}
                    >
                      <span>
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </span>
                      <span>Light</span>
                    </button>
                    {/* Dark button */}
                    <button
                      onClick={() => {
                        setDarkTheme();
                      }}
                      className={classNames(
                        "flex items-center justify-center space-x-4 rounded-md border px-4 py-2 transition-colors hover:border-gray-900 hover:text-gray-900 focus:outline-none focus:ring focus:ring-indigo-400 dark:border-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-100 dark:focus:ring-indigo-700",
                        isDarkTheme &&
                          "border-gray-900 text-gray-900 dark:border-indigo-500 dark:text-indigo-100",
                        !isDarkTheme && "text-gray-500 dark:text-indigo-500"
                      )}
                    >
                      <span>
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        </svg>
                      </span>
                      <span>Dark</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </animated.section>
        )
    );
  }
);

export default SettingPanelView;
