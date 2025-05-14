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
      avatar: "/team2-mankai-user/assets/image/avatar-user.jpg",
      level: "N1",
      
      course: [
        {
          id: 12,
          name: "Tiếng Nhật Sơ Cấp",
          image: "/team2-mankai-user/assets/image/image-course.png",
          lessons: [
            {
              id: 100,
              name: "Hiragana",
              detail: [
                {
                  id: 500,
                  name: "Bảng chữ cái",
                  vocabulary: [
                    { id: 1000, name: "あ", text: "a" },
                    { id: 1001, name: "い", text: "i" },
                    { id: 1002, name: "う", text: "u" },
                    { id: 1003, name: "え", text: "e" },
                    { id: 1004, name: "お", text: "o" },
                    { id: 1005, name: "か", text: "ka" },
                    { id: 1006, name: "き", text: "ki" },
                    { id: 1007, name: "く", text: "ku" },
                    { id: 1008, name: "け", text: "ke" },
                    { id: 1009, name: "こ", text: "ko" },
                    { id: 1010, name: "さ", text: "sa" },
                    { id: 1011, name: "し", text: "shi" },
                    { id: 1012, name: "す", text: "su" },
                    { id: 1013, name: "せ", text: "se" }
                  ]
                },
                {
                  id: 501,
                  name: "Biến âm",
                  vocabulary: [
                    { id: 1002, name: "が", text: "ga - biến âm của か (ka)" },
                    { id: 1003, name: "ざ", text: "za - biến âm của さ (sa)" },
                    { id: 1004, name: "ば", text: "ba - biến âm của は (ha)" }
                  ]
                },
                {
                  id: 502,
                  name: "Âm ghép",
                  vocabulary: [
                    { id: 1005, name: "きゃ", text: "kya - âm ghép của き (ki) và や (ya)" },
                    { id: 1006, name: "しゅ", text: "shu - âm ghép của し (shi) và ゆ (yu)" },
                    { id: 1007, name: "ちょ", text: "cho - âm ghép của ち (chi) và よ (yo)" },
                    { id: 1008, name: "にゃ", text: "nya - âm ghép của に (ni) và や (ya)" }
                  ]
                },
                {
                  id: 503,
                  name: "Trường âm",
                  concept: [
                    {
                      id: 1000,
                      name: "I. Mẫu câu",
                      text: "1. Mẫu câu:",
                      content: [
                        { id: 2000, name: "Danh từ 1 は Danh từ 2 です" },
                        { id: 2001, name: "Danh từ 1 là danh từ 2" }
                      ]
                    },
                    {
                      id: 1001,
                      name: "II. Cách ghi",
                      text: "2. Phân tích mẫu câu:",
                      content: [
                        {
                          id: 2002,
                          name: "a. Trợ từ 「は」",
                          detail: [
                            { id: 3000, name: "Trợ từ 「は」 biểu thị rằng danh từ đứng trước nó là chủ đề của câu." },
                            { id: 3001, name: "Người nói đặt 「は」 sau chủ đề mà mình muốn nói đến và lập thành câu bằng cách thêm phía sau 「は」 những thông tin trần thuật vị ngữ." },
                            { id: 3002, name: "Chú ý: 「は」 đọc là 「わ」 trong trường hợp 「は」 là trợ từ." }
                          ]
                        },
                        {
                          id: 2003,
                          name: "b. Trợ từ 「を」",
                          detail: [
                            { id: 3003, name: "Trợ từ 「を」 biểu thị rằng danh từ đứng trước nó là tân ngữ trực tiếp của động từ." },
                            { id: 3004, name: "「を」 được sử dụng để chỉ đối tượng mà hành động của động từ tác động lên, thường đứng trước các động từ mang tính chủ động." },
                            { id: 3005, name: "Chú ý: 「を」 đọc là 「お」 trong văn nói, nhưng trong văn viết vẫn giữ nguyên ký tự 「を」." }
                          ]
                        }
                      ]
                    },
                    {
                      id: 1002,
                      name: "III. Cách viết",
                      text: "3. Phân tích kỹ năng viết:",
                      content: [
                        {
                          id: 2004,
                          name: "a. Cách viết đoạn văn nghị luận",
                          detail: [
                            { id: 3006, name: "Đoạn văn nghị luận cần có bố cục rõ ràng, gồm mở bài, thân bài và kết bài." },
                            { id: 3007, name: "Trong thân bài, cần trình bày luận điểm chính và bổ sung ví dụ hoặc lập luận logic để thuyết phục người đọc." },
                            { id: 3008, name: "Chú ý: Sử dụng từ nối như 「したがって」 hoặc 「なぜなら」 để tăng tính mạch lạc." }
                          ]
                        },
                        {
                          id: 2005,
                          name: "b. Cách viết email trang trọng",
                          detail: [
                            { id: 3009, name: "Email trang trọng cần bắt đầu bằng lời chào phù hợp, như 「〇〇様」 hoặc 「拝啓」." },
                            { id: 3010, name: "Nội dung email nên ngắn gọn, rõ ràng, và sử dụng kính ngữ (敬語) đúng mức độ với người nhận." },
                            { id: 3011, name: "Chú ý: Kết thúc email bằng cụm như 「よろしくお願いいたします」 hoặc 「敬具」 để thể hiện sự lịch sự." }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 504,
                  name: "Âm ngắt",
                  concept: [
                    {
                      id: 1003,
                      name: "I. Mẫu câu",
                      text: "1. Mẫu câu:",
                      content: [
                        { id: 2006, name: "Danh từ 1 は Danh từ 2 です" },
                        { id: 2007, name: "Danh từ 1 là danh từ 2" }
                      ]
                    },
                    {
                      id: 1004,
                      name: "II. Cách phát âm",
                      text: "2. Phân tích cách phát âm âm ngắt:",
                      content: [
                        {
                          id: 2008,
                          name: "a. Âm ngắt 「っ」",
                          detail: [
                            { id: 3012, name: "Âm ngắt 「っ」 (sokuon) biểu thị một khoảng dừng ngắn trong phát âm, làm cho âm tiết tiếp theo được nhấn mạnh." },
                            { id: 3013, name: "Âm ngắt thường xuất hiện trước các phụ âm như 「か」「き」「く」「け」「こ」, 「た」「ち」「つ」「て」「と」, hoặc 「ぱ」「ぴ」「ぷ」「ぺ」「ぽ」." },
                            { id: 3014, name: "Chú ý: Âm ngắt không được phát âm thành một âm riêng mà chỉ kéo dài khoảng dừng trước âm tiếp theo." }
                          ]
                        },
                        {
                          id: 2009,
                          name: "b. Phân biệt âm ngắt và âm thường",
                          detail: [
                            { id: 3015, name: "Âm ngắt 「っ」 làm thay đổi ý nghĩa của từ nếu bị bỏ qua, ví dụ: 「きって」(tem thư) khác với 「きて」(hình thức te của động từ 来る)." },
                            { id: 3016, name: "Khi viết romaji, âm ngắt được biểu thị bằng cách lặp lại phụ âm, ví dụ: 「きって」 được viết là kitte." },
                            { id: 3017, name: "Chú ý: Cần luyện tập nghe và phát âm chính xác để tránh nhầm lẫn giữa từ có âm ngắt và từ không có âm ngắt." }
                          ]
                        }
                      ]
                    },
                    {
                      id: 1005,
                      name: "III. Cách viết",
                      text: "3. Phân tích kỹ năng viết với âm ngắt:",
                      content: [
                        {
                          id: 2010,
                          name: "a. Cách viết từ có âm ngắt",
                          detail: [
                            { id: 3018, name: "Khi viết từ có âm ngắt, sử dụng ký tự 「っ」 nhỏ đứng trước âm tiết cần nhấn mạnh." },
                            { id: 3019, name: "Ví dụ: 「学校」 (gakkou) được viết với 「っ」 để biểu thị âm ngắt giữa 「が」 và 「こう」." },
                            { id: 3020, name: "Chú ý: Không nhầm lẫn 「っ」 nhỏ với 「つ」 lớn, vì chúng có cách phát âm và ý nghĩa khác nhau." }
                          ]
                        },
                        {
                          id: 2011,
                          name: "b. Cách sử dụng âm ngắt trong văn viết",
                          detail: [
                            { id: 3021, name: "Âm ngắt thường xuất hiện trong các từ mượn hoặc từ biểu cảm để tăng tính nhấn mạnh, ví dụ: 「サッカー」 (sakkaa, bóng đá)." },
                            { id: 3022, name: "Trong văn viết trang trọng, cần đảm bảo viết đúng âm ngắt để tránh gây hiểu nhầm về ý nghĩa." },
                            { id: 3023, name: "Chú ý: Kiểm tra kỹ từ điển khi viết các từ có âm ngắt, đặc biệt với từ mượn hoặc từ ít gặp." }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 101,
              name: "Katakana",
              detail: [
                {
                  id: 505,
                  name: "Bảng chữ cái",
                  vocabulary: [
                    { id: 1020, name: "ア", text: "a" },
                    { id: 1021, name: "イ", text: "i" },
                    { id: 1022, name: "ウ", text: "u" },
                    { id: 1023, name: "エ", text: "e" },
                    { id: 1024, name: "オ", text: "o" },
                    { id: 1025, name: "カ", text: "ka" },
                    { id: 1026, name: "キ", text: "ki" },
                    { id: 1027, name: "ク", text: "ku" },
                    { id: 1028, name: "ケ", text: "ke" },
                    { id: 1029, name: "コ", text: "ko" },
                    { id: 1030, name: "サ", text: "sa" },
                    { id: 1031, name: "シ", text: "shi" },
                    { id: 1032, name: "ス", text: "su" },
                    { id: 1033, name: "セ", text: "se" }
                  ]
                },
                {
                  id: 506,
                  name: "Biến âm",
                  vocabulary: [
                    { id: 1034, name: "ガ", text: "ga - biến âm của カ (ka)" },
                    { id: 1035, name: "ザ", text: "za - biến âm của サ (sa)" },
                    { id: 1036, name: "バ", text: "ba - biến âm của ハ (ha)" }
                  ]
                },
                {
                  id: 507,
                  name: "Âm ghép",
                  vocabulary: [
                    { id: 1037, name: "キャ", text: "kya - âm ghép của キ (ki) và ヤ (ya)" },
                    { id: 1038, name: "シュ", text: "shu - âm ghép của シ (shi) và ユ (yu)" },
                    { id: 1039, name: "チョ", text: "cho - âm ghép của チ (chi) và ヨ (yo)" },
                    { id: 1040, name: "ニャ", text: "nya - âm ghép của ニ (ni) và ヤ (ya)" }
                  ]
                },
                {
                  id: 508,
                  name: "Trường âm",
                  concept: [
                    {
                      id: 1006,
                      name: "I. Mẫu câu",
                      text: "1. Mẫu câu:",
                      content: [
                        { id: 2012, name: "Danh từ 1 は Danh từ 2 です" },
                        { id: 2013, name: "Danh từ 1 là danh từ 2" }
                      ]
                    },
                    {
                      id: 1007,
                      name: "II. Cách ghi",
                      text: "2. Phân tích mẫu câu:",
                      content: [
                        {
                          id: 2014,
                          name: "a. Trợ từ 「は」",
                          detail: [
                            { id: 3024, name: "Trợ từ 「は」 biểu thị rằng danh từ đứng trước nó là chủ đề của câu." },
                            { id: 3025, name: "Người nói đặt 「は」 sau chủ đề mà mình muốn nói đến và lập thành câu bằng cách thêm phía sau 「は」 những thông tin trần thuật vị ngữ." },
                            { id: 3026, name: "Chú ý: 「は」 đọc là 「わ」 trong trường hợp 「は」 là trợ từ." }
                          ]
                        },
                        {
                          id: 2015,
                          name: "b. Trợ từ 「を」",
                          detail: [
                            { id: 3027, name: "Trợ từ 「を」 biểu thị rằng danh từ đứng trước nó là tân ngữ trực tiếp của động từ." },
                            { id: 3028, name: "「を」 được sử dụng để chỉ đối tượng mà hành động của động từ tác động lên, thường đứng trước các động từ mang tính chủ động." },
                            { id: 3029, name: "Chú ý: 「を」 đọc là 「お」 trong văn nói, nhưng trong văn viết vẫn giữ nguyên ký tự 「を」." }
                          ]
                        }
                      ]
                    },
                    {
                      id: 1008,
                      name: "III. Cách viết",
                      text: "3. Phân tích kỹ năng viết:",
                      content: [
                        {
                          id: 2016,
                          name: "a. Cách viết đoạn văn nghị luận",
                          detail: [
                            { id: 3030, name: "Đoạn văn nghị luận cần có bố cục rõ ràng, gồm mở bài, thân bài và kết bài." },
                            { id: 3031, name: "Trong thân bài, cần trình bày luận điểm chính và bổ sung ví dụ hoặc lập luận logic để thuyết phục người đọc." },
                            { id: 3032, name: "Chú ý: Sử dụng từ nối như 「したがって」 hoặc 「なぜなら」 để tăng tính mạch lạc." }
                          ]
                        },
                        {
                          id: 2017,
                          name: "b. Cách viết email trang trọng",
                          detail: [
                            { id: 3033, name: "Email trang trọng cần bắt đầu bằng lời chào phù hợp, như 「〇〇様」 hoặc 「拝啓」." },
                            { id: 3034, name: "Nội dung email nên ngắn gọn, rõ ràng, và sử dụng kính ngữ (敬語) đúng mức độ với người nhận." },
                            { id: 3035, name: "Chú ý: Kết thúc email bằng cụm như 「よろしくお願いいたします」 hoặc 「敬具」 để thể hiện sự lịch sự." }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 509,
                  name: "Âm ngắt",
                  concept: [
                    {
                      id: 1009,
                      name: "I. Mẫu câu",
                      text: "1. Mẫu câu:",
                      content: [
                        { id: 2018, name: "Danh từ 1 は Danh từ 2 です" },
                        { id: 2019, name: "Danh từ 1 là danh từ 2" }
                      ]
                    },
                    {
                      id: 1010,
                      name: "II. Cách phát âm",
                      text: "2. Phân tích cách phát âm âm ngắt:",
                      content: [
                        {
                          id: 2020,
                          name: "a. Âm ngắt 「ッ」",
                          detail: [
                            { id: 3036, name: "Âm ngắt 「ッ」 (sokuon) biểu thị một khoảng dừng ngắn trong phát âm, làm cho âm tiết tiếp theo được nhấn mạnh." },
                            { id: 3037, name: "Âm ngắt thường xuất hiện trước các phụ âm như 「カ」「キ」「ク」「ケ」「コ」, 「タ」「チ」「ツ」「テ」「ト」, hoặc 「パ」「ピ」「プ」「ペ」「ポ」." },
                            { id: 3038, name: "Chú ý: Âm ngắt không được phát âm thành một âm riêng mà chỉ kéo dài khoảng dừng trước âm tiếp theo." }
                          ]
                        },
                        {
                          id: 2021,
                          name: "b. Phân biệt âm ngắt và âm thường",
                          detail: [
                            { id: 3039, name: "Âm ngắt 「ッ」 làm thay đổi ý nghĩa của từ nếu bị bỏ qua, ví dụ: 「キット」(kitto, chắc chắn) khác với 「キト」(kito, không có nghĩa)." },
                            { id: 3040, name: "Khi viết romaji, âm ngắt được biểu thị bằng cách lặp lại phụ âm, ví dụ: 「サッカー」 được viết là sakkaa." },
                            { id: 3041, name: "Chú ý: Cần luyện tập nghe và phát âm chính xác để tránh nhầm lẫn giữa từ có âm ngắt và từ không có âm ngắt." }
                          ]
                        }
                      ]
                    },
                    {
                      id: 1011,
                      name: "III. Cách viết",
                      text: "3. Phân tích kỹ năng viết với âm ngắt:",
                      content: [
                        {
                          id: 2022,
                          name: "a. Cách viết từ có âm ngắt",
                          detail: [
                            { id: 3042, name: "Khi viết từ có âm ngắt, sử dụng ký tự 「ッ」 nhỏ đứng trước âm tiết cần nhấn mạnh." },
                            { id: 3043, name: "Ví dụ: 「サッカー」 (sakkaa) được viết với 「ッ」 để biểu thị âm ngắt giữa 「サ」 và 「カー」." },
                            { id: 3044, name: "Chú ý: Không nhầm lẫn 「ッ」 nhỏ với 「ツ」 lớn, vì chúng có cách phát âm và ý nghĩa khác nhau." }
                          ]
                        },
                        {
                          id: 2023,
                          name: "b. Cách sử dụng âm ngắt trong văn viết",
                          detail: [
                            { id: 3045, name: "Âm ngắt thường xuất hiện trong các từ mượn hoặc từ biểu cảm để tăng tính nhấn mạnh, ví dụ: 「ピザ」 (piZa, pizza)." },
                            { id: 3046, name: "Trong văn viết trang trọng, cần đảm bảo viết đúng âm ngắt để tránh gây hiểu nhầm về ý nghĩa." },
                            { id: 3047, name: "Chú ý: Kiểm tra kỹ từ điển khi viết các từ có âm ngắt, đặc biệt với từ mượn hoặc từ ít gặp." }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 102,
              name: "Số đếm",
              detail: [
                { id: 500, name: "いち", text: "1" },
                { id: 501, name: "に", text: "2" },
                { id: 502, name: "さん", text: "3" },
                { id: 503, name: "よん", text: "4" },
                { id: 504, name: "ご", text: "5" },
                { id: 505, name: "ろく", text: "6" },
                { id: 506, name: "なな", text: "7" },
                { id: 507, name: "はち", text: "8" },
                { id: 508, name: "く", text: "9" },
                { id: 509, name: "じゅう", text: "10" },
                { id: 510, name: "じゅういち", text: "11" }
              ]
            }
          ]
        },
        
      ],
    },
    
    
  ];
}
localStorage.setItem('users', JSON.stringify(users));
