import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ContactForm.css';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  dropOffDate: Date | null;
  pickUpDate: Date | null;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    dropOffDate: null,
    pickUpDate: null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dropOffDate">Drop-off date *</label>
        <DatePicker
          selected={formData.dropOffDate}
          onChange={date => setFormData({ ...formData, dropOffDate: date })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pickUpDate">Pick-up date *</label>
        <DatePicker
          selected={formData.pickUpDate}
          onChange={date => setFormData({ ...formData, pickUpDate: date })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Write a message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button type="submit">Contact us</button>
      </div>
    </form>
  );
};

export default ContactForm;
