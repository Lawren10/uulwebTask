import { createTheme } from '@mui/material/styles';

 const AppTheme = createTheme({
  palette: {
    appWhite : {
      main: '#ffffff'
    },
    appBlack:{
      main:"#303030"
    },
    appGrey:{
      main:"#4E4E4E"
    },
    appGreen:{
      main:"#20888F",
    },
    appOrange:{
      main:"#F47733",
    },
    appPink:{
      main:"#FF78BF"
    }, 
    mainBg:{
      main:"#F4F4F4",
    },
  },
  typography:{
    fontFamily: 'Matter Regular ',
    h1:{
      fontSize:"5rem", // 80px
      fontWeight:"500",
      color: "#212121",
      lineHeight:"6.5rem"
    },
    h2:{
      fontSize:"3.5rem", // 56px
      fontWeight:"500",
      color: "#212121",
      lineHeight:"4.55rem"
    },
    h3:{
      fontSize:"2rem", // 32px
      fontWeight:"500",
      color: "#212121",
      lineHeight:"3.2rem"
    },
    h4:{
      fontSize:"1.5rem", // 24px
      fontWeight:"500",
      color: "#000000",
      lineHeight:"1.8rem"
    },
    h5:{
      fontSize:"1.375rem", // 22px
      fontWeight:"500",
      color: "#212121",
      lineHeight:"1.65rem"
    },
    h6:{
      fontSize:"1rem", // 16px
      fontWeight:"600",
      color: "#212121",
      lineHeight:"1.5rem"
    },
    subtitle1:{
      fontSize:"1.125rem", // 18px
      fontWeight:"500",
      color: "#212121",
      lineHeight:"1.35rem"
    },
    subtitle2:{
      fontSize:"0.875rem", // 14px
      fontWeight:"600",
      color: "#212121",
      lineHeight:"1.05rem"
    },
    subtitle3:{
      fontSize:"0.875rem", // 14px
      fontWeight:"400",
      color: "#8E8E8E",
      lineHeight:"1.05rem",
      textTransform:"uppercase"
    },
    body1:{
      fontSize:"1.5rem", // 24px
      fontWeight:"400",
      color: "#4E4E4E",
      lineHeight:"2.4rem",
    },
    body2:{
      fontSize:"1.25rem", // 20px
      fontWeight:"400",
      color: "#212121",
      lineHeight:"1.875rem",
    },
    body3:{
      fontSize:"1.063rem", // 17px
      fontWeight:"400",
      color: "#212121",
      lineHeight:"1.7rem",
    },
    body4:{
      fontSize:"1.063rem", // 17px
      fontWeight:"600",
      color: "#212121",
      lineHeight:"1.7rem",
    },
    body5:{
      fontSize:"1rem", // 16px
      fontWeight:"400",
      color: "#4E4E4E",
      lineHeight:"1.4rem",
    },
    smallText1:{
      fontSize:"0.875rem", // 14px
      fontWeight:"400",
      color: "#212121",
      lineHeight:"1.05rem",
    },
    smallText2:{
      fontSize:"0.875rem", // 13px
      fontWeight:"400",
      color: "#4E4E4E",
      lineHeight:"1.05rem",
    },
    smallText3:{
      fontSize:"0.875rem", // 13px
      fontWeight:"500",
      color: "#212121",
      lineHeight:"1.05rem",
    },
  },
  
});



export default AppTheme 