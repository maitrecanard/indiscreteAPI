const app= {

    link: 'https://indiscrete.mathieusiaudeau.fr/api/indiscrete-ban',

    init: function(){
        app.loadBan();
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
            app.createBan(data);
        })

    },

    createBan: function(data) {
        const indis = document.querySelector('.indiscrete');
        const a = document.createElement('a')
        const img = document.createElement('img')
        img.setAttribute('src', data.img);
        a.setAttribute('href', data.url);
        a.setAttribute('alt', data.alt)
        a.setAttribute('target',"_blank")
        indis.append(a);
        a.append(img);
    }
}

document.addEventListener('DOMContentLoaded', app.init);
