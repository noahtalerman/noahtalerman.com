import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";

import meImg from "../assets/images/me.jpg";

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Noah Talerman's Site" />
      <div className="col-start-2 col-span-7 md:col-start-3 md:col-span-5">
        <h1>Noah Talerman's site</h1>
        <h2>A space to share my favorite work and media</h2>
        <div className="flex justify-between items-center mt-xl">
          <div>
            <p className="text-light-text-grey dark:text-dark-text-grey">My day to day,</p>
            <p className="mt-md text-light-text-grey dark:text-dark-text-grey">During the week I’m working on product at fleetdm.com. Other days I’m running on Mercer Island, playing Rocket League, and watching Arsenal FC.</p>
          </div>
          <div className="lg:flex lg:justify-end hidden">
            <img src={meImg} style={{maxWidth: "200px", height: "200px", borderRadius: "4px"}}className="object-cover h-auto ml-xl"></img>
          </div> 
        </div>
        <h3 className="mt-xl">Work I'm proud of</h3>
        <div className="flex justify-between mt-lg flex-col lg:flex-row">
          <span className="font-display text-md">Fleet Device Management</span>
          <a href="https://github.com/fleetdm/fleet" target="_blank" rel="noopener noreferrer" className="text-md">View on GitHub</a>
        </div>
        <p className="mt-md text-light-text-grey dark:text-dark-text-grey">My proud gig. I can be doing a lot of things related to “product” on any given day.</p>
        <div className="flex justify-between mt-lg flex-col lg:flex-row">
          <span className="font-display text-md">The Ivy Platform</span>
          <a href="https://github.com/snordale/music-app" target="_blank" rel="noopener noreferrer" className="text-md">View on GitHub</a>
        </div>
        <p className="mt-md text-light-text-grey dark:text-dark-text-grey">Dope team effort with Sam Nordale and Eric Kim. Working to achieve our music sharing vision.</p>
        <div className="flex justify-between mt-lg flex-col lg:flex-row">
          <span className="font-display text-md">Computer Adoption and Income Inequality</span>
          <a href="https://columbiaeconreview.com/post/5f45c9c8be5493000729ed15" target="_blank" rel="noopener noreferrer" className="text-md">Go to article</a>
        </div>
        <p className="mt-md text-light-text-grey dark:text-dark-text-grey">Economics article that examines the relationship between income inequality and computer technology adoption.</p>
        {/* <h3 className="mt-xl">MY LAST 3 LISTENS ON SPOTIFY</h3>
        <table className="table-auto w-full text-left mt-lg">
          <thead className="font-display not-italic">
            <tr>
              <th className="w-1/2">SONG</th>
              <th>ARTIST</th>
              <th>ALBUM</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            <tr></tr>
            <tr></tr>
          </tbody>
        </table>
        <h3 className="mt-xl">PICTURES I TOOK</h3> */}
      </div>
    </Layout>
  );
}

export default IndexPage;
