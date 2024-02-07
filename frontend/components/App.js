import React, {useState, useEffect} from 'react'
import axios from 'axios'

const key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${key}`

function Card({ title, text }) {
  return (
    <div className = 'card'>
    <h2>{title}</h2>
    <p>{text}</p>
    <figure>
      <img src={imageURL} />
      <figcaption>Awesome pic taken on {date}</figcaption> 
    </figure> 
  </div>
  )
} 

function App() {
  const [apod, setApod] = useState()
  
  
  useEffect(() => {
 function fetchPhoto() {
  axios.get(URL)
  .then(res => {console.log(res.data)
  setApod(res.data)})
  .catch(err => {
    console.log(err.message)
  })
 }
 fetchPhoto() 
  }, [])


  if (!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
      <Card
      title={apod.title}
      text={apod.explanation}
      imageURL={apod.url}
      date={apod.date}
      />
    </section>
  )
}

export default App
