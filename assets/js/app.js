const app= {

    link: 'http://testapi.mathieusiaudeau.fr/api/ban',

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
        a.setAttribute('alt', data.img)
        indis.append(a);
        a.append(img);
    }
}

document.addEventListener('DOMContentLoaded', app.init);