// const actors = [
//   {
//     "actor": "https://www.imdb.com/name/nm0705356/"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0914612/?ref_=nv_sr_srsg_0/"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0342488/?ref_=nv_sr_srsg_3"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0271657/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0001749/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm1500155/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm1648520/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0000614/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0001059/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0507535/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm2121541/?ref_=nv_sr_srsg_3"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0942247/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0000198/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0000667/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0931247/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0000307/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0000146/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0000980/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0364711/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0001767/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0005042/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0915488/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0378830/?ref_=nv_sr_srsg_0"
//   },
//   {
//     "actor": "#"
//   },
//   {
//     "actor": "https://www.imdb.com/name/nm0103195/?ref_=nv_sr_srsg_0"
//   }
// ]

const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString) 
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://jsonkeeper.com/b/3SP1'); // if link dont work us >> 'https://hp-api.herokuapp.com/api/characters'
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);

    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h3 class="text-left text-secondary">${character.name}</h3>
                <p class="text-left text-info">House: ${character.house}</p>
                <p class="text-left text-info">Actor: ${character.actor}</p>
                <a href="${character.link}"><img class="rounded" src="${character.image}"></img></a>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
     
    // if main link is not working us this code
    // const characterLinks = document.querySelectorAll('.character__link')
    //     for (let i = 0; i < characterLinks.length; i++) {
    //         characterLinks[i].setAttribute('href',actors[i].actor)
    //     }
};



function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

loadCharacters();

