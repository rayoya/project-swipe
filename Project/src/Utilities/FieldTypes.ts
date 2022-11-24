export const COUPON_TYPE = {
  GIFT: 'Gift',
  DISCOUNT: 'Discount',
};

export interface CouponProps {
  couponType: string;
  couponValue: string;
  caption?: string;
}

export interface RewardProgressProps {
  nextRewardIn: number;
  totalRewardLength: number;
  nextReward: string;
}
