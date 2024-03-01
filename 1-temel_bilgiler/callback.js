setTimeout(() => {
    console.log("Merhaba")
}, 2000);
//2 saniye sonra fonksiyon çalışır


setInterval(() => {
    console.log("Her saniye çalışırım")
}, 1000);
//Durdurana kadar her saniye çalışır


const merhabaDe = (cb) => {
    cb();
}

merhabaDe(() => {
    console.log("Merhaba")
});
//parametre olarak fonksiyon gönderildi

//hazır API den sırayla veri çekme
import fetch from "node-fetch";
fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => console.log(users));
//API den dönen response dataya gelir.json formatına döndürülür ve ekrana basılır

fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => {
        console.log("Users yüklendi", users);

        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((data) => data.json())
            .then((post) => console.log("Post 1 yüklendi", post));

        fetch("https://jsonplaceholder.typicode.com/posts/2")
            .then((data) => data.json())
            .then((post) => console.log("Post 2 yüklendi", post));
    });
//API den önce userler sonra post gelir.Ayrı ayrı yazılırsa farklı sürelerde dönebileceği için sırayla gelemeyebilir.Eğer user a bağımlı bir işlem yapılacaksa böyle yapılması ile sırayla gelir.
//önce user sonra post1 en son post2 geldi

//async-await
async function getData() {
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    const post2 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();

    console.log("Users", users);
    console.log("post1", post1);
    console.log("post2", post2);
}//bu şekilde yazılırsa getData() fonksiyonu çağırılara çalışır. 
//yazılan sırayla çalışır.
getData();

(async () => {
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    const post2 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();

    console.log("Users", users);
    console.log("post1", post1);
    console.log("post2", post2);
})();//fonksiyon çağrılmadan çalışır.

//Json formatında veri dönerken axios de kullanılabilir
import axios from "axios";
(async () => {
    const { data: users } = await (
        axios("https://jsonplaceholder.typicode.com/users")
    );

    const { data: post1 } = await (
        axios("https://jsonplaceholder.typicode.com/posts/1")
    );

    const { data: post2 } = await (
        axios("https://jsonplaceholder.typicode.com/posts/2")
    );

    console.log("Users", users);
    console.log("post1", post1);
    console.log("post2", post2);
})();//fonksiyon çağrılmadan çalışır.