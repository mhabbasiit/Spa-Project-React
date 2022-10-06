import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Delete({ post }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function handelDelete() {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${post}`, {
            method: 'DELETE'
        })
            .then((res) => {
                setLoading(false)
                setError(null)
                Swal.fire({
                    title: "Thanks!",
                    text: `Post ${post} deleted successfully`,
                    icon: "warning",
                    confirmButtonText: "Ok",
                });
    }).catch (err => {
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
return (
    <>
        <button onClick={handelDelete} className='btn btn-danger'>Delete
            {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
        </button>
        {error && <div className="form-text text-danger">{error}</div>}
    </>
)
}

export default Delete