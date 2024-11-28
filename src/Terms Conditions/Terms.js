import React from "react";
import { Header } from "../Header";
import Footer from "../Footer/Footer";
import './Terms.css'

const terms = () => {
  return (
    <div>
      <Header />
      <div className="terms-box fluid-container">
        <div className="terms-paragraph-header">
          <h1><b>Terms & Condition</b></h1>
        </div>
        <div className="terms-data">
          <h6>
            Our Terms And Conditions Were Last Updated On March 24, 2024.
            <br />
            Please read these terms and conditions carefully before using Our
            Service.
            <br />
            <br />
            Interpretation And Definitions
            <br />
            Interpretation
            <br />
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
            <br />
            <br />
            Definitions
            <br />
            For the purposes of these Terms and Conditions:
          </h6>
          <h6>
            “Application” means the software program provided by the Company
            downloaded by You on any electronic device, named THEINK.COM.
            <br />
            “Application Store” means the digital distribution service operated
            and developed by Apple Inc. (Apple App Store) or Google Inc. (Google
            Play Store) in which the Application has been downloaded.
            <br />
            “Affiliate” means an entity that controls, is controlled by or is
            under common control with a party, where "control" means ownership
            of 50% or more of the shares, equity interest or other securities
            entitled to vote for election of directors or other managing
            authority.
            <br />
            “Account” means a unique account created for You to access our
            Service or parts of our Service.
            <br />
            “Company” (referred to as either "the Company", "We", "Us" or "Our"
            in this Agreement) refers to THEINK.COM.
            <br />
            “Country” refers to THEINK_USA.
            <br />
            “Content” refers to content such as text, images, or other
            information that can be posted, uploaded, linked to or otherwise
            made available by You, regardless of the form of that content.
          </h6>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default terms;
