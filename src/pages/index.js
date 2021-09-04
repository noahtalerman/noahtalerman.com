import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import meImg from "../assets/images/me.jpg";
import me2Img from "../assets/images/me2.jpg";
import me3Img from "../assets/images/me3.jpg";
import me4Img from "../assets/images/me4.jpg";

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Noah Talerman's internet profile" />
      <div className="col-start-2 col-span-7 md:col-start-3 md:col-span-5">
        <div className="flex flex-col">
          <h1 className="mr-md mb-md">Noah Talerman's internet profile</h1>
          <div>
            <div className="flex">
              <img src={meImg} style={{maxWidth: "200px", height: "200px", borderRadius: "4px" }} className="object-cover h-auto m-sm" />
              <img src={me2Img} style={{maxWidth: "200px", height: "200px", borderRadius: "4px" }}className="object-cover h-auto m-sm" />
            </div>
            <div className="flex">
              <img src={me3Img} style={{maxWidth: "200px", height: "200px", borderRadius: "4px" }}className="object-cover h-auto m-sm" />
              <img src={me4Img} style={{maxWidth: "200px", height: "200px", borderRadius: "4px" }}className="object-cover h-auto m-sm" />
            </div>
          </div>
        </div>
        <h3 className="mt-lg">My day to day</h3>
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
        <h3 className="mt-lg">Work</h3>
        <div className="flex justify-between mt-lg flex-col lg:flex-row">
          <a href="https://github.com/fleetdm/fleet/graphs/contributors" target="_blank" rel="noreferrer">
            FleetDM
          </a>
        </div>
        <p className="mt-md text-light-text-grey dark:text-dark-text-grey">Current job. Responsibilities are and<span className="line-through"> were</span> the following:</p>
        <div className="mt-md">
          <span className="text-light-text-grey dark:text-dark-text-grey">Public facing documentation,</span>
          <span className="text-light-text-grey dark:text-dark-text-grey"> Product wireframes, </span>
          <span className="text-light-text-grey dark:text-dark-text-grey">Bug fixes,</span>
          <span className="line-through text-light-text-grey dark:text-dark-text-grey"> Coding work on product features and www,</span>
          <span className="text-light-text-grey dark:text-dark-text-grey"> Roadmap management ,</span>
          <span className="text-light-text-grey dark:text-dark-text-grey"> Communication wth users,</span>
          <span className="text-light-text-grey dark:text-dark-text-grey"> Analytics for key flows,</span>
          <span className="text-light-text-grey dark:text-dark-text-grey"> Browser compatability,</span>
          <span className="line-through text-light-text-grey dark:text-dark-text-grey"> Consistent blog posts,</span>
          <span className="line-through text-light-text-grey dark:text-dark-text-grey"> Consistent social media,</span>
          <span className="line-through text-light-text-grey dark:text-dark-text-grey"> Issue queue, </span>
          <span className="line-through text-light-text-grey dark:text-dark-text-grey"> Pull request queue,</span>
          <span className="line-through text-light-text-grey dark:text-dark-text-grey"> Contributor advocate,</span>
          <span className="text-light-text-grey dark:text-dark-text-grey"> QA,</span>
          <span className="text-light-text-grey dark:text-dark-text-grey"> Communication about outages and fixes,</span>
          <span className="text-light-text-grey dark:text-dark-text-grey"> Release notes, </span>
          <span className="line-through text-light-text-grey dark:text-dark-text-grey"> Community support,</span>
          <span className="text-light-text-grey dark:text-dark-text-grey"> Tutorial writing,</span>
          <span className="text-light-text-grey dark:text-dark-text-grey"> Open source advocacy</span>
        </div>
        <div className="flex justify-between mt-lg flex-col lg:flex-row">
          <a href="https://theivyplatform.com" target="_blank" rel="noreferrer">
            The Ivy Platform
          </a>
        </div>
        <p className="mt-md text-light-text-grey dark:text-dark-text-grey"> Built the MVP. Responsibilities were the following:</p>
        <div className="mt-md">
          <span className="text-light-text-grey dark:text-dark-text-grey">UI design,</span>
          <span className="text-light-text-grey dark:text-dark-text-grey"> Coding work on frontend,</span>
          <span className="text-light-text-grey dark:text-dark-text-grey"> Deployment work,</span>
          <span className="text-light-text-grey dark:text-dark-text-grey"> Script writing for development</span>
        </div>
        <div className="mt-md">
          <span className="text-light-text-grey dark:text-dark-text-grey">Shoutout</span>
          &nbsp;
          <a href="https://www.linkedin.com/in/samnordale/" target="_blank" rel="noreferrer">
            Sam Nordale - CEO of everything
          </a>
          &nbsp;
          <span className="text-light-text-grey dark:text-dark-text-grey">and</span> &nbsp;
          <a href="https://www.linkedin.com/in/eric-kim-product-designer/" target="_blank" rel="noreferrer">
            Eric Kim - Product designer
          </a>
          &nbsp;
          <span className="text-light-text-grey dark:text-dark-text-grey">for working to achieve the music sharing vision.</span>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
