let btn = document.getElementById('btn');
let section = document.getElementById('section');

section.style.display = "grid";
section.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
section.style.padding = "20px";

btn.addEventListener("click", async () => {
    async function fetchDetails() {
        try {
            let resp = await fetch("https://fakestoreapi.com/products");
            let data = await resp.json();
            return data;
        } catch (error) {
            console.error("Fetching failed", error);
            section.innerHTML = "Failed to load products.";
        }
    }

    let products = await fetchDetails();
    products.forEach(product => {
        let card = document.createElement('div');

        card.style.border = "1px solid #000000";
        card.style.borderRadius = "10px";
        card.style.padding = "15px";
        card.style.textAlign = "center";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.innerHTML = `
            <img src="${product.image}" style="height: 150px; width: 100px; margin:auto;">
            <h3 style="margin: 10px; color: #333;">${product.title}</h3>
            <p style="font-weight: bold; color: #27ae60;">$${product.price}</p>
        `;
        section.append(card);
    });
});