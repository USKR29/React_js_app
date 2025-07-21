import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch';

function Blogdetail() {

   const{id} = useParams();
   const navigate = useNavigate()

   const{data, isloading, error} = useFetch(`http://localhost:8000/blogs/${id}`);

   const handleDelete =()=>{
    fetch(`http://localhost:8000/blogs/${data.id}`,{
      method:'DELETE',
    }).then(()=>{
      navigate('/'); // Redirect to home or another page after deletion
    })
   };


  return (
    <div>
        {isloading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {data && (
          <div className=' flex flex-col gap-5'>
            <h1 className=' text-2xl text-orange-600'>{data.title}</h1>
            <h2 className=' text-gray-500'>{data.content}</h2>
            <p className=' text-gray-500'>Written by {data.author}</p>
            <p className=' text-lg'>{data.body}</p>
          <button className=' bg-zinc-200 w-fit place-self-center p-2 rounded-md' onClick={handleDelete} >Delete</button>
          </div>
          
        )}
    </div>
  )
}

export default Blogdetail