import Tabs from './components/Tabs'
import './App.css';

function App() {

  const tabs = [
    {
      label: "Tab 1",
      content: "This is content for Tab 1",
      callback: () => "Hello callback function Tab 1!"
    },
    {
      label: "Tab 2",
      content: "This is content for Tab 2",
    },
    {
      label: "Tab 3",
      content: "This is content for Tab 3",
      callback: () => "Hello callback function Tab 3!"
    }
  ];
  return (
    <div className="app">
      <Tabs setOfTabs={tabs}/>
    </div>
  );
}

export default App;
