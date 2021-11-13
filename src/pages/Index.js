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
        <h3><a href={bookmarks.url}>{bookmarks.url}</a></h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
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
        
        <input type="submit" value="Add Bookmark" />
      </form>
      {props.bookmark ? loaded() : loading()}
    </section>
  );
}

export default Index;