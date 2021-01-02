import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";

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
      <SEO title="Home" />
      <div className="col-start-4 col-span-3">
        <h1 className="text-xl">Noah Talerman</h1>
        <p>During the week I’m working on product at fleetdm.com and during the other days I’m running on Mercer Island, playing Rocket League, and watching Arsenal FC dissapoint.</p>
        <h2 className="text-xl">Work I'm proud of</h2>
        <div className="flex">
          <a to="https://github.com/fleetdm/fleet" className="">Fleet Device Management</a>
          <span>github.com/fleetdm/fleet</span>
        </div>
        <p>My proud gig. I can be doing a lot of things related to “product” on any given day. These things are wireframes, communicating wth users, bug fixes, front end code, community support, public facing documentation, roadmap management</p>
        <div className="flex">
          <a href="https://github.com/snordale/music-app" className="">The Ivy Platform</a>
          <span>github.com/snordale/music-app</span>
        </div>
        <p>Dope team effort with Sam Nordale and Eric Kim. Working to achieve our music sharing vision. Using cool tech like Django, Spotify’s API, and React Native....</p>
        <h2 className="text-xl">Songs I'm into</h2>
        <h2 className="text-xl">Pictures I took</h2>
      </div>
    </Layout>
  );
}

export default IndexPage;
