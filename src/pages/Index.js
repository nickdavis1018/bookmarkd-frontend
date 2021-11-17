import { useState } from "react";
import {Link} from "react-router-dom"

function Index(props) {
  const [newForm, setNewForm] = useState({
    website: "",
    url: "",
  });

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createBookmark(newForm);
    setNewForm({
        website: "",
        url: "",
    });
  };

  const loaded = () => {
    return props.bookmark.map((bookmarks) => (
      <div key={bookmarks._id} className="bookmarks">
        <Link to={`/bookmarks/${bookmarks._id}`}><h1>{bookmarks.website}</h1></Link>
        <a className="urlLink" href={bookmarks.url}>{bookmarks.url}</a>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
    <div className="formCreate">
      <div className="bookmarkForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.website}
          name="website"
          placeholder="website"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.url}
          name="url"
          placeholder="url"
          onChange={handleChange}
        />
        
        <input className="button" type="submit" value="Add Bookmark" />
      </form></div></div><div className="mainIndex">
      {props.bookmark ? loaded() : loading()}</div>
    </section>
  );
}

export default Index;