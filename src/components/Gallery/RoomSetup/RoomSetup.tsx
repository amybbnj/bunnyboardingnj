import './RoomSetup.css';
import PhotoAlbum from "react-photo-album";
import basementSetup from 'src/assets/room-setup/BasementSetup.jpg'
import livingRoomSetup from 'src/assets/room-setup/LivingRoomSetup.jpg'


const photos = [
  { src: basementSetup, width: 500, height: 400 },
  { src: livingRoomSetup, width: 500, height: 500 },
];

const RoomSetup = () => {
  return (
    <>
      <div className='room-setup'>
        <div className='room-setup-text-container'>
          <p>Room setup</p>
        </div>
        <div className='room-setup-gallery-container'>
          <PhotoAlbum layout="rows" photos={photos} />
        </div>
      </div>
    </>
  )
}

export default RoomSetup;
