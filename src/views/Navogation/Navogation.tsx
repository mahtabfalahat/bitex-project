import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import GroupIcon from '@mui/icons-material/Group';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import {account , trades , founds} from './../../routes/Path' ; 
import './style.scss' ; 

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState("");
  const ref = React.useRef(null);
  let navigate = useNavigate();
  const handleValueChange = (value: string) => {
    setValue(value);
  };
  const handleRouteChange = (newRoute: string) => {
    navigate(newRoute);
  };
  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper  sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3} >
        <BottomNavigation className="navStyle" showLabels   value={value}  onChange={(event, newValue) => { handleValueChange(newValue) }} >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} value="Home"  />
          <BottomNavigationAction label="Markets" icon={<BarChartIcon  />} value="Markets"  />
          <BottomNavigationAction label="Trades" icon={<FindInPageIcon />} value="Trades" onClick={() => {handleRouteChange(trades)}}  />
          <BottomNavigationAction label="Founds" icon={<AccountBalanceWalletIcon />} value="Founds" onClick={() => {handleRouteChange(founds)}}   />
          <BottomNavigationAction label="Account" icon={<GroupIcon />} value="Account" onClick={() => {handleRouteChange(account)}} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
