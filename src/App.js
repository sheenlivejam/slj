import React, { useState, useEffect } from 'react';
import './App.css';
import poster from './SLJ-poster.png'
import PhotoGallery from './PhotoGallery';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedDate, setSelectedDate] = useState(null);
  const [showScheduleSubmenu, setShowScheduleSubmenu] = useState(false);
  // const p = './SLJ-poster.png'
  // Event data
  const _events = [
    { 
      month: "Oct", 
      year: 2024, 
      theme: "Blues", 
      isPast: true,
      songs: [
        "Stormy Monday - Allman Brothers Ban",
        "New Coat of Paint - Tom Waits",
        "Mustang Sally - Wilson Pickett",
        "Got My Mojo Working - Elvis Presley",
        "San Francisco Bay Blues - Eric Clapton",
        "Where Did You Sleep Last Night - Lead Belly",
        "I'm Your Hoochie Coochie Man - Muddy Waters",
      ],
      spotifyLink: "https://open.spotify.com/playlist/6OyR3JKzfrdN4BM6FtOvLL?si=b07b70a3fe4a481d"
    },
    { 
      month: "Nov", 
      year: 2024, 
      theme: "Country", 
      isPast: true,
      songs: [
        "Coats of Many Colours - Dolly Parton",
        "Ring of Fire - Johnny Cash",
        "Lost Highway - Hank Williams",
        "On the Road Again - Willie Nelson",
        "Rhineston Cowboy - Glen Campbell",
        "Theme from Rawhide - Frankie Laine",
        "Stand By Your Man - Tammy Wynette"
      ],
      spotifyLink: "https://open.spotify.com/playlist/51YcLIz4jTNOh9qirrZY5x?si=e7cdf4effc5c4e44"
    },
    { 
      month: "Dec", 
      year: 2024, 
      theme: "Funky", 
      isPast: true,
      songs: [
        "I Wish - Stevie Wonder",
        "I Got You (I Feel Good) - James Brown",
        "Steal My Kisses - Ben Harper",
        "The Ghetto - Donny Hathaway",
        "Funky Town - Lipps Inc",
        "You Sexy Thing - Hot Chocolate"
      ],
      spotifyLink: "https://open.spotify.com/playlist/24HXDHRmItAfdv30IY2as2?si=59b57c2e71264e27"
    },
    { 
      month: "Jan", 
      year: 2025, 
      theme: "Beatles", 
      isPast: true,
      songs: [
        "Lady Madonna - The Beatles",
        "Hey Jude - The Beatles",
        "Here Comes the Sun - The Beatles",
        "Back in the USSR - The Beatles",
        "Saw Her Standing There - The Beatles",
        "Ob-La-Di, Ob La Da - The Beatles",
        "Day Tripper - The Beatles",
      ],
      spotifyLink: "https://open.spotify.com/playlist/3GNSbltQZyjUxtK86Vj0Zx?si=cec5812cc53c4834"
    },
    { 
      month: "Feb", 
      year: 2025, 
      theme: "Reggae", 
      isPast: true,
      songs: [
        "54-46 was my number - Toots and the Maytals",
        "Three Little Birds - Bob Marley",
        "I Shot the Sheriff - Eric Clapton",
        "A Message To You Rudy - The Specials",
        "Red Red Wine - UB40",
        "The Tide is High - Blondie",
        "Cupid - Amy Winehouse"
      ],
      spotifyLink: "https://open.spotify.com/playlist/6YrbJiu1oFhc0cIawwKsWo?si=7dab3e1f258a441a"
    },
    { 
      month: "Mar", 
      year: 2025, 
      theme: "Folk", 
      isPast: false,
      songs: [
        "Blowin' in the Wind - Bob Dylan",
        "Roll Away Your Stone - Mumford And Sons",
        "Irish Rover - The Dubliners & The Pogues",
        "Wild Rover - The Pogues",
        "Whiskey In the Jar - The Dubliners & The Pogues",
        "Walking On the Waves - Skipinnish",
        "Leaving On A Jet Plane - John Denver",
        "The Galway Girl - Mundy, Sharon Shannon"
      ],
      spotifyLink: "https://open.spotify.com/playlist/5ftNtubPnsaVhiBlO1hObt?si=9d113f23edbf4f96"
    },
    { 
      month: "Apr", 
      year: 2025, 
      theme: "Paul Simon", 
      isPast: false,
      songs: [
        "Mrs Robinson - Simon & Garfunkel",
        "The Sound of Silence - Simon & Garfunkel",
        "Bridge over Troubled Water - Simon & Garfunkel",
        "Homeward Bound - Simon & Garfunkel",
        "Graceland - Paul Simon",
        "50 Ways to Leave Your Lover - Paul Simon"
      ],
      spotifyLink: "https://open.spotify.com/playlist/1EFiM08lezscybvXPtxT1w?si=ec1da7d433b14701"
    },
    { 
      month: "May", 
      year: 2025, 
      theme: "Mojo Remix!", 
      isPast: false,
      songs: [
        "New Coat of Paint (Fm)",
        "Sanfrancisco Bay Blues (C)",
        "Message to you Rudy - The Specials (C)",
        "Here Comes the Sun - The Beatles (A)",
        "Lady Madonna - The Beatles (A)",
        "Rhinestone Cowboy - Glenn Campbell (C)",
      ],
      spotifyLink: "https://open.spotify.com/playlist/0PacHnNp2RpyTSUIF5tj8R?si=8f046d1de5054f3c"
    },
    { 
      month: "Jun", 
      year: 2025, 
      theme: "Oasis", 
      isPast: false,
      songs: [
        "Cigarettes and Alcohol - Oasis",
        "Don't Look Back in Anger - Oasis",
        "Wonderwall - Oasis",
        "Half The World Away - Oasis",
        "Stand By Me - Oasis",
        "Whatever - Oasis"
      ],
      spotifyLink: "https://open.spotify.com/playlist/4A1ZgkHTknEnKfXQvEPegS?si=d9109128ab6d4866"
    },
    { 
      month: "Jul", 
      year: 2025, 
      theme: "Tracy Chapman", 
      isPast: false,
      songs: [
        "Baby Can I Hold You - Tracy Chapman",
        "Fast Car - Tracy Chapman",
        "Talkin' 'bout a Revolution - Tracy Chapman",
        "Give Me One Reason - Tracy Chapman (play like the Clapton/Tracy live version)",
        "You're The One - Tracy Chapman",
        "Mountains O Things - Tracy Chapman  (Let's play our own Rock Electric Guitar driven version)"
      ],
      spotifyLink: "https://open.spotify.com/playlist/6zfMieATTNcq32UpuveVWY?si=zbV7URdpQaCG1VRTLCLhGg&pi=v0Icehn5T9m9E"
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
        "Jumpin' Jack Flash - The Rolling Stones",
        "Ruby Tuesday - The Rolling Stones",
        "You Can't Always Get What You Want - The Rolling Stones"
      ],
      spotifyLink: "https://open.spotify.com/playlist/1szhcQHfX3YjsGXhxWRbdH?si=a08e9c7277ed404a"
    },
    { 
      month: "Sep", 
      year: 2025, 
      theme: "Elton John", 
      isPast: false,
      songs: [
        "Rocket Man - Elton John",
        "Your Song - Elton John",
        "Saturday Night - Elton John",
        "Don't let the Sun go down on me - Elton John",
        "Crocodile Rock - Elton John",
        "I'm Still Standing - Elton John"
      ],
      spotifyLink: "https://open.spotify.com/playlist/5qIPWdykxhhnUQFBG0AQkW?si=8b81c0403c724f57"
    },
    { 
      month: "Oct", 
      year: 2025, 
      theme: "Fleetwood Mac", 
      isPast: false,
      songs: [
        "Don't Stop - Fleetwood Mac",
        "Say You Love Me - Fleetwood Mac",
        "Monday Morning - Fleetwood Mac",
        "You Make Loving Fun - Fleetwood Mac",
        "Rhiannon - Fleetwood Mac",
        "The Chain - Fleetwood Mac"
      ],
      spotifyLink: "https://open.spotify.com/playlist/4nMIQCiPObFKvFGNlRVoCL?si=073a318a80884ac7"
    },
    {
      "month": "Nov",
      "year": 2025,
      "theme": "The Cure",
      "isPast": false,
      "songs": [
        "Just Like Heaven - The Cure",
        "Lovesong - The Cure",
        "Boys Don't Cry - The Cure",
        "Close To Me - The Cure",
        "Friday I'm In Love - The Cure",
        "Pictures of You - The Cure"
      ],
      "spotifyLink": "https://open.spotify.com/playlist/34hVN963HetM9Wc0rPugcq?si=88228d3fb1aa446c"
    },
    {
      "month": "Dec",
      "year": 2025,
      "theme": "Xmas",
      "isPast": false,
      "songs": [
        "Last Christmas - Wham!",
        "All I Want For Christmas Is You - Mariah Carey",
        "Fairytale of New York - The Pogues",
        "Driving Home for Christmas - Chris Rea",
        "Do They Know It's Christmas? - Band Aid"
      ],
      "spotifyLink": "https://open.spotify.com/playlist/37i9dQZF1DX0Yxoavh5qJV"
    },
    {
      "month": "Jan",
      "year": 2026,
      "theme": "Sting (and The Police)",
      "isPast": false,
      "songs": [
        "Every Breath You Take - The Police",
        "Englishman In New York - Sting",
        "Roxanne - The Police",
        "Fields of Gold - Sting",
        "Message In A Bottle - The Police"
      ],
      "spotifyLink": "https://open.spotify.com/playlist/37i9dQZF1DWWC4fpGJmfQm"
    },
    {
      "month": "Feb",
      "year": 2026,
      "theme": "Paul Weller and The Jam",
      "isPast": false,
      "songs": [
        "You Do Something To Me - Paul Weller",
        "Changingman - Paul Weller",
        "Broken Stones - Paul Weller",
        "Wild Wood - Paul Weller",
        "The Eton Rifles - The Jam"
      ],
      "spotifyLink": "https://open.spotify.com/playlist/2RVsODdZW3kK6uBvmp6dcF"
    },
    {
      "month": "Mar",
      "year": 2026,
      "theme": "Pink Floyd and Pink",
      "isPast": false,
      "songs": [
        "Comfortably Numb - Pink Floyd",
        "Wish You Were Here - Pink Floyd",
        "Another Break In the Wall - Pink Floyd",
        "Just Give Me a Reason - Pink",
        "Money - Pink Floyd",
        "So What - Pink"
      ],
      "spotifyLink": "https://open.spotify.com/playlist/6gOYPMDAGCq4eYRUYsMTkB"
    },
    {
      "month": "Apr",
      "year": 2026,
      "theme": "Country",
      "isPast": false,
      "songs": [
        "Jolene - Dolly Parton",
        "Take Me Home, Country Roads - John Denver",
        "Before He Cheats - Carrie Underwood",
        "Ring of Fire - Johnny Cash",
        "Wagon Wheel - Darius Rucker"
      ],
      "spotifyLink": "https://open.spotify.com/playlist/37i9dQZF1DX13ZzXoot6Jq"
    },
    {
      "month": "May",
      "year": 2026,
      "theme": "Synthpop Classics",
      "isPast": false,
      "songs": [
        "Don't You Want Me - The Human League",
        "Sweet Dreams (Are Made of This) - Eurythmics",
        "Blue Monday - New Order",
        "Tainted Love - Soft Cell",
        "Enjoy the Silence - Depeche Mode"
      ],
      "spotifyLink": "https://open.spotify.com/playlist/37i9dQZF1DX11KGXrN36GT"
    },
  {
    month: "Jun",
    year: 2026,
    theme: "REM",
    isPast: false,
    songs: [
      "Losing My Religion - R.E.M.",
      "Man on the Moon - R.E.M.",
      "Everybody Hurts - R.E.M.",
      "The One I Love - R.E.M.",
      "It's the End of the World As We Know It (And I Feel Fine) - R.E.M.",
      "Orange Crush - R.E.M."
    ],
    spotifyLink: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO22khGL"
  },
  {
    month: "Jul",
    year: 2026,
    theme: "U2",
    isPast: false,
    songs: [
      "With or Without You - U2",
      "Beautiful Day - U2",
      "I Still Haven't Found What I'm Looking For - U2",
      "Where the Streets Have No Name - U2",
      "Sunday Bloody Sunday - U2",
      "One - U2"
    ],
    spotifyLink: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO3O2kHt"
  },
  {
    month: "Aug",
    year: 2026,
    theme: "George Michael & Wham",
    isPast: false,
    songs: [
      "Careless Whisper - Wham! feat. George Michael",
      "Wake Me Up Before You Go-Go - Wham!",
      "Faith - George Michael",
      "Freedom! '90 - George Michael",
      "Last Christmas - Wham!",
      "Father Figure - George Michael"
    ],
    spotifyLink: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO52vEn4"
  },
  {
    month: "Sep",
    year: 2026,
    theme: "American Grunge",
    isPast: false,
    songs: [
      "Smells Like Teen Spirit - Nirvana",
      "All the Small Things - Blink-182",
      "Pretty Fly (For a White Guy) - The Offspring",
      "What's My Age Again? - Blink-182",
      "Come As You Are - Nirvana",
      "Self Esteem - The Offspring"
    ],
    spotifyLink: "https://open.spotify.com/playlist/37i9dQZF1DZ06evOYNzT4Q"
  },
  {
    month: "Oct",
    year: 2026,
    theme: "Broken Up Beatles",
    isPast: false,
    songs: [
      "Imagine - John Lennon",
      "Live and Let Die - Paul McCartney",
      "My Sweet Lord - George Harrison",
      "Photograph - Ringo Starr",
      "Band on the Run - Paul McCartney",
      "All Things Must Pass - George Harrison"
    ],
    spotifyLink: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0YeTW3"
  },
  {
    month: "Nov",
    year: 2026,
    theme: "Coldplay",
    isPast: false,
    songs: [
      "Yellow - Coldplay",
      "Viva la Vida - Coldplay",
      "Fix You - Coldplay",
      "The Scientist - Coldplay",
      "Paradise - Coldplay",
      "Clocks - Coldplay"
    ],
    spotifyLink: "https://open.spotify.com/playlist/37i9dQZF1DZ06evOYQKBya"
  },
  {
    month: "Dec",
    year: 2026,
    theme: "Bee Gees",
    isPast: false,
    songs: [
      "Stayin' Alive - Bee Gees",
      "How Deep Is Your Love - Bee Gees",
      "Tragedy - Bee Gees",
      "Night Fever - Bee Gees",
      "Jive Talkin' - Bee Gees",
      "More Than a Woman - Bee Gees"
    ],
    spotifyLink: "https://open.spotify.com/playlist/37i9dQZF1DZ06evOalnRkG"
  },
  {
    month: "Jan",
    year: 2027,
    theme: "ABBA",
    isPast: false,
    songs: [
      "Dancing Queen - ABBA",
      "Mamma Mia - ABBA",
      "Gimme! Gimme! Gimme! (A Man After Midnight) - ABBA",
      "Waterloo - ABBA",
      "The Winner Takes It All - ABBA",
      "Take a Chance on Me - ABBA"
    ],
    spotifyLink: "https://open.spotify.com/playlist/37i9dQZF1DZ06evOaAE1wB"
  },
  {
    month: "Feb",
    year: 2027,
    theme: "The Clash",
    isPast: false,
    songs: [
      "Rock the Casbah",
      "Should I stay or should I go",
      "All lost in the supermarket",
      "Train in Vain",
      "London Calling",
      "Guns of Brixton"
    ],
    spotifyLink: "https://open.spotify.com/playlist/37i9dQZF1DZ06evOb0mRTm"
  },
  {
    month: "Mar",
    year: 2027,
    theme: "Space Theme",
    isPast: false,
    songs: [
      "The Eve of the war - Jeff Wayne (War of the Worlds)",
      "Space Oddity - David Bowie",
      "Man on the Moon - R.E.M.",
      "Starlight - Muse",
      "Mr. Blue Sky - Electric Light Orchestra",
      "Sky Full of Stars - Coldplay"
    ],
    spotifyLink: "https://open.spotify.com/playlist/37i9dQZF1DZ06evOCy8u9t"
  }
  ];

  const events = _events.map(item => {
    const monthMap = {
      "Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "Jun": 6,
      "Jul": 7, "Aug": 8, "Sep": 9, "Oct": 10, "Nov": 11, "Dec": 12
    };
    const monthIndex = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].indexOf(item.month);
    // const monthIndex = monthMap[item.month];
    const date = new Date(item.year, monthIndex, 1);
    const dayOfWeek = date.getDay();
    const daysUntilFirstThursday = (4 - dayOfWeek + 7) % 7;
    const secondThursday = new Date(item.year, monthIndex, 1 + daysUntilFirstThursday + 7);
    
    const day = secondThursday.getDate();
    const suffix = (day === 1 || day === 21 || day === 31) ? "st" : (day === 2 || day === 22) ? "nd" : (day === 3 || day === 23) ? "rd" : "th";
    
    const secondThurs = `${item.month} ${day}${suffix}`;

    // const itemDate = new Date(item.year, monthIndex, item.day);
    const currentDate = new Date().setHours(0,0,0,0);
    // const isPast = new Date(item.year, monthIndex, item.day) < currentDate;
    
    const isPast = secondThursday < currentDate;
    // console.log("" +secondThursday+ " "+" " + currentDate+" "+isPast);
    // console.log(itemDate);
    // console.log(isPast2);
    return { ...item, secondThurs, day, isPast };
  });
  // console.log(events)

  // Find next upcoming event
  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-indexed
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getFullYear();
    
    const monthMap = {
      "Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "Jun": 6,
      "Jul": 7, "Aug": 8, "Sep": 9, "Oct": 10, "Nov": 11, "Dec": 12
    };
    
    // Find the next upcoming event
    let upcomingEvent = events.find(event => {
      // return new Date(event.year, monthMap[event.month]-1, event.day) >= currentDate;
      return !event.isPast;
    });
    
    
    // If no upcoming event found, default to the last event
    if (!upcomingEvent && events.length > 0) {
      upcomingEvent = events[events.length - 1];
    }
    
    // Set the default selected date if not already set
    if (!selectedDate && upcomingEvent) {
      setSelectedDate(`${upcomingEvent.month} ${upcomingEvent.year}`);
    }

    console.log(upcomingEvent);
    console.log(selectedDate);
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
                  {/* {event.month} {event.year} - {event.theme} */}
                  {event.secondThurs} - {event.theme}
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
                <p>Whether you're a seasoned musician<br /> or just love to jam, come along every second Thursday of the month for an evening of great tunes and community vibes</p>
                
                {/* <p>All instruments welcome<br />from harmonicas & trumpets,<br />to violins and spoons</p> */}
              </div>
              <div className="info-box">
                <p>Bring your instrument, your voice, or just your love for music! Everyone' welcome—whether you're performing or simply enjoying the show.</p>
                <p>House band available for<br />backing tracks & jam</p>
              </div>
              <div className="info-box highlight">
                <h3>JAM of the Month</h3>
                <p>Themed set of songs<br />Led by house band<br />Available for ALL to play or sing on</p>
                <p>See Schedule and spotify lists for set details</p>
              </div>
              <div className="event-details">
                <h3>Event Details</h3>
                <p><strong>Timings:</strong><br />
                   7-8:30pm (open mic)<br />
                   8:30-9:30pm (jam of the week)<br />
                   9:30-10:30pm (open mic)</p>
                <p><strong>Location:</strong><br />
                   @The Home Guard Club House<br />
                   76a Richmond Park Road</p>
                <p><strong>Entrance:</strong><br />
                   Members - Free, Guess £3 </p>
              </div>
              <div className="social-links">
                <p>Instagram - @sheen_livejam</p>
                {/* <p>Spotify - SheenLiveJam</p> */}
                
                <p>more info - contact Pat: sheenlivejam@gmail.com</p>
                <a 
                  href="https://open.spotify.com/playlist/3xKr0qjSrBBy0RUVVz3BAk?si=891e0a1731e34590"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="spotify-link"
                  >
                  Spotify - All Jam songs to date
                </a>
                <a 
                  href="https://open.spotify.com/playlist/1EFiM08lezscybvXPtxT1w?si=845e13d8bc844ece"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="spotify-link"
                  >
                  Spotify - Upcoming Jam set
                </a>
              </div>
            </div>
          </div>
        )}
        
        {activeSection === 'schedule' && selectedEvent && (
          <div className="schedule-section">
            {/* <h2>{selectedEvent.month} {selectedEvent.year} - {selectedEvent.theme}</h2> */}
            <h2>{selectedEvent.secondThurs} - {selectedEvent.theme}</h2>
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
              <p><strong>Timings:</strong> 7-8:30pm (open mic), 8:30-9:30pm (jam), 9:30-10:30pm (open mic)</p>
              <p><strong>Location:</strong> The Home Guard Club House, 76a Richmond Park Road</p>
              <p><strong>Entrance:</strong> Members - Free, Guests £3</p>
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

          <PhotoGallery/>
          // <div className="photos-section">
          //   <h2>Photos</h2>

          //   <p>Coming soon! Photos from our events will be displayed here.</p>
          //   <div className="placeholder-grid">
          //     {[1, 2, 3, 4, 5, 6].map(num => (
          //       <div key={num} className="photo-placeholder">
          //         <p>Photo {num}</p>
          //       </div>
          //     ))}
          //   </div>
          // </div>
        )}
        {
        
        activeSection === 'poster' && (
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