import { Box } from "@mui/material";
import { TAddress } from "../../types";

type TAddressProps = {
  address: TAddress;
};

function Address({ address }: TAddressProps) {
  return (
    <>
      <Box>{address.line1}</Box>
      {address.line2 && <Box>{address.line2}</Box>}
      <Box>{address.city}, {address.state} {address.postalCode}</Box>
    </>
  );
}

export default Address;
