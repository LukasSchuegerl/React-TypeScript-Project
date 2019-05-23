import React, {PureComponent} from 'react';
import AkkordeonSectionContent from "./AkkordeonSectionContent";

class AkkordeonSection extends PureComponent<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    public handleClick() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    public render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>
                    {this.props.title}
                </h1>
                {this.state.isOpen ? <AkkordeonSectionContent content={this.props.content} />: ''}
            </div>
        )
    }
}

export default AkkordeonSection;