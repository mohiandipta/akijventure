import React from "react";
import Logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <div>
      <footer className="footer-area">
        <div className="row">
          <div className="col-md-12 desktop-show">
            <div className="footer-logo-image">

              {/* <img src={Logo} alt="Akij Footer Logo" className="img-fluid" /> */}
            </div>
          </div>
        </div>
        <div className="footer-top-content-area desktop-show">
          <div className="footer-row">
            <div className="col-md-6 col-sm-6 col-xs-6 col-6">
              <div class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
                <div class="find-widget">
                  Email : <a href="#">
                  </a>
                </div>
                <div class="find-widget">
                  Facebook Page : <a href="#"></a>
                </div>
                <div class="find-widget">
                  Hotline number : 09604300100, 0961311609<a href="#"></a>
                </div>
                <div class="find-widget">
                  Address : <a href="#">Akij House, 198 Bir Uttam Mir Shawkat Sarak (Gulshan Link Road),
                    Tejgaon, Dhaka-1208, Bangladesh.</a>
                </div>
              </div>
              <div className="footer-top-row">
                <div className="col-md-4 col-md-4 col-sm-6 col-xs-6">
                  <h2>Who We Are</h2>
                  <ul className="list-unstyled footer-content-style">
                    <li>
                      <a href="home">Home</a>
                    </li>
                    <li>
                      <a href="about">About</a>
                    </li>
                    <li>
                      <a href="Message-from-Chairman">Message from Chairman</a>
                    </li>
                    <li>
                      <a href="Global-Operation">Global Operation</a>
                    </li>
                    <li>
                      <a href="index.php?route=extension/d_blog_module/category&amp;category_id=8">
                        Certificates
                      </a>
                    </li>
                    <li>
                      <a href="accreditation">Accreditation</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 col-md-4 col-sm-6 col-xs-6">
                  <h2 class="footer-heading">How we can help you?</h2>
                  <ul class="list-unstyled footer-content-style">
                    <li>
                      <a href="contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="sales-point">Sales Outlet</a>
                    </li>
                    <li>
                      <a href="sales-outlet">Store Locator</a>
                    </li>
                    <li>
                      <a href="sales-outlet">Customer Care</a>
                    </li>
                    <li>
                      <a href="career">Career</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                  <h2 class="footer-heading">Awards</h2>
                  <ul class="list-unstyled footer-content-style">
                    <li>
                      <a href="international">International</a>
                    </li>
                    <li>
                      <a href="local">Local</a>
                    </li>
                    <li>
                      <a href="special-and-souvenir">Special and Souvenir</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                  <h2 class="footer-heading">NewsRoom</h2>
                  <ul class="list-unstyled footer-content-style">
                    <li>
                      <a href="local-news">Local News</a>
                    </li>
                    <li>
                      <a href="international">International</a>
                    </li>
                    <li>
                      <a href="press-release">Press Release</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                  <h2 class="footer-heading">Media and Events</h2>
                  <ul class="list-unstyled footer-content-style">
                    <li>
                      <a href="tvc">TVC</a>
                    </li>
                    <li>
                      <a href="special-events">Special Events</a>
                    </li>
                    <li>
                      <a href="documentary">Documentary</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6">
                  <h2 class="footer-heading">Media and Events</h2>
                  <ul class="list-unstyled footer-content-style">
                    <li>
                      <a href="tvc">TVC</a>
                    </li>
                    <li>
                      <a href="special-events">Special Events</a>
                    </li>
                    <li>
                      <a href="documentary">Documentary</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="footer-bottom-area">
            <div class="footer-text">
              <p class="text-center">
                Copyright © 2022 and all rights reserved by - Akij Venture Group
                . IT
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
