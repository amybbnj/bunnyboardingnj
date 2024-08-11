import './RoomSetup.css';
// import PhotoAlbum from "react-photo-album";
// import basementSetup from 'src/assets/room-setup/BasementSetup.jpg'
import livingRoomSetup from 'src/assets/room-setup/LivingRoomSetup.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import photos from '.././photos'

const images1 = [
  // { src: basementSetup, 
  //   // width: 500, height: 400 
  // },
  { src: livingRoomSetup, 
    // width: 500, height: 500 
  },
];

const images2 = photos;

const RoomSetup = () => {
  return (

    <div className="container mt-4">
      <div className="row px-0 text-center"><h3>Room Setup</h3></div>
    <div className="row px-0">
        {images1.map((image) => (
            <div className="col-12 col-md-6 px-3 py-3">
                {/* <div className="card"> */}
                    <img src={image.src} className="gallery-image" />
                {/* </div> */}
            </div>
        ))}
    </div>
    <div className="row px-0 text-center"><h3>Previous Guests</h3></div>
    <div className="row px-0">
        {images2.map((image) => (
            <div className="col-12 col-md-6 px-3 py-3">
                {/* <div className="card"> */}
                    <img src={image.src} className="gallery-image" />
                {/* </div> */}
            </div>
        ))}
    </div>
</div>

  )
}

export default RoomSetup;
