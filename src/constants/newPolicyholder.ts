import { TPolicyholder } from "../types";

const newPolicyholder: TPolicyholder = {
  name: 'Mr. Holder',
  age: 28,
  address: {
    line1: '1234 Riverside Dr',
    city: 'Sun Hills',
    state: 'CA',
    postalCode: '92116'
  },
  phoneNumber: '1-858-323-7229',
  isPrimary: false
};

export default newPolicyholder;
