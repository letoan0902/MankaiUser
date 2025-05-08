
let featureCards = document.querySelector(".feature-cards");
let studyMankai = user.studyMankai;
studyMankai.forEach((element) => {
  let mankaiCard = document.createElement("div");
  mankaiCard.className = "feature-card";
  mankaiCard.innerHTML = `<div class="feature-details">
                    <div class="feature-title-container">
                        <div class="feature-title">${element.name}</div>
                        ${
                          element.nameImg
                            ? `<img src="${element.nameImg}" alt=""/>`
                            : ""
                        }
                    </div>
                    <div class="feature-description">
                      ${element.text}
                    </div>
                  </div>
                  <div class="explore-button-container" data-property-1="Hover">
                    <div class="explore-button">
                      <div
                        class="explore-button-content"
                        data-icon="Trailing"
                        data-size="xl"
                      >
                        <div class="explore-button-text">Khám phá ngay</div>
                        <img
                          class="explore-button-icon"
                          src="/team2-mankai-user/assets/icons/button-tieptuc.svg"
                          alt=""
                        />
                      </div>
                      <div class="explore-button-decor">
                        <div class="explore-decor-line-1"></div>
                        <div class="explore-decor-line-2"></div>
                        <div class="explore-decor-line-3"></div>
                      </div>
                    </div>
                  </div>
                  <div class="feature-decor-circle-large"></div>
                  <div class="feature-decor-circle-xlarge"></div>
                  <img
                    class="feature-image"
                    src=${element.image}
                  />
                <div 
                  class="feature-decor-dot-large" 
                  style="left: ${Math.floor(Math.random() * (710 - 690 + 1)) + 690}px; bottom: ${Math.floor(Math.random() * (35 - 5 + 1)) + 5}px;"
                ></div>
                <div 
                  class="feature-decor-dot-small" 
                  style="left: ${Math.floor(Math.random() * (550 - 490 + 1)) + 490}px; top: ${Math.floor(Math.random() * (60 - 10 + 1)) + 10}px;"
                ></div>
                <img 
                class="feature-decor-star-top" 
                src="/team2-mankai-user/assets/icons/sao-mankai2.svg" 
                alt="" 
                style="left: ${Math.floor(Math.random() * (710 - 680 + 1)) + 680}px; top: ${
                  Math.floor(Math.random() * (60 - 10 + 1)) + 10
                }px;">
                <img 
                  class="feature-decor-star-bottom" 
                  src="/team2-mankai-user/assets/icons/sao-mankai.svg" 
                  alt="" 
                  style="left: ${
                    Math.floor(Math.random() * (550 - 490 + 1)) + 490
                  }px; bottom: ${Math.floor(Math.random() * (30 - 5 + 1)) + 5}px;">
    `;

    let button = mankaiCard.querySelector(".explore-button-container");
    button.addEventListener("click",function(){
        if(element.id==11){
            location.href="./topic.html";
        } else if(element.id==13){
            location.href = "./dictionary.html"
        } else if(element.id==12){
          
        }
    })
  featureCards.appendChild(mankaiCard);
});


