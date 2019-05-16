import * as React from 'react';
import './App.css';
import Header from "./Components/Header";
import Content from "./Components/Content";

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            page: 'Home'
        };
        this.bindHandlers();
    }

    public bindHandlers() {
        this.handleHeaderClick = this.handleHeaderClick.bind(this);
    }

    public handleHeaderClick(e) {
        this.setState({
            page: e.target.id
        })
    }

    public render() {
        return (
            <div>
                <Header preTitle='my' title='Website' handleClick={this.handleHeaderClick}/>
                <Content page={this.state.page}/>
            </div>
    );
  }
}

export default App;