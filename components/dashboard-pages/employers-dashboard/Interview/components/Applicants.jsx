import Link from "next/link";
import candidatesData from "../../../../../data/candidates";

const Applicants = () => {
    return (
        <>
            {candidatesData.slice(17, 23).map((candidate) => (
                <div
                    className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
                    key={candidate.id}
                >
                    <div className="inner-box">
                        <div className="content">
                            <figure className="image">
                                <img src={candidate.avatar} alt="candidates"/>
                            </figure>
                            <h4 className="name">
                                <Link href={`/candidate-interview/${candidate.id}?fromInterview=true`}>
                                    {candidate.name}
                                </Link>
                            </h4>

                            <ul className="candidate-info">
                                <li className="designation">{candidate.designation}</li>
                                <li>
                                    <span className="icon flaticon-map-locator"></span>{" "}
                                    {candidate.location}
                                </li>
                                <li>
                                    <span className="icon flaticon-money"></span> $
                                    {candidate.hourlyRate} / hour
                                </li>
                            </ul>
                            {/* End candidate-info */}

                            <ul className="post-tags">
                                {candidate.tags.map((val, i) => (
                                    <li key={i}>
                                        <a href="#">{val}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* End content */}

                        {/* <div className="option-box">
                            <ul className="option-list">
                                <li>
                                 <button data-text="View Interview Details">
                                   <span className="la la-eye"></span>
                                 </button>
                                </li>
                                <li>
                                    <Link href='/employers-dashboard/interview-list/give-feedback'>
                                        <button data-text="Select Candidate">
                                            <span className="la la-check"></span>
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <button data-text="Reject Candidate">
                                        <span className="la la-times-circle"></span>
                                    </button>
                                </li>
                                <li>
                                    <button data-text="Delete Candidate">
                                        <span className="la la-trash"></span>
                                    </button>
                                </li>
                            </ul>
                        </div> */}
                        {/* End admin options box */}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Applicants;
