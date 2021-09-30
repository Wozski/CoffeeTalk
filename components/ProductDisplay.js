app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/

    `
      <div class="product-container">
      <div class="product-display">
        <img class="banner" v-bind:src="image">
        <div class="product-describle">
          <p>在深夜潮濕的西雅圖，有一家咖啡館，它為寂寞的旅人而開，孤單的人可以用一個故事，換取一杯咖啡。
          <br />
            除了溫暖內心外。也可以在這找到一樣孤單的人...
          </p>
        </div>
      </div>
      <div class="imagetwo">
        <img src= "./assets/images/coffeetalkPeople.jpeg">
        <p>這裡有各式各樣的客人，不論你是需要片刻的安寧，或是需要找人聊一聊。
          <br />
            這裡都能找到適合你的口味。
          </p>
      </div>
      <div>
        <div class="product-display">
        <div class="peopleContainer">
            <img src= "./assets/images/Elf.png">
            <div class="drinkType">Baileys
              <p class="description">一位妖精，和 Luna 是男女朋友，但感情似乎出了一些問題...</p>
            </div>
        </div>
        <div class="peopleContainer">
          <img src= "./assets/images/Orc.png">
          <div class="drinkType">Myrtle
            <p class="description">一位半獸人，在一家知名遊戲公司擔任軟體開發，喜歡一個人靜靜的喝咖啡。</p>
          </div>
        </div>
      </div>
      <div class="product-display">
        <div class="peopleContainer">
          <img src= "./assets/images/Murloc.png">
          <div class="drinkType">Aqua
            <p class="description">一位非常害羞的美人魚，工作於研究電腦相關的職業，同時也是一名遊戲開發人員。
            </p>
          </div>
        </div>
        <div class="peopleContainer">
          <img src= "./assets/images/human.png">
          <div class="drinkType">Freya
            <p class="description">充滿好奇心的人類女孩，工作於新聞業，但同時對於寫作也充滿熱情，最近有機會發表一篇小說，但似乎離截稿日期越來越近，卻沒有什麼好靈感。</p>
          </div>
        </div>
      </div>
      <div class="product-display">
        <div class="product-info">
          <h3>{{ title }}</h3>
        </div>
        <div class="coffeeType">
          <a href="https://en.wikipedia.org/wiki/Latte" target="blank">
            <img src= "./assets/images/Caffelatte.png">
          </a>
          <div class="drinkType">Latte</div>
        </div>
        <div class="coffeeType">
          <a href="https://en.wikipedia.org/wiki/Espresso" target="blank">
            <img src= "./assets/images/Espresso.png">
          </a>
          <div class="drinkType">Espresso</div>
        </div>
        <div class="coffeeType">
          <a href="https://en.wikipedia.org/wiki/Matcha" target="blank">
            <img src= "./assets/images/greenteatlatte.png">
          </a>
          <div class="drinkType">GreenteaLatte</div>
        </div>
        <div class="coffeeType">
          <a href="https://en.wikipedia.org/wiki/Matcha" target="blank">
            <img src= "./assets/images/Midnight.png">
          </a>
          <div class="drinkType">Midsummer Night Dream</div>
        </div>
      </div>
      <div class="bottomImg">
        <img src="./assets/images/background.gif">
      </div>
     
      <!--
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
        
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>

       </div>
       -->
    </div>
    <!-- send data to review-list -->
    <!--<review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form> -->`,
  data() {
    return {
      product: "Coffee-Type",
      brand: "",
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/coffetalk.jpeg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      reviews: [],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    addReview(review) {
      this.reviews.push(review);
    },
  },
  computed: {
    title() {
      return "Which " + this.product + "  Do you perfer?";
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
