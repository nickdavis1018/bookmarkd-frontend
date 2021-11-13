import {useState} from "react"

function Show(props) {
  const id = props.match.params.id
  const bookmark = props.bookmark
  const bookmarks = bookmark.find((singleBookmark) => {
    return singleBookmark._id === id
  })

  const [editForm, setEditForm] = useState(bookmarks)

  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateBookmark(editForm, bookmarks._id)
    props.history.push("/")
  }
  const removeBookmark = () => {
    props.deleteBookmark(bookmarks._id)
    props.history.push("/")
  }
  return (
    <div className="bookmarks">
      <h1>{bookmarks.website}</h1>
      <h2>{bookmarks.url}</h2>
      <button id="delete" onClick={removeBookmark}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={editForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
        />
        <input
        type="text"
        value={editForm.url}
        name="url"
        placeholder="URL"
        onChange={handleChange}
        />
       
        <input
        type="submit"
        value="Update The Bookmark"
        />
      </form>
    </div>
  )
}

export default Show