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
    <div className="bookmarksShow">
    <div className="bookmarksOne">
      <h1>{bookmarks.website}</h1>
      <h2>{bookmarks.url}</h2>
      <button id="delete" onClick={removeBookmark}>
        Delete Bookmark
      </button>
      <div className="bookmarkForm">
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={editForm.website}
        name="website"
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
        className="button"
        type="submit"
        value="Update Bookmark"
        />
      </form></div>
    </div>
    </div>
  )
}

export default Show