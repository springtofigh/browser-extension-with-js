const star = document.getElementsByClassName("kksr-legend");

// بررسی اینکه آیا هیچ عنصر قانونی وجود دارد - این شرط باید حتما میبود تا اجرا بشه
//این شرط از ارور خود افزونه هم جلوگیری میکنه
if (star.length > 0) {
    star[0].innerHTML = "4.9/5 - ( کل امتیاز دوره : 36 )"
}



console.log(star);