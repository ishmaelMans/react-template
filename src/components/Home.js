/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./styles/Header.styled";
import { DisplaySection } from "./styles/DisplaySection.styled";
import { AboutMe } from "./styles/AboutMe.styled";
import { WhyChooseUs } from "./styles/WhyChooseUs.styled";
import { Footer } from "./styles/Footer.styled";
import logo from "./assets/rade-white.png";
import Cleaning from "./assets/pexels-karolina-grabowska-4239032.jpg";
import bathroom from "./assets/pexels-pixabay-534116.jpg";

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
                      <a href="tel:123655233">
                        <i className="fa-solid fa-phone-volume fa-shake"></i>
                      </a>
                      <p>
                        <label htmlFor="">Have any question?</label>
                        <br />
                        "Free: +234 708 8607 716"
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
                    Rade company is a minority owned business with large group
                    of specially trained, dedicated employees to provide
                    professional service.
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
                <h3>About Company</h3>
                <h1>One Stop Commercial Cleaning Company</h1>
                <p>
                  Our mission is not only to meet your expectations but to
                  exceed them, we also provide many more like condos and
                  apartment cleaning. Our unique 22-Step Healthy Touch Deep
                  Cleaning System will ensure you’ll receive a healthy, thorough
                  housecleaning with every visit. We use cleaning products that
                  are friendly to the environment.
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
                <h3>Why Choos Us</h3>
                <h1>Our Expertise Making Your Business Shine</h1>
                <p>
                  At Rade we believe that we have a duty to adhere to good
                  environmental practice, and operate in a sustainable manner.
                  As lovers of plants and the environment it is only natural for
                  us to want to reduce man’s impact wherever possible. Colin and
                  the staff at Rade are committed to helping people make
                  sustainable choices in their house.
                </p>
                <button className="btn">Read More</button>
              </div>
              <div className="col-2">
                <img src={bathroom} alt="" />
              </div>
            </div>
          </div>
        </WhyChooseUs>
      </main>
      <Footer>
        <div className="row">
          <div className="container">
            <div className="main_footer">
              <div className="section about_us">
                <h3>About Us</h3>
                <p>
                  At Rade Integrated Services, we deliver tailored cleaning
                  services with excellence, reliability, and customer
                  satisfaction as a premier industry provider
                </p>
              </div>
              <div className="section services">
                <h3>Best Services</h3>
                <ul>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="#house">House Cleaning</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="#office">Office Cleaning</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="#office">Carpet Cleaning</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="#office">Glass Cleaning</a>
                  </li>
                  <li>
                    <i class="fa-solid fa-angle-right"></i>
                    <a href="#office">Kitchen Cleaning</a>
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
