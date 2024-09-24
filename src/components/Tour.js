import React from 'react';
import Card from './Card';


const Tour = ({tours,removeTour}) => {
  return (
    <div className="container">
        <div className="title">
            <h2>Trip with Om Verma</h2>
        </div>
        <div className="cards">
            {
                tours.map((tour) =>{
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                })
            }
        </div>
    </div>
  )
}

export default Tour