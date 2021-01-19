import React from "react";

class Overview extends React.Component {

    render() {
        console.log(this.props.location.state.name)
        return <><h1>Bonjour</h1> </>;
    }

}
export default Overview;