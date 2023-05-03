import {useEffect} from "react";

const CandidateFormContent = () => {
    useEffect(() => {
        const inputs = document.querySelectorAll('.otp-input-list > input');

        inputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                const inputLength = input.value.length;
                if (inputLength === 1) {
                    const oldValue = input.getAttribute('data-value');
                    if (oldValue !== null && oldValue !== input.value) {
                        input.setAttribute('data-value', input.value);
                        if (index < inputs.length - 1) {
                            inputs[index + 1].focus();
                        }
                    } else if (oldValue === null) {
                        input.setAttribute('data-value', input.value);
                        if (index < inputs.length - 1) {
                            inputs[index + 1].focus();
                        }
                    }
                } else if (inputLength === 0) {
                    if (index > 0) {
                        inputs[index - 1].focus();
                    }
                    input.setAttribute('data-value', '');
                } else if (inputLength > 1) {
                    const newValue = input.value[inputLength - 1];
                    input.value = newValue;
                    input.setAttribute('data-value', newValue);
                    if (index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                }
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
                    inputs[index - 1].focus();
                }
            });
        });
    }, []);

    return (
        <form method="post">
            <div className="form-group">
                <label>Candidate Phone Number</label>
                <input type="number" name="Mobile" placeholder="Candidate Phone Number" required/>
            </div>
            {/* name */}

            <div className="form-group d-flex flex-column">
                <label>Otp</label>
                <div className="d-inline-flex gap-1 w-100 justify-content-between otp-input-list">
                    <input type="text" className="form-control otp-input" required data-value=""/>
                    <input type="text" className="form-control otp-input" required data-value=""/>
                    <input type="text" data-value="" className="form-control otp-input" required/>
                    <input type="text" data-value="" className="form-control otp-input" required/>
                    <input type="text" data-value="" className="form-control otp-input" required/>
                    <input type="text" data-value="" className="form-control otp-input" required/>
                </div>
            </div>
            {/* otp */}

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

