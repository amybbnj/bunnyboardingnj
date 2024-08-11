import './Faq.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Faq = () => {
  return (
    <div className="container-fluid px-0 pt-3">

      {/* <div className='summary-price'> */}
      <div className="row text-center pt-3 bg-light"><h4>FAQ</h4></div>

      <div className="row text-left pb-3 bg-light">        
        <div className="col-2 col-lg-3">
        </div>

        <div className="col-8 col-lg-6 text-left">
          <p>
            <strong>1. Where will my rabbit be kept?<br /></strong>
            A designated enclosure in the living room or the finished basement, fenced in with two extra-large play pens, giving over 30 sqft of room to explore and enjoy! Take a look at the gallery to view the setup.<br />
          </p>  
          <p>
            <strong>2. Do I need to worry about other pets?<br /></strong>
            We serve only one customer per floor at a time. Your bun won't be in contact with other animals.<br />
          </p>  
          <p> 
            <strong>3. What do you provide for my bunny?<br /></strong>
            Everything bunnies need including
              <ul>
                <li>Unlimited timothy hay, water and clean beddings changed daily</li>
                <li>Pellets, fresh fruit and vegetables</li>
                <li>Toys and massages</li>
                <li>Daily updates with photos and videos</li>
              </ul>
            </p>  
            <p>
              <strong>4. What do I need to bring?<br /></strong>
              You don't have to bring anything, but feel free to bring any of your bunny's home comforts (e.g. water bowl/bottle, toys, treats...).<br />
            </p>  
            <p>
              <strong>5. My bunny requires frequent care and attention. Are you the right choice for me?<br /></strong>
              No, we will be away during the day for at least three days each week. We offer bunny care during nighttime. Please only book with us if you are comfortable with your bunny being left alone during the day.
            </p>    

            <p>
              <strong>6. Can you administer medication to my bunny?<br /></strong>
              Unfortunately, we're not equipped to administer medication to bunnies. We believe it's in the best interest of your bunny to stay somewhere with the right expertise if they have any medication needs.
            </p> 
        </div>

        <div className="col-2 col-lg-3">
        </div>

      </div>

    </div>


  )
}

export default Faq;
