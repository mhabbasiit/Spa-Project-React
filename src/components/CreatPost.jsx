import React, { useState } from 'react'
import Swal from "sweetalert2";  

function CreatPost() {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function handlesubmit(e) {
        e.preventDefault();
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setLoading(false)
                setError(null)
                Swal.fire(
                    'Good job!',
                    'Your post has been sent successfully',
                    'success'
                  )
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
                setLoading(false)
            });

    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h3>Creat a new Post:</h3>
                    <form onSubmit={(e) => handlesubmit(e)}>
                        <div className="mb-3">
                            <label className="form-label">title</label>
                            <input type="title" onChange={(event) => setTitle(event.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="title" />
                            <div className="form-text text-danger">
                                {title ? '' : "Title is Required"}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">body</label>
                            <textarea onChange={(event) => setBody(event.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="body"></textarea>
                            <div className="form-text text-danger">
                                {body ? '' : "Body is Required"}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-dark" disabled={title === '' || body === ''}>Create
                            {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
                        </button>
                        {error && <div className="form-text text-danger">{error}</div>}

                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreatPost