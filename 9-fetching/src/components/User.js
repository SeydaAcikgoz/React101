import {useEffect, useState} from 'react'

function User() {
    const [users,SetUsers]=useState([]);
    const [isLoading, SetIsLoading] = useState(true);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then((data) => SetUsers(data))
        .catch((e) =>console.log(e))
        .finally(() =>SetIsLoading(false))
    },[])
  return (
    <div>
        <h1>Users</h1>
          {isLoading && <div>Loading ...</div>}
        {
              users.map((user) => 
                <div key={user.id}>{user.name}</div>)
        }
    </div>
  )
}

export default User