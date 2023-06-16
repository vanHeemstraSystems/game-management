import React from 'react';
import ReactDOM from 'react-dom';
import * as joint from 'jointjs';
import { connect } from 'react-redux';

class Graph extends React.Component {

    constructor(props) {
        super(props);
        this.graph = new joint.dia.Graph();
        this.setState = {
            lastPosition: 0
        };
    }

    componentDidMount() {
        this.paper = new joint.dia.Paper({
            el: ReactDOM.findDOMNode(this.refs.placeholder),
            width: 1500,
            height: 700,
            model: this.graph
        });
    }

    addNode(title, position) {
        debugger
        var a1 = new joint.shapes.devs.Atomic({
            position: { x: 360, y: 360 },
            inPorts: [''],
            outPorts: ['']
        });
        console.log("Adding Node: ", a1); // FOR TESTING ONLY
        this.graph.addCells([a1]);
    }

    render() {
        if (this.props.newNodes[0] != null) {
            this.addNode(this.props.newNodes[0]);
        }

        return (
            <div id="playground" ref="placeholder">
            </div>);
    }
}

function mapStateToProps(state) {
    if (state.newNodes.length === undefined)
        return {newNodes : []};
    else
        return { newNodes : [state.newNodes] };
}

export default connect(mapStateToProps)(Graph);
