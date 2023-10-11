import React from 'react'
import Card from './Card';
import image1 from "../420x300/cursos.jpg"
import image2 from "../420x300/docker.jpg"
import image3 from "../420x300/java1.jpg"

const cards = [
{
  id: 1,
  title: 'Fast React',
  image: image1,
  instructor: "Sadoc Aquim Luna Fuentes"
},
{
  id: 2, 
  title: 'Fast React2',
  image: image2,
  instructor: "Jose Alvaro Osorio Balvin"  
},
{
  id: 3,
  title: 'Fast React3',
  image: image3,
  instructor: "Nick Rivera Caminero"
}
]


export default function Cards() {
  console.log ()
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className='row'>
        {
          cards.map(c =>(
            <div className="col-md-4" key={cards.id}>
              <Card
              key = {c.id}
              id = {c.id}
              title = {c.title}
              image = {c.image}
              instructor = {c.instructor}
              />
            </div>
          ))
        }
      </div>
    </div>  
  )
  
}