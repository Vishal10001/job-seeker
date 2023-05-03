import resumeContent from "../../../../../data/resumeContent";
import {useState} from "react";
import ConfirmModal from "../../../../common/ConfirmModal";

const Education = () => {
    const [isEdit, setIsEdit] = useState(NaN);
    return (
        <>
            {/*<ConfirmModal/>*/}
            <div className="resume-outer">
                <div className="upper-title">
                    <h4>Education</h4>
                    <button className="add-info-btn">
                        <span className="icon flaticon-plus"></span> Add Education
                    </button>
                </div>
                {/* <!-- Resume BLock --> */}
                {resumeContent.education.map((item, index) =>
                    <div className="resume-block" key={index}>
                        {isEdit === index ?
                            <div className="inner">
                                <span className="name">{item?.institutionName?.charAt(0) || ''}</span>
                                <div className="title-box">
                                    <div className="info-box d-flex flex-column gap-2">
                                        <label>
                                            <p className='mb-0'>Your Degree</p>
                                            <input type="text" className='mt-0' defaultValue={item?.degree}
                                                   name="degree"
                                                   placeholder="Your Degree" required/>
                                        </label>
                                        <label>
                                            <p className='mb-0'>Your Institution Name</p>
                                            <input type="text" defaultValue={item?.institutionName}
                                                   name="institutionName"
                                                   placeholder="Your Institution Name" required/>
                                        </label>
                                    </div>
                                    <div className="edit-box">
                                        <div className="info-box d-flex flex-wrap gap-2">
                                            <div>
                                                <label><p className='mb-0'>Start Year</p></label>
                                                <select defaultValue={item?.startYear}
                                                        className="chosen-single form-select"
                                                        required>
                                                    <option value='2001'>2001</option>
                                                    <option value='2002'>2002</option>
                                                    <option value='2003'>2003</option>
                                                    <option value='2004'>2004</option>
                                                    <option value='2005'>2005</option>
                                                    <option value='2006'>2006</option>
                                                    <option value='2007'>2007</option>
                                                    <option value='2008'>2008</option>
                                                    <option value='2009'>2009</option>
                                                    <option value='2010'>2010</option>
                                                    <option value='2011'>2011</option>
                                                    <option value='2012'>2012</option>
                                                    <option value='2013'>2013</option>
                                                    <option value='2014'>2014</option>
                                                    <option value='2015'>2015</option>
                                                    <option value='2016'>2016</option>
                                                    <option value='2017'>2017</option>
                                                    <option value='2018'>2018</option>
                                                    <option value='2019'>2019</option>
                                                    <option value='2020'>2020</option>
                                                    <option value='2021'>2021</option>
                                                    <option value='2022'>2022</option>
                                                    <option value='2023'>2023</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label><p className='mb-0'>End Year</p></label>
                                                <select defaultValue={item?.endYear}
                                                        className="chosen-single form-select"
                                                        required>
                                                    <option value='2001'>2001</option>
                                                    <option value='2002'>2002</option>
                                                    <option value='2003'>2003</option>
                                                    <option value='2004'>2004</option>
                                                    <option value='2005'>2005</option>
                                                    <option value='2006'>2006</option>
                                                    <option value='2007'>2007</option>
                                                    <option value='2008'>2008</option>
                                                    <option value='2009'>2009</option>
                                                    <option value='2010'>2010</option>
                                                    <option value='2011'>2011</option>
                                                    <option value='2012'>2012</option>
                                                    <option value='2013'>2013</option>
                                                    <option value='2014'>2014</option>
                                                    <option value='2015'>2015</option>
                                                    <option value='2016'>2016</option>
                                                    <option value='2017'>2017</option>
                                                    <option value='2018'>2018</option>
                                                    <option value='2019'>2019</option>
                                                    <option value='2020'>2020</option>
                                                    <option value='2021'>2021</option>
                                                    <option value='2022'>2022</option>
                                                    <option value='2023'>2023</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="edit-btns">
                                            <button
                                                className='w-fit-content ui-danger-with-bg d-inline-flex align-items-center py-1 px-2 text-center'
                                                onClick={() => setIsEdit(NaN)}>
                                                Cancel
                                            </button>
                                            <button data-bs-toggle="modal"
                                                    data-bs-target="#confirmModal">
                                                <span className="la la-trash"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="text">
                                    <p className='mb-0'>Description</p>
                                    <textarea defaultValue={item?.description}></textarea>
                                </div>
                            </div>
                            :
                            <div className="inner">
                                <span className="name">{item?.institutionName?.charAt(0) || ''}</span>
                                <div className="title-box">
                                    <div className="info-box">
                                        <h3>{item?.degree}</h3>
                                        <span>{item?.institutionName}</span>
                                    </div>
                                    <div className="edit-box">
                                        <span className="year">{item?.startYear} - {item?.endYear}</span>
                                        <div className="edit-btns">
                                            <button onClick={() => setIsEdit(index)}>
                                                <span className="la la-pencil"></span>
                                            </button>
                                            <button
                                                // data-bs-toggle="modal"
                                                //     data-bs-target="#confirmModal"
                                            >
                                                <span className="la la-trash"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="text">
                                    {item?.description}
                                </div>
                            </div>
                        }
                    </div>
                )}

                {/* <!-- Resume BLock --> */}
                {/*<div className="resume-block">*/}
                {/*    <div className="inner">*/}
                {/*        <span className="name">H</span>*/}
                {/*        <div className="title-box">*/}
                {/*            <div className="info-box">*/}
                {/*                <h3>Computer Science</h3>*/}
                {/*                <span>Harvard University</span>*/}
                {/*            </div>*/}
                {/*            <div className="edit-box">*/}
                {/*                <span className="year">2008 - 2012</span>*/}
                {/*                <div className="edit-btns">*/}
                {/*                    <button>*/}
                {/*                        <span className="la la-pencil"></span>*/}
                {/*                    </button>*/}
                {/*                    <button>*/}
                {/*                        <span className="la la-trash"></span>*/}
                {/*                    </button>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="text">*/}
                {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a*/}
                {/*            ipsum tellus. Interdum et malesuada fames ac ante*/}
                {/*            <br/> ipsum primis in faucibus.*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    );
};

export default Education;
