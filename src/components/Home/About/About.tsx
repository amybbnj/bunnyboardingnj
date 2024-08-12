import './About.css';
import logo from 'src/assets/Petcare-Insurance-Logo_Best.jpg'


const About = () => {
  return (
    <div className="container-fluid px-0 py-0">
      <div className="row text-center pt-3 pb-3 mx-0 px-0 bg-light"><h4>About Us</h4>
      <p className="px-3 text-center">
          Located in Belleville NJ, we provide bunny boarding at our home in New Jersey for your cherished furry friends! We have been taking care of rabbits for 5 years. We are Pet Care insured. Trust us to treat your rabbits as part of our family because at Bunny Boarding NJ, we're not just caretakers, we're bunny enthusiasts at heart.
      </p>

      <div className='insurance-img-container pb-3'>
        <img src={logo} alt="Sample" />
      </div>
      
      <h4>Contact Us</h4>
      <p className="px-3 text-center">Email: amybbnj@gmail.com<br />
      Belleville, NJ 07109<br />
      (BY APPOINTMENT ONLY)
      </p>

      </div>

  </div>
  )
}

export default About;
