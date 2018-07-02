import React from 'react'

import Calendar from './calendar/Calendar'

export default class DatePicker extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showCalendar: false
        }
        this.showCalendar = this.showCalendar.bind(this)
    }
    render(){
        if (this.state.showCalendar){return <Calendar />}
        return(
        <div>
            <input type="text" value="" placeholder="dd/mm/yyyy" />
            <button onClick={this.showCalendar}>Click Me</button>
        </div>
        );
    }
    showCalendar() {
        console.log('calendar')
        this.setState({
            showCalendar: true
        })
      }
}