import React,{createRef} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction'
import '../Event/Events.css';
//import googleCalendarPlugin from '@fullcalendar/google-calendar';
//import './App.css';

// import resources from './fixtures/employee.json'
// import event from './fixtures/event.json'

export default class DemoApp extends React.Component {
  render() {
    const calendarRef = createRef()
    function renderEventContent(eventInfo) {
      return(
        <div>
        <p>{eventInfo.event.title}</p>
        <img className="eventimage" src={eventInfo.event.url} alt={''}/>
        </div>
      )}
    return (
      <div className="main-container" >
      <FullCalendar className="Box"
      ref={calendarRef}
      schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
        plugins={[ dayGridPlugin,timeGridPlugin,resourceTimelinePlugin,interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={this.handleDateClick} select={this.handleSelectClick} selectable='true'
        events="https://fullcalendar.io/demo-events.json?single-day&with-nesting&for-resource-timeline"
        resources = "https://fullcalendar.io/demo-resources.json?with-nesting&with-colors"
        // event={event}
        // resources={resources}
        eventContent={renderEventContent}
        events={[ 
          {title:'Meeting',date:'2022-04-05',backgroundColor:"red",url:"https://unsplash.com/photos/XZkk5xT8Xrk"},
          {title:'event 2',date:'2022-04-08',backgroundColor:"green",url:""},
          {title:'event 121212',date:'2022-04-10',backgroundColor:"yellow",url:""},
          {title:'event 3',date:'2022-04-15',backgroundColor:"orange"},
          {title:'event 4',date:'2022-04-18',backgroundColor:"blue"},
          {title:'event 5',date:'2022-04-20',backgroundColor:"purple"},
          
        ]}
        customButtons={{
          myCustomButton: {
            text: 'AddEvents!',
            click: function() {
               prompt("Please enter a new title for your event");
               prompt("Please enter a new Date for your event");
              alert(' Your Event is Here!');
            }
          },
          myTimeDayBtn: {
            text: "timeDay",
            click() {
             const calendar = calendarRef.current;

             if (calendar){
               const calendarApi = calendar.getApi();

               calendarApi.changeView("timeGridDay");
             }
            },
          },
          myTimeWeekBtn: {
            text: "timeWeek",
            click() {
             const calendar = calendarRef.current;

             if (calendar){
               const calendarApi = calendar.getApi();

               calendarApi.changeView("timeGridWeek");
             }
            },
          }, 
          myTimelineDayBtn: {
            text: "timelineDay",
            click() {
             const calendar = calendarRef.current;

             if (calendar){
               const calendarApi = calendar.getApi();

               calendarApi.changeView("resourceTimelineDay");
             }
            },
          },
          myTimelineWeekBtn: {
            text: "timelineWeek",
            click() {
             const calendar = calendarRef.current;

             if (calendar){
               const calendarApi = calendar.getApi();

               calendarApi.changeView("resourceTimelineWeek");
             }
            },
          },
          myAddEventBtn: {
            text: "addEventbtn",
            click() {
            //  const calendar = calendarRef.current;

            //  if (calendar){
            //    const calendarApi = calendar.getApi();

            //    calendarApi.changeView("interactionevent");
            //  }
            
            },
          },
          
        }}
        headerToolbar={{
          left: "prev,next, myCustomButton",
          center: "title",
          right:"today,dayGridDay,dayGridWeek,dayGridMonth,myTimeDayBtn,myTimeWeekBtn,myTimelineDayBtn,myTimelineWeekBtn"
        }}
      />
      </div>
    )
  }
}