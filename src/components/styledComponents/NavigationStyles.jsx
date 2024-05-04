/* eslint-disable no-unused-vars */
import { styled } from "@mui/material/styles";
import { Stack, Toolbar,AppBar } from "@mui/material";


export const NavigationBar = styled(AppBar)(({ theme }) => `
 background-color: ${theme.palette.mainBg.main};
 width: 100%;
 padding: 0.5rem 0;
`)

export const NavigationContainer = styled(Stack)(({ theme }) => `
 width : 80%;
 background-color : ${theme.palette.mainBg.main};
 margin: 0 auto;
 align-items: center;
 justify-content: space-between;
`)