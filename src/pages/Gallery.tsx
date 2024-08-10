import PreviousGuests from "../components/Gallery/PreviousGuests/PreviousGuests";
import RoomSetup from "../components/Gallery/RoomSetup/RoomSetup";

const Gallery = () => {
  return (
    <div className="gallery">
      Welcome to the Gallery Page!
      <div>
        <RoomSetup />
        <PreviousGuests />
      </div>
    </div>
  );
}

export default Gallery;