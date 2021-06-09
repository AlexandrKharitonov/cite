(function () {
    function Listen() {
        
        console.log(2);
        this.init();
    }
    window['Listen'] = Listen;
    Listen.prototype = {
        init: function () {
            this.startListen();
            console.log(this);
        },

        startListen: function () {
            document.addEventListener('keydown', this );
            document.addEventListener('keyup', this);
        },

        hanldeEv: function (e) {
            console.log(e)
        }
    }
})();
//new Listen();