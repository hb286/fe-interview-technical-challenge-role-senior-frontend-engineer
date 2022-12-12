export type TAddress = {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
};

export type TPolicyholder = {
  name: string;
  age: number;
  address: TAddress,
  phoneNumber: string;
  isPrimary: boolean;
};
