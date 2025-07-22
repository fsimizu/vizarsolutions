import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";
import { OurServices } from "../components/OurServices";
import { Quote } from "../components/Quote";
import { Scope } from "../components/Scope";
import { Team } from "../components/Team";
import { Contact } from "../components/Contact";
import { Layout } from "../layout/Layout.jsx";

export function Root() {

  return (
    <>
      <Layout>
        <Hero/>
        <AboutUs/>
        <OurServices/>
        <Scope/>
        <Team/>
        <Quote/>
        <Contact/>
      </Layout>
    </>
  );
}