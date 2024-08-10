import './Faq.css';


const Faq = () => {
  return (
    <>
    <div className='faq'>
      <div className='faq-text-container'>
        <p>FAQ</p>
      </div>
      <div className='faq-q-and-a-container'>
        <div className='faq-q-and-a-text-container'>
          <p>
            <b>1. Where will my rabbit be kept?</b>
            <br></br>
            Option 1: roam free in our bunny-proofed finished basement.
            <br></br>
            Option 2: a designated enclosure in the living room, fenced in with two extra-large play pens, giving over 30 sqft of room to explore and enjoy!
            <br></br>
            Take a look at the gallery photos to view the different setups.
            <br></br>
            <b>2. Do I need to worry about other pets?</b>
            <br></br>
            We serve only one customer per floor at a time. Your bun won't be in contact with other animals.
            <br></br>
            <b>3. What do you provide for my bunny?</b>
            <br></br>
            Everything bunnies need including
          </p>
          <ul>
            <li>Unlimited timothy hay, water and clean beddings changed daily</li>
            <li>Pellets, fresh fruit and vegetables</li>
            <li>Toys and massages</li>
            <li>Daily updates with photos and videos</li>
          </ul>
          <p>
            <b>4. What do I need to bring?</b>
            <br></br>
            You don't have to bring anything, but feel free to bring any of your bunny's home comforts (e.g. water bowl/bottle, toys, treats...).
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Faq;
