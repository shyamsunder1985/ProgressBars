 var ractive = new Ractive({
    el: document.body,
    template: '#template',
    data: {
        progressbars: [
            { name: 'First Bar', value: 0 },
            { name: 'Second Bar', value: 0 },
            { name: 'Third Bar', value: 0 }
        ],
        amounts: [ -25, -10, +10, +25 ],
        roundOff: function (d) {
          
            if(d<=0)
            {
             d=0;  
            }
            return d;
     },
    setValue:function(d)
        { 
            if(d<=0)
            {
                d=0;
            }

            return d;
        }
    },
    adjust: function ( d ) {
        var selected = this.get( 'selectedProgress' );
        if ( selected == null ) return;        
        var keypath = 'progressbars[' + selected + '].value';   
        if((this.get(keypath))<=0)
        {
            this.set(keypath,0)
        }
        this.add( keypath, d );
    }
});