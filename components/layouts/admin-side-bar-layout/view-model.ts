"use client";

import { useDetectDeviceScreen } from "@/hooks";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState } from "react";

const useViewModel = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAlwaysSidebarOpen, setIsAlwaysSidebarOpen] = useState(false);
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] = useState(false);
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(false);
  const [isSettingPanelOpen, setIsSettingPanelOpen] = useState(false);
  const { isLargeDevice, isExtraLargeDevice } = useDetectDeviceScreen();
  const sideBarRef = useRef<HTMLDivElement>(null);
  const notificationsPanelRef = useRef<HTMLDivElement>(null);
  const searchPanelRef = useRef<HTMLDivElement>(null);
  const settingPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSidebarOpen) {
      sideBarRef.current?.focus();
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    if (isNotificationPanelOpen) {
      notificationsPanelRef.current?.focus();
    }
  }, [isNotificationPanelOpen]);

  useEffect(() => {
    if (isSearchPanelOpen) {
      searchPanelRef.current?.focus();
    }
  }, [isSearchPanelOpen]);

  useEffect(() => {
    if (isSettingPanelOpen) {
      settingPanelRef.current?.focus();
    }
  }, [isSettingPanelOpen]);

  useEffect(() => {
    if (isLargeDevice || isExtraLargeDevice) {
      setIsAlwaysSidebarOpen(true);
    } else {
      setIsAlwaysSidebarOpen(false);
    }
  }, [isLargeDevice, isExtraLargeDevice]);

  const setSystemTheme = useCallback(() => {
    setTheme("system");
  }, [setTheme]);

  const setLightTheme = useCallback(() => {
    setTheme("light");
  }, [setTheme]);

  const setDarkTheme = useCallback(() => {
    setTheme("dark");
  }, [setTheme]);

  return {
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
    setSystemTheme,
    setLightTheme,
    setDarkTheme,
    isDarkTheme: resolvedTheme === "dark",
  };
};

export default useViewModel;
