const getComments = () => {
    return new Promise((resolve, reject) => {
        console.log("comments");

        resolve("Resolve edildi");
    });
};
//resolve: işlem gerçekleşti al sana data
//reject: kod çalışırken hata oluştu ve ben reddettim
//bir promise resolve olduğunda then e,reject olduğunda catch ye düşer
getComments().then((data) => console.log(data)).catch((e) => console.log(e));

const getComments2 = (number) => {
    return new Promise((resolve, reject) => {

        if(number ===1){
            resolve({text:"Selam"})
        }else{
            reject({ text: "Bir hata oluştu" })
        }

    });
};

getComments2(2).then((data) => console.log(data)).catch((e) => console.log(e));

import axios from "axios";

const getUsers = () => {
    return new Promise(async (resolve, reject) => {

            const { data } = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);
    });
};


const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {

        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/"+post_id);
        resolve(data);
    });
};

(async () => {
    await getUsers().then((data) => console.log(data)).catch((e) => console.log(e));

    await getPost(1).then((data) => console.log(data)).catch((e) => console.log(e));
})();

(async () => {
    const userr = await getUsers();
    const postt = await getPost(2);

    console.log(userr);
    console.log(postt);

})();//yukarıdaki gibi de çağrılabilir bu şekilde de çağrılabilir
