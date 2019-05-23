import React, {PureComponent} from 'react';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import Funktion from "./Pages/Funktion";
import Datenschutz from "./Pages/Datenschutz";

class Content extends PureComponent<any, any> {

    constructor(props: any) {
        super(props);
    }

    public getPage(page) {
        switch(page) {
            case 'Home':
                return <Home />;
                break;
            case 'Login':
                return <Login />;
                break;
            case 'Funktion':
                return <Funktion />;
                break;
            case 'Datenschutz':
                return <Datenschutz />;
                break;
            default:
                return <PageNotFound page={page}/>;
                break;
        }
    }

    public render() {
        return (
            <div id={'content'}>
                {this.getPage(this.props.page)}
            </div>
        )
    }

}

export default Content;