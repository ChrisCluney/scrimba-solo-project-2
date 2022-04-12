import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import JournalEntry from "./Components/JournalEntry";
import data from "./data";
export default function App() {
  const JournalEntrys = data.map((item) => {
    return <JournalEntry key={item.id} item={item} />;
  });
  return (
    <div>
      <Header />

      {JournalEntrys}
    </div>
  );
}
