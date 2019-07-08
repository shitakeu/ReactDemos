import React from 'react'
import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from './events'

import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment)

export default class BigCalendar extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
          <div className="App">
              <Calendar
                  className="Calendar"
                  events={events}
                  step={15}
                  timeslots={8}
                  localizer={localizer}
                  defaultView={Views.WEEK}
                  defaultDate={new Date(2018, 6, 1)}
              />
          </div>
        );
    }
}