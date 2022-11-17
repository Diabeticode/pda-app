import 'bulma/css/bulma.css';
import ProfileCard from './components/ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div className='App'>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>Personal Digital Assistants</p>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard
                image={AlexaImage}
                title='Alexa'
                handle='@alexa99'
                description='A cloud-based voice AI that you can talk to on your Alexa product.'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                image={CortanaImage}
                title='Cortana'
                handle='@cortana32'
                description='A productivity assistant that helps you focus attention on what matters most.'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                image={SiriImage}
                title='Siri'
                handle='@siri01'
                description='Software that understands language and completes requested tasks.'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
