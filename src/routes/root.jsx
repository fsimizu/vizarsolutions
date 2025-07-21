import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";
import { OurServices } from "../components/OurServices";
import { Layout } from "../layout/Layout.jsx";

export function Root() {

  return (
    <>
      <Layout>
        <Hero/>
        <AboutUs/>
        <OurServices/>
      </Layout>
    </>
  );
}