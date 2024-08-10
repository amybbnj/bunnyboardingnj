import './BookOrInquire.css';
import ContactInfoForm from './ContactForm';
import DaysAvailable from './DaysAvailable';
import Instructions from './Instructions';


const BookOrInquire = () => {
  return (
    <>
      <div className='book-or-inquire'>
        <div className='book-or-inquire-text-container'>
          <p>Book or Inquire</p>
        </div>
        <div className='availability-info-form'>
          <div className='availability-info-container'>
            <DaysAvailable />
            <Instructions />
          </div>
        </div>
        <div className='availability-info-form'>
          <ContactInfoForm />
        </div>
      </div>
    </>
  )
}

export default BookOrInquire;
