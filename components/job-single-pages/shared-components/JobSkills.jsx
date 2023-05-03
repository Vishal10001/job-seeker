import React from 'react';
import RangeSlider from "../../common/RangeSlider";

const JobSkills = (props) => {
    const {className, showSlider, listClass} = props;
    const skills = [
        "app",
        "administrative",
        "android",
        "wordpress",
        "design",
        "react",
    ];
    return (
        <ul className={`job-skills ${className}`}>
            {skills.map((skill, i) => (
                <React.Fragment key={i}>
                    {showSlider ?
                        <div className='d-inline-flex w-100 justify-content-between'>
                            <li key={i} className={listClass}>
                                <a className='h-fit-content cursor-default'>{skill}</a>
                            </li>
                            <RangeSlider className='max-w-300 w-100'/>
                        </div>
                        :
                        <>
                            <li key={i} className={listClass}>
                                <a href="#">{skill}</a>
                            </li>
                        </>
                    }
                </React.Fragment>
            ))}
        </ul>
    );
};

export default JobSkills;
