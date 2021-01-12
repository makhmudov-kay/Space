for (let i = 0; i < $("img").length; i++) {
    $("img").eq(i).delay(i * 500).fadeIn(500)
}
for (let i = 1; i < 13; i++) {
    $(`img:eq(${-i})`).delay(i * 1000).fadeOut(500) 
}