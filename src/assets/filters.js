import Vue from "vue";

Vue.filter("formatDateTime", function (d) {
    let date = new Date(d);
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    let hh = date.getHours() % 24 ;
    if (hh < 10) hh = '0' + hh;

    let mi = date.getMinutes() % 60  ;
    if (mi < 10) mi = '0' + mi;

    return dd + '.' + mm + '.' + yy + " \n " + hh + ':' + mi;

} );

Vue.filter("formatTime", function (d) {
    let date = new Date(d);
    let hh = date.getHours() % 24 ;
    if (hh < 10) hh = '0' + hh;

    let mi = date.getMinutes() % 60  ;
    if (mi < 10) mi = '0' + mi;

    return  hh + ':' + mi;

} );

Vue.filter("formatStatus", function (s) {
    switch(s) {
        case '1t':
        return '1 тайм';
            break;
        case '2t':
            return '2 тайм';
            break;
        case 'ht':
            return 'перерыв';
            break;
        case 'ft':
            return 'Итог';
            break;
        default:
            break;
    }
} );
Vue.filter("formatStatusList", function (s) {
    switch(s) {
        case '1t':
            return '1Т';
            break;
        case '2t':
            return '2Т';
            break;
        case 'ht':
            return 'П';
            break;
        case 'ft':
            return 'Итог';
            break;
        default:
            break;
    }
} );