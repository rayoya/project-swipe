import { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CouponProps } from '../Utilities/FieldTypes';
import Modal from 'react-native-modal';
import QRCode from 'react-qr-code';

const Coupon: FC<CouponProps> = ({ couponType, couponValue, caption }) => {
  const [showCouponCode, setShowCouponCode] = useState<boolean>(true);
  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';

  return (
    <View style={styles.Coupon__container}>
      <Text style={styles.Coupon__title}>{couponType}</Text>
      <Text numberOfLines={2} style={styles.Coupon__description}>
        {couponValue}
      </Text>
      <View style={styles.Modal__view}>
        <Modal isVisible={true} style={styles.Modal__container}>
          <Text>
            I am the modal contentI am the modal content!I am the modal content!I am the modal content!I am the modal
            content!I am the modal content!I am the modal content!I am the modal content!I am the modal content!!
          </Text>
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={'asoign'}
            viewBox={`0 0 256 256`}
          />
        </Modal>
      </View>
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
    backgroundColor: 'white',
  },
});

export default Coupon;
