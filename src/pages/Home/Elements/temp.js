useEffect(() => {
    /* eslint-disable */
    /* JS Utility Classes */

    // Tutorial - https://codyhouse.co/tutorials/how-stacking-cards
    (function () {
        var StackCards = function (element) {
            this.element = element;
            this.items = this.element.getElementsByClassName('js-stack-cards__item');
            this.scrollingFn = false;
            this.scrolling = false;
            initStackCardsEffect(this);
            initStackCardsResize(this);
        };

        function initStackCardsEffect(element) { // use Intersection Observer to trigger animation
            setStackCards(element); // store cards CSS properties
            var observer = new IntersectionObserver(stackCardsCallback.bind(element), { threshold: [0, 1] });
            observer.observe(element.element);
        };

        function initStackCardsResize(element) { // detect resize to reset gallery
            element.element.addEventListener('resize-stack-cards', function () {
                setStackCards(element);
                animateStackCards.bind(element);
            });
        };

        function stackCardsCallback(entries) { // Intersection Observer callback
            if (entries[0].isIntersecting) {
                if (this.scrollingFn) return; // listener for scroll event already added
                stackCardsInitEvent(this);
            } else {
                if (!this.scrollingFn) return; // listener for scroll event already removed
                window.removeEventListener('scroll', this.scrollingFn);
                this.scrollingFn = false;
            }
        };

        function stackCardsInitEvent(element) {
            element.scrollingFn = stackCardsScrolling.bind(element);
            window.addEventListener('scroll', element.scrollingFn);
        };

        function stackCardsScrolling() {
            if (this.scrolling) return;
            this.scrolling = true;
            window.requestAnimationFrame(animateStackCards.bind(this));
        };

        function setStackCards(element) {
            // store wrapper properties
            element.marginY = getComputedStyle(element.element).getPropertyValue('--stack-cards-gap');
            getIntegerFromProperty(element); // convert element.marginY to integer (px value)
            element.elementHeight = element.element.offsetHeight;

            // store card properties
            var cardStyle = getComputedStyle(element.items[0]);
            element.cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue('top')));
            element.cardHeight = Math.floor(parseFloat(cardStyle.getPropertyValue('height')));

            // store window property
            element.windowHeight = window.innerHeight;

            // reset margin + translate values
            if (isNaN(element.marginY)) {
                element.element.style.paddingBottom = '0px';
            } else {
                element.element.style.paddingBottom = (element.marginY * (element.items.length - 1)) + 'px';
            }

            for (var i = 0; i < element.items.length; i++) {
                if (isNaN(element.marginY)) {
                    element.items[i].style.transform = 'none;';
                } else {
                    element.items[i].style.transform = 'translateY(' + element.marginY * i + 'px)';
                }
            }
        };

        function getIntegerFromProperty(element) {
            var node = document.createElement('div');
            node.setAttribute('style', 'opacity:0; visbility: hidden;position: absolute; height:' + element.marginY);
            element.element.appendChild(node);
            element.marginY = parseInt(getComputedStyle(node).getPropertyValue('height'));
            element.element.removeChild(node);
        };

        function animateStackCards() {
            if (isNaN(this.marginY)) { // --stack-cards-gap not defined - do not trigger the effect
                this.scrolling = false;
                return;
            }

            var top = this.element.getBoundingClientRect().top;

            if (this.cardTop - top + this.element.windowHeight - this.elementHeight - this.cardHeight + this.marginY + this.marginY * this.items.length > 0) {
                this.scrolling = false;
                return;
            }

            for (var i = 0; i < this.items.length; i++) { // use only scale
                var scrolling = this.cardTop - top - i * (this.cardHeight + this.marginY);
                if (scrolling > 0) {
                    var scaling = i == this.items.length - 1 ? 1 : (this.cardHeight - scrolling * 0.05) / this.cardHeight;
                    this.items[i].style.transform = 'translateY(' + this.marginY * i + 'px) scale(' + scaling + ')';
                } else {
                    this.items[i].style.transform = 'translateY(' + this.marginY * i + 'px)';
                }
            }

            this.scrolling = false;
        };

        // initialize StackCards object
        var stackCards = document.getElementsByClassName('js-stack-cards'),
            intersectionObserverSupported = ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype),
            reducedMotion = Util.osHasReducedMotion();

        if (stackCards.length > 0 && intersectionObserverSupported && !reducedMotion) {
            var stackCardsArray = [];
            for (var i = 0; i < stackCards.length; i++) {
                (function (i) {
                    stackCardsArray.push(new StackCards(stackCards[i]));
                })(i);
            }

            var resizingId = false,
                customEvent = new CustomEvent('resize-stack-cards');

            window.addEventListener('resize', function () {
                clearTimeout(resizingId);
                resizingId = setTimeout(doneResizing, 500);
            });

            // eslint-disable-next-line no-inner-declarations
            function doneResizing() {
                for (var i = 0; i < stackCardsArray.length; i++) {
                    (function (i) { stackCardsArray[i].element.dispatchEvent(customEvent) })(i);
                };
            };
        }
    }());
}, []);




const cardData = [
    {
        title: "Card One",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        imageSrc: "assets/img/img-1.jpg",
        theme: "default",
        color: "bg-blue-400",
    },
    {
        title: "Card Two",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        imageSrc: "assets/img/img-2.jpg",
        theme: "default",
        color: "bg-blue-600",
    },
    {
        title: "Card Three",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        imageSrc: "assets/img/img-3.jpg",
        theme: "default",
        color: "bg-red-400",
    },
    {
        title: "Card Four",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        imageSrc: "assets/img/img-3.jpg",
        theme: "default",
        color: "bg-blue-700",
    },
];




{
    cardData.map((card, index) => {
        return (
            <li data-theme={card.theme} className={`stack-cards__item ${card.color} rounded-2xl shadow-md  h-[30px] js-stack-cards__item`} key={index}>
                <div className="grid grid-cols-2">
                    <div className=" flex h-full items-center height-100%">
                        <div className="">
                            <h2>{card.title}</h2>
                            <p className="display@xs">{card.description}</p>
                            <p><a href="#0" className="btn btn--accent">Read more</a></p>
                        </div>
                    </div>

                    <div className="col-6 height-100%">
                        {/* <img className="block width-100% height-100% object-cover" src={card.imageSrc} alt="Image description" /> */}
                    </div>
                </div>
            </li>
        )
    })
}