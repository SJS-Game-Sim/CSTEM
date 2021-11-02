declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export class Hello extends React.Component {
    render() {

        //testing some memes
        const name = 'test name';
        const element = <h1>Hello,{name}</h1>;
        return (
            element
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));