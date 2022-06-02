import '../styles/Testimonial.css';

function Testimonial(props) {
  return (
    <div className='testimonial-container'>
      <img
        src={require(`../images/img-profile-${props.image}.jpg`)}
        alt='Image profile'
        className='testimonial-image' />
      <div className='testimonial-info-container'>
        <p className='testimonial-info-name'>
          <b>{props.name}</b> in {props.contry}
          </p>
        <p className='testimonial-info-charge'>
          {props.title} in <b>{props.company}</b>
          </p>
        <p className='testimonial-info-text'>"{props.testimonial}"</p>
      </div>
    </div>
  );
}

export default Testimonial;
