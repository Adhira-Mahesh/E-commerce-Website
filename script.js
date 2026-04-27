
  const container = document.getElementById("grid-4");

  for (let i = 1; i <= 8; i++) {
    container.innerHTML += `
      <div class="card ">
  <div class="card__shine"></div>
  <div class="card__glow"></div>
  <div class="card__content">
   
    <div style="--bg-color: #a78bfa" class="card__image"></div>
    <div class="card__text">
      <p class="card__title">Premium Design</p>
      <p class="card__description">Hover to reveal stunning effects</p>
    </div>
    <div class="card__footer">
      <div class="card__price">$49.99</div>
      <div class="card__button">
        <svg height="16" width="16" viewBox="0 0 24 24">
          <path
            stroke-width="2"
            stroke="currentColor"
            d="M4 12H20M12 4V20"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</div>
  `}

let reasons= document.getElementById("reasons-grid");
reasons_array=[
  "Free Shipping",
  "Easy Returns",
  "Premium Quality",
  "Secure Payment"
]
reasons_description= [
  "On orders above ₹999",
  "7-day hassle-free returns",
  "Carefully crafted premium products",
  "100% safe secure checkout"
]
for (let i = 0; i <= 3; i++) {
    reasons.innerHTML += `
      <div class="card ">
  <div class="card__shine"></div>
  <div class="card__glow"></div>
  <div class="card__content">
   
    <div style="--bg-color: #a78bfa; background: url('./images/reasons-img-${i}.png');   background-size: contain;  /* shows full image */
  background-repeat: no-repeat;
  background-position: center;   ;" class="card__image"></div>
    <div class="card__text">
      <h1 class="card__title " style = "   font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.3;">${reasons_array[i]}</h1>
      <h1 class="card__description" style ='  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;'>${reasons_description[i]}</h1>
    </div>
    
  </div>
</div>
`}
let timer=document.getElementById('sale-timer')