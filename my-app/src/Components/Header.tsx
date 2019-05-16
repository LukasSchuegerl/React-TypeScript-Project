import React, {PureComponent} from 'react';
import {links} from "../links";

class Header extends PureComponent<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            links: []
        }
    }

    public render() {
        return (
            <nav>
                <h1>
                    <span className={'preTitle'}>{this.props.preTitle}</span>
                    <span className={'title'}>{this.props.title}</span>
                </h1>
                <ul>
                    {links.map((link) =>
                        <li
                            key={link.id}
                            onClick={this.props.handleClick}
                            id={link.link}
                        >{link.link}</li>
                    )}
                </ul>
            </nav>
        )
    }

}

export default Header