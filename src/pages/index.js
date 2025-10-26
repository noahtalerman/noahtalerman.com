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

import playIcon from "../assets/images/play-icon.png";

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Noah Talerman"/>
      <div className="col-start-2 col-span-7 md:col-start-3 md:col-span-5">
        <div className="flex flex-col">
          <h1 className="mb-md">Noah Talerman's site</h1>
          <div>
            <div className="flex flex-col sm:flex-row">
              <a href="#playlist" className="m-sm">
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
                  className="z-20 object-cover h-auto transition duration-0 hover:opacity-0"
                />
                <div 
                  style={
                    {
                      maxWidth: "200px",
                      height: "200px",
                      borderRadius: "4px",
                      imageRendering: "pixelated",
                    }
                  }
                  className="flex flex-col flex justify-center items-center h-auto"
                >
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
                    className="filter grayscale object-cover"
                  />
                  <img
                    src={playIcon}
                    style={
                      {
                        maxWidth: "150px",
                        height: "150px",
                        position: "absolute",
                      }
                    }
                    className="z-10 object-cover filter"
                  />
                </div>
              </a>
              <a href="#playlist" className="m-sm">
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
                  className="z-20 object-cover h-auto transition duration-0 hover:opacity-0"
                />
                <div 
                  style={
                    {
                      maxWidth: "200px",
                      height: "200px",
                      borderRadius: "4px",
                      imageRendering: "pixelated",
                    }
                  }
                  className="flex flex-col justify-center items-center h-auto"
                >
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
                    className="filter grayscale object-cover"
                  />
                  <img
                    src={playIcon}
                    style={
                      {
                        maxWidth: "150px",
                        height: "150px",
                        position: "absolute",
                      }
                    }
                    className="z-10 flex object-cover filter"
                  />
                </div>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row">
              <a href="#playlist" className="m-sm">
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
                  className="z-20 object-cover h-auto transition duration-0 hover:opacity-0"
                />
                <div
                  style={
                    {
                      maxWidth: "200px",
                      height: "200px",
                      borderRadius: "4px",
                      imageRendering: "pixelated",
                    }
                  }
                  className="flex flex-col justify-center items-center object-cover h-auto"
                >
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
                    className="filter grayscale object-cover"
                  />
                  <img
                    src={playIcon}
                    style={
                      {
                        maxWidth: "150px",
                        height: "150px",
                        position: "absolute",
                      }
                    }
                    className="z-10 flex object-cover filter"
                  />
                </div>
              </a>
              <a href="#playlist" className="m-sm">
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
                  className="z-20 object-cover h-auto transition duration-0 hover:opacity-0"
                />
                <div
                  style={
                    {
                      maxWidth: "200px",
                      height: "200px",
                      borderRadius: "4px",
                      imageRendering: "pixelated",
                    }
                  }
                  className="flex flex-col justify-center items-center object-cover h-auto"
                >
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
                    className="filter grayscale object-cover"
                  />
                  <img
                    src={playIcon}
                    style={
                      {
                        maxWidth: "150px",
                        height: "150px",
                        position: "absolute",
                      }
                    }
                    className="z-10 flex object-cover filter"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <h3 className="mt-lg">Work</h3>
        <div className="flex justify-between mt-sm flex-col lg:flex-row">
          <a className="block" href="https://fleetdm.com" target="_blank" rel="noreferrer">
              <span className="peer text-red">Fleet</span>
              <span className="pl-sm sm:opacity-0 hover:opacity-100 peer-hover:opacity-100 text-light-text-grey dark:text-dark-text-grey">See website →</span>
          </a>
        </div>
        <p className="mt-md">Team accomplishments</p>
        <div className="mt-md">
          <div className="mt-sm">
            <a className="block" href="https://fleetdm.com/testimonials" target="_blank" rel="noreferrer">
                <span className="peer text-red">80+ customers</span>
                <span className="pl-sm sm:opacity-0 hover:opacity-100 peer-hover:opacity-100 text-light-text-grey dark:text-dark-text-grey">See testimonials on website →</span>
            </a>
            <a className="block" href="https://chat.osquery.io/c/fleet" target="_blank" rel="noreferrer">
              <span className="peer text-red">1,300+ users</span>
              <span className="pl-sm sm:opacity-0 hover:opacity-100 peer-hover:opacity-100 text-light-text-grey dark:text-dark-text-grey">See community on Linen →</span>
            </a>
          </div>
        </div>
        <p className="mt-md">Responsibilities</p>
        <div className="mt-md">
          <div className="mt-sm">
            <a className="block" href="https://www.figma.com/design/j2M1heOh8eZD6LcUJks6HE/-9956-Add-multiple-Apple-Business-Manager-and-Volume-Purchasing-Program-connections?node-id=2-130&t=IRn57raPoE0gMMrH-1" target="_blank" rel="noreferrer">
              <span className="peer text-red">Product design</span>
              <span className="pl-sm sm:opacity-0 hover:opacity-100 peer-hover:opacity-100 hover:opacity-100 text-light-text-grey dark:text-dark-text-grey">See designs on Figma →</span>
            </a>
            <a className="block" href="https://github.com/orgs/fleetdm/projects/87" target="_blank" rel="noreferrer">
              <span className="peer text-red">Roadmap</span>
              <span className="pl-sm sm:opacity-0 hover:opacity-100 peer-hover:opacity-100 text-light-text-grey dark:text-dark-text-grey">See roadmap on GitHub →</span>
            </a>
          </div>
        </div>
        <h3 id="playlist" className="mt-lg">Playlist</h3>
        <div className="mt-md">
          <iframe 
            style={
              {
                borderRadius: "12px",
                width: "100%",
                height: "352px",
                loading: "lazy",
              }
            } 
            src="https://open.spotify.com/embed/album/1rSbjr5U9J9rQ9sE7RxHFl?utm_source=generator&theme=0"
            width="100%" 
            height="152"
            frameBorder="0">
          </iframe>
        </div>
      </div>
    </Layout> 
  );
}

export default IndexPage;
