import React, {PureComponent} from 'react';

class Home extends PureComponent<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div id={'home'} className={'page'}>
                <div className={'positionContainer'}>
                    <h1 className={'pageHeader'}>Lukas Schügerl</h1>
                    <div id={'positionContainerHomeContent'}>
                        <div className={'pageContent'}>
                            <h1>Lorem Ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className={'sidebar'}>
                            <ul>
                                <li><h3>Thema 1</h3></li>
                                <ul>
                                    <li>Unterpunkt 1.1</li>
                                    <li>Unterpunkt 1.2</li>
                                    <li>Unterpunkt 1.3</li>
                                </ul>
                                <li><h3>Thema 2</h3></li>
                                <ul>
                                    <li>Unterpunkt 2.1</li>
                                    <li>Unterpunkt 2.2</li>
                                    <li>Unterpunkt 2.3</li>
                                </ul>
                                <li><h3>Thema 3</h3></li>
                                <ul>
                                    <li>Unterpunkt 3.1</li>
                                    <li>Unterpunkt 3.2</li>
                                    <li>Unterpunkt 3.3</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;