import React from "react";

class Summary extends React.Component {
    render() {
        return <>
            <div className="container-fluid" id="summary">
                <div className="row h-100 p-1 justify-content-center d-flex">
                    <div className="flex-column p-4 col-lg-4 col-sm-12">
                        <div className="row mb-5">
                            <div className="col-12 justify-content-between d-flex">
                                <h4 className="font-weight-bold">Your conversation summary</h4>
                                <span className="material-icons">close</span>
                            </div>
                        </div>
                        <div className="row mb-5 justify-content-around d-flex align-items-center">
                            <div className="flex-column p-3 light col-5 justify-content-center align-items-center d-flex">
                                <h5 className="mb-3">Duration</h5>
                                <h3>8:26</h3>
                            </div>
                            <div className="flex-column p-3 dark d-flex justify-content-center align-items-center col-5">
                                <h5 className="mb-3">Top Emotion</h5>
                                <h3>Neutral</h3>
                            </div>
                        </div>
                        <div className="row mb-5 feedback justify-content-center align-items-center">
                            <div className="col-12 p-0">
                                <h5 className="text-capitalize">Feedback received</h5>
                                <div className="d-flex p-3 justify-content-between recommendations align-items-center">
                                    <p className="mr-2">To increase their engagement, try giving more details.</p>
                                    <span className="material-icons">favorite</span>
                                </div>
                                <div className="d-flex p-3 justify-content-between recommendations align-items-center">
                                    <p className="mr-2">The conversation is going well.</p>
                                    <span className="material-icons-outlined">favorite</span>
                                </div>
                                <div className="d-flex p-3 justify-content-between recommendations align-items-center">
                                    <p className="mr-2">Maintain eye-contact to show interest.</p>
                                    <span className="material-icons-outlined">favorite</span>
                                </div>
                                <div className="d-flex p-3 justify-content-between recommendations align-items-center">
                                    <p className="mr-2">Your partner has showed mild
                                    discomfort. Try changing the subject.</p>
                                    <span className="material-icons-outlined">favorite</span>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center align-items-center d-flex">
                            <div className="col-12 p-0 d-flex justify-content-center">
                                <div className="btn w-100 text-capitalize">
                                    Export Summary
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>;
    }
}
export default Summary;