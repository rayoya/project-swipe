import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { APP_COLORS } from '../Utilities/Constants';
import { RewardProgressProps } from '../Utilities/FieldTypes';

const CircularProgress: FC<RewardProgressProps> = ({ nextRewardIn, totalRewardLength, nextReward }) => {
  return (
    <AnimatedCircularProgress
      size={120}
      width={10}
      fill={((totalRewardLength - nextRewardIn) * 100) / totalRewardLength}
      tintColor={APP_COLORS.ORANGE}
      backgroundColor="black"
    >
      {(fill) => (
        <Text>
          {totalRewardLength - nextRewardIn} / {totalRewardLength}
        </Text>
      )}
    </AnimatedCircularProgress>
  );
};

export default CircularProgress;
