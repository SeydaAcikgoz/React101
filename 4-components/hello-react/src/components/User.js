function User({ name, surname, age, isLoggedIn, friends }) {
    return (
        <>
            <h1>{isLoggedIn ? `${name} ${surname} (${age})`
                : "Giriş yapmadınız."}
            </h1>
            {friends.map((friend) => (
                <div key={friend.id}>
                    {friend.id}-{friend.name}
                </div> //eğer burada extra işlemler yapılacaksa div return ile döndürülmeli
            ))} 
        </>
    )
}

// function User(props) {
//     return (
//         <h1>
//             {
//                 props.isLoggedIn ? `${props.name} ${props.surname}`
//                     : "Giriş yapmadınız."
//             }
//         </h1>
//     )
// } böyle de yazılabilir

export default User;
