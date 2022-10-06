import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div class="container p-5">
  <div class="row">
    <div class="col-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur maxime quae incidunt ut perspiciatis, veniam labore aliquam enim est nulla quam doloremque, voluptatibus sint? Assumenda obcaecati quia praesentium maxime.
      <Link className='btn btn-dark' to="users" >Users</Link>
      <Link className='btn btn-light ms-3' to="/posts" >Posts</Link>
    </div>
    
  </div>
</div>
  )
}

export default Home