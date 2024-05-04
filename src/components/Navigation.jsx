import { Stack } from "@mui/material";
import { NavigationBar,NavigationContainer } from "./styledComponents/NavigationStyles";
import logo from "../assets/logo.svg";
import { AppMainButton, AppSecondaryButton } from "./styledComponents/Common";


const Navigation = () => {
  return (
    <NavigationBar component="nav" elevation={1}>
     
     <NavigationContainer direction={"row"}>
       <Stack direction={"row"} alignItems={"center"}>
         <img src={logo} alt="App Logo" />
       </Stack>

       <Stack direction={"row"} spacing={2}>
          <AppMainButton>SINC With Us</AppMainButton>
          <AppSecondaryButton>Apply to SIP 1.0</AppSecondaryButton>
       </Stack>
     </NavigationContainer>
     
    </NavigationBar>
  )
}

export default Navigation 