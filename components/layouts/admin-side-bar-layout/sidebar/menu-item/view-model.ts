'use client';

import { useEffect, useState } from 'react';

const useViewModel = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  useEffect(() => {}, []);

  return {
    isActive,
    setIsActive,
    isSubMenuOpen,
    setIsSubMenuOpen
  };
};

export default useViewModel;
