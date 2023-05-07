import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import HeaderNavContent from "../header/HeaderNavContent";
import employerMenuData from "../../data/employerMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";

const Header = () => {
    const router = useRouter();
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, []);

    return (
        // <!-- Main Header-->
        <header
            className={`main-header header-style-two  ${navbar ? "fixed-header animated slideInDown" : ""
                }`}
        >
            <div className="auto-container">
                {/* <!-- Main box --> */}
                <div className="main-box">
                    {/* <!--Nav Outer --> */}
                    <div className="nav-outer">
                        <div className="logo-box">
                            <div className="logo">
                                <Link href="/">
                                    <img src={navbar ? "images/logo-2.svg" : "images/logo.svg"} alt="brand" />
                                </Link>
                            </div>
                        </div>
                        {/* End .logo-box */}

                        <HeaderNavContent navbar={navbar} />
                        {/* <!-- Main Menu End--> */}
                    </div>
                    {/* End .nav-outer */}

                    <div className="outer-box">
                        <div className="d-flex align-items-center btn-box2">
                            {/*<Link href="/employers-dashboard/company-profile"*/}
                            {/*      className="theme-btn btn-style-six upload-cv">*/}
                            {/*    Upload your CV*/}
                            {/*</Link>*/}
                            <a
                                href="#"
                                className={`theme-btn btn-style-five ${navbar ? 'primary-color-main bg-white' : 'bg-sky-light-blue text-white'} call-modal`}
                                data-bs-toggle="modal"
                                data-bs-target="#loginPopupModal"
                            >
                                Login / Register
                            </a>
                            <Link
                                href="/employers-dashboard/post-jobs"
                                // className={`theme-btn bg-${navbar ? 'btn-style-five primary-color-main bg-white' : 'btn-style-five-blue text-white'}`}
                                className={`theme-btn ${navbar ? 'btn-style-five' : 'btn-style-five-blue'} `}
                            >
                                <span className="btn-title">Job Post</span>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- Dashboard Option --> */}
                    <div className="dropdown dashboard-option">
                        <a
                            className="dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <Image
                                alt="avatar"
                                className="thumb overflow-visible"
                                src="/images/resource/company-6.png"
                                width={50}
                                height={50}
                            />
                            <span className={`name ${navbar ? 'text-white' : 'text-black'}`}>My Account</span>
                        </a>

                        <ul className="dropdown-menu">
                            {employerMenuData.map((item) => (
                                <li
                                    className={`${isActiveLink(
                                        item.routePath,
                                        router.asPath
                                    )
                                            ? "active"
                                            : ""
                                        } mb-1`}
                                    key={item.id}
                                >
                                    <Link href={item.routePath}>
                                        <i
                                            className={`la ${item.icon}`}
                                        ></i>{" "}
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* End dropdown */}
                </div>
            </div>
        </header>
    );
};

export default Header;
