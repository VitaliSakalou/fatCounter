import React from 'react';

function logProps(Component){
    return class extends React.Component {
        componentWillReceiveProps(newProps){
            console.log('newProps', newProps);
            console.log('oldProps', this.props);
        }
        render (){
            return <Component {... this.props}/>;
        }
    }
}

export default logProps;