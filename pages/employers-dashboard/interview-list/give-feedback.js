import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import InterViewHome from "../../../components/dashboard-pages/employers-dashboard/Interview";

const index = () => {
    return (
        <>
            <Seo pageTitle="Give Feedback" />
            <InterViewHome fromFeedback />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
