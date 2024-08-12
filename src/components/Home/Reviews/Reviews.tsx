import { Carousel } from 'react-bootstrap';
import './Reviews.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faYelp } from '@fortawesome/free-brands-svg-icons';

function MyCarousel() {
    return (
      <div>
        <div className="container-fluid px-0">
        <div className="row pink-color mx-0">
        <Carousel interval={null}>
            <Carousel.Item>
              <div className="container-fluid">
                <div className="row py-3 comment_div mx-0">

                  <div className="col-12 col-lg-6">
                    <div className="d-block w-100 text-center" style={{overflowY:'auto'}}>
                    <p>“I would highly recommend Amy for bunny boarding services.  I saw my bunny binkying on camera which helped me to be at ease to know my bunny was having the time of her life.  Amy provides the bunnies with spacious living quarters and she will set up the living quarters to your set up at home. I have boarded my bunny other places and I will never place my bunny elsewhere again.  Amys work ethic and caring nature has won me over.  I promise her boarding services will not disappoint.”<br /></p>
                    <p>Fifi's owner | 08/31/2023</p>
                    </div>

                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="container-fluid">
                  <div className="row py-3 comment_div mx-0">

                    <div className="col-12 col-lg-6">
                      <div className="d-block w-100 text-center" style={{overflowY:'auto'}}>
                      <p>"If you're looking for a place to care for for your bun while you're away I can't recommend Bunny Boarding NJ ENOUGH! Amy is so great to work with (she extended my Honey Smacks' stay another night when I realized I put the wrong date), considerate (had a bowl of celery, his fave, and an adorable sign waiting for him when I dropped him off), attentive and kept me updated with photos, videos and texts every single day AND shared a Google drive updated with videos and photos every day. He loved playing and his vacation while I was on vacation. I never once worried about him and knew he was being well taken care of, watched, fed and loved!"<br /></p>
                      <p>Honey Smacks' owner | 08/19/2023</p>
                      </div>
                    </div>

                  </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="container-fluid">
                  <div className="row py-3 comment_div mx-0">

                    <div className="col-12 col-lg-6">
                      <div className="d-block w-100 text-center">
                      <p>"My bunny LOVED staying here! After our bunny care plans fell through, Amy was able to accommodate my girl very last minute. I received daily updates with several pictures/videos of my bun relaxing and enjoying herself in the spacious bunny safe area set up for her. Amy noticed that she wasn’t drinking very much water initially and began to closely monitor her intake to ensure my girl was getting enough hydration. It made my vacation so much better knowing that she was with a rabbit savvy sitter who was not just taking care of her physical needs but also spending time and providing enrichment opportunities. We will DEFINITELY be using bunny boarding NJ again in the future."<br /></p>
                      <p>Bubsy's owner | 08/16/2023 on Google</p>
                      </div>
                    </div>

                  </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="container-fluid">
                  <div className="row py-3 comment_div mx-0">

                    <div className="col-12 col-lg-6">
                      <div className="d-block w-100 text-center">
                      <p>"What a wonderful experience! I have two bunnies that are not bonded to each other, and they were able to be safely placed into two separate enclosures with plenty of room to run around. I received daily text messages, photos, and videos for updates. The buns got plenty of hay and fresh veggies everyday. I have never felt so reassured on my vacation away. This is hands down the best bunny boarding place I’ve experienced!"<br /></p>
                      <p>Pops and Puff's owner | 09/06/2023 on Google</p>
                      </div>
                    </div>

                  </div>
                </div>
            </Carousel.Item>
        </Carousel>
        </div>
        </div>
        <div className="container-fluid pb-0 px-0">
        <div className="row text-center pink-color mx-0"><p><strong>Read more reivews on: </strong></p></div>

        <div className="row text-center pink-color pb-3 px-0 mx-0">
          <div className="col">
            <a href="https://www.facebook.com/profile.php?id=100095074532502&paipv=0&eav=AfZUPaPkHTG8Nz-0k9qvz1k7S7mzsJ04A8oL5_H0BuTdwhCu8Tbj12VcSzC0REG9SwI" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
          </div>
          <div className="col">
            <a href="https://maps.app.goo.gl/nejac5f36jGbkgQj8" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogle} /> Google</a>
          </div>
          <div className="col">
            <a href="https://www.yelp.com/biz/bunny-boarding-nj-belleville" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYelp} /> Yelp</a>
          </div>
        </div>
        </div>

      </div>

    );
}

export default MyCarousel;