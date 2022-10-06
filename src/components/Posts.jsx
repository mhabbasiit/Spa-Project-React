import { useEffect, useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
function Posts() {

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false)
        setError(null)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  },[]) 

  return (
    <><div className="container mt-5">
      <Link to="/createpost" className="btn btn-dark mb-5">Creat Post</Link>
      <row className="row g-3">
        {error && <h3>{error}</h3>}
        {loading && <div className="spinner-border"></div>}
        
        {posts && posts.map(posts => (
          <>
            <div key={posts.id} className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <Link to={`${posts.id}`}>{posts.title}</Link>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{posts.body}</li>
                </ul>
              </div>

            </div></>
        ))}
      </row>
    </div></>
  );
}

export default Posts