import React from "react";
import { Link } from "gatsby";

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
      <SEO title="Home" />
      <div className="col-start-3 col-span-5">
        <h1>NOAH TALERMAN'S SITE</h1>
        <h2>A SPACE TO SHARE MY FAVORITE WORK AND MEDIA</h2>
        <div className="flex justify-between align-center">
          <div className="mt-xl">
            <p className="mt-lg">Welcome to my site</p>
            <p className="mt-md">During the week I’m working on product at fleetdm.com and during the other days I’m running on Mercer Island, playing Rocket League, and watching Arsenal FC dissapoint.</p>
          </div>
          <div className="lg:flex lg:justify-end hidden">
            <img src={meImg} style={{maxWidth: "240px"}}className="object-cover h-auto ml-xl"></img>
          </div> 
        </div>
        <h3 className="mt-xl">WORK I'M PROUD OF</h3>
        <div className="flex justify-between mt-lg">
          <a href="https://github.com/fleetdm/fleet" target="_blank" rel="noopener noreferrer">Fleet Device Management</a>
          <span className="font-display not-italic hidden lg:inline">github.com/fleetdm/fleet</span>
        </div>
        <p className="mt-md">My proud gig. I can be doing a lot of things related to “product” on any given day. These things are wireframes, communicating wth users, bug fixes, front end code, community support, public facing documentation, roadmap management</p>
        <div className="flex justify-between mt-lg">
          <a href="https://github.com/snordale/music-app" target="_blank" rel="noopener noreferrer">The Ivy Platform</a>
          <span className="font-display not-italic hidden lg:inline">github.com/snordale/music-app</span>
        </div>
        <p className="mt-md">Dope team effort with Sam Nordale and Eric Kim. Working to achieve our music sharing vision. Using cool tech like Django, Spotify’s API, and React Native....</p>
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
