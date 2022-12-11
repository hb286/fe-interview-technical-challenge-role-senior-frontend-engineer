import { getPolicyholders } from "../../async/policyholders";
import { useQuery } from "react-query";
import { Box, List, ListItem, Typography } from "@mui/material";
import InfoTable from "../InfoTable";
import AddPolicyholderBar from "../AddPolicyholderBar";
import { TPolicyholder } from "../../types";
import Address from "../Address";

function PolicyholdersView() {
  const { data, isLoading, isError, error } = useQuery('policyholders', getPolicyholders);

  if (isError) {
    return (
      <Typography>
        Sorry, we encountered an error when trying to get the policyholders. Please try again later. Error: {error}
      </Typography>
    );
  }

  if (isLoading) {
    return (
      <Typography>
        Loading...
      </Typography>
    );
  }

  return (
    <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h5" textAlign="left">
        Policyholders
      </Typography>
      {data.map((holder: TPolicyholder, index: number) => {
        return (
          <InfoTable
            key={`holder-${index}`}
            rows={[
              { key: 'Name', value: holder.name },
              { key: 'Age', value: holder.age },
              { key: 'Address', value: <Address address={holder.address} /> },
              { key: 'Phone Number', value: holder.phoneNumber },
              { key: 'Primary Policyholder', value: holder.isPrimary ? 'Yes' : 'No' }
            ]}
            firstColumnWidth="200px"
          />
        );
      })}
      <AddPolicyholderBar />
      <Typography variant="h5" textAlign="left">
        Pre-Production To-Do's
      </Typography>
      <List sx={{ maxWidth: '650px' }}>
        <ListItem>
          Check with design on the hover styling of the nav links. I removed the underline on hover when changing the implementation to support showing the active state. It would be easy to add back in using a stylesheet but there are no stylesheets in this project (I assume this would not be the case in a production environment, so it would have been easy to add the underline on hover back in).
        </ListItem>
        <ListItem>
          Confirm with backend what the ideal staleTime would be for the react query cache. Per the instructions, I set this to Infinity, but in a production environment, this would likely not be correct.
        </ListItem>
        <ListItem>
          Confirm with design what we want the loading and error states to look like on the policyholders view. In a production setting, we would likely have standard loading and error message components (e.g. a spinner and a toast alert) that could be dropped in. The instructions did not specify how these states should be handled, so I just used text for speed, but this solution is not production-ready in my opinion.
        </ListItem>
        <ListItem>
          Error boundaries: this app has none. That's not great practice for a production app. I would also like to add some error logging to a service like NewRelic, for insight into what JS errors users are encountering.
        </ListItem>
        <ListItem>
          Add a form for collecting data when adding a policyholder, instead of using the hard-coded data as instructed. This allows the user to gain real utility from the feature, as well as enabling them to add more than one policyholder.
        </ListItem>
        <ListItem>
          In the footer: the Sure logo should link to '/'. The copyright should be dynamic based on the current year, or at least updated to 2022.
        </ListItem>
        <ListItem>
          General cleanup: obviously this is a demo site, so there are many items to be fixed outside of the scope of the challenges, including trash links in the side nav that direct the user to trash pages, view challenges modal unrelated to site functionality, no authentication (log in, log out, session), no utility beyond viewing policyholders and adding policyholders, not mobile-friendly, etc.
        </ListItem>
      </List>
    </Box>
  );
}

export default PolicyholdersView;
