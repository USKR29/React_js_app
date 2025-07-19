import Bloglist from './Bloglist'
import useFetch from './useFetch';

export default function Home() {

//  const [blogposts, setBlogposts]=useState(null);
//  const [isloading,setIsloading]=useState(true);
//  const [error, setError]=useState(null);

 const {data: blogposts, isloading, error} = useFetch('http://localhost:8000/blogs');


  // const handleDelete = (id) =>{
  //   const newData = (blogposts.filter((post) => post.id !== id));
  //   setBlogposts(newData);
  // };

  
  return (
    <div>
        <div><h1 className=' text-amber-600 text-3xl bold pt-5 pb-5'>Welcome the the page</h1></div>

        <div className=' flex flex-col gap-5'>
          {error && <div>{error}</div>}
          {isloading && <div>Loading...</div>}
          {/* {blogposts &&  <Bloglist blog={blogposts} handleDelete = {handleDelete}/>} */}
          {blogposts &&  <Bloglist blog={blogposts} />}
          {/* <p className=' text-2xl text-orange-600'>The Blog by Author 4</p>
          <Bloglist blog={blogposts.filter((blog)=>(blog.author === 'Author 4'))}/> */}
        </div>
    </div>
  )
}
