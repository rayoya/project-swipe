import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CouponProps } from '../Utilities/FieldTypes';

const Coupon: FC<CouponProps> = ({ couponType, couponValue, caption }) => {
  return (
    <View style={styles.Coupon__container}>
      <Text style={styles.Coupon__title}>{couponType}</Text>
      <Text numberOfLines={2} style={styles.Coupon__description}>
        {couponValue}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Coupon__container: {
    display: 'flex',
    width: 160,
    height: 120,
    backgroundColor: '#2F1717',
    borderRadius: 12,
    padding: 4,
    margin: 4,
  },

  Coupon__title: {
    display: 'flex',
    flex: 0.3,
    width: '100%',
    color: 'white',
    padding: 8,
    fontSize: 16,
    fontFamily: 'Asap-Bold',
  },

  Coupon__description: {
    display: 'flex',
    flex: 1,
    width: '100%',
    color: 'white',
    padding: 8,
    fontSize: 20,
    fontFamily: 'Asap-Bold',
    overflow: 'hidden',
    textAlign: 'center',
  },
});

export default Coupon;
