import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Delete from './Delete';

function Postsid() {
  let { id } = useParams();
  const [post, setUer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setUer(data);
        setLoading(false)
        setError(null)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [post])

  return (
    <><div className="container mt-5">
      <row className="row g-3">
        {error && <h3>{error}</h3>}
        {loading && <div className="spinner-border"></div>}
        {post &&
          <>
            <div key={post.id} className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4 >{post.title}</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{post.body}</li>
                </ul>
                <div className="card-footer">
                  <Link to={`/posts/edit/${id}`} className='btn btn-dark me-2'>Edit</Link>
                  <Delete post={post.id}/>

                </div>
              </div>


            </div>
          </>
        }
      </row>
    </div></>
  )
}

export default Postsid