import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../assets/colors';

interface IArrowIconProps {
  size: number;
  fill: string;
  direction: 'up' | 'down';
}

const ArrowIcon = ({
  size,
  fill = colors.black,
  direction,
  ...props
}: IArrowIconProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" fill={fill} {...props}>
      {direction === 'up' ? (
        <Path d="M11 16h2v-4.2l1.6 1.6L16 12l-4-4l-4 4l1.4 1.4l1.6-1.6V16Zm1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z" />
      ) : (
        <Path d="m12 16l4-4l-1.4-1.4l-1.6 1.6V8h-2v4.2l-1.6-1.6L8 12l4 4Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z" />
      )}
    </Svg>
  );
};
export default ArrowIcon;
