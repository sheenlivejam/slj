import React, { useState, useEffect } from 'react';
import './App.css';
import poster from './SLJ-poster.png'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedDate, setSelectedDate] = useState(null);
  const [showScheduleSubmenu, setShowScheduleSubmenu] = useState(false);

  // Event data
  const events = [
    { 
      month: "Oct", 
      year: 2024, 
      theme: "Blues", 
      isPast: true,
      songs: [
        "Sweet Home Chicago - Robert Johnson",
        "The Thrill Is Gone - B.B. King",
        "Crossroad Blues - Robert Johnson",
        "Stormy Monday - T-Bone Walker",
        "Pride and Joy - Stevie Ray Vaughan"
      ],
      spotifyLink: "https://open.spotify.com/playlist/example1"
    },
    { 
      month: "Nov", 
      year: 2024, 
      theme: "Country", 
      isPast: true,
      songs: [
        "Jolene - Dolly Parton",
        "Ring of Fire - Johnny Cash",
        "Crazy - Patsy Cline",
        "Friends in Low Places - Garth Brooks",
        "Stand By Your Man - Tammy Wynette"
      ],
      spotifyLink: "https://open.spotify.com/playlist/example2"
    },
    { 
      month: "Dec", 
      year: 2024, 
      theme: "Funky", 
      isPast: true,
      songs: [
        "Superstition - Stevie Wonder",
        "Play That Funky Music - Wild Cherry",
        "Get Up (I Feel Like Being a) Sex Machine - James Brown",
        "Pick Up the Pieces - Average White Band",
        "Brick House - Commodores"
      ],
      spotifyLink: "https://open.spotify.com/playlist/example3"
    },
    { 
      month: "Jan", 
      year: 2025, 
      theme: "Beatles", 
      isPast: true,
      songs: [
        "Let It Be - The Beatles",
        "Hey Jude - The Beatles",
        "Come Together - The Beatles",
        "Yesterday - The Beatles",
        "A Hard Day's Night - The Beatles"
      ],
      spotifyLink: "https://open.spotify.com/playlist/example4"
    },
    { 
      month: "Feb", 
      year: 2025, 
      theme: "Reggae", 
      isPast: true,
      songs: [
        "No Woman, No Cry - Bob Marley",
        "Three Little Birds - Bob Marley",
        "I Shot the Sheriff - Bob Marley",
        "Redemption Song - Bob Marley",
        "Red Red Wine - UB40"
      ],
      spotifyLink: "https://open.spotify.com/playlist/example5"
    },
    { 
      month: "Mar", 
      year: 2025, 
      theme: "Folk", 
      isPast: false,
      songs: [
        "Blowin' in the Wind - Bob Dylan",
        "The Times They Are a-Changin' - Bob Dylan",
        "This Land Is Your Land - Woody Guthrie",
        "City of New Orleans - Arlo Guthrie",
        "If I Had a Hammer - Pete Seeger"
      ],
      spotifyLink: "https://open.spotify.com/playlist/example6"
    },
    { 
      month: "Apr", 
      year: 2025, 
      theme: "Paul Simon (and Garfunkel!)", 
      isPast: false,
      songs: [
        "Mrs Robinson - Simon & Garfunkel",
        "The Sound of Silence - Simon & Garfunkel",
        "Bridge over Troubled Water - Simon & Garfunkel",
        "Homeward Bound - Simon & Garfunkel",
        "Graceland - Paul Simon",
        "50 Ways to Leave Your Lover - Paul Simon"
      ],
      spotifyLink: "https://open.spotify.com/playlist/example7"
    },
    { 
      month: "May", 
      year: 2025, 
      theme: "Best of SLJ (gig set!)", 
      isPast: false,
      songs: [
        "Best Song 1 - Artist 1",
        "Best Song 2 - Artist 2",
        "Best Song 3 - Artist 3",
        "Best Song 4 - Artist 4",
        "Best Song 5 - Artist 5"
      ],
      spotifyLink: "https://open.spotify.com/playlist/example8"
    },
    { 
      month: "Jun", 
      year: 2025, 
      theme: "Oasis", 
      isPast: false,
      songs: [
        "Wonderwall - Oasis",
        "Don't Look Back in Anger - Oasis",
        "Champagne Supernova - Oasis",
        "Live Forever - Oasis",
        "Stop Crying Your Heart Out - Oasis"
      ],
      spotifyLink: "https://open.spotify.com/playlist/example9"
    },
    { 
      month: "Jul", 
      year: 2025, 
      theme: "Tracy Chapman", 
      isPast: false,
      songs: [
        "Fast Car - Tracy Chapman",
        "Give Me One Reason - Tracy Chapman",
        "Talkin' 'bout a Revolution - Tracy Chapman",
        "Baby Can I Hold You - Tracy Chapman",
        "Crossroads - Tracy Chapman"
      ],
      spotifyLink: "https://open.spotify.com/playlist/example10"
    },
    { 
      month: "Aug", 
      year: 2025, 
      theme: "Rolling Stones", 
      isPast: false,
      songs: [
        "Paint It Black - The Rolling Stones",
        "Satisfaction - The Rolling Stones",
        "Sympathy for the Devil - The Rolling Stones",
        "Wild Horses - The Rolling Stones",
        "Ruby Tuesday - The Rolling Stones"
      ],
      spotifyLink: "https://open.spotify.com/playlist/example11"
    },
    { 
      month: "Sep", 
      year: 2025, 
      theme: "Elton John", 
      isPast: false,
      songs: [
        "Rocket Man - Elton John",
        "Your Song - Elton John",
        "Tiny Dancer - Elton John",
        "Candle in the Wind - Elton John",
        "Crocodile Rock - Elton John"
      ],
      spotifyLink: "https://open.spotify.com/playlist/example12"
    },
    { 
      month: "Oct", 
      year: 2025, 
      theme: "Fleetwood Mac", 
      isPast: false,
      songs: [
        "Go Your Own Way - Fleetwood Mac",
        "Dreams - Fleetwood Mac",
        "Landslide - Fleetwood Mac",
        "Rhiannon - Fleetwood Mac",
        "The Chain - Fleetwood Mac"
      ],
      spotifyLink: "https://open.spotify.com/playlist/example13"
    },
    { 
      month: "Nov", 
      year: 2025, 
      theme: "Folk", 
      isPast: false,
      songs: [
        "The Boxer - Simon & Garfunkel",
        "Both Sides Now - Joni Mitchell",
        "Big Yellow Taxi - Joni Mitchell",
        "Suzanne - Leonard Cohen",
        "Hallelujah - Leonard Cohen"
      ],
      spotifyLink: "https://open.spotify.com/playlist/example14"
    },
    { 
      month: "Dec", 
      year: 2025, 
      theme: "Xmas", 
      isPast: false,
      songs: [
        "Last Christmas - Wham!",
        "All I Want for Christmas Is You - Mariah Carey",
        "Rockin' Around the Christmas Tree - Brenda Lee",
        "Fairytale of New York - The Pogues",
        "Merry Xmas Everybody - Slade"
      ],
      spotifyLink: "https://open.spotify.com/playlist/example15"
    },
    { 
      month: "Jan", 
      year: 2026, 
      theme: "New Year Special", 
      isPast: false,
      songs: [
        "New Year's Day - U2",
        "Auld Lang Syne - Traditional",
        "It's the End of the World as We Know It - R.E.M.",
        "New Year - Beach House",
        "The Final Countdown - Europe"
      ],
      spotifyLink: "https://open.spotify.com/playlist/example16"
    }
  ];

  // Find next upcoming event
  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-indexed
    const currentYear = currentDate.getFullYear();
    
    const monthMap = {
      "Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "Jun": 6,
      "Jul": 7, "Aug": 8, "Sep": 9, "Oct": 10, "Nov": 11, "Dec": 12
    };
    
    // Find the next upcoming event
    let upcomingEvent = events.find(event => {
      return (event.year > currentYear) || 
             (event.year === currentYear && monthMap[event.month] >= currentMonth);
    });
    
    // If no upcoming event found, default to the last event
    if (!upcomingEvent && events.length > 0) {
      upcomingEvent = events[events.length - 1];
    }
    
    // Set the default selected date if not already set
    if (!selectedDate && upcomingEvent) {
      setSelectedDate(`${upcomingEvent.month} ${upcomingEvent.year}`);
    }
  }, [selectedDate, events]);

  const handleScheduleClick = () => {
    setShowScheduleSubmenu(!showScheduleSubmenu);
    setActiveSection('schedule');
    
    // Find next upcoming event
    const upcomingEvent = events.find(event => !event.isPast);
    
    if (upcomingEvent) {
      setSelectedDate(`${upcomingEvent.month} ${upcomingEvent.year}`);
    }
  };

  const handleDateClick = (month, year) => {
    setSelectedDate(`${month} ${year}`);
    setActiveSection('schedule');
  };

  const getSelectedEventDetails = () => {
    if (!selectedDate) return null;
    
    const [month, year] = selectedDate.split(' ');
    return events.find(event => event.month === month && event.year === parseInt(year));
  };

  const selectedEvent = getSelectedEventDetails();

  return (
    <div className="app-container">
      <div className="sidebar">
        <h2 className="app-title">Sheen Live Jam</h2>
        <nav className="nav-menu">
          <div className="nav-item" onClick={() => setActiveSection('home')}>Home</div>
          <div className="nav-item" onClick={handleScheduleClick}>Schedule</div>
          {showScheduleSubmenu && (
            <div className="submenu">
              {events.filter(event => !event.isPast).map((event, index) => (
                <div 
                  key={index} 
                  className="submenu-item"
                  onClick={() => handleDateClick(event.month, event.year)}
                >
                  {event.month} {event.year} - {event.theme}
                </div>
              ))}
            </div>
          )}
          <div className="nav-item" onClick={() => setActiveSection('previous')}>Previous Dates</div>
          <div className="nav-item" onClick={() => setActiveSection('photos')}>Photos</div>
          <div className="nav-item" onClick={() => setActiveSection('poster')}>Poster</div>
        </nav>
      </div>
      
      <div className="main-content">
        {activeSection === 'home' && (
          <div className="home-section">
            {/* <img 
              src="/SLJ-poster.png" 
              alt="Sheen Live Jam Poster" 
              className="poster-image"
            /> */}
            <div className="info-boxes">
              <div className="info-box">
                <p>House band available for<br />backing tracks & jam</p>
                <p>Small guitar & bass amps available<br />plus keyboard, mic & cajon</p>
                <p>All instruments welcome<br />from harmonicas & trumpets,<br />to violins and spoons</p>
              </div>
              <div className="info-box">
                <p>An evening of low amp<br />music & camaraderie<br />For local music lovers of all abilities<br />Emphasis on creativity<br />and conversation</p>
              </div>
              <div className="info-box highlight">
                <h3>JAM of the Month</h3>
                <p>Themed set of songs<br />Led by house band<br />Available for ALL to play or sing on</p>
                <p>See website for set details</p>
              </div>
              <div className="event-details">
                <h3>Event Details</h3>
                <p><strong>Timings:</strong><br />
                   7-8pm (open mic)<br />
                   8-9pm (jam of the week)<br />
                   9-10pm (open mic)</p>
                <p><strong>Location:</strong><br />
                   @The Home Guard Club House<br />
                   76a Richmond Park Road</p>
                <p><strong>Entrance:</strong><br />
                   On the door £3 (non-members)<br />
                   Free for members</p>
              </div>
              <div className="social-links">
                <p>Instagram - @sheen_livejam</p>
                <p>Spotify - SheenLiveJam</p>
                <p>more info - contact Pat: sheenlivejam@gmail.com</p>
              </div>
            </div>
          </div>
        )}
        
        {activeSection === 'schedule' && selectedEvent && (
          <div className="schedule-section">
            <h2>{selectedEvent.month} {selectedEvent.year} - {selectedEvent.theme}</h2>
            <div className="song-list">
              <h3>Set List:</h3>
              <ul>
                {selectedEvent.songs.map((song, index) => (
                  <li key={index}>{song}</li>
                ))}
              </ul>
              <a 
                href={selectedEvent.spotifyLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="spotify-link"
              >
                Listen on Spotify
              </a>
            </div>
            <div className="event-details-mini">
              <p><strong>Timings:</strong> 7-8pm (open mic), 8-9pm (jam), 9-10pm (open mic)</p>
              <p><strong>Location:</strong> The Home Guard Club House, 76a Richmond Park Road</p>
              <p><strong>Entrance:</strong> £3 non-members, Free for members</p>
            </div>
          </div>
        )}
        
        {activeSection === 'previous' && (
          <div className="previous-dates-section">
            <h2>Previous Dates</h2>
            <div className="previous-dates-grid">
              {events.filter(event => event.isPast).map((event, index) => (
                <div 
                  key={index} 
                  className="previous-date-card"
                  onClick={() => handleDateClick(event.month, event.year)}
                >
                  <h3>{event.month} {event.year}</h3>
                  <p>{event.theme}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeSection === 'photos' && (
          <div className="photos-section">
            <h2>Photos</h2>

            <p>Coming soon! Photos from our events will be displayed here.</p>
            <div className="placeholder-grid">
              {[1, 2, 3, 4, 5, 6].map(num => (
                <div key={num} className="photo-placeholder">
                  <p>Photo {num}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeSection === 'poster' && (
          <div className="photos-section">
            <h2>Poster</h2>
            <img 
              src={poster} 
              alt="Sheen Live Jam Poster" 
              className="poster-image"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;