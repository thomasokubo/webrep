import React, {Component} from 'react'

class DateSelector extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="date" name="takeoutDate"/>
                <button onClick={this.props.incrementCounter}>Add</button>
            </div>                
        );
    }
}

export default DateSelector;