"use client";

import { PropsWithChildren } from "react";
import "./styles.scss";
import BackdropView from "./backdrop/view";
import LoadingView from "./loading/view";
import NotificationPanelView from "./notification-panel/view";
import SearchPanelView from "./search-panel/view";
import SettingPanelView from "./setting-panel/view";
import SidebarView from "./sidebar/view";
import useViewModel from "./view-model";
import { classNames } from "@/helpers";

export interface Props {}

const AdminSideBarLayoutView = ({ children }: PropsWithChildren<Props>) => {
  const {
    isMount,
    isSidebarOpen,
    isAlwaysSidebarOpen,
    setIsSidebarOpen,
    isNotificationPanelOpen,
    setIsNotificationPanelOpen,
    isSearchPanelOpen,
    setIsSearchPanelOpen,
    isSettingPanelOpen,
    setIsSettingPanelOpen,
    sideBarRef,
    settingPanelRef,
    searchPanelRef,
    notificationsPanelRef,
    setLightTheme,
    setDarkTheme,
    isDarkTheme,
  } = useViewModel();
  return (
    <div className={classNames(isDarkTheme && "dark")}>
      <div className="dark:bg-dark dark:text-light flex h-screen bg-gray-100 text-gray-900 antialiased">
        {/* Loading screen */}
        <LoadingView isLoading={!isMount} />
        {/* Sidebar */}
        <BackdropView
          isOpen={isSidebarOpen && !isAlwaysSidebarOpen}
          onBackdropClick={() => setIsSidebarOpen(false)}
        />
        <SidebarView
          isOpen={isSidebarOpen || isAlwaysSidebarOpen}
          ref={sideBarRef}
          setIsNotificationPanelOpen={setIsNotificationPanelOpen}
          setIsSearchPanelOpen={setIsSearchPanelOpen}
          setIsSettingPanelOpen={setIsSettingPanelOpen}
        />
        {/* Sidebars button */}
        {!isAlwaysSidebarOpen && (
          <div className="fixed right-10 top-5 flex items-center space-x-4 z-[1]">
            <button
              onClick={() => {
                setIsSidebarOpen(true);
              }}
              className={classNames(
                "dark:hover:text-light dark:bg-dark rounded-md bg-indigo-50 p-1 text-indigo-400 transition-colors duration-200 hover:bg-indigo-100 hover:text-indigo-600 focus:outline-none focus:ring dark:hover:bg-indigo-700"
              )}
            >
              <span className="sr-only">Toggle main manu</span>
              <span aria-hidden="true">
                {isSidebarOpen ? (
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </span>
            </button>
          </div>
        )}
        {/* Main content */}
        <main className={classNames("flex-1")}>
          <div
            className={classNames(
              "relative flex flex-col h-full w-full overflow-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch",
              !isAlwaysSidebarOpen && "mt-8"
            )}
          >
            {children}
          </div>
        </main>
        {/* Panels */}
        {/* Settings Panel */}
        {/* Backdrop */}
        <BackdropView
          isOpen={isSettingPanelOpen}
          onBackdropClick={() => setIsSettingPanelOpen(false)}
        />
        {/* Panel */}
        <SettingPanelView
          isOpen={isSettingPanelOpen}
          ref={settingPanelRef}
          setLightTheme={setLightTheme}
          setDarkTheme={setDarkTheme}
          setIsSettingPanelOpen={setIsSettingPanelOpen}
          isDarkTheme={isDarkTheme}
        />
        {/* Notification panel */}
        {/* Backdrop */}
        <BackdropView
          isOpen={isNotificationPanelOpen}
          onBackdropClick={() => setIsNotificationPanelOpen(false)}
        />
        {/* Panel */}
        <NotificationPanelView
          isOpen={isNotificationPanelOpen}
          ref={notificationsPanelRef}
          setIsNotificationPanelOpen={setIsNotificationPanelOpen}
        />
        {/* Search panel */}
        {/* Backdrop */}
        <BackdropView
          isOpen={isSearchPanelOpen}
          onBackdropClick={() => setIsSearchPanelOpen(false)}
        />
        {/* Panel */}
        <SearchPanelView
          isOpen={isSearchPanelOpen}
          ref={searchPanelRef}
          setIsSearchPanelOpen={setIsSearchPanelOpen}
        />
      </div>
    </div>
  );
};

export default AdminSideBarLayoutView;
