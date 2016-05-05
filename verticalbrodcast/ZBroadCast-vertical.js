;(function($) {
    $.fn.RenderBroadCast = function(opts) {
        var defaults = {
            movelength: 1
          , moveinterval: 10
          , scrolltype: 1//不溢出容器不滚动
        }
        var options = $.extend(defaults, opts)
            , container = this[0]
            , content = this.children()[0]
            , contentHeight = content.offsetHeight
            , timecounter

        function fnIni() {
            container.style.overflow = "hidden"
            if (content.offsetHeight <= container.offsetHeight) {
                if (options.scrolltype == 1) {
                    return
                } else {
                    content.style.height = container.offsetHeight + "px"
                    contentHeight = container.offsetHeight 
                }
            }
            container.innerHTML += container.innerHTML
            container.onmouseover = function() {
                clearInterval(timecounter)
            }
            container.onmouseout = function() {
                timecounter = setInterval(function() {
                    fnPlay()
                }, options.moveinterval)
            }
            timecounter = setInterval(function() {
                fnPlay()
            }, options.moveinterval)
        }

        function fnPlay() {
            if (container.scrollTop >= contentHeight) {
                container.scrollTop = 0
            } else {
                container.scrollTop += options.movelength
            }
        }
        fnIni()
    }
})(jQuery)