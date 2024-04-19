let son1 = +prompt("son kiriting")

let son2 = +prompt("ikkinchi son kiriting")

let amal = prompt(`bitta amal tanlang.
1 . qo'shish 
2 . ayirish 
3 . ko'paytirish 
4 . bo'lish`)

if ( amal === "1" ) {
    alert ("natija: " + (son1 + son2) )
} else if ( amal === "2") {
    alert ("ayirma: " + (son1 - son2) )
} else if ( amal === "3" ) {
    alert ("ko'paytiruv: " + (son1 * son2) )
} else if ( amal === "4" ) {
    alert("bo'luv: " + (son1 / son2) )
} else {
    alert("noto'g'ri! boshidan sonlar kiriting")
}