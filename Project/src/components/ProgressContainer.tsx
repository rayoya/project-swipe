import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { APP_COLORS } from '../Utilities/Constants';
import { RewardProgressProps } from '../Utilities/FieldTypes';
import CircularProgress from './CircularProgress';

const ProgressContainer: FC<RewardProgressProps> = ({ nextRewardIn, totalRewardLength, nextReward }) => {
  return (
    <>
      <View style={styles.Container}>
        <CircularProgress nextRewardIn={nextRewardIn} totalRewardLength={totalRewardLength} nextReward={nextReward} />
        <View style={styles.Text__container}>
          <Text style={styles.Text__header}>{nextRewardIn} Purchase until you unlock</Text>
          <Text numberOfLines={2} style={styles.Text__reward}>
            {nextReward}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: 150,
    backgroundColor: APP_COLORS.CONTAINER_BACKGROUND,
    display: 'flex',
    width: '95%',
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 30,
    padding: 16,
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
    shadowColor: APP_COLORS.ORANGE,
  },

  Text__container: {
    width: '65%',
    marginLeft: 8,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },

  Text__header: { fontSize: 18, fontFamily: 'Asap', color: APP_COLORS.ORANGE },

  Text__reward: { fontSize: 32, fontFamily: 'Asap', color: APP_COLORS.ORANGE },
});

export default ProgressContainer;
