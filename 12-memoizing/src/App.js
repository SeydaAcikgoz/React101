import './App.css';
import { useState, useMemo, useCallback } from 'react'
import Header from './components/Header';

function App() {
  const [number, setNumber] = useState(0);
  // const data = useMemo(() => {
  //   return {name : 'Mehmet', number};
  // }, [number]);//number render edildiğinde render edilecek

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1)
  }, []);//header da her zaman render edilmesin diye number burada kullanılmadı onun yerine önceki değeri al ve ertır dendi

  return (
    <div className="App">
      <Header increment={increment} />
      <h1>{number}</h1>
    </div>
  );
}

export default App;
