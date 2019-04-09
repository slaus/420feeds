(function () {
        var mySlider, cWrapper, ul, li;
        var current = 0;
        var timeOut = 3000;
        var intervalHandler;
        var automaticStart = true;

        init();

        function init() {
            mySlider = document.querySelector(".my-slider");
            cWrapper = document.querySelector(".my-slider > .content-wrapper");
            ul = document.querySelector(".my-slider > .content-wrapper > ul");
            li = document.querySelectorAll(".my-slider > .content-wrapper > ul > li");

            if (!mySlider || !cWrapper || !ul || !li.length)
                return;

            ul.style.width = cWrapper.offsetWidth * li.length;
            ul.style.height = cWrapper.offsetHeight;

            bindEvents();
            startSlider();
        }

        function startSlider() {
            if (automaticStart)
                intervalHandler = setInterval(next, timeOut);
        }

        function next() {
            if (current + 1 >= li.length) {
                current = -1;
            }

            ul.style.marginLeft = '-' + (li[0].offsetWidth * ++current);
        }

        function prev() {
            if (current - 1 < 0) {
                current = li.length;
            }

            ul.style.marginLeft = '-' + (li[0].offsetWidth * --current);
        }

        function bindEvents() {
            mySlider.addEventListener('mouseover', function () {
                clearInterval(intervalHandler);
            });

            mySlider.addEventListener('mouseout', startSlider);

            var prevBtn = document.querySelector(".my-slider > .control-btns a.prev");
            var nextBtn = document.querySelector(".my-slider > .control-btns a.next");
            if (prevBtn)
                prevBtn.addEventListener('click', prev);

            if (nextBtn)
                nextBtn.addEventListener('click', next);
        }
    })();