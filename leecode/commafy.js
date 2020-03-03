function commafy(num) {
    num = num + '';
    var reg = /(-?d+)(d{3})/;

        num = num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    return num;
}
console.log(commafy("23244123495Q"))