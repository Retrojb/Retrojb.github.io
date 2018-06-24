(function(){

    var bigStack ={
        navToggle:document.querySelector('.nav-toogle'),
        nav:document.querySelector('nav'),

        doToggle: function(e){
            e.preventDefault();
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        }
    };
    bigStack.navToggle.addEventListener('click', function(e){
        bigStack.doToggle(e);
        });
        bigStack.nav.addEventListener('click', function(e) {
            bigStack.doToggle(e);
        });
    });