// const button = document.querySelector('.btnt');

// button.addEventListener('click', event => {
//   alert('dfdf')
// });

console.log('JS Actif');
var ii = 0
var title1Tab = [];
var title2Tab = [];
var priceTab = [];
var urlTab = [];
var categoryTab = [];

var countArticles = []

// Fonction appelant le fichier JSON externe grâce à la fonction fetch

fetch('./assets/json/list_article.json')
    .then(response => response.json())
    .then((json) => {
        json.articles.map((articleShop) => { 
            console.log(ii)

            // Récupération des valeurs importantes du fichier JSON

            var title1 = articleShop.name1;
            var title2 = articleShop.name2;
            var stars = articleShop.stars;
            var price = articleShop.price;
            var oldprice = articleShop.oldprice;
            var promo = articleShop.promo;
            var url = articleShop.url;
            var category = articleShop.category;


            title1Tab.push(title1);
            title2Tab.push(title2);
            priceTab.push(price);
            urlTab.push(url);
            categoryTab.push(category);
            countArticles.push(0)

            // Bout de code qui en fonction du nombre "star" dans le fichier JSON, ajoute le nombre d'étoiles correspondates dans la div

            var copystar = stars;
            var drawStar = ""
            var fullStar = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15">
            <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.137.521,6.306,4.4l-4.1.624a.949.949,0,0,0-.5,1.6L4.677,9.64l-.7,4.262a.905.905,0,0,0,1.3.987l3.664-2.012,3.664,2.012a.906.906,0,0,0,1.3-.987l-.7-4.262,2.964-3.017a.949.949,0,0,0-.5-1.6l-4.1-.624L9.746.521a.881.881,0,0,0-1.609,0Z" transform="translate(-1.441 0.001)" fill="#e42b1d"/>
          </svg>
          `
            var halfStar = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15">
            <path id="Icon_awesome-star-half-alt" data-name="Icon awesome-star-half-alt" d="M14.231,5.025l-4.1-.624L8.3.522A.881.881,0,0,0,6.7.522L4.864,4.4l-4.1.624a.949.949,0,0,0-.5,1.6L3.235,9.641l-.7,4.262A.927.927,0,0,0,3.418,15a.853.853,0,0,0,.416-.11L7.5,12.878l3.664,2.013a.858.858,0,0,0,.415.109.926.926,0,0,0,.886-1.1l-.7-4.262,2.964-3.017a.95.95,0,0,0-.5-1.6ZM10.825,8.634l-.507.516.12.729.546,3.324-2.858-1.57L7.5,11.289V2L8.928,5.022l.313.663.7.107,3.2.487L10.825,8.634Z" transform="translate(0)" fill="#e42b1d"/>
          </svg>
          `
            var emptyStar = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15">
            <path id="Icon_ionic-ios-star-outline" data-name="Icon ionic-ios-star-outline" d="M16.681,8.567H11.756l-1.5-4.81a.53.53,0,0,0-1.018,0l-1.5,4.81H2.786a.559.559,0,0,0-.536.577.455.455,0,0,0,.01.1.565.565,0,0,0,.224.407l4.048,3.072L4.979,17.585a.605.605,0,0,0,.184.649.5.5,0,0,0,.3.141.628.628,0,0,0,.335-.13L9.75,15.213,13.7,18.245a.6.6,0,0,0,.335.13.465.465,0,0,0,.3-.141.6.6,0,0,0,.184-.649l-1.554-4.864,4.015-3.1.1-.09a.624.624,0,0,0,.174-.386A.587.587,0,0,0,16.681,8.567ZM12.422,11.9a1.057,1.057,0,0,0-.342,1.147l1.008,3.162a.137.137,0,0,1-.2.166l-2.592-1.99a.89.89,0,0,0-.546-.187.874.874,0,0,0-.542.188L6.613,16.374a.137.137,0,0,1-.2-.166l1.008-3.162a1.061,1.061,0,0,0-.345-1.154L4.359,9.833a.147.147,0,0,1,.077-.263h3.3a.945.945,0,0,0,.887-.689L9.619,5.7a.132.132,0,0,1,.254,0l.991,3.18a.945.945,0,0,0,.887.689H15.01a.145.145,0,0,1,.077.26Z" transform="translate(-2.25 -3.375)" fill="#e42b1d"/>
          </svg>
          `
            for (let x = 0; x < 5; x++) {
              if (copystar >= 1) {
              
                drawStar += fullStar;
              } else if (copystar < 1 && copystar > 0) {
             
                drawStar += halfStar
              } else {
        
                drawStar += emptyStar
              }
              copystar -= 1
            }

            // Ajout des articles dans le DOM après la récupération des informations du fichier JSON
    
            var articleToAdd = `
            <div class="shop-card">
        
            <img src=${url} class="img-fluid img-shop" alt="image produit">
            <div>
              <p class="article-title">${title1}</p>
              <p class="article-title2">${title2}</p>
            </div>

            <div>
              <div>${drawStar}</div>
              <p class="nb-vote"></p>
            </div>

            <div class="shop-price">
              <p class="price">${price} €</p>
              
            </div>
                  
            <button id=${ii} class="btn btn-shop btn-danger btnshop" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Ajouter au panier</button>
                  
          </div>
          `;




          var articleForBag = `
          <div class=" d-none">
            <div class="bag-card">
        
            <img src=${url} class="img-fluid img-bag" alt="image produit">
            <div>
              <p class="article-title-bag">${title1}</p>
              <p class="article-title2-bag">${title2}</p>
            </div>

        

            <div class="shop-price-bag">
              <p class="price-bag">${price} €</p>
              
            </div>
                  
            <button id=${ii} class="btn btn-shop btn-danger btnbag" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Retirer du panier</button>
                  
          </div>
          </div>
          `;


            document.getElementById('to-add').innerHTML += articleToAdd;
            document.getElementById('fetch-shoping').innerHTML += articleForBag; 
    
            ii++

        })

        
  // Code permettant de connaitre le bouton qui a été appuyer par l'utilisateur et doit ensuite afficher une pop up correspondante
  // /!\ Pour le moment le code ne marche pas totalement puisqu'il selectionne toujours pour une raison que j'ignore le bouton de la dernière div


        let btnShop = document.querySelectorAll('.btnshop');
        let idBtn;
        var rangSelect;
        for (xxx of btnShop) {
          console.log(xxx)
           xxx.onclick = (e) => {
              rangSelect = xxx.id
              console.log(rangSelect)
              document.getElementById('js-select-img').setAttribute('src', urlTab[rangSelect])
              document.getElementById('js-select1').innerText = (title1Tab[rangSelect])
              document.getElementById('js-select2').innerText = (title2Tab[rangSelect])
              document.getElementById('js-select3').innerText = (priceTab[rangSelect]+" €")
              console.log('rrr')
              countArticles[rangSelect] ++
              document.getElementById('js-select4').innerText = ("Qté : "+countArticles[rangSelect])


              console.log(countArticles)
              }
          }
        
        




        
        


})





