import {useEffect, useState} from 'react'

import {} from './style.css'
import Form from './Form'
import List from './List'

function Contacts() {
    const [contacts,setContacts] = useState([
        {
            fullname:"Mehmet",
            phone_number:1234
        }, {
            fullname: "Ayşe",
            phone_number: 5678
        }, {
            fullname: "Ali",
            phone_number: 9123
        }
    ]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

  return (
      <div id='container'>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>

      </div>
  )
}

export default Contacts