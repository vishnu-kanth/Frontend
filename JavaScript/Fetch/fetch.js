const btn = document.getElementById("loadBtn");
const productsDiv = document.getElementById("products");

btn.addEventListener("click", async () => {
  console.log("Button clicked"); // debug check

  try {
    const res = await fetch("https://amazon.com/products");

    if (!res.ok) {
      throw new Error("Fetch failed");
    }

    const data = await res.json();

    productsDiv.innerHTML = ""; // clear old data

    data.forEach(product => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${product.title}</h3>
        <p>₹${product.price}</p>
      `;
      productsDiv.appendChild(div);
    });

  } catch (err) {
    console.error(err);
    productsDiv.innerHTML = "Error loading products";
  }
});

