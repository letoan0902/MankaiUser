let vocabularyKanji = user.studyMankai[3].detail[0];
let listVocabulary = vocabularyKanji.vocabulary;
let textMain = document.querySelector(".text-main");
textMain.textContent = vocabularyKanji.name;
let indexCurrent = 0;
let vocabularyCurrent = listVocabulary[indexCurrent];

let vocabCard = document.querySelector(".vocab-card");
renderCard(vocabularyCurrent);

let searchInput = document.querySelector(".block-input");
let buttonSearch = document.querySelector(".btn-search");

buttonSearch.addEventListener("click", () => {
  let searchValue = searchInput.value;
  let checkSearch = listVocabulary.filter((item) => {
    return item.kanji.toLowerCase().includes(searchValue.toLowerCase()) || item.meaning.toLowerCase().includes(searchValue.toLowerCase());
  });
  indexCurrent = listVocabulary.findIndex((item) => item.id === checkSearch[0].id);
  searchInput.value = "";
  renderCard(listVocabulary[indexCurrent]);
});




function renderCard(vocabularyCurrent) {
  vocabCard.innerHTML = `
    <header class="card-header">
            <p class="vocab-counter">Từ vựng ${indexCurrent + 1}/${
    listVocabulary.length
  }</p>
            <div class="kanji-container">
              <div class="kanji-display">
                <h1 class="kanji">${vocabularyCurrent.kanji}</h1>
                <h2 class="meaning">${vocabularyCurrent.meaning}</h2>
              </div>
              <p class="kanji-components">
                  ${
                    vocabularyCurrent.components &&
                    vocabularyCurrent.components.length % 2 === 0
                      ? (() => {
                          let html = "";
                          let quantityVocal =
                            vocabularyCurrent.components.length / 2;
                          for (let i = 0; i < quantityVocal; i++) {
                            let kanji = vocabularyCurrent.components[i * 2];
                            let meaning =
                              vocabularyCurrent.components[i * 2 + 1];
                            html += `<span class="highlight-orange">${kanji}</span> (${meaning})`;
                            if (i < quantityVocal - 1) {
                              html += " + ";
                            }
                          }
                          return html;
                        })()
                      : "Không có thành phần"
                  }
                </p>
            </div>
            <nav class="navigation">
              <div class="nav-previous">
                <div class="nav-button nav-button-previous">
                  <img
                    src="/team2-mankai-user/assets/icons/quaylai-tudien.svg"
                    alt="Previous"
                    class="nav-icon"
                  />
                </div>
                <span class="nav-label">Previous</span>
              </div>
              <div class="nav-next">
                <span class="nav-label">Next</span>
                <div class="nav-button nav-button-next">
                  <img
                    src="/team2-mankai-user/assets/icons/tieptheo-tudien.svg"
                    alt="Next"
                    class="nav-icon"
                  />
                </div>
              </div>
            </nav>
          </header>
          <div class="card-content">
            <div class="readings-container">
              <section class="reading-section">
                <h2 class="section-title">${
                  vocabularyCurrent.structure[0].name
                }</h2>
                <div class="reading-content">
                  <h3 class="reading-value">${
                    vocabularyCurrent.structure[0].text
                  }</h3>
                  <p class="reading-example">${
                    vocabularyCurrent.structure[0].example
                  }</p>
                </div>
              </section>
              <section class="reading-section">
                <h2 class="section-title">${
                  vocabularyCurrent.structure[1].name
                }</h2>
                <div class="reading-content">
                  <h3 class="reading-value">${
                    vocabularyCurrent.structure[1].text
                  }く</h3>
                  <p class="reading-example">${
                    vocabularyCurrent.structure[1].example
                  }</p>
                </div>
              </section>
            </div>
            <div class="details-container">
              <section class="mnemonic-section">
                <h2 class="section-title">${
                  vocabularyCurrent.structure[2].name
                }</h2>
                <p class="mnemonic-text">${
                  vocabularyCurrent.structure[2].text
                }</p>
              </section>
              <section class="jukugo-section">
                  <h2 class="section-title">${
                    vocabularyCurrent.structure[3].name
                  }</h2>
                  <div class="jukugo-list">
                    ${
                      vocabularyCurrent.structure[3].list &&
                      vocabularyCurrent.structure[3].list.length > 0
                        ? (() => {
                            let html = "";
                            vocabularyCurrent.structure[3].list.forEach(
                              (item) => {
                                html += `
                              <div class="jukugo-item">
                                <div class="jukugo-kanji">
                                  <h3 class="jukugo-characters">${
                                    item.name
                                  }</h3>
                                  <p class="jukugo-reading">${item.text}</p>
                                </div>
                                <div class="jukugo-details">
                                  <h4 class="jukugo-meaning">${
                                    item.meaning
                                  }</h4>
                                  <p class="jukugo-components">
                                    ${
                                      item.components &&
                                      item.components.length % 2 === 0
                                        ? (() => {
                                            let html = "";
                                            let quantityJukugo =
                                              item.components.length / 2;
                                            for (
                                              let i = 0;
                                              i < quantityJukugo;
                                              i++
                                            ) {
                                              let kanji =
                                                item.components[i * 2];
                                              let meaning =
                                                item.components[i * 2 + 1];
                                              html += `<span class="highlight-blue">${kanji}</span> (${meaning})`;
                                              if (i < quantityJukugo - 2) {
                                                html += " + ";
                                              } else if (
                                                i ===
                                                quantityJukugo - 2
                                              ) {
                                                html += " = ";
                                              }
                                            }
                                            return html;
                                          })()
                                        : "Không có thành phần"
                                    }
                                  </p>
                                  <p class="jukugo-example">${item.example}</p>
                                </div>
                              </div>
                            `;
                              }
                            );
                            return html;
                          })()
                        : ""
                    }
                  </div>
                </section>
              <section class="lookalikes-section">
                  <h2 class="section-title">${
                    vocabularyCurrent.structure[4].name
                  }</h2>
                  <table class="lookalikes-table">
                    <thead>
                      <tr>
                        <th class="kanji-col"></th>
                        <th class="meaning-col">Ý nghĩa</th>
                        <th class="hint-col">Gợi ý</th>
                        <th class="hint-col">Gợi ý</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${
                        vocabularyCurrent.structure[4].list &&
                        vocabularyCurrent.structure[4].list.length > 0
                          ? (() => {
                              let html = "";
                              vocabularyCurrent.structure[4].list.forEach(
                                (item) => {
                                  html += `
                                <tr>
                                  <td>${item.name}</td>
                                  <td>${item.meaning}</td>
                                  <td>
                                    ${
                                      item.hints && item.hints.length === 2
                                        ? `<span class="highlight-green">${item.hints[0]}</span>`
                                        : "Không có gợi ý"
                                    }
                                  </td>
                                  <td>
                                    ${
                                      item.hints && item.hints.length === 2
                                        ? `<span class="highlight-green">${item.hints[1]}</span>`
                                        : "Không có gợi ý"
                                    }
                                  </td>
                                </tr>
                              `;
                                }
                              );
                              return html;
                            })()
                          : '<tr><td colspan="3">Không có kanji dễ nhầm lẫn</td></tr>'
                      }
                    </tbody>
                  </table>
                  <p class="lookalikes-note">
                    ${vocabularyCurrent.structure[4].note || "Không có ghi chú"}
                  </p>
                </section>
              <section class="synonyms-section">
                  <h2 class="section-title">${
                    vocabularyCurrent.structure[5].name
                  }</h2>
                  <div class="synonyms-list">
                    ${
                      vocabularyCurrent.structure[5].list &&
                      vocabularyCurrent.structure[5].list.length > 0
                        ? (() => {
                            let html = "";
                            vocabularyCurrent.structure[5].list.forEach(
                              (item) => {
                                html += `
                              <div class="synonym-group">
                                <div class="synonym-item">
                                  <h3 class="synonym-category">${item.name}</h3>
                                  <p class="synonym-examples">
                                    ${
                                      item.text
                                        ? (() => {
                                            const listText =
                                              item.text.split(" ");
                                            let htmlText = "";
                                            listText.forEach((text, index) => {
                                              htmlText +=
                                                `${text} ` +
                                                "&nbsp" +
                                                "&nbsp" +
                                                "&nbsp";
                                            });
                                            return htmlText;
                                          })()
                                        : "Không có từ đồng nghĩa"
                                    }
                                  </p>
                                </div>
                              </div>
                            `;
                              }
                            );
                            return html;
                          })()
                        : "<p>Không có từ đồng nghĩa</p>"
                    }
                  </div>
                </section>
            </div>
          </div>
    `;
  let previousButton = document.querySelector(".nav-button-previous");
  let nextButton = document.querySelector(".nav-button-next");
  previousButton.addEventListener("click", () => {
    indexCurrent--;
    if (indexCurrent < 0) {
      indexCurrent = 0;
    }
    renderCard(listVocabulary[indexCurrent]);
  });

  nextButton.addEventListener("click", () => {
    indexCurrent++;
    if (indexCurrent >= listVocabulary.length) {
      indexCurrent = listVocabulary.length - 1;
    }
    renderCard(listVocabulary[indexCurrent]);
  });
}

