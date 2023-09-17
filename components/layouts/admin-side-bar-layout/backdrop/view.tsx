'use client';

import useViewModel from './view-model';
import { animated } from '@react-spring/web';
import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  onBackdropClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const BackdropView = (props: Props) => {
  const { isOpen, onBackdropClick } = props;
  const { transitions } = useViewModel({ isOpen });
  return transitions(
    (style, toggle) =>
      toggle && (
        <animated.div
          className="fixed inset-0 z-10 bg-indigo-800"
          style={style}
          onClick={onBackdropClick}
          aria-hidden="true"
        />
      )
  );
};
export default BackdropView;
