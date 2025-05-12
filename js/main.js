onload = () => {
  document.body.classList.remove("container");
};

document.getElementById("dataForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const temp = parseFloat(document.getElementById("temperature").value);
  const humidity = parseFloat(document.getElementById("humidity").value);

  const flowers = document.querySelectorAll(".flower");

  flowers.forEach((flower) => {
    flower.classList.remove("wilted", "yellowed");

    if (humidity >= 0 && humidity < 20) {
      flower.classList.add("wilted"); // Solmuş
    } else if (humidity >= 50 && humidity <= 60) {
      flower.classList.add("yellowed"); // Sararmış
    }
    // 20-50 arası: canlı (hiçbir sınıf eklenmez)

    
    else if (temp > 28) {
      flower.classList.add("yellowed");
    }
  });
});
