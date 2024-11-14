const items = document.getElementById('items');
const left = document.getElementById('left');
const right = document.getElementById('right');
const menu = document.getElementById('menu-button');


let data = [];

const getMenu = async ()=>{
    try{
        let response = await fetch('data.json');
        data = await response.json();
        renderItem(data);
        // take order
        response = await takeOrder();
        console.log(response);
        // prepare order
        response = await orderPreparation();
        console.log(response);
        // pay for the order
        response = await payOrder();
        console.log(response);
        // greet the customer
        response = await thankYou();
        alert('Thank you for havin dinner with us', response);
    }catch(error){
        console.log(error);
    }
}
getMenu();

function renderItem(data){
    items.innerHTML = "";
    data.map(item => {
        items.innerHTML += `
        <div class="item">
            <img src="${item.imgSrc}" alt="img..">
            <div class="item-footer">
                <div>
                    <p class="item-name">${item.name}</p>
                    <p class="item-price">$${item.price}/-</p>
                </div>
                <img src="./assets/add.svg" alt="add..">
            </div>
        </div>
        `;
    })
}

// for mobile view -when button is clicked show the left bar
let toggleMenu = false;
menu.addEventListener('click', ()=>{
    left.style.cssText = `
    display: ${toggleMenu ? 'none': 'block'};
    position: absolute;
    z-index: 1;
    `;
    toggleMenu = !toggleMenu;
})

function takeOrder(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Three random burger order is taken successfully!");
        }, 2500)
    })
}

function orderPreparation(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const order = {order_status:true, paid:false}
            resolve(order);
        }, 1500);
    })
}

function payOrder(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const order = {order_status:true, paid:true};
            resolve(order);
        }, 1000);
    })
}

function thankYou(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const order = {paid:true};
            resolve(order);
        }, 100);
    })
}
