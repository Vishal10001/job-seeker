import LoginTab from "./form/login/LoginTab";

const ConfirmModal = () => {
    return (
        <div className="modal fade" id="confirmModal">
            <div className="modal-dialog modal-lg modal-dialog- login-modal ">
                <div className="modal-content">
                    {/*<button*/}
                    {/*    type="button"*/}
                    {/*    className="closed-modal"*/}
                    {/*    data-bs-dismiss="modal"*/}
                    {/*></button>*/}
                    {/* End close modal btn */}

                    <div className="modal-body">
                        {/* <!-- Login modal --> */}
                        <div id="login-modal">
                            {/* <!-- Login Form --> */}
                            <div className="login-form default-form d-flex flex-column gap-2">
                                Do you want to Delete this value?
                                <div className='gap-1 d-inline-flex align-items-center justify-content-end'>
                                    <button
                                        data-bs-dismiss="modal"
                                        className='w-fit-content bg-lighter-blue color-lighter-blue border-radius-6 d-inline-flex align-items-center py-1 px-2 text-center'>
                                        Confirm
                                    </button>
                                    <button
                                        data-bs-dismiss="modal"
                                        className='w-fit-content ui-danger-with-bg border-radius-6 d-inline-flex align-items-center py-1 px-2 text-center'>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                            {/* <!--End Login Form --> */}
                        </div>
                        {/* <!-- End Login Module --> */}
                    </div>
                    {/* En modal-body */}
                </div>
                {/* End modal-content */}
            </div>
        </div>
    )
};
export default ConfirmModal;
