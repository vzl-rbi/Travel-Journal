import Header from "../components/Header";
import Entry from "../components/Entry";
import data from "./data";
function App() {
  const entryData = data.map((entry) => (
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
  ));

  return (
    <>
      <Header />
      <main className="container">{entryData}</main>
    </>
  );
}
export default App;
