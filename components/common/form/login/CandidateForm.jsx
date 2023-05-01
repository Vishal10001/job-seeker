const CandidateFormContent = () => {
    return (
        <form method="post">
            <div className="form-group">
                <label>Candidate Name</label>
                <input type="text" name="username" placeholder="Candidate Name" required/>
            </div>
            {/* name */}

            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password"/>
            </div>
            {/* password */}

            <div className="form-group">
                <div className="field-outer">
                    <div className="input-group checkboxes square">
                        <input type="checkbox" name="remember-me" id="remember"/>
                        <label htmlFor="remember" className="remember">
                            <span className="custom-checkbox"></span> Remember me
                        </label>
                    </div>
                    <a href="#" className="pwd">
                        Forgot password?
                    </a>
                </div>
            </div>

            <div className="form-group">
                <button className="theme-btn btn-style-one" type="submit">
                    Log In
                </button>
            </div>
            {/* login */}
        </form>
    );
};

export default CandidateFormContent;

