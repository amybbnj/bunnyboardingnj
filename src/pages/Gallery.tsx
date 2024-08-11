// import PreviousGuests from "../components/Gallery/PreviousGuests/PreviousGuests";
import RoomSetup from "../components/Gallery/RoomSetup/RoomSetup";
import 'bootstrap/dist/css/bootstrap.min.css';
const Gallery = () => {
  return (
    <div className="gallery">
      <div>
        <RoomSetup />
        {/* <PreviousGuests /> */}
      </div>
    </div>
  );
}

export default Gallery;