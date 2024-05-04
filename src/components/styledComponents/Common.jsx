/* eslint-disable no-unused-vars */
import { styled } from "@mui/material/styles";
import {Button, Paper} from "@mui/material/";

export const AppMainButton = styled(Button)(({theme})=>`
  background-color: ${theme.palette.appBlack.main};
  border-radius: 1.5rem;
  color: ${ theme.palette.appWhite.main};
  padding: .5rem 2rem;
  text-transform:none;
   &:hover {
    background-color:${theme.palette.appBlack.main}
    }
`)
 
export const AppSecondaryButton = styled(Button)(({theme})=>`
  background-color: ${theme.palette.appGreen.main};
  border-radius: 1.5rem;
  color: ${ theme.palette.appWhite.main};
  padding: .5rem 2rem;
  text-transform:none;
   &:hover {
    background-color:${theme.palette.appGreen.main}
    }
`)

export const AppLinkBtn = styled(Button)(({theme})=>`
  text-decoration:underline;
  color: ${theme.palette.appBlack.main};
  text-transform:none;
  display: block;
  font-weight: 600;
  font-size: 1.063rem;
`)

export const AppContainedButton = styled(Button)(({theme})=>`
  background-color: transparent;
  border-radius: 1.5rem;
  border: 1px solid ${theme.palette.appBlack.main};
  color: ${theme.palette.appBlack.main};
  padding: .5rem 2rem;
  text-transform:none;
   &:hover {
    background-color:transparent;
    }
`)

export const AppCardContainer = styled(Paper)(({ theme }) => `
   background-color: ${theme.palette.appWhite.main}; 
   border-radius: 1rem;
   padding:1.5rem;
`)
 