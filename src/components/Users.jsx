import { useEffect, useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
function Users() {

  const [users, setUers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUers(data);
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
      <row className="row g-3">
        {error && <h3>{error}</h3>}
        {loading && <div className="spinner-border"></div>}
        {users && users.map(user => (
          <>
            <div key={user.id} className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <Link to={`${user.id}`}>{user.name}</Link>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{user.username}</li>
                  <li className="list-group-item">{user.email}</li>
                  <li className="list-group-item">{user.phone}</li>
                </ul>
              </div>

            </div></>
        ))}
      </row>
    </div></>
  );
}

export default Users