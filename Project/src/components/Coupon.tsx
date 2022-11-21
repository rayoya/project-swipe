import { FC, useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { CouponProps } from '../Utilities/FieldTypes';
import Modal from 'react-native-modal';
import QRCode from 'react-qr-code';
import { APP_COLORS } from '../Utilities/Constants';

const Coupon: FC<CouponProps> = ({ couponType, couponValue, caption }) => {
  const [showCouponCode, setShowCouponCode] = useState<boolean>(false);

  const couponTouched = (): void => {
    setShowCouponCode((prev: boolean) => !prev);
  };

  return (
    <TouchableWithoutFeedback onPress={() => couponTouched()}>
      <View style={styles.Coupon__container}>
        <Text style={styles.Coupon__title}>{couponType}</Text>
        <Text numberOfLines={2} style={styles.Coupon__description}>
          {couponValue}
        </Text>
        <View style={styles.Modal__view}>
          <Modal isVisible={showCouponCode} style={styles.Modal__container}>
            <View style={styles.Modal__upperContainer}>
              <Text style={styles.Modal__title}>Scan this QR code to redeem your reward</Text>
              <QRCode
                size={256}
                value={'Placeholder for now, we will be using a camera module to handle this'}
                viewBox={`0 0 256 256`}
                style={styles.Modal__qrCode}
              />
              <Text style={styles.Modal__reward}> {couponValue}</Text>
              <Text style={styles.Modal__caption}>*{caption ? caption : 'Redeemable once'}</Text>
            </View>
            <Pressable style={styles.CloseButton} onPress={couponTouched}>
              <Text style={styles.CloseButton__text}>Close</Text>
            </Pressable>
          </Modal>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  Coupon__container: {
    display: 'flex',
    width: 160,
    height: 120,
    backgroundColor: APP_COLORS.COUPON_BACKGROUND,
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
    color: APP_COLORS.ORANGE,
    padding: 8,
    fontSize: 20,
    fontFamily: 'Asap-Bold',
    overflow: 'hidden',
    textAlign: 'center',
  },

  Modal__view: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    width: '90%',
  },

  Modal__container: {
    borderRadius: 10,
    borderWidth: 1,
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-evenly',
  },

  Modal__upperContainer: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.8,
  },

  Modal__title: {
    color: 'black',
    padding: 8,
    fontSize: 24,
    fontFamily: 'Asap-Bold',
    textAlign: 'center',
  },

  Modal__reward: {
    color: APP_COLORS.ORANGE,
    padding: 8,
    fontSize: 40,
    fontFamily: 'Asap-Bold',
    textAlign: 'center',
  },

  Modal__qrCode: {
    padding: 90,
    display: 'flex',
    backgroundColor: 'red',
  },

  Modal__caption: {
    color: 'black',
    padding: 8,
    fontSize: 16,
    fontFamily: 'Asap',
    textAlign: 'center',
  },

  CloseButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: APP_COLORS.ORANGE,
  },

  CloseButton__text: {
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: 'Asap-Bold',
    color: 'white',
  },
});

export default Coupon;
