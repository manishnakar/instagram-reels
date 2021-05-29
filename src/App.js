import './App.css';
import VideoCard from './VideoCard'

function App() {


  const channel = 'Channel';
  const avatarSrc = 'https://instagram.fbom3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118723051_178503100553167_8751697531708993618_n.jpg?tp=1&_nc_ht=instagram.fbom3-1.fna.fbcdn.net&_nc_ohc=F0z3lD_zDhgAX_W_NLB&edm=AEF8tYYBAAAA&ccb=7-4&oh=175717351c54e1e01b93f9ba38d1b19a&oe=60B9FD85&_nc_sid=a9513d'
  const song = 'test Song'
  const likes = '50'
  const url = './192120569_950642109045523_77023514642497228_n.mp4'
  const shares = '100'


  return (
    <div className="app">
      <h1>welcome</h1>

      <div className="app__top">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png" alt="instagram" className="app__logo" />

        <h1>Reels</h1>

      </div>
      <div className="app__videos">
      <VideoCard
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        url={url}
        likes={likes}
        shares={shares}
      />
      
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      </div>
    </div>  
  );
}

export default App;
