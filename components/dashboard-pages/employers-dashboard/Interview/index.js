import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardEmployerSidebar from "../../../header/DashboardEmployerSidebar";
import BreadCrumb from "../../BreadCrumb";
import Applicants from "./components/Applicants";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import FeedbackForm from "./components/FeedbackForm";

const Index = (props) => {
    const {fromFeedback} = props;
    return (
        <div className="page-wrapper dashboard">
            <span className="header-span"/>
            {/* <!-- Header Span for hight --> */}

            <LoginPopup/>
            {/* End Login Popup Modal */}

            <DashboardHeader/>
            {/* End Header */}

            <MobileMenu/>
            {/* End MobileMenu */}

            <DashboardEmployerSidebar/>
            {/* <!-- End User Sidebar Menu --> */}

            {/* <!-- Dashboard --> */}
            <section className="user-dashboard">
                <div className="dashboard-outer">
                    <MenuToggler/>
                    {/* Collapsible sidebar button */}
                    <BreadCrumb title={fromFeedback ? "Feedback!" : "Interviews List!"}/>
                    {/* breadCrumb */}


                    <div className="row">
                        {/*<div className="col-xl-7 col-lg-12">*/}
                        {/* <!-- Graph widget --> */}
                        {/*<div className="graph-widget ls-widget">*/}
                        {/*  <ProfileChart />*/}
                        {/*</div>*/}
                        {/* End profile chart */}
                        {/*</div>*/}
                        {/* End .col */}

                        {/*<div className="col-xl-5 col-lg-12">*/}
                        {/* <!-- Notification Widget --> */}
                        {/*  <div className="notification-widget ls-widget">*/}
                        {/*    <div className="widget-title">*/}
                        {/*      <h4>Notifications</h4>*/}
                        {/*    </div>*/}
                        {/*    <div className="widget-content">*/}
                        {/*      <Notification />*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</div>*/}
                        {/* End .col */}

                        <div className="col-lg-12">
                            {/* <!-- applicants Widget --> */}
                            <div className="applicants-widget ls-widget">
                                <div className="widget-title">
                                    <h4>{fromFeedback ? 'Feedback' : `All Interview's List`}</h4>
                                </div>
                                <div className="widget-content">
                                    <div className="row">
                                        {/* <!-- Candidate block three --> */}

                                        {fromFeedback ? <FeedbackForm/> : <Applicants/>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End .col */}
                    </div>
                    {/* End .row profile and notificatins */}
                </div>
                {/* End dashboard-outer */}
            </section>
            {/* <!-- End Dashboard --> */}

            <CopyrightFooter/>
            {/* <!-- End Copyright --> */}
        </div>
        // End page-wrapper
    );
};

export default Index;
