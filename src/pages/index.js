import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import me1 from "../assets/images/me-1.jpg";
import me1Pixel from "../assets/images/me-1-pixel.jpg";

import me2 from "../assets/images/me-2.jpg";
import me2Pixel from "../assets/images/me-2-pixel.jpg";

import me3 from "../assets/images/me-3.jpg";
import me3Pixel from "../assets/images/me-3-pixel.jpg";

import me4 from "../assets/images/me-4.jpg";
import me4Pixel from "../assets/images/me-4-pixel.jpg";

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Noah Talerman's internet profile" />
      <div className="col-start-2 col-span-7 md:col-start-3 md:col-span-5">
        <div className="flex flex-col">
          <h1 className="mb-md">Noah Talerman's internet profile</h1>
          <div>
            <div className="flex flex-col sm:flex-row">
              <div>
                <img
                  src={me1}
                  style={
                    {
                      maxWidth: "200px",
                      height: "200px",
                      borderRadius: "4px",
                      position: "absolute",
                    }
                  }
                  className="z-10 object-cover h-auto m-sm transition duration-0 hover:opacity-0"
                />
                <img
                  src={me1Pixel}
                  style={
                    {
                      maxWidth: "200px",
                      height: "200px",
                      borderRadius: "4px",
                      imageRendering: "pixelated",
                    }
                  }
                  className="object-cover h-auto m-sm filter grayscale"
                />
              </div>
              <div>
                <img
                  src={me2}
                  style={
                    {
                      minWidth: "200px",
                      height: "200px",
                      borderRadius: "4px",
                      position: "absolute",
                    }
                  }
                  className="z-10 object-cover h-auto m-sm transition duration-0 hover:opacity-0"
                />
                <img
                  src={me2Pixel}
                  style={
                    {
                      minWidth: "200px",
                      height: "200px",
                      borderRadius: "4px",
                      imageRendering: "pixelated",
                    }
                  }
                  className="object-cover h-auto m-sm filter grayscale"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div>
                <img
                  src={me3}
                  style={
                    {
                      maxWidth: "200px",
                      height: "200px",
                      borderRadius: "4px",
                      position: "absolute",
                    }
                  }
                  className="z-10 object-cover h-auto m-sm transition duration-0 hover:opacity-0"
                />
                <img
                  src={me3Pixel}
                  style={
                    {
                      maxWidth: "200px",
                      height: "200px",
                      borderRadius: "4px",
                      imageRendering: "pixelated",
                    }
                  }
                  className="object-cover h-auto m-sm filter grayscale"
                />
              </div>
              <div>
                <img
                  src={me4}
                  style={
                    {
                      minWidth: "200px",
                      height: "200px",
                      borderRadius: "4px",
                      position: "absolute",
                    }
                  }
                  className="z-10 object-cover h-auto m-sm transition duration-0 hover:opacity-0"
                />
                <img
                  src={me4Pixel}
                  style={
                    {
                      minWidth: "200px",
                      height: "200px",
                      borderRadius: "4px",
                      imageRendering: "pixelated",
                    }
                  }
                  className="object-cover h-auto m-sm filter grayscale"
                />
              </div>
            </div>
          </div>
        </div>
        <h3 className="mt-lg">Work</h3>
        <div className="flex justify-between mt-md flex-col lg:flex-row">
          <a className="block" href="https://fleetdm.com" target="_blank" rel="noreferrer">
              <span className="peer">Fleet Device Management</span>
              <span className="ml-sm sm:opacity-0 peer-hover:opacity-100 text-light-text-grey dark:text-dark-text-grey">See website</span>
          </a>
        </div>
        <p className="mt-md">Team accomplishments</p>
        <div className="mt-md">
          <div className="mt-sm">
            <a className="block" href="https://osquery.slack.com/join/shared_invite/zt-h29zm0gk-s2DBtGUTW4CFel0f0IjTEw#/shared-invite/email" target="_blank" rel="noreferrer">
              <span className="peer">600+ community members welcomed</span>
              <span className="ml-sm sm:opacity-0 peer-hover:opacity-100 text-light-text-grey dark:text-dark-text-grey">See community on Slack</span>
            </a>
          </div>
        </div>
        <p className="mt-md">Responsibilities</p>
        <div className="mt-md">
          <div className="mt-sm">
            <a className="block" href="https://www.figma.com/file/qpdty1e2n22uZntKUZKEJl/%E2%9C%85-Fleet-EE-(current%2C-dev-ready)?node-id=494%3A0" target="_blank" rel="noreferrer">
              <span className="peer">Product wireframes</span>
              <span className="ml-sm sm:opacity-0 peer-hover:opacity-100 text-light-text-grey dark:text-dark-text-grey">See wireframes on Figma</span>
            </a>
            <a className="block" href="https://github.com/orgs/fleetdm/projects/8" target="_blank" rel="noreferrer">
              <span className="peer">Roadmap managment</span>
              <span className="ml-sm sm:opacity-0 peer-hover:opacity-100 text-light-text-grey dark:text-dark-text-grey">See roadmap on GitHub</span>
            </a>
            <a className="block" href="https://github.com/fleetdm/fleet/releases" target="_blank" rel="noreferrer">
              <span className="peer">Release notes</span>
              <span className="ml-sm sm:opacity-0 text-light-text-grey dark:text-dark-text-grey peer-hover:opacity-100">See releases on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
