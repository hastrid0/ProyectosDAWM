const marvel = {
    render: () => {
      const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e2fc4684487f"89859c98bfe8d08eebca&hash=b10e7770bba8ddbc01dace2060449360';
      const container = document.getElementsByClassName("container-fluid.py-5")
      let contentHTML = '';
      console.log('wtf')
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          console.log(json)
          for (const hero of json.data.results) {
            let urlHero = hero.urls[0].url;
            var elemnt= document.createElement("col")
           //contentHTML += `
          
             // <div class="col-md-4">
               //   <a href="${urlHero}" target="_blank">
                 //   <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                 // </a>
                  //<h3 class="title">${hero.name}</h3>
              //</div>`;
          }
          elemnt.innerHTML("<div class= \"card shadow-sm\"><img class=\"bd-placeholder-img card-img-top\" width=\"100%\" height=\"225\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Placeholder: Thumbnail\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"><title>Placeholder</title><rect width=\"100%\" height=\"100%\" fill=\"#55595c\"/><text x=\"50%\" y=\"50%\" fill=\"#eceeef\" dy=\".3em\">Thumbnail</text></img\>div class=\"card-body\"\><p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p\><div class=\"d-flex justify-content-between align-items-center\">\)")
          var lin= document.getElementsByClassName("col")
          document.
          //container.innerHTML = contentHTML;
        })
    }
  };
  marvel.render();