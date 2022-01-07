import React from 'react'
import { Card } from 'react-bootstrap'

const DayCard = () => {
    return (
        <div>
            <Card className="card">
                <Card.Body>
                    <Card.Title className='title'>Day</Card.Title> {/* Forecast Day */}
                    <Card.Img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" /> {/* Icon */}
                    <div className='temp'>
                        <Card.Text>30&#176;</Card.Text> {/* Temp Max */}
                        <Card.Text className='temp-min'>25&#176;</Card.Text> {/* Temp Min */}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DayCard
