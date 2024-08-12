import './BookOrInquire.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookOrInquire = () => {
  return (
    <div className="container-fluid px-0">

      <div className="row text-center mx-0"><h4>Book or Inquire</h4></div>

      <div className="row pb-3 mx-0">
        <div className="col d-flex justify-content-center text-center">
        <div className="card border" style={{width: '20rem'}}>
          <div className="card-header">
            Pricing
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>$35/night</strong> for the first bunny</li>
            <li className="list-group-item"><strong>$20/night</strong> for each additional bonded bunny</li>
          </ul>
        </div>
        </div>
      </div>

      <div className="row pb-3 mx-0">
        <div className="col d-flex justify-content-center text-center">
        <div className="card border" style={{width: '20rem'}}>
          <div className="card-body">
            <p className="text-success fw-bold">Days Available:</p>
            <p className="text-success">9/2/2024 - 9/30/2024: 
              <br></br>Limited availability: bunny care will be provided only at night. <br></br>Please book with us if you're okay with your bunny spending the daytime alone.</p>
            <p>Contact us via email at <strong>amybbnj@gmail.com</strong></p>
          </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default BookOrInquire;
