// =====================================
// OCEAN'S WHISPER BUSINESS WEBSITE
// =====================================


// 1. LIVE CLOCK

function updateClock() {

    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString();

    document.getElementById("date").textContent =
        now.toDateString();

}

setInterval(updateClock, 1000);

updateClock();


// 2. MOBILE NAVIGATION

const menuButton = document.getElementById("menu-button");

const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function() {

    navigation.classList.toggle("open");

});

navigation.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function() {

        navigation.classList.remove("open");

    });

});


// 3. PRODUCT ORDER SYSTEM

let selectedProducts = [];

const orderButtons = document.querySelectorAll(".add-button");

const orderSummary = document.getElementById("order-summary");

const orderCount = document.getElementById("order-count");


function updateOrder() {

    orderCount.textContent = selectedProducts.length;

    if (selectedProducts.length > 0) {

        orderSummary.style.display = "block";

    } else {

        orderSummary.style.display = "none";

    }

}


// ADD PRODUCTS TO ORDER

orderButtons.forEach(button => {

    button.addEventListener("click", function() {

        const product = this.dataset.product;

        selectedProducts.push(product);

        updateOrder();

        this.textContent = "Added ✓";

        setTimeout(() => {

            this.textContent = "Add to Order";

        }, 1000);

    });

});


// 4. WHATSAPP CHECKOUT

// OCEAN'S WHISPER BUSINESS WHATSAPP NUMBER

const WHATSAPP_NUMBER = "2348065423420";


document.getElementById("checkout").addEventListener("click", function() {

    if (selectedProducts.length === 0) {

        alert("Please select a product first.");

        return;

    }

    const productList = selectedProducts.join("\n");

    const message =
        "Hello OCEAN'S WHISPER! I would like to place an order for:\n\n"
        + productList
        + "\n\nPlease let me know the prices and delivery details.";

    const whatsappLink =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappLink, "_blank");

});


// 5. CONTACT BUTTON

document.getElementById("contact-button").addEventListener("click", function() {

    const message =
        "Hello OCEAN'S WHISPER! I would like to make an enquiry.";

    window.open(
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message),
        "_blank"
    );

});


// 6. INITIALISE WEBSITE

console.log("OCEAN'S WHISPER website successfully loaded.");