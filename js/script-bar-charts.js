(function($) {

    var arr = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];
    var a = 0;

    for(var i = 0; i < arr.length; i++) {
        if(!arr[i]) {
            return 0;
        } else {
            var newLi = document.createElement('li');
            output.appendChild(newLi);
            $(newLi).css('left', a + 'px');
            a += 47;
            if(arr[i] <= 5) {
                $(newLi).addClass('green').css('height', arr[i] * 5 + '%');
            }else if(arr[i] > 5 && arr[i] <= 10) {
                $(newLi).addClass('yellow').css('height', arr[i] * 5 + '%');
            } else {
                $(newLi).addClass('red').css('height', arr[i] * 5 + '%');
            }
        }
    }


})(jQuery);

