import './App.css';
import Header from './components/Header';
import React from "react";
import User from './components/User';

const name = "Şeyda";
const surname = "Açıkgöz";
const isLoggedIn = false;
const friends = [
  {
    id : 1,
    name : 'Ayşe'
  },
  {
    id : 2,
    name: 'Fatma'
  },
  {
    id : 3,
    name: 'Zehra'
  },
  {
    id : 4,
    name: 'Ali'
  }
];

function App() {
  // return React.createElement("div",null,"Hello"); //JSX kullanmadan da yapılabilir.fakat div içinde birden fazla element olduğunda kod gereksiz uzayacağı için JSX kullanıyoruz.

  return (
    <>
      <User name="Şeyda" surname="Açıkgöz" isLoggedIn={true} age={20} friends={friends}  address={{
          title : "Ataşehir/İstanbul",
          zip:1585
        }}/>
    </>

    

    // <div className="App">
    //   <h1>Hello World</h1>
    //   <Header></Header>
    //   <Header />
    //   <p className='xyz'>lorem ipsum</p>
    //   <label htmlFor='myinput'>
    //     Name
    //     <input id='myinput' />
    //   </label>
    //   <h1>{name}{surname}</h1>{/*componentlerde değişken render etme */}
    //   <h1>{`Ben ${name} ${surname}`}</h1>

    //   <h1>{isLoggedIn && `Ben ${name} ${surname}`}</h1>
    //   {!isLoggedIn && "Giriş yapmadınız."}{/*koşullu render işlemi */}

    //   <h1>
    //     {isLoggedIn ? `Ben ${name} ${surname}` : "Giriş yapmadınız."}{/*koşullu render işlemi böyle de yazılabilir */}
    //   </h1>
    // </div>


    //class ifadesi js ye özgü olduğu için className kullanılmalı
    //for ifadesi js ye özgü olduğu için htmlFor kullanılmalı

    //componentlerin dışında kapsayıcı element(<div> </div> ya da fragment <></>(<React.Fragment></React.Fragment>)) kullanılmalı
    // <React.Fragment>
    //   <h1>Hello World</h1>
    //   <Header></Header>
    //   <Header />
    // </React.Fragment>
  );
}

export default App;
