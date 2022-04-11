import React from 'react';
import SseApp3d from "./3d/SseApp3d";

class SseEditorApp extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <SseApp3d imageId={1}/>
            </div>);
    }
}

export default SseEditorApp;
