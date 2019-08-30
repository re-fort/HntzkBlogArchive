// Vue Filter
Vue.filter('YYYYMM_JP', (ymd) => ymd ? ymd.substr(0, 4) + '年' + ymd.substr(4, 2) + '月' : '')
Vue.filter('YYYY.MM.DD', (ymd) => ymd ? ymd.substr(0, 4) + '.' + ymd.substr(4, 2) + '.' + ymd.substr(6, 2) : '')
