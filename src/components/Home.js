/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./styles/Header.styled";
import { DisplaySection } from "./styles/DisplaySection.styled";
import { AboutMe } from "./styles/AboutMe.styled";
import { WhyChooseUs } from "./styles/WhyChooseUs.styled";
import { MapSection } from "./styles/MapSection.styled";
import { Footer } from "./styles/Footer.styled";
import logo from "./assets/rade-white.png";
import Cleaning from "./assets/pexels-karolina-grabowska-4239032.jpg";
import bathroom from "./assets/pexels-pixabay-534116.jpg";
import professional from "./assets/professional-icon.svg";
import custom from "./assets/custom-icon.svg";
import price from "./assets/price.svg";

const Home = () => {
  const [isClick, setIsClick] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [isNavVisible, setIsNavVisible] = useState(false); // Track navigation visibility

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    setIsClick(!isClick); // Toggle submenu
  };

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };
  return (
    <>
      <Header>
        <div id="header_wrap">
          <div className="bg"></div>
          <div className="header_top">
            <div className="container">
              <div className="header_top_inner flex">
                <div className="top_left_content">
                  <div className="header_top_left">
                    <div className="email">
                      <a href="www.google.com">
                        <i className="fa-regular fa-envelope"></i>
                      </a>
                      <p>
                        <label htmlFor="">
                          If you have any queries
                          <br />
                          info@radeintegratedservices.co.uk
                        </label>
                      </p>
                    </div>
                    <div className="phone">
                      <a href="tel: 07405675285">
                        <i className="fa-solid fa-phone-volume fa-shake"></i>
                      </a>
                      <p>
                        <label htmlFor="">Have any question?</label>
                        <br />
                        "Free: 07405675285"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="header_top_right">
                  <div className="right-item time">
                    <p>Opening Hour: 9:30AM - 5:30PM</p>
                  </div>
                  <div className="right-item top_right_button">
                    <a
                      href="https://forms.gle/MqFyAiig9igqCSh68"
                      target="_self"
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site_header">
            <div className="container">
              <div className="row">
                <div className="site_branding">
                  <a href="/" rel="home" title="rade">
                    <img src={logo} alt="rade" />
                  </a>
                </div>
                <div className="site_navigation">
                  <nav className="main_navigation">
                    <ul className="mastermenu">
                      <li className="menu_item">
                        <a className="nav" href="/">
                          Services
                        </a>
                        <ul className="sub_menu">
                          <li>
                            <a href="#service">Services Style 1</a>
                          </li>
                          <li>
                            <a href="#service">Services Style 2</a>
                          </li>
                          <li>
                            <a href="#service">Service Detail</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu_item">
                        <a className="nav" href="2w">
                          Company
                        </a>
                        <ul className="sub_menu">
                          <li>
                            <a href="/about">About us</a>
                          </li>
                          <li>
                            <a href="/Our Team">Our Team</a>
                          </li>
                          <li>
                            <a href="/Gallery">Gallery</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu_item">
                        <a className="nav" href="/">
                          Contact
                        </a>
                        <ul className="sub_menu">
                          <li>
                            <a href="/contact">Contact Us</a>
                          </li>
                          <li>
                            <a href="/helps & Faqs">Helps & Faqs</a>
                          </li>
                          <li>
                            <a href="/appointment">Appointment</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <div className="right_social_icons">
                    <a
                      className="fa"
                      href="https://www.facebook.com/share/1L9c5YmUit/?mibextid=wwXIfr"
                      title="Facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="fa-brands fa-facebook-f custom-icon"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/radeintegratedservicesltd?igsh=eGsxczI2ZmJtdGRy&utm_source=qr"
                      title="Instagram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.tiktok.com/@radeintegratedservices?_t=ZN-8w3lzrVdp1q&_r=1"
                      title="Tiktok"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="fa-brands fa-tiktok"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile_header">
            <div className="container">
              <div className="mobile_row">
                <div className="site_branding">
                  <a href="/" rel="home" title="rade">
                    <img src={logo} alt="rade" />
                  </a>
                </div>
                <div className="open-menu" onClick={toggleNav}>
                  {/* <i class="fa-solid fa-x"></i> */}
                  {!isClick ? (
                    <i class="fa-solid fa-bars"></i>
                  ) : (
                    <i class="fa-solid fa-x"></i>
                  )}
                  {/* <i class="fa-solid fa-bars"></i>
                            <i class="fa-solid fa-x"></i> */}
                </div>
                {isNavVisible && (
                  <div className="site_navigation">
                    <nav className="main_navigation">
                      <ul className="mastermenu">
                        <li className="menu_item">
                          <a
                            className="nav"
                            onClick={(e) => {
                              e.preventDefault(); // Prevent jumping to top
                              toggleMenu("services");
                            }}
                          >
                            Services
                          </a>
                          {openMenu === "services" && (
                            <ul className="sub_menu">
                              <li>
                                <a href="/service">Services Style 1</a>
                              </li>
                              <li>
                                <a href="/service">Services Style 2</a>
                              </li>
                              <li>
                                <a href="/service">Service Detail</a>
                              </li>
                            </ul>
                          )}
                        </li>
                        <li className="menu_item">
                          <a
                            className="nav"
                            onClick={(e) => {
                              e.preventDefault(); // Prevent jumping to top
                              toggleMenu("company");
                            }}
                          >
                            Company
                          </a>
                          {openMenu === "company" && (
                            <ul className="sub_menu">
                              <li>
                                <a href="/about">About us</a>
                              </li>
                              <li>
                                <a href="/our team">Our Team</a>
                              </li>
                              <li>
                                <a href="/gallery">Gallery</a>
                              </li>
                            </ul>
                          )}
                        </li>
                        <li className="menu_item">
                          <a
                            className="nav"
                            onClick={(e) => {
                              e.preventDefault(); // Prevent jumping to top
                              toggleMenu("contact");
                            }}
                          >
                            Contact
                          </a>
                          {openMenu === "contact" && (
                            <ul className="sub_menu">
                              <li>
                                <a href="/contact">Contact Us</a>
                              </li>
                              <li>
                                <a href="/helps & faqs">Helps & Faqs</a>
                              </li>
                              <li>
                                <a href="/appointment">Appointment</a>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
          <DisplaySection>
            <div className="container">
              <div className="row">
                <article className="showcase">
                  <h1>An expert cleaning service you can trust</h1>
                  <p>
                    Rade integrated services Ltd is a team of specially trained
                    and dedicated employees to provide professional service.
                  </p>
                  <button className="btn">Learn More</button>
                </article>
                {/* <div className="form">
                  <h3>Get Free Estimate</h3>
                  <form action="">
                    <div className="main_form">
                      <div className="name">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Name*"
                        />
                      </div>
                      <div className="phone">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="choose_service">
                        <select
                          name="service"
                          id="service"
                          placeholder="Choose Service"
                        >
                          <option value="choose service">choose service</option>
                          <option value="House Cleaning">House Cleaning</option>
                          <option value="Office Cleaning">
                            Office Cleaning
                          </option>
                          <option value="Carpet Cleaning">
                            Carpet Cleaning
                          </option>
                        </select>
                      </div>
                      <div className="comment">
                        <textarea
                          name=""
                          id=""
                          maxLength="2000"
                          placeholder="Your Comment"
                        ></textarea>
                      </div>
                      <div className="button">
                        <button>Get A Quote</button>
                      </div>
                    </div>
                  </form>
                </div> */}
              </div>
            </div>
          </DisplaySection>
        </div>
      </Header>
      <main>
        <AboutMe>
          <div className="container">
            <div className="row">
              <div className="col-1">
                <img src={Cleaning} alt="cleaning" />
              </div>
              <div className="col-2">
                <h3>About</h3>
                <h1>
                  One-Stop Solution for Professional Cleaning Services in the
                  Uk!
                </h1>
                <p>
                  At Rade Integrated Services Ltd. We take pride in delivering
                  exceptional cleaning services tailored to meet the diverse
                  needs of our valued clients. <br />
                  With a strong commitment to excellence, reliability and
                  customer satisfaction, we have established ourselves as a
                  premier cleaning service provider in a industry.
                </p>
                <Link to="/about" className="btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </AboutMe>
        <WhyChooseUs>
          <div className="container">
            <div className="row">
              <div className="col-1">
                <h3>Why Choose Us</h3>
                <h1>Our Expertise Making Your Business Shine</h1>

                <p>
                  At Rade Integrated solution Ltd. We believe that we have a
                  duty to adhere to good environmental practice, and operate in
                  a sustainable manner.
                </p>
                <br />
                <br />
                <Link to="/about" className="btn">
                  Read More
                </Link>
              </div>
              <div className="col-2">
                <img src={bathroom} alt="" />
              </div>
              <div className="col-3">
                <div className="whychoose pro">
                  <img src={professional} alt="" width="50" height="50" />
                  <h2>Professional Team</h2>
                  <p>
                    Skilled professionals deliver top-quality, detailed cleaning
                    services with expertise.
                  </p>
                </div>
                <div className="whychoose customize">
                  <img src={custom} alt="" width="50" height="50" />
                  <h2>Customized Solutions</h2>
                  <p>
                    Tailored cleaning packages designed for unique spaces,
                    meeting specific needs.
                  </p>
                </div>
                <div className="whychoose pricing">
                  <img src={price} alt="" width="50" height="50" />
                  <h2>Competitive Pricing</h2>
                  <p>
                    Affordable cleaning with top quality—great service without
                    extra cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </WhyChooseUs>
        <MapSection>
          <div className="container">
            <h2>Area We Cover</h2>
            <p>
              Abbeydale, Aston, Birley, Charnock, City Centre, Fulwood, Hallam,
              Hillsborough, Meadow Head, Norton, Richmond, Sothall, Todwick,
              Waterthorpe, Whiston and surrounding areas
            </p>
            <div class="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d607387.8547864086!2d-1.5231894547241804!3d53.51118315676702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1746381350417!5m2!1sen!2sng"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>
            </div>
          </div>
        </MapSection>
      </main>
      <Footer>
        <div className="row">
          <div className="container">
            <div className="main_footer">
              <div className="section about_us">
                <h3>About Us</h3>
                <p>
                  At Rade Integrated Services Ltd. We deliver tailored cleaning
                  services with excellence, reliability, and customer
                  satisfation as a prmier industry provider.
                </p>
              </div>
              <div className="section services">
                <h3>Best Services</h3>
                <ul>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="#house">Residentail Cleaning</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="#office">Domestic Cleaning</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="#office">Commercial Cleaning</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="#office">Carpet Cleaning</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="#office">Window Cleaning</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="#office">Over Cleaning</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="#office">Hob/Extractor Cleaning</a>
                  </li>
                </ul>
              </div>
              <div className="section contact_info">
                <h3>Contact Info</h3>
                <div className="main_contact">
                  <ul>
                    <li>
                      <a href="">
                        <span>
                          <i class="fa-solid fa-phone"></i>
                        </span>
                        <span>07769593945, 07405675285</span>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span>
                          <i class="fa-solid fa-envelope"></i>
                        </span>
                        <span>info@radeintegratedservices.co.uk</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="section newsletter">
                <h3>Newsletter</h3>
                <p>
                  Subcribe for all news from us. Please enter your email to form
                  below.
                </p>
                <form action="">
                  <div>
                    <input type="text" placeholder="Enter your email" />
                  </div>
                  <div>
                    <input
                      className="btn"
                      type="submit"
                      value="Subscribe Now"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Home;
