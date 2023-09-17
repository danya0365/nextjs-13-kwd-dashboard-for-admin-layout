'use client';

import { useTransition } from '@react-spring/web';

const useViewModel = ({ isOpen }: { isOpen: boolean }) => {
  const transitions = useTransition(isOpen, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 0.5
    },
    leave: {
      opacity: 0
    }
  });

  return {
    transitions
  };
};

export default useViewModel;
