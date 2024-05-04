/* eslint-disable no-unused-vars */
import {
 HeroContainer,
 HeroLeftContent,
 HeroRightContent,
 HeroRightContentImage,
 HeroTextBox,
 HeroTextBoxWrapper,
 HomeSectionCenter,
 HomeFocusItem,
 HomeConceptItem,
 CaseStudyChip
} from "../../components/styledComponents/HomePageStyles";
import heroRightImage from "../../assets/heroRightImg.png";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { AppCardContainer, AppLinkBtn, AppMainButton } from "../../components/styledComponents/Common";
import portfolioImages from "./portfolioImages";

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
       margin: "8rem auto",
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
      sx={{ width: "50%", margin: "0 auto" }}
      mt={14}
     >
      Network of builders helping startup scale
     </Typography>

     <Grid container spacing={4} sx={{ width: "90%", margin: "2rem auto" }}>
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
      mt={8}
     >
      <Typography
       variant="h2"
       align="center"
       sx={{ width: "50%", margin: "5rem auto 1rem auto" }}
       
      >
       Our Area of Focus
      </Typography>

      <Typography
       variant="body3"
       align="center"
       sx={{ width: "45%", margin: "1rem auto 4rem auto" }}
      >
       In our quest to help make success available to everyone, we have initial
       strategic direction to focus on these five (5) key areas at the lab
      </Typography>
     </Stack>

     <Grid container sx={{ margin: "4rem 0" }}>
      <HomeFocusItem
       item
       //  xs={12}
       //  sm={6}
       //  md={2}
       background={"#303030"}
      >
       <Typography variant="body2" sx={{ color: "white !important" }}>
        01
       </Typography>

       <Typography
        variant="body2"
        sx={{ color: "white !important", marginTop: "4rem" }}
       >
        Business Support & Incubation
       </Typography>
      </HomeFocusItem>

      <HomeFocusItem item background={"#F47733"}>
       <Typography variant="body2" sx={{ color: "white !important" }}>
        02
       </Typography>

       <Typography
        variant="body2"
        sx={{ color: "white !important", marginTop: "4rem" }}
       >
        On-Demand & As-A-Service
       </Typography>
      </HomeFocusItem>

      <HomeFocusItem item background={"#FF78BF"}>
       <Typography variant="body2" sx={{ color: "white !important" }}>
        03
       </Typography>

       <Typography
        variant="body2"
        sx={{ color: "white !important", marginTop: "4rem" }}
       >
        Marketplace & Crowdsourcing
       </Typography>
      </HomeFocusItem>

      <HomeFocusItem item background={"#20888F"}>
       <Typography variant="body2" sx={{ color: "white !important" }}>
        04
       </Typography>

       <Typography
        variant="body2"
        sx={{ color: "white !important", marginTop: "4rem" }}
       >
        Aggregation & Shared Economy
       </Typography>
      </HomeFocusItem>

      <HomeFocusItem item background={"#FF78BF"}>
       <Typography variant="body2" sx={{ color: "white !important" }}>
        03
       </Typography>

       <Typography
        variant="body2"
        sx={{ color: "white !important", marginTop: "4rem" }}
       >
        Decentralized Economy & Digital Assets
       </Typography>
      </HomeFocusItem>
     </Grid>
    </HomeSectionCenter>

    <HomeSectionCenter>
     <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      mt={8}
     >
      <Typography
       variant="h2"
       align="center"
       sx={{ width: "50%", margin: "4rem auto 2rem auto" }}
      >
       Our Concept Innovations
      </Typography>

      <Typography
       variant="body3"
       align="center"
       sx={{ width: "45%", margin: "0 auto" }}
      >
       We have proprietary concept innovations that will support the startup
       ecosystem, support solution-providers/entrepreneurs and ultimately help
       democratize success;
      </Typography>
     </Stack>

     <Grid container spacing={8} my={4}>
      <HomeConceptItem item xs={12} md={4}>
       <AppCardContainer sx={{ height: "100%" }}>
        <Stack direction={"column"} gap={4}>
         <Typography variant="h5" align="center">
          Service Incubator
         </Typography>
         <Typography variant="body5" align="center" mt={2} mb={2}>
          A service-for-shares model of incubating pre-product startups and
          early-stage companies by building their early stage product and MVP
         </Typography>
        </Stack>
       </AppCardContainer>
      </HomeConceptItem>

      <HomeConceptItem item xs={12} md={4}>
       <AppCardContainer>
        <Stack direction={"column"} gap={4}>
         <Typography variant="h5" align="center">
          Virtualting
         </Typography>
         <Typography variant="body5" align="center" mt={2} mb={2}>
          A resource share model that allows companies share the time of
          resources (employees, consultants, technical advisers or influencers)
          while also splitting the service cost of the resource
         </Typography>
        </Stack>
       </AppCardContainer>
      </HomeConceptItem>

      <HomeConceptItem item xs={12} md={4}>
       <AppCardContainer>
        <Stack direction={"column"} gap={4}>
         <Typography variant="h5" align="center">
          Diiming
         </Typography>
         <Typography variant="body5" align="center" mt={2} mb={2}>
          A progressive investment model that allows you to put aside income
          (disposable or non-disposable) as investment over a period towards an
          investment or spend of your choice
         </Typography>
        </Stack>
       </AppCardContainer>
      </HomeConceptItem>
     </Grid>
    </HomeSectionCenter>

    <HomeSectionCenter>
     <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      mt={8}
     >
      <Typography
       variant="h2"
       align="center"
       sx={{ width: "50%", margin: "4rem auto 2rem auto" }}
      >
       Our Service Incubation Model
      </Typography>

      <Typography
       variant="body3"
       align="center"
       sx={{ width: "60%", margin: "0 auto" }}
      >
       The Service Incubation model is an alternate funding model for startup
       that allows professionals to offer their services to startups in return
       for a minute equity (usually between 0.5% to 1.5%) in the startup. As a
       service incubator, you will see your share grow as much as 1000% in 12 24
       months as been first to invest.
      </Typography>
     </Stack>

     <Stack direction={"column"} mt={10} mb={4}>
      <Typography variant="h3">Hypothesis</Typography>
      <Typography variant="body3">
       Just a few reasons we know its time for this model within the ecosystem
      </Typography>
     </Stack>

     <Grid container spacing={8}>
      <HomeConceptItem item xs={12} md={4}>
       <AppCardContainer>
        <Stack direction={"column"} gap={4}>
         <Typography variant="h5" align="center">
          Service Incubator
         </Typography>
         <Typography variant="body5" align="center" mt={2} mb={2}>
          Most early-stage companies and pre-product startups cannot afford
          professional services especially those who don’t have family and
          friends’ network that can support
         </Typography>
        </Stack>
       </AppCardContainer>
      </HomeConceptItem>

      <HomeConceptItem item xs={12} md={4}>
       <AppCardContainer>
        <Stack direction={"column"} gap={4}>
         <Typography variant="h5" align="center">
          Virtualting
         </Typography>
         <Typography variant="body5" align="center" mt={2} mb={2}>
          If startups can seed 5-10% in equity to incubators for $20k to $200k
          funding most times, they will be willing to seed 10% equity for a $25k
          service investment
         </Typography>
        </Stack>
       </AppCardContainer>
      </HomeConceptItem>

      <HomeConceptItem item xs={12} md={4}>
       <AppCardContainer>
        <Stack direction={"column"} gap={4}>
         <Typography variant="h5" align="center">
          Diiming
         </Typography>
         <Typography variant="body5" align="center" mt={2} mb={2}>
          Young professionals who don’t have a lot of money to invest nor an
          accredited investors will have opportunities to take equity at the
          early stage of their career, usually been the first to invest and
          almost guaranteed of return
         </Typography>
        </Stack>
       </AppCardContainer>
      </HomeConceptItem>
     </Grid>

     <Stack direction={"column"} mt={10} mb={4}>
      <Typography variant="h3">Case Study</Typography>
      <Typography variant="body3">
       See what Service Incubators get, the maths behind Service Equity (SEEQ)
       and what the value of your share equity can be over time
      </Typography>
     </Stack>

     <Stack direction={"row"} spacing={2}>
      <CaseStudyChip label="Service Incubator Equity" />
      <CaseStudyChip label="SEEQ Maths Equation" />
      <CaseStudyChip label="Value of my Equity Over Time" />
     </Stack>

     <Stack alignItems={"center"} justifyContent={"center"} mt={8}>
      <AppLinkBtn>Become A Service Incubator</AppLinkBtn>
     </Stack>
    </HomeSectionCenter>

    <HomeSectionCenter>
     <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      mt={8}
     >
      <Typography
       variant="h2"
       align="center"
       sx={{ width: "50%", margin: "4rem auto 2rem auto" }}
      >
       Our Studio Portfolio
      </Typography>

      <Typography
       variant="body5"
       align="center"
       sx={{ width: "60%", margin: "0 auto" }}
      >
       Our 2024 Service Incubator Portfolio Companies
      </Typography>
     </Stack>
     <Stack
      sx={{ flexWrap: "wrap",margin:"4rem auto" }}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      rowGap={4}
      columnGap={4}
     >
      {portfolioImages.map((logo, index) => (
       <img
        src={logo}
        key={index}
        style={{ width: "10%", height: "auto", objectFit: "contain" }}
       />
      ))}
     </Stack>

     <Stack alignItems={"center"} justifyContent={"center"} mt={8}>
      <AppLinkBtn>View All Companies </AppLinkBtn>
     </Stack>
    </HomeSectionCenter>

    <HomeSectionCenter>
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      mt={8}
     >
      <Typography
       variant="h2"
       align="center"
       sx={{ width: "50%", margin: "4rem auto 2rem auto" }}
      >
       Co-found With Us
      </Typography>

      <Typography
       variant="body5"
       align="center"
       sx={{ width: "60%", margin: "0 auto" }}
      >
       We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed 
      </Typography>
     </Stack>
    </HomeSectionCenter>
   </>
  );
}

export default Home