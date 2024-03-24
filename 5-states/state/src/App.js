import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {
  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);
  const [address, setAddress] = useState({ title: "İstanbul", zip: 29344 });

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

      <button onClick={() => setFriends([...friends, "Ayşe"])}>Add new friend</button>

      <hr></hr>

      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>
      <button onClick={() => setAddress({ ...address, title: "Ankara" })}>Change Address</button>
    </div>
  );
}
// eğer array olarak tanımlanmış state değitirilecek ise o zaman yeni değer yine array olamlı
//array state lerde [...friends,"Ayşe"] öncekilere Ayşe ekle demektir
//state lerde set işlemi yapışırken dönen değer tipi ilk tanımlanan değer tipi ile aynı olamlı
//object state lerde set yapılırken {...address, title: "Ankara"} böyle yapılırsa zip değişkeni önceki değerde kalır title değişkeni yeni değeri alır

export default App;
