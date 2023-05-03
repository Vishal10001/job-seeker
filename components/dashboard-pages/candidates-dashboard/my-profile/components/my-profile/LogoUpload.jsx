import {useState} from "react";

const LogoUpload = (props) => {
    const {accept, showWarning, title} = props;
    const [logImg, setLogoImg] = useState("");
    const logImgHander = (e) => {
        setLogoImg(e.target.files[0]);
    };
    return (
        <>
            <div className="uploading-outer">
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept={`${accept ? accept : 'image/*'}`}
                        id="upload"
                        required
                        onChange={logImgHander}
                    />
                    <label
                        className="uploadButton-button ripple-effect"
                        htmlFor="upload"
                    >
                        {logImg !== "" ? logImg.name : title ? title : "Browse Logo"}
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>
                {!showWarning && <div className="text">
                    Max file size is 1MB, Minimum dimension: 330x300 And
                    Suitable files are .jpg & .png
                </div>}
            </div>
        </>
    );
};

export default LogoUpload;
