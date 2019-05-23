import React, {PureComponent} from 'react';

class Funktion extends PureComponent<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            input: '',
            encodedString: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    public handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    public handleClick() {
        this.setState({
            encodedString: this.getEncodedString(this.state.input)
        })
    }

    public getEncodedString(input) {
        let returnString = '';
        for(const letter of input) {
            let charValue = 0;
            let charValueOffset = 0;
            if(letter === letter.toUpperCase()) {
                charValueOffset = 65;
                charValue = letter.charCodeAt(0)-charValueOffset;
            } else {
                charValueOffset = 97;
                charValue = letter.charCodeAt(0)-charValueOffset;
            }
            const charFinalValue = (charValue+1)%26+charValueOffset;
            returnString += String.fromCharCode(charFinalValue);
        }
        return returnString;
    }

    public render() {
        return (
            <div id={'funktion'} className={'page'}>
                <input
                    name={'input'}
                    type={'text'}
                    value={this.state.input}
                    onChange={this.handleChange}
                    placeholder={'InputString'}
                /><br/>
                <input
                    name={'Verschlüsseln'}
                    type={'submit'}
                    onClick={this.handleClick}
                /><br/>
                {this.state.encodedString}
            </div>
        )
    }

}

export default Funktion;