import React, {PureComponent} from 'react';

class Event extends PureComponent<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {

        };
    }

    public render() {
        return (
            <div id={'event'}>
                Event
            </div>
        )
    }

}

export default Event;