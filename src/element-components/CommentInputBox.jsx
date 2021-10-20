import { useState } from "react";
import { uploadComments } from "../utils/api";

function CommentInputBox({ review_id, currentUser }) {
  const [commentInput, setCommentInput] = useState("");

  const handleSubmit = (e) => {
    setCommentInput("");
    e.preventDefault();
    uploadComments(commentInput, currentUser, review_id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Please leave a comment below</p>
        <label htmlFor="comment_input_box"></label>
        <input
          placeholder="comment..."
          required
          onChange={(e) => {
            setCommentInput(e.target.value);
          }}
          id="comment_input_box"
          type="text-box"
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CommentInputBox;