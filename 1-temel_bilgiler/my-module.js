function topla(a, b) {
    return a + b;
}
/*
const topla = function topla(a, b) {
    return a + b;
}

const topla = topla(a, b) => {
    return a + b;
}

const topla = (a, b) => a + b;


bu  şekilde de yazılabilir
*/

const hello = () => {
    console.log("Hello")
};

export {
    hello, topla
};//tek tek fonk başına yazmak yerine burada toplu export edilebilir

// export default topla;
// böyle ya da fonk başına export yazılarak fonksiyon dışa aktarılabilir.

export const text="text";

export const user = {
    name : "Seyda",
    surname : "Acikgoz",
}