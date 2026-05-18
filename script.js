const menuBox = document.getElementById("menu-box");
const btnMenu = document.getElementById("btnmenu");
const closemenu = document.getElementById("closemenu");
const menuclose = menuBox.querySelectorAll("a");
menuclose.forEach((link) => {
  link.addEventListener("click", () => {
    menuBox.classList.add("translate-x-[calc(100%+30px)]");
  });
});
btnMenu.addEventListener("click", () => {
  menuBox.classList.remove("translate-x-[calc(100%+30px)]");
  menuBox.classList.add("translate-x-0");
});
closemenu.addEventListener("click", () => {
  menuBox.classList.remove("translate-x-0");
  menuBox.classList.add("translate-x-[calc(100%+30px)]");
});
const filterBtns = document.querySelectorAll(".filter-btn");
const categories = document.querySelectorAll(".skill-category");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => {
      b.classList.remove("active", "bg-green-400", "text-black");
    });

    btn.classList.add("active", "bg-green-400", "text-black");

    const filter = btn.dataset.filter;

    categories.forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  let interval;
  let hoverTimeout;

  card.addEventListener("mouseenter", () => {
    hoverTimeout = setTimeout(() => {
      clearInterval(interval);

      let count = 0;

      let percentage = card.querySelector(".percentage");

      let barInner = card.querySelector(".bar-inner");

      let target = Number(percentage.dataset.target.replace("%", ""));

      percentage.textContent = "0%";

      barInner.style.width = "0%";

      setTimeout(() => {
        barInner.style.width = "0%";
      }, 50);

      interval = setInterval(() => {
        count++;

        percentage.textContent = count + "%";
        barInner.style.width = count + "%";

        if (count >= target) {
          clearInterval(interval);
        }
      }, 800 / target);
    }, 800);
  });

  card.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimeout);
  });
});
