// is active parent check
export const isActiveParent = (data = [], path) => {
    if (data?.length !== 0) {
        return data?.some(({items}) =>
            items?.some(
                (menu) =>
                    menu.routePath.replace(/\/\d+/, "") ===
                    path.replace(/\/\d+/, "")
            )
        );
    }
};

// is active parent childe check
export const isActiveParentChaild = (data = [], path) => {
    if (data?.length !== 0) {
        return data?.some(
            (menu) =>
                menu.routePath.replace(/\/\d+/, "") ===
                path.replace(/\/\d+/, "")
        );
    }
};

// is active link check
export const isActiveLink = (menuPath, routePath, alterPath) => {
    if (menuPath && routePath) {
        return menuPath.replace(/\/\d+/, "") === routePath.replace(/\/\d+/, "") ? true : alterPath ? alterPath.replace(/\/\d+/, "") === routePath.replace(/\/\d+/, "") : false;
    }
};
