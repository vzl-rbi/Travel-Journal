import Header from '../components/Header';
import Entry from '../components/Entry';
import data from './data';
function App() {
    const entryData = data.map((entry) =>
        <Entry
        key={entry.id}
        entry={entry} //alternative method is //{...entry} spread operator // 
        /*this method make in Entry.jsx like this 
        className="main-image"
        src={props.img.src}
        alt={props.img.alt} 
        instead of 
        className="main-image"
        src={props.entry.img.src}
        alt={props.entry.img.alt}
        */
        
        />
            
    );
    //const dataList = data.map((listData, index) =>
        //<props
            //key={index} //or Alternatively, key={listData.id} use this insted of index and remove index from map function
           /* marker={listData.marker}
            country={listData.country}
            googleMapLink={listData.googleMapLink}
            title={listData.title}
            dates={listData.dates}
            text={listData.text}
            image={listData.img.src}
            alt={listData.alt}
           */
       // />
    //);
    
    return (
        <>
        <Header />
        <main className="container">
            {entryData}
        </main>
        </>
        

    )
}
export default App;