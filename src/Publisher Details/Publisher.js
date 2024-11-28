import React from "react";
import { Header } from "../Header";
import Footer from "../Footer/Footer";
import "./Publisher.css";

const Publisher = () => {
  return (
    <div>
      <Header />
      <div className="publisher-box fluid-container">
        <div className="publisher-paragraph-header">
          <h1><b>Publisher Details</b></h1>
        </div>
        <div className="publisher-data">
          <h6>
            <b>Name:</b> The Ink Network
            <br />
            <b>Background:</b> Founded in 2024, The Ink Network is a leading multimedia
            news organization known for its comprehensive coverage of global
            events and issues. With a mission to provide accurate, timely, and
            unbiased news reporting.
            <br />
            <br />
            <b>Content Focus:</b> The Ink Network covers a wide range of topics
            including politics, economics, science, technology, entertainment,
            and more. Their diverse team of journalists and correspondents
            ensures that readers have access to in-depth analysis and reporting
            on the most pressing issues of the day.
            <br />
            <br />
            <b>Coverage Area:</b> The Ink Network has a global presence with reporters
            stationed in key locations around the world. Their coverage spans
            continents, providing insights into local, national, and
            international news developments.
            <br />
            <br />
            <b>Contact Information:</b>
            <br />
            <br />
            Website:www.theink.in
            <br />
            Email: support@theink.in
          </h6>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Publisher;
