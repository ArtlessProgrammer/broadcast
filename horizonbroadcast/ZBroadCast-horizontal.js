(function($) {
    $.fn.RenderBroadCast = function(opts) {
        var defaults = {
            movelength: 1
          , moveinterval: 10
          , scrolltype: 1//不溢出容器不滚动
        }
        var options = $.extend(defaults, opts)
            , container = this[0]
            , content = this.children()[0]
            , contentWidth
            , timecounter

        function fnIni() {
            container.style.overflow = "hidden"
            contentWidth = content.scrollWidth
            if (content.scrollWidth <= container.offsetWidth) {
                if (options.scrolltype == 1) {
                    return
                } else {
                    content.style.width = container.offsetWidth + "px"
                    contentWidth = container.offsetWidth
                }
            }
            content.innerHTML += content.innerHTML
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
            if (container.scrollLeft > contentWidth) {
                container.scrollLeft = 2//用于微调无缝播报的效果，不同值会有卡顿效果
            } else {
                container.scrollLeft += options.movelength
            }
        }
        fnIni()
    }
})(jQuery)