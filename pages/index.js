import React, { useContext } from "react";
// import About from "../components/Home/About";
// import ClientsLogos from "../components/Home/ClientsLogos";
import Header from "../components/Home/Header";
// import HomeContactEmail from "../components/Home/HomeContactEmail";
// import Projects from "../components/Home/Projects";
// import Review from "../components/Home/Review";
// import Services from "../components/Home/Service";
import { UserContext } from "../Layout/Layout";
// import yeenderServer from "../serverConfig";


export default function Home({ aboutData, servicesData, projectsData, reviewsData, featuresData }) {
  const { setOurAbout, setProjects } = useContext(UserContext);

//   React.useEffect(() => {
//       setOurAbout(aboutData.result);
//   }, [aboutData, setOurAbout]);

//   React.useEffect(() => {
//       setProjects(projectsData.result);
//   }, [projectsData, setProjects]);

  return (
    <>
      <Header />
      {/* <About data={aboutData}/>
      <Services data={servicesData}/>
      <Projects/>
      <Review data={reviewsData} />
      <ClientsLogos/>
      <HomeContactEmail/> */}
    </>
  )
}



// FETCHING ALL HOME PAGE DATA ===========>>
// export async function getStaticProps(context) {
//   const aboutRes = await fetch(`${yeenderServer}/aboutInfo`);
//   const reviewsRes = await fetch(`${yeenderServer}/review/active`);
//   const servicesRes = await fetch(`${yeenderServer}/service/active`);
//   const projectsRes = await fetch(`${yeenderServer}/project/active`);
//   const featuresRes = await fetch(`${yeenderServer}/feature/active`);

//   const aboutData = await aboutRes.json();
//   const reviewsData = await reviewsRes.json();
//   const servicesData = await servicesRes.json();
//   const projectsData = await projectsRes.json();
//   const featuresData = await featuresRes.json();

//   if (!aboutData.result) {
//       return {
//           notFound: true,
//       };
//   }

//   if (!servicesData) {
//       return {
//           notFound: true,
//       };
//   }

//   if (!projectsData) {
//       return {
//           notFound: true,
//       };
//   }

//   if (!reviewsData) {
//       return {
//           notFound: true,
//       };
//   }

//   if (!featuresData) {
//       return {
//           notFound: true,
//       };
//   }

//   // all data return to props
//   return {
//       props: { aboutData, servicesData, projectsData, reviewsData, featuresData },
//   };
// }
