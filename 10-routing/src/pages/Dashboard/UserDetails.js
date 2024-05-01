import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'

function UserDetails() {
    const { id } = useParams();
    //console.log(id);
    const [user, setUser] = useState(location.state);
    const location = useLocation();

    console.log(location);

    useEffect(() => {
        if (!user?.id) {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => res.json())
                .then((data) => setUser(data));
        }
    }, [id, user]);

    return (
        <div>
            <h2>Kullanıcı Detayları</h2>
            {
                user &&
                <pre>{
                    JSON.stringify(user, null, 2)
                }</pre>
            }

            <Link to={`/users/${Number(id) + 1}`}>Sonraki Kullanıcı ({parseInt(id) + 1})</Link>
        </div>
    );
}

export default UserDetails