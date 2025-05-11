import Header from "../components/Header";
import Entry from "../components/Entry";
function App() {
  return (
    <main>
      <Header />
      <Entry
        marker="../images/marker.png"
        country="Japan"
        googleMapLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        title="Mount Fuji"
        dates="12 Jan, 2021 - 24 Jan, 2021"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        image="../images/mountFuji.png"
        alt="mount fuji"
      />
      <Entry
        marker="../images/marker.png"
        country="Nepal"
        googleMapLink="https://g.co/kgs/uY21RLh"
        title="Mount Everest"
        dates="12 Nov, 2022 - 24 Dec, 2022"
        text="Mount Everest is the highest mountain in the world, with a peak at 8,848 meters (29,029 ft) above sea level. It is located in the Himalayas on the border of Nepal and Tibet."
        image="../images/everest.png"
        alt="mount everest"
      />
      <Entry
        marker="../images/marker.png"
        country="India"
        googleMapLink="https://g.co/kgs/2v7Z5D"
        title="Taj Mahal"
        dates="12 Jan, 2023 - 24 Jan, 2023"
        text="The Taj Mahal is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) in memory of his favorite wife, Mumtaz Mahal."
        image="../images/taj-mahal.png"
        alt="taj mahal"
      />
    </main>
    //Alternative and best method is done below
    /*
import travelData from './data.js';

function App() {
  return (
    <div>
      {travelData.map((item) => (
        <Entry
          key={item.id}
          marker={item.marker}
          country={item.country}
          googleMapLink={item.googleMapLink}
          title={item.title}
          dates={item.dates}
          description={item.description}
          image={item.image}
          alt={item.alt}
        />
      ))}
    </div>
  );
}

    */
  );
}
export default App;
