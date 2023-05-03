import React, {useState} from "react";

const FormContent = () => {
    const [registerData, setRegisterData] = useState({});
    return (
        <form method="post" action="add-parcel.html">
            <div className="form-group">
                <label>Company Name</label>
                <input
                    type="text"
                    name="companyname"
                    placeholder="Company Name"
                    required
                />
            </div>

            <div className="form-group">
                <label>Company Address</label>
                <input
                    type="text"
                    name="companyaddress"
                    placeholder="Company Address"
                    required
                />
            </div>

            <div className="form-group">
                <label>State </label>
                <input type="text" name="State" placeholder="State" required/>
            </div>

            <div className="form-group">
                <label>ZipCode</label>
                <input
                    type="text"
                    name="zipcode"
                    pattern="^\s*?\d{5}(?:[-\s]\d{4})?\s*?$"
                    placeholder="ZipCode"
                    required
                />
            </div>

            <div className="form-group">
                <label>Company Phone</label>
                <input
                    type="text"
                    name="phone"
                    maxLength={10}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Phone Number"
                    required
                />
            </div>

            <div className="form-group">
                <label>Email Address</label>
                <input
                    type="email"
                    name="email"
                    pattern=".+@globex\.com"
                    placeholder="Email"
                    required
                />
            </div>

            <div className="form-group">
                <label>WebSite</label>
                <input
                    type="url"
                    name="website"
                    pattern="https://.*"
                    placeholder="https://example.com"
                    required
                />
            </div>

            {/* name */}

            <div className="form-group">
                <label>Password</label>
                <input
                    id="password-field"
                    type="password"
                    name="password"
                    placeholder="Password"
                />
            </div>
            {/* password */}
            <div className="form-group">
                <div className="field-outer">
                    <div className="input-group checkboxes square">
                        <input checked={registerData?.companyAccount}
                               onChange={(e) => setRegisterData({...registerData, companyAccount: e?.target?.checked})}
                               type="checkbox" name="companyAccount" id="company-account"/>
                        <label htmlFor="company-account" className="remember">
                            <span className="custom-checkbox"></span> company account?
                        </label>
                    </div>
                </div>
            </div>

            {registerData?.companyAccount &&
                <div data-aos="fade-up" data-aos-delay={2}>
                    <div className="form-group">
                        <label>Company Email Address</label>
                        <input
                            type="email"
                            name="companyEmail"
                            pattern=".+@globex\.com"
                            placeholder="Company Email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            id="password-field"
                            type="password"
                            name="companyPassword"
                            placeholder="Company Password"
                        />
                    </div>
                </div>
            }
            <div className="form-group mt-3">
                <button className="theme-btn btn-style-one" type="submit">
                    Register
                </button>
            </div>
            {/* login */}
        </form>
    );
};

export default FormContent;
