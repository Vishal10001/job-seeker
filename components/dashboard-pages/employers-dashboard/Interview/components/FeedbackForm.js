import React, {useState} from "react";
import Rating from "../../../../common/starRating/Rating";

const FeedbackForm = () => {
    const [starBlank, setStarBlank] = useState(false);
    const removeValue = () => {
        starBlank && setStarBlank(false);
    };

    return (
        <form className="default-form">
            <div className="row">
                <div className="form-group col-lg-12 col-md-12">
                    <label>Give Ratings</label>
                    <div className='d-flex align-items-center gap-3'>
                        <Rating removeValue={removeValue} setStarBlank={setStarBlank} starBlank={starBlank} hideMessage stars={4}/>
                        <div onClick={() => setStarBlank(true)} className='bg-lighter-blue p-1 px-2 border-radius-6'>
                            <i className="las cursor-pointer la-undo-alt"/>
                        </div>
                    </div>
                </div>
                <div className="form-group col-lg-12 col-md-12">
                    <label>Feedback Message</label>
                    <textarea
                        className="form-control"
                        placeholder="Type a message..."
                        required
                    />
                </div>
            </div>
        </form>
    )
};
export default FeedbackForm;