
        const products = [
            { title: "Product 1", image: "https://picsum.photos/200/200?random=1", description: "This is Product 1" },
            { title: "Product 2", image: "https://picsum.photos/200/200?random=2", description: "This is Product 2" },
            { title: "Product 3", image: "https://picsum.photos/200/200?random=3", description: "This is Product 3" },
            { title: "Product 4", image: "https://picsum.photos/200/200?random=4", description: "This is Product 4" },
            { title: "Product 5", image: "https://picsum.photos/200/200?random=5", description: "This is Product 5" },
            { title: "Product 6", image: "https://picsum.photos/200/200?random=6", description: "This is Product 6" },
            { title: "Product 7", image: "https://picsum.photos/200/200?random=7", description: "This is Product 7" },
            { title: "Product 8", image: "https://picsum.photos/200/200?random=8", description: "This is Product 8" },
            { title: "Product 9", image: "https://picsum.photos/200/200?random=9", description: "This is Product 9" },
            { title: "Product 10", image: "https://picsum.photos/200/200?random=10", description: "This is Product 10" },
            { title: "Product 11", image: "https://picsum.photos/200/200?random=11", description: "This is Product 11" }
        ];

        const productContainer = document.getElementById("productContainer");

        products.forEach(product => {
            const items = document.createElement("div");
            items.className = "item";

            items.innerHTML = `
                <div class="box">
                    <p class="score">${product.title}</p>
                    <img class="prodimg" src="${product.image}" alt="">
                    <p class="des">${product.description}</p>
                </div>
                <p class="cart"> Add to Cart </p>
            `;

            productContainer.appendChild(items);
        });



        const cartBtn = document.querySelectorAll('.cart');
        const cartCountElement = document.querySelector('#cartCountElement');
        let cartCount=0;
        cartBtn.forEach(cartButton => {
         cartButton.addEventListener('click',()=>{
            
                cartCount=cartCount+1;
                cartCountElement.textContent=cartCount;
           
        });
    });



 
    



