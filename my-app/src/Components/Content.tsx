import * as React from 'react';

class Content extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            altText: props.altText,
            isAlt: false,
            offLeft: 0,
            select: '',
            text: props.text,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    public handleClick(e) {
        const move = e.target.id === 'left' ? -10 : 10;
        this.setState((prevState: any)  => ({
            isAlt: !prevState.isAlt,
            offLeft: prevState.offLeft + move,
        }));
        document.getElementById('switchText')!.style.transform = 'translateX(' + (this.state.offLeft+move) + '%)';
    }

    public handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    public render() {
        return (
            <div>
                <p id='switchText'>
                    <span id='left' onClick={this.handleClick}>{'<'}</span>
                    {this.state.select}{this.state.isAlt ? this.state.altText : this.state.text}{this.state.select}
                    <span id='right' onClick={this.handleClick}>{'>'}</span>
                </p>
                <input
                    type="Texts"
                    aria-label={'Text'}
                    aria-required="true"
                    name='text'
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder='Text'
                />
                <input
                    name='altText'
                    value={this.state.altText}
                    onChange={this.handleChange}
                    placeholder='AltText'
                />
                <select
                    name='select'
                    value={this.state.select}
                    onChange={this.handleChange}
                >
                    <option value=''>-</option>
                    <option value='One'>1</option>
                    <option value='Two'>2</option>
                    <option value='Three'>3</option>
                </select>
            </div>
        )
    }

}

export default Content