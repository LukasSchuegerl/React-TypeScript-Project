import * as React from 'react';
import './App.css';
import Content from './Components/Content';

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            userList: []
        }
    }

    public componentDidMount(): void {
        // TODO: Code here
        fetch('./newData.json')
            .then(response => console.log(response))
            .then(result => {
                this.setState({
                    userList: result
                })
            })
            .catch(error => console.log(error))
    }

    public render() {
        return (
            <div>
                <h1>Hello TypeScript!</h1>
                <Content text='Text from Prop' altText='Different Text'/>
            </div>
    );
  }
}

export default App;