'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const useViewModel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const userDropdownMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      if (
        userDropdownMenuRef.current &&
        buttonRef.current &&
        !userDropdownMenuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [userDropdownMenuRef]);

  useEffect(() => {
    if (isOpen) {
      userDropdownMenuRef.current?.focus();
    }
  }, [isOpen]);

  const toggleIsOpenCallback = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setIsOpen((prevVal) => !prevVal);
    },
    [isOpen]
  );

  return {
    isOpen,
    toggleIsOpenCallback,
    buttonRef,
    userDropdownMenuRef
  };
};

export default useViewModel;
