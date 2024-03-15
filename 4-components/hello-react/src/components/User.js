import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends ,address}) {
    if(!isLoggedIn){
        return <div>Giriş yapmadınız.</div>
    }
    return (
        <>
            <h1>{`${name} ${surname} (${age})`}
            </h1>

            {address.title} {address.zip}
            <br />
            <br />

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

User.defaultProps = {
    name : "İsimsiz",
    isLoggedIn : false
}   //eğer buradaki değişkenlere değer gönderilmemiş ise bu değerler gönderilmiş varsayılır

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
