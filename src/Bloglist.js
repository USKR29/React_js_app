import React from 'react'

function Bloglist({blog}) {

    const blogposts = blog;
  return (
    <div>{blogposts.map((post) =>
            <div key={post.id}>
              <h2 className=' text-2xl font-bold'>{post.title}</h2>
              <p>{post.content}</p>
              <p className=' text-sm text-gray-500'>By {post.author} on {post.date}</p>
               {/* <button className='bg-orange-300 rounded-lg p-2 cursor-pointer m-1' onClick={()=>(handleDelete(post.id))}>Delete</button> */}
              <hr className=' my-4' />
            </div>
          )}</div>
  )
}

export default Bloglist