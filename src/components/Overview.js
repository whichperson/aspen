import React from "react";
import Chart from "chart.js";

class Overview extends React.Component {

    state = {
        name: this.props.location.state.name
    }

    componentDidMount() {
        this.renderGraph();
    }

    renderGraph = () => {
        let ctx = document.getElementById("chart").getContext("2d");
        let graph = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["M", "T", "W", "T", "F", "S", "S"],
                datasets: [{
                    backgroundColor: '#96b0ff',
                    data: [6, 5, 7, 4, 6, 3, 8, 0],
                    borderWidth: 0,
                    barPercentage: 0.4,
                }],

            },
            options: {
                cornerRadius: 20,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontColor: '#96b0ff',
                        }

                    }],
                    yAxes: [{
                        beginAtZero: true,
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    }]
                }
            }
        })
        return graph;
    }

    render() {
        return <>
            <div className="container-fluid" id="overview">
                <div className="row h-100 p-1 justify-content-center d-flex">
                    <div className="flex-column p-4 col-lg-2 col-sm-12">
                        <div className="row mb-4">
                            <div className="col-12">
                                <h3 className="font-weight-bold text-capitalize">Hi, {this.state.name}!</h3>
                                <h4 className="w-50">Take a look at your overview.</h4>
                            </div>
                        </div>
                        <div className="row mb-4 py-3 justify-content-center align-items-center" id="main-stats">
                            <div className="col-5">
                                <h5 className="text-capitalize mb-3">Total Conversations</h5>
                                <h3>24</h3>
                            </div>
                            <div className="col-7 justify-content-end d-flex">
                                <div className="text-capitalize btn btn-secondary p-2">View Feedback</div>
                            </div>
                        </div>
                        <div className="row py-3 justify-content-center align-items-center" id="graph">
                            <div className="col-12 mb-4">
                                <h5 className="text-capitalize">Conversation Duration</h5>
                                <p><span className="font-weight-bold">8</span> conversations last week</p>
                            </div>
                            <div className="col-12">
                                <canvas id="chart"></canvas>
                            </div>
                        </div>

                        <div className="navbar p-0 fixed-bottom">
                            <div className="col-sm-12 mx-auto start justify-content-center align-items-center d-flex">
                                <a href="/calibration"><span className="material-icons">add</span></a>
                            </div>
                            <div className="col-sm-12 mx-auto navigation col-lg-2 px-4 py-3 d-flex align-items-center justify-content-between">
                                <span className="material-icons-outlined">
                                    home
                            </span>
                                <span className="material-icons-outlined">
                                    settings
                            </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>;
    }

}
export default Overview;