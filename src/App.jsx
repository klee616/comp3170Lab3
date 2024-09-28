import news_feed from './sample_news_stories.json';
import Feed from './components/Feed';
function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      <Feed stories={stories} />


      <div className='feed'>

      <div className="story-block">
          <div className='story-image-block'>
            <img src='https://placehold.co/300x200' className='story-image' />
          </div>
          <div className='story-content-block'>
            <h2>Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming</h2>
            <div>By: Steve Hanley</div>
            <div>El director ejecutivo de Tesla y SpaceX, Elon Musk, estimó que la deuda de Estados Unidos en tres veces mayor a su economía.
              https://www.milenio.com/negocios/elon-musk-deuda-eu-60-billones-dolares</div>
          </div>
          <span>
            <button>X</button>
          </span>
        </div>


        <div className="story-block">
          <div className='story-image-block'>
            <img src='https://placehold.co/300x200' className='story-image' />
          </div>
          <div className='story-content-block'>
            <h2>Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming</h2>
            <div>By: Steve Hanley</div>
            <div>El director ejecutivo de Tesla y SpaceX, Elon Musk, estimó que la deuda de Estados Unidos en tres veces mayor a su economía.
              https://www.milenio.com/negocios/elon-musk-deuda-eu-60-billones-dolares</div>
          </div>
          <span>
            <button>X</button>
          </span>
        </div>

      </div>
    </div>

  );
}

export default App;
