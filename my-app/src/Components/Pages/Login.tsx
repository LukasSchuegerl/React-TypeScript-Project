import React, {PureComponent} from 'react';
// import Home from "./Home";

class Login extends PureComponent<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            user: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    public handleSubmit() {
        localStorage.setItem('SessionUserName', this.state.name);
        console.log(localStorage.getItem('SessionUserName'))
    }

    public render() {
        return (
            <div id={'login'} className={'page'}>
                <div className={'positionContainer'}>
                    <h1 className={'pageHeader'}>Login</h1>
                    <div className={'positionContainerContent'}>
                        <div className={'pageContent'}>
                            <input
                                name={'user'}
                                type={'text'}
                                value={this.state.user}
                                onChange={this.handleChange}
                                placeholder={'Username'}
                            />
                            <input
                                name={'password'}
                                type={'password'}
                                value={this.state.password}
                                onChange={this.handleChange}
                                placeholder={'Password'}
                            />
                            <input
                                name={'submit'}
                                type={'submit'}
                                onSubmit={this.handleSubmit}
                            />
                            {this.state.user + " " + this.state.password}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login;