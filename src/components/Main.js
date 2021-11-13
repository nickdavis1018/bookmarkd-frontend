import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [bookmark, setBookmark] = useState(null);

  const URL = "https://bookmarkd-ga.herokuapp.com/bookmarks/";

  const getBookmark = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBookmark(data);
  };

  const createBookmark = async (bookmarks) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookmarks),
    });
    getBookmark();
  };

  const updateBookmark = async (bookmarks, id) => {
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookmarks),
    })
    getBookmark()
  }

  const deleteBookmark = async id => {
    await fetch(URL + id, {
      method: "delete",
    })
    getBookmark()
  }

  useEffect(() => getBookmark(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index bookmark={bookmark} createBookmark={createBookmark} />
        </Route>
        <Route
          path="/bookmarks/:id"
          render={(rp) => (
            <Show
              {...rp}
              bookmark={bookmark}
              updateBookmark={updateBookmark}
              deleteBookmark={deleteBookmark}
            />
          )}
        />
      </Switch>
    </main>
  );
}

export default Main;