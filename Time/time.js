//时间
var showtime = function () {
    var nowdate = new Date();
    var year = nowdate.getFullYear(),
        month = nowdate.getMonth() + 1,
        date = nowdate.getDate(),
        day = nowdate.getDay(),
        week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        h = nowdate.getHours(),
        m = nowdate.getMinutes(),
        s = nowdate.getSeconds(),
        h = checktime(h),
        m = checktime(m),
        s = checktime(s);
    return year + "年" + month + "月" + date + "日" + week[day] + " " + h + ":" + m + ":" + s;
}
var checktime = function (i) {
    if(i < 10) {
        i = "0" + i;
    }
    return i;
}
var div = document.getElementById("showtime");
setInterval(function () {
    div.innerHTML = showtime();
},1000);
//颜色切换
let h1 = document.getElementById("h1")
let clock = document.getElementById('clock')
function changColors(color){
    document.body.style.background = color;
    clock.style.background = color;
    h1.style.background = color;
    h1.style.background = color
    document.querySelectorAll('span').forEach(function(item){
        item.classList.remove('active');
    })
    event.target.classList.add('active');
}