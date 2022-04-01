import React from 'react';
import SseApp3d from "./3d/SseApp3d.jsx";

class SseEditorApp extends React.Component {
    constructor() {
        super();
        this.state = {
            mode: null,
        }
    }

    render() {
        return null;
    }

    componentDidMount() {
        this.setState({
            mode: this.props.match.params.name.endsWith(".pcd") ? "3d" : "2d"
        })
    }
}


export default SseEditorApp;



// export default withTracker((props) => {
//     $("#waiting").removeClass("display-none");

//     const imageId = "/" + props.match.params.id;
//     // let subName = "sse-data-descriptor";
//     // const subscription = Meteor.subscribe(subName, imageUrl);

//     // // get imageUrl from Api then load

//     // const subReady = subscription.ready();
//     // const mode = props.match.params.path.endsWith(".pcd") ? "3d" : "2d";
//     // return {imageUrl, subReady, mode};
// })(SseEditorApp);
