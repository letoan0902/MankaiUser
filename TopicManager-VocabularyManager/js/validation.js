let users = localStorage.getItem("users");
if (users) {
  users = JSON.parse(users);
} else {
  users = [
    {
      id: 1,
      name: "Nguyễn Tài Duy",
      gmail: "Duynguyen010503@gmail.com",
      username: "taiduy",
      password: "12345678",
      address: "Đông Anh, Hà Nội",
      streaks: 54,
      rank: 10,
      exp: 54,
      studyMankai: [
        {
          id: 10,
          name: "Kaiwa AI",
          nameImg: "/team2-mankai-user/assets/icons/laplanh.svg",
          text: "Luyện tập hội thoại Tiếng Nhật mọi lúc mọi nơi với AI",
          image: "/team2-mankai-user/assets/image/robot.png",
          detail: []
        },
        {
          id: 11,
          name: "Tiếng Nhật theo chủ đề",
          nameImg: false,
          text: "Học Tiếng Nhật theo chủ đề đa dạng, từ giao tiếp hàng ngày đến chuyên ngành",
          image: "/team2-mankai-user/assets/image/nguoi-1.png",
          detail: [
            {
              id: 100,
              name: "Chào hỏi",
              quantity: 100,
              image: "/team2-mankai-user/assets/icons/chaohoi.svg",
              vocabulary: [
                {
                  id: 1000,
                  name: "こんにちは",
                  romanized: "Kon ni chi wa",
                  vietsub: "Xin chào"
                }
              ]
            }
          ]
        },
        {
          id: 12,
          name: "Thi thử cùng Mankai",
          nameImg: false,
          text: "Kiểm tra trình độ Tiếng Nhật của bạn với các bài thi thử mô phỏng thực tế",
          image: "/team2-mankai-user/assets/image/nguoi-2.png",
          detail: [
            {
                id: 100,
                name: "Tiếng Nhật JLPT N1",
                image: "",
                quantity: 8,
                people: 5000,
                exams: [
                    {
                        id: 1000,
                        name: "Đề Thi JLPT N5 Số 1",
                        people: 9626,
                        time: 105,
                        structure: [
                            {
                                id: 2000,
                                name: "Chữ hán - Từ vựng",
                                time: 25,
                                quantity: 35,
                                score: 0,
                                questions: [
                                    {
                                        id: 3000,
                                        name: "Nhóm câu hỏi 15",
                                        problem: "もんだい2",
                                        text: "一の言葉ができますか。1 ・2・3 ・4からいちばんいいものをひとつえらんでください。",
                                        list:[
                                            {
                                                id: 4000,
                                                name: "せんげつ、きょうとにいきました。",
                                                answer: null,
                                                point: 1,
                                                select: [
                                                    {
                                                        id: 5000,
                                                        value: "先日",
                                                        check: false
                                                    },
                                                    {
                                                        id: 5001,
                                                        value: "先月",
                                                        check: true
                                                    },
                                                    {
                                                        id: 5002,
                                                        value: "先目",
                                                        check: false
                                                    },
                                                    {
                                                        id: 5003,
                                                        value: "先",
                                                        check: false
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                id: 2001,
                                name: "Ngữ pháp - đọc hiểu",
                                time: 25,
                                quantity: 35,
                                score: 0,
                                questions: [
                                    {
                                        id: 3000,
                                        name: "Nhóm câu hỏi 11",
                                        problem: null,
                                        text: "こんにちは こんにちは    A んにち    B んにち  ",
                                        list:[
                                            {   
                                                id: 4000,
                                                name: "せんげつ、きょうとにいきました。",
                                                answer: null,
                                                point: 1,
                                                select: [
                                                    {
                                                        id: 5000,
                                                        value: "先日",
                                                        check: false
                                                    },
                                                    {
                                                        id: 5001,
                                                        value: "先月",
                                                        check: true
                                                    },
                                                    {
                                                        id: 5002,
                                                        value: "先目",
                                                        check: false
                                                    },
                                                    {
                                                        id: 5003,
                                                        value: "先",
                                                        check: false
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }
          ]
        },
        {
          id: 13,
          name: "Từ điển Tiếng Nhật",
          nameImg: false,
          text: "Cổng tra cứu từ vựng Tiếng Nhật dành riêng cho bạn",
          image: "/team2-mankai-user/assets/image/tuvung.png",
          deital: [
            {
              id: 100,
              name: "Thẻ Từ Vựng Kanji Tiếng Nhật",
              quantity: 1009,
              vocabulary: [
                {
                  id: 200,
                  kanji: "導",
                  meaning: "Dẫn dắt",
                  components: "道 (con đường) + 寸 (tấc)",
                  structure: [
                    {
                      id: 1000,
                      name: "Onyomi",
                      text: "DOU",
                      example: "Homer buồn bã khi thanh carbon vô tri được chọn làm người dẫn dắt, một lần nữa."
                    },
                    {
                      id: 1001,
                      name: "Kunyomi",
                      text: "みちび*く",
                      example: "dẫn dắt hoặc hướng dẫn - theo nghĩa hướng dẫn TÂM LÝ, cải tạo một thiếu niên phạm pháp, dẫn dắt bằng ví dụ, v.v."
                    },
                    {
                      id: 1002,
                      name: "Mnemonic",
                      text: "Con đường này nguy hiểm, vì vậy hãy bám sát và đi theo người dẫn dắt của bạn như keo dính."
                    },
                    {
                      id: 1003,
                      name: "Jukugo",
                      quantity: 2,
                      list: [
                        {
                          id: 2000,
                          name: "誘導",
                          text: "ゆうどう",
                          meaning: "Dẫn dắt",
                          components: "誘 (mời / lôi kéo) + 導 (dẫn dắt) = 誘導 (dẫn dắt)",
                          example: "dẫn dắt hoặc điều khiển: Một giáo viên dẫn lớp đi dã ngoại. Nữ cảnh sát điều khiển giao thông. Ý nghĩa của 誘導 là thực sự đi cùng mọi người đến nơi đó."
                        },
                        {
                          id: 2001,
                          name: "導入",
                          text: "どうにゅう",
                          meaning: "Giới thiệu khái niệm mới",
                          components: "導 (dẫn dắt) + 入 (đi vào) = 導入 (giới thiệu khái niệm mới)",
                          example: "dẫn dắt hoặc điều khiển: Một giáo viên dẫn lớp đi dã ngoại. Nữ cảnh sát điều khiển giao thông. Ý nghĩa của 導入 là giới thiệu một khái niệm hoặc hệ thống mới."
                        }
                      ]
                    },
                    {
                      id: 1004,
                      name: "Lookalikes",
                      quantity: 3,
                      list: [
                        {
                          id: 2000,
                          name: "闘",
                          meaning: "Đấu tranh",
                          hint1: "Đậu",
                          hint2: "豆"
                        },
                        {
                          id: 2001,
                          name: "闘",
                          meaning: "Bóng tối đen kịt",
                          hint1: "ÂM THANH",
                          hint2: "音"
                        },
                        {
                          id: 2002,
                          name: "闘",
                          meaning: "Nhóm bè phái",
                          hint1: "CON NGƯỜI",
                          hint2: "人"
                        }
                      ],
                      note: "ĐẬU khiến bạn đấu tranh với việc xì hơi, và bạn nghe thấy ÂM THANH ngay cả trong một căn phòng tối đen.\nCác nhóm bè phái được tạo thành từ CON NGƯỜI!"
                    },
                    {
                      id: 1005,
                      name: "Synonyms",
                      quantity: 4,
                      list: [
                        {
                          id: 2000,
                          name: "cuộc thi, trò chơi",
                          text: "試合 競争 競技 争う 勝負 競う 闘う"
                        },
                        {
                          id: 2001,
                          name: "đánh nhau",
                          text: "喧嘩 戦う 闘う もみあい 殴り合い 戦闘 合戦"
                        },
                        {
                          id: 2002,
                          name: "Can đảm",
                          text: "闘志 根性 意地"
                        },
                        {
                          id: 2003,
                          name: "cố gắng hết sức",
                          text: "一生懸命 努力 必死 奮闘"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      course: [
        {
          id: 1,
          name: "Tiếng Nhật sơ cấp",
          totalLessson: 54,
          lesson: [
            {id: 1, name: "Bài 1", videos: 4, time: 50, test: 1, completed: 40}
          ]
        }
      ]
    }
  ];
}
let user = localStorage.getItem("user");
if (user) {
  user = JSON.parse(user);
} else {
  let currentPath = window.location.pathname;
  let filename = currentPath.split('/').pop();
  if (filename != "signin.html") {
    window.location.href = "../pages/login.html";
  }
}

function checkData(value, type, value2) {
  if (type == "email") {
    let regexMail =
      /^[a-zA-Z](?!.*\.\.)[a-zA-Z0-9._%+-]*[a-zA-Z0-9]@(?:[a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/;
    if (value == "") {
      return "Email không được bỏ trống";
    } else if (value.length < 6 || value.length > 254) {
      return "Email phải từ 6-254 ký tự";
    } else if (regexMail.test(value) != true) {
      return "Email không đúng định dạng";
    } else {
      return "valid";
    }
  } else if (type == "password") {
    if (value == "") {
      return "Mật khẩu không được bỏ trống";
    } else if (value.length < 8) {
      return "Mật khẩu phải từ 8 ký tự trở lên";
    } else {
      return "valid";
    }
  } else if (type == "user") {
    user = users.find((element) => element.email == value);
    if (!user) {
      return "Email không tồn tại";
    } else if (user.password != value2) {
      return "Sai mật khẩu";
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("boardId", JSON.stringify(-1));
      localStorage.setItem("taskId", JSON.stringify(-1));
      localStorage.setItem("listId", JSON.stringify(-1));
      return "valid";
    }
  } else if (type == "username") {
    if (value == "") {
      return "Username không được để trống";
    } else {
      return "valid";
    }
  } else if (type == "userSignUp") {
    let checkEmail = users.find((element) => element.email == value);
    let checkUsername = users.find((element) => element.username == value2);
    if (checkEmail) {
      return "Email đã tồn tại";
    } else if (checkUsername) {
      return "Username đã tồn tại";
    } else {
      return "valid";
    }
  } else if (type == "title") {
    if (value == "") {
      return "Tiêu đề không được để trống";
    } else {
      return "valid";
    }
  } else if (type == "description") {
    if (value == "") {
      return "Mô tả chi tiết không được để trống";
    } else {
      return "valid";
    }
  } else if(type=="checktitleboard"){
    let boardCheck = user.boards.find(board => board.title == value);
    if(boardCheck){
      return "Tiêu đề không được trùng";
    } else {
      return "valid";
    }
  }
}

saveData();
function saveData() {
  localStorage.setItem("users", JSON.stringify(users));
  if (user) {
    let userIndex = users.findIndex((element) => element.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = { ...user };
    }
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(user));
  }
}