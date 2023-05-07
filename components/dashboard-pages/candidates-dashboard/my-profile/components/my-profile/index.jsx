import FormInfoBox from "./FormInfoBox";
import LogoUpload from "./LogoUpload";

const index = () => {
    return (
        <div className="widget-content">
            <LogoUpload title='Browse Profile Picture'/>
            {/* End logo and cover photo components */}
            <div>
                <label className='fw-semibold'>Intro Video</label>
                <LogoUpload title='Browse Intro Video' showWarning accept='video/mp4,video/x-m4v,video/*'/>
            </div>
            {/* End intro video components */}
            <FormInfoBox/>
            {/* compnay info box */}
        </div>
    );
};

export default index;
