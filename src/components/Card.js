import React from 'react'
import { Card } from 'react-bootstrap'
import Moment from 'react-moment'

const DayCard = ({ day, icon, max, min }) => {
    return (
        <div>
            <Card className="card">
                <Card.Body>
                    <Card.Title className='title'> {/* Forecast Day */}
                        <Moment parse="YYYY-MM-DD, hh:mm:ss" format='ddd'> {/* Parse date, format date to 'ddd' (ex: Tue) */}
                            {day}
                        </Moment>    
                    </Card.Title> 
                    
                    {/* EXAMPLE ICON: http://openweathermap.org/img/wn/10d@2x.png */}
                    <Card.Img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" /> {/* Icon */}
                    
                    <div className='temp'>
                        <Card.Text>{Math.round(max)}&#176;</Card.Text> {/* Temp Max */}
                        <Card.Text className='temp-min'>{Math.round(min)}&#176;</Card.Text> {/* Temp Min */}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DayCard
