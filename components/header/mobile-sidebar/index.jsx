"use client";
import Link from "next/link";
import {
    ProSidebarProvider,
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
} from "react-pro-sidebar";

import mobileMenuData from "../../../data/mobileMenuData";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import {
    isActiveLink,
    isActiveParentChaild,
} from "../../../utils/linkActiveChecker";
import {useRouter} from "next/router";

const Index = (props) => {
    const {fromAdmin} = props;
    const router = useRouter();

    return (
        <div
            className="offcanvas offcanvas-start mobile_menu-contnet"
            tabIndex="-1"
            id="offcanvasMenu"
            data-bs-scroll="true"
        >
            <SidebarHeader/>
            {/* End pro-header */}

            <ProSidebarProvider>
                <Sidebar>
                    <Menu>
                        {fromAdmin ?
                            <>
                                <MenuItem
                                    className={
                                        isActiveLink(
                                            '/admin-job-list',
                                            router.asPath
                                        )
                                            ? "menu-active-link"
                                            : ""
                                    }
                                    routerLink={
                                        <Link href='/admin-job-list'/>
                                    }
                                >
                                    All Jobs
                                </MenuItem>
                                <MenuItem
                                    className={
                                        isActiveLink(
                                            '/admin-candidate-list',
                                            router.asPath
                                        )
                                            ? "menu-active-link"
                                            : ""
                                    }
                                    routerLink={
                                        <Link href='/admin-candidate-list'/>
                                    }
                                >
                                    All Candidate
                                </MenuItem>
                                <MenuItem
                                    className={
                                        isActiveLink(
                                            '/admin-employer-list',
                                            router.asPath
                                        )
                                            ? "menu-active-link"
                                            : ""
                                    }
                                    routerLink={
                                        <Link href='/admin-employer-list'/>
                                    }
                                >
                                    All Employer
                                </MenuItem>
                            </> :
                            <>
                                <MenuItem
                                    className={
                                        isActiveLink(
                                            '/',
                                            router.asPath
                                        )
                                            ? "menu-active-link"
                                            : ""
                                    }
                                    routerLink={
                                        <Link href='/'/>
                                    }
                                >
                                    Home
                                </MenuItem>
                                <MenuItem
                                    className={
                                        isActiveLink(
                                            '/job-list-v1',
                                            router.asPath
                                        )
                                            ? "menu-active-link"
                                            : ""
                                    }
                                    routerLink={
                                        <Link href='/job-list-v1'/>
                                    }
                                >
                                    Find Jobs
                                </MenuItem>
                                {mobileMenuData.map((item) => (
                                    <SubMenu
                                        className={
                                            isActiveParentChaild(
                                                item.items,
                                                router.asPath
                                            )
                                                ? "menu-active"
                                                : ""
                                        }
                                        label={item.label}
                                        key={item.id}
                                    >
                                        {item?.items?.length && item.items.map((menuItem, i) => (
                                            <MenuItem
                                                className={
                                                    isActiveLink(
                                                        menuItem.routePath,
                                                        router.asPath
                                                    )
                                                        ? "menu-active-link"
                                                        : ""
                                                }
                                                key={i}
                                                routerLink={
                                                    <Link href={menuItem.routePath}/>
                                                }
                                            >
                                                {menuItem.name}
                                            </MenuItem>
                                        ))}
                                    </SubMenu>
                                ))}
                            </>}
                    </Menu>
                </Sidebar>
            </ProSidebarProvider>
            {!fromAdmin && <SidebarFooter/>}
        </div>
    );
};

export default Index;
