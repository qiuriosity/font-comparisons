import React, { useEffect, useState } from 'react';
import FontCard from './components/FontCard';

const API_KEY = 'AIzaSyB5efjE1DBR-nY5A0UlVb0GR6bRvUSdclE';

const FontList = ({ searchQuery }) => {
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`);
      const { items } = await res.json();
      const filtered = items.filter(item => item.family.toLowerCase().startsWith(searchQuery.toLowerCase()));
      setFonts(filtered);
    };
    fetchData();
    // console.log('hello');
    // console.log(searchQuery);
    // console.log(fonts);
  }, [searchQuery])

  return (
    <>
      {fonts.map((font) => (
        <p>{font.family}</p>
      ))}
    </>
  )
}

export default FontList;