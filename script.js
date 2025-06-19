let e = document.getElementById("e");

const map = new Map();

let cartItem = document.querySelector(".dem");
let t = document.getElementById("ide");
t.onclick = () => {
  cartItem.classList.toggle("active");
};

let cartCount = document.getElementById("cart-count");
let totalCount = 0;
cartCount.style.display = "none";


document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const newDiv = btn.closest(".product");
    const id = newDiv.dataset.id;
    const image = newDiv.dataset.image;

    if(map.has(id)){
      const item = map.get(id);
      item.count++;
      item.div.querySelector(".count").textContent = item.count;
    }else{
      const div = document.createElement("div");
      div.className="child";
      div.innerHTML =`
      <img src="${image}"/>
      <span class="count">1</span>
      `;
      e.appendChild(div);
      map.set(id, { count: 1, div});
    }
     totalCount++;
    cartCount.textContent = totalCount;

    if (totalCount === 1) {
      cartCount.style.display = "inline";
    }
  })
})