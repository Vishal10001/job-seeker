import CopyrightFooter from "../footer/common-footer/CopyrightFooter";
import FooterContent2 from "../footer/FooterContent2";

const Footer = () => {
  return (
    <footer className="main-footer style-two">
      <div className="auto-container">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section" data-aos="fade-up">
          <div className="row">
            <div className="big-column col-xl-4 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  <a href="#">
                    <img src="/images/logo-2.svg" alt="brand" />
                  </a>
                </div>
                <p className="phone-num">
                  <span>Call us </span>
                  <a href="support@resumerr.com">012 345 6789</a>
                </p>
                <p className="address">
                  123 ABC Street, XYZ Surat CITY
                  <br /> 3051, India. <br />
                  <a href="mailto:support@resumerr.com" className="email">
                    support@resumerr.com
                  </a>
                </p>
              </div>
            </div>
            {/* End footer left widget */}

            <div className="big-column col-xl-8 col-lg-9 col-md-12">
              <div className="row">
                <FooterContent2 />
              </div>
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
      </div>
      {/* End auto-container */}

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
  );
};

export default Footer;
