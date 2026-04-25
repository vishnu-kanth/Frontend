import React, { useEffect, useState } from 'react'

const FetchData = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await res.json()
        setData(result)
      } catch (error) {
        console.log('error:', error)
      }
    }

    getData()
  }, [])

  return (
    <div>
      <h3>Posts:</h3>
      {data.slice(0, 5).map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  )
}

export default FetchData