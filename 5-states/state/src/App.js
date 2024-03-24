import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {
  const [name, setName] = useState("Mehmet")
  const [age, setAge] = useState(29)
  const [friends, setFriends] = useState(["Ahmet", "Murat"])

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2> {age}</h2>

      <button onClick={() => setName("Ahmet")}>Change name</button>
      <button onClick={() => setAge(25)}>Change age</button>

      <hr></hr>

      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key="index">{friend}</div>
      ))}

      <button onClick={() => setFriends([...friends,"Ayşe"])}>Add new friend</button>

    </div>
  );
}
// eğer array olarak tanımlanmış state değitirilecek ise o zaman yeni değer yine array olamlı


export default App;
