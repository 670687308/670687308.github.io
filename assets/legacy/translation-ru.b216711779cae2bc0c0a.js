(window.legacyWebpackJsonp=window.legacyWebpackJsonp||[]).push([[18],{174:function(e,n,M){M(0),e.exports=M(175)},175:function(e,n,M){"use strict";M.r(n);M(176)},176:function(e,n,M){"use strict";angular.module("ngLocale",[],["$provide",function(e){var n="one",M="few",r="many",a="other";e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],ERANAMES:["до н. э.","н. э."],ERAS:["до н. э.","н. э."],FIRSTDAYOFWEEK:0,MONTH:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],SHORTDAY:["вс","пн","вт","ср","чт","пт","сб"],SHORTMONTH:["янв.","февр.","марта","апр.","мая","июня","июля","авг.","сент.","окт.","нояб.","дек."],WEEKENDRANGE:[5,6],fullDate:"EEEE, d MMMM y 'г'.",longDate:"d MMMM y 'г'.",medium:"d MMM y 'г'. H:mm:ss",mediumDate:"d MMM y 'г'.",mediumTime:"H:mm:ss",short:"dd.MM.yy H:mm",shortDate:"dd.MM.yy",shortTime:"H:mm"},NUMBER_FORMATS:{CURRENCY_SYM:"руб.",DECIMAL_SEP:",",GROUP_SEP:" ",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-",negSuf:" ¤",posPre:"",posSuf:" ¤"}]},id:"ru",pluralCat:function(e,i){var t=0|e,o=function(e,n){var M=n;void 0===M&&(M=Math.min(function(e){var n=(e+="").indexOf(".");return-1==n?0:e.length-n-1}(e),3));var r=Math.pow(10,M);return{v:M,f:(e*r|0)%r}}(e,i);return 0==o.v&&t%10==1&&t%100!=11?n:0==o.v&&t%10>=2&&t%10<=4&&(t%100<12||t%100>14)?M:0==o.v&&t%10==0||0==o.v&&t%10>=5&&t%10<=9||0==o.v&&t%100>=11&&t%100<=14?r:a}})}])}},[[174,0]]]);
//# sourceMappingURL=translation-ru.b216711779cae2bc0c0a.js.map