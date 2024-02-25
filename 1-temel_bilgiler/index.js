console.log("Hello node")
//HAZIR FONKSIYON KULLANMA
/**
 * ilgili fonk install edildikten sonra dependencies kısmına eklenir.daha sonra bu şekilde kullanılabilir.
 
var slugify=require('slugify') //burada fonksiyon tanımlandı
//bu fonksiyon metin içindeki boşluk olan yerlere default olarak '-' ,parametre verilirse de verilen parametreyi yazar
const title = slugify('some string') 
console.log(title)

const title2 = slugify('some string',"*")
console.log(title2)
*/

import slugify from "slugify"
/**bu şekilde import edilerek de hazır fonk kullaniabilir.package-json da "type": "module", eklenmeli */
const title = slugify('some string')
console.log(title)

//Oluşturulan Fonksiyonu Kullanma
/*
import Topla from './my-module.js'
console.log(Topla(2,4))
*/
import { user, text, topla , hello } from './my-module.js'
console.log(topla(2, 4))
hello();
console.log(text);
console.log(user);
