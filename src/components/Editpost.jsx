import React from 'react'
import {useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import EditForm from './EditForm';

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
        <h2>Edit Post</h2>
        {error && <h3>{error}</h3>}
        {loading && <div className="spinner-border"></div>}
        {post && <EditForm post={post}/>
        
        }
      </row>
    </div></>
  )
}

export default Postsid