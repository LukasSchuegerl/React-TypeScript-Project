import React, {PureComponent} from 'react';

class PageNotFound extends PureComponent<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div id={'pageNotFound'} className={'page'}>
                <div className={'positionContainer'}>
                    <h1 className={'errorHeader'}>Sorry, something went wrong!</h1>
                    <p className={'error'}>Error 404 Page not Found</p>
                    <p className={'errorMsg'}>Couldn't find Page "{this.props.page}"</p>
                </div>
            </div>
        )
    }

}

export default PageNotFound;