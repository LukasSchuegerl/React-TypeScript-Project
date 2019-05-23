import React, {PureComponent} from 'react';
import Akkordeon from "../Widgets/Akkordeon/Akkordeon";

class Datenschutz extends PureComponent<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            res: []
        }
    }

    public componentDidMount(): void {
        const contentful = require('contentful');
        // TODO: Fetch Data from contentful API
        const client = contentful.createClient({
            space: 't9ottk464jcb',
            environment: 'master',
            accessToken: 'TBaH5SqAJzQMKrhYLoOMUUeR_RVUOHI2RS2TR55InEU'
        });

        client.getEntries()
            .then((response) => {
                this.setState({
                   res: response.items[1].fields.datenschutz.content
                });
            })
            .catch(error => console.error(error))
    }

    public render() {
        return (
            <div id={'datenschutz'} className={'page'} >
                <Akkordeon content={this.state.res} />
            </div>
        )
    }

}

export default Datenschutz;