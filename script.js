const toggleBtn = document.querySelector(".suns");
const text = document.querySelector(".sun p");


function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    toggleBtn.src = "./mos.png";
    text.innerHTML = "DARK";
  } else {
    document.body.classList.remove("dark-theme");
    toggleBtn.src = "./002-sun.png";
    text.innerHTML = "LIGHT";
  }
}

window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "light"; 
  applyTheme(savedTheme);
};

toggleBtn.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
  applyTheme(currentTheme);
  localStorage.setItem("theme", currentTheme); 
});

const btn = document.querySelector(".search-btn");
const closeBtn = document.querySelector(".closeBtn");
const input = document.querySelector("#user-search");

btn.addEventListener("click", async () => {
  try {
    if(input.value === "") {
      alert("Siz hech nima kiritmadinggiz !");
      box.style.display = "block";
      return;
    }
    
    let response = await fetch(`https://api.github.com/users/${input.value}`);
    let data = await response.json();

    let GitHub = document.querySelector("#GitHub");
    GitHub.innerHTML = "";

    let box = document.createElement("div"); 
    box.className = "UserBox";
    box.innerHTML = `
      <img src="${data.avatar_url}" alt="Photo" class='img' />
      <div>
        <div class='posz'>
          <article>
            <h1>${data.name}</h1>
            <a href="">@${data.login}</a>
          </article>
        </div>
        <p class='b'>${data.bio}</p>
        <div class='ali'>
          <article>
            <p>Repos</p>
            <h2>${data.public_repos}</h2>
          </article>
          <article>
            <p>Followers</p>
            <h2>${data.followers}</h2>
          </article>
          <article>
            <p>Following</p>
            <h2>${data.following}</h2>
          </article>
        </div>
        <div class='end'>
          <div>
            <article>
              <img class="one" src="./Shape.png" alt="">
              <p>${data.location}</p>
            </article>
          </div>
          <div>
            <article>
              <img src="./001-office-building (1).png" alt="" class="tort">
              <p>${data.company}</p>
            </article>
          </div>
        </div>
      </div>`;

    GitHub.append(box); 
  } catch (error) {
    alert("404, Not found!");
  }
});

closeBtn.addEventListener("click", () => {
  input.value = ""; 
  closeBtn.classList.remove('active'); 
});


input.addEventListener("input", () => {
  if (input.value !== "") {
    closeBtn.classList.add('active'); 
  } else {
    closeBtn.classList.remove('active'); 
  }
});
