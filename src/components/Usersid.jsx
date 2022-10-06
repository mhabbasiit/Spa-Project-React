import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

function Usersid() {
  let {id} = useParams();
  const [user, setUer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
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
  },[user]) 

  return (
    <><div className="container mt-5">
    <row className="row g-3">
      {error && <h3>{error}</h3>}
      {loading && <div className="spinner-border"></div>}
      {user && 
        <>
          <div key={user.id} className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h4 >{user.name}</h4>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{user.username}</li>
                <li className="list-group-item">{user.email}</li>
                <li className="list-group-item">{user.phone}</li>
                <li className="list-group-item">{user.website}</li>
              </ul>
            </div>

          </div>
        </>
      }
    </row>
  </div></>
  )
}

export default Usersid