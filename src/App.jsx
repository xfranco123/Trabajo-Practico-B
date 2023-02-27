import Navbar from "./assets/components/navbar";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./assets/components/image";

function App() {
  const [error, setError] = useState("");
  const [photos, setPhotos] = useState([]);
  const [filter, setFilter] = useState("");

  const filteredPhotos = photos.filter((photo) =>
    photo.alt_description?.toLowerCase().match(filter.toLowerCase())
  );

  function onFilterChanged(event) {
    setFilter(event.target.value);
  }
  useEffect(() => {
    const timerInput = setTimeout(() => {
      fetchImage();
    }, 200);
    return () => clearTimeout(timerInput);
  }, [filter]);
  console.log(photos);
  const fetchImage = () => {
    axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=k0S1blsjNmAgu0iHfl-Dr4P-wXb0ljqK8V8CqqY_-J8&count=9${
          filter && `&query=${filter}`
        } `
      )
      .then(function (response) {
        setPhotos((prev) => [...prev, ...response.data]);
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="App">
      <Navbar filter={filter} onFilterChanged={onFilterChanged} />
      <div>
        {error ? (
          <p>{error}</p>
        ) : (
          <InfiniteScroll
            className="photo-container2"
            dataLength={filteredPhotos.length}
            next={fetchImage}
            hasMore={true}
            loader={<h5>Loading...</h5>}
          >
            {filteredPhotos.map((photo, index) => (
              <Image
                key={index}
                photo={photo.urls?.raw}
                location={photo.location?.name}
                camera={photo.exif?.model}
                tag={photo.alt_description}
              />
            ))}
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
}

export default App;
//ds
