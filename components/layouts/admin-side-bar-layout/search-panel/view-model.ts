'use client';

import { useTransition } from '@react-spring/web';

const useViewModel = ({ isOpen }: { isOpen: boolean }) => {
  const transitions = useTransition(isOpen, {
    from: {
      opacity: 0,
      transform: `translate(-100px, 0px)
    rotate(0deg)
    scale(1)`
    },
    enter: {
      opacity: 1,
      transform: `translate(0px, 0px)
    rotate(0deg)
    scale(1)`
    },
    leave: {
      opacity: 0,
      transform: `translate(-100px, 0px)
    rotate(0deg)
    scale(1)`
    }
  });

  return {
    transitions
  };
};

export default useViewModel;
