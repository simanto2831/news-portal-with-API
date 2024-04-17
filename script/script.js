// 1. load api and display the category list in the navbar
const loadCategory = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/categories`
  );
  const data = await res.json();
  const category = data.data.news_category;
  //   console.log(category);
  const nav = document.getElementById("nav");
  category.forEach((item) => {
    const btn = document.createElement("button");
    btn.innerText = `${item.category_name}`;
    btn.addEventListener("click", () => {
      newsCategory(item.category_id);
    });
    nav.appendChild(btn);
    // console.log(item.category_id);
  });
};

// 2. load different category news by their individual ID
const newsCategory = async (catID) => {
  //4. loading spinner add
  const loader = document.getElementById("loader");
  loader.classList.remove("hidden");

  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${catID}`
  );
  // console.log(catID);
  const data = await res.json();
  const items = data.data;
  // console.log(items);
  const card_container = document.getElementById("card_container");
  card_container.innerHTML = "";
  loader.classList.remove("hidden");

  items.forEach((item) => {
    // console.log(item);
    const div = document.createElement("div");
    div.classList.add("card_style", "shadow-lg");
    div.innerHTML = `
        <img
        src="${item.image_url}"
        alt="joe-biden photo"
        class="w-[20%] rounded-lg"
      />
      <div class="flex flex-col justify-center gap-4">
        <div class="flex justify-around w-[90%]">
          <h1 class="font-bold text-xl w-[70%]">${item.title}</h1>
          <h3 class="font-bold">${item.rating.badge} <sup>${
      item.rating.number
    }</sup></h3>
        </div>
        <p class="">
          ${item.details.slice(0, 150)}
        </p>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-5">
            <img
              src="${item.author.img}"
              alt="author size photo"
              class="w-[8%] rounded-full"
            />
            <div>
              <p class="font-bold">${item.author.name}</p>
              <p><span>Date : </span>${item.author.published_date}</p>
            </div>
          </div>
          <div class="flex items-center gap-20">
            <span class="flex font-bold">
              <i class="fa-regular fa-eye text-xl font-bold mr-2"></i>
              ${item.total_view}
            </span>
            <button onclick="handleDetailsBtn('${
              item.details
            }')" class="btn bg-gray-300">Details</button>
          </div>
        </div>
      </div>
        `;

    card_container.appendChild(div);

    // remove loader spinner
    loader.classList.add("hidden");
  });
};

// 3. handle search button
const search_btn = () => {
  const inputValue = document.getElementById("search_field").value;
  if (inputValue) {
    newsCategory(inputValue);
  } else {
    alert("Please enter a valid ID");
  }
};

// 5. handle details button
const handleDetailsBtn = (details) => {
  // const news_details = document.getElementById("news_details");
  // news_details.innerText = details;
  // my_modal_5.showModal();
  console.log(details);
};

loadCategory();
newsCategory("01");
