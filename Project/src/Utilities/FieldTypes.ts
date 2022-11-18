export const COUPON_TYPE = {
  GIFT: 'Gift',
  DISCOUNT: 'Discount',
};

export interface CouponProps {
  couponType: string;
  couponValue: string;
  caption?: string;
}
