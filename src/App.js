import './App.css';
import Testimonial from './Components/Testimonial';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <h1>Aenean euismod risus pellentesque tellus condimentum egestas nec</h1>
        <Testimonial
          name='Emma Bostian'
          contry='Sweden'
          title='Software Engineer'
          company='Spotify'
          image='01'
          testimonial='Aenean euismod risus pellentesque tellus condimentum egestas nec vel ligula. scelerisque quam quis velit maximus, ut suscipit risus euismod bibendum justo nec risus aliquet lobortis.'
        />
        <Testimonial
          name='Jhon Doe'
          contry='Sweden'
          title='Software Engineer'
          company='Amazon'
          image='02'
          testimonial='Euismod risus pellentesque tellus condimentum egestas nec vel ligula. scelerisque quam quis velit maximus, ut suscipit risus euismod bibendum justo nec risus aliquet lobortis.'
        />
        <Testimonial
          name='Clara Lein'
          contry='US'
          title='Software Engineer'
          company='Twitter'
          image='03'
          testimonial='Aenean euismod risus pellentesque tellus condimentum egestas nec vel ligula. scelerisque quam quis velit maximus, ut suscipit risus euismod bibendum justo nec risus aliquet lobortis.'
        />
        <Testimonial
          name='Shawn Lee'
          contry='US'
          title='Software Engineer'
          company='Google'
          image='04'
          testimonial='Risus pellentesque tellus condimentum egestas nec vel ligula. scelerisque quam quis velit maximus, ut suscipit risus euismod bibendum justo nec risus aliquet lobortis.'
        />                        
      </div>
    </div>
  );
}

export default App;
