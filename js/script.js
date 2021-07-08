const app = {

    init: function() {

        console.log('TEST');
        app.createFinder();
    },

    state: {
        data: [{
            name: 'Galaxie Andromède',
            distance: '2,54 millions d\'années lumières',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1200px-Andromeda_Galaxy_%28with_h-alpha%29.jpg',
            wiki: 'https://fr.wikipedia.org/wiki/Galaxie_d%27Androm%C3%A8de#:~:text=D\'un%20diam%C3%A8tre%20d\'environ,Terre%20dans%20l\'h%C3%A9misph%C3%A8re%20nord.',
            },
            {
            name: 'Galaxie Sombrero',
            distance: '31,1 millions d\'années lumières',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/M104_ngc4594_sombrero_galaxy_hi-res.jpg/1200px-M104_ngc4594_sombrero_galaxy_hi-res.jpg',
            wiki: `https://fr.wikipedia.org/wiki/M104`,
            },
            {
            name: 'Galaxie Chien de Chasse',
            distance: '27,4 millions d\'années lumières',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Messier51_sRGB.jpg/1200px-Messier51_sRGB.jpg',
            wiki: 'https://fr.wikipedia.org/wiki/Chiens_de_chasse',
            },
        ],
    },
    

    createFinder: function() {
        app.container = document.querySelector('.container');
        //console.log(container);
        const divElem = document.createElement('div');
        app.container.appendChild(divElem);
        //console.log(divElem);

        const select = document.createElement('select')
        select.name = 'galaxie'
        select.id = 'galaxie'

        const galaxies = ['Galaxie Andromède', 'Galaxie Sombrero', 'Galaxie Chien de Chasse']
        for (const galaxie of galaxies) {
            //console.log(galaxie);
            const option = document.createElement('option');
            option.value = galaxie;
            option.className = 'galaxie'
            option.textContent = galaxie
            //console.log(option);
            select.append(option)
        }

        divElem.append(select);

        document.addEventListener('change', app.handleOnChange)
    },

    handleOnChange: function(event) {

        const divElem = document.querySelectorAll('.divElem')
        for (const divElm of divElem) {
            divElm.remove();
        }

        const valueTarget = event.target.value;
        //console.log(valueTarget);

        const results = app.state.data.filter(galaxie => galaxie.name === valueTarget)
        
        for (const result of results) {
           const divElem = document.createElement('div')
           divElem.className = 'divElem';

           // Ajout du titre
           const title = document.createElement('h1')
           title.textContent = result.name;

           // Ajout de l'image
           const image = new Image ();
           image.src = result.img;
           image.className = 'img'

           // Ajout du wikipedia
           const wiki = document.createElement('p')
           wiki.textContent = result.wiki


           const distance = document.createElement('h3')
           distance.textContent = result.distance;
           app.container.append(divElem);
           divElem.append(title, distance, image, wiki)
        }

    },



}

// on initialise l'app dès que le document est prêt
document.addEventListener('DOMContentLoaded', app.init);