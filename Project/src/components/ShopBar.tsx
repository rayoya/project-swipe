import { StyleSheet, View } from 'react-native';
import { APP_COLORS } from '../Utilities/Constants';

const ShopBar = () => {
  return (
    <>
      <View style={styles.Container}></View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 0.15,
    backgroundColor: APP_COLORS.COUPON_BACKGROUND,
    display: 'flex',
    width: '100%',
    marginBottom: 30,
  },
});

export default ShopBar;
