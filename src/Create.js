
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {

    const navigate = useNavigate();
   const[title,setTitle]=useState('');
   const[content,setContent]=useState(''); 
   const[author,setAuthor]=useState('Select author'); 

   const handleclick=(e)=>{
    e.preventDefault();
    const blog ={title, content,author, date: new Date().toLocaleDateString()};
    fetch('http://localhost:8000/blogs',{
        method:'POST',
        headers:{"content-type": "application/json"},
        body: JSON.stringify(blog)
    }).then(()=>{
        console.log('Blog details updated')
        navigate('/'); // Redirect to home or another page after creation

    })
   };


  return (

    

    <div className='flex flex-col items-center justify-items-center p-4'>
        
        <div id='forms'>
        <form onSubmit={handleclick} className='flex flex-col gap-5 w-96 border-2 border-gray-300 rounded-md p-5 shadow-md'>
            <label htmlFor='title'>Title:</label>
            <input type='text'id='title' name='title' placeholder='Enter title' required
            value={title} onChange={(e)=>{setTitle(e.target.value)}}
            />
            <label htmlFor='content'>Content:</label>
            <textarea id='content' name='content' placeholder='Enter content description' required
            value={content} onChange={(e)=>{setContent(e.target.value)}}
            />
            <label htmlFor='author'>Author</label>
            <select id='author' name='author' required value={author} onChange={(e)=>{setAuthor(e.target.value)}}>
                <option value=''>Select author</option>
                <option >John Doe</option>
                <option >Jane Smith</option>
                <option >Amber</option>
                <option >Alice Johnson</option>
            </select>
            <button type='submit' className='bg-orange-400 w-fit rounded-md self-center p-2'>Add Blog</button>
        </form>
        </div>
    </div>
  )
}

export default Create