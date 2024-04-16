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
    nav.appendChild(btn);
    // console.log(item);
  });
};

// 2. load different category news by their individual ID
const newsCategory = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/01`
  );
  const data = await res.json();
  const items = data.data;
  console.log(items);
  const card_container = document.getElementById("card_container");

  items.forEach((item) => {
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
          <h1 class="font-bold text-xl">Lorem ipsum dolor sit amet</h1>
          <h3 class="font-bold">Good <sup>4.5</sup></h3>
        </div>
        <p class="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          enim magnam cum iusto doloremque, pariatur sint eius. Aliquam,
          facere praesentium
        </p>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnu3u6_rI0TQ_C9VMaJLUMog7BJOd7DwUwA&s"
              alt="author size photo"
              class="w-[10%]"
            />
            <div>
              <p class="font-bold">Mac Donald</p>
              <p><span>Date : </span>02-02-2020</p>
            </div>
          </div>
          <div class="flex items-center gap-20">
            <span class="text-xl font-bold">
              <i class="fa-regular fa-eye text-3xl font-bold mr-2"></i>
              451
            </span>
            <button class="btn bg-gray-300">Details</button>
          </div>
        </div>
      </div>
        `;

    card_container.appendChild(div);
  });
};
newsCategory();
loadCategory();
