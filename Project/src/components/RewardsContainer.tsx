import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { APP_COLORS } from '../Utilities/Constants';
import { CouponProps, COUPON_TYPE } from '../Utilities/FieldTypes';
import Coupon from './Coupon';

const dummyCoupons = [
  {
    couponType: COUPON_TYPE.DISCOUNT,
    couponValue: '$5 off',
    caption: undefined,
  },
  {
    couponType: COUPON_TYPE.GIFT,
    couponValue: 'Free coffee with your next purchase',
    caption: undefined,
  },
  {
    couponType: COUPON_TYPE.DISCOUNT,
    couponValue: '$5 off',
    caption: 'With $30+ purchase',
  },
];

const RewardsContainer = () => {
  return (
    <>
      <View style={styles.Container}>
        <Text style={styles.TitleText}>My Rewards</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.ScrollContainer}>
          {dummyCoupons.map((coupon: CouponProps, idx) => {
            // Since items have on stable unique values, idx has been used as the key
            // TODO: Implement a better unique value method
            return (
              <Coupon
                key={idx}
                couponType={coupon.couponType}
                couponValue={coupon.couponValue}
                caption={coupon.caption}
              />
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: 250,
    backgroundColor: APP_COLORS.CONTAINER_BACKGROUND,
    display: 'flex',
    width: '95%',
    borderRadius: 10,
  },

  TitleText: {
    fontSize: 36,
    padding: 16,
    fontFamily: 'Asap',
    color: APP_COLORS.ORANGE,
  },

  ScrollContainer: {
    width: '100%',
    display: 'flex',
    height: 100,
    flexDirection: 'row',
    paddingTop: 10,
  },
});

export default RewardsContainer;
