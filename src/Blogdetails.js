import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';

function Blogdetails() {

    const {id} = useParams();

 const {data, isloading, error} = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div>
        {error && <div> {error.message}</div>}
        {isloading && <div>Loading...</div>}
        {data && <div key={data.id} className=' bg-white p-5 rounded-lg shadow-md w-2/4 hover:shadow-lg mb-2 gap-5 '>
        
        <h1 className=' text-3xl text-orange-400 pb-4'>{data.title}</h1>
        <p>{data.content}</p>
        <p className=' text-sm text-gray-500'>By {data.author} on {data.date}</p>
        </div>}
    </div>
  )
}

export default Blogdetails