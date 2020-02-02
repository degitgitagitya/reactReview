import React from "react";

const Artist = ({ artist }) => {
  if (!artist) return null;

  console.log(artist);

  const { images, name, followers, genres } = artist;

  return (
    <div className="mt-3">
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>{genres.join(", ")}</p>
      <img
        style={{
          width: 200,
          heigh: 200,
          objectFit: "cover",
          borderRadius: 100
        }}
        className="img-fluid"
        src={images[0] && images[0].url}
        alt="artist-profile"
      />
    </div>
  );
};

export default Artist;
