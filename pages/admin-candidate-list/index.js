import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import LoginPopup from "../../components/common/form/login/LoginPopup";
import AdminHeader from "../../components/header/AdminHeader";
import FilterSidebar from "../../components/job-listing-pages/job-list-v1/FilterSidebar";
import AdminMobileMenu from "../../components/header/AdminMobileMenu";
import FilterTopBox from "../../components/candidates-listing-pages/candidates-list-v1/FilterTopBox";

const Index = () => {
    return (
        <>
            <Seo pageTitle="Jone Doe"/>
            <span className="header-span"/>
            <LoginPopup/>
            {/* End Login Popup Modal */}

            <AdminHeader/>
            {/* <!--End Main Header --> */}

            <AdminMobileMenu/>
            {/* End MobileMenu */}
            <section className="ls-section">
                <div className="auto-container">
                    <div className="row">
                        <div
                            className="offcanvas offcanvas-start"
                            tabIndex="-1"
                            id="filter-sidebar"
                            aria-labelledby="offcanvasLabel"
                        >
                            <div className="filters-column hide-left">
                                <FilterSidebar />
                            </div>
                        </div>
                        {/* End filter column for tablet and mobile devices */}

                        <div className="filters-column hidden-1023 col-lg-4 col-md-12 col-sm-12">
                            <FilterSidebar />
                        </div>
                        {/* <!-- End Filters Column for destop and laptop --> */}

                        <div className="content-column col-lg-8 col-md-12 col-sm-12">
                            <div className="ls-outer">
                                <FilterTopBox fromAdmin />
                                {/* <!-- ls Switcher --> */}
                            </div>
                        </div>
                        {/* <!-- End Content Column --> */}
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </section>
        </>
    )
};

export default dynamic(() => Promise.resolve(Index), {
    ssr: false,
});