import AddPortfolio from "./AddPortfolio";
import Awards from "./Awards";
import Education from "./Education";
import Experiences from "./Experiences";
import SkillsMultiple from "./SkillsMultiple";
import { useRouter } from "next/router";
import JobSkills from "../../../../job-single-pages/shared-components/JobSkills";
import JobType from "../../../../job-listing-pages/components/JobType";
import ExperienceLevel from "../../../../job-listing-pages/components/ExperienceLevel";
import SalaryRangeSlider from "../../../../job-listing-pages/components/SalaryRangeSlider";

const Index = () => {
    const router = useRouter();
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className="default-form">
                <div className="row">
                    {/*<div className="form-group col-lg-6 col-md-12">*/}
                    {/*    <label>Select Your CV</label>*/}
                    {/*    <select className="chosen-single form-select">*/}
                    {/*        <option>My CV</option>*/}
                    {/*    </select>*/}
                    {/*</div>*/}
                    {/* <!-- Input --> */}

                    <div className="form-group col-lg-12 col-md-12">
                        <label>Description</label>
                        <textarea
                            placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
                    </div>
                    {/* <!-- About Company --> */}

                    <div className="form-group col-lg-12 col-md-12">
                        <Education />
                        {/* <!-- Resume / Education --> */}

                        <Experiences />
                        {/* <!-- Resume / Work & Experience --> */}
                    </div>
                    {/* <!--  education and word-experiences --> */}

                    <div className="form-group col-lg-6 col-md-12">
                        <div className='widget-content'>
                            <AddPortfolio />
                        </div>
                    </div>
                    {/* <!-- End more portfolio upload --> */}

                    <div className="form-group col-lg-12 col-md-12">
                        {/* <!-- Resume / Awards --> */}
                        <Awards />
                    </div>

                    {/* <!-- Input --> */}
                    <div className="form-group col-lg-12 col-md-12">
                        <div className='row'>
                            <div className="switchbox-outer form-group col-lg-3 col-md-6">
                                <label>Job type</label>
                                <JobType className='w-fit-content' />
                            </div>

                            <div className="switchbox-outer form-group col-lg-3 col-md-6">
                                <label>Experience Level</label>
                                <ExperienceLevel hideViewMore className='w-fit-content' />
                            </div>
                            <div className="form-group col-lg-3 col-md-12">
                                <label>Current Salary($)</label>
                                <select className="chosen-single form-select" required>
                                    <option>40-70 K</option>
                                    <option>50-80 K</option>
                                    <option>60-90 K</option>
                                    <option>70-100 K</option>
                                    <option>100-150 K</option>
                                </select>
                            </div>

                            {/* <!-- Input --> */}
                            <div className="form-group col-lg-3 col-md-12">
                                <label>Expected Salary($)</label>
                                <select className="chosen-single form-select" required>
                                    <option>120-350 K</option>
                                    <option>40-70 K</option>
                                    <option>50-80 K</option>
                                    <option>60-90 K</option>
                                    <option>70-100 K</option>
                                    <option>100-150 K</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-lg-6 col-md-12">
                        <label>Skills </label>
                        <div className="d-flex align-items-center p-3 border-radius-6 bg-light-white">
                            <JobSkills className='flex-column w-100 align-items-start' showSlider
                                listClass='d-inline-flex'
                            />
                        </div>
                        {/*<SkillsMultiple/>*/}
                    </div>
                    {/* <!-- Multi Selectbox --> */}
                    <div className="form-group col-lg-12 col-md-12">
                        <div className="col-lg-6 col-md-12 form-group">
                            <label>New Skill</label>
                            <input
                                type="text"
                                name="subject"
                                className="subject"
                                placeholder="skill name *"
                                required
                            />
                        </div>
                        <button
                            className="theme-btn btn-style-one"
                            type="submit"
                            id="submit"
                            name="submit-form"
                        >
                            Add More Skills
                        </button>
                    </div>
                    <div className="form-group col-lg-12 col-md-12">
                        <button type="submit" className="theme-btn btn-style-one">
                            {router?.query?.apply ? 'Apply' : 'Save'}
                        </button>
                    </div>
                    {/* <!-- Input --> */}
                </div>
                {/* End .row */}
            </div>
        </>
    );
};

export default Index;
