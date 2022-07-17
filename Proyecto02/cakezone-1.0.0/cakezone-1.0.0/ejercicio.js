const marvel = {
    render: () => {
      const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e2fc4684487f89859c98bfe8d08eebca&hash=b10e7770bba8ddbc01dace2060449360';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';
       // console.log('wtf')
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          console.log(json)
          for (const hero of json.data.results) {
            let urlHero = hero.urls[0].url;
            contentHTML += `
              <div class="col-md-4">
                  <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${hero.name}</h3>
              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    }
  };
  marvel.render();