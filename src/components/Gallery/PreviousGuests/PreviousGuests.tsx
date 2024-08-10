import './PreviousGuests.css';
import TitledPhotoAlbum from '../PhotoAlbumSetup';


const PreviousGuests = () => {
  return (
    <>
      <div className='previous-guests'>
        <div className='previous-guests-text-container'>
          <p>Previous Guests</p>
        </div>
        <div className='previous-guests-gallery-container'>
          <TitledPhotoAlbum />
        </div>
      </div>
    </>
  )
}

export default PreviousGuests;
