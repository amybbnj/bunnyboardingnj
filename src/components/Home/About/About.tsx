import './About.css';
import logo from 'src/assets/Petcare-Insurance-Logo_Best.jpg'


const About = () => {
  return (
    <>
    <div className='about'>
      <div className='about-text-container'>
        <p>About</p>
      </div>
      <div className='about-para-container'>
        <p>
          Located in Belleville NJ, we provide bunny boarding at our home in New Jersey for your cherished furry friends! We have been taking care of rabbits for 4 years. We are Pet Care insured.
        </p>
        <p>
          Trust us to treat your rabbits as part of our family because at Bunny Boarding NJ, we're not just caretakers, we're bunny enthusiasts at heart.
        </p>
      </div>
      <div className='insurance-img-container'>
        <img src={logo} alt="Sample" />
      </div>
    </div>
    </>
  )
}

export default About;
