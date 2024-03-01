const users = ["Mehmet", "Ahmet", "Murat"];

//push:dizinin sonuna eleman ekler
users.push("Ali");
console.log(users);

//map:dizi içinde dolaşmayı sağlar
users.map((item) => {
    console.log(item)
});

const persons = [
    {
        name: "Mehmet",
        age:20,
    },
    {
        name: "Mehmet",
        age: 30,
    },
    {
        name: "Ali",
        age: 30,
    },
    {
        name: "Ayşe",
        age: 10,
    }
];
persons.map((item) => {
    console.log(item.name)
});//objeler de bu şekilde kullanılabilir

//find:dizi içinden istenilen elemanı bulmayı sağlar.
const result = persons.find((item) => item.name === "Mehmet")
console.log(result);
const result2 = persons.find((item) => item.name === "Mehmete")
console.log(result2);
const result3 = persons.find((item) => item.name === "Mehmet" && item.age >20)
console.log(result3);

//filter:filtreleme yapar.
console.log(persons.filter((item) => item.name == "Mehmet"));
console.log(persons.filter((item) => item.name == "Mehmet" && item.age <21));
console.log(persons.filter(({name,age}) => name == "Mehmet" && age < 21));

//some:istenilen özellikte eleman dizide var mı diye kontrol eder
console.log(persons.some((item) => item.age < 10));
console.log(persons.some((item) => item.age < 20));
