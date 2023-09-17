'use client';

import LoadingDotsView from './loading-dots/view';
import useViewModel from './view-model';
import { animated } from '@react-spring/web';
import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  isLoading: boolean;
};

const LoadingView = (props: Props) => {
  const { isLoading } = props;
  const { transitions } = useViewModel({ isLoading });
  return transitions(
    (style, toggle) =>
      toggle && (
        <animated.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-800 text-2xl font-semibold text-white"
          style={style}
        >
          <LoadingDotsView />
        </animated.div>
      )
  );
};

export default LoadingView;
