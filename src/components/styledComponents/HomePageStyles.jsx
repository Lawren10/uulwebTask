/* eslint-disable no-unused-vars */
import { styled } from "@mui/material/styles";
import { Stack, Toolbar,AppBar, Grid, Box } from "@mui/material";

export const HeroContainer = styled(Grid)(({ theme }) => `

`)

export const HeroLeftContent = styled(Grid)(({ theme }) => `
  padding:1.5rem 0rem 1.5rem 2rem;
  background-color: ${theme.palette.appWhite.main};
  place-content: center;
`)

export const HeroRightContent = styled(Grid)(({ theme }) => `
  
`)

export const HeroTextBoxWrapper = styled(Box)(({ theme }) => `
 margin: 0 auto;
 width:66%;
`)

export const HeroTextBox = styled(Stack)(({ theme }) => `
  flex-direction:column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`)

export const HeroRightContentImage = styled('img')(({ theme }) => `
  width: 100%;
  height: 100%;
  object-fit: cover;
`)

export const HomeSectionCenter = styled(Box)(({ theme }) => `
   width: 80%;
   margin: 0 auto;
`)