/* eslint-disable no-unused-vars */
import {
 HeroContainer,
 HeroLeftContent,
 HeroRightContent,
 HeroRightContentImage,
 HeroTextBox,
 HeroTextBoxWrapper,
 HomeSectionCenter
} from "../../components/styledComponents/HomePageStyles";
import heroRightImage from "../../assets/heroRightImg.png";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { AppCardContainer, AppLinkBtn, AppMainButton } from "../../components/styledComponents/Common";

const Home = () => {
  return (
   <>
    <HeroContainer container>
     <HeroLeftContent item xs={12} md={6}>
      <HeroTextBoxWrapper>
       <HeroTextBox>
        <Typography variant="h3">
         SINC Partners is a service incubation company
        </Typography>
        <Typography variant="body1">
         Connecting experts in product development and growth marketing willing
         to offer their services to amazing startups in exchange for minute
         equity (usually 0.5% to 2%).
        </Typography>
       </HeroTextBox>
       <AppMainButton>SINC With Us</AppMainButton>
      </HeroTextBoxWrapper>
     </HeroLeftContent>
     <HeroRightContent item xs={12} md={6}>
      <HeroRightContentImage src={heroRightImage} alt="Hero Image" />
     </HeroRightContent>
    </HeroContainer>

    <HomeSectionCenter>
     <Paper
      sx={{
       borderRadius: "2rem",
       margin: "6rem auto",
       padding: "2rem",
       width: "60%",
      }}
     >
      <Stack direction={"column"} gap={2}>
       <Typography variant="body2" align="center" sx={{ padding: "1rem 2rem" }}>
        Nigeria and Africa has a massive network effect that have not be fully
        utilized. With Nigerians/Africans in every country and territory of the
        world, we can scale an African business to 100+ countries in few weeks
       </Typography>
       <Stack direction={"column"} gap={1}>
        <Typography variant="h6" align="center">
         Daniel Izeghs Oratokhai
        </Typography>
        <Typography variant="body5" align="center">
         Managing Partner at SINC Partners Ltd
        </Typography>
       </Stack>
      </Stack>
     </Paper>
    </HomeSectionCenter>

    <HomeSectionCenter>
     <Typography
      variant="h2"
      align="center"
      sx={{ width: "50%", margin: "2rem auto" }}
     >
      Network of builders helping startup scale
     </Typography>

     <Grid container spacing={4} sx={{ width: "90%", margin: "0 auto" }}>
      <Grid item xs={12} md={6}>
       <AppCardContainer sx={{ width: "100%", height: "100%" }}>
        <Typography variant="h4" sx={{ width: "80%" }}>
         Work with Service Incubators to expedite your time-to-market
        </Typography>
        <br />
        <br />
        <Typography variant="body3">
         Collaborate with our meticulously chosen service partners, each with a
         vested interest, ensuring a shared commitment to success in the game of
         venture building.
        </Typography>
        <br />
        <br />
        <Typography variant="body4">
         For 7.5% equity, you get a product manager, product designer, frontend
         engineer, software engineer and growth marketer to build the MVP of
         your app or web application and validate it.
        </Typography>

        <AppLinkBtn sx={{ marginTop: "2rem" }}>Learn More</AppLinkBtn>
       </AppCardContainer>
      </Grid>
      <Grid item xs={12} md={6}>
       <AppCardContainer sx={{ width: "100%", height: "100%" }}>
        <Typography variant="h4">
         Access funding after your mvp is validated
        </Typography>
        <br />
        <br />
        <Typography variant="body3">
         Startups that have built and validated their product can take advantage
         of the financial resources of the SINC Investors Network, elevating
         their potential for success in the venture capital landscape.
        </Typography>
        <br />
        <br />
        <Typography variant="body4">
         Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months
        </Typography>

        <AppLinkBtn sx={{ marginTop: "7rem" }}>Learn More</AppLinkBtn>
       </AppCardContainer>
      </Grid>
     </Grid>
    </HomeSectionCenter>

    <HomeSectionCenter>
     <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
     >
      <Typography
       variant="h2"
       align="center"
       sx={{ width: "50%", margin: "4rem auto 2rem auto" }}
      >
       Our Area of Focus
      </Typography>

      <Typography
       variant="body3"
       align="center"
       sx={{ width: "45%", margin: "0 auto" }}
      >
       In our quest to help make success available to everyone, we have initial
       strategic direction to focus on these five (5) key areas at the lab
      </Typography>
     </Stack>

     <Grid container sx={{ width: "90%", margin: "4rem auto" }}>
      <Grid
       item
      //  xs={12}
      //  sm={6}
      //  md={2}
       sx={{ backgroundColor: "#303030", padding: "1rem",width:"20%" }}
      >
       <Typography
        variant="body2"
        sx={{ color: "white !important" }}
       >
        01
       </Typography>

       <Typography
        variant="body2"
        sx={{ color: "white !important",marginTop:"4rem" }}
       >
        Business Support & Incubation
       </Typography>
      </Grid>

      <Grid item  sx={{ backgroundColor: "#F47733",padding: "1rem",width:"20%" }}>
       <Typography
        variant="body2"
        sx={{ color: "white !important" }}
       >
        02
       </Typography>

       <Typography
        variant="body2"
        sx={{ color: "white !important",marginTop:"4rem" }}
       >
        On-Demand & As-A-Service
       </Typography>
      </Grid>

      <Grid item sx={{ backgroundColor: "#FF78BF",padding: "1rem",width:"20%" }}>
       <Typography
        variant="body2"
        sx={{ color: "white !important" }}
       >
        03
       </Typography>

       <Typography
        variant="body2"
        sx={{ color: "white !important",marginTop:"4rem" }}
       >
        Marketplace & Crowdsourcing
       </Typography>
      </Grid>

      <Grid item  sx={{ backgroundColor: "#20888F",padding: "1rem",width:"20%" }}>
       <Typography
        variant="body2"
        sx={{ color: "white !important" }}
       >
        04
       </Typography>

       <Typography
        variant="body2"
        sx={{ color: "white !important",marginTop:"4rem" }}
       >
        Aggregation & Shared Economy
       </Typography>
      </Grid>

      <Grid item  sx={{ backgroundColor: "#FF78BF",padding: "1rem",width:"20%" }}>
       <Typography
        variant="body2"
        sx={{ color: "white !important" }}
       >
        03
       </Typography>

       <Typography
        variant="body2"
        sx={{ color: "white !important",marginTop:"4rem" }}
       >
          Decentralized Economy & Digital Assets       
        </Typography>
      </Grid>
     </Grid>
    </HomeSectionCenter>
   </>
  );
}

export default Home