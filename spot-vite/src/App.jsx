import { useState } from 'react'
import './style.css'

function App() {

  return (
    <>
      <div className="top">
        <div className="sidebar">
          <div className="logo">

          </div>
          <div className="menu">
            <a href=""><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true" alt="" />Home</a>
            <br />
            <a href=""><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true" alt="" /> Search</a>
            <br />
            <a href=""><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true" alt="" /> Your Library</a>
          </div>
          <div className="menu">
            <a href=""><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true" alt="" />Create Playlist</a><br />
            <a href=""><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Group%202.png?raw=true" alt="" />Liked Songs</a><br />
            <a href=""><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true" alt="" />Your Episodes</a>
          </div>
          <div className="menu">
            <a href="">FAV</a>
            <br />
            <a href="">Daily Mix 1</a><br />
            <a href="">Discover Weekly</a>
            <br /><a href="">Malayalam</a><br />
            <a href="">Dance/ Electronic Mix</a><br /><a href="">EDM/ Popular</a>
          </div>
          <div className="install menu">
            <a href="">
              <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true" alt="" />
              <p>Install App</p>
            </a>
          </div>
        </div>
        <div className="main">
          <div className="top-bar">
            <div className="arrows">
              <a href=""><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true" alt="" /></a>
            </div>
            <div className="user"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true" alt="" /></div>
          </div>
          <h2>Good Morning</h2>
          <div className="songs">
            <div className="music"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true" alt="" /><p>Liked Songs</p></div>
            <div className="music"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true" alt="" /><p>Neffex Playlist</p></div>
            <div className="music"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true" alt="" /><p>K/ DA</p></div>
            <div className="music"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true" alt="" /><p>Liked Songs</p></div>
            <div className="music"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true" alt="" />
              <p>Dance / Electronic Mix</p>
            </div>
          </div>
          <h3>
            Shows you might like
          </h3>
          <div className="shows">
            <div className="show"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true" alt="" />
              <p>Weekly Motivatio...</p>
              <span>Ben Ins Scott</span>
            </div>
            <div className="show"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true" alt="" />
              <p>MOTIVATION SELF</p><span>Ben Ins Scott</span>
            </div>
            <div className="show"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true" alt="" />
              <p>Words beyond act...</p><span>Ben Ins Scott</span>
            </div>
            <div className="show"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true" alt="" />
              <p>The Alexa Show</p><span>Ben Ins Scott</span></div>
            <div className="show"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true" alt="" />
              <p>The Stories of Ma...</p><span>Ben Ins Scott</span></div>
            <div className="show"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true" alt="" />
              <p>Motivation Daily b...</p><span>Ben Ins Scott</span></div>
          </div>
        </div>
      </div>
      <div className="above">
        <div className="bottom">
          <div className="dreaming"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image11.png?raw=true" alt="" />
            <div className='dream-text'>
              <p>Dreaming On</p>
              <p>NEFFEX</p>
            </div>
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/bx_bxs-heart.png?raw=true" alt="" id='heart' />
          </div>
          <div className="play">
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Music%20Player%20Options.png?raw=true" alt="" />
          </div>
          <div className="control">
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Right%20options.png?raw=true" alt="" />
          </div>
        </div>
        <div className="below">
        Listening on ASUS-ROG-G531GT
        </div>
      </div>
    </>
  )
}

export default App