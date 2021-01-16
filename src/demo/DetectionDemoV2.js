import React from "react";
import * as faceapi from 'face-api.js';
import * as feedbackFile from '../res/feedback.json';


class DetectionDemoV2 extends React.Component {

    state = {
        modelLoaded: false,
        emotion: '',
        liveFeedback: '',
        recentFeedback: '',
    }

    componentDidMount() {
        this.run();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.liveFeedback !== this.state.liveFeedback) {
            this.setState({
                recentFeedback: prevState.liveFeedback
            })
        }
    }


    run = async () => {
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
            faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
            faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
            faceapi.nets.faceExpressionNet.loadFromUri("/models"),
        ]).then(this.setState({
            modelLoaded: true
        }))

        const constraints = {
            audio: false,
            video: {
                facingMode: {
                    exact: 'environment'
                }
            }
        }

        const videoEl = document.getElementById("inputVideo");
        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) =>
                videoEl.srcObject = stream
            )
            .catch((err) =>
                console.log(err)
            );


        this.onPlay(videoEl)
    }

    onPlay = async (video) => {
        await video.play()
        const detection = await faceapi.detectSingleFace(video,
            new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks().withFaceExpressions()

        if (detection !== undefined) {
            const emotion = detection.expressions.asSortedArray()[0].expression
            const feedback = feedbackFile["default"][0][emotion]
            const liveFeedback = feedback[Math.floor(Math.random() * feedback.length)]


            if (this.state.emotion !== emotion) {
                this.setState({
                    emotion: emotion,
                    liveFeedback: liveFeedback
                })
            }
        }

        if (video.paused || video.ended || !this.state.modelLoaded) {
            return false
        }


        setTimeout(() => this.onPlay(video), 10)
    }


    render() {

        return <>
            <div className="container-fluid">
                <div className="row justify-content-center h-100 align-items center">
                    <div className="col-lg-4 col-sm-12 p-0">
                        <div className="embed-responsive video-container">
                            <div className="row top-bar w-100 px-3 py-2 mx-auto justify-content-between align-items-center">
                                <span className="material-icons-outlined">
                                    settings
                                </span>
                                <h4 className="heading my-auto text-capitalize">Conversation In Progress</h4>
                                <span className="material-icons">close</span>
                            </div>
                            <div className="emotion-indicator justify-content-center row w-100 mt-5 mx-auto">
                                {this.state.emotion !== '' ? <h4 className="emotion text-capitalize">{this.state.emotion}</h4> : ''}
                            </div>
                            <div className="live-feedback justify-content-center row w-100 mt-5 mx-auto">
                                {this.state.liveFeedback !== '' ? <h4 className="live-feedback-text w-75 p-3">{this.state.liveFeedback}</h4> : ''}
                            </div>
                            <div className="row bottom-bar w-100 px-3 py-2 mx-auto align-items-center">
                                <div className="d-flex flex-column">
                                    <h5 className="text-capitalize subheading">Latest Feedback</h5>
                                    {this.state.recentFeedback !== '' ? <span>{this.state.recentFeedback}</span> : ''}
                                </div>
                            </div>
                            <video className="embed-responsive-item" id="inputVideo" onPlay={() => this.onPlay} muted />
                        </div>
                    </div>
                </div>
            </div>

        </>
    }

}
export default DetectionDemoV2;