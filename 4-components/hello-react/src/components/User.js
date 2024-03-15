import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends }) {
    return (
        <>
            <h1>{isLoggedIn ? `${name} ${surname} (${age})`
                : "Giriş yapmadınız."}
            </h1>
            {friends &&
            friends.map((friend) => (
                <div key={friend.id}>
                    {friend.id}-{friend.name}
                </div> //eğer burada extra işlemler yapılacaksa div return ile döndürülmeli
            ))} 
        </>
    )
}
User.propTypes = {
    name: PropTypes.string.isRequired, //zorunlu hale geldi
    surname: PropTypes.string.isRequired,   //zorunlu hale geldi
    isLoggedIn: PropTypes.bool.isRequired,  //zorunlu hale geldi
    age: PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,       //herhangi bir matematiksel işlem yapılmayacağı için hem number hem de string tanımladık
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    }) ,
} //özelliklerin türleri belirlendi.eğer burada belirlenen tür gönderilmezse uyarı verir

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
