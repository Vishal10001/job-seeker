import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import LoginWithSocial from "./LoginWithSocial";
import EmployerForm from "./FormContent";
import CandidateForm from "./CandidateForm";
import Link from "next/link";


const Register = (props) => {
    const {redirect} = props;
    return (
        <div className="form-inner">
            <h3>Create Account</h3>

            <Tabs>
                <div className="form-group register-dual">
                    <TabList className="btn-box row">
                        <Tab className="col-lg-6 col-md-12">
                            <button className="theme-btn btn-style-four">
                                <i className="la la-user"></i> Candidate
                            </button>
                        </Tab>

                        <Tab className="col-lg-6 col-md-12">
                            <button className="theme-btn btn-style-four">
                                <i className="la la-briefcase"></i> Employer / Admin
                            </button>
                        </Tab>
                    </TabList>
                </div>
                {/* End .form-group */}

                <TabPanel>
                    <CandidateForm/>
                </TabPanel>
                {/* End cadidates Form */}

                <TabPanel>
                    <EmployerForm/>
                </TabPanel>
                {/* End Employer Form */}
            </Tabs>
            {/* End form-group */}

            {/* <div className="bottom-box">
        <div className="divider">
          <span>or</span>
        </div>
        <LoginWithSocial />
      </div> */}
            {/* End bottom-box LoginWithSocial */}
            <div className="bottom-box">
                <div className="text">
                    Already have an account?{" "}
                    <Link
                        href={redirect ? "/login" : "#"}
                        className="call-modal signup"
                        data-bs-dismiss={redirect ? "#" : "modal"}
                        data-bs-target={redirect ? "/login" : "#loginPopupModal"}
                        data-bs-toggle={redirect ? "#" : "modal"}
                    >
                        SignIn
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
