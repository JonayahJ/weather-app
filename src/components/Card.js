import React from 'react'
import { Card } from 'react-bootstrap'

const DayCard = () => {
    return (
        <div>
            <Card className="card" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Day</Card.Title> {/* Forecast Day */}
                {/* CardImg */}
                <div className='temp'>
                    <Card.Text>30&#176;</Card.Text> {/* Temp Max */}
                    <Card.Text>25&#176;</Card.Text> {/* Temp Min */}
                </div>
            </Card.Body>
            </Card>
        </div>
    )
}

export default DayCard
