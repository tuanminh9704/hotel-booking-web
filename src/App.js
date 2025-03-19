
import './App.css';

function App() {

  fetch("http://localhost:8081/hotels")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    
  })
  return (
    <>
      heeh
    </>
  );
}

export default App;
