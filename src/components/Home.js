import React from "react";
import logo from "../res/logo.svg";


class Home extends React.Component {


    handleSubmit = (form) => {
        form.preventDefault();
        this.props.history.push({
            pathname: "/overview",
            state: {
                name: form.target.name.value
            }
        })
    }

    render() {

        return <>
            <div className="container-fluid" id="home-screen">
                <div className="row h-100 justify-content-center align-items-center d-flex">
                    <div className="flex-column p-4 col-lg-4 col-sm-12 justify-content-center d-flex align-items-start" id="main">
                        <img src={logo} alt="logo" className="w-50 d-flex mx-auto h-50 mb-5" />
                        <h3 className="mb-4">Welcome to the <span className="font-weight-bold title">Emotional Touch</span><br /> demo.</h3>
                        <h4 className="mb-4">What is your name?</h4>
                        <form className="w-100" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" autoComplete="off" className="form-control" id="name" placeholder="Niels" />
                            </div>
                            <button type="submit" className="btn btn-primary d-flex ml-auto">Continue
                            <span className="ml-2 material-icons">arrow_right_alt</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    }

}
export default Home;