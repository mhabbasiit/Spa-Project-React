import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

function EditForm({post}) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function handlesubmit(e) {
        e.preventDefault();
        setLoading(true);
        fetch(`https://jsonplaceholddsder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                body,
                userId: 1,
                id: post.id
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setError(null)
                Swal.fire({
                    title: "Thanks!",
                    text: "Post edited successfully",
                    icon: "warning",
                    confirmButtonText: "Ok",
                });
            }).catch(err => {
                setLoading(false)
                setError(err.message)
                Swal.fire({
                    title: "Error!",
                    text: err.message,
                    icon: "warning",
                    confirmButtonText: "Ok",
                });
            });
    }
    
    useEffect(() => {
        setTitle(post.title)
        setBody(post.body)
    }, [])
  return (
    <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h3>Creat a new Post:</h3>
                    <form onSubmit={(e) => handlesubmit(e)}>
                        <div className="mb-3">
                            <label className="form-label">title</label>
                            <input type="title" onChange={(event) => setTitle(event.target.value)} value={title} className="form-control" id="exampleFormControlInput1" placeholder="title" />
                            <div className="form-text text-danger">
                                {title ? '' : "Title is Required"}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">body</label>
                            <textarea onChange={(event) => setBody(event.target.value)} value={body} className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="body"></textarea>
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

export default EditForm