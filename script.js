const sections = [
    {
        name: 'Авторские букеты',
        img: 'https://bloomflowers.pl/wp-content/webp-express/webp-images/uploads/2024/02/3-768x384.png.webp',
        link: '#author-bouquets',
        tag: 'author-bouquet'
    },

    {
        name: 'Монобукеты',
        img: 'https://bloomflowers.pl/wp-content/webp-express/webp-images/uploads/2024/03/dizajn-bez-nazvanija-6-768x384.jpg.webp',
        link: '#monobouquets',
        tag: 'monobouquet'
    },

    {
        name: 'Розы',
        img: 'https://bloomflowers.pl/wp-content/webp-express/webp-images/uploads/2024/02/dizajn-bez-nazvanija-3-768x384.jpg.webp',
        link: '#roses',
        tag: 'roses'
    },

    {
        name: 'Цветы в коробке',
        img: 'https://bloomflowers.pl/wp-content/webp-express/webp-images/uploads/2024/02/2-768x384.jpg.webp',
        link: '#flowers-in-a-box',
        tag: 'flowers-in-a-box'
    }
]

// Sections rendering Functionality

const sectionItemContainer = document.querySelector('.wrapper-for-section-container');
const templateSection = document.getElementById('section-template');

function addContentToSectionTemplate (arr) {
    arr.forEach (function (item) {
    const clonedSection = templateSection.content.cloneNode(true);
    clonedSection.querySelector('h3').textContent = item.name;
    clonedSection.querySelector('img').src = item.img;
    clonedSection.querySelector('a').href = item.link;
    clonedSection.firstElementChild.id = item.tag;
    sectionItemContainer.append(clonedSection);
})}

addContentToSectionTemplate(sections);
const sortControl = document.querySelector('#sort-items');
const siteSearch = document.querySelector('.site-search');


const items = [
    {
        name: 'Букет Blossom',
        img: 'https://bloomflowers.pl/wp-content/webp-express/webp-images/uploads/2023/09/e8b1b5ad-d1db-40ff-b6ad-166670ad05d7-560x560.jpeg.webp',
        price: [100, 75, 50],
        options: ['Большой - от 50 цв.', 'Средний - от 25 цв.', 'Маленький - до 25 цв.'],
        tag: 'author-bouquet'
    }, 

    {
        name: 'Букет Good Memories',
        img: 'https://bloomflowers.pl/wp-content/webp-express/webp-images/uploads/2023/12/b2b42d3e-e95e-4108-aa84-d943ab3a4ff2-560x560.jpeg.webp',
        price: [110, 85, 60],
        options: ['Большой - от 30 цв.', 'Средний - от 20 цв.', 'Маленький - до 20 цв.'],
        tag: 'author-bouquet'
    },

    {
        name: 'Букет New dawn',
        img: 'https://bloomflowers.pl/wp-content/webp-express/webp-images/uploads/2020/12/IMG_6097-560x560.jpg.webp',
        price: [90, 65, 50],
        options: ['Большой - от 25 цв.', 'Средний - от 15 цв.', 'Маленький - до 15 цв.'],
        tag: 'author-bouquet'
    },

    {
        name: 'Букет гортензии',
        img: 'https://bloomflowers.pl/wp-content/webp-express/webp-images/uploads/2024/05/img_3243-560x700.jpg.webp',
        price: [50, 35, 26],
        options: ['Большой - от 15 цв.', 'Средний - от 10 цв.', 'Маленький - до 10 цв.'],
        tag: 'monobouquet'
    },

    {
        name: 'Букет пионы',
        img: 'https://bloomflowers.pl/wp-content/uploads/2022/02/img_0062.jpg',
        price: [79, 65, 53],
        options: ['Большой - от 35 цв.', 'Средний - от 20 цв.', 'Маленький - до 20 цв.'],
        tag: 'monobouquet'
    },

    {
        name: 'Букет ромашки',
        img: 'https://bloomflowers.pl/wp-content/uploads/2024/01/db5d43ef-831e-4327-84de-ff264263e769.jpeg',
        price: [45, 35, 20],
        options: ['Большой - от 75 вет.', 'Средний - от 40 вет.', 'Маленький - до 40 вет.'],
        tag: 'monobouquet'
    },

    {
        name: 'Букет из кустовых роз',
        img: 'https://bloomflowers.pl/wp-content/uploads/2020/12/IMG_5986.jpg',
        price: [84, 66, 51],
        options: ['Большой - от 70 цв.', 'Средний - от 30 цв.', 'Маленький - до 30 цв.'],
        tag: 'roses'
    },

    {
        name: 'Букет из красных роз',
        img: 'https://bloomflowers.pl/wp-content/uploads/2022/09/0B970EBE-EFE8-418C-9982-72AA44CFED45.jpeg.webp',
        price: [115, 90, 50],
        options: ['Большой - от 70 цв.', 'Средний - от 30 цв.', 'Маленький - до 30 цв.'],
        tag: 'roses'
    },


    {
        name: 'Микс роз',
        img: 'https://bloomflowers.pl/wp-content/uploads/2021/04/img_3124.jpg',
        price: [80, 65, 55],
        options: ['Большой - от 70 цв.', 'Средний - от 30 цв.', 'Маленький - до 30 цв.'],
        tag: 'roses'
    },

    {
        name: 'Бокс "Ocean"',
        img: 'https://bloomflowers.pl/wp-content/uploads/2021/05/IMG_8998.jpg.webp',
        price: [88, 77, 55],
        options: ['Большой - от 40 цв.', 'Средний - от 30 цв.', 'Маленький - до 30 цв.'],
        tag: 'flowers-in-a-box'
    },

    {
        name: 'Бокс "Amour"',
        img: 'https://bloomflowers.pl/wp-content/uploads/2021/05/img_8738.jpg',
        price: [73, 64, 52],
        options: ['Большой - от 40 цв.', 'Средний - от 30 цв.', 'Маленький - до 30 цв.'],
        tag: 'flowers-in-a-box'
    },

    {
        name: 'Бокс "Peace"',
        img: 'https://bloomflowers.pl/wp-content/uploads/2021/03/img_0317.jpg',
        price: [89, 77, 60],
        options: ['Большой - от 40 цв.', 'Средний - от 30 цв.', 'Маленький - до 30 цв.'],
        tag: 'flowers-in-a-box'
    },
]

