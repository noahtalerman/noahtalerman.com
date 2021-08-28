import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import meImg from "../assets/images/me.jpg";

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Noah Talerman's internet profile" />
      <div className="col-start-2 col-span-7 md:col-start-3 md:col-span-5">
        <div className="xl:flex flex-col xl:flex-row items-center">
          <h1 className="mr-md mb-sm">Noah Talerman's internet profile</h1>
          <img src={meImg} style={{maxWidth: "80px", height: "80px", borderRadius: "100%"}}className="object-cover h-auto" />
        </div>
        <p className="mt-lg text-light-text-grey dark:text-dark-text-grey">
          He's a 23 year old software newbie and behavioral economist wannabe.
        </p>
        <h3 className="mt-xl">My day to day</h3>
        <p className="mt-md text-light-text-grey dark:text-dark-text-grey">
          <span>During the week I’m working on product at</span>
          &nbsp;
          <a href="https://fleetdm.com" target="_blank" rel="noreferrer">
            fleetdm.com
          </a>
          <span>. Other days I’m running in </span>
          <a href="https://www.google.com/maps/place/Prospect+Park/@40.6667184,-73.9730757,14z/data=!4m5!3m4!1s0x89c25b1087680443:0x178bf7c600df7a98!8m2!3d40.6602037!4d-73.9689558" target="_blank" rel="noreferrer"
          >
            Prospect Park, NY
          </a>
          , and watching
          &nbsp;
          <a href="https://twitter.com/Arsenal" target="_blank" rel="noreferrer" className="">
            Arsenal Football Club
          </a>
          .
        </p>
        <h3 className="mt-xl">Work I'm proud of</h3>
        <div className="flex justify-between mt-lg flex-col lg:flex-row">
          <a href="https://github.com/fleetdm/fleet/graphs/contributors" target="_blank" rel="noreferrer">
            FleetDM
          </a>
        </div>
        <p className="mt-md text-light-text-grey dark:text-dark-text-grey">My proud job. I can be doing a lot of things related to “product” on any given day.</p>
        <div className="flex justify-between mt-lg flex-col lg:flex-row">
          <a href="https://theivyplatform.com" target="_blank" rel="noreferrer">
            The Ivy Platform
          </a>
        </div>
        <p className="mt-md text-light-text-grey dark:text-dark-text-grey"> 
        <span>Shoutout</span>
        &nbsp;
        <a href="https://www.linkedin.com/in/samnordale/" target="_blank" rel="noreferrer">
          Sam Nordale - CEO of everything
        </a>
        &nbsp;
        <span>and</span> &nbsp;
        <a href="https://www.linkedin.com/in/eric-kim-product-designer/" target="_blank" rel="noreferrer">
          Eric Kim - Product designer
        </a>
        &nbsp;
        <span>
          for working to achieve the music sharing vision. I did UI design and frontend eng for the MVP.
        </span>
        </p>
      </div>
    </Layout>
  );
}

export default IndexPage;
