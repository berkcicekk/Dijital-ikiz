onload = () =>{
        document.body.classList.remove("container");
};

document.getElementById("dataForm").addEventListener("submit", function (e) {
        e.preventDefault();
      
        const temp = parseFloat(document.getElementById("temperature").value);
        const humidity = parseFloat(document.getElementById("humidity").value);
      
        const flowers = document.querySelectorAll(".flower");
      
        flowers.forEach((flower) => {
          flower.classList.remove("wilted", "yellowed");
      
          if (humidity < 30) {
            flower.classList.add("wilted");
          } else if (temp > 28) {
            flower.classList.add("yellowed");
          }
          // else → hiçbir sınıf eklenmez, varsayılan (canlı) görünüm korunur
        });
      });
      