import Link from "next/link";
import {} from "../../data/mainMenuData";
import {
    isActiveParent
} from "../../utils/linkActiveChecker";
import {useRouter} from "next/router";
import {masterAdminCandidate, masterAdminEmployer, masterAdminJobs} from "../../data/mainMenuData";

const AdminNavContent = () => {
    const router = useRouter();

    return (
        <>
            <nav className="nav main-menu">
                <ul className="navigation" id="navbar">
                    {/* current dropdown */}
                    <li
                        className={`${
                            isActiveParent(masterAdminJobs, router.asPath)
                                ? "current"
                                : ""}`}
                        // } dropdown`}
                    >
                        <Link href='/admin-job-list'>
                            <span>All Jobs</span>
                        </Link>
                    </li>
                    {/* End homepage menu items */}

                    <li
                        className={`${
                            isActiveParent(masterAdminCandidate, router.asPath)
                                ? "current"
                                : ""
                        } dropdown has-mega-menu`}
                        id="has-mega-menu"
                    >
                        <Link href='/admin-candidate-list'>
                            <span>All Candidates</span>
                        </Link>

                    </li>
                    {/* End findjobs menu items */}

                    <li
                        className={`${
                            isActiveParent(masterAdminEmployer, router.asPath)
                                ? "current"
                                : ""
                        } dropdown has-mega-menu`}
                        id="has-mega-menu"
                    >
                        <Link href='/admin-employer-list'>
                            <span>All Employers</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default AdminNavContent;
