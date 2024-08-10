import SummaryPrice from '../components/Home/BunnyBoardingServices/BunnyBoardingServices'
import BookOrInquire from '../components/Home/BookOrInquire/BookOrInquire';
import Faq from '../components/Home/Faq/Faq';
import Reviews from '../components/Home/Reviews/Reviews';
import About from '../components/Home/About/About';
import './Home.css';


const Home = () => {
  return (
    <>
      <SummaryPrice />
      <BookOrInquire />
      <Faq />
      <Reviews />
      <About />
    </>
  );
}

export default Home;
