const app= {

    link: 'http://testapi.mathieusiaudeau.fr/api/ban',

    init: function(){
        app.createBan();
    },

    loadBan: function(){

        let config = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };

        const request = fetch(app.link, config);

        request.then(function(response){
            return response.json();
        })
        .then(function(data) {
            console.log(data)
        })

    },

    createBan: function() {
        app.loadBan();
        //const indis = document.querySelector('.indiscrete');
        //const a = document.createElement('a')
       // const img = document.createElement('img')
        //img.setAttribute('src', )
    }
}

document.addEventListener('DOMContentLoaded', app.init);