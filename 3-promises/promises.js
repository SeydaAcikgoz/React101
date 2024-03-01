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

