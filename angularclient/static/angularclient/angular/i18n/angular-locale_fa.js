angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {"DATETIME_FORMATS":{"MONTH":["ژانویهٔ","فوریهٔ","مارس","آوریل","مهٔ","ژوئن","ژوئیهٔ","اوت","سپتامبر","اکتبر","نوامبر","دسامبر"],"SHORTMONTH":["ژانویهٔ","فوریهٔ","مارس","آوریل","مهٔ","ژوئن","ژوئیهٔ","اوت","سپتامبر","اکتبر","نوامبر","دسامبر"],"DAY":["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],"SHORTDAY":["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],"AMPMS":["قبل‌ازظهر","بعدازظهر"],"medium":"d MMM y H:mm:ss","short":"yyyy/M/d H:mm","fullDate":"EEEE d MMMM y","longDate":"d MMMM y","mediumDate":"d MMM y","shortDate":"yyyy/M/d","mediumTime":"H:mm:ss","shortTime":"H:mm"},"NUMBER_FORMATS":{"DECIMAL_SEP":"٫","GROUP_SEP":"٬","PATTERNS":[{"minInt":1,"minFrac":0,"macFrac":0,"posPre":"","posSuf":"","negPre":"-","negSuf":"","gSize":3,"lgSize":3,"maxFrac":3},{"minInt":1,"minFrac":2,"macFrac":0,"posPre":"‎\u00A4","posSuf":"","negPre":"‎(\u00A4","negSuf":")","gSize":3,"lgSize":3,"maxFrac":2}],"CURRENCY_SYM":"Rial"},"pluralCat":function (n) {  return PLURAL_CATEGORY.OTHER;},"id":"fa"});
}]);