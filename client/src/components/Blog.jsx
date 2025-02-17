import { Heart } from "react-bootstrap-icons";
import axios from "axios";


function Blog({ title, post, author, id, reRender }) {
    function deletePost(id) {
        axios.post("http://localhost:3000/del", { id: id });
    }
    return <>
        <div className="container border-primary my-4">
            <div className="row justify-content-center text-center">
                <div className="col-10 d-flex flex-column border border-secondary rounded p-4">
                    <div className="d-flex justify-content-between">
                        <h1 className="text-start">
                            {title} id = {id}
                        </h1>
                        <a><Heart /></a>
                    </div>
                    <p className="text-start border-top border-secondary py-5 border-bottom">
                        {post}
                    </p>
                    <div className="d-flex justify-content-between">
                        <p className="text-start mb-0">
                            Author - {author}
                        </p>
                        <div className="">
                            <button type="button" className="btn btn-primary align-self-end mx-2" onClick={() => { window.location.href = "/edit" }} >Edit</button>
                            <button type="button" className="btn btn-danger align-self-end mx-2" onClick={() => { deletePost(id); reRender(); }}>Delete</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>;
}

export default Blog;