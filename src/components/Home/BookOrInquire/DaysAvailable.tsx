import './DaysAvailable.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const DaysAvailable = () => {
  return (
    <>
      <div className='days-available-container justify-content-center'>
        <div className='days-available-green-text-container justify-content-center'>
          <b>Days Available:</b>
          <br></br>
          We temporarily pause to accept new          customers.
        </div>
        Yes, this availability is up-to-date.
      </div>
    </>
  )
}

export default DaysAvailable;
