import React, {PureComponent} from 'react';
import Home from "./Pages/Home";
import Event from "./Pages/Event";
import PageNotFound from "./Pages/PageNotFound";

class Content extends PureComponent<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        let page;
        switch(this.props.page) {
            case 'Home':
                page = <Home />;
                break;
            case 'Event':
                page = <Event />;
                break;
            default:
                page = <PageNotFound page={this.props.page}/>;
                break;
        }
        return (
            <div id={'content'}>
                {page}
            </div>
        )
    }

}

export default Content;