"use client";

import { useMediaQuery } from "@uidotdev/usehooks";

const useDetectDeviceScreen = () => {
  const isExtraSmallDevice = useMediaQuery(
    "only screen and (max-width : 719px)"
  );
  const isSmallDevice = useMediaQuery(
    "only screen and (min-width : 720px) and (max-width : 768px)"
  );
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );

  return {
    isExtraSmallDevice,
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
    isExtraLargeDevice,
  };
};

export { useDetectDeviceScreen };
