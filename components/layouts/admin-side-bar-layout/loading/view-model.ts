'use client';

import { useTransition } from '@react-spring/web';

const useViewModel = ({ isLoading }: { isLoading: boolean }) => {
  const transitions = useTransition(isLoading, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
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