let currentState = [];
let currentSectionState = [];
let favouriteItems = [];

//Items rendering Functionality

const itemContainer = document.querySelector('.wrapper-for-item-container');
const templateItem = document.getElementById('item-template');
const nothingFound = document.querySelector('#nothing-found');
const favBtn = document.querySelector('#favourites-btn');


function addContentToItemTemplate (arr) {
    arr.forEach(function (item) {
    clonedItem = templateItem.content.cloneNode(true);
    clonedItem.querySelector('img').src = item.img;
    clonedItem.querySelector('h3').textContent = item.name;
    // clonedItem.querySelector('p').textContent = `${item.price[0]}$`;
    clonedItem.querySelector('option[value="big"]').textContent = item.options[0];
    clonedItem.querySelector('option[value="medium"]').textContent = item.options[1];
    clonedItem.querySelector('option[value="small"]').textContent = item.options[2];
    
    const selectedOption = clonedItem.querySelector('#sort-size');
    const p = clonedItem.querySelector('p');
    
    selectedOption.addEventListener('change', changePrice)
    function changePrice() {
        if (selectedOption.value ==='big') {
            p.textContent = `${item.price[0]}$`;
        } 
        else if (selectedOption.value === 'medium') {
            p.textContent = `${item.price[1]}$`;
        } 
        else {
            p.textContent = `${item.price[2]}$`;
        }
    }
    changePrice()
    
    const favouriteMark = clonedItem.querySelector('i');
    if (favouriteItems.includes(item)) {
        favouriteMark.classList.add('red-heart');
    }
    favouriteMark.addEventListener('click', handleFavourites);
    
    function handleFavourites() {
        if (!favouriteItems.includes(item)) {
            favouriteMark.classList.add('red-heart');
            favouriteItems.push(item);
        } else {
            favouriteMark.classList.remove('red-heart')
            favouriteItems = favouriteItems.filter((favItem) => 
                favItem != item
            )
        }
    }

    itemContainer.append(clonedItem);
})}

function renderItems(arr) {
    sectionItemContainer.textContent = '';
    itemContainer.textContent = '';
    nothingFound.textContent = '';
    
    addContentToItemTemplate(currentState);
}

function renderSections () {
    const sectionContainers = document.querySelectorAll('.section-container');
    sectionContainers.forEach (function (sectionContainer) { 
        sectionContainer.addEventListener('click', function openSection (event) {
            showBackBtn();
            currentSectionState = items.filter(function (item) {
                return item.tag === event.currentTarget.id;
            })
            currentState = [...currentSectionState];
            renderItems (currentState);
            showControls();
        }           
    )})
    hideControls();
}
renderSections ();

function showBackBtn() {
    const previousBackButton = document.querySelector('.back-btn');
    if (previousBackButton) {
        previousBackButton.remove();
    }
    const backButton = document.createElement('button');
    backButton.classList.add('back-btn');
    backButton.textContent = 'Назад';
    sectionItemContainer.before(backButton);
    backButton.addEventListener('click', function goBackToMain () {
        addContentToSectionTemplate(sections); 
        itemContainer.textContent = '';
        backButton.classList.add('hidden');
        if (favouriteItems.length) {
            favBtn.classList.remove('hidden');
        }
        renderSections ();
    })
    favBtn.classList.add('hidden');
}

//search Functionality

const inputField = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-btn');


function verifyInputText(inputText) {
    inputText = inputField.value;
    currentState = currentSectionState.filter((item) => {
        return item.name.toLowerCase().includes(inputText.trim().toLowerCase());
    })
    sortControl.value = 'default';
    renderItems(currentState);
    if (currentState.length === 0) {
        nothingFound.textContent = 'Ничего не найдено';
    }
}
searchButton.addEventListener('click', verifyInputText);
inputField.addEventListener("search", verifyInputText);


// sorting Functionality


function sortByAlphabet(a, b) {
    if (a.name > b.name) {
      return 1;
    }
    else if (a.name < b.name) {
      return -1;
    } else 
    return 0;
}


sortControl.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
        case 'alphabet': {
            currentState.sort((a, b) => sortByAlphabet(a, b));
            break;
        }
        case "expensive": {
            currentState.sort((a, b) => b.price[0] - a.price[0]);
            break;
        }
        case "cheap": {
            currentState.sort((a, b) => a.price[0] - b.price[0]);
            break;
        }
    }    
    
    renderItems (currentState);
    

})

function hideControls() {
    sortControl.classList.add('hidden');
    siteSearch.classList.add('hidden');
}

function showControls() {
    sortControl.classList.remove('hidden');
    siteSearch.classList.remove('hidden');
    sortControl.value = 'default';
    inputField.value = '';
}

favBtn.addEventListener('click', openFavItems)
function openFavItems() {
    showControls();
    showBackBtn();
    currentState = [...favouriteItems];
    renderItems(currentState);
}