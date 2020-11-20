import { Tabs, Tab, Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  width: 100%;
  background-color: #5dbcd2;
  display: flex;
  flex-direction: row;
  box-shadow: 3px 3px 5px 6px #ccc;
`;
const NavbarContainer = styled.div`
  flex-grow: 1;
  margin: 2%;
  display: flex;
  align-items: center;
  margin-bottom: 0;
`;

const Navbar = () => {
  const [tab, setTab] = useState(1);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">Alarm monitoring system</Typography>
          </Grid>
          <Grid item xs={12}>
            <Tabs
              TabIndicatorProps={{ style: { background: "white" } }}
              indicatorColor="primary"
              value={tab}
              onChange={handleTabChange}
              aria-label="simple tabs example"
            >
              <Tab label="History" />
              <Tab label="New alarms" />
            </Tabs>
          </Grid>
        </Grid>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
