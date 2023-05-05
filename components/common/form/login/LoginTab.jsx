import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import EmployerForm from "./FormContent";
import CandidateForm from "./CandidateForm";
import Link from "next/link";

const LoginTab = (props) => {
    const {redirect} = props;
    return (<div className="form-inner">
        <h3>Login</h3>
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
                            <i className="la la-briefcase"></i> Employer
                        </button>
                    </Tab>

                    <Tab className="col-lg-6 col-md-12">
                        <button className="theme-btn btn-style-four">
                            <i className="la la-briefcase"></i> Admin
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

            <TabPanel>
                <EmployerForm isAdmin/>
            </TabPanel>
            {/* End Employer Form  for Admin*/}
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
                Don&apos;t have an account?{" "}
                <Link
                    href={redirect ? "/register" : "#"}
                    className="call-modal signup"
                    data-bs-dismiss={redirect ? "#" : "modal"}
                    data-bs-target={redirect ? "/register" : "#registerModal"}
                    data-bs-toggle={redirect ? "#" : "modal"}
                >
                    Signup
                </Link>
            </div>

            {/* <div className="divider">
          <span>or</span>
        </div>

        <LoginWithSocial /> */}
        </div>
        {/* End bottom-box LoginWithSocial */}
    </div>);
};

export default LoginTab;
