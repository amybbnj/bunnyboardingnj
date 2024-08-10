import { useState } from 'react';
import './Reviews.css';

const slides = [
  <><div>“I would highly recommend Amy for bunny boarding services.  I saw my bunny binkying on camera which helped me to be at ease to know my bunny was having the time of her life.  Amy provides the bunnies with spacious living quarters and she will set up the living quarters to your set up at home. I have boarded my bunny other places and I will never place my bunny elsewhere again.  Amys work ethic and caring nature has won me over.  I promise her boarding services will not disappoint.”</div><br></br><div>Fifi's owner | 08/31/2023</div></>,
  <><div>"If you're looking for a place to care for for your bun while you're away I can't recommend Bunny Boarding NJ ENOUGH! Amy is so great to work with (she extended my Honey Smacks' stay another night when I realized I put the wrong date), considerate (had a bowl of celery, his fave, and an adorable sign waiting for him when I dropped him off), attentive and kept me updated with photos, videos and texts every single day AND shared a Google drive updated with videos and photos every day. He loved playing and his vacation while I was on vacation. I never once worried about him and knew he was being well taken care of, watched, fed and loved!"</div><br></br><div>Honey Smacks' owner | 08/19/2023</div></>,
  <><div>"The most amazing bunny boarding buisness in NJ. I went away for about a week and was so nervous about what to do with my bunny Amoora. Every place I looked into kept the bunnies in cages or in environments that were going to be stressful for her. I needed to leave on vacation knowing my bun would be okay. Thankfully I found Bunny Boarding NJ and kept my bun with them for a few days. Amy is an amazing bun sitter and I couldn't recommend anyone else to board buns with but her. She sent multiple daily pictures and updates as well as making sure to keep the same routine I had in place for Amoora." (cont.)</div><br></br><div>Amoora's owner | 07/24/2023 on Google</div></>,
  <><div>"She also gave Amoora plenty of toys to play with (way more than I even have at home). I felt so good knowing my bun was not only in good hands but was also genuinely having a great time! Bunny Boarding NJ has this genuine love and care for these buns and you can see it through their work. They cared for Amoora as if she was their very own bun. Please do not hesitate to board with them, you and your bun will not regret it. Will definitely be keeping Amoora with them for future vacations as well!"</div><br></br><div>Amoora's owner | 07/24/2023 on Google'</div></>,
  <><div>"My bunny LOVED staying here! After our bunny care plans fell through, Amy was able to accommodate my girl very last minute. I received daily updates with several pictures/videos of my bun relaxing and enjoying herself in the spacious bunny safe area set up for her. Amy noticed that she wasn’t drinking very much water initially and began to closely monitor her intake to ensure my girl was getting enough hydration. It made my vacation so much better knowing that she was with a rabbit savvy sitter who was not just taking care of her physical needs but also spending time and providing enrichment opportunities. We will DEFINITELY be using bunny boarding NJ again in the future."</div><br></br><div>Bubsy's owner | 08/16/2023 on Google</div></>,
  <><div>"What a wonderful experience! I have two bunnies that are not bonded to each other, and they were able to be safely placed into two separate enclosures with plenty of room to run around. I received daily text messages, photos, and videos for updates. The buns got plenty of hay and fresh veggies everyday. I have never felt so reassured on my vacation away. This is hands down the best bunny boarding place I’ve experienced!"</div><br></br><div>Pops and Puff's owner | 09/06/2023 on Google</div></>
];

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className='carousel-and-bubbles-container'>
      <div className="carousel">
        <button className="prev" onClick={prevSlide}>
          <svg viewBox="0 0 41 41" fill="currentColor">
            <path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path>
          </svg>
        </button>
        <div className="carousel-inner">
          <div className="slide">{slides[currentSlide]}</div>
        </div>
        <button className="next" onClick={nextSlide}>
          <svg viewBox="0 0 41 41" fill="currentColor">
            <path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path>
          </svg>
        </button>
      </div>
      <div className="carousel-nav">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`nav-circle ${currentSlide === index ? 'selected' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
