import { Button, Box, Typography } from '@mui/material';
import { useMutation, useQueryClient } from "react-query";
import newPolicyholder from "../../constants/newPolicyholder";
import { createPolicyholder } from "../../async/policyholders";
import { TPolicyholder } from "../../types";

function AddPolicyholderBar() {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, error } = useMutation(createPolicyholder, {
    onSuccess: (newPolicyholderData: TPolicyholder[]) => {
      queryClient.setQueryData('policyholders', newPolicyholderData);
    }
  });

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Button
        onClick={() => mutate(newPolicyholder)}
        variant="contained"
        color="primary"
        size="large"
        disabled={isLoading}
      >
        Add a policyholder
      </Button>
      {isError &&
        <Typography>
          Sorry, we encountered an error when trying to add a policyholder. Please try again later. Error: {error}
        </Typography>
      }
    </Box>
  );
}

export default AddPolicyholderBar;
