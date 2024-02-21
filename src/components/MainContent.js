import React from "react";
import AlbumnList from "./AlbumList";
import GenrePicker from "./GenrePicker";

function MainContent() {
  return (
    <main>
      <GenrePicker />
      <AlbumnList />
    </main>
  );
}

export default MainContent;
