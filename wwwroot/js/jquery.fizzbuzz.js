(function ($) {
    $.fn.fizzbuzz = function (n) {
        var text =
            (n % 3 == 0 && n % 5 == 0) ? 'fizz-buzz' :
                (n % 3 == 0) ? 'fizz' :
                    (n % 5 == 0) ? 'buzz' : n;
        $(this).text(text);
        return this;
    }
})(jQuery)