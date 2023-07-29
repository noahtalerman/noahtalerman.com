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
      <SEO />
      <div className="col-start-2 col-span-7 md:col-start-3 md:col-span-5">
        <div className="flex flex-col">
          <h1 className="mb-md">Noah Talerman</h1>
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
              <span className="peer text-red">Fleet</span>
              <span className="pl-sm sm:opacity-0 hover:opacity-100 peer-hover:opacity-100 text-light-text-grey dark:text-dark-text-grey">See website</span>
          </a>
        </div>
        <p className="mt-md">Team accomplishments</p>
        <div className="mt-md">
          <div className="mt-sm">
            <a className="block" href="https://fleetdm.com" target="_blank" rel="noreferrer">
                <span className="peer text-red">10+ enterprise customers</span>
                <span className="pl-sm sm:opacity-0 hover:opacity-100 peer-hover:opacity-100 text-light-text-grey dark:text-dark-text-grey">See testimonials on website</span>
            </a>
            <a className="block" href="https://osquery.slack.com/join/shared_invite/zt-h29zm0gk-s2DBtGUTW4CFel0f0IjTEw#/shared-invite/email" target="_blank" rel="noreferrer">
              <span className="peer text-red">900+ open-source community members</span>
              <span className="pl-sm sm:opacity-0 hover:opacity-100 peer-hover:opacity-100 text-light-text-grey dark:text-dark-text-grey">See community on Slack</span>
            </a>
          </div>
        </div>
        <p className="mt-md">Responsibilities</p>
        <div className="mt-md">
          <div className="mt-sm">
            <a className="block" href="https://www.figma.com/file/hdALBDsrti77QuDNSzLdkx/%F0%9F%9A%A7-Fleet-EE-(dev-ready%2C-scratchpad)?node-id=2750-67203" target="_blank" rel="noreferrer">
              <span className="peer text-red">Product design</span>
              <span className="pl-sm sm:opacity-0 hover:opacity-100 peer-hover:opacity-100 hover:opacity-100 text-light-text-grey dark:text-dark-text-grey">See designs on Figma</span>
            </a>
            <a className="block" href="https://github.com/fleetdm/fleet/issues?q=is%3Aopen+is%3Aissue+label%3A%23g-mdm+label%3A%3Aproduct+label%3Astory" target="_blank" rel="noreferrer">
              <span className="peer text-red">Roadmap managment</span>
              <span className="pl-sm sm:opacity-0 hover:opacity-100 peer-hover:opacity-100 text-light-text-grey dark:text-dark-text-grey">See roadmap on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
