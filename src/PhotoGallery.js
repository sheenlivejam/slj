import React from 'react';

// Import all images from the photos directory
// Note: You'll need to manually import each image
import HeyJude2 from './photos/HeyJude2.jpeg';
import Cowboys from './photos/Cowboys.jpeg';
import DennisArmond from './photos/DennisArmond.jpeg';
import SoloPiano from './photos/SoloPiano.jpeg';
import AntBand from './photos/AntBand.jpeg';
import HeyJude1 from './photos/HeyJude1.jpeg';
import Kaviani from './photos/Kaviani.jpeg';
import Brian from './photos/Brian.jpeg';
import Crowd from './photos/Crowd.jpeg';
import EdFiddle from './photos/EdFiddle.jpeg';
import DennisCowboy from './photos/DennisCowboy.jpeg';
import LiveJam2 from './photos/LiveJam2.jpeg';
import PatCowboy from './photos/PatCowboy.jpeg';
import HouseOfSLJ from './photos/HouseOfSLJ.jpeg';
import GordonBass from './photos/GordonBass.jpeg';
import MiaOli from './photos/MiaOli.jpeg';
import BrianPat from './photos/BrianPat.jpeg';
import LiveJam1 from './photos/LiveJam1.jpeg';
import BandNell from './photos/BandNell.jpeg';
import HereComesTheSun from './photos/HereComesTheSun.jpeg';
import Dancing from './photos/Dancing.jpeg';
import LuAlexJon from './photos/LuAlexJon.jpeg';
import Audience from './photos/Audience.jpeg';
import BrianAndBand from './photos/BrianAndBand.jpeg';

const PhotoGallery = () => {
  // Create an array of photo objects with imported images and filenames
  const photos = [
    { src: HeyJude2, name: 'HeyJude2.jpeg' },
    { src: Cowboys, name: 'Cowboys.jpeg' },
    { src: DennisArmond, name: 'DennisArmond.jpeg' },
    { src: SoloPiano, name: 'SoloPiano.jpeg' },
    { src: AntBand, name: 'AntBand.jpeg' },
    { src: HeyJude1, name: 'HeyJude1.jpeg' },
    { src: Kaviani, name: 'Kaviani.jpeg' },
    { src: Brian, name: 'Brian.jpeg' },
    { src: Crowd, name: 'Crowd.jpeg' },
    { src: EdFiddle, name: 'EdFiddle.jpeg' },
    { src: DennisCowboy, name: 'DennisCowboy.jpeg' },
    { src: LiveJam2, name: 'LiveJam2.jpeg' },
    { src: PatCowboy, name: 'PatCowboy.jpeg' },
    { src: HouseOfSLJ, name: 'HouseOfSLJ.jpeg' },
    { src: GordonBass, name: 'GordonBass.jpeg' },
    { src: MiaOli, name: 'MiaOli.jpeg' },
    { src: BrianPat, name: 'BrianPat.jpeg' },
    { src: LiveJam1, name: 'LiveJam1.jpeg' },
    { src: BandNell, name: 'BandNell.jpeg' },
    { src: HereComesTheSun, name: 'HereComesTheSun.jpeg' },
    { src: Dancing, name: 'Dancing.jpeg' },
    { src: LuAlexJon, name: 'LuAlexJon.jpeg' },
    { src: Audience, name: 'Audience.jpeg' },
    { src: BrianAndBand, name: 'BrianAndBand.jpeg' }
  ];

  // Function to create a title from camelCase filename
  const createTitleFromFilename = (filename) => {
    // Remove file extension
    const nameWithoutExtension = filename.split('.')[0];
    
    // Split camelCase into words
    return nameWithoutExtension
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([0-9])([a-zA-Z])/g, '$1 $2')
      .replace(/([a-zA-Z])([0-9])/g, '$1 $2')
      .split(/[_-]/) // Also split on underscores and hyphens
      .map(word => word.trim())
      .filter(word => word.length > 0)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Photos</h2>
      
      <a 
        href="https://www.instagram.com/sheen_livejam?igsh=MWJmY2JvbWQwYnFpYQ%3D%3D&utm_source=qr"
        target="_blank" 
        rel="noopener noreferrer" 
        className="insta-link"
        >
        See Instagram @sheen_livejam for more photos and videos
      </a>
      <br/>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => {
          const title = createTitleFromFilename(photo.name);
          
          return (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={photo.src}
                alt={title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGallery;
