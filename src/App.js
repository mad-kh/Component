import logo from "./logo.svg";
import "./App.css";

import Profilephoto from "./components/Profile/ProfilePhoto";
import Address from "./components/Profile/Address";
import FullName from "./components/Profile/FullName";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <Profilephoto />
        </>
        <>
          <FullName />
        </>
        <>
          <Address />
        </>
      </header>
    </div>
  );
}

export default App;
