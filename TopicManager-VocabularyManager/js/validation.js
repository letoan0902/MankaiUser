let topicId = localStorage.getItem("topicId");
if (topicId) {
  topicId = JSON.parse(topicId);
} else {
  topicId = -1;
}
let courseId = localStorage.getItem("courseId");
if (courseId) {
  courseId = JSON.parse(courseId);
} else {
  courseId = -1;
}

let lessonId = localStorage.getItem("lessonId");
if (lessonId) {
  lessonId = JSON.parse(lessonId);
} else {
  lessonId = -1;
}



let dictionary = localStorage.getItem("dictionary");

if (dictionary) {
  dictionary = JSON.parse(dictionary);
} else {
  dictionary = [
    {
      id: 100,
      name: "Thẻ Từ Vựng Kanji Tiếng Nhật",
      vocabulary: [
        {
          id: 200, kanji: "導", meaning: "Dẫn dắt",
          components: [
            "道", "con đường",
            "寸", "tấc"
          ],
          structure: [
            { id: 1000, name: "Onyomi", text: "DOU", example: "Homer buồn bã khi thanh carbon vô tri được chọn làm người dẫn dắt, một lần nữa." },
            { id: 1001, name: "Kunyomi", text: "みちび*く", example: "dẫn dắt hoặc hướng dẫn - theo nghĩa hướng dẫn TÂM LÝ, cải tạo một thiếu niên phạm pháp, dẫn dắt bằng ví dụ, v.v." },
            { id: 1002, name: "Mnemonic", text: "Con đường này nguy hiểm, vì vậy hãy bám sát và đi theo người dẫn dắt của bạn như keo dính." },
            {
              id: 1003, name: "Jukugo",
              list: [
                {
                  id: 2000, name: "誘導", text: "ゆうどう", meaning: "Dẫn dắt",
                  components: [
                    "誘", "mời / lôi kéo",
                    "導", "dẫn dắt",
                    "誘導", "dẫn dắt"
                  ],
                  example: "dẫn dắt hoặc điều khiển: Một giáo viên dẫn lớp đi dã ngoại. Nữ cảnh sát điều khiển giao thông. Ý nghĩa của 誘導 là thực sự đi cùng mọi người đến nơi đó."
                },
                {
                  id: 2001, name: "導入", text: "どうにゅう", meaning: "Giới thiệu khái niệm mới",
                  components: [
                    "導", "dẫn dắt",
                    "入", "đi vào",
                    "導入", "giới thiệu khái niệm mới"
                  ],
                  example: "dẫn dắt hoặc điều khiển: Một giáo viên dẫn lớp đi dã ngoại. Nữ cảnh sát điều khiển giao thông. Ý nghĩa của 導入 là giới thiệu một khái niệm hoặc hệ thống mới."
                }
              ]
            },
            {
              id: 1004, name: "Từ trông giống nhau",
              list: [
                {
                  id: 2000, name: "闘", meaning: "Đấu tranh",
                  hints: ["Đậu", "豆"]
                },
                {
                  id: 2001, name: "暗", meaning: "Bóng tối đen kịt",
                  hints: ["Âm thanh", "音"]
                },
                {
                  id: 2002, name: "派", meaning: "Nhóm bè phái",
                  hints: ["Con người", "人"]
                }
              ],
              note: "ĐẬU khiến bạn đấu tranh với việc xì hơi, và bạn nghe thấy ÂM THANH ngay cả trong một căn phòng tối đen.<br/>Các nhóm bè phái được tạo thành từ CON NGƯỜI!"
            },
            {
              id: 1005, name: "Từ đồng nghĩa", quantity: 4,
              list: [
                { id: 2000, name: "Cuộc thi, trò chơi", text: "試合 競争 競技 争う 勝負 競う 闘う" },
                { id: 2001, name: "Đánh nhau", text: "喧嘩 戦う 闘う もみあい 殴り合い 戦闘 合戦" },
                { id: 2002, name: "Can đảm", text: "闘志 根性 意地" },
                { id: 2003, name: "Cố gắng hết sức", text: "一生懸命 努力 必死 奮闘" }
              ]
            }
          ]
        },
        {
          id: 201, kanji: "学", meaning: "Học",
          components: [
            "子", "con trẻ",
            "冖", "mũ",
            "儿", "chân người"
          ],
          structure: [
            { id: 1100, name: "Onyomi", text: "GAKU", example: "Một trường học (学校) đầy trẻ em đang học hành chăm chỉ." },
            { id: 1101, name: "Kunyomi", text: "まな*ぶ", example: "Học tập hoặc nghiên cứu, như một học sinh chăm chỉ ghi chép bài." },
            { id: 1102, name: "Mnemonic", text: "Trẻ em (子) đội mũ (冖) và bước đi (儿) đến trường để học." },
            {
              id: 1103, name: "Jukugo",
              list: [
                {
                  id: 2100, name: "学校", text: "がっこう", meaning: "Trường học",
                  components: [
                    "学", "học",
                    "校", "trường",
                    "学校", "trường học"
                  ],
                  example: "Nơi trẻ em đến để học: Học sinh đến trường mỗi sáng."
                },
                {
                  id: 2101, name: "学生", text: "がくせい", meaning: "Học sinh, sinh viên",
                  components: [
                    "学", "học",
                    "生", "sống, sinh",
                    "学生", "học sinh, sinh viên"
                  ],
                  example: "Người đang học: Sinh viên đại học chuẩn bị cho kỳ thi."
                }
              ]
            },
            {
              id: 1104, name: "Từ trông giống nhau",
              list: [
                {
                  id: 2102, name: "挙", meaning: "Nâng lên",
                  hints: ["Tay", "手"]
                },
                {
                  id: 2103, name: "覚", meaning: "Ghi nhớ",
                  hints: ["Mắt", "目"]
                }
              ],
              note: "TAY nâng lên (挙) để trả lời câu hỏi, còn MẮT giúp ghi nhớ (覚) bài học."
            },
            {
              id: 1105, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 2104, name: "Học tập", text: "勉強 学習 修学" },
                { id: 2105, name: "Trường học", text: "学校 学園 学院" }
              ]
            }
          ]
        },
        {
          id: 202, kanji: "見", meaning: "Nhìn, thấy",
          components: [
            "目", "mắt",
            "儿", "chân người"
          ],
          structure: [
            { id: 1200, name: "Onyomi", text: "KEN", example: "Nhìn thấy một cảnh đẹp (風景) từ ngọn đồi." },
            { id: 1201, name: "Kunyomi", text: "み*る", example: "Nhìn hoặc xem: Nhìn một bộ phim trên TV." },
            { id: 1202, name: "Mnemonic", text: "Dùng mắt (目) để nhìn, chân (儿) đưa bạn đến nơi có thể thấy rõ." },
            {
              id: 1203, name: "Jukugo",
              list: [
                {
                  id: 2200, name: "発見", text: "はっけん", meaning: "Phát hiện",
                  components: [
                    "発", "phát ra",
                    "見", "nhìn",
                    "発見", "phát hiện"
                  ],
                  example: "Tìm thấy điều mới: Nhà khoa học phát hiện một loài mới."
                },
                {
                  id: 2201, name: "見学", text: "けんがく", meaning: "Tham quan",
                  components: [
                    "見", "nhìn",
                    "学", "học",
                    "見学", "tham quan"
                  ],
                  example: "Tham quan học hỏi: Học sinh tham quan bảo tàng."
                }
              ]
            },
            {
              id: 1204, name: "Từ trông giống nhau",
              list: [
                {
                  id: 2202, name: "貝", meaning: "Vỏ sò",
                  hints: ["Tiền", "金"]
                },
                {
                  id: 2203, name: "負", meaning: "Thua",
                  hints: ["Gánh nặng", "力"]
                }
              ],
              note: "TIỀN mua vỏ sò (貝), còn GÁNH NẶNG khiến bạn thua (負)."
            },
            {
              id: 1205, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 2204, name: "Nhìn, xem", text: "観る 眺める 見つめる" },
                { id: 2205, name: "Phát hiện", text: "発見 探す 見つける" }
              ]
            }
          ]
        },
        {
          id: 203, kanji: "生", meaning: "Sống, sinh ra",
          components: [
            "生", "sống, tự nhiên"
          ],
          structure: [
            { id: 1300, name: "Onyomi", text: "SEI, SHOU", example: "Sinh viên (学生) sống cuộc đời năng động." },
            { id: 1301, name: "Kunyomi", text: "い*きる, う*まれる", example: "Sống hoặc được sinh ra: Một đứa trẻ được sinh ra trong niềm vui." },
            { id: 1302, name: "Mnemonic", text: "Một cây non mọc lên từ đất, tượng trưng cho sự sống (生)." },
            {
              id: 1303, name: "Jukugo",
              list: [
                {
                  id: 2300, name: "生活", text: "せいかつ", meaning: "Cuộc sống",
                  components: [
                    "生", "sống",
                    "活", "hoạt động",
                    "生活", "cuộc sống"
                  ],
                  example: "Cách sống hàng ngày: Anh ấy có cuộc sống đơn giản."
                },
                {
                  id: 2301, name: "生徒", text: "せいと", meaning: "Học sinh",
                  components: [
                    "生", "sống, sinh",
                    "徒", "người đi bộ",
                    "生徒", "học sinh"
                  ],
                  example: "Học sinh trung học: Họ học chăm chỉ để thi đại học."
                }
              ]
            },
            {
              id: 1304, name: "Từ trông giống nhau",
              list: [
                {
                  id: 2302, name: "産", meaning: "Sản xuất",
                  hints: ["Đứng", "立"]
                },
                {
                  id: 2303, name: "星", meaning: "Ngôi sao",
                  hints: ["Mặt trời", "日"]
                }
              ],
              note: "ĐỨNG trên đất để sản xuất (産), còn MẶT TRỜI chiếu sáng ngôi sao (星)."
            },
            {
              id: 1305, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 2304, name: "Sống", text: "生きる 生存 生涯" },
                { id: 2305, name: "Sinh ra", text: "生まれる 誕生 出生" }
              ]
            }
          ]
        },
        {
          id: 204, kanji: "日", meaning: "Mặt trời, ngày",
          components: [
            "日", "mặt trời"
          ],
          structure: [
            { id: 1400, name: "Onyomi", text: "NICHI, JITSU", example: "Mỗi ngày (毎日) mặt trời mọc." },
            { id: 1401, name: "Kunyomi", text: "ひ, か", example: "Ngày hoặc mặt trời: Một ngày nắng đẹp." },
            { id: 1402, name: "Mnemonic", text: "Mặt trời (日) mọc mỗi ngày, chiếu sáng thế giới." },
            {
              id: 1403, name: "Jukugo",
              list: [
                {
                  id: 2400, name: "毎日", text: "まいにち", meaning: "Mỗi ngày",
                  components: [
                    "毎", "mỗi",
                    "日", "ngày",
                    "毎日", "mỗi ngày"
                  ],
                  example: "Hàng ngày: Tôi đọc sách mỗi ngày."
                },
                {
                  id: 2401, name: "日曜", text: "にちよう", meaning: "Chủ nhật",
                  components: [
                    "日", "ngày",
                    "曜", "ngày trong tuần",
                    "日曜", "Chủ nhật"
                  ],
                  example: "Ngày nghỉ: Chủ nhật là ngày thư giãn."
                }
              ]
            },
            {
              id: 1404, name: "Từ trông giống nhau",
              list: [
                {
                  id: 2402, name: "白", meaning: "Trắng",
                  hints: ["Gạo", "米"]
                },
                {
                  id: 2403, name: "目", meaning: "Mắt",
                  hints: ["Nhìn", "見"]
                }
              ],
              note: "GẠO trắng (白) sáng như mặt trời, còn NHÌN bằng mắt (目) để thấy ngày."
            },
            {
              id: 1405, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 2404, name: "Ngày", text: "日 昼 毎日" },
                { id: 2405, name: "Mặt trời", text: "太陽 日光 陽" }
              ]
            }
          ]
        },
        {
          id: 205, kanji: "月", meaning: "Mặt trăng, tháng",
          components: [
            "月", "mặt trăng"
          ],
          structure: [
            { id: 1500, name: "Onyomi", text: "GETSU, GATSU", example: "Tháng Giêng (一月) là tháng đầu năm." },
            { id: 1501, name: "Kunyomi", text: "つき", example: "Mặt trăng hoặc tháng: Mặt trăng sáng trên bầu trời đêm." },
            { id: 1502, name: "Mnemonic", text: "Mặt trăng (月) chiếu sáng mỗi tháng, dẫn lối trong đêm." },
            {
              id: 1503, name: "Jukugo",
              list: [
                {
                  id: 2500, name: "月曜", text: "げつよう", meaning: "Thứ hai",
                  components: [
                    "月", "tháng",
                    "曜", "ngày trong tuần",
                    "月曜", "Thứ hai"
                  ],
                  example: "Ngày làm việc: Thứ hai là ngày bắt đầu tuần."
                },
                {
                  id: 2501, name: "三月", text: "さんがつ", meaning: "Tháng Ba",
                  components: [
                    "三", "ba",
                    "月", "tháng",
                    "三月", "Tháng Ba"
                  ],
                  example: "Tháng mùa xuân: Tháng Ba hoa anh đào nở."
                }
              ]
            },
            {
              id: 1504, name: "Từ trông giống nhau",
              list: [
                {
                  id: 2502, name: "肉", meaning: "Thịt",
                  hints: ["Ăn", "食"]
                },
                {
                  id: 2503, name: "舟", meaning: "Con thuyền",
                  hints: ["Nước", "水"]
                }
              ],
              note: "ĂN thịt (肉) vào ban đêm, còn THUYỀN (舟) trôi trên nước dưới ánh trăng."
            },
            {
              id: 1505, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 2504, name: "Tháng", text: "月 毎月 暦" },
                { id: 2505, name: "Mặt trăng", text: "月 満月 夜光" }
              ]
            }
          ]
        },
        {
          id: 206, kanji: "水", meaning: "Nước",
          components: [
            "水", "nước, dòng chảy"
          ],
          structure: [
            { id: 1600, name: "Onyomi", text: "SUI", example: "Nước sạch (清水) chảy từ núi." },
            { id: 1601, name: "Kunyomi", text: "みず", example: "Nước: Một ly nước mát lạnh." },
            { id: 1602, name: "Mnemonic", text: "Nước (水) chảy như dòng sông, mát lành và trong trẻo." },
            {
              id: 1603, name: "Jukugo",
              list: [
                {
                  id: 2600, name: "水曜", text: "すいよう", meaning: "Thứ tư",
                  components: [
                    "水", "nước",
                    "曜", "ngày trong tuần",
                    "水曜", "Thứ tư"
                  ],
                  example: "Ngày giữa tuần: Thứ tư thường bận rộn."
                },
                {
                  id: 2601, name: "清水", text: "しみず", meaning: "Nước sạch",
                  components: [
                    "清", "trong sạch",
                    "水", "nước",
                    "清水", "nước sạch"
                  ],
                  example: "Nước tinh khiết: Nước suối trong vắt."
                }
              ]
            },
            {
              id: 1604, name: "Từ trông giống nhau",
              list: [
                {
                  id: 2602, name: "永", meaning: "Vĩnh viễn",
                  hints: ["Thời gian", "時"]
                },
                {
                  id: 2603, name: "氷", meaning: "Nước đá",
                  hints: ["Lạnh", "冷"]
                }
              ],
              note: "THỜI GIAN trôi mãi mãi (永), còn LẠNH tạo nước đá (氷) từ nước."
            },
            {
              id: 1605, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 2604, name: "Nước", text: "水 液体 清水" },
                { id: 2605, name: "Dòng chảy", text: "流れ 川 滝" }
              ]
            }
          ]
        },
        {
          id: 207, kanji: "火", meaning: "Lửa",
          components: [
            "火", "ngọn lửa"
          ],
          structure: [
            { id: 1700, name: "Onyomi", text: "KA", example: "Ngọn lửa (火事) bùng cháy dữ dội." },
            { id: 1701, name: "Kunyomi", text: "ひ", example: "Lửa: Ngọn lửa trong lò sưởi ấm áp." },
            { id: 1702, name: "Mnemonic", text: "Ngọn lửa (火) cháy đỏ, sưởi ấm cả bầu trời đêm." },
            {
              id: 1703, name: "Jukugo",
              list: [
                {
                  id: 2700, name: "火曜", text: "かよう", meaning: "Thứ ba",
                  components: [
                    "火", "lửa",
                    "曜", "ngày trong tuần",
                    "火曜", "Thứ ba"
                  ],
                  example: "Ngày năng động: Thứ ba tôi đi tập gym."
                },
                {
                  id: 2701, name: "火事", text: "かじ", meaning: "Cháy nhà",
                  components: [
                    "火", "lửa",
                    "事", "sự việc",
                    "火事", "cháy nhà"
                  ],
                  example: "Sự cố nguy hiểm: Xe cứu hỏa đến dập đám cháy."
                }
              ]
            },
            {
              id: 1704, name: "Từ trông giống nhau",
              list: [
                {
                  id: 2702, name: "犬", meaning: "Chó",
                  hints: ["Động vật", "獣"]
                },
                {
                  id: 2703, name: "灯", meaning: "Đèn",
                  hints: ["Ánh sáng", "光"]
                }
              ],
              note: "ĐỘNG VẬT như chó (犬) chạy quanh lửa, còn ÁNH SÁNG từ đèn (灯) giống ngọn lửa."
            },
            {
              id: 1705, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 2704, name: "Lửa", text: "火 炎 燃える" },
                { id: 2705, name: "Cháy", text: "火事 燃焼 発火" }
              ]
            }
          ]
        },
        {
          id: 208, kanji: "木", meaning: "Cây, gỗ",
          components: [
            "木", "cây"
          ],
          structure: [
            { id: 1800, name: "Onyomi", text: "MOKU, BOKU", example: "Cây cối (樹木) mọc xanh tốt trong rừng." },
            { id: 1801, name: "Kunyomi", text: "き", example: "Cây: Một cây anh đào nở hoa." },
            { id: 1802, name: "Mnemonic", text: "Cây (木) đứng thẳng, lá xanh rợp bóng mát." },
            {
              id: 1803, name: "Jukugo",
              list: [
                {
                  id: 2800, name: "木曜", text: "もくよう", meaning: "Thứ năm",
                  components: [
                    "木", "cây",
                    "曜", "ngày trong tuần",
                    "木曜", "Thứ năm"
                  ],
                  example: "Ngày thư giãn: Thứ năm tôi đi dạo công viên."
                },
                {
                  id: 2801, name: "樹木", text: "じゅもく", meaning: "Cây cối",
                  components: [
                    "樹", "cây lớn",
                    "木", "cây",
                    "樹木", "cây cối"
                  ],
                  example: "Rừng cây: Công viên đầy cây xanh."
                }
              ]
            },
            {
              id: 1804, name: "Từ trông giống nhau",
              list: [
                {
                  id: 2802, name: "本", meaning: "Sách, gốc",
                  hints: ["Gốc", "元"]
                },
                {
                  id: 2803, name: "林", meaning: "Rừng nhỏ",
                  hints: ["Nhiều cây", "森"]
                }
              ],
              note: "GỐC của sách (本) giống một cây, còn NHIỀU CÂY tạo thành rừng nhỏ (林)."
            },
            {
              id: 1805, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 2804, name: "Cây", text: "木 樹 植える" },
                { id: 2805, name: "Gỗ", text: "木材 木製 木工" }
              ]
            }
          ]
        },
        {
          id: 209, kanji: "金", meaning: "Vàng, kim loại",
          components: [
            "金", "kim loại"
          ],
          structure: [
            { id: 1900, name: "Onyomi", text: "KIN, KON", example: "Tiền vàng (金銭) sáng lấp lánh." },
            { id: 1901, name: "Kunyomi", text: "かね", example: "Tiền hoặc vàng: Một chiếc nhẫn vàng." },
            { id: 1902, name: "Mnemonic", text: "Vàng (金) sáng chói, quý giá như kim loại hoàng gia." },
            {
              id: 1903, name: "Jukugo",
              list: [
                {
                  id: 2900, name: "金曜", text: "きんよう", meaning: "Thứ sáu",
                  components: [
                    "金", "vàng",
                    "曜", "ngày trong tuần",
                    "金曜", "Thứ sáu"
                  ],
                  example: "Ngày cuối tuần: Thứ sáu tôi đi xem phim."
                },
                {
                  id: 2901, name: "金銭", text: "きんせん", meaning: "Tiền bạc",
                  components: [
                    "金", "vàng",
                    "銭", "tiền",
                    "金銭", "tiền bạc"
                  ],
                  example: "Tài chính: Anh ấy quản lý tiền bạc cẩn thận."
                }
              ]
            },
            {
              id: 1904, name: "Từ trông giống nhau",
              list: [
                {
                  id: 2902, name: "全", meaning: "Toàn bộ",
                  hints: ["Cả", "総"]
                },
                {
                  id: 2903, name: "針", meaning: "Kim",
                  hints: ["Chỉ", "糸"]
                }
              ],
              note: "CẢ thế giới (全) quý giá như vàng, còn CHỈ may với kim (針)."
            },
            {
              id: 1905, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 2904, name: "Vàng", text: "金 黄金 貴金属" },
                { id: 2905, name: "Tiền", text: "お金 金銭 貨幣" }
              ]
            }
          ]
        },
        {
          id: 210, kanji: "土", meaning: "Đất",
          components: [
            "土", "đất, nền"
          ],
          structure: [
            { id: 2000, name: "Onyomi", text: "DO, TO", example: "Đất đai (土地) màu mỡ nuôi dưỡng cây cối." },
            { id: 2001, name: "Kunyomi", text: "つち", example: "Đất: Đất vườn rất tơi xốp." },
            { id: 2002, name: "Mnemonic", text: "Đất (土) là nền tảng, nuôi dưỡng mọi sự sống." },
            {
              id: 2003, name: "Jukugo",
              list: [
                {
                  id: 3000, name: "土曜", text: "どよう", meaning: "Thứ bảy",
                  components: [
                    "土", "đất",
                    "曜", "ngày trong tuần",
                    "土曜", "Thứ bảy"
                  ],
                  example: "Ngày cuối tuần: Thứ bảy tôi đi chơi với bạn."
                },
                {
                  id: 3001, name: "土地", text: "とち", meaning: "Đất đai",
                  components: [
                    "土", "đất",
                    "地", "mặt đất",
                    "土地", "đất đai"
                  ],
                  example: "Bất động sản: Anh ấy mua một mảnh đất lớn."
                }
              ]
            },
            {
              id: 2004, name: "Từ trông giống nhau",
              list: [
                {
                  id: 3002, name: "士", meaning: "Học giả",
                  hints: ["Người", "人"]
                },
                {
                  id: 3003, name: "干", meaning: "Khô",
                  hints: ["Nước", "水"]
                }
              ],
              note: "NGƯỜI học giả (士) đứng trên đất, còn NƯỚC khô (干) biến mất khỏi đất."
            },
            {
              id: 2005, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 3004, name: "Đất", text: "土 地面 地盤" },
                { id: 3005, name: "Nền tảng", text: "基礎 基盤 土台" }
              ]
            }
          ]
        },
        {
          id: 211, kanji: "人", meaning: "Người",
          components: [
            "人", "người đứng"
          ],
          structure: [
            { id: 2100, name: "Onyomi", text: "JIN, NIN", example: "Con người (人間) sống hòa thuận với nhau." },
            { id: 2101, name: "Kunyomi", text: "ひと", example: "Người: Một người đi bộ trên đường." },
            { id: 2102, name: "Mnemonic", text: "Người (人) đứng thẳng, đôi chân vững chãi trên đất." },
            {
              id: 2103, name: "Jukugo",
              list: [
                {
                  id: 3100, name: "人間", text: "にんげん", meaning: "Con người",
                  components: [
                    "人", "người",
                    "間", "khoảng cách",
                    "人間", "con người"
                  ],
                  example: "Loài người: Con người có trí tuệ vượt trội."
                },
                {
                  id: 3101, name: "大人", text: "おとな", meaning: "Người lớn",
                  components: [
                    "大", "lớn",
                    "人", "người",
                    "大人", "người lớn"
                  ],
                  example: "Người trưởng thành: Người lớn phải chịu trách nhiệm."
                }
              ]
            },
            {
              id: 2104, name: "Từ trông giống nhau",
              list: [
                {
                  id: 3102, name: "入", meaning: "Vào",
                  hints: ["Cửa", "門"]
                },
                {
                  id: 3103, name: "个", meaning: "Cá nhân",
                  hints: ["Số", "数"]
                }
              ],
              note: "CỬA dẫn vào (入) nơi có người, còn SỐ đếm cá nhân (个)."
            },
            {
              id: 2105, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 3104, name: "Người", text: "人 人間 個人" },
                { id: 3105, name: "Nhân loại", text: "人類 人間 民" }
              ]
            }
          ]
        },
        {
          id: 212, kanji: "口", meaning: "Miệng",
          components: [
            "口", "miệng mở"
          ],
          structure: [
            { id: 2200, name: "Onyomi", text: "KOU, KU", example: "Lối vào (入口) dẫn qua miệng hang." },
            { id: 2201, name: "Kunyomi", text: "くち", example: "Miệng: Miệng nói lời chân thành." },
            { id: 2202, name: "Mnemonic", text: "Miệng (口) mở rộng, nói và ăn uống mỗi ngày." },
            {
              id: 2203, name: "Jukugo",
              list: [
                {
                  id: 3200, name: "入口", text: "いりぐち", meaning: "Lối vào",
                  components: [
                    "入", "vào",
                    "口", "miệng",
                    "入口", "lối vào"
                  ],
                  example: "Cửa ra vào: Lối vào tòa nhà rất rộng."
                },
                {
                  id: 3201, name: "出口", text: "でぐち", meaning: "Lối ra",
                  components: [
                    "出", "ra",
                    "口", "miệng",
                    "出口", "lối ra"
                  ],
                  example: "Cửa thoát: Lối ra nằm ở phía sau."
                }
              ]
            },
            {
              id: 2204, name: "Từ trông giống nhau",
              list: [
                {
                  id: 3202, name: "日", meaning: "Ngày",
                  hints: ["Mặt trời", "太陽"]
                },
                {
                  id: 3203, name: "田", meaning: "Ruộng",
                  hints: ["Đất", "土"]
                }
              ],
              note: "MẶT TRỜI sáng như ngày (日), còn ĐẤT tạo thành ruộng (田)."
            },
            {
              id: 2205, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 3204, name: "Miệng", text: "口 唇 舌" },
                { id: 3205, name: "Lối vào", text: "入口 門 戸" }
              ]
            }
          ]
        },
        {
          id: 213, kanji: "手", meaning: "Tay",
          components: [
            "手", "bàn tay"
          ],
          structure: [
            { id: 2300, name: "Onyomi", text: "SHU", example: "Bàn tay (手紙) viết thư đầy cảm xúc." },
            { id: 2301, name: "Kunyomi", text: "て", example: "Tay: Bàn tay nắm chặt cây bút." },
            { id: 2302, name: "Mnemonic", text: "Tay (手) vươn ra, chạm vào mọi thứ trong đời." },
            {
              id: 2303, name: "Jukugo",
              list: [
                {
                  id: 3300, name: "手紙", text: "てがみ", meaning: "Lá thư",
                  components: [
                    "手", "tay",
                    "紙", "giấy",
                    "手紙", "lá thư"
                  ],
                  example: "Thư tay: Tôi nhận được một lá thư từ bạn."
                },
                {
                  id: 3301, name: "手術", text: "しゅじゅつ", meaning: "Phẫu thuật",
                  components: [
                    "手", "tay",
                    "術", "kỹ thuật",
                    "手術", "phẫu thuật"
                  ],
                  example: "Ca mổ: Bác sĩ thực hiện phẫu thuật cứu người."
                }
              ]
            },
            {
              id: 2304, name: "Từ trông giống nhau",
              list: [
                {
                  id: 3302, name: "才", meaning: "Tài năng",
                  hints: ["Khả năng", "能"]
                },
                {
                  id: 3303, name: "寸", meaning: "Tấc",
                  hints: ["Đo lường", "尺"]
                }
              ],
              note: "KHẢ NĂNG tạo tài năng (才), còn ĐO LƯỜNG bằng tấc (寸)."
            },
            {
              id: 2305, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 3304, name: "Tay", text: "手 腕 指" },
                { id: 3305, name: "Hành động", text: "行動 作業 手作業" }
              ]
            }
          ]
        },
        {
          id: 214, kanji: "足", meaning: "Chân",
          components: [
            "口", "miệng",
            "止", "dừng",
            "足", "chân"
          ],
          structure: [
            { id: 2400, name: "Onyomi", text: "SOKU", example: "Bàn chân (足跡) in dấu trên cát." },
            { id: 2401, name: "Kunyomi", text: "あし, た*りる", example: "Chân hoặc đủ: Đôi chân chạy nhanh." },
            { id: 2402, name: "Mnemonic", text: "Chân (足) bước đi, để lại dấu chân trên hành trình." },
            {
              id: 2403, name: "Jukugo",
              list: [
                {
                  id: 3400, name: "足跡", text: "あしあと", meaning: "Dấu chân",
                  components: [
                    "足", "chân",
                    "跡", "dấu vết",
                    "足跡", "dấu chân"
                  ],
                  example: "Dấu vết: Dấu chân trên bãi biển."
                },
                {
                  id: 3401, name: "不足", text: "ふそく", meaning: "Thiếu thốn",
                  components: [
                    "不", "không",
                    "足", "đủ",
                    "不足", "thiếu thốn"
                  ],
                  example: "Thiếu hụt: Công ty thiếu nhân lực."
                }
              ]
            },
            {
              id: 2404, name: "Từ trông giống nhau",
              list: [
                {
                  id: 3402, name: "是", meaning: "Đúng",
                  hints: ["Chính", "正"]
                },
                {
                  id: 3403, name: "促", meaning: "Thúc đẩy",
                  hints: ["Người", "人"]
                }
              ],
              note: "CHÍNH xác (是) như bước chân, còn NGƯỜI thúc đẩy (促) hành động."
            },
            {
              id: 2405, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 3404, name: "Chân", text: "足 脚 肢" },
                { id: 3405, name: "Đủ", text: "十分 足りる 充足" }
              ]
            }
          ]
        },
        {
          id: 215, kanji: "心", meaning: "Trái tim, tâm",
          components: [
            "心", "trái tim"
          ],
          structure: [
            { id: 2500, name: "Onyomi", text: "SHIN", example: "Trái tim (中心) luôn hướng về gia đình." },
            { id: 2501, name: "Kunyomi", text: "こころ", example: "Trái tim: Tâm hồn cô ấy trong sáng." },
            { id: 2502, name: "Mnemonic", text: "Trái tim (心) đập, mang cảm xúc đến mọi nơi." },
            {
              id: 2503, name: "Jukugo",
              list: [
                {
                  id: 3500, name: "中心", text: "ちゅうしん", meaning: "Trung tâm",
                  components: [
                    "中", "giữa",
                    "心", "tâm",
                    "中心", "trung tâm"
                  ],
                  example: "Trọng tâm: Trung tâm thành phố rất sôi động."
                },
                {
                  id: 3501, name: "安心", text: "あんしん", meaning: "Yên tâm",
                  components: [
                    "安", "yên",
                    "心", "tâm",
                    "安心", "yên tâm"
                  ],
                  example: "An lòng: Tôi yên tâm khi biết bạn an toàn."
                }
              ]
            },
            {
              id: 2504, name: "Từ trông giống nhau",
              list: [
                {
                  id: 3502, name: "必", meaning: "Tất yếu",
                  hints: ["Phải", "要"]
                },
                {
                  id: 3503, name: "志", meaning: "Ý chí",
                  hints: ["Mục tiêu", "目標"]
                }
              ],
              note: "PHẢI làm điều tất yếu (必), còn MỤC TIÊU nuôi dưỡng ý chí (志)."
            },
            {
              id: 2505, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 3504, name: "Trái tim", text: "心 心情 胸" },
                { id: 3505, name: "Tâm trí", text: "精神 意識 魂" }
              ]
            }
          ]
        },
        {
          id: 216, kanji: "山", meaning: "Núi",
          components: [
            "山", "núi"
          ],
          structure: [
            { id: 2600, name: "Onyomi", text: "SAN", example: "Ngọn núi (火山) phun trào dữ dội." },
            { id: 2601, name: "Kunyomi", text: "やま", example: "Núi: Một ngọn núi phủ tuyết." },
            { id: 2602, name: "Mnemonic", text: "Núi (山) cao chót vót, chạm đến mây trời." },
            {
              id: 2603, name: "Jukugo",
              list: [
                {
                  id: 3600, name: "火山", text: "かざん", meaning: "Núi lửa",
                  components: [
                    "火", "lửa",
                    "山", "núi",
                    "火山", "núi lửa"
                  ],
                  example: "Hiện tượng tự nhiên: Núi lửa phun khói."
                },
                {
                  id: 3601, name: "登山", text: "とざん", meaning: "Leo núi",
                  components: [
                    "登", "leo",
                    "山", "núi",
                    "登山", "leo núi"
                  ],
                  example: "Hoạt động: Leo núi là thử thách thú vị."
                }
              ]
            },
            {
              id: 2604, name: "Từ trông giống nhau",
              list: [
                {
                  id: 3602, name: "川", meaning: "Sông",
                  hints: ["Nước", "水"]
                },
                {
                  id: 3603, name: "仙", meaning: "Tiên",
                  hints: ["Người", "人"]
                }
              ],
              note: "NƯỚC chảy thành sông (川), còn NGƯỜI tu thành tiên (仙) trên núi."
            },
            {
              id: 2605, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 3604, name: "Núi", text: "山 丘 峰" },
                { id: 3605, name: "Cao", text: "高い 頂上 嶺" }
              ]
            }
          ]
        },
        {
          id: 217, kanji: "川", meaning: "Sông",
          components: [
            "川", "dòng nước"
          ],
          structure: [
            { id: 2700, name: "Onyomi", text: "SEN", example: "Dòng sông (河川) chảy qua làng." },
            { id: 2701, name: "Kunyomi", text: "かわ", example: "Sông: Một con sông trong xanh." },
            { id: 2702, name: "Mnemonic", text: "Sông (川) chảy dài, mang nước đến muôn nơi." },
            {
              id: 2703, name: "Jukugo",
              list: [
                {
                  id: 3700, name: "河川", text: "かせん", meaning: "Sông ngòi",
                  components: [
                    "河", "sông lớn",
                    "川", "sông",
                    "河川", "sông ngòi"
                  ],
                  example: "Hệ thống nước: Sông ngòi cung cấp nước tưới."
                },
                {
                  id: 3701, name: "川岸", text: "かわぎし", meaning: "Bờ sông",
                  components: [
                    "川", "sông",
                    "岸", "bờ",
                    "川岸", "bờ sông"
                  ],
                  example: "Cảnh đẹp: Bờ sông đầy hoa cỏ."
                }
              ]
            },
            {
              id: 2704, name: "Từ trông giống nhau",
              list: [
                {
                  id: 3702, name: "山", meaning: "Núi",
                  hints: ["Đất", "土"]
                },
                {
                  id: 3703, name: "州", meaning: "Châu",
                  hints: ["Đảo", "島"]
                }
              ],
              note: "ĐẤT tạo thành núi (山), còn ĐẢO nằm giữa sông tạo châu (州)."
            },
            {
              id: 2705, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 3704, name: "Sông", text: "川 河 流れ" },
                { id: 3705, name: "Dòng nước", text: "水流 滝 渓流" }
              ]
            }
          ]
        },
        {
          id: 218, kanji: "田", meaning: "Ruộng",
          components: [
            "田", "cánh đồng"
          ],
          structure: [
            { id: 2800, name: "Onyomi", text: "DEN", example: "Cánh đồng (田園) xanh mướt lúa." },
            { id: 2801, name: "Kunyomi", text: "た", example: "Ruộng: Ruộng lúa chín vàng." },
            { id: 2802, name: "Mnemonic", text: "Ruộng (田) trải dài, nuôi sống cả làng." },
            {
              id: 2803, name: "Jukugo",
              list: [
                {
                  id: 3800, name: "田園", text: "でんえん", meaning: "Nông thôn",
                  components: [
                    "田", "ruộng",
                    "園", "vườn",
                    "田園", "nông thôn"
                  ],
                  example: "Cảnh quê: Nông thôn yên bình."
                },
                {
                  id: 3801, name: "水田", text: "すいでん", meaning: "Ruộng nước",
                  components: [
                    "水", "nước",
                    "田", "ruộng",
                    "水田", "ruộng nước"
                  ],
                  example: "Nông nghiệp: Ruộng nước trồng lúa."
                }
              ]
            },
            {
              id: 2804, name: "Từ trông giống nhau",
              list: [
                {
                  id: 3802, name: "由", meaning: "Lý do",
                  hints: ["Gốc", "元"]
                },
                {
                  id: 3803, name: "甲", meaning: "Giáp",
                  hints: ["Vỏ", "貝"]
                }
              ],
              note: "GỐC của lý do (由) như ruộng, còn VỎ giáp (甲) bảo vệ cánh đồng."
            },
            {
              id: 2805, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 3804, name: "Ruộng", text: "田 畑 農地" },
                { id: 3805, name: "Nông thôn", text: "田園 村 農村" }
              ]
            }
          ]
        },
        {
          id: 219, kanji: "林", meaning: "Rừng nhỏ",
          components: [
            "木", "cây",
            "木", "cây"
          ],
          structure: [
            { id: 2900, name: "Onyomi", text: "RIN", example: "Rừng nhỏ (森林) xanh mát." },
            { id: 2901, name: "Kunyomi", text: "はやし", example: "Rừng nhỏ: Một khu rừng nhỏ gần làng." },
            { id: 2902, name: "Mnemonic", text: "Hai cây (木) đứng cạnh nhau tạo thành rừng nhỏ (林)." },
            {
              id: 2903, name: "Jukugo",
              list: [
                {
                  id: 3900, name: "森林", text: "しんりん", meaning: "Rừng",
                  components: [
                    "森", "rừng lớn",
                    "林", "rừng nhỏ",
                    "森林", "rừng"
                  ],
                  example: "Hệ sinh thái: Rừng bảo vệ động vật hoang dã."
                },
                {
                  id: 3901, name: "林道", text: "りんどう", meaning: "Đường rừng",
                  components: [
                    "林", "rừng nhỏ",
                    "道", "đường",
                    "林道", "đường rừng"
                  ],
                  example: "Con đường: Đường rừng dẫn đến suối."
                }
              ]
            },
            {
              id: 2904, name: "Từ trông giống nhau",
              list: [
                {
                  id: 3902, name: "森", meaning: "Rừng lớn",
                  hints: ["Cây", "木"]
                },
                {
                  id: 3903, name: "麻", meaning: "Gai dầu",
                  hints: ["Sợi", "糸"]
                }
              ],
              note: "CÂY nhiều hơn tạo rừng lớn (森), còn SỢI làm từ gai dầu (麻)."
            },
            {
              id: 2905, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 3904, name: "Rừng", text: "林 森林 樹林" },
                { id: 3905, name: "Cây cối", text: "木々 植林 緑" }
              ]
            }
          ]
        },
        {
          id: 220, kanji: "森", meaning: "Rừng lớn",
          components: [
            "木", "cây",
            "木", "cây",
            "木", "cây"
          ],
          structure: [
            { id: 3000, name: "Onyomi", text: "SHIN", example: "Rừng lớn (森林) bao phủ ngọn núi." },
            { id: 3001, name: "Kunyomi", text: "もり", example: "Rừng: Một khu rừng lớn đầy bí ẩn." },
            { id: 3002, name: "Mnemonic", text: "Ba cây (木) tụ lại, tạo thành rừng lớn (森) rậm rạp." },
            {
              id: 3003, name: "Jukugo",
              list: [
                {
                  id: 4000, name: "森林", text: "しんりん", meaning: "Rừng",
                  components: [
                    "森", "rừng lớn",
                    "林", "rừng nhỏ",
                    "森林", "rừng"
                  ],
                  example: "Hệ sinh thái: Rừng bảo vệ động vật hoang dã."
                },
                {
                  id: 4001, name: "森羅", text: "しんら", meaning: "Vũ trụ",
                  components: [
                    "森", "rừng lớn",
                    "羅", "mạng lưới",
                    "森羅", "vũ trụ"
                  ],
                  example: "Triết học: Vũ trụ là một mạng lưới rộng lớn."
                }
              ]
            },
            {
              id: 3004, name: "Từ trông giống nhau",
              list: [
                {
                  id: 4002, name: "林", meaning: "Rừng nhỏ",
                  hints: ["Cây", "木"]
                },
                {
                  id: 4003, name: "桑", meaning: "Cây dâu",
                  hints: ["Lá", "葉"]
                }
              ],
              note: "CÂY ít hơn tạo rừng nhỏ (林), còn LÁ của cây dâu (桑) nuôi tằm."
            },
            {
              id: 3005, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 4004, name: "Rừng", text: "森 林 密林" },
                { id: 4005, name: "Rậm rạp", text: "茂る 繁茂 深林" }
              ]
            }
          ]
        },
        {
          id: 221, kanji: "空", meaning: "Bầu trời, trống",
          components: [
            "穴", "lỗ",
            "工", "công việc"
          ],
          structure: [
            { id: 3100, name: "Onyomi", text: "KUU", example: "Bầu trời (天空) xanh thẳm không mây." },
            { id: 3101, name: "Kunyomi", text: "そら, あ*く", example: "Bầu trời hoặc trống: Bầu trời đầy sao đêm." },
            { id: 3102, name: "Mnemonic", text: "Bầu trời (空) là một lỗ (穴) rộng lớn được tạo ra bởi công việc (工) của thiên nhiên." },
            {
              id: 3103, name: "Jukugo",
              list: [
                {
                  id: 4100, name: "天空", text: "てんくう", meaning: "Bầu trời",
                  components: [
                    "天", "trời",
                    "空", "bầu trời",
                    "天空", "bầu trời"
                  ],
                  example: "Cảnh đẹp: Bầu trời đêm lấp lánh."
                },
                {
                  id: 4101, name: "空港", text: "くうこう", meaning: "Sân bay",
                  components: [
                    "空", "bầu trời",
                    "港", "cảng",
                    "空港", "sân bay"
                  ],
                  example: "Nơi cất cánh: Máy bay cất cánh từ sân bay."
                }
              ]
            },
            {
              id: 3104, name: "Từ trông giống nhau",
              list: [
                {
                  id: 4102, name: "究", meaning: "Nghiên cứu",
                  hints: ["Học", "学"]
                },
                {
                  id: 4103, name: "突", meaning: "Đột phá",
                  hints: ["Sức mạnh", "力"]
                }
              ],
              note: "HỌC để nghiên cứu (究), còn SỨC MẠNH tạo đột phá (突) như bầu trời rộng mở."
            },
            {
              id: 3105, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 4104, name: "Bầu trời", text: "空 天 宇宙" },
                { id: 4105, name: "Trống", text: "空っぽ 空白 虚無" }
              ]
            }
          ]
        },
        {
          id: 222, kanji: "光", meaning: "Ánh sáng",
          components: [
            "火", "lửa",
            "儿", "chân người",
            "光", "ánh sáng"
          ],
          structure: [
            { id: 3200, name: "Onyomi", text: "KOU", example: "Ánh sáng (光線) chiếu qua cửa sổ." },
            { id: 3201, name: "Kunyomi", text: "ひかり", example: "Ánh sáng: Ánh sáng mặt trời rực rỡ." },
            { id: 3202, name: "Mnemonic", text: "Ánh sáng (光) như ngọn lửa trên chân, soi đường bạn đi." },
            {
              id: 3203, name: "Jukugo",
              list: [
                {
                  id: 4200, name: "光線", text: "こうせん", meaning: "Tia sáng",
                  components: [
                    "光", "ánh sáng",
                    "線", "đường",
                    "光線", "tia sáng"
                  ],
                  example: "Khoa học: Tia sáng khúc xạ qua lăng kính."
                },
                {
                  id: 4201, name: "観光", text: "かんこう", meaning: "Du lịch",
                  components: [
                    "観", "xem",
                    "光", "ánh sáng",
                    "観光", "du lịch"
                  ],
                  example: "Tham quan: Du lịch Nhật Bản rất thú vị."
                }
              ]
            },
            {
              id: 3204, name: "Từ trông giống nhau",
              list: [
                {
                  id: 4202, name: "栄", meaning: "Vinh quang",
                  hints: ["Cây", "木"]
                },
                {
                  id: 4203, name: "輝", meaning: "Tỏa sáng",
                  hints: ["Kim loại", "金"]
                }
              ],
              note: "CÂY vươn cao trong vinh quang (栄), còn KIM LOẠI tỏa sáng (輝) như ánh sáng."
            },
            {
              id: 3205, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 4204, name: "Ánh sáng", text: "光 輝き 明かり" },
                { id: 4205, name: "Sáng", text: "明るい 照らす 輝く" }
              ]
            }
          ]
        },
        {
          id: 223, kanji: "音", meaning: "Âm thanh",
          components: [
            "立", "đứng",
            "日", "ngày"
          ],
          structure: [
            { id: 3300, name: "Onyomi", text: "ON, IN", example: "Âm thanh (音楽) vang vọng trong phòng." },
            { id: 3301, name: "Kunyomi", text: "おと, ね", example: "Âm thanh: Tiếng chim hót buổi sáng." },
            { id: 3302, name: "Mnemonic", text: "Đứng (立) dưới ánh ngày (日), bạn nghe âm thanh (音) của thế giới." },
            {
              id: 3303, name: "Jukugo",
              list: [
                {
                  id: 4300, name: "音楽", text: "おんがく", meaning: "Âm nhạc",
                  components: [
                    "音", "âm thanh",
                    "楽", "vui vẻ",
                    "音楽", "âm nhạc"
                  ],
                  example: "Nghệ thuật: Âm nhạc làm tâm hồn thư thái."
                },
                {
                  id: 4301, name: "音声", text: "おんせい", meaning: "Giọng nói",
                  components: [
                    "音", "âm thanh",
                    "声", "tiếng",
                    "音声", "giọng nói"
                  ],
                  example: "Công nghệ: Ghi âm giọng nói rõ ràng."
                }
              ]
            },
            {
              id: 3304, name: "Từ trông giống nhau",
              list: [
                {
                  id: 4302, name: "暗", meaning: "Tối",
                  hints: ["Bóng tối", "黒"]
                },
                {
                  id: 4303, name: "意", meaning: "Ý định",
                  hints: ["Tâm", "心"]
                }
              ],
              note: "BÓNG TỐI che âm thanh (暗), còn TÂM nuôi ý định (意)."
            },
            {
              id: 3305, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 4304, name: "Âm thanh", text: "音 声 響き" },
                { id: 4305, name: "Tiếng", text: "音声 ノイズ 叫び" }
              ]
            }
          ]
        },
        {
          id: 224, kanji: "議", meaning: "Thảo luận, hội nghị",
          components: [
            "言", "lời nói",
            "義", "công lý",
            "羊", "con cừu"
          ],
          structure: [
            { id: 3400, name: "Onyomi", text: "GI", example: "Hội nghị (会議) bàn về kế hoạch mới." },
            { id: 3401, name: "Kunyomi", text: "なし", example: "Không có cách đọc Kunyomi phổ biến." },
            { id: 3402, name: "Mnemonic", text: "Lời nói (言) về công lý (義) trong hội nghị, như tiếng cừu (羊) vang vọng." },
            {
              id: 3403, name: "Jukugo",
              list: [
                {
                  id: 4400, name: "会議", text: "かいぎ", meaning: "Hội nghị",
                  components: [
                    "会", "gặp gỡ",
                    "議", "thảo luận",
                    "会議", "hội nghị"
                  ],
                  example: "Cuộc họp: Hội nghị diễn ra trong phòng lớn."
                },
                {
                  id: 4401, name: "議員", text: "ぎいん", meaning: "Nghị sĩ",
                  components: [
                    "議", "thảo luận",
                    "員", "thành viên",
                    "議員", "nghị sĩ"
                  ],
                  example: "Chính trị: Nghị sĩ thảo luận luật mới."
                }
              ]
            },
            {
              id: 3404, name: "Từ trông giống nhau",
              list: [
                {
                  id: 4402, name: "護", meaning: "Bảo vệ",
                  hints: ["Tay", "手"]
                },
                {
                  id: 4403, name: "識", meaning: "Kiến thức",
                  hints: ["Mắt", "目"]
                }
              ],
              note: "TAY bảo vệ (護) hội nghị, còn MẮT mang kiến thức (識)."
            },
            {
              id: 3405, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 4404, name: "Thảo luận", text: "議論 会議 対話" },
                { id: 4405, name: "Hội nghị", text: "集会 会合 議会" }
              ]
            }
          ]
        },
        {
          id: 225, kanji: "鑑", meaning: "Gương, giám định",
          components: [
            "金", "vàng",
            "監", "quan sát",
            "目", "mắt",
            "皿", "cái đĩa"
          ],
          structure: [
            { id: 3500, name: "Onyomi", text: "KAN", example: "Gương (鏡鑑) phản chiếu hình ảnh." },
            { id: 3501, name: "Kunyomi", text: "かがみ", example: "Gương: Một chiếc gương sáng bóng." },
            { id: 3502, name: "Mnemonic", text: "Vàng (金) trên gương (監) phản chiếu mắt (目) và cái đĩa (皿)." },
            {
              id: 3503, name: "Jukugo",
              list: [
                {
                  id: 4500, name: "鏡鑑", text: "きょうかん", meaning: "Gương mẫu",
                  components: [
                    "鏡", "gương",
                    "鑑", "gương",
                    "鏡鑑", "gương mẫu"
                  ],
                  example: "Tấm gương: Anh ấy là gương mẫu cho đồng nghiệp."
                },
                {
                  id: 4501, name: "鑑定", text: "かんてい", meaning: "Giám định",
                  components: [
                    "鑑", "giám định",
                    "定", "xác định",
                    "鑑定", "giám định"
                  ],
                  example: "Đánh giá: Chuyên gia giám định bức tranh cổ."
                }
              ]
            },
            {
              id: 3504, name: "Từ trông giống nhau",
              list: [
                {
                  id: 4502, name: "艦", meaning: "Tàu chiến",
                  hints: ["Thuyền", "舟"]
                },
                {
                  id: 4503, name: "濫", meaning: "Tràn lan",
                  hints: ["Nước", "水"]
                }
              ],
              note: "THUYỀN chiến (艦) sáng như gương, còn NƯỚC tràn lan (濫) làm mờ gương."
            },
            {
              id: 3505, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 4504, name: "Gương", text: "鏡 鑑 反射" },
                { id: 4505, name: "Giám định", text: "鑑定 評価 検査" }
              ]
            }
          ]
        },
        {
          id: 226, kanji: "車", meaning: "Xe",
          components: [
            "車", "bánh xe"
          ],
          structure: [
            { id: 3600, name: "Onyomi", text: "SHA", example: "Xe hơi (自動車) chạy nhanh trên đường." },
            { id: 3601, name: "Kunyomi", text: "くるま", example: "Xe: Một chiếc xe đạp mới." },
            { id: 3602, name: "Mnemonic", text: "Xe (車) lăn bánh, đưa bạn đi khắp muôn nơi." },
            {
              id: 3603, name: "Jukugo",
              list: [
                {
                  id: 4600, name: "自動車", text: "じどうしゃ", meaning: "Xe hơi",
                  components: [
                    "自", "tự",
                    "動", "di chuyển",
                    "車", "xe",
                    "自動車", "xe hơi"
                  ],
                  example: "Phương tiện: Xe hơi là phương tiện phổ biến."
                },
                {
                  id: 4601, name: "電車", text: "でんしゃ", meaning: "Tàu điện",
                  components: [
                    "電", "điện",
                    "車", "xe",
                    "電車", "tàu điện"
                  ],
                  example: "Giao thông: Tàu điện chạy đúng giờ."
                }
              ]
            },
            {
              id: 3604, name: "Từ trông giống nhau",
              list: [
                {
                  id: 4602, name: "軍", meaning: "Quân đội",
                  hints: ["Chiến tranh", "戦"]
                },
                {
                  id: 4603, name: "単", meaning: "Đơn giản",
                  hints: ["Một", "一"]
                }
              ],
              note: "CHIẾN TRANH cần quân đội (軍), còn MỘT bánh xe đơn giản (単)."
            },
            {
              id: 3605, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 4604, name: "Xe", text: "車 車両 自動車" },
                { id: 4605, name: "Phương tiện", text: "乗り物 交通 運輸" }
              ]
            }
          ]
        },
        {
          id: 227, kanji: "食", meaning: "Ăn, thức ăn",
          components: [
            "人", "người",
            "良", "tốt"
          ],
          structure: [
            { id: 3700, name: "Onyomi", text: "SHOKU", example: "Thực phẩm (食品) luôn tươi ngon." },
            { id: 3701, name: "Kunyomi", text: "た*べる, く*う", example: "Ăn: Tôi ăn cơm mỗi ngày." },
            { id: 3702, name: "Mnemonic", text: "Người (人) ăn thức ăn tốt (良) để sống khỏe mạnh." },
            {
              id: 3703, name: "Jukugo",
              list: [
                {
                  id: 4700, name: "食品", text: "しょくひん", meaning: "Thực phẩm",
                  components: [
                    "食", "thức ăn",
                    "品", "phẩm chất",
                    "食品", "thực phẩm"
                  ],
                  example: "Món ăn: Cửa hàng bán thực phẩm sạch."
                },
                {
                  id: 4701, name: "食事", text: "しょくじ", meaning: "Bữa ăn",
                  components: [
                    "食", "ăn",
                    "事", "sự việc",
                    "食事", "bữa ăn"
                  ],
                  example: "Ăn uống: Bữa ăn tối rất ngon."
                }
              ]
            },
            {
              id: 3704, name: "Từ trông giống nhau",
              list: [
                {
                  id: 4702, name: "負", meaning: "Thua",
                  hints: ["Sức mạnh", "力"]
                },
                {
                  id: 4703, name: "良", meaning: "Tốt",
                  hints: ["Chất lượng", "質"]
                }
              ],
              note: "SỨC MẠNH giúp tránh thua (負), còn CHẤT LƯỢNG làm nên thức ăn tốt (良)."
            },
            {
              id: 3705, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 4704, name: "Ăn", text: "食べる 飲食 摂取" },
                { id: 4705, name: "Thức ăn", text: "食べ物 食品 料理" }
              ]
            }
          ]
        },
        {
          id: 228, kanji: "飲", meaning: "Uống",
          components: [
            "食", "ăn",
            "欠", "thiếu"
          ],
          structure: [
            { id: 3800, name: "Onyomi", text: "IN", example: "Đồ uống (飲料) luôn mát lạnh." },
            { id: 3801, name: "Kunyomi", text: "の*む", example: "Uống: Uống một cốc nước lạnh." },
            { id: 3802, name: "Mnemonic", text: "Ăn (食) xong thì uống, đừng để thiếu (欠) nước." },
            {
              id: 3803, name: "Jukugo",
              list: [
                {
                  id: 4800, name: "飲料", text: "いんりょう", meaning: "Đồ uống",
                  components: [
                    "飲", "uống",
                    "料", "nguyên liệu",
                    "飲料", "đồ uống"
                  ],
                  example: "Nước giải khát: Đồ uống có ga rất phổ biến."
                },
                {
                  id: 4801, name: "飲酒", text: "いんしゅ", meaning: "Uống rượu",
                  components: [
                    "飲", "uống",
                    "酒", "rượu",
                    "飲酒", "uống rượu"
                  ],
                  example: "Thói quen: Uống rượu vừa phải tốt cho sức khỏe."
                }
              ]
            },
            {
              id: 3804, name: "Từ trông giống nhau",
              list: [
                {
                  id: 4802, name: "欲", meaning: "Ham muốn",
                  hints: ["Tâm", "心"]
                },
                {
                  id: 4803, name: "吹", meaning: "Thổi",
                  hints: ["Gió", "風"]
                }
              ],
              note: "TÂM dẫn đến ham muốn (欲), còn GIÓ thổi (吹) như hơi thở khi uống."
            },
            {
              id: 3805, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 4804, name: "Uống", text: "飲む 摂取 吸う" },
                { id: 4805, name: "Đồ uống", text: "飲料 水 酒" }
              ]
            }
          ]
        },
        {
          id: 229, kanji: "家", meaning: "Nhà, gia đình",
          components: [
            "宀", "mái nhà",
            "豕", "con lợn"
          ],
          structure: [
            { id: 3900, name: "Onyomi", text: "KA", example: "Gia đình (家族) sống hạnh phúc dưới một mái nhà." },
            { id: 3901, name: "Kunyomi", text: "いえ, や", example: "Nhà: Một ngôi nhà ấm cúng." },
            { id: 3902, name: "Mnemonic", text: "Dưới mái nhà (宀), gia đình nuôi lợn (豕) để sinh sống." },
            {
              id: 3903, name: "Jukugo",
              list: [
                {
                  id: 4900, name: "家族", text: "かぞく", meaning: "Gia đình",
                  components: [
                    "家", "nhà",
                    "族", "nhóm",
                    "家族", "gia đình"
                  ],
                  example: "Quan hệ: Gia đình tôi rất gắn bó."
                },
                {
                  id: 4901, name: "家具", text: "かぐ", meaning: "Nội thất",
                  components: [
                    "家", "nhà",
                    "具", "đồ dùng",
                    "家具", "nội thất"
                  ],
                  example: "Đồ đạc: Nội thất mới làm nhà đẹp hơn."
                }
              ]
            },
            {
              id: 3904, name: "Từ trông giống nhau",
              list: [
                {
                  id: 4902, name: "宝", meaning: "Kho báu",
                  hints: ["Vàng", "金"]
                },
                {
                  id: 4903, name: "安", meaning: "Yên bình",
                  hints: ["Phụ nữ", "女"]
                }
              ],
              note: "VÀNG là kho báu (宝) trong nhà, còn PHỤ NỮ mang yên bình (安) cho gia đình."
            },
            {
              id: 3905, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 4904, name: "Nhà", text: "家 住宅 住まい" },
                { id: 4905, name: "Gia đình", text: "家族 親族 家庭" }
              ]
            }
          ]
        },
        {
          id: 230, kanji: "店", meaning: "Cửa hàng",
          components: [
            "广", "nhà rộng",
            "占", "chiếm giữ"
          ],
          structure: [
            { id: 4000, name: "Onyomi", text: "TEN", example: "Cửa hàng (商店) bán đồ phong phú." },
            { id: 4001, name: "Kunyomi", text: "みせ", example: "Cửa hàng: Một cửa hàng nhỏ dễ thương." },
            { id: 4002, name: "Mnemonic", text: "Nhà rộng (广) chiếm giữ (占) vị trí để mở cửa hàng (店)." },
            {
              id: 4003, name: "Jukugo",
              list: [
                {
                  id: 5000, name: "商店", text: "しょうてん", meaning: "Cửa hàng",
                  components: [
                    "商", "thương mại",
                    "店", "cửa hàng",
                    "商店", "cửa hàng"
                  ],
                  example: "Mua sắm: Cửa hàng này bán quần áo đẹp."
                },
                {
                  id: 5001, name: "書店", text: "しょてん", meaning: "Hiệu sách",
                  components: [
                    "書", "sách",
                    "店", "cửa hàng",
                    "書店", "hiệu sách"
                  ],
                  example: "Đọc sách: Hiệu sách có nhiều sách mới."
                }
              ]
            },
            {
              id: 4004, name: "Từ trông giống nhau",
              list: [
                {
                  id: 5002, name: "点", meaning: "Điểm",
                  hints: ["Chấm", "点"]
                },
                {
                  id: 5003, name: "占", meaning: "Bói toán",
                  hints: ["Tiên tri", "予"]
                }
              ],
              note: "CHẤM nhỏ như điểm (点), còn TIÊN TRI (占) dự đoán doanh thu cửa hàng."
            },
            {
              id: 4005, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 5004, name: "Cửa hàng", text: "店 商店 店屋" },
                { id: 5005, name: "Mua sắm", text: "買い物 商業 売買" }
              ]
            }
          ]
        },
        {
          id: 231, kanji: "書", meaning: "Sách, viết",
          components: [
            "聿", "bút lông",
            "日", "ngày"
          ],
          structure: [
            { id: 4100, name: "Onyomi", text: "SHO", example: "Sách (図書) chứa đựng tri thức." },
            { id: 4101, name: "Kunyomi", text: "か*く", example: "Viết: Viết một lá thư dài." },
            { id: 4102, name: "Mnemonic", text: "Dùng bút lông (聿) viết sách mỗi ngày (日)." },
            {
              id: 4103, name: "Jukugo",
              list: [
                {
                  id: 5100, name: "図書", text: "としょ", meaning: "Sách",
                  components: [
                    "図", "bản vẽ",
                    "書", "sách",
                    "図書", "sách"
                  ],
                  example: "Thư viện: Sách trong thư viện rất đa dạng."
                },
                {
                  id: 5101, name: "書店", text: "しょてん", meaning: "Hiệu sách",
                  components: [
                    "書", "sách",
                    "店", "cửa hàng",
                    "書店", "hiệu sách"
                  ],
                  example: "Mua sách: Hiệu sách có nhiều sách mới."
                }
              ]
            },
            {
              id: 4104, name: "Từ trông giống nhau",
              list: [
                {
                  id: 5102, name: "著", meaning: "Tác giả",
                  hints: ["Cây", "木"]
                },
                {
                  id: 5103, name: "暑", meaning: "Nóng",
                  hints: ["Mặt trời", "日"]
                }
              ],
              note: "CÂY là nguồn giấy cho tác giả (著), còn MẶT TRỜI làm trời nóng (暑)."
            },
            {
              id: 4105, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 5104, name: "Sách", text: "書 本 図書" },
                { id: 5105, name: "Viết", text: "書く 記載 筆記" }
              ]
            }
          ]
        },
        {
          id: 232, kanji: "話", meaning: "Nói, câu chuyện",
          components: [
            "言", "lời nói",
            "舌", "lưỡi"
          ],
          structure: [
            { id: 4200, name: "Onyomi", text: "WA", example: "Câu chuyện (会話) thú vị kéo dài cả đêm." },
            { id: 4201, name: "Kunyomi", text: "はな*す, はなし", example: "Nói hoặc chuyện: Kể một câu chuyện vui." },
            { id: 4202, name: "Mnemonic", text: "Lời nói (言) từ lưỡi (舌) tạo nên câu chuyện (話)." },
            {
              id: 4203, name: "Jukugo",
              list: [
                {
                  id: 5200, name: "会話", text: "かいわ", meaning: "Trò chuyện",
                  components: [
                    "会", "gặp gỡ",
                    "話", "nói",
                    "会話", "trò chuyện"
                  ],
                  example: "Giao tiếp: Trò chuyện với bạn bè rất vui."
                },
                {
                  id: 5201, name: "電話", text: "でんわ", meaning: "Điện thoại",
                  components: [
                    "電", "điện",
                    "話", "nói",
                    "電話", "điện thoại"
                  ],
                  example: "Liên lạc: Tôi gọi điện thoại cho mẹ."
                }
              ]
            },
            {
              id: 4204, name: "Từ trông giống nhau",
              list: [
                {
                  id: 5202, name: "語", meaning: "Ngôn ngữ",
                  hints: ["Chữ", "字"]
                },
                {
                  id: 5203, name: "諾", meaning: "Đồng ý",
                  hints: ["Ý chí", "志"]
                }
              ],
              note: "CHỮ tạo ngôn ngữ (語), còn Ý CHÍ đồng ý (諾) trong câu chuyện."
            },
            {
              id: 4205, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 5204, name: "Nói", text: "話す 語る 述べる" },
                { id: 5205, name: "Câu chuyện", text: "話 物語 伝説" }
              ]
            }
          ]
        },
        {
          id: 233, kanji: "安", meaning: "Yên bình, rẻ",
          components: [
            "宀", "mái nhà",
            "女", "phụ nữ"
          ],
          structure: [
            { id: 4300, name: "Onyomi", text: "AN", example: "Yên tâm (安心) khi ở nhà." },
            { id: 4301, name: "Kunyomi", text: "やす*い", example: "Rẻ hoặc yên: Một món đồ giá rẻ." },
            { id: 4302, name: "Mnemonic", text: "Dưới mái nhà (宀), phụ nữ (女) mang lại sự yên bình (安)." },
            {
              id: 4303, name: "Jukugo",
              list: [
                {
                  id: 5300, name: "安心", text: "あんしん", meaning: "Yên tâm",
                  components: [
                    "安", "yên",
                    "心", "tâm",
                    "安心", "yên tâm"
                  ],
                  example: "An lòng: Tôi yên tâm khi biết bạn an toàn."
                },
                {
                  id: 5301, name: "安全", text: "あんぜん", meaning: "An toàn",
                  components: [
                    "安", "yên",
                    "全", "toàn bộ",
                    "安全", "an toàn"
                  ],
                  example: "Bảo vệ: An toàn là ưu tiên hàng đầu."
                }
              ]
            },
            {
              id: 4304, name: "Từ trông giống nhau",
              list: [
                {
                  id: 5302, name: "宝", meaning: "Kho báu",
                  hints: ["Vàng", "金"]
                },
                {
                  id: 5303, name: "妥", meaning: "Thích hợp",
                  hints: ["Tay", "手"]
                }
              ],
              note: "VÀNG là kho báu (宝), còn TAY làm việc thích hợp (妥) trong nhà."
            },
            {
              id: 4305, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 5304, name: "Yên bình", text: "安心 安全 平和" },
                { id: 5305, name: "Rẻ", text: "安い 低価格 経済的" }
              ]
            }
          ]
        },
        {
          id: 234, kanji: "休", meaning: "Nghỉ ngơi",
          components: [
            "人", "người",
            "木", "cây"
          ],
          structure: [
            { id: 4400, name: "Onyomi", text: "KYUU", example: "Ngày nghỉ (休日) là thời gian thư giãn." },
            { id: 4401, name: "Kunyomi", text: "やす*む", example: "Nghỉ: Tôi nghỉ ngơi sau giờ làm." },
            { id: 4402, name: "Mnemonic", text: "Người (人) nghỉ ngơi dưới bóng cây (木)." },
            {
              id: 4403, name: "Jukugo",
              list: [
                {
                  id: 5400, name: "休日", text: "きゅうじつ", meaning: "Ngày nghỉ",
                  components: [
                    "休", "nghỉ",
                    "日", "ngày",
                    "休日", "ngày nghỉ"
                  ],
                  example: "Cuối tuần: Ngày nghỉ tôi đi chơi công viên."
                },
                {
                  id: 5401, name: "休憩", text: "きゅうけい", meaning: "Giải lao",
                  components: [
                    "休", "nghỉ",
                    "憩", "thư giãn",
                    "休憩", "giải lao"
                  ],
                  example: "Nghỉ giữa giờ: Giải lao 10 phút sau cuộc họp."
                }
              ]
            },
            {
              id: 4404, name: "Từ trông giống nhau",
              list: [
                {
                  id: 5402, name: "体", meaning: "Cơ thể",
                  hints: ["Người", "人"]
                },
                {
                  id: 5403, name: "依", meaning: "Dựa vào",
                  hints: ["Quần áo", "衣"]
                }
              ],
              note: "NGƯỜI có cơ thể (体), còn QUẦN ÁO giúp dựa vào (依) sự thoải mái."
            },
            {
              id: 4405, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 5404, name: "Nghỉ ngơi", text: "休む 休息 休養" },
                { id: 5405, name: "Ngày nghỉ", text: "休日 休暇 祝日" }
              ]
            }
          ]
        },
        {
          id: 235, kanji: "住", meaning: "Sống, ở",
          components: [
            "人", "người",
            "主", "chủ"
          ],
          structure: [
            { id: 4500, name: "Onyomi", text: "JUU", example: "Nơi ở (住所) là ngôi nhà thân yêu." },
            { id: 4501, name: "Kunyomi", text: "す*む", example: "Ở: Tôi sống trong một căn hộ nhỏ." },
            { id: 4502, name: "Mnemonic", text: "Người (人) là chủ (主) của nơi họ sống (住)." },
            {
              id: 4503, name: "Jukugo",
              list: [
                {
                  id: 5500, name: "住所", text: "じゅうしょ", meaning: "Địa chỉ",
                  components: [
                    "住", "sống",
                    "所", "nơi",
                    "住所", "địa chỉ"
                  ],
                  example: "Thông tin: Địa chỉ của tôi ở Tokyo."
                },
                {
                  id: 5501, name: "住宅", text: "じゅうたく", meaning: "Nhà ở",
                  components: [
                    "住", "sống",
                    "宅", "nhà",
                    "住宅", "nhà ở"
                  ],
                  example: "Bất động sản: Nhà ở mới được xây dựng."
                }
              ]
            },
            {
              id: 4504, name: "Từ trông giống nhau",
              list: [
                {
                  id: 5502, name: "往", meaning: "Đi",
                  hints: ["Đường", "道"]
                },
                {
                  id: 5503, name: "注", meaning: "Chú ý",
                  hints: ["Nước", "水"]
                }
              ],
              note: "ĐƯỜNG dẫn người đi (往), còn NƯỚC cần chú ý (注) khi sống."
            },
            {
              id: 4505, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 5504, name: "Sống", text: "住む 生活 生存" },
                { id: 5505, name: "Nhà", text: "住宅 家 住まい" }
              ]
            }
          ]
        },
        {
          id: 236, kanji: "走", meaning: "Chạy",
          components: [
            "土", "đất",
            "止", "dừng"
          ],
          structure: [
            { id: 4600, name: "Onyomi", text: "SOU", example: "Chạy bộ (走路) giúp khỏe mạnh." },
            { id: 4601, name: "Kunyomi", text: "はし*る", example: "Chạy: Tôi chạy bộ mỗi sáng." },
            { id: 4602, name: "Mnemonic", text: "Chạy trên đất (土) và dừng (止) khi mệt." },
            {
              id: 4603, name: "Jukugo",
              list: [
                {
                  id: 5600, name: "走路", text: "そうろ", meaning: "Đường chạy",
                  components: [
                    "走", "chạy",
                    "路", "đường",
                    "走路", "đường chạy"
                  ],
                  example: "Thể thao: Đường chạy trong sân vận động."
                },
                {
                  id: 5601, name: "競走", text: "きょうそう", meaning: "Đua chạy",
                  components: [
                    "競", "cạnh tranh",
                    "走", "chạy",
                    "競走", "đua chạy"
                  ],
                  example: "Cuộc thi: Đua chạy là môn thể thao hấp dẫn."
                }
              ]
            },
            {
              id: 4604, name: "Từ trông giống nhau",
              list: [
                {
                  id: 5602, name: "赴", meaning: "Đi đến",
                  hints: ["Người", "人"]
                },
                {
                  id: 5603, name: "起", meaning: "Dậy",
                  hints: ["Sáng", "朝"]
                }
              ],
              note: "NGƯỜI đi đến (赴) đích, còn SÁNG dậy (起) để chạy."
            },
            {
              id: 4605, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 5604, name: "Chạy", text: "走る 駆ける 競う" },
                { id: 5605, name: "Di chuyển", text: "移動 進む 運ぶ" }
              ]
            }
          ]
        },
        {
          id: 237, kanji: "買", meaning: "Mua",
          components: [
            "罒", "mạng lưới",
            "貝", "vỏ sò"
          ],
          structure: [
            { id: 4700, name: "Onyomi", text: "BAI", example: "Mua sắm (購買) là sở thích của nhiều người." },
            { id: 4701, name: "Kunyomi", text: "か*う", example: "Mua: Tôi mua một cuốn sách mới." },
            { id: 4702, name: "Mnemonic", text: "Dùng mạng lưới (罒) để mua vỏ sò (貝) quý giá." },
            {
              id: 4703, name: "Jukugo",
              list: [
                {
                  id: 5700, name: "購買", text: "こうばい", meaning: "Mua sắm",
                  components: [
                    "購", "mua",
                    "買", "mua",
                    "購買", "mua sắm"
                  ],
                  example: "Tiêu dùng: Mua sắm hàng ngày ở siêu thị."
                },
                {
                  id: 5701, name: "買物", text: "かいもの", meaning: "Mua đồ",
                  components: [
                    "買", "mua",
                    "物", "đồ vật",
                    "買物", "mua đồ"
                  ],
                  example: "Hoạt động: Mua đồ ở chợ rất vui."
                }
              ]
            },
            {
              id: 4704, name: "Từ trông giống nhau",
              list: [
                {
                  id: 5702, name: "売", meaning: "Bán",
                  hints: ["Người", "人"]
                },
                {
                  id: 5703, name: "賈", meaning: "Thương gia",
                  hints: ["Tiền", "金"]
                }
              ],
              note: "NGƯỜI bán (売) hàng, còn TIỀN là niềm vui của thương gia (賈)."
            },
            {
              id: 4705, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 5704, name: "Mua", text: "買う 購入 入手" },
                { id: 5705, name: "Mua sắm", text: "買い物 ショッピング 消費" }
              ]
            }
          ]
        },
        {
          id: 238, kanji: "売", meaning: "Bán",
          components: [
            "士", "học giả",
            "買", "mua",
            "貝", "vỏ sò"
          ],
          structure: [
            { id: 4800, name: "Onyomi", text: "BAI", example: "Bán hàng (販売) là công việc bận rộn." },
            { id: 4801, name: "Kunyomi", text: "う*る", example: "Bán: Tôi bán một chiếc xe cũ." },
            { id: 4802, name: "Mnemonic", text: "Học giả (士) mua (買) vỏ sò (貝) để bán kiếm lời." },
            {
              id: 4803, name: "Jukugo",
              list: [
                {
                  id: 5800, name: "販売", text: "はんばい", meaning: "Bán hàng",
                  components: [
                    "販", "bán",
                    "売", "bán",
                    "販売", "bán hàng"
                  ],
                  example: "Kinh doanh: Bán hàng trực tuyến rất phổ biến."
                },
                {
                  id: 5801, name: "売店", text: "ばいてん", meaning: "Quầy bán hàng",
                  components: [
                    "売", "bán",
                    "店", "cửa hàng",
                    "売店", "quầy bán hàng"
                  ],
                  example: "Mua sắm: Quầy bán hàng ở ga tàu rất tiện lợi."
                }
              ]
            },
            {
              id: 4804, name: "Từ trông giống nhau",
              list: [
                {
                  id: 5802, name: "買", meaning: "Mua",
                  hints: ["Tiền", "金"]
                },
                {
                  id: 5803, name: "貸", meaning: "Cho vay",
                  hints: ["Người", "人"]
                }
              ],
              note: "TIỀN để mua (買), còn NGƯỜI cho vay (貸) tiền bán hàng."
            },
            {
              id: 4805, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 5804, name: "Bán", text: "売る 販売 処分" },
                { id: 5805, name: "Kinh doanh", text: "商売 取引 営業" }
              ]
            }
          ]
        },
        {
          id: 239, kanji: "知", meaning: "Biết, tri thức",
          components: [
            "矢", "mũi tên",
            "口", "miệng"
          ],
          structure: [
            { id: 4900, name: "Onyomi", text: "CHI", example: "Tri thức (知識) là chìa khóa thành công." },
            { id: 4901, name: "Kunyomi", text: "し*る", example: "Biết: Tôi biết cách nấu ăn Nhật." },
            { id: 4902, name: "Mnemonic", text: "Mũi tên (矢) của tri thức bay ra từ miệng (口)." },
            {
              id: 4903, name: "Jukugo",
              list: [
                {
                  id: 5900, name: "知識", text: "ちしき", meaning: "Kiến thức",
                  components: [
                    "知", "biết",
                    "識", "kiến thức",
                    "知識", "kiến thức"
                  ],
                  example: "Học tập: Kiến thức giúp mở rộng tầm nhìn."
                },
                {
                  id: 5901, name: "知人", text: "ちじん", meaning: "Người quen",
                  components: [
                    "知", "biết",
                    "人", "người",
                    "知人", "người quen"
                  ],
                  example: "Quan hệ: Tôi gặp một người quen ở quán cà phê."
                }
              ]
            },
            {
              id: 4904, name: "Từ trông giống nhau",
              list: [
                {
                  id: 5902, name: "和", meaning: "Hòa bình",
                  hints: ["Gạo", "米"]
                },
                {
                  id: 5903, name: "智", meaning: "Trí tuệ",
                  hints: ["Ngày", "日"]
                }
              ],
              note: "GẠO mang hòa bình (和), còn NGÀY nuôi trí tuệ (智)."
            },
            {
              id: 4905, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 5904, name: "Biết", text: "知る 理解 認識" },
                { id: 5905, name: "Kiến thức", text: "知識 学問 情報" }
              ]
            }
          ]
        },
        {
          id: 240, kanji: "思", meaning: "Nghĩ, tư duy",
          components: [
            "田", "ruộng",
            "心", "trái tim"
          ],
          structure: [
            { id: 5000, name: "Onyomi", text: "SHI", example: "Tư duy (思考) giúp giải quyết vấn đề." },
            { id: 5001, name: "Kunyomi", text: "おも*う", example: "Nghĩ: Tôi nghĩ về tương lai." },
            { id: 5002, name: "Mnemonic", text: "Trái tim (心) nghĩ về những cánh đồng (田) xanh mát." },
            {
              id: 5003, name: "Jukugo",
              list: [
                {
                  id: 6000, name: "思考", text: "しこう", meaning: "Tư duy",
                  components: [
                    "思", "nghĩ",
                    "考", "suy nghĩ",
                    "思考", "tư duy"
                  ],
                  example: "Trí tuệ: Tư duy sáng tạo là chìa khóa."
                },
                {
                  id: 6001, name: "思い出", text: "おもいで", meaning: "Ký ức",
                  components: [
                    "思", "nghĩ",
                    "出", "ra",
                    "思い出", "ký ức"
                  ],
                  example: "Hồi tưởng: Ký ức tuổi thơ thật đẹp."
                }
              ]
            },
            {
              id: 5004, name: "Từ trông giống nhau",
              list: [
                {
                  id: 6002, name: "想", meaning: "Tưởng tượng",
                  hints: ["Mắt", "目"]
                },
                {
                  id: 6003, name: "志", meaning: "Ý chí",
                  hints: ["Người", "人"]
                }
              ],
              note: "MẮT tưởng tượng (想), còn NGƯỜI nuôi ý chí (志)."
            },
            {
              id: 5005, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 6004, name: "Nghĩ", text: "思う 考える 想像" },
                { id: 6005, name: "Ký ức", text: "思い出 記憶 回想" }
              ]
            }
          ]
        },
        {
          id: 241, kanji: "行", meaning: "Đi, thực hiện",
          components: [
            "彳", "bước đi",
            "亍", "bước nhỏ"
          ],
          structure: [
            { id: 5100, name: "Onyomi", text: "KOU, GYOU", example: "Hành động (行動) là chìa khóa thành công." },
            { id: 5101, name: "Kunyomi", text: "い*く, おこな*う", example: "Đi hoặc thực hiện: Tôi đi đến trường." },
            { id: 5102, name: "Mnemonic", text: "Bước đi (彳) nhỏ (亍) dẫn bạn đến đích (行)." },
            {
              id: 5103, name: "Jukugo",
              list: [
                {
                  id: 6100, name: "行動", text: "こうどう", meaning: "Hành động",
                  components: [
                    "行", "thực hiện",
                    "動", "di chuyển",
                    "行動", "hành động"
                  ],
                  example: "Cố gắng: Hành động đúng lúc rất quan trọng."
                },
                {
                  id: 6101, name: "旅行", text: "りょこう", meaning: "Du lịch",
                  components: [
                    "旅", "chuyến đi",
                    "行", "đi",
                    "旅行", "du lịch"
                  ],
                  example: "Khám phá: Du lịch Nhật Bản rất thú vị."
                }
              ]
            },
            {
              id: 5104, name: "Từ trông giống nhau",
              list: [
                {
                  id: 6102, name: "街", meaning: "Phố",
                  hints: ["Đường", "道"]
                },
                {
                  id: 6103, name: "術", meaning: "Kỹ thuật",
                  hints: ["Công việc", "工"]
                }
              ],
              note: "ĐƯỜNG dẫn đến phố (街), còn CÔNG VIỆC cần kỹ thuật (術)."
            },
            {
              id: 5105, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 6104, name: "Đi", text: "行く 移動 進む" },
                { id: 6105, name: "Thực hiện", text: "行う 実行 実施" }
              ]
            }
          ]
        },
        {
          id: 242, kanji: "来", meaning: "Đến",
          components: [
            "木", "cây",
            "米", "gạo"
          ],
          structure: [
            { id: 5200, name: "Onyomi", text: "RAI", example: "Tương lai (未来) đầy hứa hẹn." },
            { id: 5201, name: "Kunyomi", text: "く*る", example: "Đến: Bạn tôi đến thăm nhà." },
            { id: 5202, name: "Mnemonic", text: "Đến dưới bóng cây (木) để nhận gạo (米)." },
            {
              id: 5203, name: "Jukugo",
              list: [
                {
                  id: 6200, name: "未来", text: "みらい", meaning: "Tương lai",
                  components: [
                    "未", "chưa",
                    "来", "đến",
                    "未来", "tương lai"
                  ],
                  example: "Hy vọng: Tương lai sẽ tươi sáng."
                },
                {
                  id: 6201, name: "以来", text: "いらい", meaning: "Kể từ",
                  components: [
                    "以", "từ",
                    "来", "đến",
                    "以来", "kể từ"
                  ],
                  example: "Thời gian: Kể từ năm ngoái, tôi học tiếng Nhật."
                }
              ]
            },
            {
              id: 5204, name: "Từ trông giống nhau",
              list: [
                {
                  id: 6202, name: "米", meaning: "Gạo",
                  hints: ["Nông nghiệp", "田"]
                },
                {
                  id: 6203, name: "条", meaning: "Điều khoản",
                  hints: ["Pháp luật", "法"]
                }
              ],
              note: "NÔNG NGHIỆP tạo gạo (米), còn PHÁP LUẬT có điều khoản (条)."
            },
            {
              id: 5205, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 6204, name: "Đến", text: "来る 訪問 接近" },
                { id: 6205, name: "Tương lai", text: "未来 将来 前途" }
              ]
            }
          ]
        },
        {
          id: 243, kanji: "帰", meaning: "Trở về",
          components: [
            "彐", "tay cầm",
            "帚", "cái chổi"
          ],
          structure: [
            { id: 5300, name: "Onyomi", text: "KI", example: "Trở về nhà (帰宅) sau giờ làm." },
            { id: 5301, name: "Kunyomi", text: "かえ*る", example: "Trở về: Tôi về nhà lúc tối." },
            { id: 5302, name: "Mnemonic", text: "Tay cầm (彐) chổi (帚) dọn nhà để trở về (帰)." },
            {
              id: 5303, name: "Jukugo",
              list: [
                {
                  id: 6300, name: "帰宅", text: "きたく", meaning: "Về nhà",
                  components: [
                    "帰", "trở về",
                    "宅", "nhà",
                    "帰宅", "về nhà"
                  ],
                  example: "Hàng ngày: Tôi về nhà sau giờ làm."
                },
                {
                  id: 6301, name: "帰国", text: "きこく", meaning: "Về nước",
                  components: [
                    "帰", "trở về",
                    "国", "đất nước",
                    "帰国", "về nước"
                  ],
                  example: "Du học: Anh ấy về nước sau 3 năm."
                }
              ]
            },
            {
              id: 5304, name: "Từ trông giống nhau",
              list: [
                {
                  id: 6302, name: "掃", meaning: "Quét",
                  hints: ["Tay", "手"]
                },
                {
                  id: 6303, name: "婦", meaning: "Phụ nữ",
                  hints: ["Nhà", "家"]
                }
              ],
              note: "TAY quét (掃) nhà, còn PHỤ NỮ (婦) quản lý nhà khi trở về."
            },
            {
              id: 5305, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 6304, name: "Trở về", text: "帰る 戻る 復帰" },
                { id: 6305, name: "Về nhà", text: "帰宅 帰宅する 家路" }
              ]
            }
          ]
        },
        {
          id: 244, kanji: "立", meaning: "Đứng",
          components: [
            "立", "đứng thẳng"
          ],
          structure: [
            { id: 5400, name: "Onyomi", text: "RITSU", example: "Đứng lên (起立) trong lớp học." },
            { id: 5401, name: "Kunyomi", text: "た*つ", example: "Đứng: Tôi đứng chờ xe buýt." },
            { id: 5402, name: "Mnemonic", text: "Đứng thẳng (立) như cột trụ giữa trời." },
            {
              id: 5403, name: "Jukugo",
              list: [
                {
                  id: 6400, name: "起立", text: "きりつ", meaning: "Đứng lên",
                  components: [
                    "起", "dậy",
                    "立", "đứng",
                    "起立", "đứng lên"
                  ],
                  example: "Lớp học: Học sinh đứng lên chào thầy."
                },
                {
                  id: 6401, name: "独立", text: "どくりつ", meaning: "Độc lập",
                  components: [
                    "独", "một mình",
                    "立", "đứng",
                    "独立", "độc lập"
                  ],
                  example: "Chính trị: Đất nước giành độc lập."
                }
              ]
            },
            {
              id: 5404, name: "Từ trông giống nhau",
              list: [
                {
                  id: 6402, name: "位", meaning: "Vị trí",
                  hints: ["Người", "人"]
                },
                {
                  id: 6403, name: "並", meaning: "Xếp hàng",
                  hints: ["Hàng", "列"]
                }
              ],
              note: "NGƯỜI đứng ở vị trí (位), còn HÀNG người xếp hàng (並)."
            },
            {
              id: 5405, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 6404, name: "Đứng", text: "立つ 起立 直立" },
                { id: 6405, name: "Độc lập", text: "独立 自立 自主" }
              ]
            }
          ]
        },
        {
          id: 245, kanji: "入", meaning: "Vào",
          components: [
            "入", "vào, cửa"
          ],
          structure: [
            { id: 5500, name: "Onyomi", text: "NYUU", example: "Lối vào (入口) rộng mở." },
            { id: 5501, name: "Kunyomi", text: "い*る, はい*る", example: "Vào: Tôi vào lớp học." },
            { id: 5502, name: "Mnemonic", text: "Cửa (入) mở rộng để bạn bước vào thế giới mới." },
            {
              id: 5503, name: "Jukugo",
              list: [
                {
                  id: 6500, name: "入口", text: "いりぐち", meaning: "Lối vào",
                  components: [
                    "入", "vào",
                    "口", "miệng",
                    "入口", "lối vào"
                  ],
                  example: "Cửa ra vào: Lối vào tòa nhà rất rộng."
                },
                {
                  id: 6501, name: "入場", text: "にゅうじょう", meaning: "Vào sân",
                  components: [
                    "入", "vào",
                    "場", "nơi",
                    "入場", "vào sân"
                  ],
                  example: "Sự kiện: Vào sân xem buổi hòa nhạc."
                }
              ]
            },
            {
              id: 5504, name: "Từ trông giống nhau",
              list: [
                {
                  id: 6502, name: "人", meaning: "Người",
                  hints: ["Đứng", "立"]
                },
                {
                  id: 6503, name: "内", meaning: "Bên trong",
                  hints: ["Nhà", "家"]
                }
              ],
              note: "NGƯỜI đứng (人) vào cửa, còn NHÀ bên trong (内)."
            },
            {
              id: 5505, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 6504, name: "Vào", text: "入る 侵入 進む" },
                { id: 6505, name: "Lối vào", text: "入口 門 戸" }
              ]
            }
          ]
        },
        {
          id: 246, kanji: "出", meaning: "Ra, xuất hiện",
          components: [
            "山", "núi",
            "山", "núi"
          ],
          structure: [
            { id: 5600, name: "Onyomi", text: "SHUTSU", example: "Ra ngoài (外出) vào ngày đẹp trời." },
            { id: 5601, name: "Kunyomi", text: "で*る", example: "Ra: Tôi ra khỏi nhà lúc sáng." },
            { id: 5602, name: "Mnemonic", text: "Ra khỏi hai ngọn núi (山) để xuất hiện (出) trước thế giới." },
            {
              id: 5603, name: "Jukugo",
              list: [
                {
                  id: 6600, name: "外出", text: "がいしゅつ", meaning: "Ra ngoài",
                  components: [
                    "外", "bên ngoài",
                    "出", "ra",
                    "外出", "ra ngoài"
                  ],
                  example: "Hoạt động: Ra ngoài đi dạo rất thư giãn."
                },
                {
                  id: 6601, name: "出席", text: "しゅっせき", meaning: "Tham dự",
                  components: [
                    "出", "xuất hiện",
                    "席", "ghế",
                    "出席", "tham dự"
                  ],
                  example: "Họp mặt: Tôi tham dự buổi họp lớp."
                }
              ]
            },
            {
              id: 5604, name: "Từ trông giống nhau",
              list: [
                {
                  id: 6602, name: "山", meaning: "Núi",
                  hints: ["Đất", "土"]
                },
                {
                  id: 6603, name: "用", meaning: "Sử dụng",
                  hints: ["Công việc", "工"]
                }
              ],
              note: "ĐẤT tạo núi (山), còn CÔNG VIỆC sử dụng (用) để ra ngoài."
            },
            {
              id: 5605, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 6604, name: "Ra", text: "出る 外出 出現" },
                { id: 6605, name: "Xuất hiện", text: "現れる 登場 公開" }
              ]
            }
          ]
        },
        {
          id: 247, kanji: "友", meaning: "Bạn bè",
          components: [
            "又", "tay phải",
            "一", "một",
            "冖", "mũ"
          ],
          structure: [
            { id: 5700, name: "Onyomi", text: "YUU", example: "Bạn bè (友達) luôn hỗ trợ nhau." },
            { id: 5701, name: "Kunyomi", text: "とも", example: "Bạn: Bạn thân của tôi rất vui tính." },
            { id: 5702, name: "Mnemonic", text: "Tay phải (又) cùng một (一) mái nhà (冖) là bạn bè (友)." },
            {
              id: 5703, name: "Jukugo",
              list: [
                {
                  id: 6700, name: "友達", text: "ともだち", meaning: "Bạn bè",
                  components: [
                    "友", "bạn",
                    "達", "nhóm",
                    "友達", "bạn bè"
                  ],
                  example: "Tình bạn: Bạn bè gặp nhau ở quán cà phê."
                },
                {
                  id: 6701, name: "友情", text: "ゆうじょう", meaning: "Tình bạn",
                  components: [
                    "友", "bạn",
                    "情", "tình cảm",
                    "友情", "tình bạn"
                  ],
                  example: "Quan hệ: Tình bạn là điều quý giá."
                }
              ]
            },
            {
              id: 5704, name: "Từ trông giống nhau",
              list: [
                {
                  id: 6702, name: "反", meaning: "Phản đối",
                  hints: ["Tay", "手"]
                },
                {
                  id: 6703, name: "皮", meaning: "Da",
                  hints: ["Thịt", "肉"]
                }
              ],
              note: "TAY phản đối (反), còn THỊT có da (皮) bên ngoài bạn bè."
            },
            {
              id: 5705, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 6704, name: "Bạn bè", text: "友 仲間 親友" },
                { id: 6705, name: "Tình bạn", text: "友情 友好 連帯" }
              ]
            }
          ]
        },
        {
          id: 248, kanji: "花", meaning: "Hoa",
          components: [
            "艹", "cỏ",
            "化", "hóa thành"
          ],
          structure: [
            { id: 5800, name: "Onyomi", text: "KA", example: "Bông hoa (花束) rực rỡ trong bình." },
            { id: 5801, name: "Kunyomi", text: "はな", example: "Hoa: Hoa anh đào nở rộ mùa xuân." },
            { id: 5802, name: "Mnemonic", text: "Cỏ (艹) hóa thành (化) những bông hoa (花) đẹp." },
            {
              id: 5803, name: "Jukugo",
              list: [
                {
                  id: 6800, name: "花束", text: "はなたば", meaning: "Bó hoa",
                  components: [
                    "花", "hoa",
                    "束", "bó",
                    "花束", "bó hoa"
                  ],
                  example: "Quà tặng: Tôi tặng bạn một bó hoa."
                },
                {
                  id: 6801, name: "花火", text: "はなび", meaning: "Pháo hoa",
                  components: [
                    "花", "hoa",
                    "火", "lửa",
                    "花火", "pháo hoa"
                  ],
                  example: "Lễ hội: Pháo hoa sáng rực bầu trời."
                }
              ]
            },
            {
              id: 5804, name: "Từ trông giống nhau",
              list: [
                {
                  id: 6802, name: "草", meaning: "Cỏ",
                  hints: ["Cây", "木"]
                },
                {
                  id: 6803, name: "華", meaning: "Hoa lệ",
                  hints: ["Ánh sáng", "光"]
                }
              ],
              note: "CÂY tạo cỏ (草), còn ÁNH SÁNG làm hoa lệ (華)."
            },
            {
              id: 5805, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 6804, name: "Hoa", text: "花 華 草花" },
                { id: 6805, name: "Đẹp", text: "美しい 華麗 鮮やか" }
              ]
            }
          ]
        },
        {
          id: 249, kanji: "織", meaning: "Dệt",
          components: [
            "糸", "sợi chỉ",
            "音", "âm thanh",
            "日", "ngày"
          ],
          structure: [
            { id: 5900, name: "Onyomi", text: "SHOKU", example: "Dệt vải (織物) cần kỹ thuật cao." },
            { id: 5901, name: "Kunyomi", text: "お*る", example: "Dệt: Bà dệt một tấm vải đẹp." },
            { id: 5902, name: "Mnemonic", text: "Dùng sợi chỉ (糸) dệt vải, âm thanh (音) vang lên mỗi ngày (日)." },
            {
              id: 5903, name: "Jukugo",
              list: [
                {
                  id: 6900, name: "織物", text: "おりもの", meaning: "Vải dệt",
                  components: [
                    "織", "dệt",
                    "物", "đồ vật",
                    "織物", "vải dệt"
                  ],
                  example: "Thủ công: Vải dệt tay rất tinh xảo."
                },
                {
                  id: 6901, name: "組織", text: "そしき", meaning: "Tổ chức",
                  components: [
                    "組", "nhóm",
                    "織", "dệt",
                    "組織", "tổ chức"
                  ],
                  example: "Cơ cấu: Công ty có tổ chức chặt chẽ."
                }
              ]
            },
            {
              id: 5904, name: "Từ trông giống nhau",
              list: [
                {
                  id: 6902, name: "継", meaning: "Kế thừa",
                  hints: ["Sợi", "糸"]
                },
                {
                  id: 6903, name: "績", meaning: "Thành tích",
                  hints: ["Công việc", "工"]
                }
              ],
              note: "SỢI nối tiếp kế thừa (継), còn CÔNG VIỆC tạo thành tích (績)."
            },
            {
              id: 5905, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 6904, name: "Dệt", text: "織る 編む 縫う" },
                { id: 6905, name: "Tổ chức", text: "組織 団体 グループ" }
              ]
            }
          ]
        },
        {
          id: 250, kanji: "籠", meaning: "Cái lồng, giỏ",
          components: [
            "竹", "tre",
            "龍", "rồng",
            "立", "đứng",
            "田", "cánh đồng",
            "虫", "côn trùng"
          ],
          structure: [
            { id: 6000, name: "Onyomi", text: "ROU", example: "Cái lồng (鳥籠) giữ chim an toàn." },
            { id: 6001, name: "Kunyomi", text: "かご, こ*む", example: "Giỏ hoặc nhốt: Một cái giỏ tre đẹp." },
            { id: 6002, name: "Mnemonic", text: "Tre (竹) dệt lồng, rồng (龍) đứng (立) trên cánh đồng (田) bắt côn trùng (虫)." },
            {
              id: 6003, name: "Jukugo",
              list: [
                {
                  id: 7000, name: "鳥籠", text: "とりかご", meaning: "Lồng chim",
                  components: [
                    "鳥", "chim",
                    "籠", "lồng",
                    "鳥籠", "lồng chim"
                  ],
                  example: "Nuôi chim: Lồng chim được treo ngoài sân."
                },
                {
                  id: 7001, name: "籠城", text: "ろうじょう", meaning: "Cố thủ",
                  components: [
                    "籠", "nhốt",
                    "城", "lâu đài",
                    "籠城", "cố thủ"
                  ],
                  example: "Chiến tranh: Quân đội cố thủ trong lâu đài."
                }
              ]
            },
            {
              id: 6004, name: "Từ trông giống nhau",
              list: [
                {
                  id: 7002, name: "篭", meaning: "Giỏ tre",
                  hints: ["Tre", "竹"]
                },
                {
                  id: 7003, name: "竜", meaning: "Rồng",
                  hints: ["Mây", "雲"]
                }
              ],
              note: "TRE làm giỏ (篭), còn MÂY vây quanh rồng (竜)."
            },
            {
              id: 6005, name: "Từ đồng nghĩa", quantity: 2,
              list: [
                { id: 7004, name: "Lồng", text: "籠 檻 鳥籠" },
                { id: 7005, name: "Nhốt", text: "閉じ込める 拘束 封じる" }
              ]
            }
          ]
        }
        
      ],
    },
  ];
}

let listTopic = localStorage.getItem("listTopic");
if (listTopic) {
  listTopic = JSON.parse(listTopic);
} else {
  listTopic = [
    {
      id: 100,
      name: "Chào hỏi",
      image: "/team2-mankai-user/assets/icons/chaohoi.svg",
      vocabulary: [
        {
          id: 1000,
          name: "こんにちは",
          romanized: "Kon ni chi wa",
          vietsub: "Xin chào",
        },
        {
          id: 1001,
          name: "おはよう",
          romanized: "O ha you",
          vietsub: "Chào buổi sáng",
        },
        {
          id: 1002,
          name: "じゃあね",
          romanized: "Jaa ne",
          vietsub: "Tạm biệt",
        },
        {
          id: 1003,
          name: "ありがとう",
          romanized: "A ri ga tou",
          vietsub: "Cảm ơn",
        },
        {
          id: 1004,
          name: "はじめまして",
          romanized: "Ha ji me ma shi te",
          vietsub: "Rất vui được gặp",
        },
        {
          id: 1005,
          name: "お元気ですか",
          romanized: "O gen ki de su ka",
          vietsub: "Bạn khỏe không?",
        },
        {
          id: 1006,
          name: "よろしく",
          romanized: "Yo ro shi ku",
          vietsub: "Rất mong được giúp đỡ",
        },
        {
          id: 1007,
          name: "さようなら",
          romanized: "Sa you na ra",
          vietsub: "Chào tạm biệt",
        },
      ],
    },
    {
      id: 101,
      name: "Hội thoại",
      image: "/team2-mankai-user/assets/icons/hoithoai.svg",
      vocabulary: [
        {
          id: 1008,
          name: "すみません",
          romanized: "Su mi ma sen",
          vietsub: "Xin lỗi",
        },
        {
          id: 1009,
          name: "お願いします",
          romanized: "O ne gai shi ma su",
          vietsub: "Làm ơn",
        },
        {
          id: 1010,
          name: "わかりました",
          romanized: "Wa ka ri ma shi ta",
          vietsub: "Tôi hiểu rồi",
        },
        {
          id: 1011,
          name: "大丈夫",
          romanized: "Dai jou bu",
          vietsub: "Không sao",
        },
        {
          id: 1012,
          name: "ちょっと",
          romanized: "Chot to",
          vietsub: "Một chút",
        },
        {
          id: 1013,
          name: "どうぞ",
          romanized: "Dou zo",
          vietsub: "Mời vào",
        },
        {
          id: 1014,
          name: "待って",
          romanized: "Mat te",
          vietsub: "Chờ đã",
        },
        {
          id: 1015,
          name: "もちろん",
          romanized: "Mo chi ron",
          vietsub: "Tất nhiên",
        },
        {
          id: 1016,
          name: "問題",
          romanized: "Mon dai",
          vietsub: "Vấn đề",
        },
        {
          id: 1017,
          name: "ごめんなさい",
          romanized: "Go men na sai",
          vietsub: "Xin lỗi (thân mật)",
        },
      ],
    },
    {
      id: 102,
      name: "Con số",
      image: "/team2-mankai-user/assets/icons/conso.svg",
      vocabulary: [
        { id: 1018, name: "一", romanized: "Ichi", vietsub: "Một" },
        { id: 1019, name: "二", romanized: "Ni", vietsub: "Hai" },
        { id: 1020, name: "三", romanized: "San", vietsub: "Ba" },
        { id: 1021, name: "十", romanized: "Juu", vietsub: "Mười" },
        { id: 1022, name: "百", romanized: "Hyaku", vietsub: "Trăm" },
        { id: 1023, name: "千", romanized: "Sen", vietsub: "Nghìn" },
        {
          id: 1024,
          name: "万",
          romanized: "Man",
          vietsub: "Mười nghìn",
        },
        { id: 1025, name: "四", romanized: "Shi", vietsub: "Bốn" },
        { id: 1026, name: "五", romanized: "Go", vietsub: "Năm" },
        { id: 1027, name: "六", romanized: "Roku", vietsub: "Sáu" },
        { id: 1028, name: "七", romanized: "Shichi", vietsub: "Bảy" },
        { id: 1029, name: "八", romanized: "Hachi", vietsub: "Tám" },
        { id: 1030, name: "九", romanized: "Kyuu", vietsub: "Chín" },
      ],
    },
    {
      id: 103,
      name: "Ngày và Giờ",
      image: "/team2-mankai-user/assets/icons/ngayvagio.svg",
      vocabulary: [
        {
          id: 1031,
          name: "今日",
          romanized: "Kyou",
          vietsub: "Hôm nay",
        },
        {
          id: 1032,
          name: "明日",
          romanized: "A shi ta",
          vietsub: "Ngày mai",
        },
        {
          id: 1033,
          name: "時間",
          romanized: "Ji kan",
          vietsub: "Thời gian",
        },
        {
          id: 1034,
          name: "朝",
          romanized: "A sa",
          vietsub: "Buổi sáng",
        },
        {
          id: 1035,
          name: "夜",
          romanized: "Yo ru",
          vietsub: "Buổi tối",
        },
        {
          id: 1036,
          name: "月曜日",
          romanized: "Getsu you bi",
          vietsub: "Thứ hai",
        },
        {
          id: 1037,
          name: "火曜日",
          romanized: "Ka you bi",
          vietsub: "Thứ ba",
        },
        {
          id: 1038,
          name: "水曜日",
          romanized: "Sui you bi",
          vietsub: "Thứ tư",
        },
        {
          id: 1039,
          name: "木曜日",
          romanized: "Moku you bi",
          vietsub: "Thứ năm",
        },
        {
          id: 1040,
          name: "金曜日",
          romanized: "Kin you bi",
          vietsub: "Thứ sáu",
        },
        {
          id: 1041,
          name: "土曜日",
          romanized: "Do you bi",
          vietsub: "Thứ bảy",
        },
        {
          id: 1042,
          name: "日曜日",
          romanized: "Ni chi you bi",
          vietsub: "Chủ nhật",
        },
      ],
    },
    {
      id: 104,
      name: "Phương hướng & Địa điểm",
      image: "/team2-mankai-user/assets/icons/phuonghuong.svg",
      vocabulary: [
        {
          id: 1043,
          name: "右",
          romanized: "Mi gi",
          vietsub: "Bên phải",
        },
        {
          id: 1044,
          name: "左",
          romanized: "Hi da ri",
          vietsub: "Bên trái",
        },
        {
          id: 1045,
          name: "前",
          romanized: "Mae",
          vietsub: "Phía trước",
        },
        {
          id: 1046,
          name: "後ろ",
          romanized: "U shi ro",
          vietsub: "Phía sau",
        },
        {
          id: 1047,
          name: "北",
          romanized: "Ki ta",
          vietsub: "Phía bắc",
        },
        {
          id: 1048,
          name: "南",
          romanized: "Mi na mi",
          vietsub: "Phía nam",
        },
        {
          id: 1049,
          name: "東",
          romanized: "Hi ga shi",
          vietsub: "Phía đông",
        },
        {
          id: 1050,
          name: "西",
          romanized: "Ni shi",
          vietsub: "Phía tây",
        },
        {
          id: 1051,
          name: "近く",
          romanized: "Chi ka ku",
          vietsub: "Gần",
        },
        { id: 1052, name: "遠い", romanized: "To oi", vietsub: "Xa" },
        { id: 1053, name: "上", romanized: "Ue", vietsub: "Phía trên" },
        {
          id: 1054,
          name: "下",
          romanized: "Shi ta",
          vietsub: "Phía dưới",
        },
        {
          id: 1055,
          name: "中",
          romanized: "Na ka",
          vietsub: "Bên trong",
        },
      ],
    },
    {
      id: 105,
      name: "Phương tiện đi lại",
      image: "/team2-mankai-user/assets/icons/phuongtien.svg",
      vocabulary: [
        {
          id: 1056,
          name: "車",
          romanized: "Ku ru ma",
          vietsub: "Xe hơi",
        },
        {
          id: 1057,
          name: "電車",
          romanized: "Den sha",
          vietsub: "Tàu điện",
        },
        {
          id: 1058,
          name: "飛行機",
          romanized: "Hi kou ki",
          vietsub: "Máy bay",
        },
        {
          id: 1059,
          name: "自転車",
          romanized: "Ji ten sha",
          vietsub: "Xe đạp",
        },
        {
          id: 1060,
          name: "バス",
          romanized: "Ba su",
          vietsub: "Xe buýt",
        },
        {
          id: 1061,
          name: "タクシー",
          romanized: "Ta ku shii",
          vietsub: "Taxi",
        },
        {
          id: 1062,
          name: "船",
          romanized: "Fu ne",
          vietsub: "Tàu thủy",
        },
        {
          id: 1063,
          name: "新幹線",
          romanized: "Shin kan sen",
          vietsub: "Tàu cao tốc",
        },
        {
          id: 1064,
          name: "バイク",
          romanized: "Bai ku",
          vietsub: "Xe máy",
        },
      ],
    },
    {
      id: 106,
      name: "Địa điểm nghỉ ngơi",
      image: "/team2-mankai-user/assets/icons/diadiem.svg",
      vocabulary: [
        {
          id: 1065,
          name: "ホテル",
          romanized: "Ho te ru",
          vietsub: "Khách sạn",
        },
        { id: 1066, name: "家", romanized: "Ie", vietsub: "Nhà" },
        {
          id: 1067,
          name: "旅館",
          romanized: "Ryo kan",
          vietsub: "Nhà trọ truyền thống",
        },
        {
          id: 1068,
          name: "民宿",
          romanized: "Min shu ku",
          vietsub: "Nhà nghỉ dân dụng",
        },
        {
          id: 1069,
          name: "キャンプ場",
          romanized: "Kyan pu jou",
          vietsub: "Khu cắm trại",
        },
        {
          id: 1070,
          name: "別荘",
          romanized: "Bes sou",
          vietsub: "Biệt thự",
        },
      ],
    },
    {
      id: 107,
      name: "Ăn uống",
      image: "/team2-mankai-user/assets/icons/anuong.svg",
      vocabulary: [
        { id: 1071, name: "ご飯", romanized: "Go han", vietsub: "Cơm" },
        { id: 1072, name: "水", romanized: "Mi zu", vietsub: "Nước" },
        { id: 1073, name: "お茶", romanized: "O cha", vietsub: "Trà" },
        {
          id: 1074,
          name: "寿司",
          romanized: "Su shi",
          vietsub: "Sushi",
        },
        {
          id: 1075,
          name: "ラーメン",
          romanized: "Raa men",
          vietsub: "Mì ramen",
        },
        {
          id: 1076,
          name: "うどん",
          romanized: "U don",
          vietsub: "Mì udon",
        },
        {
          id: 1077,
          name: "そば",
          romanized: "So ba",
          vietsub: "Mì soba",
        },
        {
          id: 1078,
          name: "カレー",
          romanized: "Ka ree",
          vietsub: "Cà ri",
        },
        {
          id: 1079,
          name: "天ぷら",
          romanized: "Ten pu ra",
          vietsub: "Tôm chiên",
        },
        {
          id: 1080,
          name: "焼き鳥",
          romanized: "Ya ki to ri",
          vietsub: "Gà nướng",
        },
        {
          id: 1081,
          name: "おにぎり",
          romanized: "O ni gi ri",
          vietsub: "Cơm nắm",
        },
        {
          id: 1082,
          name: "納豆",
          romanized: "Nat tou",
          vietsub: "Đậu nành lên men",
        },
        {
          id: 1083,
          name: "味噌汁",
          romanized: "Mi so shi ru",
          vietsub: "Súp miso",
        },
        {
          id: 1084,
          name: "お弁当",
          romanized: "O ben tou",
          vietsub: "Cơm hộp",
        },
        {
          id: 1085,
          name: "牛丼",
          romanized: "Gyu don",
          vietsub: "Cơm bò",
        },
      ],
    },
    {
      id: 108,
      name: "Mua sắm",
      image: "/team2-mankai-user/assets/icons/muasam.svg",
      vocabulary: [
        {
          id: 1086,
          name: "店",
          romanized: "Mi se",
          vietsub: "Cửa hàng",
        },
        {
          id: 1087,
          name: "値段",
          romanized: "Ne dan",
          vietsub: "Giá cả",
        },
        {
          id: 1088,
          name: "買い物",
          romanized: "Ka i mo no",
          vietsub: "Mua sắm",
        },
        {
          id: 1089,
          name: "お金",
          romanized: "O ka ne",
          vietsub: "Tiền",
        },
        {
          id: 1090,
          name: "スーパー",
          romanized: "Suu paa",
          vietsub: "Siêu thị",
        },
        {
          id: 1091,
          name: "市場",
          romanized: "Shi jou",
          vietsub: "Chợ",
        },
        {
          id: 1092,
          name: "割引",
          romanized: "Wa ri bi ki",
          vietsub: "Giảm giá",
        },
        {
          id: 1093,
          name: "クレジットカード",
          romanized: "Ku re jit to kaa do",
          vietsub: "Thẻ tín dụng",
        },
        {
          id: 1094,
          name: "現金",
          romanized: "Gen kin",
          vietsub: "Tiền mặt",
        },
        {
          id: 1095,
          name: "商品",
          romanized: "Shou hin",
          vietsub: "Sản phẩm",
        },
      ],
    },
    {
      id: 109,
      name: "Thành phố & Tỉnh",
      image: "/team2-mankai-user/assets/icons/thanhpho.svg",
      vocabulary: [
        {
          id: 1096,
          name: "東京",
          romanized: "Tou kyou",
          vietsub: "Tokyo",
        },
        {
          id: 1097,
          name: "大阪",
          romanized: "O sa ka",
          vietsub: "Osaka",
        },
        {
          id: 1098,
          name: "京都",
          romanized: "Kyou to",
          vietsub: "Kyoto",
        },
        {
          id: 1099,
          name: "北海道",
          romanized: "Hok kai dou",
          vietsub: "Hokkaido",
        },
        {
          id: 1100,
          name: "福岡",
          romanized: "Fu kuo ka",
          vietsub: "Fukuoka",
        },
        {
          id: 1101,
          name: "広島",
          romanized: "Hi ro shi ma",
          vietsub: "Hiroshima",
        },
        {
          id: 1102,
          name: "名古屋",
          romanized: "Na go ya",
          vietsub: "Nagoya",
        },
        {
          id: 1103,
          name: "神戸",
          romanized: "Kou be",
          vietsub: "Kobe",
        },
        {
          id: 1104,
          name: "横浜",
          romanized: "Yo ko ha ma",
          vietsub: "Yokohama",
        },
        {
          id: 1105,
          name: "札幌",
          romanized: "Sap po ro",
          vietsub: "Sapporo",
        },
      ],
    },
    {
      id: 110,
      name: "Quốc gia",
      image: "/team2-mankai-user/assets/icons/quocgia.svg",
      vocabulary: [
        {
          id: 1106,
          name: "日本",
          romanized: "Ni hon",
          vietsub: "Nhật Bản",
        },
        {
          id: 1107,
          name: "ベトナム",
          romanized: "Be to na mu",
          vietsub: "Việt Nam",
        },
        {
          id: 1108,
          name: "アメリカ",
          romanized: "A me ri ka",
          vietsub: "Mỹ",
        },
        {
          id: 1109,
          name: "中国",
          romanized: "Chuu goku",
          vietsub: "Trung Quốc",
        },
        {
          id: 1110,
          name: "韓国",
          romanized: "Kan koku",
          vietsub: "Hàn Quốc",
        },
        {
          id: 1111,
          name: "フランス",
          romanized: "Fu ran su",
          vietsub: "Pháp",
        },
        {
          id: 1112,
          name: "イギリス",
          romanized: "I gi ri su",
          vietsub: "Anh",
        },
        {
          id: 1113,
          name: "ドイツ",
          romanized: "Do i tsu",
          vietsub: "Đức",
        },
      ],
    },
    {
      id: 111,
      name: "Danh lam thắng cảnh",
      image: "/team2-mankai-user/assets/icons/danhlam.svg",
      vocabulary: [
        { id: 1114, name: "寺", romanized: "Te ra", vietsub: "Chùa" },
        {
          id: 1115,
          name: "神社",
          romanized: "Jin ja",
          vietsub: "Đền thờ",
        },
        {
          id: 1116,
          name: "富士山",
          romanized: "Fu ji san",
          vietsub: "Núi Phú Sĩ",
        },
        {
          id: 1117,
          name: "金閣寺",
          romanized: "Kin ka ku ji",
          vietsub: "Chùa Vàng",
        },
        {
          id: 1118,
          name: "清水寺",
          romanized: "Ki yo mi zu de ra",
          vietsub: "Chùa Kiyomizu",
        },
        {
          id: 1119,
          name: "厳島神社",
          romanized: "It su ku shi ma jin ja",
          vietsub: "Đền Itsukushima",
        },
        {
          id: 1120,
          name: "東京タワー",
          romanized: "Tou kyou taa waa",
          vietsub: "Tháp Tokyo",
        },
      ],
    },
    {
      id: 112,
      name: "Gia đình",
      image: "/team2-mankai-user/assets/icons/giadinh.svg",
      vocabulary: [
        {
          id: 1121,
          name: "家族",
          romanized: "Ka zo ku",
          vietsub: "Gia đình",
        },
        {
          id: 1122,
          name: "お父さん",
          romanized: "O tou san",
          vietsub: "Bố",
        },
        {
          id: 1123,
          name: "お母さん",
          romanized: "O kaa san",
          vietsub: "Mẹ",
        },
        {
          id: 1124,
          name: "兄弟",
          romanized: "Kyou dai",
          vietsub: "Anh em",
        },
        {
          id: 1125,
          name: "姉妹",
          romanized: "Shi mai",
          vietsub: "Chị em",
        },
        { id: 1126, name: "祖父", romanized: "So fu", vietsub: "Ông" },
        { id: 1127, name: "祖母", romanized: "So bo", vietsub: "Bà" },
        { id: 1128, name: "叔父", romanized: "O ji", vietsub: "Chú" },
        { id: 1129, name: "叔母", romanized: "O ba", vietsub: "Cô" },
        {
          id: 1130,
          name: "従兄弟",
          romanized: "It to ko",
          vietsub: "Anh em họ",
        },
        {
          id: 1131,
          name: "子供",
          romanized: "Ko do mo",
          vietsub: "Con cái",
        },
      ],
    },
    {
      id: 113,
      name: "Hẹn hò",
      image: "/team2-mankai-user/assets/icons/henho.svg",
      vocabulary: [
        {
          id: 1132,
          name: "デート",
          romanized: "De to",
          vietsub: "Hẹn hò",
        },
        {
          id: 1133,
          name: "好き",
          romanized: "Su ki",
          vietsub: "Thích",
        },
        { id: 1134, name: "愛", romanized: "Ai", vietsub: "Yêu" },
        {
          id: 1135,
          name: "プレゼント",
          romanized: "Pu re zen to",
          vietsub: "Quà tặng",
        },
        { id: 1136, name: "花", romanized: "Ha na", vietsub: "Hoa" },
        {
          id: 1137,
          name: "キス",
          romanized: "Ki su",
          vietsub: "Nụ hôn",
        },
        {
          id: 1138,
          name: "デートスポット",
          romanized: "De to su pot to",
          vietsub: "Địa điểm hẹn hò",
        },
      ],
    },
    {
      id: 114,
      name: "Khẩn cấp",
      image: "/team2-mankai-user/assets/icons/khancap.svg",
      vocabulary: [
        {
          id: 1139,
          name: "助けて",
          romanized: "Ta su ke te",
          vietsub: "Cứu giúp",
        },
        {
          id: 1140,
          name: "警察",
          romanized: "Kei satsu",
          vietsub: "Cảnh sát",
        },
        {
          id: 1141,
          name: "救急車",
          romanized: "Kyuu kyuu sha",
          vietsub: "Xe cứu thương",
        },
        { id: 1142, name: "火事", romanized: "Ka ji", vietsub: "Cháy" },
        {
          id: 1143,
          name: "危険",
          romanized: "Ki ken",
          vietsub: "Nguy hiểm",
        },
        {
          id: 1144,
          name: "事故",
          romanized: "Ji ko",
          vietsub: "Tai nạn",
        },
        {
          id: 1145,
          name: "緊急",
          romanized: "Kin kyuu",
          vietsub: "Khẩn cấp",
        },
        {
          id: 1146,
          name: "避難",
          romanized: "Hi nan",
          vietsub: "Sơ tán",
        },
      ],
    },
    {
      id: 115,
      name: "Bệnh tật",
      image: "/team2-mankai-user/assets/icons/benhtat.svg",
      vocabulary: [
        {
          id: 1147,
          name: "病院",
          romanized: "Byou in",
          vietsub: "Bệnh viện",
        },
        {
          id: 1148,
          name: "病気",
          romanized: "Byou ki",
          vietsub: "Bệnh",
        },
        {
          id: 1149,
          name: "薬",
          romanized: "Ku su ri",
          vietsub: "Thuốc",
        },
        { id: 1150, name: "熱", romanized: "Ne tsu", vietsub: "Sốt" },
        { id: 1151, name: "痛い", romanized: "I tai", vietsub: "Đau" },
        {
          id: 1152,
          name: "医者",
          romanized: "I sha",
          vietsub: "Bác sĩ",
        },
        {
          id: 1153,
          name: "風邪",
          romanized: "Ka ze",
          vietsub: "Cảm lạnh",
        },
        {
          id: 1154,
          name: "頭痛",
          romanized: "Zu tsuu",
          vietsub: "Đau đầu",
        },
        {
          id: 1155,
          name: "怪我",
          romanized: "Ke ga",
          vietsub: "Thương tích",
        },
      ],
    },
    {
      id: 116,
      name: "Câu đồng âm, khác nghĩa",
      image: "/team2-mankai-user/assets/icons/caudongam.svg",
      vocabulary: [
        {
          id: 1156,
          name: "橋",
          romanized: "Ha shi",
          vietsub: "Cây cầu",
        },
        { id: 1157, name: "箸", romanized: "Ha shi", vietsub: "Đũa" },
        { id: 1158, name: "花", romanized: "Ha na", vietsub: "Hoa" },
        { id: 1159, name: "鼻", romanized: "Ha na", vietsub: "Mũi" },
        {
          id: 1160,
          name: "星",
          romanized: "Ho shi",
          vietsub: "Ngôi sao",
        },
        {
          id: 1161,
          name: "干し",
          romanized: "Ho shi",
          vietsub: "Phơi khô",
        },
        { id: 1162, name: "絵", romanized: "E", vietsub: "Bức tranh" },
        { id: 1163, name: "柄", romanized: "E", vietsub: "Tay cầm" },
      ],
    },
  ]
}



let courses = localStorage.getItem("courses");
if (courses) {
  courses = JSON.parse(courses);
} else {
  courses = [
    {
      id: 11,
      name: "Tiếng Nhật N1",
      image: "/team2-mankai-user/assets/image/image-course.png",
      progress: 0,
      lessons: [
        {
          id:100,
          name: "Bài 1",
          progress: 0,
          time: 50,
          detail: [
            {
              id:1000,
              describe: `
                  <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 1: Từ vựng học thuật và Kanji N1</h3>
                  <p style="margin-bottom: 15px; line-height: 1.6;">
                    Bài học đầu tiên của lộ trình JLPT N1 tập trung vào từ vựng học thuật và kanji thường xuất hiện trong các bài đọc hiểu, báo chí và văn bản hành chính Nhật Bản. Qua bài học này, học viên sẽ nắm được các từ vựng cốt lõi và cách ứng dụng trong các tình huống giao tiếp thực tế.
                  </p>

                  <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                  <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                    <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                      <span style="position: absolute; left: 0; color: #F37142;">•</span>
                      <strong>Từ vựng học thuật:</strong> 50 từ vựng trừu tượng và chuyên ngành thường gặp trong kỳ thi JLPT N1
                    </li>
                    <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                      <span style="position: absolute; left: 0; color: #F37142;">•</span>
                      <strong>Kanji nâng cao:</strong> 25 kanji phức tạp và cách ghép thành từ ghép
                    </li>
                    <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                      <span style="position: absolute; left: 0; color: #F37142;">•</span>
                      <strong>Đọc hiểu:</strong> Phân tích văn bản học thuật và trích đoạn báo chí
                    </li>
                    <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                      <span style="position: absolute; left: 0; color: #F37142;">•</span>
                      <strong>Luyện tập:</strong> Bài tập áp dụng từ vựng vào tình huống thực tế
                    </li>
                  </ul>

                  <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                  <ul style="list-style-type: none; padding-left: 20px;">
                    <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                      <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                      Nhận diện và sử dụng được các từ vựng học thuật trong văn cảnh phù hợp
                    </li>
                    <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                      <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                      Đọc hiểu được các đoạn văn có chứa từ vựng và kanji nâng cao
                    </li>
                    <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                      <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                      Phát triển kỹ năng ghi nhớ kanji thông qua các liên tưởng và cấu trúc
                    </li>
                  </ul>`,
              document: [
                {
                  id: 500,
                  name: "PDF",
                  capacity: "300KB"
                },
                {
                  id: 501,
                  name: "Video",
                  capacity: "100MB"
                },
                {
                  id: 502,
                  name: "Text",
                  capacity: "20KB"
                },
                {
                  id: 503,
                  name: "Audio",
                  capacity: "15MB"
                },
                {
                  id: 504,
                  name: "Slide",
                  capacity: "100MB"
                }
              ],
              discuss:{
                id: 600,
                listComment:[
                  {
                    id: 3000,
                    idUser: 2,
                    name: "Thanh",
                    avatar: `/team2-mankai-user/assets/image/avatar3.jpg`,
                    content: "Bài học rất hay",
                    time: "5:30 1/3/2025",
                  },
                  {
                    id: 3001,
                    idUser: 3,
                    name: "Lê Toàn",
                    avatar: `/team2-mankai-user/assets/image/avatar4.jpg`,
                    content: "Dễ hiểu, phù hợp với người mới bắt đầu, giảng viên giảng dạy rất tận tâm, chất lượng video tốt, có nhiều phương pháp học tập",
                    time: "5:50 2/3/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 2000,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/NHmS8R6XyjM?si=1klFmvhJZHVIAXrg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 2001,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/CL8hIWyaPXA?si=aRn693nx29Ssz87Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ],  
            },
            {
              id:1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary:[
                {id: 2001, word: "私は", meaning: "Tôi", status: false},
                {id: 2002, word: "あなた", meaning: "Bạn", status: false},
                {id: 2003, word: "彼", meaning: "Anh ấy", status: false},
                {id: 2004, word: "彼女", meaning: "Cô ấy", status: false},
                {id: 2005, word: "私たち", meaning: "Chúng tôi", status: false},
                {id: 2006, word: "家族", meaning: "Gia đình", status: false},
                {id: 2007, word: "友達", meaning: "Bạn bè", status: false},
                {id: 2008, word: "学校", meaning: "Trường học", status: false},
                {id: 2009, word: "仕事", meaning: "Công việc", status: false},
                {id: 2010, word: "趣味", meaning: "Sở thích", status: false},
              ],
              test: [
                {
                  id:2101, 
                  questions:"___グエン・タイ・デュイです。", 
                  answer:["私は", "あなた", "彼", "彼女"], 
                  correctAnswer:"私は", 
                  result:"私はグエン・タイ・デュイです。",
                  explain: "郵政通信技術大学の学生です 私は。"
                },
                {
                  id: 2102,
                  questions: "___は私の友達です。",
                  answer: ["彼", "彼女", "あなた", "私"],
                  correctAnswer: "彼",
                  result: "彼は私の友達です。",
                  explain: "彼は日本語が上手です。"
                },
                {
                  id: 2103,
                  questions: "___は日本人です。",
                  answer: ["私は", "彼", "彼女", "あなた"],
                  correctAnswer: "彼女",
                  result: "彼女は日本人です。",
                  explain: "彼女は日本語が上手です。"
                }
              ]

            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/79-bo-thu-kanji-thuong-gap.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `<h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                    語彙学習: JLPT N1レベル (Từ vựng: Trình độ JLPT N1)
                  </h3>
                  <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                  <ul style="list-style-type: none; padding-left: 20px;">
                    <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                      <span style="position: absolute; left: 0; color: #F37142;">•</span>
                      Nắm vững 500 từ vựng trình độ N1 thường gặp trong kỳ thi JLPT
                    </li>
                    <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                      <span style="position: absolute; left: 0; color: #F37142;">•</span>
                      Hiểu và sử dụng thành thạo các từ vựng học thuật, chuyên ngành
                    </li>
                    <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                      <span style="position: absolute; left: 0; color: #F37142;">•</span>
                      Phân biệt được các từ đồng nghĩa và cách sử dụng trong ngữ cảnh
                    </li>
                  </ul>

                  <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                  <ul style="list-style-type: none; padding-left: 20px;">
                    <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                      <span style="position: absolute; left: 0; color: #F37142;">•</span>
                      Bài học này tập trung vào các từ vựng thường xuất hiện trong kỳ thi JLPT N1
                    </li>
                    <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                      <span style="position: absolute; left: 0; color: #F37142;">•</span>
                      Mỗi từ đều có phiên âm, nghĩa tiếng Việt và ví dụ minh họa
                    </li>
                  </ul>

                  <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                    <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Từ vựng N1 - Bài 1: Các từ học thuật</h4>
                    <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                      <strong style="color: #333; font-size: 18px;">概念 <span style="color: #F37142; font-weight: normal;">(がいねん)</span>:</strong> Khái niệm, ý tưởng<br>
                      <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: この概念を理解するのは簡単ではない。</em><br>
                      <em style="color: #777; display: block; padding-left: 15px;">Dịch: Không dễ để hiểu khái niệm này.</em>
                    </p>
                    <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                      <strong style="color: #333; font-size: 18px;">抽象的 <span style="color: #F37142; font-weight: normal;">(ちゅうしょうてき)</span>:</strong> Trừu tượng<br>
                      <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 彼の説明は抽象的すぎて分かりにくい。</em><br>
                      <em style="color: #777; display: block; padding-left: 15px;">Dịch: Lời giải thích của anh ấy quá trừu tượng nên khó hiểu.</em>
                    </p>
                    <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                      <strong style="color: #333; font-size: 18px;">具体的 <span style="color: #F37142; font-weight: normal;">(ぐたいてき)</span>:</strong> Cụ thể<br>
                      <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: もっと具体的な例を挙げてください。</em><br>
                      <em style="color: #777; display: block; padding-left: 15px;">Dịch: Hãy đưa ra ví dụ cụ thể hơn.</em>
                    </p>
                    <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                      <strong style="color: #333; font-size: 18px;">導入 <span style="color: #F37142; font-weight: normal;">(どうにゅう)</span>:</strong> Giới thiệu, đưa vào<br>
                      <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 新しい制度を導入することにした。</em><br>
                      <em style="color: #777; display: block; padding-left: 15px;">Dịch: Chúng tôi đã quyết định đưa vào hệ thống mới.</em>
                    </p>
                    <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                      <strong style="color: #333; font-size: 18px;">分析 <span style="color: #F37142; font-weight: normal;">(ぶんせき)</span>:</strong> Phân tích<br>
                      <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: データの分析には時間がかかる。</em><br>
                      <em style="color: #777; display: block; padding-left: 15px;">Dịch: Việc phân tích dữ liệu mất nhiều thời gian.</em>
                    </p>
                    <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                      <strong style="color: #F37142; font-size: 18px;">Mẹo học từ vựng N1:</strong> 
                    </p>
                    <p style="margin: 10px 0; padding-left: 20px;">
                      <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                      Tạo flashcards với từ tiếng Nhật một mặt và nghĩa tiếng Việt mặt còn lại.
                    </p>
                    <p style="margin: 10px 0; padding-left: 20px;">
                      <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                      Học từ vựng theo chủ đề sẽ giúp ghi nhớ tốt hơn là học theo danh sách.
                    </p>
                    <p style="margin: 10px 0; padding-left: 20px;">
                      <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">3</span>
                      Đọc báo, tin tức tiếng Nhật hàng ngày để tiếp xúc với từ vựng N1 trong ngữ cảnh thực tế.
                    </p>
                    <p style="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                      <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                    </p>
                  </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 2000,
                  sentence1:"私はグエン・タイ・デュイです。郵政通信技術大学の学生です 私は",
                  sentence2: "私はグエン・タイ・デュイで",
                  answer: "デュイで"
                },
                {
                  id: 2001,
                  sentence1:"彼女は日本人です。<br/> 彼女はとても親切で、彼は",
                  sentence2: "彼は",
                  answer: "彼女の友達です"
                },
                {
                  id: 2002,
                  sentence1:"この学校はとても大きいです。",
                  sentence2: "学生は",
                  answer: "よく勉強します"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 12,
              progress: 0,
              test:[
                {
                  id:2000,
                  name: "Nội dung đề bài",
                  question:[
                    {
                      id:3000,
                      special:"私はグエン・タイ・デュイです。",
                      text:"郵政通信技術大学の学生です 私は エン・タイ・デュはグエン・タイ・デュイです私はグエン・タイ・デュイで",
                      select: [
                        {id: 5000, value: "えんぴつです", check: true},
                        {id: 5001, value: "こんにちは", check: false},
                        {id: 5002, value: "えんぴつです。",check: false},
                        {id: 5003, value: "ろくじです。",check: false},
                      ]
                    },
                    {
                      id: 3001,
                      special: "これはなんですか。",
                      text: "テーブルに置いてあるものは何でしょうか。",
                      select: [
                        { id: 5004, value: "ほんです。", check: true },
                        { id: 5005, value: "えんぴつです。", check: false },
                        { id: 5006, value: "かさです。", check: false },
                        { id: 5007, value: "いすです。", check: false }
                      ]
                    },
                    {
                      id: 3002,
                      special: "いまなんじですか。",
                      text: "時計を見てください。現在の時間は何時ですか。",
                      select: [
                        { id: 5008, value: "ごじです。", check: false },
                        { id: 5009, value: "ろくじです。", check: true },
                        { id: 5010, value: "しちじです。", check: false },
                        { id: 5011, value: "はちじです。", check: false }
                      ]
                    },
                    {
                      id: 3003,
                      special: "がっこうへどうやってきますか。",
                      text: "あなたは学校にどのようにして通っていますか。",
                      select: [
                        { id: 5012, value: "じてんしゃでいきます。", check: false },
                        { id: 5013, value: "でんしゃでいきます。", check: true },
                        { id: 5014, value: "あるいていきます。", check: false },
                        { id: 5015, value: "くるまでいきます。", check: false }
                      ]
                    },
                    {
                      id: 3004,
                      special: "きのうはどこにいきましたか。",
                      text: "昨日、どこかへ出かけましたか。",
                      select: [
                        { id: 5016, value: "ともだちのいえにいきました。", check: false },
                        { id: 5017, value: "こうえんにいきました。", check: true },
                        { id: 5018, value: "がっこうにいきました。", check: false },
                        { id: 5019, value: "うみにいきました。", check: false }
                      ]
                    },
                    {
                      id: 3405,
                      special: "これは なんの くるま ですか。",
                      text: "みちで くるまを みました。なんの くるま でしょうか。",
                      select: [
                        { id: 5800, value: "バス です", check: false },
                        { id: 5801, value: "タクシー です", check: true },
                        { id: 5802, value: "じてんしゃ です", check: false },
                        { id: 5803, value: "でんしゃ です", check: false }
                      ]
                    }
                  ]
                },
                {
                  id:2001,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 3000,
                      special: "私はグエン・タイ・デュイです。",
                      text: "郵政通信技術大学の学生です 私は",
                      list: [
                        {
                          id: 4000,
                          problem: "あかい ぼーるぺんは ありますか。",
                          select: [
                            {id:5000, value:"こんにちは", check:true},
                            {id:5001, value:"こんにちは", check:false},
                            {id:5002, value:"こんにちは", check:false},
                            {id:5003, value:"こんにちは", check:false},
                          ]
                        },
                        {
                          "id": 4002,
                          "problem": "みどりの えんぴつは ありますか。",
                          "select": [
                            { "id": 5004, "value": "はい、あります", "check": true },
                            { "id": 5005, "value": "いいえ、ありません", "check": false },
                            { "id": 5006, "value": "わかりません", "check": false },
                            { "id": 5007, "value": "すみません", "check": false }
                          ]
                        }
                      ]
                    },
                    {
                      id: 3001,
                      special: "私はレ・ヴァン・アンです。",
                      text: "ハノイ工科大学の学生です 私は",
                      list: [
                        {
                          id: 4003,
                          problem: "くろい かばんは どこに ありますか。",
                          select: [
                            { id: 5024, value: "つくえの うえに あります", check: true },
                            { id: 5025, value: "いすの したに あります", check: false },
                            { id: 5026, value: "ありません", check: false },
                            { id: 5027, value: "わかりません", check: false }
                          ]
                        },
                        {
                          id: 4004,
                          problem: "いま なんじ ですか。",
                          select: [
                            { id: 5028, value: "じゅうじ です", check: false },
                            { id: 5029, value: "じゅういちじ です", check: true },
                            { id: 5030, value: "じゅうにじ です", check: false },
                            { id: 5031, value: "ごじ です", check: false }
                          ]
                        }
                      ]
                    },
                    {
                      id: 3002,
                      special: "私の名前はブイ・ミン・トゥアンです。",
                      text: "日本語を 勉強しています 私は",
                      list: [
                        {
                          id: 4005,
                          problem: "この りんごは いくら ですか。",
                          select: [
                            { id: 5032, value: "にひゃくえん です", check: true },
                            { id: 5033, value: "さんびゃくえん です", check: false },
                            { id: 5034, value: "よんひゃくえん です", check: false },
                            { id: 5035, value: "ごひゃくえん です", check: false }
                          ]
                        }
                      ]
                    },
                    {
                      id: 3003,
                      special: "私はグエン・ティ・フオンです。",
                      text: "ホーチミン市の 学生です 私は",
                      list: [
                        {
                          id: 4006,
                          problem: "きょうは なんようび ですか。",
                          select: [
                            { id: 5036, value: "どようび です", check: false },
                            { id: 5037, value: "にちようび です", check: false },
                            { id: 5038, value: "かようび です", check: true },
                            { id: 5039, value: "げつようび です", check: false }
                          ]
                        },
                        {
                          id: 4007,
                          problem: "いぬは すき ですか。",
                          select: [
                            { id: 5040, value: "はい、すき です", check: true },
                            { id: 5041, value: "いいえ、すき じゃありません", check: false },
                            { id: 5042, value: "わかりません", check: false },
                            { id: 5043, value: "ねこが すき です", check: false }
                          ]
                        },
                        {
                          id: 4008,
                          problem: "この ほんは だれの ですか。",
                          select: [
                            { id: 5044, value: "わたしの です", check: true },
                            { id: 5045, value: "せんせいの です", check: false },
                            { id: 5046, value: "ともだちの です", check: false },
                            { id: 5047, value: "わかりません", check: false }
                          ]
                        }
                      ]
                    },
                    {
                      id: 3004,
                      special: "私はドー・バン・フイです。",
                      text: "プログラミングが すきです 私は",
                      list: [
                        {
                          id: 4009,
                          problem: "あしたは あめが ふりますか。",
                          select: [
                            { id: 5048, value: "はい、ふります", check: false },
                            { id: 5049, value: "いいえ、ふりません", check: true },
                            { id: 5050, value: "わかりません", check: false },
                            { id: 5051, value: "ゆきが ふります", check: false }
                          ]
                        },
                        {
                          id: 4010,
                          problem: "がっこうは どこに ありますか。",
                          select: [
                            { id: 5052, value: "えきの ちかく です", check: true },
                            { id: 5053, value: "こうえんの なか です", check: false },
                            { id: 5054, value: "やまの うえ です", check: false },
                            { id: 5055, value: "わかりません", check: false }
                          ]
                        }
                      ]
                    },
                    {
                      id: 3005,
                      special: "私の名前はチャン・ティ・リンです。",
                      text: "日本語の せんせいになりたい 私は",
                      list: [
                        {
                          id: 4011,
                          problem: "この くるまは なんいろ ですか。",
                          select: [
                            { id: 5056, value: "あおい です", check: false },
                            { id: 5057, value: "しろい です", check: true },
                            { id: 5058, value: "くろい です", check: false },
                            { id: 5059, value: "きいろい です", check: false }
                          ]
                        }
                      ]
                    }  
                  ]
                },
                {
                  id:2002,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id:3000,
                      special: "私はグエン・タイ・デュイです。",
                      text: "郵政通信技術大学の学生です 私はエン・タイ・デュはグエン・タイ・デュイです ...... 私はグエン・タイ・デュイで",
                      select:[
                        {id:5001, value: "郵政通", check: true},
                        {id:5002, value: "学の学", check: false},
                        {id:5003, value: "私は", check: false},
                        {id:5004, value: "タイ・デ", check: false}
                      ]
                    },
                    {
                      id: 3001,
                      special: "私は毎朝6時に起きます。",
                      text: "私の生活はとても規則正しいです。朝6時に起きて、朝食を食べ、仕事に行きます。私は毎朝...",
                      select: [
                        { id: 5005, value: "6時に起きる", check: true }, 
                        { id: 5006, value: "7時に起きる", check: false },
                        { id: 5007, value: "8時に起きる", check: false },
                        { id: 5008, value: "9時に起きる", check: false }
                      ]
                    },
                    {
                      id: 3002,
                      special: "日本で有名な祭りは？",
                      text: "日本には多くの伝統的な祭りがあります。特に京都の祇園祭はとても有名です。有名な祭りは...",
                      select: [
                        { id: 5009, value: "花火大会", check: false },
                        { id: 5010, value: "祇園祭", check: true }, 
                        { id: 5011, value: "雪まつり", check: false },
                        { id: 5012, value: "桜祭り", check: false }
                      ]
                    },
                    {
                      id: 3003,
                      special: "寿司は日本の伝統的な食べ物です。",
                      text: "日本料理の中で、寿司は世界中で人気があります。新鮮な魚と米を使います。日本の伝統的な食べ物は...",
                      select: [
                        { id: 5013, value: "ラーメン", check: false },
                        { id: 5014, value: "カレー", check: false },
                        { id: 5015, value: "寿司", check: false },
                        { id: 5016, value: "天ぷら", check: true } 
                      ]
                    },
                    {
                      id: 3004,
                      special: "日本の国花は何ですか？",
                      text: "日本には美しい花がたくさんあります。その中でも桜は国花として知られています。日本の国花は...",
                      select: [
                        { id: 5017, value: "菊", check: true }, 
                        { id: 5018, value: "桜", check: false },
                        { id: 5019, value: "梅", check: false },
                        { id: 5020, value: "蓮", check: false }
                      ]
                    },
                    {
                      id: 3005,
                      special: "私は猫が好きです。",
                      text: "家でペットを飼っています。私の好きな動物は猫で、毎日一緒に遊びます。私は...",
                      select: [
                        { id: 5021, value: "犬が好き", check: false },
                        { id: 5022, value: "鳥が好き", check: false },
                        { id: 5023, value: "猫が好き", check: true }, 
                        { id: 5024, value: "魚が好き", check: false }
                      ]
                    }
                  ]
                },
                {
                  id:2003,
                  name: "Bài kiểm tra ghép câu",
                  question:[
                    {
                      id: 4000,
                      pairs: [
                        { left: "こんにちは", right: "お元気で" },
                        { left: "昨日", right: "雨が降りま" },
                        { left: "この本", right: "とても面白" },
                        { left: "毎朝", right: "早く起きます" },
                        { left: "日本", right: "美しい国で" },
                        { left: "友達", right: "一緒に遊びま" },
                        { left: "学校", right: "毎日行きます" },
                        { left: "音楽", right: "大好きです" },
                        { left: "夏", right: "とても暑いで" },
                        { left: "お茶", right: "飲みます" }
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
          name: "Bài 2",
          progress: 0,
          time: 100,
          detail: [
            {
              id: 1000,
              describe: `
                <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 2: Ngữ pháp nâng cao và đọc hiểu N1</h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học thứ hai của lộ trình JLPT N1 tập trung vào các cấu trúc ngữ pháp nâng cao và kỹ năng đọc hiểu văn bản phức tạp. Học viên sẽ làm quen với các mẫu câu đặc trưng trong kỳ thi N1, đồng thời rèn luyện khả năng phân tích các văn bản học thuật, báo chí và văn hóa Nhật Bản.
                </p>
                <div style="background-color: #fff4eb; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #F37142;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Lưu ý quan trọng</h4>
                  <p style="line-height: 1.6;">
                    Để đạt hiệu quả cao, hãy luyện tập sử dụng ngữ pháp trong các tình huống thực tế và ghi chú các cấu trúc khó để ôn tập thường xuyên.
                  </p>
                </div>
        
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Ngữ pháp N1:</strong> 25 cấu trúc ngữ pháp nâng cao thường gặp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Đọc hiểu:</strong> Phân tích văn bản báo chí và học thuật
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Bài tập:</strong> Ứng dụng ngữ pháp trong viết câu
                  </li>
                </ul>
        
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Áp dụng ngữ pháp N1 trong các ngữ cảnh phù hợp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Đọc hiểu văn bản phức tạp hiệu quả
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Quản lý thời gian khi làm bài thi
                  </li>
                </ul>
        
                <div style="text-align: center; margin: 20px 0;">
                  <img src="/team2-mankai-user/assets/image/japanese-culture.jpg" alt="Japanese culture" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <p style="color: #555; font-size: 14px; margin-top: 10px;">Văn hóa Nhật Bản qua các bài đọc</p>
                </div>`,
              document: [
                {
                  id: 510,
                  name: "Ngữ pháp N1.pdf",
                  capacity: "400KB"
                },
                {
                  id: 511,
                  name: "Bài tập ngữ pháp.docx",
                  capacity: "50KB"
                },
                {
                  id: 512,
                  name: "Video hướng dẫn.mp4",
                  capacity: "120MB"
                }
              ],
              discuss: {
                id: 610,
                listComment: [
                  {
                    id: 3100,
                    idUser: 4,
                    name: "Ngọc",
                    avatar: `/team2-mankai-user/assets/image/avatar5.jpg`,
                    content: "Giải thích ngữ pháp rất chi tiết, dễ hiểu!",
                    time: "8:00 5/3/2025",
                  },
                  {
                    id: 3101,
                    idUser: 5,
                    name: "Hưng",
                    avatar: `/team2-mankai-user/assets/image/avatar6.jpg`,
                    content: "Bài đọc hiểu khá khó, mong có thêm ví dụ.",
                    time: "9:15 6/3/2025",
                  },
                  {
                    id: 3102,
                    idUser: 6,
                    name: "Lan",
                    avatar: `/team2-mankai-user/assets/image/avatar7.jpg`,
                    content: "Cảm ơn vì các bài tập thực tế!",
                    time: "10:30 7/3/2025",
                  },
                  {
                    id: 3103,
                    idUser: 7,
                    name: "Minh",
                    avatar: `/team2-mankai-user/assets/image/avatar8.jpg`,
                    content: "Video giải thích rất hữu ích.",
                    time: "11:00 8/3/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 2100,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/t_rmsiA1tG0?si=znp_DwbqHzy8xh2-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 2101,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/-OErtBAxVtw?si=PoZ1pbKE8SVwj5LM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 2102,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/-OErtBAxVtw?si=wRLb8E2JtsZ8bVoQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ]
            },
            {
              id: 1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary: [
                { id: 2101, word: "際して", meaning: "Nhân dịp", status: false },
                { id: 2102, word: "踏まえて", meaning: "Dựa trên", status: false },
                { id: 2103, word: "一概に", meaning: "Không thể nói chung", status: false },
                { id: 2104, word: "概して", meaning: "Nói chung", status: false },
                { id: 2105, word: "ひいては", meaning: "Dẫn đến", status: false },
                { id: 2106, word: "かねて", meaning: "Từ trước", status: false },
                { id: 2107, word: "そぐわない", meaning: "Không phù hợp", status: false },
                { id: 2108, word: "もとより", meaning: "Vốn dĩ", status: false },
                { id: 2109, word: "およそ", meaning: "Xấp xỉ", status: false },
                { id: 2110, word: "さながら", meaning: "Giống như", status: false },
                { id: 2111, word: "と同時に", meaning: "Đồng thời", status: false },
                { id: 2112, word: "おいて", meaning: "Trong trường hợp", status: false }
              ],
              test: [
                {
                  id: 2201,
                  questions: "この問題を解決する___、新しい技術が必要だ。",
                  answer: ["際して", "踏まえて", "一概に", "概して"],
                  correctAnswer: "踏まえて",
                  result: "この問題を解決する踏まえて、新しい技術が必要だ。",
                  explain: "「踏まえて」 mang nghĩa 'dựa trên', phù hợp với ngữ cảnh xem xét vấn đề."
                },
                {
                  id: 2202,
                  questions: "彼の行動は状況に___。",
                  answer: ["そぐわない", "かねて", "ひいては", "もとより"],
                  correctAnswer: "そぐわない",
                  result: "彼の行動は状況にそぐわない。",
                  explain: "「そぐわない」 có nghĩa 'không phù hợp' với tình huống."
                },
                {
                  id: 2203,
                  questions: "この計画は___成功するとは言えない。",
                  answer: ["一概に", "概して", "およそ", "さながら"],
                  correctAnswer: "一概に",
                  result: "この計画は一概に成功するとは言えない。",
                  explain: "「一概に」 mang nghĩa 'không thể nói chung', phù hợp khi không thể kết luận đơn giản."
                }
              ]
            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/tiengnhat01.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `
                <h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                  語彙学習: JLPT N1レベル (Ngữ pháp: Trình độ JLPT N1)
                </h3>
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Nắm vững 25 cấu trúc ngữ pháp N1
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Sử dụng ngữ pháp trong văn bản học thuật
                  </li>
                </ul>
        
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Các cấu trúc ngữ pháp N1 thường gặp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Giải thích chi tiết kèm ví dụ
                  </li>
                </ul>
        
                <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                  <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Ngữ pháp N1 - Bài 2: Cấu trúc nâng cao</h4>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">際して <span style="color: #F37142; font-weight: normal;">(さいして)</span>:</strong> Nhân dịp<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 新しいプロジェクトを開始する際して、十分な準備が必要です。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Khi bắt đầu một dự án mới, cần chuẩn bị đầy đủ.</em>
                  </p>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">踏まえて <span style="color: #F37142; font-weight: normal;">(ふまえて)</span>:</strong> Dựa trên<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 過去の失敗を踏まえて、計画を見直した。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Dựa trên những thất bại trước đây, chúng tôi đã xem xét lại kế hoạch.</em>
                  </p>
                  <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                    <strong style="color: #F37142; font-size: 18px;">Mẹo học ngữ pháp N1:</strong> 
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                    Luyện viết câu với các cấu trúc mới.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                    Đọc báo tiếng Nhật để nhận diện ngữ pháp.
                  </p>
                  <p style ASAP="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                  </p>
                </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 2100,
                  sentence1: "新しいプロジェクトを開始する際して、準備が必要です。",
                  sentence2: "準備は",
                  answer: "十分に"
                },
                {
                  id: 2101,
                  sentence1: "過去の失敗を踏まえて、計画を見直した。",
                  sentence2: "見直しは",
                  answer: "慎重に"
                },
                {
                  id: 2102,
                  sentence1: "彼の意見は一概に正しいとは言えない。",
                  sentence2: "意見は",
                  answer: "慎重に"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 15,
              progress: 0,
              test: [
                {
                  id: 2100,
                  name: "Nội dung đề bài",
                  question: [
                    {
                      id: 3100,
                      special: "新しいプロジェクトを開始する際して。",
                      text: "十分な準備が必要です。",
                      select: [
                        { id: 5100, value: "準備は急いで", check: false },
                        { id: 5101, value: "準備は十分に", check: true },
                        { id: 5102, value: "準備は不要", check: false },
                        { id: 5103, value: "準備は後で", check: false }
                      ]
                    },
                    {
                      id: 3101,
                      special: "過去の失敗を踏まえて。",
                      text: "計画を見直した。",
                      select: [
                        { id: 5104, value: "見直しは慎重に", check: true },
                        { id: 5105, value: "見直しは急いで", check: false },
                        { id: 5106, value: "見直しは不要", check: false },
                        { id: 5107, value: "見直しは後で", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 2101,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 3100,
                      special: "新しいプロジェクトを開始する際して。",
                      text: "十分な準備が必要です。",
                      list: [
                        {
                          id: 4100,
                          problem: "準備はどのように行うべきですか。",
                          select: [
                            { id: 5200, value: "十分に行う", check: true },
                            { id: 5201, value: "急いで行う", check: false },
                            { id: 5202, value: "後で行う", check: false },
                            { id: 5203, value: "行わない", check: false }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 2102,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id: 3100,
                      special: "新しいプロジェクトを開始する際して。",
                      text: "十分な準備が必要です。新しいプロジェクトを ...... 十分な準備が必要です。",
                      select: [
                        { id: 5300, value: "際して", check: true },
                        { id: 5301, value: "踏まえて", check: false },
                        { id: 5302, value: "一概に", check: false },
                        { id: 5303, value: "概して", check: false }
                      ]
                    },
                    {
                      id: 3101,
                      special: "過去の失敗を踏まえて。",
                      text: "計画を見直した。過去の失敗を ...... 計画を見直した。",
                      select: [
                        { id: 5304, value: "踏まえて", check: true },
                        { id: 5305, value: "際して", check: false },
                        { id: 5306, value: "一概に", check: false },
                        { id: 5307, value: "概して", check: false }
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
          name: "Bài 3",
          progress: 0,
          time: 55,
          detail: [
            {
              id: 1000,
              describe: `
                <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 3: Nghe hiểu và kỹ năng phân tích văn bản N1</h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học thứ ba của lộ trình JLPT N1 tập trung vào kỹ năng nghe hiểu và phân tích văn bản phức tạp. Học viên sẽ luyện tập các dạng bài nghe hiểu thường gặp trong kỳ thi N1, đồng thời nâng cao khả năng phân tích các bài đọc dài, bao gồm báo chí, luận văn và văn bản chuyên ngành.
                </p>
                <div style="background-color: #fff4eb; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #F37142;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Lưu ý quan trọng</h4>
                  <p style="line-height: 1.6;">
                    Để cải thiện kỹ năng nghe, hãy luyện tập nghe các đoạn hội thoại hoặc bài phát biểu tiếng Nhật hàng ngày. Khi đọc, chú ý ghi lại các từ khóa và ý chính để nắm bắt nội dung nhanh hơn.
                  </p>
                </div>
        
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Nghe hiểu:</strong> Luyện tập các dạng bài nghe N1 như hội thoại, bài phát biểu, và thông báo
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Đọc hiểu:</strong> Phân tích các đoạn văn dài từ báo chí và luận văn
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Bài tập:</strong> Trả lời câu hỏi dựa trên nội dung nghe và đọc
                  </li>
                </ul>
        
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Nắm bắt nội dung chính của các đoạn nghe phức tạp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Phân tích và trả lời câu hỏi từ các văn bản dài
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Cải thiện tốc độ xử lý thông tin trong bài thi
                  </li>
                </ul>
        
                <div style="text-align: center; margin: 20px 0;">
                  <img src="/team2-mankai-user/assets/image/japanese-news.jpg" alt="Japanese news" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <p style="color: #555; font-size: 14px; margin-top: 10px;">Hình ảnh minh họa báo chí Nhật Bản</p>
                </div>`,
              document: [
                {
                  id: 520,
                  name: "Nghe hiểu N1.mp3",
                  capacity: "25MB"
                },
                {
                  id: 521,
                  name: "Bài đọc hiểu.pdf",
                  capacity: "450KB"
                },
                {
                  id: 522,
                  name: "Câu hỏi luyện tập.docx",
                  capacity: "40KB"
                },
                {
                  id: 523,
                  name: "Video hướng dẫn.mp4",
                  capacity: "130MB"
                }
              ],
              discuss: {
                id: 620,
                listComment: [
                  {
                    id: 3200,
                    idUser: 8,
                    name: "Mai",
                    avatar: `/team2-mankai-user/assets/image/avatar9.jpg`,
                    content: "Bài nghe hiểu rất thực tế, giống đề thi N1!",
                    time: "7:00 10/3/2025",
                  },
                  {
                    id: 3201,
                    idUser: 9,
                    name: "Vũ",
                    avatar: `/team2-mankai-user/assets/image/avatar10.jpg`,
                    content: "Phần phân tích văn bản hơi khó, cần thêm hướng dẫn chi tiết.",
                    time: "8:20 11/3/2025",
                  },
                  {
                    id: 3202,
                    idUser: 10,
                    name: "Anh",
                    avatar: `/team2-mankai-user/assets/image/avatar11.jpg`,
                    content: "Cảm ơn vì các mẹo quản lý thời gian, rất hữu ích!",
                    time: "9:40 12/3/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 2200,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/la5XC0wlqUI?si=798x2QL0l4rQfmgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 2201,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/-R-T6Qrq5fE?si=ar9eI_1yOQuvqtdh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ]
            },
            {
              id: 1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary: [
                { id: 2201, word: "つまるところ", meaning: "Tóm lại", status: false },
                { id: 2202, word: "おそれがある", meaning: "Có nguy cơ", status: false },
                { id: 2203, word: "まじき", meaning: "Không nên", status: false },
                { id: 2204, word: "かたわら", meaning: "Bên cạnh", status: false },
                { id: 2205, word: "もさることながら", meaning: "Không chỉ", status: false },
                { id: 2206, word: "にそくして", meaning: "Theo", status: false },
                { id: 2207, word: "かねない", meaning: "Có thể", status: false },
                { id: 2208, word: "ずくめ", meaning: "Toàn là", status: false },
                { id: 2209, word: "いかん", meaning: "Tùy thuộc", status: false },
                { id: 2210, word: "がてら", meaning: "Nhân tiện", status: false }
              ],
              test: [
                {
                  id: 2301,
                  questions: "この問題の解決策は、___時間と資金が必要だ。",
                  answer: ["つまるところ", "おそれがある", "まじき", "かたわら"],
                  correctAnswer: "つまるところ",
                  result: "この問題の解決策は、つまるところ時間と資金が必要だ。",
                  explain: "「つまるところ」 mang nghĩa 'tóm lại', dùng để tổng kết ý chính."
                },
                {
                  id: 2302,
                  questions: "彼の行動は危険を___。",
                  answer: ["おそれがある", "にそくして", "かねない", "ずくめ"],
                  correctAnswer: "おそれがある",
                  result: "彼の行動は危険をおそれがある。",
                  explain: "「おそれがある」 có nghĩa 'có nguy cơ', phù hợp với ngữ cảnh nói về rủi ro."
                },
                {
                  id: 2303,
                  questions: "この決定は失敗を___恐れがある。",
                  answer: ["かねない", "いかん", "がてら", "もさることながら"],
                  correctAnswer: "かねない",
                  result: "この決定は失敗をかねない恐れがある。",
                  explain: "「かねない」 mang nghĩa 'có thể', dùng để chỉ khả năng xảy ra điều tiêu cực."
                }
              ]
            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/tiengnhat02.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `
                <h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                  語彙学習: JLPT N1レベル (Nghe hiểu và phân tích văn bản: Trình độ JLPT N1)
                </h3>
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Nắm bắt nội dung chính của các đoạn nghe N1
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Phân tích và trả lời câu hỏi từ văn bản dài
                  </li>
                </ul>
        
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Các dạng bài nghe hiểu và đọc hiểu N1
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Ví dụ và bài tập thực hành
                  </li>
                </ul>
        
                <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                  <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Từ vựng N1 - Bài 3: Nghe và phân tích</h4>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">つまるところ <span style="color: #F37142; font-weight: normal;">(つまるところ)</span>:</strong> Tóm lại<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: つまるところ、成功には努力が必要です。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Tóm lại, thành công cần có nỗ lực.</em>
                  </p>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">おそれがある <span style="color: #F37142; font-weight: normal;">(おそれがある)</span>:</strong> Có nguy cơ<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: この計画には失敗のおそれがある。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Kế hoạch này có nguy cơ thất bại.</em>
                  </p>
                  <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                    <strong style="color: #F37142; font-size: 18px;">Mẹo học nghe hiểu N1:</strong> 
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                    Nghe các đoạn hội thoại ngắn trước, sau đó chuyển sang bài phát biểu dài.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                    Ghi chú từ khóa khi nghe để dễ trả lời câu hỏi.
                  </p>
                  <p style="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                  </p>
                </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 2200,
                  sentence1: "つまるところ、成功には努力が必要です。",
                  sentence2: "努力は",
                  answer: "不可欠だ"
                },
                {
                  id: 2201,
                  sentence1: "この計画には失敗のおそれがある。",
                  sentence2: "計画は",
                  answer: "慎重に"
                },
                {
                  id: 2202,
                  sentence1: "彼の行動は事故をかねない。",
                  sentence2: "行動は",
                  answer: "危険だ"
                },
                {
                  id: 2203,
                  sentence1: "仕事のかたわら、趣味を楽しむ。",
                  sentence2: "趣味は",
                  answer: "楽しい"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 18,
              progress: 0,
              test: [
                {
                  id: 2200,
                  name: "Nội dung đề bài",
                  question: [
                    {
                      id: 3200,
                      special: "つまるところ、成功には努力が必要です。",
                      text: "努力はどのように行うべきですか。",
                      select: [
                        { id: 5400, value: "努力は不要", check: false },
                        { id: 5401, value: "努力は継続的に", check: true },
                        { id: 5402, value: "努力は急いで", check: false },
                        { id: 5403, value: "努力は後で", check: false }
                      ]
                    },
                    {
                      id: 3201,
                      special: "この計画には失敗のおそれがある。",
                      text: "計画を進めるにはどうすべきですか。",
                      select: [
                        { id: 5404, value: "慎重に進める", check: true },
                        { id: 5405, value: "急いで進める", check: false },
                        { id: 5406, value: "中止する", check: false },
                        { id: 5407, value: "変更しない", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 2201,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 3200,
                      special: "つまるところ、成功には努力が必要です。",
                      text: "努力はどのように行うべきですか。",
                      list: [
                        {
                          id: 4200,
                          problem: "成功に必要なものは何ですか。",
                          select: [
                            { id: 5500, value: "努力", check: true },
                            { id: 5501, value: "時間", check: false },
                            { id: 5502, value: "資金", check: false },
                            { id: 5503, value: "運", check: false }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 2202,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id: 3200,
                      special: "つまるところ、成功には努力が必要です。",
                      text: "成功には ...... が必要です。",
                      select: [
                        { id: 5600, value: "つまるところ", check: true },
                        { id: 5601, value: "おそれがある", check: false },
                        { id: 5602, value: "かねない", check: false },
                        { id: 5603, value: "かたわら", check: false }
                      ]
                    },
                    {
                      id: 3201,
                      special: "この計画には失敗のおそれがある。",
                      text: "この計画には ...... がある。",
                      select: [
                        { id: 5604, value: "おそれがある", check: true },
                        { id: 5605, value: "つまるところ", check: false },
                        { id: 5606, value: "まじき", check: false },
                        { id: 5607, value: "ずくめ", check: false }
                      ]
                    },
                    {
                      id: 3202,
                      special: "彼の行動は事故をかねない。",
                      text: "彼の行動は ......。",
                      select: [
                        { id: 5608, value: "かねない", check: true },
                        { id: 5609, value: "がてら", check: false },
                        { id: 5610, value: "いかん", check: false },
                        { id: 5611, value: "もさることながら", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 103,
          name: "Bài 4",
          progress: 0,
          time: 60,
          detail: [
            {
              id: 1000,
              describe: `
                <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 4: Kỹ năng viết và phân tích ngữ pháp N1</h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học thứ tư của lộ trình JLPT N1 tập trung vào kỹ năng viết và phân tích các cấu trúc ngữ pháp phức tạp. Học viên sẽ luyện tập viết đoạn văn sử dụng ngữ pháp N1, đồng thời học cách phân tích ngữ pháp trong các câu văn dài và văn bản học thuật.
                </p>
                <div style="background-color: #fff4eb; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #F37142;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Lưu ý quan trọng</h4>
                  <p style="line-height: 1.6;">
                    Khi viết, hãy chú ý đến cấu trúc câu và sử dụng các từ nối phù hợp. Luyện tập phân tích ngữ pháp bằng cách chia nhỏ câu dài thành các thành phần.
                  </p>
                </div>
        
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Kỹ năng viết:</strong> Viết đoạn văn sử dụng 20 cấu trúc ngữ pháp N1
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Phân tích ngữ pháp:</strong> Phân tích câu văn dài và văn bản học thuật
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Bài tập:</strong> Viết câu và phân tích ngữ pháp trong văn bản
                  </li>
                </ul>
        
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Viết đoạn văn mạch lạc sử dụng ngữ pháp N1
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Phân tích ngữ pháp trong các câu văn phức tạp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Nâng cao khả năng sử dụng từ nối trong viết
                  </li>
                </ul>
        
                <div style="text-align: center; margin: 20px 0;">
                  <img src="/team2-mankai-user/assets/image/japanese-writing.jpg" alt="Japanese writing" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <p style="color: #555; font-size: 14px; margin-top: 10px;">Hình ảnh minh họa kỹ năng viết tiếng Nhật</p>
                </div>`,
              document: [
                {
                  id: 530,
                  name: "Ngữ pháp N1 viết.pdf",
                  capacity: "500KB"
                },
                {
                  id: 531,
                  name: "Bài tập viết.docx",
                  capacity: "60KB"
                },
                {
                  id: 532,
                  name: "Video hướng dẫn.mp4",
                  capacity: "140MB"
                }
              ],
              discuss: {
                id: 630,
                listComment: [
                  {
                    id: 3300,
                    idUser: 11,
                    name: "Hòa",
                    avatar: `/team2-mankai-user/assets/image/avatar12.jpg`,
                    content: "Phần viết đoạn văn rất hữu ích, giúp tôi cải thiện cách diễn đạt!",
                    time: "6:30 15/3/2025",
                  },
                  {
                    id: 3301,
                    idUser: 12,
                    name: "Thảo",
                    avatar: `/team2-mankai-user/assets/image/avatar13.jpg`,
                    content: "Phân tích ngữ pháp hơi khó, cần thêm ví dụ đơn giản hơn.",
                    time: "7:45 16/3/2025",
                  },
                  {
                    id: 3302,
                    idUser: 13,
                    name: "Duy",
                    avatar: `/team2-mankai-user/assets/image/avatar14.jpg`,
                    content: "Cảm ơn vì các mẹo sử dụng từ nối, rất thực tế!",
                    time: "8:50 17/3/2025",
                  },
                  {
                    id: 3303,
                    idUser: 14,
                    name: "Linh",
                    avatar: `/team2-mankai-user/assets/image/avatar15.jpg`,
                    content: "Video giải thích rõ ràng, dễ hiểu.",
                    time: "9:20 18/3/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 2300,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/aIqGGK2LUR0?si=ufk-oyzqnbZgRGfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ]
            },
            {
              id: 1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary: [
                { id: 2301, word: "かぎり", meaning: "Trong phạm vi", status: false },
                { id: 2302, word: "とあって", meaning: "Do đó", status: false },
                { id: 2303, word: "およぶ", meaning: "Đạt tới", status: false },
                { id: 2304, word: "にかけて", meaning: "Trong suốt", status: false },
                { id: 2305, word: "のみならず", meaning: "Không chỉ", status: false },
                { id: 2306, word: "おそれがある", meaning: "Có nguy cơ", status: false },
                { id: 2307, word: "いかんにかかわらず", meaning: "Bất kể", status: false },
                { id: 2308, word: "むしろ", meaning: "Thay vào đó", status: false },
                { id: 2309, word: "かえって", meaning: "Ngược lại", status: false },
                { id: 2310, word: "ならでは", meaning: "Chỉ có", status: false },
                { id: 2311, word: "にいたって", meaning: "Đến mức", status: false },
                { id: 2312, word: "すら", meaning: "Thậm chí", status: false }
              ],
              test: [
                {
                  id: 2401,
                  questions: "この問題は私の知識の___難しい。",
                  answer: ["かぎり", "とあって", "およぶ", "にかけて"],
                  correctAnswer: "かぎり",
                  result: "この問題は私の知識のかぎり難しい。",
                  explain: "「かぎり」 mang nghĩa 'trong phạm vi', dùng để chỉ giới hạn của kiến thức."
                },
                {
                  id: 2402,
                  questions: "彼の努力は成功に___。",
                  answer: ["およぶ", "のみならず", "いかんにかかわらず", "むしろ"],
                  correctAnswer: "およぶ",
                  result: "彼の努力は成功におよぶ。",
                  explain: "「およぶ」 có nghĩa 'đạt tới', phù hợp với ngữ cảnh nỗ lực dẫn đến kết quả."
                },
                {
                  id: 2403,
                  questions: "天候の___、イベントは開催される。",
                  answer: ["いかんにかかわらず", "かえって", "ならでは", "すら"],
                  correctAnswer: "いかんにかかわらず",
                  result: "天候のいかんにかかわらず、イベントは開催される。",
                  explain: "「いかんにかかわらず」 mang nghĩa 'bất kể', dùng để chỉ sự bất chấp điều kiện."
                }
              ]
            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/tiengnhat03.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `
                <h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                  語彙学習: JLPT N1レベル (Kỹ năng viết và ngữ pháp: Trình độ JLPT N1)
                </h3>
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Viết đoạn văn sử dụng 20 cấu trúc ngữ pháp N1
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Phân tích ngữ pháp trong câu văn dài
                  </li>
                </ul>
        
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Các cấu trúc ngữ pháp dùng trong viết văn
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Hướng dẫn phân tích câu văn phức tạp
                  </li>
                </ul>
        
                <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                  <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Ngữ pháp N1 - Bài 4: Kỹ năng viết</h4>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">かぎり <span style="color: #F37142; font-weight: normal;">(かぎり)</span>:</strong> Trong phạm vi<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 私の知るかぎり、彼は信頼できる人です。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Trong phạm vi tôi biết, anh ấy là người đáng tin cậy.</em>
                  </p>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">のみならず <span style="color: #F37142; font-weight: normal;">(のみならず)</span>:</strong> Không chỉ<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 彼は英語のみならず日本語も話せる。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Anh ấy không chỉ nói được tiếng Anh mà còn nói được tiếng Nhật.</em>
                  </p>
                  <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                    <strong style="color: #F37142; font-size: 18px;">Mẹo học viết N1:</strong> 
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                    Luyện viết đoạn văn ngắn trước khi viết bài dài.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                    Sử dụng từ nối để làm bài viết mạch lạc.
                  </p>
                  <p style="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                  </p>
                </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 2300,
                  sentence1: "私の知るかぎり、彼は信頼できる。",
                  sentence2: "彼は",
                  answer: "信頼できる"
                },
                {
                  id: 2301,
                  sentence1: "彼は英語のみならず日本語も話せる。",
                  sentence2: "日本語は",
                  answer: "話せる"
                },
                {
                  id: 2302,
                  sentence1: "天候のいかんにかかわらず、イベントは開催される。",
                  sentence2: "イベントは",
                  answer: "開催される"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 20,
              progress: 0,
              test: [
                {
                  id: 2300,
                  name: "Nội dung đề bài",
                  question: [
                    {
                      id: 3300,
                      special: "私の知るかぎり、彼は信頼できる。",
                      text: "彼についてどう言えるか。",
                      select: [
                        { id: 5700, value: "信頼できない", check: false },
                        { id: 5701, value: "信頼できる", check: true },
                        { id: 5702, value: "不明", check: false },
                        { id: 5703, value: "普通", check: false }
                      ]
                    },
                    {
                      id: 3301,
                      special: "彼は英語のみならず日本語も話せる。",
                      text: "彼 có thể nói ngôn ngữ nào?",
                      select: [
                        { id: 5704, value: "Chỉ tiếng Anh", check: false },
                        { id: 5705, value: "Tiếng Anh và Nhật", check: true },
                        { id: 5706, value: "Chỉ tiếng Nhật", check: false },
                        { id: 5707, value: "Không ngôn ngữ nào", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 2301,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 3300,
                      special: "私の知るかぎり、彼は信頼できる。",
                      text: "彼についてどう言えるか。",
                      list: [
                        {
                          id: 4300,
                          problem: "彼の信頼性はどうか。",
                          select: [
                            { id: 5800, value: "信頼できる", check: true },
                            { id: 5801, value: "信頼できない", check: false },
                            { id: 5802, value: "不明", check: false },
                            { id: 5803, value: "普通", check: false }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 2302,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id: 3300,
                      special: "私の知るかぎり、彼は信頼できる。",
                      text: "私の知る ...... 彼は信頼できる。",
                      select: [
                        { id: 5900, value: "かぎり", check: true },
                        { id: 5901, value: "とあって", check: false },
                        { id: 5902, value: "およぶ", check: false },
                        { id: 5903, value: "にかけて", check: false }
                      ]
                    },
                    {
                      id: 3301,
                      special: "彼は英語のみならず日本語も話せる。",
                      text: "彼は英語 ...... 日本語も話せる。",
                      select: [
                        { id: 5904, value: "のみならず", check: true },
                        { id: 5905, value: "かぎり", check: false },
                        { id: 5906, value: "むしろ", check: false },
                        { id: 5907, value: "すら", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 105,
          name: "Bài 5",
          progress: 0,
          time: 65,
          detail: [
            {
              id: 1000,
              describe: `
                <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 5: Ôn tập tổng hợp và chiến lược làm bài N1</h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học thứ năm là bài ôn tập tổng hợp, giúp học viên củng cố kiến thức về từ vựng, ngữ pháp, đọc hiểu, nghe hiểu và kỹ năng viết. Đồng thời, bài học cung cấp các chiến lược làm bài hiệu quả để tối ưu hóa điểm số trong kỳ thi JLPT N1.
                </p>
                <div style="background-color: #fff4eb; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #F37142;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Lưu ý quan trọng</h4>
                  <p style="line-height: 1.6;">
                    Hãy luyện tập đề thi thử để làm quen với áp lực thời gian. Ghi nhớ các chiến lược phân bổ thời gian và ưu tiên câu hỏi dễ trước.
                  </p>
                </div>
        
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Ôn tập tổng hợp:</strong> Từ vựng, ngữ pháp, đọc và nghe N1
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Chiến lược làm bài:</strong> Phân bổ thời gian và xử lý câu hỏi khó
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Bài tập:</strong> Luyện tập đề thi thử N1
                  </li>
                </ul>
        
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Củng cố toàn bộ kiến thức N1
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Áp dụng chiến lược làm bài hiệu quả
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Tự tin làm bài thi N1
                  </li>
                </ul>
        
                <div style="text-align: center; margin: 20px 0;">
                  <img src="/team2-mankai-user/assets/image/japanese-exam.jpg" alt="Japanese exam" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <p style="color: #555; font-size: 14px; margin-top: 10px;">Hình ảnh minh họa kỳ thi JLPT</p>
                </div>`,
              document: [
                {
                  id: 540,
                  name: "Đề thi thử N1.pdf",
                  capacity: "600KB"
                },
                {
                  id: 541,
                  name: "Chiến lược làm bài.docx",
                  capacity: "70KB"
                },
                {
                  id: 542,
                  name: "Audio ôn tập.mp3",
                  capacity: "30MB"
                },
                {
                  id: 543,
                  name: "Video chiến lược.mp4",
                  capacity: "150MB"
                }
              ],
              discuss: {
                id: 640,
                listComment: [
                  {
                    id: 3400,
                    idUser: 15,
                    name: "Nam",
                    avatar: `/team2-mankai-user/assets/image/avatar16.jpg`,
                    content: "Chiến lược làm bài rất hữu ích, đặc biệt là cách phân bổ thời gian!",
                    time: "10:00 20/3/2025",
                  },
                  {
                    id: 3401,
                    idUser: 16,
                    name: "Hương",
                    avatar: `/team2-mankai-user/assets/image/avatar17.jpg`,
                    content: "Đề thi thử giống thật, giúp tôi tự tin hơn.",
                    time: "11:15 21/3/2025",
                  },
                  {
                    id: 3402,
                    idUser: 17,
                    name: "Tùng",
                    avatar: `/team2-mankai-user/assets/image/avatar18.jpg`,
                    content: "Mong có thêm đề thi thử để luyện tập!",
                    time: "12:30 22/3/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 2400,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/LBnZp8Wa-TM?si=IHFp6Z_DIAtlNygg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 2401,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/pnSDVT3ETfg?si=SLgBfePm_4D0Fot5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ]
            },
            {
              id: 1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary: [
                { id: 2401, word: "にひきかえ", meaning: "Ngược lại", status: false },
                { id: 2402, word: "をめぐって", meaning: "Liên quan đến", status: false },
                { id: 2403, word: "にこたえて", meaning: "Đáp ứng", status: false },
                { id: 2404, word: "をふまえて", meaning: "Dựa trên", status: false },
                { id: 2405, word: "にかんして", meaning: "Về việc", status: false },
                { id: 2406, word: "をものともせず", meaning: "Không quan tâm", status: false },
                { id: 2407, word: "にたいして", meaning: "Đối với", status: false },
                { id: 2408, word: "にいたる", meaning: "Dẫn đến", status: false }
              ],
              test: [
                {
                  id: 2501,
                  questions: "彼の意見は私の考えと___異なる。",
                  answer: ["にひきかえ", "をめぐって", "にこたえて", "をふまえて"],
                  correctAnswer: "にひきかえ",
                  result: "彼の意見は私の考えとにひきかえ異なる。",
                  explain: "「にひきかえ」 mang nghĩa 'ngược lại', dùng để so sánh hai ý kiến trái ngược."
                },
                {
                  id: 2502,
                  questions: "この問題を___議論が続いている。",
                  answer: ["をめぐって", "にかんして", "をものともせず", "にいたる"],
                  correctAnswer: "をめぐって",
                  result: "この問題ををめぐって議論が続いている。",
                  explain: "「をめぐって」 có nghĩa 'liên quan đến', phù hợp với ngữ cảnh thảo luận."
                }
              ]
            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/tiengnhat04.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `
                <h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                  語彙学習: JLPT N1レベル (Ôn tập tổng hợp: Trình độ JLPT N1)
                </h3>
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Củng cố kiến thức từ vựng, ngữ pháp, nghe, đọc N1
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Nắm vững chiến lược làm bài thi
                  </li>
                </ul>
        
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Ôn tập các chủ đề chính của N1
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Hướng dẫn chiến lược làm bài hiệu quả
                  </li>
                </ul>
        
                <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                  <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Từ vựng N1 - Bài 5: Ôn tập</h4>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">にひきかえ <span style="color: #F37142; font-weight: normal;">(にひきかえ)</span>:</strong> Ngược lại<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 彼の意見は私の考えとにひきかえ異なる。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Ý kiến của anh ấy trái ngược với suy nghĩ của tôi.</em>
                  </p>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">をめぐって <span style="color: #F37142; font-weight: normal;">(をめぐって)</span>:</strong> Liên quan đến<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: この問題をめぐって議論が続いている。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Cuộc thảo luận về vấn đề này vẫn đang tiếp diễn.</em>
                  </p>
                  <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                    <strong style="color: #F37142; font-size: 18px;">Mẹo làm bài thi N1:</strong> 
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                    Làm câu dễ trước, để dành câu khó sau.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                    Phân bổ thời gian hợp lý cho từng phần thi.
                  </p>
                  <p style="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                  </p>
                </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 2400,
                  sentence1: "彼の意見は私の考えとにひきかえ異なる。",
                  sentence2: "Ý kiến là",
                  answer: "Trái ngược"
                },
                {
                  id: 2401,
                  sentence1: "この問題をめぐって議論が続いている。",
                  sentence2: "Thảo luận là",
                  answer: "Tiếp diễn"
                },
                {
                  id: 2402,
                  sentence1: "要望にこたえて、製品を改良した。",
                  sentence2: "Sản phẩm là",
                  answer: "Cải tiến"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 25,
              progress: 0,
              test: [
                {
                  id: 2400,
                  name: "Nội dung đề bài",
                  question: [
                    {
                      id: 3400,
                      special: "彼の意見は私の考えとにひきかえ異なる。",
                      text: "Ý kiến của anh ấy như thế nào?",
                      select: [
                        { id: 6000, value: "Giống nhau", check: false },
                        { id: 6001, value: "Trái ngược", check: true },
                        { id: 6002, value: "Không rõ", check: false },
                        { id: 6003, value: "Tương tự", check: false }
                      ]
                    },
                    {
                      id: 3401,
                      special: "この問題をめぐって議論が続いている。",
                      text: "Thảo luận về vấn đề này ra sao?",
                      select: [
                        { id: 6004, value: "Đã kết thúc", check: false },
                        { id: 6005, value: "Tiếp diễn", check: true },
                        { id: 6006, value: "Chưa bắt đầu", check: false },
                        { id: 6007, value: "Bị hủy", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 2401,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 3400,
                      special: "彼の意見は私の考えとにひきかえ異なる。",
                      text: "Ý kiến của anh ấy như thế nào?",
                      list: [
                        {
                          id: 4400,
                          problem: "Ý kiến của anh ấy so với tôi thế nào?",
                          select: [
                            { id: 6100, value: "Trái ngược", check: true },
                            { id: 6101, value: "Giống nhau", check: false },
                            { id: 6102, value: "Không rõ", check: false },
                            { id: 6103, value: "Tương tự", check: false }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 2402,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id: 3400,
                      special: "彼の意見は私の考えとにひきかえ異なる。",
                      text: "彼の意見は私の考えと ...... 異なる。",
                      select: [
                        { id: 6200, value: "にひきかえ", check: true },
                        { id: 6201, value: "をめぐって", check: false },
                        { id: 6202, value: "にこたえて", check: false },
                        { id: 6203, value: "をふまえて", check: false }
                      ]
                    },
                    {
                      id: 3401,
                      special: "この問題をめぐって議論が続いている。",
                      text: "この問題 ...... 議論が続いている。",
                      select: [
                        { id: 6204, value: "をめぐって", check: true },
                        { id: 6205, value: "にひきかえ", check: false },
                        { id: 6206, value: "にかんして", check: false },
                        { id: 6207, value: "にいたる", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 12,
      name: "Tiếng Nhật Sơ Cấp",
      image: "/team2-mankai-user/assets/image/image-course.png",
      progress: 0,
      lessons: [
        {
          id: 100,
          name: "Hiragana",
          progress: 0,
          detail: [
            {
              id: 500,
              name: "Bảng chữ cái",
              status: false,
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
              status: false,
              vocabulary: [
                { id: 1002, name: "が", text: "ga - biến âm của か (ka)" },
                { id: 1003, name: "ざ", text: "za - biến âm của さ (sa)" },
                { id: 1004, name: "ば", text: "ba - biến âm của は (ha)" }
              ]
            },
            {
              id: 502,
              name: "Âm ghép",
              status: false,
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
              status: false,
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
              status: false,
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
          progress: 0,
          detail: [
            {
              id: 505,
              name: "Bảng chữ cái",
              status: false,
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
              status: false,
              vocabulary: [
                { id: 1034, name: "ガ", text: "ga - biến âm của カ (ka)" },
                { id: 1035, name: "ザ", text: "za - biến âm của サ (sa)" },
                { id: 1036, name: "バ", text: "ba - biến âm của ハ (ha)" }
              ]
            },
            {
              id: 507,
              name: "Âm ghép",
              status: false,
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
              status: false,
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
              status: false,
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
          status: false,
          percent: 0,
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
        },
        {
          id: 103,
          name: "Kiểm tra cuối bài",
          exp: 3,
          status: false,
          detail: [
            {
              id: 501,
              name: "Nghe và trả lời câu hỏi",
              audio: "/team2-mankai-user/assets/icons/volume-exam.png",
              text: null,
              status: false,
              select: [
                {
                  id: 1003,
                  name: "おはよう",
                  check: true
                },
                {
                  id: 1004,
                  name: "こんにちは",
                  check: false
                },
                {
                  id: 1005,
                  name: "おやすみ",
                  check: false
                }
              ]
            },
            {
              id: 502,
              name: "Chọn đáp án đúng",
              audio: null,
              text: "こん",
              status: false,
              select: [
                {
                  id: 1006,
                  name: "あつい",
                  check: false
                },
                {
                  id: 1007,
                  name: "さむい",
                  check: true
                },
                {
                  id: 1008,
                  name: "あめ",
                  check: false
                }
              ]
            },
            {
              id: 503,
              name: "Nghe và trả lời câu hỏi",
              audio: "/team2-mankai-user/assets/icons/volume-exam.png",
              text: null,
              status: false,
              select: [
                {
                  id: 1009,
                  name: "せんせい",
                  check: true
                },
                {
                  id: 1010,
                  name: "いしゃ",
                  check: false
                },
                {
                  id: 1011,
                  name: "エンジニア",
                  check: false
                },
                {
                  id: 1012,
                  name: "がくせい",
                  check: false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 13,
      name: "Tiếng Nhật N2",
      image: "/team2-mankai-user/assets/image/image-course.png",
      progress: 0,
      lessons: [
        {
          id: 200,
          name: "Bài 1",
          progress: 0,
          time: 45,
          detail: [
            {
              id: 1000,
              describe: `
                <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 1: Từ vựng và Kanji N2</h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học đầu tiên của lộ trình JLPT N2 tập trung vào từ vựng và kanji thường gặp trong các tình huống giao tiếp hàng ngày, văn bản công việc và bài thi N2. Học viên sẽ nắm được cách sử dụng từ vựng và kanji trong ngữ cảnh thực tế.
                </p>
                <div style="background-color: #fff4eb; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #F37142;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Lưu ý quan trọng</h4>
                  <p style="line-height: 1.6;">
                    Hãy luyện tập viết kanji hàng ngày và sử dụng từ vựng trong câu để ghi nhớ lâu hơn.
                  </p>
                </div>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Từ vựng N2:</strong> 40 từ vựng thường gặp trong giao tiếp và bài thi
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Kanji N2:</strong> 20 kanji và cách ghép từ
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Luyện tập:</strong> Bài tập áp dụng từ vựng và kanji
                  </li>
                </ul>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Sử dụng từ vựng N2 trong giao tiếp hàng ngày
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Nhận diện và viết được kanji N2
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Áp dụng từ vựng và kanji trong bài thi
                  </li>
                </ul>
    
                <div style="text-align: center; margin: 20px 0;">
                  <img src="/team2-mankai-user/assets/image/japanese-kanji.jpg" alt="Japanese kanji" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <p style="color: #555; font-size: 14px; margin-top: 10px;">Hình ảnh minh họa kanji Nhật Bản</p>
                </div>`,
              document: [
                {
                  id: 550,
                  name: "Từ vựng N2.pdf",
                  capacity: "350KB"
                },
                {
                  id: 551,
                  name: "Bài tập kanji.docx",
                  capacity: "45KB"
                },
                {
                  id: 552,
                  name: "Video hướng dẫn.mp4",
                  capacity: "110MB"
                }
              ],
              discuss: {
                id: 650,
                listComment: [
                  {
                    id: 3500,
                    idUser: 18,
                    name: "Bình",
                    avatar: `/team2-mankai-user/assets/image/avatar19.jpg`,
                    content: "Từ vựng được giải thích rất dễ hiểu, cảm ơn!",
                    time: "8:00 25/3/2025",
                  },
                  {
                    id: 3501,
                    idUser: 19,
                    name: "Mai",
                    avatar: `/team2-mankai-user/assets/image/avatar20.jpg`,
                    content: "Kanji hơi khó nhớ, mong có thêm bài tập.",
                    time: "9:30 26/3/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 2500,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/FjSq8OxPRIQ?si=N1s-LLP4D0lnXGnv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ]
            },
            {
              id: 1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary: [
                { id: 2501, word: "場合", meaning: "Trường hợp", status: false },
                { id: 2502, word: "影響", meaning: "Ảnh hưởng", status: false },
                { id: 2503, word: "機会", meaning: "Cơ hội", status: false },
                { id: 2504, word: "制限", meaning: "Hạn chế", status: false },
                { id: 2505, word: "準備", meaning: "Chuẩn bị", status: false },
                { id: 2506, word: "意見", meaning: "Ý kiến", status: false },
                { id: 2507, word: "環境", meaning: "Môi trường", status: false },
                { id: 2508, word: "目標", meaning: "Mục tiêu", status: false },
                { id: 2509, word: "状況", meaning: "Tình huống", status: false },
                { id: 2510, word: "解決", meaning: "Giải quyết", status: false }
              ],
              test: [
                {
                  id: 2601,
                  questions: "この___、どうすればいいですか。",
                  answer: ["場合", "影響", "機会", "制限"],
                  correctAnswer: "場合",
                  result: "この場合、どうすればいいですか。",
                  explain: "「場合」 mang nghĩa 'trường hợp', dùng để chỉ một tình huống cụ thể."
                },
                {
                  id: 2602,
                  questions: "彼の提案はプロジェクトに大きな___を与えた。",
                  answer: ["影響", "準備", "意見", "環境"],
                  correctAnswer: "影響",
                  result: "彼の提案はプロジェクトに大きな影響を与えた。",
                  explain: "「影響」 có nghĩa 'ảnh hưởng', phù hợp với ngữ cảnh tác động đến dự án."
                }
              ]
            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/tiengnhat05.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `
                <h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                  語彙学習: JLPT N2レベル (Từ vựng: Trình độ JLPT N2)
                </h3>
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Nắm vững 40 từ vựng N2 thường gặp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Sử dụng từ vựng trong giao tiếp và bài thi
                  </li>
                </ul>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Từ vựng N2 trong các tình huống thực tế
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Ví dụ và bài tập ứng dụng
                  </li>
                </ul>
    
                <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                  <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Từ vựng N2 - Bài 1: Giao tiếp và công việc</h4>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">場合 <span style="color: #F37142; font-weight: normal;">(ばあい)</span>:</strong> Trường hợp<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: この場合、どうすればいいですか。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Trong trường hợp này, tôi nên làm gì?</em>
                  </p>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">影響 <span style="color: #F37142; font-weight: normal;">(えいきょう)</span>:</strong> Ảnh hưởng<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 彼の提案はプロジェクトに大きな影響を与えた。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Đề xuất của anh ấy đã có ảnh hưởng lớn đến dự án.</em>
                  </p>
                  <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                    <strong style="color: #F37142; font-size: 18px;">Mẹo học từ vựng N2:</strong> 
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                    Tạo flashcard với ví dụ câu để ghi nhớ ngữ cảnh.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                    Học từ vựng theo nhóm chủ đề (giao tiếp, công việc).
                  </p>
                  <p style="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                  </p>
                </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 2500,
                  sentence1: "この場合、どうすればいいですか。",
                  sentence2: "Hành động là",
                  answer: "Hỏi ý kiến"
                },
                {
                  id: 2501,
                  sentence1: "彼の提案はプロジェクトに大きな影響を与えた。",
                  sentence2: "Dự án là",
                  answer: "Thay đổi"
                },
                {
                  id: 2502,
                  sentence1: "この機会を利用して、スキルを磨きたい。",
                  sentence2: "Kỹ năng là",
                  answer: "Cải thiện"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 15,
              progress: 0,
              test: [
                {
                  id: 2500,
                  name: "Nội dung đề bài",
                  question: [
                    {
                      id: 3500,
                      special: "この場合、どうすればいいですか。",
                      text: "Trong trường hợp này, bạn nên làm gì?",
                      select: [
                        { id: 6300, value: "Hỏi ý kiến", check: true },
                        { id: 6301, value: "Bỏ qua", check: false },
                        { id: 6302, value: "Chờ đợi", check: false },
                        { id: 6303, value: "Hành động ngay", check: false }
                      ]
                    },
                    {
                      id: 3501,
                      special: "彼の提案はプロジェクトに大きな影響を与えた。",
                      text: "Đề xuất của anh ấy ảnh hưởng thế nào đến dự án?",
                      select: [
                        { id: 6304, value: "Không ảnh hưởng", check: false },
                        { id: 6305, value: "Ảnh hưởng lớn", check: true },
                        { id: 6306, value: "Ảnh hưởng nhỏ", check: false },
                        { id: 6307, value: "Hủy dự án", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 2501,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 3500,
                      special: "この場合、どうすればいいですか。",
                      text: "Trong trường hợp này, bạn nên làm gì?",
                      list: [
                        {
                          id: 4500,
                          problem: "Hành động phù hợp là gì?",
                          select: [
                            { id: 6400, value: "Hỏi ý kiến", check: true },
                            { id: 6401, value: "Bỏ qua", check: false },
                            { id: 6402, value: "Chờ đợi", check: false },
                            { id: 6403, value: "Hành động ngay", check: false }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 2502,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id: 3500,
                      special: "この場合、どうすればいいですか。",
                      text: "この......、どうすればいいですか。",
                      select: [
                        { id: 6500, value: "場合", check: true },
                        { id: 6501, value: "影響", check: false },
                        { id: 6502, value: "機会", check: false },
                        { id: 6503, value: "制限", check: false }
                      ]
                    },
                    {
                      id: 3501,
                      special: "彼の提案はプロジェクトに大きな影響を与えた。",
                      text: "彼の提案はプロジェクトに大きな......を与えた。",
                      select: [
                        { id: 6504, value: "影響", check: true },
                        { id: 6505, value: "準備", check: false },
                        { id: 6506, value: "意見", check: false },
                        { id: 6507, value: "環境", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 2503,
                  name: "Bài kiểm tra ghép câu",
                  question: [
                    {
                      id: 4500,
                      pairs: [
                        { left: "この場合", right: "どうすればいい" },
                        { left: "彼の提案", right: "影響を与えた" },
                        { left: "この機会", right: "スキルを磨く" },
                        { left: "環境を", right: "守る必要がある" },
                        { left: "目標を", right: "達成する" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 201,
          name: "Bài 2",
          progress: 0,
          time: 50,
          detail: [
            {
              id: 1000,
              describe: `
                <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 2: Ngữ pháp và đọc hiểu N2</h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học thứ hai của lộ trình JLPT N2 tập trung vào các cấu trúc ngữ pháp N2 và kỹ năng đọc hiểu các văn bản trung cấp. Học viên sẽ học cách sử dụng ngữ pháp trong các tình huống thực tế và phân tích các đoạn văn từ báo, tạp chí, hoặc thông báo.
                </p>
                <div style="background-color: #fff4eb; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #F37142;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Lưu ý quan trọng</h4>
                  <p style="line-height: 1.6;">
                    Hãy luyện viết câu sử dụng các cấu trúc ngữ pháp mới và đọc các bài báo ngắn để làm quen với ngữ cảnh.
                  </p>
                </div>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Ngữ pháp N2:</strong> 20 cấu trúc ngữ pháp thường gặp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Đọc hiểu:</strong> Phân tích văn bản từ báo và thông báo
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Bài tập:</strong> Viết câu và trả lời câu hỏi đọc hiểu
                  </li>
                </ul>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Sử dụng ngữ pháp N2 trong văn viết và giao tiếp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Hiểu và trả lời câu hỏi từ văn bản trung cấp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Nâng cao kỹ năng quản lý thời gian khi làm bài
                  </li>
                </ul>
    
                <div style="text-align: center; margin: 20px 0;">
                  <img src="/team2-mankai-user/assets/image/japanese-reading.jpg" alt="Japanese reading" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <p style="color: #555; font-size: 14px; margin-top: 10px;">Hình ảnh minh họa đọc hiểu tiếng Nhật</p>
                </div>`,
              document: [
                {
                  id: 560,
                  name: "Ngữ pháp N2.pdf",
                  capacity: "400KB"
                },
                {
                  id: 561,
                  name: "Bài đọc hiểu.docx",
                  capacity: "50KB"
                }
              ],
              discuss: {
                id: 660,
                listComment: [
                  {
                    id: 3600,
                    idUser: 20,
                    name: "Hùng",
                    avatar: `/team2-mankai-user/assets/image/avatar21.jpg`,
                    content: "Ngữ pháp được giải thích rõ ràng, rất dễ áp dụng!",
                    time: "10:00 28/3/2025",
                  },
                  {
                    id: 3601,
                    idUser: 21,
                    name: "Lan",
                    avatar: `/team2-mankai-user/assets/image/avatar22.jpg`,
                    content: "Bài đọc hiểu hơi dài, cần thêm hướng dẫn chi tiết.",
                    time: "11:20 29/3/2025",
                  },
                  {
                    id: 3602,
                    idUser: 22,
                    name: "Phong",
                    avatar: `/team2-mankai-user/assets/image/avatar23.jpg`,
                    content: "Cảm ơn vì các bài tập thực tế, rất hữu ích!",
                    time: "12:40 30/3/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 2600,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/fP07c2OAo3U?si=CkRaQGnWtKvD9K4e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 2601,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/e_2zh_cLpVo?si=OVL3FfKRSx0Z6yoR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ]
            },
            {
              id: 1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary: [
                { id: 2601, word: "ながら", meaning: "Trong khi", status: false },
                { id: 2602, word: "つつ", meaning: "Trong khi", status: false },
                { id: 2603, word: "ばかり", meaning: "Chỉ", status: false },
                { id: 2604, word: "さえ", meaning: "Thậm chí", status: false },
                { id: 2605, word: "限り", meaning: "Miễn là", status: false },
                { id: 2606, word: "ように", meaning: "Để", status: false },
                { id: 2607, word: "つもり", meaning: "Dự định", status: false },
                { id: 2608, word: "らしい", meaning: "Hình như", status: false },
                { id: 2609, word: "わけ", meaning: "Lý do", status: false },
                { id: 2610, word: "べき", meaning: "Nên", status: false },
                { id: 2611, word: "ところ", meaning: "Đang", status: false },
                { id: 2612, word: "てしまう", meaning: "Hoàn thành", status: false }
              ],
              test: [
                {
                  id: 2701,
                  questions: "音楽を聞き___勉強します。",
                  answer: ["ながら", "つつ", "ばかり", "さえ"],
                  correctAnswer: "ながら",
                  result: "音楽を聞きながら勉強します。",
                  explain: "「ながら」 mang nghĩa 'trong khi', dùng để chỉ hai hành động diễn ra đồng thời."
                },
                {
                  id: 2702,
                  questions: "一生懸命働いた___、成果を上げました。",
                  answer: ["限り", "ように", "つもり", "わけ"],
                  correctAnswer: "わけ",
                  result: "一生懸命働いたわけ、成果を上げました。",
                  explain: "「わけ」 có nghĩa 'lý do', dùng để giải thích nguyên nhân dẫn đến kết quả."
                },
                {
                  id: 2703,
                  questions: "毎日運動する___健康を保つ。",
                  answer: ["ように", "べき", "ところ", "てしまう"],
                  correctAnswer: "ように",
                  result: "毎日運動するように健康を保つ。",
                  explain: "「ように」 mang nghĩa 'để', dùng để chỉ mục đích của hành động."
                }
              ]
            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/tiengnhat06.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `
                <h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                  語彙学習: JLPT N2レベル (Ngữ pháp: Trình độ JLPT N2)
                </h3>
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Nắm vững 20 cấu trúc ngữ pháp N2
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Sử dụng ngữ pháp trong văn viết và giao tiếp
                  </li>
                </ul>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Các cấu trúc ngữ pháp N2 thường gặp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Ví dụ và bài tập thực hành
                  </li>
                </ul>
    
                <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                  <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Ngữ pháp N2 - Bài 2: Cấu trúc giao tiếp</h4>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">ながら <span style="color: #F37142; font-weight: normal;">(ながら)</span>:</strong> Trong khi<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 音楽を聞きながら勉強します。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Tôi học trong khi nghe nhạc.</em>
                  </p>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">ように <span style="color: #F37142; font-weight: normal;">(ように)</span>:</strong> Để<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 毎日運動するように健康を保つ。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Tôi tập thể dục hàng ngày để giữ sức khỏe.</em>
                  </p>
                  <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                    <strong style="color: #F37142; font-size: 18px;">Mẹo học ngữ pháp N2:</strong> 
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                    Viết câu ví dụ để hiểu cách dùng ngữ pháp.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                    Đọc các bài báo ngắn để nhận diện ngữ pháp.
                  </p>
                  <p style="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                  </p>
                </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 2600,
                  sentence1: "音楽を聞きながら勉強します。",
                  sentence2: "Học là",
                  answer: "Nghe nhạc"
                },
                {
                  id: 2601,
                  sentence1: "毎日運動するように健康を保つ。",
                  sentence2: "Sức khỏe là",
                  answer: "Giữ gìn"
                },
                {
                  id: 2602,
                  sentence1: "この仕事は私には難しすぎるばかりだ。",
                  sentence2: "Công việc là",
                  answer: "Quá khó"
                },
                {
                  id: 2603,
                  sentence1: "明日までにレポートを終わらせるつもりです。",
                  sentence2: "Báo cáo là",
                  answer: "Hoàn thành"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 18,
              progress: 0,
              test: [
                {
                  id: 2600,
                  name: "Nội dung đề bài",
                  question: [
                    {
                      id: 3600,
                      special: "音楽を聞きながら勉強します。",
                      text: "Học như thế nào?",
                      select: [
                        { id: 6600, value: "Nghe nhạc", check: true },
                        { id: 6601, value: "Không nghe nhạc", check: false },
                        { id: 6602, value: "Chỉ đọc sách", check: false },
                        { id: 6603, value: "Ngủ", check: false }
                      ]
                    },
                    {
                      id: 3601,
                      special: "毎日運動するように健康を保つ。",
                      text: "Mục đích của tập thể dục là gì?",
                      select: [
                        { id: 6604, value: "Giảm cân", check: false },
                        { id: 6605, value: "Giữ sức khỏe", check: true },
                        { id: 6606, value: "Giải trí", check: false },
                        { id: 6607, value: "Gặp bạn", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 2601,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 3600,
                      special: "音楽を聞きながら勉強します。",
                      text: "Học như thế nào?",
                      list: [
                        {
                          id: 4600,
                          problem: "Cách học là gì?",
                          select: [
                            { id: 6700, value: "Nghe nhạc", check: true },
                            { id: 6701, value: "Không nghe nhạc", check: false },
                            { id: 6702, value: "Chỉ đọc sách", check: false },
                            { id: 6703, value: "Ngủ", check: false }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 2602,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id: 3600,
                      special: "音楽を聞きながら勉強します。",
                      text: "音楽を聞き......勉強します。",
                      select: [
                        { id: 6800, value: "ながら", check: true },
                        { id: 6801, value: "つつ", check: false },
                        { id: 6802, value: "ばかり", check: false },
                        { id: 6803, value: "さえ", check: false }
                      ]
                    },
                    {
                      id: 3601,
                      special: "毎日運動するように健康を保つ。",
                      text: "毎日運動する......健康を保つ。",
                      select: [
                        { id: 6804, value: "ように", check: true },
                        { id: 6805, value: "べき", check: false },
                        { id: 6806, value: "ところ", check: false },
                        { id: 6807, value: "てしまう", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 2603,
                  name: "Bài kiểm tra ghép câu",
                  question: [
                    {
                      id: 4600,
                      pairs: [
                        { left: "音楽を聞き", right: "勉強します" },
                        { left: "毎日運動", right: "健康を保つ" },
                        { left: "この仕事", right: "難しすぎる" },
                        { left: "レポートを", right: "終わらせる" },
                        { left: "一生懸命", right: "成果を上げた" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 202,
          name: "Bài 3",
          progress: 0,
          time: 55,
          detail: [
            {
              id: 1000,
              describe: `
                <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 3: Nghe hiểu và ôn tập N2</h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học thứ ba của lộ trình JLPT N2 tập trung vào kỹ năng nghe hiểu và ôn tập các kiến thức đã học. Học viên sẽ luyện tập các dạng bài nghe N2 như hội thoại, thông báo, và bài phát biểu ngắn, đồng thời củng cố từ vựng và ngữ pháp.
                </p>
                <div style="background-color: #fff4eb; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #F37142;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Lưu ý quan trọng</h4>
                  <p style="line-height: 1.6;">
                    Hãy luyện nghe hàng ngày và ghi chú các từ khóa để trả lời câu hỏi chính xác hơn.
                  </p>
                </div>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Nghe hiểu:</strong> Luyện tập các dạng bài nghe N2
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Ôn tập:</strong> Củng cố từ vựng và ngữ pháp N2
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Bài tập:</strong> Trả lời câu hỏi nghe và bài kiểm tra tổng hợp
                  </li>
                </ul>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Nắm bắt nội dung chính của bài nghe N2
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Củng cố kiến thức từ vựng và ngữ pháp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Tự tin làm bài thi N2
                  </li>
                </ul>
    
                <div style="text-align: center; margin: 20px 0;">
                  <img src="/team2-mankai-user/assets/image/japanese-listening.jpg" alt="Japanese listening" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <p style="color: #555; font-size: 14px; margin-top: 10px;">Hình ảnh minh họa nghe hiểu tiếng Nhật</p>
                </div>`,
              document: [
                {
                  id: 570,
                  name: "Nghe hiểu N2.mp3",
                  capacity: "20MB"
                },
                {
                  id: 571,
                  name: "Ôn tập N2.pdf",
                  capacity: "420KB"
                },
                {
                  id: 572,
                  name: "Câu hỏi nghe.docx",
                  capacity: "55KB"
                }
              ],
              discuss: {
                id: 670,
                listComment: [
                  {
                    id: 3700,
                    idUser: 23,
                    name: "Thắng",
                    avatar: `/team2-mankai-user/assets/image/avatar24.jpg`,
                    content: "Bài nghe rất giống đề thi thật, giúp tôi luyện tập tốt!",
                    time: "7:00 1/4/2025",
                  },
                  {
                    id: 3701,
                    idUser: 24,
                    name: "Ngân",
                    avatar: `/team2-mankai-user/assets/image/avatar25.jpg`,
                    content: "Ôn tập tổng hợp rất hữu ích, cảm ơn!",
                    time: "8:15 2/4/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 2700,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/C_63V2xIMpI?si=OCSEvFrQkmtBgVMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ]
            },
            {
              id: 1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary: [
                { id: 2701, word: "を通じて", meaning: "Thông qua", status: false },
                { id: 2702, word: "によって", meaning: "Bởi", status: false },
                { id: 2703, word: "に対して", meaning: "Đối với", status: false },
                { id: 2704, word: "に関して", meaning: "Về", status: false },
                { id: 2705, word: "に応じて", meaning: "Tùy theo", status: false },
                { id: 2706, word: "に基づいて", meaning: "Dựa trên", status: false },
                { id: 2707, word: "に比べて", meaning: "So với", status: false },
                { id: 2708, word: "にとって", meaning: "Đối với", status: false }
              ],
              test: [
                {
                  id: 2801,
                  questions: "この情報はインターネット___入手しました。",
                  answer: ["を通じて", "によって", "に対して", "に関して"],
                  correctAnswer: "を通じて",
                  result: "この情報はインターネットを通じて入手しました。",
                  explain: "「を通じて」 mang nghĩa 'thông qua', dùng để chỉ phương tiện thu thập thông tin."
                },
                {
                  id: 2802,
                  questions: "彼の意見___、計画を変更した。",
                  answer: ["に基づいて", "に比べて", "にとって", "に応じて"],
                  correctAnswer: "に基づいて",
                  result: "彼の意見に基づいて、計画を変更した。",
                  explain: "「に基づいて」 có nghĩa 'dựa trên', phù hợp với ngữ cảnh thay đổi kế hoạch."
                }
              ]
            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/tiengnhat07.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `
                <h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                  語彙学習: JLPT N2レベル (Nghe hiểu và ôn tập: Trình độ JLPT N2)
                </h3>
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Nắm bắt nội dung bài nghe N2
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Củng cố từ vựng và ngữ pháp
                  </li>
                </ul>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Các dạng bài nghe N2
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Ôn tập kiến thức tổng hợp
                  </li>
                </ul>
    
                <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                  <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Ngữ pháp N2 - Bài 3: Nghe hiểu</h4>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">を通じて <span style="color: #F37142; font-weight: normal;">(をつうじて)</span>:</strong> Thông qua<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: この情報はインターネットを通じて入手しました。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Thông tin này được thu thập thông qua internet.</em>
                  </p>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">に基づいて <span style="color: #F37142; font-weight: normal;">(にもとづいて)</span>:</strong> Dựa trên<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 彼の意見に基づいて、計画を変更した。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Dựa trên ý kiến của anh ấy, chúng tôi đã thay đổi kế hoạch.</em>
                  </p>
                  <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                    <strong style="color: #F37142; font-size: 18px;">Mẹo học nghe hiểu N2:</strong> 
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                    Nghe các đoạn hội thoại ngắn trước khi nghe bài dài.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                    Ghi chú từ khóa để trả lời câu hỏi.
                  </p>
                  <p style="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                  </p>
                </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 2700,
                  sentence1: "この情報はインターネットを通じて入手しました。",
                  sentence2: "Thông tin là",
                  answer: "Thu thập"
                },
                {
                  id: 2701,
                  sentence1: "彼の意見に基づいて、計画を変更した。",
                  sentence2: "Kế hoạch là",
                  answer: "Thay đổi"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 20,
              progress: 0,
              test: [
                {
                  id: 2700,
                  name: "Nội dung đề bài",
                  question: [
                    {
                      id: 3700,
                      special: "この情報はインターネットを通じて入手しました。",
                      text: "Thông tin được thu thập như thế nào?",
                      select: [
                        { id: 6900, value: "Thông qua internet", check: true },
                        { id: 6901, value: "Từ sách", check: false },
                        { id: 6902, value: "Từ bạn bè", check: false },
                        { id: 6903, value: "Không rõ", check: false }
                      ]
                    },
                    {
                      id: 3701,
                      special: "彼の意見に基づいて、計画を変更した。",
                      text: "Kế hoạch thay đổi dựa trên gì?",
                      select: [
                        { id: 6904, value: "Ý kiến của anh ấy", check: true },
                        { id: 6905, value: "Thời gian", check: false },
                        { id: 6906, value: "Ngân sách", check: false },
                        { id: 6907, value: "Không thay đổi", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 2701,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 3700,
                      special: "この情報はインターネットを通じて入手しました。",
                      text: "Thông tin được thu thập như thế nào?",
                      list: [
                        {
                          id: 4700,
                          problem: "Phương tiện thu thập thông tin là gì?",
                          select: [
                            { id: 7000, value: "Thông qua internet", check: true },
                            { id: 7001, value: "Từ sách", check: false },
                            { id: 7002, value: "Từ bạn bè", check: false },
                            { id: 7003, value: "Không rõ", check: false }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 2702,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id: 3700,
                      special: "この情報はインターネットを通じて入手しました。",
                      text: "この情報はインターネット......入手しました。",
                      select: [
                        { id: 7100, value: "を通じて", check: true },
                        { id: 7101, value: "によって", check: false },
                        { id: 7102, value: "に対して", check: false },
                        { id: 7103, value: "に関して", check: false }
                      ]
                    },
                    {
                      id: 3701,
                      special: "彼の意見に基づいて、計画を変更した。",
                      text: "彼の意見......、計画を変更した。",
                      select: [
                        { id: 7104, value: "に基づいて", check: true },
                        { id: 7105, value: "に比べて", check: false },
                        { id: 7106, value: "にとって", check: false },
                        { id: 7107, value: "に応じて", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 2703,
                  name: "Bài kiểm tra ghép câu",
                  question: [
                    {
                      id: 4700,
                      pairs: [
                        { left: "インターネットを", right: "情報入手" },
                        { left: "彼の意見", right: "計画変更" },
                        { left: "この問題", right: "議論続く" },
                        { left: "環境に", right: "配慮する" },
                        { left: "目標に", right: "向かって進む" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 14,
      name: "Tiếng Nhật N3",
      image: "/team2-mankai-user/assets/image/image-course.png",
      progress: 0,
      lessons: [
        {
          id: 300,
          name: "Bài 1",
          progress: 0,
          time: 40,
          detail: [
            {
              id: 1000,
              describe: `
                <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 1: Từ vựng và Kanji cơ bản N3</h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học đầu tiên của lộ trình JLPT N3 tập trung vào từ vựng và kanji cơ bản, thường xuất hiện trong các tình huống giao tiếp hàng ngày như mua sắm, đi lại, và công việc. Học viên sẽ học cách sử dụng từ vựng và kanji trong các ngữ cảnh thực tế, đồng thời làm quen với các bài tập luyện tập để chuẩn bị cho kỳ thi N3.
                </p>
                <div style="background-color: #fff4eb; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #F37142;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Lưu ý quan trọng</h4>
                  <p style="line-height: 1.6;">
                    Để ghi nhớ từ vựng và kanji, hãy luyện tập viết mỗi ngày và áp dụng chúng vào các câu giao tiếp đơn giản. Đừng quên ôn lại thường xuyên!
                  </p>
                </div>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Từ vựng N3:</strong> 50 từ vựng cơ bản liên quan đến giao tiếp và công việc
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Kanji N3:</strong> 30 kanji thường gặp và cách ghép từ
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Luyện tập:</strong> Bài tập ứng dụng từ vựng và kanji vào giao tiếp
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ví dụ tình huống thực tế</h4>
                  <p style="line-height: 1.6;">
                    Khi đi mua sắm, bạn có thể sử dụng từ vựng như 「商品」 (hàng hóa) hoặc 「割引」 (giảm giá). Trong công việc, các từ như 「会議」 (cuộc họp) hoặc 「予定」 (kế hoạch) rất quan trọng. Hãy luyện tập sử dụng chúng trong các câu đơn giản!
                  </p>
                </div>
    
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                  <thead>
                    <tr style="background-color: #F37142; color: white;">
                      <th style="padding: 10px; border: 1px solid #ddd;">Chủ đề</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Số từ vựng</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Ví dụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Giao tiếp hàng ngày</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">20</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「お願いします」 (Xin làm ơn)</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Công việc</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">15</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「報告」 (Báo cáo)</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Mua sắm</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">15</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「商品」 (Hàng hóa)</td>
                    </tr>
                  </tbody>
                </table>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Sử dụng từ vựng N3 trong các tình huống giao tiếp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Nhận diện và viết đúng kanji N3
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Tự tin làm bài thi phần từ vựng và kanji
                  </li>
                </ul>
    
                <div style="text-align: center; margin: 20px 0;">
                  <img src="/team2-mankai-user/assets/image/japanese-kanji-n3.jpg" alt="Japanese kanji N3" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <p style="color: #555; font-size: 14px; margin-top: 10px;">Hình ảnh minh họa kanji trình độ N3</p>
                </div>`,
              document: [
                {
                  id: 580,
                  name: "Từ vựng N3.pdf",
                  capacity: "320KB"
                },
                {
                  id: 581,
                  name: "Kanji N3.docx",
                  capacity: "40KB"
                },
                {
                  id: 582,
                  name: "Video hướng dẫn.mp4",
                  capacity: "100MB"
                },
                {
                  id: 583,
                  name: "Bài tập từ vựng.mp3",
                  capacity: "15MB"
                }
              ],
              discuss: {
                id: 680,
                listComment: [
                  {
                    id: 3800,
                    idUser: 25,
                    name: "Hải",
                    avatar: `/team2-mankai-user/assets/image/avatar26.jpg`,
                    content: "Từ vựng dễ hiểu, ví dụ rất thực tế!",
                    time: "8:00 5/4/2025",
                  },
                  {
                    id: 3801,
                    idUser: 26,
                    name: "Trang",
                    avatar: `/team2-mankai-user/assets/image/avatar27.jpg`,
                    content: "Kanji cần thêm bài tập để luyện viết.",
                    time: "9:30 6/4/2025",
                  },
                  {
                    id: 3802,
                    idUser: 27,
                    name: "Quân",
                    avatar: `/team2-mankai-user/assets/image/avatar28.jpg`,
                    content: "Cảm ơn vì bảng phân loại từ vựng, rất rõ ràng!",
                    time: "10:45 7/4/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 2800,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/72anQVh0U0c?si=8Z4insimzBS4JzEH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 2801,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/FbPS2_GZ7oQ?si=3NSqjXDPsOEQ1VBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 2802,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/0c1U1_rEiiY?si=flOQDhHpLuxygjCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ]
            },
            {
              id: 1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary: [
                { id: 2801, word: "商品", meaning: "Hàng hóa", status: false },
                { id: 2802, word: "割引", meaning: "Giảm giá", status: false },
                { id: 2803, word: "会議", meaning: "Cuộc họp", status: false },
                { id: 2804, word: "予定", meaning: "Kế hoạch", status: false },
                { id: 2805, word: "お願い", meaning: "Yêu cầu", status: false },
                { id: 2806, word: "報告", meaning: "Báo cáo", status: false },
                { id: 2807, word: "旅行", meaning: "Du lịch", status: false },
                { id: 2808, word: "予約", meaning: "Đặt chỗ", status: false },
                { id: 2809, word: "説明", meaning: "Giải thích", status: false },
                { id: 2810, word: "確認", meaning: "Xác nhận", status: false },
                { id: 2811, word: "相談", meaning: "Thảo luận", status: false },
                { id: 2812, word: "参加", meaning: "Tham gia", status: false },
                { id: 2813, word: "準備", meaning: "Chuẩn bị", status: false },
                { id: 2814, word: "連絡", meaning: "Liên lạc", status: false },
                { id: 2815, word: "経験", meaning: "Kinh nghiệm", status: false }
              ],
              test: [
                {
                  id: 2901,
                  questions: "この___はとても安いです。",
                  answer: ["商品", "割引", "会議", "予定"],
                  correctAnswer: "商品",
                  result: "この商品はとても安いです。",
                  explain: "「商品」 mang nghĩa 'hàng hóa', phù hợp với ngữ cảnh nói về sản phẩm."
                },
                {
                  id: 2902,
                  questions: "明日の___の時間は何時ですか。",
                  answer: ["会議", "お願い", "報告", "旅行"],
                  correctAnswer: "会議",
                  result: "明日の会議の時間は何時ですか。",
                  explain: "「会議」 có nghĩa 'cuộc họp', dùng để hỏi về thời gian họp."
                },
                {
                  id: 2903,
                  questions: "旅行の___をしてください。",
                  answer: ["予約", "説明", "確認", "相談"],
                  correctAnswer: "予約",
                  result: "旅行の予約をしてください。",
                  explain: "「予約」 mang nghĩa 'đặt chỗ', phù hợp với ngữ cảnh đặt vé du lịch."
                }
              ]
            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/tiengnhat08.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `
                <h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                  語彙学習: JLPT N3レベル (Từ vựng và Kanji: Trình độ JLPT N3)
                </h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học này giúp học viên nắm vững các từ vựng và kanji cơ bản của trình độ N3, thường được sử dụng trong giao tiếp hàng ngày, công việc, và các tình huống thực tế như mua sắm, đặt vé, hoặc tham gia cuộc họp. Mỗi từ vựng đều đi kèm ví dụ minh họa để học viên dễ dàng áp dụng.
                </p>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Nắm vững 50 từ vựng N3 thường gặp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Học cách viết và sử dụng 30 kanji N3
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Áp dụng từ vựng và kanji trong giao tiếp
                  </li>
                </ul>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Từ vựng và kanji trong các tình huống giao tiếp, công việc, mua sắm
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Ví dụ minh họa và bài tập thực hành
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng thực tế</h4>
                  <p style="line-height: 1.6;">
                    Khi đi mua sắm, bạn có thể hỏi: 「この商品は割引がありますか。」 (Hàng hóa này có giảm giá không?). Trong công việc, bạn có thể nói: 「明日の会議の予定を確認してください。」 (Hãy xác nhận kế hoạch cuộc họp ngày mai.). Những câu này giúp bạn sử dụng từ vựng một cách tự nhiên.
                  </p>
                </div>
    
                <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                  <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Từ vựng N3 - Bài 1: Giao tiếp hàng ngày</h4>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">商品 <span style="color: #F37142; font-weight: normal;">(しょうひん)</span>:</strong> Hàng hóa<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: この商品はとても安いです。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Hàng hóa này rất rẻ.</em>
                  </p>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">会議 <span style="color: #F37142; font-weight: normal;">(かいぎ)</span>:</strong> Cuộc họp<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 明日の会議の時間は何時ですか。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Cuộc họp ngày mai diễn ra lúc mấy giờ?</em>
                  </p>
                  <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                    <strong style="color: #F37142; font-size: 18px;">Mẹo học từ vựng N3:</strong> 
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                    Tạo flashcard với từ vựng và ví dụ câu.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                    Luyện tập sử dụng từ vựng trong các tình huống giao tiếp.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">3</span>
                    Ôn lại kanji bằng cách viết tay để ghi nhớ lâu hơn.
                  </p>
                  <p style="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                  </p>
                </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 2800,
                  sentence1: "この商品はとても安いです。",
                  sentence2: "Hàng hóa là",
                  answer: "Rẻ"
                },
                {
                  id: 2801,
                  sentence1: "明日の会議の時間は何時ですか。",
                  sentence2: "Cuộc họp là",
                  answer: "Ngày mai"
                },
                {
                  id: 2802,
                  sentence1: "旅行の予約をしてください。",
                  sentence2: "Du lịch là",
                  answer: "Đặt chỗ"
                },
                {
                  id: 2803,
                  sentence1: "この問題について相談したい。",
                  sentence2: "Vấn đề là",
                  answer: "Thảo luận"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 12,
              progress: 0,
              test: [
                {
                  id: 2800,
                  name: "Nội dung đề bài",
                  question: [
                    {
                      id: 3800,
                      special: "この商品はとても安いです。",
                      text: "Hàng hóa này như thế nào?",
                      select: [
                        { id: 7200, value: "Rẻ", check: true },
                        { id: 7201, value: "Đắt", check: false },
                        { id: 7202, value: "Nặng", check: false },
                        { id: 7203, value: "Nhẹ", check: false }
                      ]
                    },
                    {
                      id: 3801,
                      special: "明日の会議の時間は何時ですか。",
                      text: "Cuộc họp diễn ra khi nào?",
                      select: [
                        { id: 7204, value: "Hôm nay", check: false },
                        { id: 7205, value: "Ngày mai", check: true },
                        { id: 7206, value: "Tuần sau", check: false },
                        { id: 7207, value: "Không rõ", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 2801,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 3800,
                      special: "この商品はとても安いです。",
                      text: "Hàng hóa này như thế nào?",
                      list: [
                        {
                          id: 4800,
                          problem: "Đặc điểm của hàng hóa là gì?",
                          select: [
                            { id: 7300, value: "Rẻ", check: true },
                            { id: 7301, value: "Đắt", check: false },
                            { id: 7302, value: "Nặng", check: false },
                            { id: 7303, value: "Nhẹ", check: false }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 2802,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id: 3800,
                      special: "この商品はとても安いです。",
                      text: "この......はとても安いです。",
                      select: [
                        { id: 7400, value: "商品", check: true },
                        { id: 7401, value: "割引", check: false },
                        { id: 7402, value: "会議", check: false },
                        { id: 7403, value: "予定", check: false }
                      ]
                    },
                    {
                      id: 3801,
                      special: "明日の会議の時間は何時ですか。",
                      text: "明日の......の時間は何時ですか。",
                      select: [
                        { id: 7404, value: "会議", check: true },
                        { id: 7405, value: "お願い", check: false },
                        { id: 7406, value: "報告", check: false },
                        { id: 7407, value: "旅行", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 2803,
                  name: "Bài kiểm tra ghép câu",
                  question: [
                    {
                      id: 4800,
                      pairs: [
                        { left: "この商品", right: "とても安い" },
                        { left: "明日の会議", right: "時間確認" },
                        { left: "旅行の", right: "予約する" },
                        { left: "問題を", right: "相談する" },
                        { left: "予定を", right: "確認する" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 301,
          name: "Bài 2",
          progress: 0,
          time: 45,
          detail: [
            {
              id: 1000,
              describe: `
                <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 2: Ngữ pháp và giao tiếp N3</h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học thứ hai của lộ trình JLPT N3 tập trung vào các cấu trúc ngữ pháp cơ bản và kỹ năng giao tiếp trong các tình huống hàng ngày như hỏi đường, đặt hàng, hoặc trò chuyện với bạn bè. Học viên sẽ học cách sử dụng ngữ pháp N3 để diễn đạt ý tưởng một cách rõ ràng và tự nhiên.
                </p>
                <div style="background-color: #fff4eb; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #F37142;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Lưu ý quan trọng</h4>
                  <p style="line-height: 1.6;">
                    Hãy luyện tập nói các câu sử dụng ngữ pháp mới để cải thiện khả năng giao tiếp. Ghi chú các cấu trúc ngữ pháp và so sánh chúng để tránh nhầm lẫn.
                  </p>
                </div>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Ngữ pháp N3:</strong> 15 cấu trúc ngữ pháp cơ bản thường gặp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Giao tiếp:</strong> Luyện tập các mẫu câu giao tiếp hàng ngày
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Bài tập:</strong> Viết và nói các câu sử dụng ngữ pháp N3
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng giao tiếp</h4>
                  <p style="line-height: 1.6;">
                    Khi hỏi đường, bạn có thể nói: 「駅までどうやって行きますか。」 (Làm thế nào để đến ga?). Khi đặt hàng, bạn có thể dùng: 「このメニューをください。」 (Cho tôi món này.). Những câu này giúp bạn giao tiếp tự nhiên hơn trong cuộc sống hàng ngày.
                  </p>
                </div>
    
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                  <thead>
                    <tr style="background-color: #F37142; color: white;">
                      <th style="padding: 10px; border: 1px solid #ddd;">Ngữ pháp</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Ý nghĩa</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Ví dụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">てから</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Sau khi</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">ご飯を食べてから勉強します。</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">ために</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Để</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">試験のために毎日勉強します。</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">たら</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Nếu</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">時間があったら、旅行に行きます。</td>
                    </tr>
                  </tbody>
                </table>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Sử dụng ngữ pháp N3 để giao tiếp tự nhiên
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Viết và nói các câu đúng ngữ pháp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Tự tin làm bài thi phần ngữ pháp N3
                  </li>
                </ul>
    
                <div style="text-align: center; margin: 20px 0;">
                  <img src="/team2-mankai-user/assets/image/japanese-conversation.jpg" alt="Japanese conversation" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <p style="color: #555; font-size: 14px; margin-top: 10px;">Hình ảnh minh họa giao tiếp tiếng Nhật</p>
                </div>`,
              document: [
                {
                  id: 590,
                  name: "Ngữ pháp N3.pdf",
                  capacity: "380KB"
                },
                {
                  id: 591,
                  name: "Bài tập giao tiếp.docx",
                  capacity: "50KB"
                },
                {
                  id: 592,
                  name: "Video hướng dẫn.mp4",
                  capacity: "120MB"
                }
              ],
              discuss: {
                id: 690,
                listComment: [
                  {
                    id: 3900,
                    idUser: 28,
                    name: "Yến",
                    avatar: `/team2-mankai-user/assets/image/avatar29.jpg`,
                    content: "Ngữ pháp được giải thích rất dễ hiểu, cảm ơn!",
                    time: "7:00 10/4/2025",
                  },
                  {
                    id: 3901,
                    idUser: 29,
                    name: "Khoa",
                    avatar: `/team2-mankai-user/assets/image/avatar30.jpg`,
                    content: "Cần thêm bài tập nói để luyện giao tiếp.",
                    time: "8:20 11/4/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 2900,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/naQtPpanGps?si=FIwDJi2lZG3cOeIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 2901,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/iDfg7ZJwKu8?si=En7naQ5p_ZQ2J49s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ]
            },
            {
              id: 1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary: [
                { id: 2901, word: "てから", meaning: "Sau khi", status: false },
                { id: 2902, word: "ために", meaning: "Để", status: false },
                { id: 2903, word: "たら", meaning: "Nếu", status: false },
                { id: 2904, word: "ながら", meaning: "Trong khi", status: false },
                { id: 2905, word: "つもり", meaning: "Dự định", status: false },
                { id: 2906, word: "ように", meaning: "Để", status: false },
                { id: 2907, word: "ても", meaning: "Dù", status: false },
                { id: 2908, word: "ば", meaning: "Nếu", status: false },
                { id: 2909, word: "らしい", meaning: "Hình như", status: false },
                { id: 2910, word: "すぎる", meaning: "Quá", status: false },
                { id: 2911, word: "やすい", meaning: "Dễ", status: false },
                { id: 2912, word: "にくい", meaning: "Khó", status: false },
                { id: 2913, word: "かもしれない", meaning: "Có lẽ", status: false },
                { id: 2914, word: "てみる", meaning: "Thử", status: false },
                { id: 2915, word: "ところ", meaning: "Đang", status: false },
                { id: 2916, word: "てしまう", meaning: "Hoàn thành", status: false },
                { id: 2917, word: "続ける", meaning: "Tiếp tục", status: false }
              ],
              test: [
                {
                  id: 3001,
                  questions: "ご飯を食べて___勉強します。",
                  answer: ["てから", "ために", "たら", "ながら"],
                  correctAnswer: "てから",
                  result: "ご飯を食べてから勉強します。",
                  explain: "「てから」 mang nghĩa 'sau khi', dùng để chỉ hành động xảy ra sau một hành động khác."
                },
                {
                  id: 3002,
                  questions: "試験に合格する___毎日勉強します。",
                  answer: ["ために", "つもり", "ように", "ても"],
                  correctAnswer: "ために",
                  result: "試験に合格するために毎日勉強します。",
                  explain: "「ために」 có nghĩa 'để', dùng để chỉ mục đích của hành động."
                }
              ]
            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/tiengnhat09.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `
                <h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                  語彙学習: JLPT N3レベル (Ngữ pháp và giao tiếp: Trình độ JLPT N3)
                </h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học này giúp học viên nắm vững các cấu trúc ngữ pháp N3 và áp dụng chúng trong giao tiếp hàng ngày. Các cấu trúc ngữ pháp được giải thích chi tiết với ví dụ minh họa, giúp học viên dễ dàng sử dụng trong các tình huống như hỏi đường, đặt hàng, hoặc trò chuyện với bạn bè. Ngoài ra, bài học còn cung cấp các bài tập thực hành để củng cố kiến thức.
                </p>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Nắm vững 15 cấu trúc ngữ pháp N3
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Sử dụng ngữ pháp trong giao tiếp hàng ngày
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Tự tin làm bài thi phần ngữ pháp N3
                  </li>
                </ul>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Các cấu trúc ngữ pháp N3 trong giao tiếp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Ví dụ và bài tập thực hành giao tiếp
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng thực tế</h4>
                  <p style="line-height: 1.6;">
                    Trong nhà hàng, bạn có thể nói: 「このメニューをください。」 (Cho tôi món này.). Khi hỏi đường, bạn có thể dùng: 「駅までどうやって行きますか。」 (Làm thế nào để đến ga?). Những câu này giúp bạn giao tiếp tự nhiên và hiệu quả trong các tình huống thực tế.
                  </p>
                </div>
    
                <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                  <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Ngữ pháp N3 - Bài 2: Giao tiếp hàng ngày</h4>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">てから <span style="color: #F37142; font-weight: normal;">(てから)</span>:</strong> Sau khi<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: ご飯を食べてから勉強します。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Sau khi ăn cơm, tôi học bài.</em>
                  </p>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">ために <span style="color: #F37142; font-weight: normal;">(ために)</span>:</strong> Để<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 試験に合格するために毎日勉強します。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Tôi học hàng ngày để thi đỗ.</em>
                  </p>
                  <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                    <strong style="color: #F37142; font-size: 18px;">Mẹo học ngữ pháp N3:</strong> 
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                    Luyện nói các câu sử dụng ngữ pháp để giao tiếp tự nhiên.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                    So sánh các cấu trúc tương tự để tránh nhầm lẫn.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">3</span>
                    Luyện tập viết câu để củng cố ngữ pháp.
                  </p>
                  <p style="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                  </p>
                </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 2900,
                  sentence1: "ご飯を食べてから勉強します。",
                  sentence2: "Học là",
                  answer: "Sau ăn"
                },
                {
                  id: 2901,
                  sentence1: "試験に合格するために毎日勉強します。",
                  sentence2: "Thi là",
                  answer: "Đỗ"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 15,
              progress: 0,
              test: [
                {
                  id: 2900,
                  name: "Nội dung đề bài",
                  question: [
                    {
                      id: 3900,
                      special: "ご飯を食べてから勉強します。",
                      text: "Học khi nào?",
                      select: [
                        { id: 7500, value: "Sau khi ăn", check: true },
                        { id: 7501, value: "Trước khi ăn", check: false },
                        { id: 7502, value: "Trong khi ăn", check: false },
                        { id: 7503, value: "Không học", check: false }
                      ]
                    },
                    {
                      id: 3901,
                      special: "試験に合格するために毎日勉強します。",
                      text: "Mục đích của việc học là gì?",
                      select: [
                        { id: 7504, value: "Vui chơi", check: false },
                        { id: 7505, value: "Thi đỗ", check: true },
                        { id: 7506, value: "Gặp bạn", check: false },
                        { id: 7507, value: "Không rõ", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 2901,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 3900,
                      special: "ご飯を食べてから勉強します。",
                      text: "Học khi nào?",
                      list: [
                        {
                          id: 4900,
                          problem: "Thời điểm học là khi nào?",
                          select: [
                            { id: 7600, value: "Sau khi ăn", check: true },
                            { id: 7601, value: "Trước khi ăn", check: false },
                            { id: 7602, value: "Trong khi ăn", check: false },
                            { id: 7603, value: "Không học", check: false }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 2902,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id: 3900,
                      special: "ご飯を食べてから勉強します。",
                      text: "ご飯を食べて......勉強します。",
                      select: [
                        { id: 7700, value: "てから", check: true },
                        { id: 7701, value: "ために", check: false },
                        { id: 7702, value: "たら", check: false },
                        { id: 7703, value: "ながら", check: false }
                      ]
                    },
                    {
                      id: 3901,
                      special: "試験に合格するために毎日勉強します。",
                      text: "試験に合格する......毎日勉強します。",
                      select: [
                        { id: 7704, value: "ために", check: true },
                        { id: 7705, value: "つもり", check: false },
                        { id: 7706, value: "ように", check: false },
                        { id: 7707, value: "ても", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 2903,
                  name: "Bài kiểm tra ghép câu",
                  question: [
                    {
                      id: 4900,
                      pairs: [
                        { left: "ご飯を食べて", right: "勉強する" },
                        { left: "試験に合格", right: "毎日勉強" },
                        { left: "時間があったら", right: "旅行に行く" },
                        { left: "音楽を聞き", right: "リラックスする" },
                        { left: "友達に", right: "相談する" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 15,
      name: "Tiếng Nhật N4",
      image: "/team2-mankai-user/assets/image/image-course.png",
      progress: 0,
      lessons: [
        {
          id: 400,
          name: "Bài 1",
          progress: 0,
          time: 35,
          detail: [
            {
              id: 1000,
              describe: `
                <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 1: Từ vựng và Kanji cơ bản N4</h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học đầu tiên của lộ trình JLPT N4 tập trung vào từ vựng và kanji cơ bản, thường được sử dụng trong các tình huống giao tiếp đơn giản như giới thiệu bản thân, mua sắm, hoặc hỏi giờ. Học viên sẽ học cách nhận biết và sử dụng từ vựng, kanji trong các ngữ cảnh thực tế, đồng thời làm quen với các bài tập để chuẩn bị cho kỳ thi N4.
                </p>
                <div style="background-color: #fff4eb; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #F37142;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Lưu ý quan trọng</h4>
                  <p style="line-height: 1.6;">
                    Để ghi nhớ từ vựng và kanji, hãy luyện tập viết và nói hàng ngày. Sử dụng các câu đơn giản để áp dụng từ vựng vào thực tế, và ôn lại thường xuyên để không quên!
                  </p>
                </div>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Từ vựng N4:</strong> 40 từ vựng cơ bản liên quan đến giao tiếp hàng ngày
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Kanji N4:</strong> 20 kanji cơ bản và cách sử dụng
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Luyện tập:</strong> Bài tập nhận diện từ vựng và viết kanji
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng thực tế</h4>
                  <p style="line-height: 1.6;">
                    Khi giới thiệu bản thân, bạn có thể nói: 「私の名前は～です。」 (Tên tôi là ~). Khi mua sắm, bạn có thể hỏi: 「これはいくらですか。」 (Cái này giá bao nhiêu?). Những câu này giúp bạn giao tiếp tự nhiên trong cuộc sống hàng ngày.
                  </p>
                </div>
    
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                  <thead>
                    <tr style="background-color: #F37142; color: white;">
                      <th style="padding: 10px; border: 1px solid #ddd;">Chủ đề</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Số từ vựng</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Ví dụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Giới thiệu bản thân</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">15</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「名前」 (Tên)</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Mua sắm</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">10</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「いくら」 (Bao nhiêu)</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Thời gian</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">15</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「時間」 (Thời gian)</td>
                    </tr>
                  </tbody>
                </table>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Nhận diện và sử dụng từ vựng N4 trong giao tiếp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Viết và đọc đúng kanji N4
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Tự tin làm bài thi phần từ vựng và kanji
                  </li>
                </ul>
    
                <div style="text-align: center; margin: 20px 0;">
                  <img src="/team2-mankai-user/assets/image/japanese-kanji-n4.jpg" alt="Japanese kanji N4" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <p style="color: #555; font-size: 14px; margin-top: 10px;">Hình ảnh minh họa kanji trình độ N4</p>
                </div>`,
              document: [
                {
                  id: 600,
                  name: "Từ vựng N4.pdf",
                  capacity: "300KB"
                },
                {
                  id: 601,
                  name: "Kanji N4.docx",
                  capacity: "35KB"
                },
                {
                  id: 602,
                  name: "Video hướng dẫn.mp4",
                  capacity: "90MB"
                }
              ],
              discuss: {
                id: 700,
                listComment: [
                  {
                    id: 4000,
                    idUser: 30,
                    name: "Nhung",
                    avatar: `/team2-mankai-user/assets/image/avatar31.jpg`,
                    content: "Từ vựng đơn giản, dễ học, cảm ơn thầy cô!",
                    time: "7:00 15/4/2025",
                  },
                  {
                    id: 4001,
                    idUser: 31,
                    name: "Đức",
                    avatar: `/team2-mankai-user/assets/image/avatar32.jpg`,
                    content: "Kanji cần thêm bài tập để luyện nhiều hơn.",
                    time: "8:30 16/4/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 3000,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/odVvRO14sfs?si=ueJF4IqHKPhYYQk_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 3001,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/19Ef5pCoEXA?si=APtNn6YXuR6r6BZS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 3002,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/2JADfcYBl7Q?si=QbNWeDdLUGRsCE9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ]
            },
            {
              id: 1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary: [
                { id: 3001, word: "名前", meaning: "Tên", status: false },
                { id: 3002, word: "いくら", meaning: "Bao nhiêu", status: false },
                { id: 3003, word: "時間", meaning: "Thời gian", status: false },
                { id: 3004, word: "友達", meaning: "Bạn bè", status: false },
                { id: 3005, word: "学校", meaning: "Trường học", status: false },
                { id: 3006, word: "仕事", meaning: "Công việc", status: false },
                { id: 3007, word: "会社", meaning: "Công ty", status: false },
                { id: 3008, word: "家", meaning: "Nhà", status: false },
                { id: 3009, word: "お店", meaning: "Cửa hàng", status: false },
                { id: 3010, word: "物", meaning: "Đồ vật", status: false },
                { id: 3011, word: "電話", meaning: "Điện thoại", status: false },
                { id: 3012, word: "場所", meaning: "Nơi", status: false },
                { id: 3013, word: "人", meaning: "Người", status: false },
                { id: 3014, word: "天気", meaning: "Thời tiết", status: false },
                { id: 3015, word: "朝", meaning: "Buổi sáng", status: false },
                { id: 3016, word: "夜", meaning: "Buổi tối", status: false },
                { id: 3017, word: "昨日", meaning: "Hôm qua", status: false },
                { id: 3018, word: "今日", meaning: "Hôm nay", status: false },
                { id: 3019, word: "明日", meaning: "Ngày mai", status: false },
                { id: 3020, word: "今", meaning: "Bây giờ", status: false }
              ],
              test: [
                {
                  id: 3101,
                  questions: "私の___は田中です。",
                  answer: ["名前", "いくら", "時間", "友達"],
                  correctAnswer: "名前",
                  result: "私の名前は田中です。",
                  explain: "「名前」 mang nghĩa 'tên', dùng để giới thiệu bản thân."
                },
                {
                  id: 3102,
                  questions: "この本は___ですか。",
                  answer: ["いくら", "学校", "仕事", "会社"],
                  correctAnswer: "いくら",
                  result: "この本はいくらですか。",
                  explain: "「いくら」 có nghĩa 'bao nhiêu', dùng để hỏi giá."
                },
                {
                  id: 3103,
                  questions: "今は何___ですか。",
                  answer: ["時間", "家", "お店", "物"],
                  correctAnswer: "時間",
                  result: "今は何時間ですか。",
                  explain: "「時間」 mang nghĩa 'thời gian', dùng để hỏi giờ."
                },
                {
                  id: 3104,
                  questions: "彼は私の___です。",
                  answer: ["友達", "電話", "場所", "人"],
                  correctAnswer: "友達",
                  result: "彼は私の友達です。",
                  explain: "「友達」 có nghĩa 'bạn bè', dùng để giới thiệu mối quan hệ."
                }
              ]
            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/tiengnhat10.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `
                <h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                  語彙学習: JLPT N4レベル (Từ vựng và Kanji: Trình độ JLPT N4)
                </h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học này giúp học viên nắm vững các từ vựng và kanji cơ bản của trình độ N4, thường được sử dụng trong các tình huống giao tiếp đơn giản như giới thiệu bản thân, hỏi giá, hoặc nói về thời gian. Mỗi từ vựng và kanji đều đi kèm ví dụ minh họa để học viên dễ dàng áp dụng trong cuộc sống hàng ngày.
                </p>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Nắm vững 40 từ vựng N4 cơ bản
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Học cách viết và đọc 20 kanji N4
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Sử dụng từ vựng và kanji trong giao tiếp đơn giản
                  </li>
                </ul>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Từ vựng và kanji trong các tình huống giới thiệu, mua sắm, hỏi giờ
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Ví dụ minh họa và bài tập thực hành
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng thực tế</h4>
                  <p style="line-height: 1.6;">
                    Khi hỏi giá trong cửa hàng, bạn có thể nói: 「これはいくらですか。」 (Cái này giá bao nhiêu?). Khi giới thiệu bạn bè, bạn có thể nói: 「彼は私の友達です。」 (Anh ấy là bạn tôi.). Những câu này giúp bạn giao tiếp tự nhiên và dễ dàng.
                  </p>
                </div>
    
                <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                  <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Từ vựng N4 - Bài 1: Giao tiếp cơ bản</h4>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">名前 <span style="color: #F37142; font-weight: normal;">(なまえ)</span>:</strong> Tên<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 私の名前は田中です。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Tên tôi là Tanaka.</em>
                  </p>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">いくら <span style="color: #F37142; font-weight: normal;">(いくら)</span>:</strong> Bao nhiêu<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: この本はいくらですか。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Cuốn sách này giá bao nhiêu?</em>
                  </p>
                  <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                    <strong style="color: #F37142; font-size: 18px;">Mẹo học từ vựng N4:</strong> 
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                    Tạo flashcard với từ vựng và ví dụ câu.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                    Luyện nói các câu giao tiếp đơn giản.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">3</span>
                    Viết kanji bằng tay để ghi nhớ lâu hơn.
                  </p>
                  <p style="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                  </p>
                </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 3000,
                  sentence1: "私の名前は田中です。",
                  sentence2: "Tên là",
                  answer: "Tanaka"
                },
                {
                  id: 3001,
                  sentence1: "この本はいくらですか。",
                  sentence2: "Sách là",
                  answer: "Giá"
                },
                {
                  id: 3002,
                  sentence1: "今は何時間ですか。",
                  sentence2: "Thời gian là",
                  answer: "Bây giờ"
                },
                {
                  id: 3003,
                  sentence1: "彼は私の友達です。",
                  sentence2: "Anh ấy là",
                  answer: "Bạn"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 10,
              progress: 0,
              test: [
                {
                  id: 3000,
                  name: "Nội dung đề bài",
                  question: [
                    {
                      id: 4000,
                      special: "私の名前は田中です。",
                      text: "Tên của người này là gì?",
                      select: [
                        { id: 7800, value: "Tanaka", check: true },
                        { id: 7801, value: "Suzuki", check: false },
                        { id: 7802, value: "Yamada", check: false },
                        { id: 7803, value: "Không rõ", check: false }
                      ]
                    },
                    {
                      id: 4001,
                      special: "この本はいくらですか。",
                      text: "Câu này hỏi về cái gì?",
                      select: [
                        { id: 7804, value: "Tên sách", check: false },
                        { id: 7805, value: "Giá sách", check: true },
                        { id: 7806, value: "Tác giả", check: false },
                        { id: 7807, value: "Thời gian", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3001,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 4000,
                      special: "私の名前は田中です。",
                      text: "Tên của người này là gì?",
                      list: [
                        {
                          id: 5000,
                          problem: "Tên là gì?",
                          select: [
                            { id: 7900, value: "Tanaka", check: true },
                            { id: 7901, value: "Suzuki", check: false },
                            { id: 7902, value: "Yamada", check: false },
                            { id: 7903, value: "Không rõ", check: false }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 3002,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id: 4000,
                      special: "私の名前は田中です。",
                      text: "私の......は田中です。",
                      select: [
                        { id: 8000, value: "名前", check: true },
                        { id: 8001, value: "いくら", check: false },
                        { id: 8002, value: "時間", check: false },
                        { id: 8003, value: "友達", check: false }
                      ]
                    },
                    {
                      id: 4001,
                      special: "この本はいくらですか。",
                      text: "この本は......ですか。",
                      select: [
                        { id: 8004, value: "いくら", check: true },
                        { id: 8005, value: "学校", check: false },
                        { id: 8006, value: "仕事", check: false },
                        { id: 8007, value: "会社", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3003,
                  name: "Bài kiểm tra ghép câu",
                  question: [
                    {
                      id: 5000,
                      pairs: [
                        { left: "私の名前", right: "田中です" },
                        { left: "この本", right: "いくらですか" },
                        { left: "今は何", right: "時間ですか" },
                        { left: "彼は私の", right: "友達です" },
                        { left: "今日の天気", right: "良いです" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 401,
          name: "Bài 2",
          progress: 0,
          time: 40,
          detail: [
            {
              id: 1000,
              describe: `
                <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 2: Ngữ pháp và giao tiếp cơ bản N4</h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học thứ hai của lộ trình JLPT N4 tập trung vào các cấu trúc ngữ pháp cơ bản và kỹ năng giao tiếp trong các tình huống đơn giản như hỏi đường, đặt món ăn, hoặc nói về sở thích. Học viên sẽ học cách sử dụng ngữ pháp N4 để diễn đạt ý tưởng một cách rõ ràng và tự nhiên, đồng thời luyện tập các mẫu câu giao tiếp hàng ngày.
                </p>
                <div style="background-color: #fff4eb; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #F37142;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Lưu ý quan trọng</h4>
                  <p style="line-height: 1.6;">
                    Hãy luyện tập nói các câu sử dụng ngữ pháp mới để cải thiện khả năng giao tiếp. Ghi chú các cấu trúc ngữ pháp và luyện tập viết câu để củng cố kiến thức.
                  </p>
                </div>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Ngữ pháp N4:</strong> 10 cấu trúc ngữ pháp cơ bản thường gặp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Giao tiếp:</strong> Luyện tập các mẫu câu giao tiếp đơn giản
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Bài tập:</strong> Viết và nói các câu sử dụng ngữ pháp N4
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng giao tiếp</h4>
                  <p style="line-height: 1.6;">
                    Khi hỏi đường, bạn có thể nói: 「駅はどこですか。」 (Ga ở đâu?). Khi đặt món ăn, bạn có thể dùng: 「ラーメンをください。」 (Cho tôi một bát ramen.). Những câu này giúp bạn giao tiếp tự nhiên trong các tình huống thực tế.
                  </p>
                </div>
    
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                  <thead>
                    <tr style="background-color: #F37142; color: white;">
                      <th style="padding: 10px; border: 1px solid #ddd;">Ngữ pháp</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Ý nghĩa</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Ví dụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">ます</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Lịch sự</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">本を読みます。</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">たい</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Muốn</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">日本に行きたいです。</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">て</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Nối câu</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">食べて寝ます。</td>
                    </tr>
                  </tbody>
                </table>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Sử dụng ngữ pháp N4 để giao tiếp đơn giản
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Viết và nói các câu đúng ngữ pháp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Tự tin làm bài thi phần ngữ pháp N4
                  </li>
                </ul>
    
                <div style="text-align: center; margin: 20px 0;">
                  <img src="/team2-mankai-user/assets/image/japanese-conversation-n4.jpg" alt="Japanese conversation N4" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <p style="color: #555; font-size: 14px; margin-top: 10px;">Hình ảnh minh họa giao tiếp trình độ N4</p>
                </div>`,
              document: [
                {
                  id: 610,
                  name: "Ngữ pháp N4.pdf",
                  capacity: "350KB"
                },
                {
                  id: 611,
                  name: "Bài tập giao tiếp.docx",
                  capacity: "45KB"
                }
              ],
              discuss: {
                id: 710,
                listComment: [
                  {
                    id: 4100,
                    idUser: 33,
                    name: "Mai",
                    avatar: `/team2-mankai-user/assets/image/avatar34.jpg`,
                    content: "Ngữ pháp dễ hiểu, ví dụ rất thực tế!",
                    time: "7:00 20/4/2025",
                  },
                  {
                    id: 4101,
                    idUser: 34,
                    name: "Long",
                    avatar: `/team2-mankai-user/assets/image/avatar35.jpg`,
                    content: "Cần thêm bài tập nói để luyện giao tiếp.",
                    time: "8:15 21/4/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 3100,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/KVqlbe25pqc?si=AZvp_vS3JOtNI85G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 3101,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/xvS4KHUpSLE?si=32tah9AvLLqQJpBj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ]
            },
            {
              id: 1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary: [
                { id: 3101, word: "ます", meaning: "Lịch sự", status: false },
                { id: 3102, word: "たい", meaning: "Muốn", status: false },
                { id: 3103, word: "て", meaning: "Nối câu", status: false },
                { id: 3104, word: "ない", meaning: "Không", status: false },
                { id: 3105, word: "で", meaning: "Tại", status: false },
                { id: 3106, word: "から", meaning: "Vì", status: false },
                { id: 3107, word: "けど", meaning: "Nhưng", status: false },
                { id: 3108, word: "たり", meaning: "Hoặc", status: false },
                { id: 3109, word: "なら", meaning: "Nếu", status: false },
                { id: 3110, word: "てから", meaning: "Sau khi", status: false },
                { id: 3111, word: "ても", meaning: "Dù", status: false },
                { id: 3112, word: "ながら", meaning: "Trong khi", status: false },
                { id: 3113, word: "つもり", meaning: "Dự định", status: false },
                { id: 3114, word: "ように", meaning: "Để", status: false },
                { id: 3115, word: "らしい", meaning: "Hình như", status: false }
              ],
              test: [
                {
                  id: 3201,
                  questions: "本を___。",
                  answer: ["ます", "たい", "て", "ない"],
                  correctAnswer: "ます",
                  result: "本を読みます。",
                  explain: "「ます」 mang nghĩa 'lịch sự', dùng để diễn đạt hành động một cách trang trọng."
                },
                {
                  id: 3202,
                  questions: "日本に___です。",
                  answer: ["たい", "で", "から", "けど"],
                  correctAnswer: "たい",
                  result: "日本に行きたいです。",
                  explain: "「たい」 có nghĩa 'muốn', dùng để diễn đạt mong muốn."
                }
              ]
            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/tiengnhat11.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `
                <h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                  語彙学習: JLPT N4レベル (Ngữ pháp và giao tiếp: Trình độ JLPT N4)
                </h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học này giúp học viên nắm vững các cấu trúc ngữ pháp N4 cơ bản và áp dụng chúng trong giao tiếp hàng ngày. Các cấu trúc ngữ pháp được giải thích chi tiết với ví dụ minh họa, giúp học viên dễ dàng sử dụng trong các tình huống như hỏi đường, đặt món ăn, hoặc nói về sở thích. Bài học cũng cung cấp các bài tập thực hành để củng cố kiến thức.
                </p>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Nắm vững 10 cấu trúc ngữ pháp N4
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Sử dụng ngữ pháp trong giao tiếp đơn giản
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Tự tin làm bài thi phần ngữ pháp N4
                  </li>
                </ul>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Các cấu trúc ngữ pháp N4 trong giao tiếp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Ví dụ và bài tập thực hành giao tiếp
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng thực tế</h4>
                  <p style="line-height: 1.6;">
                    Trong nhà hàng, bạn có thể nói: 「ラーメンをください。」 (Cho tôi một bát ramen.). Khi hỏi đường, bạn có thể dùng: 「駅はどこですか。」 (Ga ở đâu?). Những câu này giúp bạn giao tiếp tự nhiên và hiệu quả.
                  </p>
                </div>
    
                <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                  <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Ngữ pháp N4 - Bài 2: Giao tiếp đơn giản</h4>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">ます <span style="color: #F37142; font-weight: normal;">(ます)</span>:</strong> Lịch sự<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 本を読みます。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Tôi đọc sách.</em>
                  </p>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">たい <span style="color: #F37142; font-weight: normal;">(たい)</span>:</strong> Muốn<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 日本に行きたいです。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Tôi muốn đi Nhật.</em>
                  </p>
                  <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                    <strong style="color: #F37142; font-size: 18px;">Mẹo học ngữ pháp N4:</strong> 
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                    Luyện nói các câu sử dụng ngữ pháp để giao tiếp tự nhiên.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                    Viết câu ví dụ để hiểu cách dùng ngữ pháp.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">3</span>
                    Luyện tập với bạn bè để cải thiện giao tiếp.
                  </p>
                  <p style="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                  </p>
                </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 3100,
                  sentence1: "本を読みます。",
                  sentence2: "Hành động là",
                  answer: "Đọc sách"
                },
                {
                  id: 3101,
                  sentence1: "日本に行きたいです。",
                  sentence2: "Mong muốn là",
                  answer: "Đi Nhật"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 12,
              progress: 0,
              test: [
                {
                  id: 3100,
                  name: "Nội dung đề bài",
                  question: [
                    {
                      id: 4100,
                      special: "本を読みます。",
                      text: "Hành động này là gì?",
                      select: [
                        { id: 8100, value: "Đọc sách", check: true },
                        { id: 8101, value: "Viết sách", check: false },
                        { id: 8102, value: "Mua sách", check: false },
                        { id: 8103, value: "Không rõ", check: false }
                      ]
                    },
                    {
                      id: 4101,
                      special: "日本に行きたいです。",
                      text: "Người này muốn làm gì?",
                      select: [
                        { id: 8104, value: "Đi Nhật", check: true },
                        { id: 8105, value: "Học tiếng Nhật", check: false },
                        { id: 8106, value: "Làm việc", check: false },
                        { id: 8107, value: "Không rõ", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3101,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 4100,
                      special: "本を読みます。",
                      text: "Hành động này là gì?",
                      list: [
                        {
                          id: 5100,
                          problem: "Hành động là gì?",
                          select: [
                            { id: 8200, value: "Đọc sách", check: true },
                            { id: 8201, value: "Viết sách", check: false },
                            { id: 8202, value: "Mua sách", check: false },
                            { id: 8203, value: "Không rõ", check: false }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 3102,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id: 4100,
                      special: "本を読みます。",
                      text: "本を......。",
                      select: [
                        { id: 8300, value: "読みます", check: true },
                        { id: 8301, value: "書きます", check: false },
                        { id: 8302, value: "買います", check: false },
                        { id: 8303, value: "見ます", check: false }
                      ]
                    },
                    {
                      id: 4101,
                      special: "日本に行きたいです。",
                      text: "日本に......です。",
                      select: [
                        { id: 8304, value: "行きたい", check: true },
                        { id: 8305, value: "住みたい", check: false },
                        { id: 8306, value: "学びたい", check: false },
                        { id: 8307, value: "見たい", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3103,
                  name: "Bài kiểm tra ghép câu",
                  question: [
                    {
                      id: 5100,
                      pairs: [
                        { left: "本を", right: "読みます" },
                        { left: "日本に", right: "行きたい" },
                        { left: "駅は", right: "どこですか" },
                        { left: "ラーメンを", right: "ください" },
                        { left: "友達と", right: "話します" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 402,
          name: "Bài 3",
          progress: 0,
          time: 45,
          detail: [
            {
              id: 1000,
              describe: `
                <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 3: Đọc hiểu và từ vựng N4</h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học thứ ba của lộ trình JLPT N4 tập trung vào kỹ năng đọc hiểu các đoạn văn ngắn và củng cố từ vựng N4. Học viên sẽ luyện tập đọc các thông báo, thư, hoặc bài viết đơn giản, đồng thời học thêm từ vựng liên quan đến cuộc sống hàng ngày như gia đình, trường học, và sở thích.
                </p>
                <div style="background-color: #fff4eb; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #F37142;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Lưu ý quan trọng</h4>
                  <p style="line-height: 1.6;">
                    Khi đọc, hãy chú ý đến các từ khóa và ý chính của đoạn văn. Luyện tập trả lời câu hỏi dựa trên nội dung đọc để cải thiện kỹ năng đọc hiểu.
                  </p>
                </div>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Đọc hiểu:</strong> Luyện tập đọc các đoạn văn ngắn (thông báo, thư)
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Từ vựng N4:</strong> 12 từ vựng liên quan đến gia đình, trường học, sở thích
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Bài tập:</strong> Trả lời câu hỏi đọc hiểu và bài tập từ vựng
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng thực tế</h4>
                  <p style="line-height: 1.6;">
                    Khi đọc thông báo, bạn có thể gặp từ như 「家族」 (gia đình) hoặc 「趣味」 (sở thích). Khi viết thư, bạn có thể dùng: 「私の家族は四人です。」 (Gia đình tôi có bốn người.). Những kỹ năng này giúp bạn hiểu và sử dụng tiếng Nhật trong các tình huống thực tế.
                  </p>
                </div>
    
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                  <thead>
                    <tr style="background-color: #F37142; color: white;">
                      <th style="padding: 10px; border: 1px solid #ddd;">Chủ đề</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Số từ vựng</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Ví dụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Gia đình</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">4</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「家族」 (Gia đình)</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Trường học</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">4</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「学生」 (Học sinh)</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Sở thích</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">4</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「趣味」 (Sở thích)</td>
                    </tr>
                  </tbody>
                </table>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Hiểu các đoạn văn ngắn N4
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Sử dụng từ vựng N4 trong các ngữ cảnh thực tế
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Tự tin làm bài thi phần đọc hiểu
                  </li>
                </ul>
    
                <div style="text-align: center; margin: 20px 0;">
                  <img src="/team2-mankai-user/assets/image/japanese-reading-n4.jpg" alt="Japanese reading N4" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <p style="color: #555; font-size: 14px; margin-top: 10px;">Hình ảnh minh họa đọc hiểu trình độ N4</p>
                </div>`,
              document: [
                {
                  id: 620,
                  name: "Đọc hiểu N4.pdf",
                  capacity: "360KB"
                },
                {
                  id: 621,
                  name: "Từ vựng N4.docx",
                  capacity: "50KB"
                },
                {
                  id: 622,
                  name: "Video hướng dẫn.mp4",
                  capacity: "110MB"
                }
              ],
              discuss: {
                id: 720,
                listComment: [
                  {
                    id: 4200,
                    idUser: 35,
                    name: "Thảo",
                    avatar: `/team2-mankai-user/assets/image/avatar36.jpg`,
                    content: "Đoạn văn ngắn dễ hiểu, phù hợp với người mới học!",
                    time: "7:00 25/4/2025",
                  },
                  {
                    id: 4201,
                    idUser: 36,
                    name: "Việt",
                    avatar: `/team2-mankai-user/assets/image/avatar37.jpg`,
                    content: "Cần thêm bài tập trả lời câu hỏi đọc hiểu.",
                    time: "8:30 26/4/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 3200,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/xvS4KHUpSLE?si=IbLPVlf_qdcpFjWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ]
            },
            {
              id: 1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary: [
                { id: 3201, word: "家族", meaning: "Gia đình", status: false },
                { id: 3202, word: "学生", meaning: "Học sinh", status: false },
                { id: 3203, word: "趣味", meaning: "Sở thích", status: false },
                { id: 3204, word: "先生", meaning: "Giáo viên", status: false },
                { id: 3205, word: "勉強", meaning: "Học", status: false },
                { id: 3206, word: "音楽", meaning: "Âm nhạc", status: false },
                { id: 3207, word: "映画", meaning: "Phim", status: false },
                { id: 3208, word: "旅行", meaning: "Du lịch", status: false },
                { id: 3209, word: "友達", meaning: "Bạn bè", status: false },
                { id: 3210, word: "毎日", meaning: "Hàng ngày", status: false },
                { id: 3211, word: "週末", meaning: "Cuối tuần", status: false },
                { id: 3212, word: "休み", meaning: "Nghỉ", status: false }
              ],
              test: [
                {
                  id: 3301,
                  questions: "私の___は四人です。",
                  answer: ["家族", "学生", "趣味", "先生"],
                  correctAnswer: "家族",
                  result: "私の家族は四人です。",
                  explain: "「家族」 mang nghĩa 'gia đình', dùng để nói về số người trong gia đình."
                },
                {
                  id: 3302,
                  questions: "私は___です。",
                  answer: ["学生", "勉強", "音楽", "映画"],
                  correctAnswer: "学生",
                  result: "私は学生です。",
                  explain: "「学生」 có nghĩa 'học sinh', dùng để giới thiệu vai trò."
                },
                {
                  id: 3303,
                  questions: "私の___は読書です。",
                  answer: ["趣味", "旅行", "友達", "毎日"],
                  correctAnswer: "趣味",
                  result: "私の趣味は読書です。",
                  explain: "「趣味」 mang nghĩa 'sở thích', dùng để nói về sở thích cá nhân."
                }
              ]
            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/tiengnhat12.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `
                <h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                  語彙学習: JLPT N4レベル (Đọc hiểu và từ vựng: Trình độ JLPT N4)
                </h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học này giúp học viên phát triển kỹ năng đọc hiểu các đoạn văn ngắn và củng cố từ vựng N4. Các đoạn văn bao gồm thông báo, thư, hoặc bài viết đơn giản về gia đình, trường học, và sở thích. Mỗi từ vựng được giải thích chi tiết với ví dụ minh họa, giúp học viên dễ dàng áp dụng trong thực tế.
                </p>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Hiểu các đoạn văn ngắn N4
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Nắm vững 12 từ vựng N4 liên quan đến gia đình, trường học, sở thích
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Tự tin làm bài thi phần đọc hiểu
                  </li>
                </ul>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Các đoạn văn ngắn về gia đình, trường học, sở thích
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Từ vựng và bài tập thực hành đọc hiểu
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng thực tế</h4>
                  <p style="line-height: 1.6;">
                    Khi đọc thư từ bạn bè, bạn có thể gặp từ như 「趣味」 (sở thích) hoặc 「家族」 (gia đình). Khi đọc thông báo ở trường, bạn có thể thấy từ như 「学生」 (học sinh). Những từ này giúp bạn hiểu nội dung và giao tiếp hiệu quả hơn.
                  </p>
                </div>
    
                <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                  <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Từ vựng N4 - Bài 3: Gia đình và sở thích</h4>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">家族 <span style="color: #F37142; font-weight: normal;">(かぞく)</span>:</strong> Gia đình<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 私の家族は四人です。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Gia đình tôi có bốn người.</em>
                  </p>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">趣味 <span style="color: #F37142; font-weight: normal;">(しゅみ)</span>:</strong> Sở thích<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 私の趣味は読書です。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Sở thích của tôi là đọc sách.</em>
                  </p>
                  <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                    <strong style="color: #F37142; font-size: 18px;">Mẹo học đọc hiểu N4:</strong> 
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                    Đọc các đoạn văn ngắn và ghi chú từ khóa.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                    Luyện trả lời câu hỏi để hiểu nội dung.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">3</span>
                    Đọc các thông báo hoặc thư đơn giản để làm quen với văn phong.
                  </p>
                  <p style="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                  </p>
                </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 3200,
                  sentence1: "私の家族は四人です。",
                  sentence2: "Gia đình là",
                  answer: "Bốn người"
                },
                {
                  id: 3201,
                  sentence1: "私の趣味は読書です。",
                  sentence2: "Sở thích là",
                  answer: "Đọc sách"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 15,
              progress: 0,
              test: [
                {
                  id: 3200,
                  name: "Nội dung đề bài",
                  question: [
                    {
                      id: 4200,
                      special: "私の家族は四人です。",
                      text: "Gia đình có bao nhiêu người?",
                      select: [
                        { id: 8400, value: "Bốn người", check: true },
                        { id: 8401, value: "Ba người", check: false },
                        { id: 8402, value: "Năm người", check: false },
                        { id: 8403, value: "Không rõ", check: false }
                      ]
                    },
                    {
                      id: 4201,
                      special: "私の趣味は読書です。",
                      text: "Sở thích là gì?",
                      select: [
                        { id: 8404, value: "Đọc sách", check: true },
                        { id: 8405, value: "Xem phim", check: false },
                        { id: 8406, value: "Du lịch", check: false },
                        { id: 8407, value: "Không rõ", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3201,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 4200,
                      special: "私の家族は四人です。",
                      text: "Gia đình có bao nhiêu người?",
                      list: [
                        {
                          id: 5200,
                          problem: "Số người trong gia đình là bao nhiêu?",
                          select: [
                            { id: 8500, value: "Bốn người", check: true },
                            { id: 8501, value: "Ba người", check: false },
                            { id: 8502, value: "Năm người", check: false },
                            { id: 8503, value: "Không rõ", check: false }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 3202,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id: 4200,
                      special: "私の家族は四人です。",
                      text: "私の......は四人です。",
                      select: [
                        { id: 8600, value: "家族", check: true },
                        { id: 8601, value: "学生", check: false },
                        { id: 8602, value: "趣味", check: false },
                        { id: 8603, value: "先生", check: false }
                      ]
                    },
                    {
                      id: 4201,
                      special: "私の趣味は読書です。",
                      text: "私の......は読書です。",
                      select: [
                        { id: 8604, value: "趣味", check: true },
                        { id: 8605, value: "旅行", check: false },
                        { id: 8606, value: "友達", check: false },
                        { id: 8607, value: "毎日", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3203,
                  name: "Bài kiểm tra ghép câu",
                  question: [
                    {
                      id: 5200,
                      pairs: [
                        { left: "私の家族", right: "四人です" },
                        { left: "私の趣味", right: "読書です" },
                        { left: "私は", right: "学生です" },
                        { left: "毎日", right: "勉強します" },
                        { left: "週末は", right: "休みます" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 403,
          name: "Bài 4",
          progress: 0,
          time: 40,
          detail: [
            {
              id: 1000,
              describe: `
                <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 4: Nghe hiểu và giao tiếp N4</h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học thứ tư của lộ trình JLPT N4 tập trung vào kỹ năng nghe hiểu và giao tiếp trong các tình huống hàng ngày như hỏi đường, mua hàng, hoặc trò chuyện về sở thích. Học viên sẽ luyện tập các đoạn hội thoại ngắn và học cách phản hồi phù hợp trong các ngữ cảnh thực tế.
                </p>
                <div style="background-color: #fff4eb; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #F37142;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Lưu ý quan trọng</h4>
                  <p style="line-height: 1.6;">
                    Để cải thiện kỹ năng nghe, hãy luyện tập nghe các đoạn hội thoại ngắn hàng ngày. Ghi chú các từ khóa và luyện tập phản hồi để giao tiếp tự nhiên hơn.
                  </p>
                </div>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Nghe hiểu:</strong> Luyện tập các đoạn hội thoại ngắn
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Giao tiếp:</strong> Học cách phản hồi trong các tình huống thực tế
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Bài tập:</strong> Trả lời câu hỏi nghe và luyện tập giao tiếp
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng thực tế</h4>
                  <p style="line-height: 1.6;">
                    Khi mua hàng, bạn có thể nghe câu hỏi như: 「袋に入れますか。」 (Bạn có muốn bỏ vào túi không?) và trả lời: 「はい、お願いします。」 (Vâng, làm ơn.). Khi hỏi đường, bạn có thể nghe: 「駅はあそこです。」 (Ga ở kia.) và đáp lại: 「ありがとう。」 (Cảm ơn.). Những kỹ năng này giúp bạn giao tiếp hiệu quả.
                  </p>
                </div>
    
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                  <thead>
                    <tr style="background-color: #F37142; color: white;">
                      <th style="padding: 10px; border: 1px solid #ddd;">Chủ đề</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Kỹ năng</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Ví dụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Mua sắm</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Nghe và trả lời</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「袋に入れますか。」</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Hỏi đường</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Hiểu và phản hồi</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「駅はあそこです。」</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Sở thích</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Trò chuyện</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「趣味はなんですか。」</td>
                    </tr>
                  </tbody>
                </table>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Nắm bắt nội dung các đoạn hội thoại ngắn
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Phản hồi phù hợp trong các tình huống giao tiếp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Tự tin làm bài thi phần nghe hiểu
                  </li>
                </ul>
    
                <div style="text-align: center; margin: 20px 0;">
                  <img src="/team2-mankai-user/assets/image/japanese-listening-n4.jpg" alt="Japanese listening N4" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <p style="color: #555; font-size: 14px; margin-top: 10px;">Hình ảnh minh họa nghe hiểu trình độ N4</p>
                </div>`,
              document: [
                {
                  id: 630,
                  name: "Nghe hiểu N4.mp3",
                  capacity: "25MB"
                },
                {
                  id: 631,
                  name: "Bài tập giao tiếp.docx",
                  capacity: "40KB"
                },
                {
                  id: 632,
                  name: "Video hướng dẫn.mp4",
                  capacity: "120MB"
                }
              ],
              discuss: {
                id: 730,
                listComment: [
                  {
                    id: 4300,
                    idUser: 37,
                    name: "Lan",
                    avatar: `/team2-mankai-user/assets/image/avatar38.jpg`,
                    content: "Hội thoại ngắn rất thực tế, giống tình huống đời thường!",
                    time: "7:00 30/4/2025",
                  },
                  {
                    id: 4301,
                    idUser: 38,
                    name: "Hùng",
                    avatar: `/team2-mankai-user/assets/image/avatar39.jpg`,
                    content: "Mong có thêm bài nghe dài hơn để luyện tập.",
                    time: "8:20 1/5/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 3300,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/_gKbUXO55B8?si=mWgl1HbNTCASg65g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 3301,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/7hsBfppYxms?si=rB4E3c1E7rSnWDxl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 3302,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nl2g6kamhUE?si=07PZKY73m-vMPRdl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 3303,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/YYoX-dWIQI8?si=15N6DI9tS-_N3C0b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ]
            },
            {
              id: 1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary: [
                { id: 3301, word: "お願い", meaning: "Yêu cầu", status: false },
                { id: 3302, word: "袋", meaning: "Túi", status: false },
                { id: 3303, word: "駅", meaning: "Ga", status: false },
                { id: 3304, word: "道", meaning: "Đường", status: false },
                { id: 3305, word: "ありがとう", meaning: "Cảm ơn", status: false },
                { id: 3306, word: "すみません", meaning: "Xin lỗi", status: false },
                { id: 3307, word: "商品", meaning: "Hàng hóa", status: false },
                { id: 3308, word: "メニュー", meaning: "Thực đơn", status: false },
                { id: 3309, word: "注文", meaning: "Gọi món", status: false },
                { id: 3310, word: "会話", meaning: "Hội thoại", status: false }
              ],
              test: [
                {
                  id: 3401,
                  questions: "袋に___か。",
                  answer: ["入れます", "ありがとう", "すみません", "商品"],
                  correctAnswer: "入れます",
                  result: "袋に入れますか。",
                  explain: "「入れます」 mang nghĩa 'bỏ vào', dùng để hỏi về việc bỏ hàng vào túi."
                },
                {
                  id: 3402,
                  questions: "駅は___です。",
                  answer: ["あそこ", "お願い", "道", "メニュー"],
                  correctAnswer: "あそこ",
                  result: "駅はあそこです。",
                  explain: "「あそこ」 có nghĩa 'ở kia', dùng để chỉ vị trí của ga."
                },
                {
                  id: 3403,
                  questions: "___、お願いします。",
                  answer: ["ありがとう", "すみません", "注文", "会話"],
                  correctAnswer: "注文",
                  result: "注文、お願いします。",
                  explain: "「注文」 mang nghĩa 'gọi món', dùng để yêu cầu gọi món ăn."
                }
              ]
            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/tiengnhat13.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `
                <h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                  語彙学習: JLPT N4レベル (Nghe hiểu và giao tiếp: Trình độ JLPT N4)
                </h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học này giúp học viên phát triển kỹ năng nghe hiểu các đoạn hội thoại ngắn và giao tiếp trong các tình huống thực tế như hỏi đường, mua hàng, hoặc trò chuyện về sở thích. Các đoạn hội thoại được thiết kế đơn giản, phù hợp với trình độ N4, kèm theo ví dụ minh họa để học viên dễ dàng áp dụng.
                </p>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Nắm bắt nội dung các đoạn hội thoại ngắn
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Phản hồi phù hợp trong các tình huống giao tiếp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Tự tin làm bài thi phần nghe hiểu
                  </li>
                </ul>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Các đoạn hội thoại ngắn về hỏi đường, mua hàng, sở thích
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Bài tập nghe và giao tiếp thực hành
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng thực tế</h4>
                  <p style="line-height: 1.6;">
                    Khi mua sắm, bạn có thể nghe: 「袋に入れますか。」 và trả lời: 「はい、お願いします。」. Khi hỏi đường, bạn có thể nghe: 「駅はあそこです。」 và đáp: 「ありがとう。」. Những câu này giúp bạn giao tiếp tự nhiên trong cuộc sống hàng ngày.
                  </p>
                </div>
    
                <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                  <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Từ vựng N4 - Bài 4: Giao tiếp thực tế</h4>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">袋 <span style="color: #F37142; font-weight: normal;">(ふくろ)</span>:</strong> Túi<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 袋に入れますか。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Bạn có muốn bỏ vào túi không?</em>
                  </p>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">駅 <span style="color: #F37142; font-weight: normal;">(えき)</span>:</strong> Ga<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 駅はあそこです。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Ga ở kia.</em>
                  </p>
                  <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                    <strong style="color: #F37142; font-size: 18px;">Mẹo học nghe hiểu N4:</strong> 
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                    Nghe các đoạn hội thoại ngắn trước khi nghe bài dài.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                    Ghi chú từ khóa để trả lời câu hỏi.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">3</span>
                    Luyện tập phản hồi nhanh trong các tình huống thực tế.
                  </p>
                  <p style="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                  </p>
                </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 3300,
                  sentence1: "袋に入れますか。",
                  sentence2: "Hàng hóa là",
                  answer: "Túi"
                },
                {
                  id: 3301,
                  sentence1: "駅はあそこです。",
                  sentence2: "Ga là",
                  answer: "Ở kia"
                },
                {
                  id: 3302,
                  sentence1: "注文、お願いします。",
                  sentence2: "Món ăn là",
                  answer: "Gọi"
                },
                {
                  id: 3303,
                  sentence1: "ありがとう。",
                  sentence2: "Lời nói là",
                  answer: "Cảm ơn"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 15,
              progress: 0,
              test: [
                {
                  id: 3300,
                  name: "Nội dung đề bài",
                  question: [
                    {
                      id: 4300,
                      special: "袋に入れますか。",
                      text: "Câu này hỏi về việc gì?",
                      select: [
                        { id: 8700, value: "Bỏ vào túi", check: true },
                        { id: 8701, value: "Mua túi", check: false },
                        { id: 8702, value: "Bán túi", check: false },
                        { id: 8703, value: "Không rõ", check: false }
                      ]
                    },
                    {
                      id: 4301,
                      special: "駅はあそこです。",
                      text: "Ga ở đâu?",
                      select: [
                        { id: 8704, value: "Ở kia", check: true },
                        { id: 8705, value: "Ở đây", check: false },
                        { id: 8706, value: "Không có", check: false },
                        { id: 8707, value: "Không rõ", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3301,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 4300,
                      special: "袋に入れますか。",
                      text: "Câu này hỏi về việc gì?",
                      list: [
                        {
                          id: 5300,
                          problem: "Hành động được hỏi là gì?",
                          select: [
                            { id: 8800, value: "Bỏ vào túi", check: true },
                            { id: 8801, value: "Mua túi", check: false },
                            { id: 8802, value: "Bán túi", check: false },
                            { id: 8803, value: "Không rõ", check: false }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 3302,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id: 4300,
                      special: "袋に入れますか。",
                      text: "......に入れますか。",
                      select: [
                        { id: 8900, value: "袋", check: true },
                        { id: 8901, value: "駅", check: false },
                        { id: 8902, value: "道", check: false },
                        { id: 8903, value: "商品", check: false }
                      ]
                    },
                    {
                      id: 4301,
                      special: "駅はあそこです。",
                      text: "......はあそこです。",
                      select: [
                        { id: 8904, value: "駅", check: true },
                        { id: 8905, value: "袋", check: false },
                        { id: 8906, value: "メニュー", check: false },
                        { id: 8907, value: "注文", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3303,
                  name: "Bài kiểm tra ghép câu",
                  question: [
                    {
                      id: 5300,
                      pairs: [
                        { left: "袋に", right: "入れますか" },
                        { left: "駅は", right: "あそこです" },
                        { left: "注文", right: "お願いします" },
                        { left: "ありがとう", right: "ございます" },
                        { left: "すみません", right: "道を教えて" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 404,
          name: "Bài 5",
          progress: 0,
          time: 50,
          detail: [
            {
              id: 1000,
              describe: `
                <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 5: Ôn tập tổng hợp N4</h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học thứ năm là bài ôn tập tổng hợp, giúp học viên củng cố kiến thức về từ vựng, ngữ pháp, đọc hiểu, và nghe hiểu N4. Học viên sẽ luyện tập các bài tập đa dạng và làm quen với các dạng câu hỏi thường gặp trong kỳ thi JLPT N4, đồng thời được hướng dẫn các mẹo làm bài hiệu quả.
                </p>
                <div style="background-color: #fff4eb; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #F37142;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Lưu ý quan trọng</h4>
                  <p style="line-height: 1.6;">
                    Hãy luyện tập đều đặn các dạng bài thi để làm quen với cấu trúc đề. Ghi nhớ các mẹo làm bài như ưu tiên câu dễ và kiểm tra kỹ đáp án trước khi nộp.
                  </p>
                </div>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Ôn tập tổng hợp:</strong> Từ vựng, ngữ pháp, đọc hiểu, nghe hiểu
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Mẹo làm bài:</strong> Cách quản lý thời gian và chọn đáp án
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Bài tập:</strong> Luyện tập đề thi thử N4
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng thực tế</h4>
                  <p style="line-height: 1.6;">
                    Khi làm bài thi, bạn có thể gặp câu hỏi về từ vựng như 「名前」 (tên) hoặc ngữ pháp như 「ます」 (lịch sự). Luyện tập đề thi thử giúp bạn làm quen với áp lực thời gian và cải thiện kỹ năng chọn đáp án nhanh.
                  </p>
                </div>
    
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                  <thead>
                    <tr style="background-color: #F37142; color: white;">
                      <th style="padding: 10px; border: 1px solid #ddd;">Phần thi</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Nội dung</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Mẹo làm bài</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Từ vựng</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Nhận diện từ và ngữ nghĩa</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Ưu tiên từ quen thuộc</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Ngữ pháp</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Chọn cấu trúc đúng</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Loại đáp án sai trước</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Nghe hiểu</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Hiểu hội thoại ngắn</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Ghi chú từ khóa</td>
                    </tr>
                  </tbody>
                </table>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Củng cố toàn bộ kiến thức N4
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Áp dụng mẹo làm bài hiệu quả
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Tự tin làm bài thi N4
                  </li>
                </ul>
    
                <div style="text-align: center; margin: 20px 0;">
                  <img src="/team2-mankai-user/assets/image/japanese-exam-n4.jpg" alt="Japanese exam N4" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <p style="color: #555; font-size: 14px; margin-top: 10px;">Hình ảnh minh họa kỳ thi JLPT N4</p>
                </div>`,
              document: [
                {
                  id: 640,
                  name: "Đề thi thử N4.pdf",
                  capacity: "400KB"
                },
                {
                  id: 641,
                  name: "Mẹo làm bài.docx",
                  capacity: "55KB"
                },
                {
                  id: 642,
                  name: "Audio ôn tập.mp3",
                  capacity: "30MB"
                }
              ],
              discuss: {
                id: 740,
                listComment: [
                  {
                    id: 4400,
                    idUser: 39,
                    name: "Nam",
                    avatar: `/team2-mankai-user/assets/image/avatar40.jpg`,
                    content: "Đề thi thử rất giống thật, giúp tôi tự tin hơn!",
                    time: "7:00 5/5/2025",
                  },
                  {
                    id: 4401,
                    idUser: 40,
                    name: "Hương",
                    avatar: `/team2-mankai-user/assets/image/avatar41.jpg`,
                    content: "Mẹo làm bài rất hữu ích, đặc biệt là cách quản lý thời gian.",
                    time: "8:15 6/5/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 3400,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/6dLBHJhldZI?si=OMoYkpM_GY_BK-ky" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 3401,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/-0px6gOLkKY?si=wysOdumb09wFy1Am" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ]
            },
            {
              id: 1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary: [
                { id: 3401, word: "試験", meaning: "Kỳ thi", status: false },
                { id: 3402, word: "準備", meaning: "Chuẩn bị", status: false },
                { id: 3403, word: "時間", meaning: "Thời gian", status: false },
                { id: 3404, word: "問題", meaning: "Câu hỏi", status: false },
                { id: 3405, word: "答え", meaning: "Đáp án", status: false },
                { id: 3406, word: "勉強", meaning: "Học", status: false },
                { id: 3407, word: "復習", meaning: "Ôn tập", status: false },
                { id: 3408, word: "合格", meaning: "Đỗ", status: false }
              ],
              test: [
                {
                  id: 3501,
                  questions: "___のために毎日勉強します。",
                  answer: ["試験", "準備", "時間", "問題"],
                  correctAnswer: "試験",
                  result: "試験のために毎日勉強します。",
                  explain: "「試験」 mang nghĩa 'kỳ thi', dùng để chỉ mục đích học tập."
                },
                {
                  id: 3502,
                  questions: "試験の___をしてください。",
                  answer: ["準備", "答え", "勉強", "復習"],
                  correctAnswer: "準備",
                  result: "試験の準備をしてください。",
                  explain: "「準備」 có nghĩa 'chuẩn bị', dùng để yêu cầu chuẩn bị cho kỳ thi."
                }
              ]
            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/tiengnhat14.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `
                <h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                  語彙学習: JLPT N4レベル (Ôn tập tổng hợp: Trình độ JLPT N4)
                </h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học này giúp học viên củng cố toàn bộ kiến thức N4, bao gồm từ vựng, ngữ pháp, đọc hiểu, và nghe hiểu. Các bài tập được thiết kế để mô phỏng đề thi JLPT N4, giúp học viên làm quen với cấu trúc đề và áp dụng mẹo làm bài hiệu quả.
                </p>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Củng cố kiến thức từ vựng, ngữ pháp, đọc, nghe N4
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Làm quen với các dạng câu hỏi thi N4
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Tự tin làm bài thi N4
                  </li>
                </ul>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Ôn tập các chủ đề chính của N4
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Bài tập mô phỏng đề thi và mẹo làm bài
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng thực tế</h4>
                  <p style="line-height: 1.6;">
                    Khi làm bài thi, bạn cần chú ý đến từ vựng như 「試験」 (kỳ thi) hoặc 「準備」 (chuẩn bị). Luyện tập đề thi thử giúp bạn quản lý thời gian và chọn đáp án chính xác hơn.
                  </p>
                </div>
    
                <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                  <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Từ vựng N4 - Bài 5: Ôn tập</h4>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">試験 <span style="color: #F37142; font-weight: normal;">(しけん)</span>:</strong> Kỳ thi<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 試験のために毎日勉強します。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Tôi học hàng ngày để chuẩn bị cho kỳ thi.</em>
                  </p>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">準備 <span style="color: #F37142; font-weight: normal;">(じゅんび)</span>:</strong> Chuẩn bị<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 試験の準備をしてください。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Hãy chuẩn bị cho kỳ thi.</em>
                  </p>
                  <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                    <strong style="color: #F37142; font-size: 18px;">Mẹo làm bài thi N4:</strong> 
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                    Làm câu dễ trước, để dành câu khó sau.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                    Phân bổ thời gian hợp lý cho từng phần thi.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">3</span>
                    Kiểm tra kỹ đáp án trước khi nộp bài.
                  </p>
                  <p style="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                  </p>
                </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 3400,
                  sentence1: "試験のために毎日勉強します。",
                  sentence2: "Học là",
                  answer: "Kỳ thi"
                },
                {
                  id: 3401,
                  sentence1: "試験の準備をしてください。",
                  sentence2: "Chuẩn bị là",
                  answer: "Thi"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 18,
              progress: 0,
              test: [
                {
                  id: 3400,
                  name: "Nội dung đề bài",
                  question: [
                    {
                      id: 4400,
                      special: "試験のために毎日勉強します。",
                      text: "Mục đích của việc học là gì?",
                      select: [
                        { id: 9000, value: "Kỳ thi", check: true },
                        { id: 9001, value: "Sở thích", check: false },
                        { id: 9002, value: "Công việc", check: false },
                        { id: 9003, value: "Không rõ", check: false }
                      ]
                    },
                    {
                      id: 4401,
                      special: "試験の準備をしてください。",
                      text: "Câu này yêu cầu chuẩn bị cho gì?",
                      select: [
                        { id: 9004, value: "Kỳ thi", check: true },
                        { id: 9005, value: "Du lịch", check: false },
                        { id: 9006, value: "Cuộc họp", check: false },
                        { id: 9007, value: "Không rõ", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3401,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 4400,
                      special: "試験のために毎日勉強します。",
                      text: "Mục đích của việc học là gì?",
                      list: [
                        {
                          id: 5400,
                          problem: "Vì sao học hàng ngày?",
                          select: [
                            { id: 9100, value: "Kỳ thi", check: true },
                            { id: 9101, value: "Sở thích", check: false },
                            { id: 9102, value: "Công việc", check: false },
                            { id: 9103, value: "Không rõ", check: false }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 3402,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id: 4400,
                      special: "試験のために毎日勉強します。",
                      text: "......のために毎日勉強します。",
                      select: [
                        { id: 9200, value: "試験", check: true },
                        { id: 9201, value: "準備", check: false },
                        { id: 9202, value: "時間", check: false },
                        { id: 9203, value: "問題", check: false }
                      ]
                    },
                    {
                      id: 4401,
                      special: "試験の準備をしてください。",
                      text: "試験の......をしてください。",
                      select: [
                        { id: 9204, value: "準備", check: true },
                        { id: 9205, value: "答え", check: false },
                        { id: 9206, value: "勉強", check: false },
                        { id: 9207, value: "復習", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3403,
                  name: "Bài kiểm tra ghép câu",
                  question: [
                    {
                      id: 5400,
                      pairs: [
                        { left: "試験の", right: "準備をする" },
                        { left: "毎日", right: "勉強します" },
                        { left: "問題を", right: "解きます" },
                        { left: "答えを", right: "確認する" },
                        { left: "合格を", right: "目指す" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 405,
          name: "Bài 6",
          progress: 0,
          time: 40,
          detail: [
            {
              id: 1000,
              describe: `
                <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 6: Ngữ pháp nâng cao và viết câu N4</h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học thứ sáu của lộ trình JLPT N4 tập trung vào các cấu trúc ngữ pháp nâng cao hơn và kỹ năng viết câu hoàn chỉnh. Học viên sẽ học cách sử dụng các cấu trúc ngữ pháp N4 để diễn đạt ý tưởng phức tạp hơn, đồng thời luyện tập viết các câu văn ngắn trong các tình huống như viết thư, mô tả sở thích, hoặc giải thích lý do.
                </p>
                <div style="background-color: #fff4eb; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #F37142;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Lưu ý quan trọng</h4>
                  <p style="line-height: 1.6;">
                    Khi viết câu, hãy chú ý đến cấu trúc ngữ pháp và sử dụng các từ nối phù hợp. Luyện tập viết các câu ngắn trước, sau đó chuyển sang các đoạn văn dài hơn để cải thiện kỹ năng viết.
                  </p>
                </div>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Ngữ pháp N4:</strong> 8 cấu trúc ngữ pháp nâng cao thường gặp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Viết câu:</strong> Luyện tập viết câu và đoạn văn ngắn
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Bài tập:</strong> Viết câu sử dụng ngữ pháp và sửa lỗi sai
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng thực tế</h4>
                  <p style="line-height: 1.6;">
                    Khi viết thư cho bạn, bạn có thể dùng: 「週末に友達と映画を見ました。」 (Cuối tuần tôi đã xem phim với bạn.). Khi giải thích lý do, bạn có thể viết: 「忙しいから、昨日勉強しませんでした。」 (Vì bận nên hôm qua tôi không học.). Những câu này giúp bạn diễn đạt ý tưởng rõ ràng.
                  </p>
                </div>
    
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                  <thead>
                    <tr style="background-color: #F37142; color: white;">
                      <th style="padding: 10px; border: 1px solid #ddd;">Ngữ pháp</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Ý nghĩa</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Ví dụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">から</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Vì</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">忙しいから、勉強しませんでした。</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">たら</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Nếu</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">時間があったら、旅行に行きます。</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">ながら</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">Trong khi</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">音楽を聞きながら勉強します。</td>
                    </tr>
                  </tbody>
                </table>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Sử dụng ngữ pháp N4 để viết câu hoàn chỉnh
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Viết đoạn văn ngắn trong các tình huống thực tế
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Nhận diện và sửa lỗi ngữ pháp trong bài thi
                  </li>
                </ul>
    
                <div style="text-align: center; margin: 20px 0;">
                  <img src="/team2-mankai-user/assets/image/japanese-writing-n4.jpg" alt="Japanese writing N4" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <p style="color: #555; font-size: 14px; margin-top: 10px;">Hình ảnh minh họa kỹ năng viết trình độ N4</p>
                </div>`,
              document: [
                {
                  id: 650,
                  name: "Ngữ pháp N4 nâng cao.pdf",
                  capacity: "370KB"
                },
                {
                  id: 651,
                  name: "Bài tập viết.docx",
                  capacity: "45KB"
                },
                {
                  id: 652,
                  name: "Video hướng dẫn.mp4",
                  capacity: "115MB"
                }
              ],
              discuss: {
                id: 750,
                listComment: [
                  {
                    id: 4500,
                    idUser: 41,
                    name: "Hòa",
                    avatar: `/team2-mankai-user/assets/image/avatar42.jpg`,
                    content: "Viết câu rất thú vị, giúp tôi cải thiện cách diễn đạt!",
                    time: "7:00 10/5/2025",
                  },
                  {
                    id: 4501,
                    idUser: 42,
                    name: "Thảo",
                    avatar: `/team2-mankai-user/assets/image/avatar43.jpg`,
                    content: "Cần thêm ví dụ để hiểu rõ hơn về cách dùng 'たら'.",
                    time: "8:30 11/5/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 3500,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/62yK5MjR9_s?si=POLJh1CC1f5pLxu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ]
            },
            {
              id: 1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary: [
                { id: 3501, word: "から", meaning: "Vì", status: false },
                { id: 3502, word: "たら", meaning: "Nếu", status: false },
                { id: 3503, word: "ながら", meaning: "Trong khi", status: false },
                { id: 3504, word: "ても", meaning: "Dù", status: false },
                { id: 3505, word: "つもり", meaning: "Dự định", status: false },
                { id: 3506, word: "ように", meaning: "Để", status: false },
                { id: 3507, word: "らしい", meaning: "Hình như", status: false },
                { id: 3508, word: "すぎる", meaning: "Quá", status: false },
                { id: 3509, word: "やすい", meaning: "Dễ", status: false },
                { id: 3510, word: "にくい", meaning: "Khó", status: false }
              ],
              test: [
                {
                  id: 3601,
                  questions: "忙しい___、勉強しませんでした。",
                  answer: ["から", "たら", "ながら", "ても"],
                  correctAnswer: "から",
                  result: "忙しいから、勉強しませんでした。",
                  explain: "「から」 mang nghĩa 'vì', dùng để giải thích lý do."
                },
                {
                  id: 3602,
                  questions: "時間があった___、旅行に行きます。",
                  answer: ["たら", "つもり", "ように", "らしい"],
                  correctAnswer: "たら",
                  result: "時間があったら、旅行に行きます。",
                  explain: "「たら」 có nghĩa 'nếu', dùng để diễn đạt điều kiện."
                },
                {
                  id: 3603,
                  questions: "音楽を聞き___勉強します。",
                  answer: ["ながら", "すぎる", "やすい", "にくい"],
                  correctAnswer: "ながら",
                  result: "音楽を聞きながら勉強します。",
                  explain: "「ながら」 mang nghĩa 'trong khi', dùng để chỉ hai hành động diễn ra đồng thời."
                }
              ]
            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/tiengnhat15.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `
                <h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                  語彙学習: JLPT N4レベル (Ngữ pháp nâng cao và viết câu: Trình độ JLPT N4)
                </h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học này giúp học viên nắm vững các cấu trúc ngữ pháp N4 nâng cao và áp dụng chúng để viết câu hoàn chỉnh. Các cấu trúc ngữ pháp được giải thích chi tiết với ví dụ minh họa, giúp học viên dễ dàng sử dụng trong các tình huống như viết thư, mô tả sở thích, hoặc giải thích lý do. Bài học cũng cung cấp bài tập thực hành để củng cố kỹ năng viết.
                </p>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Nắm vững 8 cấu trúc ngữ pháp N4 nâng cao
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Viết câu và đoạn văn ngắn sử dụng ngữ pháp
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Nhận diện và sửa lỗi ngữ pháp trong bài thi
                  </li>
                </ul>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Các cấu trúc ngữ pháp N4 nâng cao trong viết câu
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Bài tập viết và sửa lỗi ngữ pháp
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng thực tế</h4>
                  <p style="line-height: 1.6;">
                    Khi viết thư, bạn có thể dùng: 「週末に友達と映画を見ました。」 để mô tả hoạt động. Khi giải thích, bạn có thể viết: 「忙しいから、昨日勉強しませんでした。」 để nêu lý do. Những câu này giúp bạn diễn đạt ý tưởng rõ ràng và tự nhiên.
                  </p>
                </div>
    
                <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                  <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Ngữ pháp N4 - Bài 6: Viết câu nâng cao</h4>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">から <span style="color: #F37142; font-weight: normal;">(から)</span>:</strong> Vì<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 忙しいから、勉強しませんでした。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Vì bận nên tôi không học.</em>
                  </p>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">たら <span style="color: #F37142; font-weight: normal;">(たら)</span>:</strong> Nếu<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 時間があったら、旅行に行きます。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Nếu có thời gian, tôi sẽ đi du lịch.</em>
                  </p>
                  <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                    <strong style="color: #F37142; font-size: 18px;">Mẹo học ngữ pháp N4:</strong> 
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                    Viết câu ví dụ để hiểu rõ cách dùng ngữ pháp.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                    Luyện tập viết đoạn văn ngắn để áp dụng nhiều cấu trúc cùng lúc.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">3</span>
                    Kiểm tra lỗi ngữ pháp trong bài viết của mình.
                  </p>
                  <p style="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                  </p>
                </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 3500,
                  sentence1: "忙しいから、勉強しませんでした。",
                  sentence2: "Lý do là",
                  answer: "Bận"
                },
                {
                  id: 3501,
                  sentence1: "時間があったら、旅行に行きます。",
                  sentence2: "Hành động là",
                  answer: "Du lịch"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 12,
              progress: 0,
              test: [
                {
                  id: 3500,
                  name: "Nội dung đề bài",
                  question: [
                    {
                      id: 4500,
                      special: "忙しいから、勉強しませんでした。",
                      text: "Lý do không học là gì?",
                      select: [
                        { id: 9300, value: "Bận", check: true },
                        { id: 9301, value: "Mệt", check: false },
                        { id: 9302, value: "Không thích", check: false },
                        { id: 9303, value: "Không rõ", check: false }
                      ]
                    },
                    {
                      id: 4501,
                      special: "時間があったら、旅行に行きます。",
                      text: "Nếu có thời gian, người này sẽ làm gì?",
                      select: [
                        { id: 9304, value: "Du lịch", check: true },
                        { id: 9305, value: "Học bài", check: false },
                        { id: 9306, value: "Làm việc", check: false },
                        { id: 9307, value: "Không rõ", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3501,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 4500,
                      special: "忙しいから、勉強しませんでした。",
                      text: "Lý do không học là gì?",
                      list: [
                        {
                          id: 5500,
                          problem: "Tại sao không học?",
                          select: [
                            { id: 9400, value: "Bận", check: true },
                            { id: 9401, value: "Mệt", check: false },
                            { id: 9402, value: "Không thích", check: false },
                            { id: 9403, value: "Không rõ", check: false }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 3502,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id: 4500,
                      special: "忙しいから、勉強しませんでした。",
                      text: "忙しい......、勉強しませんでした。",
                      select: [
                        { id: 9500, value: "から", check: true },
                        { id: 9501, value: "たら", check: false },
                        { id: 9502, value: "ながら", check: false },
                        { id: 9503, value: "ても", check: false }
                      ]
                    },
                    {
                      id: 4501,
                      special: "時間があったら、旅行に行きます。",
                      text: "時間があった......、旅行に行きます。",
                      select: [
                        { id: 9504, value: "たら", check: true },
                        { id: 9505, value: "つもり", check: false },
                        { id: 9506, value: "ように", check: false },
                        { id: 9507, value: "らしい", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3503,
                  name: "Bài kiểm tra ghép câu",
                  question: [
                    {
                      id: 5500,
                      pairs: [
                        { left: "忙しいから", right: "勉強しない" },
                        { left: "時間があったら", right: "旅行に行く" },
                        { left: "音楽を聞きながら", right: "勉強する" },
                        { left: "雨でも", right: "出かける" },
                        { left: "試験に合格するように", right: "頑張る" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 406,
          name: "Bài 7",
          progress: 0,
          time: 45,
          detail: [
            {
              id: 1000,
              describe: `
                <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 7: Từ vựng và giao tiếp thực hành N4</h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học thứ bảy của lộ trình JLPT N4 tập trung vào việc mở rộng vốn từ vựng và thực hành giao tiếp trong các tình huống đa dạng như đi du lịch, đặt vé, hoặc trò chuyện về kế hoạch. Học viên sẽ học cách sử dụng từ vựng mới trong các ngữ cảnh thực tế và luyện tập các mẫu câu giao tiếp để tự tin hơn khi sử dụng tiếng Nhật.
                </p>
                <div style="background-color: #fff4eb; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #F37142;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Lưu ý quan trọng</h4>
                  <p style="line-height: 1.6;">
                    Hãy luyện tập nói các câu giao tiếp với bạn bè hoặc giáo viên để cải thiện phát âm và sự tự tin. Ghi nhớ từ vựng theo ngữ cảnh để áp dụng dễ dàng hơn.
                  </p>
                </div>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Từ vựng N4:</strong> 15 từ vựng liên quan đến du lịch, đặt vé, kế hoạch
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Giao tiếp:</strong> Luyện tập các mẫu câu trong các tình huống thực tế
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Bài tập:</strong> Thực hành hội thoại và viết câu sử dụng từ vựng
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng thực tế</h4>
                  <p style="line-height: 1.6;">
                    Khi đi du lịch, bạn có thể nói: 「このチケットを予約したいです。」 (Tôi muốn đặt vé này.). Khi trò chuyện về kế hoạch, bạn có thể dùng: 「来週、友達と旅行に行きます。」 (Tuần sau, tôi sẽ đi du lịch với bạn.). Những câu này giúp bạn giao tiếp tự nhiên trong các tình huống thực tế.
                  </p>
                </div>
    
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                  <thead>
                    <tr style="background-color: #F37142; color: white;">
                      <th style="padding: 10px; border: 1px solid #ddd;">Chủ đề</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Số từ vựng</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Ví dụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Du lịch</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">5</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「旅行」 (Du lịch)</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Đặt vé</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">5</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「チケット」 (Vé)</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Kế hoạch</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">5</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「予定」 (Kế hoạch)</td>
                    </tr>
                  </tbody>
                </table>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Sử dụng từ vựng N4 trong các tình huống du lịch và kế hoạch
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Giao tiếp tự tin trong các ngữ cảnh thực tế
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Tự tin làm bài thi phần từ vựng và giao tiếp
                  </li>
                </ul>
    
                <div style="text-align: center; margin: 20px 0;">
                  <img src="/team2-mankai-user/assets/image/japanese-travel-n4.jpg" alt="Japanese travel N4" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <p style="color: #555; font-size: 14px; margin-top: 10px;">Hình ảnh minh họa giao tiếp khi du lịch trình độ N4</p>
                </div>`,
              document: [
                {
                  id: 660,
                  name: "Từ vựng N4 du lịch.pdf",
                  capacity: "340KB"
                },
                {
                  id: 661,
                  name: "Bài tập giao tiếp.docx",
                  capacity: "50KB"
                },
                {
                  id: 662,
                  name: "Video hướng dẫn.mp4",
                  capacity: "110MB"
                }
              ],
              discuss: {
                id: 760,
                listComment: [
                  {
                    id: 4600,
                    idUser: 43,
                    name: "Khoa",
                    avatar: `/team2-mankai-user/assets/image/avatar44.jpg`,
                    content: "Từ vựng về du lịch rất hữu ích, dễ áp dụng!",
                    time: "7:00 15/5/2025",
                  },
                  {
                    id: 4601,
                    idUser: 44,
                    name: "Linh",
                    avatar: `/team2-mankai-user/assets/image/avatar45.jpg`,
                    content: "Mong có thêm bài tập hội thoại dài hơn.",
                    time: "8:30 16/5/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 3600,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/D7wUN8u51Vg?si=hogWGZHzj6J4rBTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 3601,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/NEt2L1J72m8?si=HwVgo7gWU3tIo52-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 3602,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/grcEjxz1Hfk?si=-WovxhI0DVD_4rLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 3603,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/edBasBCI9Kw?si=NzYghJJ4MVBn07Jg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ]
            },
            {
              id: 1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary: [
                { id: 3601, word: "旅行", meaning: "Du lịch", status: false },
                { id: 3602, word: "チケット", meaning: "Vé", status: false },
                { id: 3603, word: "予約", meaning: "Đặt chỗ", status: false },
                { id: 3604, word: "予定", meaning: "Kế hoạch", status: false },
                { id: 3605, word: "空港", meaning: "Sân bay", status: false },
                { id: 3606, word: "ホテル", meaning: "Khách sạn", status: false },
                { id: 3607, word: "観光", meaning: "Tham quan", status: false },
                { id: 3608, word: "地図", meaning: "Bản đồ", status: false },
                { id: 3609, word: "来週", meaning: "Tuần sau", status: false },
                { id: 3610, word: "一緒", meaning: "Cùng", status: false },
                { id: 3611, word: "行く", meaning: "Đi", status: false },
                { id: 3612, word: "帰る", meaning: "Về", status: false },
                { id: 3613, word: "楽しい", meaning: "Vui", status: false },
                { id: 3614, word: "疲れる", meaning: "Mệt", status: false },
                { id: 3615, word: "写真", meaning: "Ảnh", status: false }
              ],
              test: [
                {
                  id: 3701,
                  questions: "この___を予約したいです。",
                  answer: ["チケット", "予定", "空港", "ホテル"],
                  correctAnswer: "チケット",
                  result: "このチケットを予約したいです。",
                  explain: "「チケット」 mang nghĩa 'vé', dùng để yêu cầu đặt vé."
                },
                {
                  id: 3702,
                  questions: "来週、友達と___に行きます。",
                  answer: ["旅行", "予約", "地図", "一緒"],
                  correctAnswer: "旅行",
                  result: "来週、友達と旅行に行きます。",
                  explain: "「旅行」 có nghĩa 'du lịch', dùng để nói về kế hoạch đi du lịch."
                },
                {
                  id: 3703,
                  questions: "旅行はとても___です。",
                  answer: ["楽しい", "疲れる", "写真", "行く"],
                  correctAnswer: "楽しい",
                  result: "旅行はとても楽しいです。",
                  explain: "「楽しい」 mang nghĩa 'vui', dùng để mô tả trải nghiệm du lịch."
                }
              ]
            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/tiengnhat16.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `
                <h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                  語彙学習: JLPT N4レベル (Từ vựng và giao tiếp thực hành: Trình độ JLPT N4)
                </h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học này giúp học viên mở rộng vốn từ vựng và thực hành giao tiếp trong các tình huống như đi du lịch, đặt vé, hoặc trò chuyện về kế hoạch. Các từ vựng được giải thích chi tiết với ví dụ minh họa, giúp học viên dễ dàng áp dụng trong các ngữ cảnh thực tế. Bài học cũng cung cấp bài tập thực hành để củng cố kỹ năng giao tiếp.
                </p>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Nắm vững 15 từ vựng N4 liên quan đến du lịch, đặt vé, kế hoạch
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Giao tiếp tự tin trong các tình huống thực tế
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Tự tin làm bài thi phần từ vựng và giao tiếp
                  </li>
                </ul>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Từ vựng N4 trong các tình huống du lịch, đặt vé, kế hoạch
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Bài tập thực hành hội thoại và viết câu
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng thực tế</h4>
                  <p style="line-height: 1.6;">
                    Khi đặt vé, bạn có thể nói: 「このチケットを予約したいです。」 để yêu cầu đặt chỗ. Khi trò chuyện, bạn có thể dùng: 「来週、友達と旅行に行きます。」 để chia sẻ kế hoạch. Những câu này giúp bạn giao tiếp hiệu quả và tự nhiên.
                  </p>
                </div>
    
                <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                  <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Từ vựng N4 - Bài 7: Du lịch và kế hoạch</h4>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">旅行 <span style="color: #F37142; font-weight: normal;">(りょこう)</span>:</strong> Du lịch<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: 来週、友達と旅行に行きます。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Tuần sau, tôi sẽ đi du lịch với bạn.</em>
                  </p>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">チケット <span style="color: #F37142; font-weight: normal;">(ちけっと)</span>:</strong> Vé<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: このチケットを予約したいです。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Tôi muốn đặt vé này.</em>
                  </p>
                  <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                    <strong style="color: #F37142; font-size: 18px;">Mẹo học từ vựng N4:</strong> 
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                    Tạo flashcard với từ vựng và ví dụ câu.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                    Luyện nói các câu giao tiếp với bạn bè.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">3</span>
                    Học từ vựng theo ngữ cảnh để ghi nhớ lâu hơn.
                  </p>
                  <p style="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                  </p>
                </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 3600,
                  sentence1: "来週、友達と旅行に行きます。",
                  sentence2: "Kế hoạch là",
                  answer: "Du lịch"
                },
                {
                  id: 3601,
                  sentence1: "このチケットを予約したいです。",
                  sentence2: "Vé là",
                  answer: "Đặt"
                },
                {
                  id: 3602,
                  sentence1: "旅行はとても楽しいです。",
                  sentence2: "Du lịch là",
                  answer: "Vui"
                },
                {
                  id: 3603,
                  sentence1: "空港はどこですか。",
                  sentence2: "Sân bay là",
                  answer: "Đâu"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 15,
              progress: 0,
              test: [
                {
                  id: 3600,
                  name: "Nội dung đề bài",
                  question: [
                    {
                      id: 4600,
                      special: "来週、友達と旅行に行きます。",
                      text: "Kế hoạch tuần sau là gì?",
                      select: [
                        { id: 9600, value: "Du lịch", check: true },
                        { id: 9601, value: "Học bài", check: false },
                        { id: 9602, value: "Làm việc", check: false },
                        { id: 9603, value: "Không rõ", check: false }
                      ]
                    },
                    {
                      id: 4601,
                      special: "このチケットを予約したいです。",
                      text: "Câu này yêu cầu gì?",
                      select: [
                        { id: 9604, value: "Đặt vé", check: true },
                        { id: 9605, value: "Mua vé", check: false },
                        { id: 9606, value: "Hủy vé", check: false },
                        { id: 9607, value: "Không rõ", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3601,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 4600,
                      special: "来週、友達と旅行に行きます。",
                      text: "Kế hoạch tuần sau là gì?",
                      list: [
                        {
                          id: 5600,
                          problem: "Kế hoạch là gì?",
                          select: [
                            { id: 9700, value: "Du lịch", check: true },
                            { id: 9701, value: "Học bài", check: false },
                            { id: 9702, value: "Làm việc", check: false },
                            { id: 9703, value: "Không rõ", check: false }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 3602,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id: 4600,
                      special: "来週、友達と旅行に行きます。",
                      text: "来週、友達と......に行きます。",
                      select: [
                        { id: 9800, value: "旅行", check: true },
                        { id: 9801, value: "予約", check: false },
                        { id: 9802, value: "地図", check: false },
                        { id: 9803, value: "一緒", check: false }
                      ]
                    },
                    {
                      id: 4601,
                      special: "このチケットを予約したいです。",
                      text: "この......を予約したいです。",
                      select: [
                        { id: 9804, value: "チケット", check: true },
                        { id: 9805, value: "予定", check: false },
                        { id: 9806, value: "空港", check: false },
                        { id: 9807, value: "ホテル", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3603,
                  name: "Bài kiểm tra ghép câu",
                  question: [
                    {
                      id: 5600,
                      pairs: [
                        { left: "来週、友達と", right: "旅行に行く" },
                        { left: "このチケットを", right: "予約したい" },
                        { left: "旅行はとても", right: "楽しいです" },
                        { left: "空港は", right: "どこですか" },
                        { left: "一緒に", right: "観光する" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 16,
      name: "Tiếng Nhật N5",
      image: "/team2-mankai-user/assets/image/image-course.png",
      progress: 0,
      lessons: [
        {
          id: 500,
          name: "Bài 1",
          progress: 0,
          time: 30,
          detail: [
            {
              id: 1000,
              describe: `
                <h3 style="color: #F37142; font-size: 24px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 15px;">Bài 1: Từ vựng và giao tiếp cơ bản N5</h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học đầu tiên của lộ trình JLPT N5 tập trung vào từ vựng cơ bản và các mẫu câu giao tiếp đơn giản nhất, như chào hỏi, giới thiệu bản thân, và sử dụng số đếm. Đây là bước khởi đầu để học viên làm quen với tiếng Nhật, giúp xây dựng nền tảng vững chắc cho việc học tiếp theo.
                </p>
                <div style="background-color: #fff4eb; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #F37142;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Lưu ý quan trọng</h4>
                  <p style="line-height: 1.6;">
                    Hãy luyện tập phát âm từ vựng và nói các câu chào hỏi hàng ngày. Sử dụng flashcard hoặc ghi âm giọng nói của bạn để kiểm tra phát âm và ghi nhớ từ vựng lâu hơn.
                  </p>
                </div>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Nội dung bài học</h4>
                <ul style="list-style-type: none; padding-left: 20px; margin-bottom: 15px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Từ vựng N5:</strong> 12 từ vựng cơ bản về chào hỏi, giới thiệu, số đếm
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Giao tiếp:</strong> Các mẫu câu chào hỏi và giới thiệu bản thân
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    <strong>Bài tập:</strong> Luyện tập phát âm và viết câu cơ bản
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng thực tế</h4>
                  <p style="line-height: 1.6;">
                    Khi gặp người mới, bạn có thể nói: 「こんにちは。」 (Xin chào.) hoặc 「はじめまして。」 (Rất vui được gặp.). Để giới thiệu bản thân, bạn có thể dùng: 「わたしはたなかです。」 (Tôi là Tanaka.). Những câu này là nền tảng để bắt đầu giao tiếp tiếng Nhật.
                  </p>
                </div>
    
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                  <thead>
                    <tr style="background-color: #F37142; color: white;">
                      <th style="padding: 10px; border: 1px solid #ddd;">Chủ đề</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Số từ vựng</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Ví dụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Chào hỏi</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">4</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「こんにちは」 (Xin chào)</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Giới thiệu</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">4</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「わたし」 (Tôi)</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px; border: 1px solid #ddd;">Số đếm</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">4</td>
                      <td style="padding: 10px; border: 1px solid #ddd;">「いち」 (Một)</td>
                    </tr>
                  </tbody>
                </table>
    
                <h4 style="color: #444; font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #F37142; padding-left: 10px;">Sau bài học này, học viên sẽ:</h4>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Sử dụng từ vựng N5 để chào hỏi và giới thiệu
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Phát âm đúng các câu giao tiếp cơ bản
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">✓</span>
                    Tự tin làm bài thi phần từ vựng N5
                  </li>
                </ul>
    
                <div style="text-align: center; margin: 20px 0;">
                  <img src="/team2-mankai-user/assets/image/japanese-greeting-n5.jpg" alt="Japanese greeting N5" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                  <p style="color: #555; font-size: 14px; margin-top: 10px;">Hình ảnh minh họa giao tiếp cơ bản trình độ N5</p>
                </div>`,
              document: [
                {
                  id: 670,
                  name: "Từ vựng N5.pdf",
                  capacity: "280KB"
                },
                {
                  id: 671,
                  name: "Bài tập giao tiếp.docx",
                  capacity: "30KB"
                },
                {
                  id: 672,
                  name: "Video hướng dẫn.mp4",
                  capacity: "80MB"
                }
              ],
              discuss: {
                id: 770,
                listComment: [
                  {
                    id: 4700,
                    idUser: 45,
                    name: "Minh",
                    avatar: `/team2-mankai-user/assets/image/avatar46.jpg`,
                    content: "Từ vựng dễ nhớ, rất phù hợp cho người mới bắt đầu!",
                    time: "7:00 20/5/2025",
                  },
                  {
                    id: 4701,
                    idUser: 46,
                    name: "Ngọc",
                    avatar: `/team2-mankai-user/assets/image/avatar47.jpg`,
                    content: "Cần thêm bài tập phát âm để luyện nói.",
                    time: "8:30 21/5/2025",
                  }
                ]
              }
            },
            {
              id: 1001,
              name: "Video",
              progress: 0,
              videos: [
                {
                  id: 3700,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/wWzHTRePd8c?si=wPSb1uhlNYd5CcT7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                },
                {
                  id: 3701,
                  status: false,
                  link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/3urdRO7cuaI?si=PX3rh3lMVMCHALm2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                }
              ]
            },
            {
              id: 1002,
              name: "Flash Card",
              progress1: 0,
              progress2: 0,
              progress3: 0,
              progress: 0,
              vocabulary: [
                { id: 3701, word: "こんにちは", meaning: "Xin chào", status: false },
                { id: 3702, word: "はじめまして", meaning: "Rất vui được gặp", status: false },
                { id: 3703, word: "わたし", meaning: "Tôi", status: false },
                { id: 3704, word: "なまえ", meaning: "Tên", status: false },
                { id: 3705, word: "です", meaning: "Là", status: false },
                { id: 3706, word: "ありがとう", meaning: "Cảm ơn", status: false },
                { id: 3707, word: "すみません", meaning: "Xin lỗi", status: false },
                { id: 3708, word: "いち", meaning: "Một", status: false },
                { id: 3709, word: "に", meaning: "Hai", status: false },
                { id: 3710, word: "さん", meaning: "Ba", status: false },
                { id: 3711, word: "よん", meaning: "Bốn", status: false },
                { id: 3712, word: "ご", meaning: "Năm", status: false }
              ],
              test: [
                {
                  id: 3801,
                  questions: "___、たなかです。",
                  answer: ["わたし", "こんにちは", "はじめまして", "ありがとう"],
                  correctAnswer: "わたし",
                  result: "わたし、たなかです。",
                  explain: "「わたし」 mang nghĩa 'tôi', dùng để giới thiệu bản thân."
                },
                {
                  id: 3802,
                  questions: "___、よろしく。",
                  answer: ["はじめまして", "すみません", "いち", "です"],
                  correctAnswer: "はじめまして",
                  result: "はじめまして、よろしく。",
                  explain: "「はじめまして」 có nghĩa 'rất vui được gặp', dùng khi gặp lần đầu."
                },
                {
                  id: 3803,
                  questions: "1は___です。",
                  answer: ["いち", "に", "さん", "よん"],
                  correctAnswer: "いち",
                  result: "1はいちです。",
                  explain: "「いち」 mang nghĩa 'một', dùng để đếm số."
                }
              ]
            },
            {
              id: 1003,
              name: "Slide / PDF",
              status: false,
              slides: `/team2-mankai-user/assets/pdf/tiengnhat17.pdf`
            },
            {
              id: 1004,
              name: "Text",
              status: false,
              content: `
                <h3 style="color: #F37142; font-size: 28px; border-bottom: 2px solid #F37142; padding-bottom: 10px; margin-bottom: 20px;">
                  語彙学習: JLPT N5レベル (Từ vựng và giao tiếp cơ bản: Trình độ JLPT N5)
                </h3>
                <p style="margin-bottom: 15px; line-height: 1.6;">
                  Bài học này là bước khởi đầu để học viên làm quen với tiếng Nhật, tập trung vào các từ vựng và mẫu câu giao tiếp cơ bản nhất như chào hỏi, giới thiệu bản thân, và số đếm. Mỗi từ vựng được giải thích chi tiết với ví dụ minh họa, giúp học viên dễ dàng áp dụng trong các tình huống thực tế.
                </p>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">1. Mục tiêu</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Nắm vững 12 từ vựng N5 cơ bản
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Sử dụng các mẫu câu chào hỏi và giới thiệu
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Phát âm đúng và tự tin giao tiếp cơ bản
                  </li>
                </ul>
    
                <p><h3 style="color: #333; background-color: #f5f5f5; padding: 10px; border-left: 4px solid #F37142;">2. Mô tả</h3></p>
                <ul style="list-style-type: none; padding-left: 20px;">
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Từ vựng về chào hỏi, giới thiệu, số đếm
                  </li>
                  <li style="position: relative; padding-left: 25px; margin-bottom: 10px;">
                    <span style="position: absolute; left: 0; color: #F37142;">•</span>
                    Bài tập phát âm và viết câu cơ bản
                  </li>
                </ul>
    
                <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                  <h4 style="color: #F37142; font-size: 18px; margin-bottom: 10px;">Ứng dụng thực tế</h4>
                  <p style="line-height: 1.6;">
                    Khi gặp người Nhật, bạn có thể nói: 「こんにちは。」 để chào hỏi hoặc 「わたしはたなかです。」 để giới thiệu bản thân. Khi đếm số, bạn có thể dùng: 「いち、に、さん。」 để đếm từ 1 đến 3. Những câu này giúp bạn giao tiếp cơ bản một cách tự nhiên.
                  </p>
                </div>
    
                <div class="box" style="background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); padding: 25px; margin: 20px 0;">
                  <h4 style="color: #F37142; border-bottom: 1px solid #eee; padding-bottom: 15px; font-size: 22px;">Từ vựng N5 - Bài 1: Chào hỏi và giới thiệu</h4>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">こんにちは <span style="color: #F37142; font-weight: normal;">(こんにちは)</span>:</strong> Xin chào<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: こんにちは、元気ですか。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Xin chào, bạn khỏe không?</em>
                  </p>
                  <p style="margin-bottom: 18px; padding: 10px; background-color: #f9f9f9; border-radius: 8px;">
                    <strong style="color: #333; font-size: 18px;">わたし <span style="color: #F37142; font-weight: normal;">(わたし)</span>:</strong> Tôi<br>
                    <em style="color: #555; display: block; margin-top: 8px; padding-left: 15px; border-left: 3px solid #ddd;">例文: わたしはたなかです。</em><br>
                    <em style="color: #777; display: block; padding-left: 15px;">Dịch: Tôi là Tanaka.</em>
                  </p>
                  <p style="padding: 12px; background-color: #fff4eb; border-radius: 8px; margin-top: 25px; border-left: 4px solid #F37142;">
                    <strong style="color: #F37142; font-size: 18px;">Mẹo học từ vựng N5:</strong> 
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">1</span>
                    Luyện nói các câu chào hỏi trước gương để tự tin hơn.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">2</span>
                    Sử dụng flashcard để ghi nhớ từ vựng và phát âm.
                  </p>
                  <p style="margin: 10px 0; padding-left: 20px;">
                    <span style="display: inline-block; width: 24px; height: 24px; line-height: 24px; text-align: center; background-color: #F37142; color: white; border-radius: 50%; margin-right: 10px;">3</span>
                    Ghi âm giọng nói của bạn để kiểm tra phát âm.
                  </p>
                  <p style="margin-top: 25px; padding: 15px; border-top: 1px solid #eee; font-weight: bold;">
                    <strong style="color: #333;">Liên hệ:</strong> <a href="mailto:tutor@mankai.jp" style="color: #F37142; text-decoration: none;">tutor@mankai.jp</a>
                  </p>
                </div>`,
            },
            {
              id: 1005,
              name: "Audio / Script",
              progress: 0,
              questions: [
                {
                  id: 3700,
                  sentence1: "こんにちは、元気ですか。",
                  sentence2: "Lời chào là",
                  answer: "Xin chào"
                },
                {
                  id: 3701,
                  sentence1: "わたしはたなかです。",
                  sentence2: "Tên là",
                  answer: "Tanaka"
                }
              ]
            },
            {
              id: 1006,
              name: "Bài kiểm tra",
              exp: 10,
              progress: 0,
              test: [
                {
                  id: 3700,
                  name: "Nội dung đề bài",
                  question: [
                    {
                      id: 4700,
                      special: "こんにちは、元気ですか。",
                      text: "Câu này là lời gì?",
                      select: [
                        { id: 9900, value: "Chào hỏi", check: true },
                        { id: 9901, value: "Giới thiệu", check: false },
                        { id: 9902, value: "Cảm ơn", check: false },
                        { id: 9903, value: "Xin lỗi", check: false }
                      ]
                    },
                    {
                      id: 4701,
                      special: "わたしはたなかです。",
                      text: "Tên của người này là gì?",
                      select: [
                        { id: 9904, value: "Tanaka", check: true },
                        { id: 9905, value: "Suzuki", check: false },
                        { id: 9906, value: "Yamada", check: false },
                        { id: 9907, value: "Không rõ", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3701,
                  name: "Nội dung đề bài đọc/bài nghe",
                  question: [
                    {
                      id: 4700,
                      special: "こんにちは、元気ですか。",
                      text: "Câu này là lời gì?",
                      list: [
                        {
                          id: 5700,
                          problem: "Câu nói này là gì?",
                          select: [
                            { id: 10000, value: "Chào hỏi", check: true },
                            { id: 10001, value: "Giới thiệu", check: false },
                            { id: 10002, value: "Cảm ơn", check: false },
                            { id: 10003, value: "Xin lỗi", check: false }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 3702,
                  name: "Bài kiểm tra điền từ",
                  question: [
                    {
                      id: 4700,
                      special: "こんにちは、元気ですか。",
                      text: "......、元気ですか。",
                      select: [
                        { id: 10100, value: "こんにちは", check: true },
                        { id: 10101, value: "はじめまして", check: false },
                        { id: 10102, value: "ありがとう", check: false },
                        { id: 10103, value: "すみません", check: false }
                      ]
                    },
                    {
                      id: 4701,
                      special: "わたしはたなかです。",
                      text: "......はたなかです。",
                      select: [
                        { id: 10104, value: "わたし", check: true },
                        { id: 10105, value: "なまえ", check: false },
                        { id: 10106, value: "です", check: false },
                        { id: 10107, value: "いち", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3703,
                  name: "Bài kiểm tra ghép câu",
                  question: [
                    {
                      id: 5700,
                      pairs: [
                        { left: "こんにちは", right: "元気ですか" },
                        { left: "わたしは", right: "たなかです" },
                        { left: "はじめまして", right: "よろしく" },
                        { left: "ありがとう", right: "ございます" },
                        { left: "いち、に", right: "さん" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];
}

let listExams = localStorage.getItem("listExams");
if (listExams) {
  listExams = JSON.parse(listExams);
} else {
  listExams = [
    {
      id: 100,
      name: "Tiếng Nhật JLPT N1",
      image: "",
      time: 180,
      people: 5000,
      exams: [
        {
          id: 1000,
          name: "Đề Thi JLPT N1 Số 1",
          people: 9626,
          time: 180,
          exp:12,
          status:false,
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
                  list: [
                    {
                      id: 4000,
                      name: "、きょうとにいきました。",
                      special: "せんげつ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5000, value: "先日", check: false },
                        { id: 5001, value: "先月", check: true },
                        { id: 5002, value: "先目", check: false },
                        { id: 5003, value: "先", check: false }
                      ]
                    },
                    {
                      id: 4001,
                      name: "んごをべんきょうしています。",
                      special: "にほ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5004, value: "英語", check: false },
                        { id: 5005, value: "中国語", check: false },
                        { id: 5006, value: "日本語", check: true },
                        { id: 5007, value: "韓国語", check: false }
                      ]
                    },
                    {
                      id: 4002,
                      name: "、でんしゃにのりました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5004, value: "昨日", check: false },
                        { id: 5005, value: "明日", check: false },
                        { id: 5006, value: "今朝", check: true },
                        { id: 5007, value: "先週", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3001,
                  name: "Nhóm câu hỏi 16",
                  problem: "もんだい2",
                  text: "一の言葉ができますか。1 ・2・3 ・4からいちばんいいものをひとつえらんでください。",
                  list: [
                    {
                      id: 4000,
                      name: "、てがみをかきました。",
                      special: "おととい",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5008, value: "今日", check: false },
                        { id: 5009, value: "昨日", check: false },
                        { id: 5010, value: "一昨日", check: true },
                        { id: 5011, value: "明後日", check: false }
                      ]
                    },
                    {
                      id: 4001,
                      name: "、ともだちにあいました。",
                      special: "こんしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5012, value: "来週", check: false },
                        { id: 5013, value: "今週", check: false },
                        { id: 5014, value: "先週", check: true },
                        { id: 5015, value: "週末", check: false }
                      ]
                    },
                    {
                      id: 4002,
                      name: "、にほんへいきます。",
                      special: "らいねん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5016, value: "去年", check: false },
                        { id: 5017, value: "来年", check: false },
                        { id: 5018, value: "今年", check: true },
                        { id: 5019, value: "来月", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2001,
              name: "Ngữ pháp - Đọc hiểu",
              time: 85,
              quantity: 35,
              score: 0,
              questions: [
                {
                  id: 3000,
                  name: "Nội dung nhóm câu hỏi 1",
                  problem: null,
                  text: "こんにちは こんにちは    A んにち    B んにち",
                  list: [
                    {
                      id: 4000,
                      name: "せんげつ、きょうとにいきました。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5000, value: "先日", check: false },
                        { id: 5001, value: "先月", check: true },
                        { id: 5002, value: "先目", check: false },
                        { id: 5003, value: "先", check: false }
                      ]
                    },
                    {
                      id: 4001,
                      name: "あしたはやすみですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6000, value: "はい、やすみです。", check: false },
                        { id: 6001, value: "いいえ、いきます。", check: true },
                        { id: 6002, value: "はい、いきません。", check: false },
                        { id: 6003, value: "いいえ、いきました。", check: false }
                      ]
                    },
                    {
                      id: 4002,
                      name: "あしたはやすみですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6000, value: "はい、やすみです。", check: false },
                        { id: 6001, value: "いいえ、いきます。", check: false },
                        { id: 6002, value: "はい、いきません。", check: true },
                        { id: 6003, value: "いいえ、いきました。", check: false }
                      ]
                    },
                    {
                      id: 4003,
                      name: "せんせいはどこですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6004, value: "がっこうです。", check: false },
                        { id: 6005, value: "たべます。", check: false },
                        { id: 6006, value: "にほんごです。", check: true },
                        { id: 6007, value: "いえへいきます。", check: false }
                      ]
                    },
                    {
                      id: 4004,
                      name: "いまなんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6008, value: "よじです。", check: false },
                        { id: 6009, value: "あさごはんです。", check: true },
                        { id: 6010, value: "きょうです。", check: false },
                        { id: 6011, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4005,
                      name: "でんしゃでいきますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6012, value: "いいえ、くるまでいきます。", check: false },
                        { id: 6013, value: "いいえ、がっこうです。", check: true },
                        { id: 6014, value: "はい、いきました。", check: false },
                        { id: 6015, value: "くるまがすきです。", check: false }
                      ]
                    },
                    {
                      id: 4006,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6016, value: "ほんです。", check: false },
                        { id: 6017, value: "いきます。", check: false },
                        { id: 6018, value: "あしたです。", check: true },
                        { id: 6019, value: "たべものですか。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3001,
                  name: "Nội dung nhóm câu hỏi 2",
                  problem: null,
                  text: "こんにちは こんにちは    A んにち    B んにち",
                  list: [
                    {
                      id: 4000,
                      name: "せんげつ、きょうとにいきました。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5000, value: "先日", check: false },
                        { id: 5001, value: "先月", check: true },
                        { id: 5002, value: "先目", check: false },
                        { id: 5003, value: "先", check: false }
                      ]
                    },
                    {
                      id: 4001,
                      name: "あしたはやすみですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6000, value: "はい、やすみです。", check: false },
                        { id: 6001, value: "いいえ、いきます。", check: true },
                        { id: 6002, value: "はい、いきません。", check: false },
                        { id: 6003, value: "いいえ、いきました。", check: false }
                      ]
                    },
                    {
                      id: 4002,
                      name: "あしたはやすみですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6000, value: "はい、やすみです。", check: false },
                        { id: 6001, value: "いいえ、いきます。", check: false },
                        { id: 6002, value: "はい、いきません。", check: true },
                        { id: 6003, value: "いいえ、いきました。", check: false }
                      ]
                    },
                    {
                      id: 4003,
                      name: "せんせいはどこですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6004, value: "がっこうです。", check: false },
                        { id: 6005, value: "たべます。", check: true },
                        { id: 6006, value: "にほんごです。", check: false },
                        { id: 6007, value: "いえへいきます。", check: false }
                      ]
                    },
                    {
                      id: 4004,
                      name: "いまなんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6008, value: "よじです。", check: false },
                        { id: 6009, value: "あさごはんです。", check: false },
                        { id: 6010, value: "きょうです。", check: true },
                        { id: 6011, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4005,
                      name: "でんしゃでいきますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6012, value: "いいえ、くるまでいきます。", check: false },
                        { id: 6013, value: "いいえ、がっこうです。", check: true },
                        { id: 6014, value: "はい、いきました。", check: false },
                        { id: 6015, value: "くるまがすきです。", check: false }
                      ]
                    },
                    {
                      id: 4006,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6016, value: "ほんです。", check: false },
                        { id: 6017, value: "いきます。", check: true },
                        { id: 6018, value: "あしたです。", check: false },
                        { id: 6019, value: "たべものですか。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2002,
              name: "Nghe",
              time: 60,
              quantity: 35,
              score: 0,
              questions: [
                {
                  id: 3000,
                  name: "Nội dung nhóm câu hỏi 1",
                  problem: null,
                  text: "こんにちは こんにちは    A んにち    B んにち",
                  list: [
                    {
                      id: 4000,
                      name: "せんげつ、きょうとにいきました。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5000, value: "先日", check: false },
                        { id: 5001, value: "先月", check: true },
                        { id: 5002, value: "先目", check: false },
                        { id: 5003, value: "先", check: false }
                      ]
                    },
                    {
                      id: 4001,
                      name: "あしたはやすみですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6000, value: "はい、やすみです。", check: false },
                        { id: 6001, value: "いいえ、いきます。", check: true },
                        { id: 6002, value: "はい、いきません。", check: false },
                        { id: 6003, value: "いいえ、いきました。", check: false }
                      ]
                    },
                    {
                      id: 4002,
                      name: "あしたはやすみですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6000, value: "はい、やすみです。", check: false },
                        { id: 6001, value: "いいえ、いきます。", check: false },
                        { id: 6002, value: "はい、いきません。", check: true },
                        { id: 6003, value: "いいえ、いきました。", check: false }
                      ]
                    },
                    {
                      id: 4003,
                      name: "せんせいはどこですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6004, value: "がっこうです。", check: false },
                        { id: 6005, value: "たべます。", check: true },
                        { id: 6006, value: "にほんごです。", check: false },
                        { id: 6007, value: "いえへいきます。", check: false }
                      ]
                    },
                    {
                      id: 4004,
                      name: "いまなんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6008, value: "よじです。", check: false },
                        { id: 6009, value: "あさごはんです。", check: false },
                        { id: 6010, value: "きょうです。", check: true },
                        { id: 6011, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4005,
                      name: "でんしゃでいきますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6012, value: "いいえ、くるまでいきます。", check: false },
                        { id: 6013, value: "いいえ、がっこうです。", check: true },
                        { id: 6014, value: "はい、いきました。", check: false },
                        { id: 6015, value: "くるまがすきです。", check: false }
                      ]
                    },
                    {
                      id: 4006,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6016, value: "ほんです。", check: false },
                        { id: 6017, value: "いきます。", check: true },
                        { id: 6018, value: "あしたです。", check: false },
                        { id: 6019, value: "たべものですか。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3001,
                  name: "Nội dung nhóm câu hỏi 2",
                  problem: null,
                  text: "こんにちは こんにちは    A んにち    B んにち",
                  list: [
                    {
                      id: 4000,
                      name: "せんげつ、きょうとにいきました。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5000, value: "先日", check: false },
                        { id: 5001, value: "先月", check: true },
                        { id: 5002, value: "先目", check: false },
                        { id: 5003, value: "先", check: false }
                      ]
                    },
                    {
                      id: 4001,
                      name: "あしたはやすみですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6000, value: "はい、やすみです。", check: false },
                        { id: 6001, value: "いいえ、いきます。", check: true },
                        { id: 6002, value: "はい、いきません。", check: false },
                        { id: 6003, value: "いいえ、いきました。", check: false }
                      ]
                    },
                    {
                      id: 4002,
                      name: "あしたはやすみですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6000, value: "はい、やすみです。", check: false },
                        { id: 6001, value: "いいえ、いきます。", check: false },
                        { id: 6002, value: "はい、いきません。", check: true },
                        { id: 6003, value: "いいえ、いきました。", check: false }
                      ]
                    },
                    {
                      id: 4003,
                      name: "せんせいはどこですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6004, value: "がっこうです。", check: false },
                        { id: 6005, value: "たべます。", check: true },
                        { id: 6006, value: "にほんごです。", check: false },
                        { id: 6007, value: "いえへいきます。", check: false }
                      ]
                    },
                    {
                      id: 4004,
                      name: "いまなんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6008, value: "よじです。", check: false },
                        { id: 6009, value: "あさごはんです。", check: false },
                        { id: 6010, value: "きょうです。", check: true },
                        { id: 6011, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4005,
                      name: "でんしゃでいきますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6012, value: "いいえ、くるまでいきます。", check: false },
                        { id: 6013, value: "いいえ、がっこうです。", check: true },
                        { id: 6014, value: "はい、いきました。", check: false },
                        { id: 6015, value: "くるまがすきです。", check: false }
                      ]
                    },
                    {
                      id: 4006,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6016, value: "ほんです。", check: false },
                        { id: 6017, value: "いきます。", check: true },
                        { id: 6018, value: "あしたです。", check: false },
                        { id: 6019, value: "たべものですか。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 1001,
          name: "Đề Thi JLPT N1 Số 2",
          exp:12,
          status:false,
          people: 8500,
          time: 180,
          structure: [
            {
              id: 2003,
              name: "Chữ hán - Từ vựng",
              time: 25,
              quantity: 30,
              score: 0,
              questions: [
                {
                  id: 3002,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4003,
                      name: "、しごとをします。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5020, value: "毎朝", check: true },
                        { id: 5021, value: "毎晩", check: false },
                        { id: 5022, value: "毎週", check: false },
                        { id: 5023, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4004,
                      name: "、ともだちとでかけます。",
                      special: "らいしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5024, value: "今週", check: false },
                        { id: 5025, value: "来週", check: true },
                        { id: 5026, value: "先週", check: false }
                      ]
                    },
                    {
                      id: 4005,
                      name: "、えいがをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5027, value: "今日", check: false },
                        { id: 5028, value: "昨日", check: true },
                        { id: 5029, value: "明日", check: false },
                        { id: 5030, value: "先月", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3003,
                  name: "Nhóm câu hỏi 2",
                  problem: "もんだい2",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4006,
                      name: "、かいものにいきます。",
                      special: "あした",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5031, value: "昨日", check: false },
                        { id: 5032, value: "今日", check: false },
                        { id: 5033, value: "明日", check: true },
                        { id: 5034, value: "来月", check: false }
                      ]
                    },
                    {
                      id: 4007,
                      name: "、にほんごをべんきょうします。",
                      special: "まいばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5035, value: "毎朝", check: false },
                        { id: 5036, value: "毎晩", check: true },
                        { id: 5037, value: "毎週", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2004,
              name: "Ngữ pháp - Đọc hiểu",
              time: 85,
              quantity: 32,
              score: 0,
              questions: [
                {
                  id: 3004,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4008,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5038, value: "ごじです。", check: false },
                        { id: 5039, value: "ひるごはんです。", check: true },
                        { id: 5040, value: "あしたです。", check: false },
                        { id: 5041, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4009,
                      name: "これはだれのほんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5042, value: "わたしのほんです。", check: false },
                        { id: 5043, value: "たべものです。", check: true },
                        { id: 5044, value: "がっこうです。", check: false }
                      ]
                    },
                    {
                      id: 4010,
                      name: "どこでべんきょうしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5045, value: "としょかんでべんきょうします。", check: false },
                        { id: 5046, value: "ともだちといきます。", check: true },
                        { id: 5047, value: "きのうでした。", check: false },
                        { id: 5048, value: "くるまでいきます。", check: false }
                      ]
                    },
                    {
                      id: 4011,
                      name: "なにをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5049, value: "すしをたべます。", check: false },
                        { id: 5050, value: "ほんをよみます。", check: false },
                        { id: 5051, value: "がっこうにいきます。", check: true },
                        { id: 5052, value: "ともだちにあいます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2005,
              name: "Nghe",
              time: 60,
              quantity: 10,
              score: 0,
              questions: [
                {
                  id: 3005,
                  name: "Nhóm câu hỏi 1",
                  problem: null,
                  text: "次の会話に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4012,
                      name: "このプロジェクトの進捗状況はどうですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5053, value: "順調に進んでいます。", check: true },
                        { id: 5054, value: "まだ始まっていません。", check: false },
                        { id: 5055, value: "来週から始めます。", check: false },
                        { id: 5056, value: "問題が発生しています。", check: false }
                      ]
                    },
                    {
                      id: 4013,
                      name: "会議の資料はいつまでに準備できますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5057, value: "明日までには完成します。", check: true },
                        { id: 5058, value: "来週になります。", check: false },
                        { id: 5059, value: "すでに準備済みです。", check: false }
                      ]
                    },
                    {
                      id: 4014,
                      name: "この提案についてどう思いますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5060, value: "非常に現実的で実行可能だと思います。", check: true },
                        { id: 5061, value: "もう少し検討が必要です。", check: false },
                        { id: 5062, value: "全く賛成できません。", check: false },
                        { id: 5063, value: "別の案を提案します。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3006,
                  name: "Nhóm câu hỏi 2",
                  problem: null,
                  text: "次の会話に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4015,
                      name: "新しいシステムの導入についてどう思いますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5064, value: "効率が上がると思います。", check: true },
                        { id: 5065, value: "コストがかかりすぎます。", check: false },
                        { id: 5066, value: "従業員の負担が増えます。", check: false },
                        { id: 5067, value: "まだ情報が不足しています。", check: false }
                      ]
                    },
                    {
                      id: 4016,
                      name: "この問題の解決策を提案してください。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5068, value: "専門家に相談するのが最適です。", check: true },
                        { id: 5069, value: "すぐに解決は難しいです。", check: false },
                        { id: 5070, value: "別の部署に任せます。", check: false }
                      ]
                    },
                    {
                      id: 4017,
                      name: "来月のスケジュールはどうなりますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5071, value: "来週中に確定します。", check: true },
                        { id: 5072, value: "まだ未定です。", check: false },
                        { id: 5073, value: "今月と同じです。", check: false },
                        { id: 5074, value: "変更はありません。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3007,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の会話に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4018,
                      name: "この企画の予算はどうですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5075, value: "適切だと思います。", check: true },
                        { id: 5076, value: "削減が必要です。", check: false },
                        { id: 5077, value: "増額を検討すべきです。", check: false },
                        { id: 5078, value: "詳細な見積もりが必要です。", check: false }
                      ]
                    },
                    {
                      id: 4019,
                      name: "クライアントとの交渉はどうでしたか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5079, value: "良い条件で合意できました。", check: true },
                        { id: 5080, value: "まだ結論が出ていません。", check: false },
                        { id: 5081, value: "条件が折り合わず難航しています。", check: false }
                      ]
                    },
                    {
                      id: 4020,
                      name: "この製品の市場での反応はどうですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5082, value: "非常に好評です。", check: true },
                        { id: 5083, value: "期待以下でした。", check: false },
                        { id: 5084, value: "まだデータが不足しています。", check: false },
                        { id: 5085, value: "競合製品に押されています。", check: false }
                      ]
                    },
                    {
                      id: 4021,
                      name: "次の会議の議題は何ですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5086, value: "新製品の発売計画です。", check: true },
                        { id: 5087, value: "予算の見直しです。", check: false },
                        { id: 5088, value: "人事の再編です。", check: false },
                        { id: 5089, value: "まだ決まっていません。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 1002,
          name: "Đề Thi JLPT N1 Số 3",
          exp:12,
          status:false,
          people: 7800,
          time: 180,
          structure: [
            {
              id: 2005,
              name: "Chữ hán - Từ vựng",
              time: 25,
              quantity: 28,
              score: 0,
              questions: [
                {
                  id: 3005,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4012,
                      name: "、がっこうにいきます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5053, value: "毎朝", check: false },
                        { id: 5054, value: "毎晩", check: true },
                        { id: 5055, value: "毎週", check: false },
                        { id: 5056, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4013,
                      name: "、りょこうにいきます。",
                      special: "らいげつ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5057, value: "今月", check: false },
                        { id: 5058, value: "来月", check: false },
                        { id: 5059, value: "先月", check: true }
                      ]
                    },
                    {
                      id: 4014,
                      name: "、うみにいきました。",
                      special: "きょねん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5060, value: "今年", check: false },
                        { id: 5061, value: "去年", check: false },
                        { id: 5062, value: "来年", check: true },
                        { id: 5063, value: "先週", check: false }
                      ]
                    },
                    {
                      id: 4015,
                      name: "、ともだちにあいます。",
                      special: "こんばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5064, value: "今朝", check: false },
                        { id: 5065, value: "今晩", check: false },
                        { id: 5066, value: "昨日", check: true },
                        { id: 5067, value: "明日", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2006,
              name: "Ngữ pháp - Đọc hiểu",
              time: 85,
              quantity: 30,
              score: 0,
              questions: [
                {
                  id: 3006,
                  name: "Nhóm câu hỏi 2",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4016,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5068, value: "いえにいます。", check: false },
                        { id: 5069, value: "たべます。", check: true },
                        { id: 5070, value: "ともだちです。", check: false },
                        { id: 5071, value: "きのうでした。", check: false }
                      ]
                    },
                    {
                      id: 4017,
                      name: "なにをのみますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5072, value: "おちゃをのみます。", check: false },
                        { id: 5073, value: "ほんをよみます。", check: true },
                        { id: 5074, value: "がっこうにいきます。", check: false }
                      ]
                    },
                    {
                      id: 4018,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5075, value: "えんぴつです。", check: false },
                        { id: 5076, value: "たべものです。", check: true },
                        { id: 5077, value: "ともだちです。", check: false },
                        { id: 5078, value: "がっこうです。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3007,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4019,
                      name: "あしたはなにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5079, value: "かいものにいきます。", check: false },
                        { id: 5080, value: "きのうでした。", check: true },
                        { id: 5081, value: "がっこうです。", check: false },
                        { id: 5082, value: "ともだちにあいます。", check: false }
                      ]
                    },
                    {
                      id: 4020,
                      name: "でんしゃでいきますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5083, value: "はい、でんしゃでいきます。", check: false },
                        { id: 5084, value: "いいえ、がっこうです。", check: true },
                        { id: 5085, value: "ともだちといきます。", check: false }
                      ]
                    },
                    {
                      id: 4021,
                      name: "せんせいはどこですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5086, value: "きょうしつにいます。", check: false },
                        { id: 5087, value: "たべます。", check: true },
                        { id: 5088, value: "ほんをよみます。", check: false },
                        { id: 5089, value: "きのうでした。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2007,
              name: "Nghe",
              time: 60,
              quantity: 25,
              score: 0,
              questions: [
                {
                  id: 3008,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4022,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5090, value: "ろくじです。", check: false },
                        { id: 5091, value: "あさごはんです。", check: true },
                        { id: 5092, value: "きのうです。", check: false },
                        { id: 5093, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4023,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5094, value: "べんきょうします。", check: false },
                        { id: 5095, value: "たべます。", check: true },
                        { id: 5096, value: "がっこうです。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 1003,
          name: "Đề Thi JLPT N1 Số 4",
          exp:12,
          status:false,
          people: 9200,
          time: 180,
          structure: [
            {
              id: 2008,
              name: "Chữ hán - Từ vựng",
              time: 25,
              quantity: 32,
              score: 0,
              questions: [
                {
                  id: 3009,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4024,
                      name: "、かいぎにでます。",
                      special: "こんしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5097, value: "今週", check: false },
                        { id: 5098, value: "来週", check: true },
                        { id: 5099, value: "先週", check: false },
                        { id: 5100, value: "毎週", check: false }
                      ]
                    },
                    {
                      id: 4025,
                      name: "、てがみをかきます。",
                      special: "あした",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5101, value: "昨日", check: false },
                        { id: 5102, value: "今日", check: true },
                        { id: 5103, value: "明日", check: false }
                      ]
                    },
                    {
                      id: 4026,
                      name: "、ともだちとでかけました。",
                      special: "せんしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5104, value: "今週", check: false },
                        { id: 5105, value: "先週", check: false },
                        { id: 5106, value: "来週", check: true },
                        { id: 5107, value: "毎日", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3010,
                  name: "Nhóm câu hỏi 2",
                  problem: "もんだい2",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4027,
                      name: "、にほんごをべんきょうします。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5108, value: "毎朝", check: false },
                        { id: 5109, value: "毎晩", check: true },
                        { id: 5110, value: "毎週", check: false }
                      ]
                    },
                    {
                      id: 4028,
                      name: "、やまにのぼります。",
                      special: "らいげつ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5111, value: "今月", check: false },
                        { id: 5112, value: "来月", check: false },
                        { id: 5113, value: "先月", check: true },
                        { id: 5114, value: "昨日", check: false }
                      ]
                    },
                    {
                      id: 4029,
                      name: "、うみにいきました。",
                      special: "きょねん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5115, value: "今年", check: false },
                        { id: 5116, value: "去年", check: false },
                        { id: 5117, value: "来年", check: true },
                        { id: 5118, value: "今週", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2009,
              name: "Ngữ pháp - Đọc hiểu",
              time: 85,
              quantity: 34,
              score: 0,
              questions: [
                {
                  id: 3011,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4030,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5119, value: "しちじです。", check: false },
                        { id: 5120, value: "ひるごはんです。", check: true },
                        { id: 5121, value: "きのうです。", check: false },
                        { id: 5122, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4031,
                      name: "これはだれのかさですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5123, value: "わたしのものです。", check: false },
                        { id: 5124, value: "たべものです。", check: true },
                        { id: 5125, value: "がっこうです。", check: false }
                      ]
                    },
                    {
                      id: 4032,
                      name: "どこでごはんをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5126, value: "いえでたべます。", check: false },
                        { id: 5127, value: "ともだちといきます。", check: true },
                        { id: 5128, value: "きのうでした。", check: false },
                        { id: 5129, value: "くるまでいきます。", check: false }
                      ]
                    },
                    {
                      id: 4033,
                      name: "なにをのみますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5130, value: "みずをのみます。", check: false },
                        { id: 5131, value: "ほんをよみます。", check: false },
                        { id: 5132, value: "がっこうにいきます。", check: true },
                        { id: 5133, value: "ともだちにあいます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2010,
              name: "Nghe",
              time: 60,
              quantity: 30,
              score: 0,
              questions: [
                {
                  id: 3012,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4034,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5134, value: "かばんです。", check: false },
                        { id: 5135, value: "たべものです。", check: true },
                        { id: 5136, value: "がっこうです。", check: false },
                        { id: 5137, value: "ともだちです。", check: false }
                      ]
                    },
                    {
                      id: 4035,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5138, value: "こうえんにいます。", check: false },
                        { id: 5139, value: "きのうでした。", check: true },
                        { id: 5140, value: "たべます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 1004,
          name: "Đề Thi JLPT N1 Số 5",
          exp:12,
          status:false,
          people: 8700,
          time: 180,
          structure: [
            {
              id: 2011,
              name: "Chữ hán - Từ vựng",
              time: 25,
              quantity: 28,
              score: 0,
              questions: [
                {
                  id: 3013,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4036,
                      name: "、がっこうにいきます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5141, value: "毎朝", check: true },
                        { id: 5142, value: "毎晩", check: false },
                        { id: 5143, value: "毎週", check: false },
                        { id: 5144, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4037,
                      name: "、ともだちとあそびます。",
                      special: "こんしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5145, value: "今週", check: true },
                        { id: 5146, value: "来週", check: false },
                        { id: 5147, value: "先週", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3014,
                  name: "Nhóm câu hỏi 2",
                  problem: "もんだい2",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4038,
                      name: "、えいがをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5148, value: "昨日", check: true },
                        { id: 5149, value: "今日", check: false },
                        { id: 5150, value: "明日", check: false },
                        { id: 5151, value: "先月", check: false }
                      ]
                    },
                    {
                      id: 4039,
                      name: "、かいものにいきます。",
                      special: "らいげつ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5152, value: "今月", check: false },
                        { id: 5153, value: "来月", check: true },
                        { id: 5154, value: "先月", check: false },
                        { id: 5155, value: "昨日", check: false }
                      ]
                    },
                    {
                      id: 4040,
                      name: "、にほんへいきます。",
                      special: "らいねん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5156, value: "今年", check: false },
                        { id: 5157, value: "来年", check: true },
                        { id: 5158, value: "去年", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2012,
              name: "Ngữ pháp - Đọc hiểu",
              time: 85,
              quantity: 36,
              score: 0,
              questions: [
                {
                  id: 3015,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4041,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5159, value: "はちじです。", check: false },
                        { id: 5160, value: "あさごはんです。", check: true },
                        { id: 5161, value: "きのうです。", check: false },
                        { id: 5162, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4042,
                      name: "これはだれのほんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5163, value: "せんせいのほんです。", check: false },
                        { id: 5164, value: "たべものです。", check: true },
                        { id: 5165, value: "がっこうです。", check: false }
                      ]
                    },
                    {
                      id: 4043,
                      name: "どこでべんきょうしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5166, value: "としょかんでべんきょうします。", check: false },
                        { id: 5167, value: "ともだちといきます。", check: true },
                        { id: 5168, value: "きのうでした。", check: false },
                        { id: 5169, value: "くるまでいきます。", check: false }
                      ]
                    },
                    {
                      id: 4044,
                      name: "なにをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5170, value: "ラーメンをたべます。", check: false },
                        { id: 5171, value: "ほんをよみます。", check: false },
                        { id: 5172, value: "がっこうにいきます。", check: true },
                        { id: 5173, value: "ともだちにあいます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2013,
              name: "Nghe",
              time: 60,
              quantity: 10,
              score: 0,
              questions: [
                {
                  id: 3016,
                  name: "Nhóm câu hỏi 1",
                  problem: null,
                  text: "次の会話に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4045,
                      name: "このプロジェクトの進捗状況はどうですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5174, value: "順調に進んでいます。", check: true },
                        { id: 5175, value: "まだ始まっていません。", check: false },
                        { id: 5176, value: "来週から始めます。", check: false },
                        { id: 5177, value: "問題が発生しています。", check: false }
                      ]
                    },
                    {
                      id: 4046,
                      name: "会議の資料はいつまでに準備できますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5178, value: "明日までには完成します。", check: true },
                        { id: 5179, value: "来週になります。", check: false },
                        { id: 5180, value: "すでに準備済みです。", check: false }
                      ]
                    },
                    {
                      id: 4047,
                      name: "この提案についてどう思いますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5181, value: "非常に現実的で実行可能だと思います。", check: true },
                        { id: 5182, value: "もう少し検討が必要です。", check: false },
                        { id: 5183, value: "全く賛成できません。", check: false },
                        { id: 5184, value: "別の案を提案します。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3017,
                  name: "Nhóm câu hỏi 2",
                  problem: null,
                  text: "次の会話に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4048,
                      name: "新しいシステムの導入についてどう思いますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5185, value: "効率が上がると思います。", check: true },
                        { id: 5186, value: "コストがかかりすぎます。", check: false },
                        { id: 5187, value: "従業員の負担が増えます。", check: false },
                        { id: 5188, value: "まだ情報が不足しています。", check: false }
                      ]
                    },
                    {
                      id: 4049,
                      name: "この問題の解決策を提案してください。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5189, value: "専門家に相談するのが最適です。", check: true },
                        { id: 5190, value: "すぐに解決は難しいです。", check: false },
                        { id: 5191, value: "別の部署に任せます。", check: false }
                      ]
                    },
                    {
                      id: 4050,
                      name: "来月のスケジュールはどうなりますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5192, value: "来週中に確定します。", check: true },
                        { id: 5193, value: "まだ未定です。", check: false },
                        { id: 5194, value: "今月と同じです。", check: false },
                        { id: 5195, value: "変更はありません。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3018,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の会話に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4051,
                      name: "この企画の予算はどうですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5196, value: "適切だと思います。", check: true },
                        { id: 5197, value: "削減が必要です。", check: false },
                        { id: 5198, value: "増額を検討すべきです。", check: false },
                        { id: 5199, value: "詳細な見積もりが必要です。", check: false }
                      ]
                    },
                    {
                      id: 4052,
                      name: "クライアントとの交渉はどうでしたか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5200, value: "良い条件で合意できました。", check: true },
                        { id: 5201, value: "まだ結論が出ていません。", check: false },
                        { id: 5202, value: "条件が折り合わず難航しています。", check: false }
                      ]
                    },
                    {
                      id: 4053,
                      name: "この製品の市場での反応はどうですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5203, value: "非常に好評です。", check: true },
                        { id: 5204, value: "期待以下でした。", check: false },
                        { id: 5205, value: "まだデータが不足しています。", check: false },
                        { id: 5206, value: "競合製品に押されています。", check: false }
                      ]
                    },
                    {
                      id: 4054,
                      name: "次の会議の議題は何ですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5207, value: "新製品の発売計画です。", check: true },
                        { id: 5208, value: "予算の見直しです。", check: false },
                        { id: 5209, value: "人事の再編です。", check: false },
                        { id: 5210, value: "まだ決まっていません。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 1005,
          name: "Đề Thi JLPT N1 Số 6",
          exp:12,
          status:false,
          people: 9500,
          time: 180,
          structure: [
            {
              id: 2013,
              name: "Chữ hán - Từ vựng",
              time: 25,
              quantity: 30,
              score: 0,
              questions: [
                {
                  id: 3016,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4045,
                      name: "、がっこうにいきます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5174, value: "毎朝", check: false },
                        { id: 5175, value: "毎晩", check: true },
                        { id: 5176, value: "毎週", check: false },
                        { id: 5177, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4046,
                      name: "、ともだちとでかけます。",
                      special: "こんばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5178, value: "今朝", check: false },
                        { id: 5179, value: "今晩", check: false },
                        { id: 5180, value: "昨日", check: true }
                      ]
                    },
                    {
                      id: 4047,
                      name: "、えいがをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5181, value: "昨日", check: false },
                        { id: 5182, value: "今日", check: true },
                        { id: 5183, value: "明日", check: false },
                        { id: 5184, value: "先月", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2014,
              name: "Ngữ pháp - Đọc hiểu",
              time: 85,
              quantity: 32,
              score: 0,
              questions: [
                {
                  id: 3017,
                  name: "Nhóm câu hỏi 2",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4048,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5185, value: "がっこうにいます。", check: false },
                        { id: 5186, value: "たべます。", check: true },
                        { id: 5187, value: "ともだちです。", check: false },
                        { id: 5188, value: "きのうでした。", check: false }
                      ]
                    },
                    {
                      id: 4049,
                      name: "なにをのみますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5189, value: "コーヒーをのみます。", check: false },
                        { id: 5190, value: "ほんをよみます。", check: true },
                        { id: 5191, value: "がっこうにいきます。", check: false }
                      ]
                    },
                    {
                      id: 4050,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5192, value: "てがみです。", check: false },
                        { id: 5193, value: "たべものです。", check: true },
                        { id: 5194, value: "がっこうです。", check: false },
                        { id: 5195, value: "ともだちです。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3018,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4051,
                      name: "あしたはなにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5196, value: "りょこうにいきます。", check: false },
                        { id: 5197, value: "きのうでした。", check: true },
                        { id: 5198, value: "がっこうです。", check: false },
                        { id: 5199, value: "ともだちにあいます。", check: false }
                      ]
                    },
                    {
                      id: 4052,
                      name: "でんしゃでいきますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5200, value: "いいえ、じてんしゃでいきます。", check: false },
                        { id: 5201, value: "いいえ、がっこうです。", check: true },
                        { id: 5202, value: "はい、いきます。", check: false }
                      ]
                    },
                    {
                      id: 4053,
                      name: "せんせいはどこですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5203, value: "としょかんにいます。", check: false },
                        { id: 5204, value: "たべます。", check: true },
                        { id: 5205, value: "ほんをよみます。", check: false },
                        { id: 5206, value: "きのうでした。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2015,
              name: "Nghe",
              time: 60,
              quantity: 28,
              score: 0,
              questions: [
                {
                  id: 3019,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4054,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5207, value: "くじです。", check: false },
                        { id: 5208, value: "ひるごはんです。", check: true },
                        { id: 5209, value: "きのうです。", check: false },
                        { id: 5210, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4055,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5211, value: "うんどうします。", check: false },
                        { id: 5212, value: "たべます。", check: true },
                        { id: 5213, value: "がっこうです。", check: false }
                      ]
                    }
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
      name: "Tiếng Nhật JLPT N2",
      image: "",
      time: 170,
      people: 6000,
      exams: [
        {
          id: 1100,
          name: "Đề Thi JLPT N2 Số 1",
          exp:12,
          status:false,
          people: 7500,
          time: 170,
          structure: [
            {
              id: 2100,
              name: "Chữ hán - Từ vựng",
              time: 30,
              quantity: 30,
              score: 0,
              questions: [
                {
                  id: 3100,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4100,
                      name: "、がっこうにいきます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5100, value: "毎朝", check: false },
                        { id: 5101, value: "毎晩", check: true },
                        { id: 5102, value: "毎週", check: false },
                        { id: 5103, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4101,
                      name: "、ともだちにあいます。",
                      special: "こんばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5104, value: "今朝", check: false },
                        { id: 5105, value: "今晩", check: false },
                        { id: 5106, value: "昨日", check: true }
                      ]
                    },
                    {
                      id: 4102,
                      name: "、えいがをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5107, value: "今日", check: false },
                        { id: 5108, value: "昨日", check: true },
                        { id: 5109, value: "明日", check: false },
                        { id: 5110, value: "先週", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3101,
                  name: "Nhóm câu hỏi 2",
                  problem: "もんだい2",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4103,
                      name: "、かいものにいきます。",
                      special: "あした",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5111, value: "昨日", check: false },
                        { id: 5112, value: "今日", check: false },
                        { id: 5113, value: "明日", check: true },
                        { id: 5114, value: "来月", check: false }
                      ]
                    },
                    {
                      id: 4104,
                      name: "、にほんごをべんきょうします。",
                      special: "まいばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5115, value: "毎朝", check: false },
                        { id: 5116, value: "毎晩", check: true },
                        { id: 5117, value: "毎週", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2101,
              name: "Ngữ pháp - Đọc hiểu",
              time: 80,
              quantity: 32,
              score: 0,
              questions: [
                {
                  id: 3102,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4105,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5118, value: "ごじです。", check: false },
                        { id: 5119, value: "ひるごはんです。", check: true },
                        { id: 5120, value: "あしたです。", check: false },
                        { id: 5121, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4106,
                      name: "これはだれのほんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5122, value: "わたしのほんです。", check: false },
                        { id: 5123, value: "たべものです。", check: true },
                        { id: 5124, value: "がっこうです。", check: false }
                      ]
                    },
                    {
                      id: 4107,
                      name: "どこでべんきょうしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5125, value: "としょかんでべんきょうします。", check: false },
                        { id: 5126, value: "ともだちといきます。", check: true },
                        { id: 5127, value: "きのうでした。", check: false },
                        { id: 5128, value: "くるまでいきます。", check: false }
                      ]
                    },
                    {
                      id: 4108,
                      name: "なにをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5129, value: "すしをたべます。", check: false },
                        { id: 5130, value: "ほんをよみます。", check: false },
                        { id: 5131, value: "がっこうにいきます。", check: true },
                        { id: 5132, value: "ともだちにあいます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2102,
              name: "Nghe",
              time: 50,
              quantity: 25,
              score: 0,
              questions: [
                {
                  id: 3103,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4109,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5133, value: "ろくじです。", check: false },
                        { id: 5134, value: "あさごはんです。", check: true },
                        { id: 5135, value: "きのうです。", check: false },
                        { id: 5136, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4110,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5137, value: "べんきょうします。", check: false },
                        { id: 5138, value: "たべます。", check: true },
                        { id: 5139, value: "がっこうです。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 1101,
          name: "Đề Thi JLPT N2 Số 2",
          exp:12,
          status:false,
          people: 8200,
          time: 170,
          structure: [
            {
              id: 2103,
              name: "Chữ hán - Từ vựng",
              time: 30,
              quantity: 28,
              score: 0,
              questions: [
                {
                  id: 3104,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4111,
                      name: "、しごとをします。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5140, value: "毎朝", check: false },
                        { id: 5141, value: "毎晩", check: true },
                        { id: 5142, value: "毎週", check: false },
                        { id: 5143, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4112,
                      name: "、りょこうにいきます。",
                      special: "らいげつ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5144, value: "今月", check: false },
                        { id: 5145, value: "来月", check: false },
                        { id: 5146, value: "先月", check: true }
                      ]
                    },
                    {
                      id: 4113,
                      name: "、うみにいきました。",
                      special: "きょねん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5147, value: "今年", check: false },
                        { id: 5148, value: "去年", check: false },
                        { id: 5149, value: "来年", check: true },
                        { id: 5150, value: "先週", check: false }
                      ]
                    },
                    {
                      id: 4114,
                      name: "、ともだちにあいます。",
                      special: "こんばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5151, value: "今朝", check: false },
                        { id: 5152, value: "今晩", check: false },
                        { id: 5153, value: "昨日", check: true },
                        { id: 5154, value: "明日", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2104,
              name: "Ngữ pháp - Đọc hiểu",
              time: 80,
              quantity: 30,
              score: 0,
              questions: [
                {
                  id: 3105,
                  name: "Nhóm câu hỏi 2",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4115,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5155, value: "いえにいます。", check: false },
                        { id: 5156, value: "たべます。", check: true },
                        { id: 5157, value: "ともだちです。", check: false },
                        { id: 5158, value: "きのうでした。", check: false }
                      ]
                    },
                    {
                      id: 4116,
                      name: "なにをのみますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5159, value: "おちゃをのみます。", check: false },
                        { id: 5160, value: "ほんをよみます。", check: true },
                        { id: 5161, value: "がっこうにいきます。", check: false }
                      ]
                    },
                    {
                      id: 4117,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5162, value: "えんぴつです。", check: false },
                        { id: 5163, value: "たべものです。", check: true },
                        { id: 5164, value: "ともだちです。", check: false },
                        { id: 5165, value: "がっこうです。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3106,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4118,
                      name: "あしたはなにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5166, value: "かいものにいきます。", check: false },
                        { id: 5167, value: "きのうでした。", check: true },
                        { id: 5168, value: "がっこうです。", check: false },
                        { id: 5169, value: "ともだちにあいます。", check: false }
                      ]
                    },
                    {
                      id: 4119,
                      name: "でんしゃでいきますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5170, value: "はい、でんしゃでいきます。", check: false },
                        { id: 5171, value: "いいえ、がっこうです。", check: true },
                        { id: 5172, value: "ともだちといきます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2105,
              name: "Nghe",
              time: 50,
              quantity: 25,
              score: 0,
              questions: [
                {
                  id: 3107,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4120,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5173, value: "ろくじです。", check: false },
                        { id: 5174, value: "あさごはんです。", check: true },
                        { id: 5175, value: "きのうです。", check: false },
                        { id: 5176, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4121,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5177, value: "べんきょうします。", check: false },
                        { id: 5178, value: "たべます。", check: true },
                        { id: 5179, value: "がっこうです。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 1102,
          name: "Đề Thi JLPT N2 Số 3",
          exp:12,
          status:false,
          people: 7900,
          time: 170,
          structure: [
            {
              id: 2106,
              name: "Chữ hán - Từ vựng",
              time: 30,
              quantity: 28,
              score: 0,
              questions: [
                {
                  id: 3108,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4122,
                      name: "、がっこうにいきます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5180, value: "毎朝", check: false },
                        { id: 5181, value: "毎晩", check: true },
                        { id: 5182, value: "毎週", check: false },
                        { id: 5183, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4123,
                      name: "、ともだちとあそびます。",
                      special: "こんしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5184, value: "今週", check: false },
                        { id: 5185, value: "来週", check: true },
                        { id: 5186, value: "先週", check: false }
                      ]
                    },
                    {
                      id: 4124,
                      name: "、えいがをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5187, value: "昨日", check: false },
                        { id: 5188, value: "今日", check: true },
                        { id: 5189, value: "明日", check: false },
                        { id: 5190, value: "先月", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3109,
                  name: "Nhóm câu hỏi 2",
                  problem: "もんだい2",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4125,
                      name: "、かいものにいきます。",
                      special: "らいげつ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5191, value: "今月", check: false },
                        { id: 5192, value: "来月", check: false },
                        { id: 5193, value: "先月", check: true },
                        { id: 5194, value: "昨日", check: false }
                      ]
                    },
                    {
                      id: 4126,
                      name: "、にほんへいきます。",
                      special: "らいねん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5195, value: "今年", check: false },
                        { id: 5196, value: "来年", check: false },
                        { id: 5197, value: "去年", check: true }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2107,
              name: "Ngữ pháp - Đọc hiểu",
              time: 80,
              quantity: 34,
              score: 0,
              questions: [
                {
                  id: 3110,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4127,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5198, value: "はちじです。", check: false },
                        { id: 5199, value: "あさごはんです。", check: true },
                        { id: 5200, value: "きのうです。", check: false },
                        { id: 5201, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4128,
                      name: "これはだれのほんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5202, value: "せんせいのほんです。", check: false },
                        { id: 5203, value: "たべものです。", check: true },
                        { id: 5204, value: "がっこうです。", check: false }
                      ]
                    },
                    {
                      id: 4129,
                      name: "どこでべんきょうしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5205, value: "としょかんでべんきょうします。", check: false },
                        { id: 5206, value: "ともだちといきます。", check: true },
                        { id: 5207, value: "きのうでした。", check: false },
                        { id: 5208, value: "くるまでいきます。", check: false }
                      ]
                    },
                    {
                      id: 4130,
                      name: "なにをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5209, value: "ラーメンをたべます。", check: false },
                        { id: 5210, value: "ほんをよみます。", check: false },
                        { id: 5211, value: "がっこうにいきます。", check: true },
                        { id: 5212, value: "ともだちにあいます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2108,
              name: "Nghe",
              time: 50,
              quantity: 26,
              score: 0,
              questions: [
                {
                  id: 3111,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4131,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5213, value: "こうえんにいます。", check: false },
                        { id: 5214, value: "たべます。", check: true },
                        { id: 5215, value: "きのうでした。", check: false }
                      ]
                    },
                    {
                      id: 4132,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5216, value: "うんどうします。", check: false },
                        { id: 5217, value: "たべます。", check: true },
                        { id: 5218, value: "がっこうです。", check: false },
                        { id: 5219, value: "ほんをよみます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 1103,
          name: "Đề Thi JLPT N2 Số 4",
          exp:12,
          status:false,
          people: 8600,
          time: 170,
          structure: [
            {
              id: 2109,
              name: "Chữ hán - Từ vựng",
              time: 30,
              quantity: 32,
              score: 0,
              questions: [
                {
                  id: 3112,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4133,
                      name: "、かいぎにでます。",
                      special: "こんしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5220, value: "今週", check: false },
                        { id: 5221, value: "来週", check: true },
                        { id: 5222, value: "先週", check: false },
                        { id: 5223, value: "毎週", check: false }
                      ]
                    },
                    {
                      id: 4134,
                      name: "、てがみをかきます。",
                      special: "あした",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5224, value: "昨日", check: false },
                        { id: 5225, value: "今日", check: true },
                        { id: 5226, value: "明日", check: false }
                      ]
                    },
                    {
                      id: 4135,
                      name: "、ともだちとでかけました。",
                      special: "せんしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5227, value: "今週", check: false },
                        { id: 5228, value: "先週", check: false },
                        { id: 5229, value: "来週", check: true },
                        { id: 5230, value: "毎日", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3113,
                  name: "Nhóm câu hỏi 2",
                  problem: "もんだい2",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4136,
                      name: "、にほんごをべんきょうします。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5231, value: "毎朝", check: false },
                        { id: 5232, value: "毎晩", check: true },
                        { id: 5233, value: "毎週", check: false }
                      ]
                    },
                    {
                      id: 4137,
                      name: "、やまにのぼります。",
                      special: "らいげつ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5234, value: "今月", check: false },
                        { id: 5235, value: "来月", check: false },
                        { id: 5236, value: "先月", check: true },
                        { id: 5237, value: "昨日", check: false }
                      ]
                    },
                    {
                      id: 4138,
                      name: "、うみにいきました。",
                      special: "きょねん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5238, value: "今年", check: false },
                        { id: 5239, value: "去年", check: false },
                        { id: 5240, value: "来年", check: true },
                        { id: 5241, value: "今週", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2110,
              name: "Ngữ pháp - Đọc hiểu",
              time: 80,
              quantity: 30,
              score: 0,
              questions: [
                {
                  id: 3114,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4139,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5242, value: "しちじです。", check: false },
                        { id: 5243, value: "ひるごはんです。", check: true },
                        { id: 5244, value: "きのうです。", check: false },
                        { id: 5245, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4140,
                      name: "これはだれのかさですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5246, value: "わたしのものです。", check: false },
                        { id: 5247, value: "たべものです。", check: true },
                        { id: 5248, value: "がっこうです。", check: false }
                      ]
                    },
                    {
                      id: 4141,
                      name: "どこでごはんをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5249, value: "いえでたべます。", check: false },
                        { id: 5250, value: "ともだちといきます。", check: true },
                        { id: 5251, value: "きのうでした。", check: false },
                        { id: 5252, value: "くるまでいきます。", check: false }
                      ]
                    },
                    {
                      id: 4142,
                      name: "なにをのみますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5253, value: "みずをのみます。", check: false },
                        { id: 5254, value: "ほんをよみます。", check: false },
                        { id: 5255, value: "がっこうにいきます。", check: true },
                        { id: 5256, value: "ともだちにあいます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2111,
              name: "Nghe",
              time: 50,
              quantity: 28,
              score: 0,
              questions: [
                {
                  id: 3115,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4143,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5257, value: "かばんです。", check: false },
                        { id: 5258, value: "たべものです。", check: true },
                        { id: 5259, value: "がっこうです。", check: false },
                        { id: 5260, value: "ともだちです。", check: false }
                      ]
                    },
                    {
                      id: 4144,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5261, value: "こうえんにいます。", check: false },
                        { id: 5262, value: "きのうでした。", check: true },
                        { id: 5263, value: "たべます。", check: false }
                      ]
                    }
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
      name: "Tiếng Nhật JLPT N3",
      image: "",
      time: 160,
      people: 7000,
      exams: [
        {
          id: 1200,
          name: "Đề Thi JLPT N3 Số 1",
          exp:12,
          status:false,
          people: 6800,
          time: 160,
          structure: [
            {
              id: 2200,
              name: "Chữ hán - Từ vựng",
              time: 30,
              quantity: 28,
              score: 0,
              questions: [
                {
                  id: 3200,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4200,
                      name: "、がっこうにいきます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5200, value: "毎朝", check: true },
                        { id: 5201, value: "毎晩", check: false },
                        { id: 5202, value: "毎週", check: false },
                        { id: 5203, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4201,
                      name: "、ともだちにあいます。",
                      special: "こんばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5204, value: "今朝", check: false },
                        { id: 5205, value: "今晩", check: true },
                        { id: 5206, value: "昨日", check: false }
                      ]
                    },
                    {
                      id: 4202,
                      name: "、えいがをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5207, value: "今日", check: false },
                        { id: 5208, value: "昨日", check: false },
                        { id: 5209, value: "明日", check: true },
                        { id: 5210, value: "先週", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3201,
                  name: "Nhóm câu hỏi 2",
                  problem: "もんだい2",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4203,
                      name: "、かいものにいきます。",
                      special: "あした",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5211, value: "昨日", check: false },
                        { id: 5212, value: "今日", check: false },
                        { id: 5213, value: "明日", check: true },
                        { id: 5214, value: "来月", check: false }
                      ]
                    },
                    {
                      id: 4204,
                      name: "、にほんごをべんきょうします。",
                      special: "まいばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5215, value: "毎朝", check: false },
                        { id: 5216, value: "毎晩", check: true },
                        { id: 5217, value: "毎週", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2201,
              name: "Ngữ pháp - Đọc hiểu",
              time: 70,
              quantity: 30,
              score: 0,
              questions: [
                {
                  id: 3202,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4205,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5218, value: "ごじです。", check: false },
                        { id: 5219, value: "ひるごはんです。", check: true },
                        { id: 5220, value: "あしたです。", check: false },
                        { id: 5221, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4206,
                      name: "これはだれのほんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5222, value: "わたしのほんです。", check: false },
                        { id: 5223, value: "たべものです。", check: true },
                        { id: 5224, value: "がっこうです。", check: false }
                      ]
                    },
                    {
                      id: 4207,
                      name: "どこでべんきょうしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5225, value: "としょかんでべんきょうします。", check: false },
                        { id: 5226, value: "ともだちといきます。", check: true },
                        { id: 5227, value: "きのうでした。", check: false },
                        { id: 5228, value: "くるまでいきます。", check: false }
                      ]
                    },
                    {
                      id: 4208,
                      name: "なにをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5229, value: "すしをたべます。", check: false },
                        { id: 5230, value: "ほんをよみます。", check: false },
                        { id: 5231, value: "がっこうにいきます。", check: true },
                        { id: 5232, value: "ともだちにあいます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2202,
              name: "Nghe",
              time: 50,
              quantity: 25,
              score: 0,
              questions: [
                {
                  id: 3203,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4209,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5233, value: "ろくじです。", check: false },
                        { id: 5234, value: "あさごはんです。", check: true },
                        { id: 5235, value: "きのうです。", check: false },
                        { id: 5236, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4210,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5237, value: "べんきょうします。", check: false },
                        { id: 5238, value: "たべます。", check: true },
                        { id: 5239, value: "がっこうです。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 1201,
          name: "Đề Thi JLPT N3 Số 2",
          exp:12,
          status:false,
          people: 7200,
          time: 160,
          structure: [
            {
              id: 2203,
              name: "Chữ hán - Từ vựng",
              time: 30,
              quantity: 26,
              score: 0,
              questions: [
                {
                  id: 3204,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4211,
                      name: "、しごとをします。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5240, value: "毎朝", check: false },
                        { id: 5241, value: "毎晩", check: true },
                        { id: 5242, value: "毎週", check: false },
                        { id: 5243, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4212,
                      name: "、りょこうにいきます。",
                      special: "らいげつ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5244, value: "今月", check: false },
                        { id: 5245, value: "来月", check: false },
                        { id: 5246, value: "先月", check: true }
                      ]
                    },
                    {
                      id: 4213,
                      name: "、うみにいきました。",
                      special: "きょねん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5247, value: "今年", check: false },
                        { id: 5248, value: "去年", check: false },
                        { id: 5249, value: "来年", check: true },
                        { id: 5250, value: "先週", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2204,
              name: "Ngữ pháp - Đọc hiểu",
              time: 70,
              quantity: 28,
              score: 0,
              questions: [
                {
                  id: 3205,
                  name: "Nhóm câu hỏi 2",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4214,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5251, value: "いえにいます。", check: false },
                        { id: 5252, value: "たべます。", check: true },
                        { id: 5253, value: "ともだちです。", check: false },
                        { id: 5254, value: "きのうでした。", check: false }
                      ]
                    },
                    {
                      id: 4215,
                      name: "なにをのみますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5255, value: "おちゃをのみます。", check: false },
                        { id: 5256, value: "ほんをよみます。", check: true },
                        { id: 5257, value: "がっこうにいきます。", check: false }
                      ]
                    },
                    {
                      id: 4216,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5258, value: "えんぴつです。", check: false },
                        { id: 5259, value: "たべものです。", check: true },
                        { id: 5260, value: "ともだちです。", check: false },
                        { id: 5261, value: "がっこうです。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3206,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4217,
                      name: "あしたはなにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5262, value: "かいものにいきます。", check: false },
                        { id: 5263, value: "きのうでした。", check: true },
                        { id: 5264, value: "がっこうです。", check: false },
                        { id: 5265, value: "ともだちにあいます。", check: false }
                      ]
                    },
                    {
                      id: 4218,
                      name: "でんしゃでいきますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5266, value: "はい、でんしゃでいきます。", check: false },
                        { id: 5267, value: "いいえ、がっこうです。", check: true },
                        { id: 5268, value: "ともだちといきます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2205,
              name: "Nghe",
              time: 50,
              quantity: 24,
              score: 0,
              questions: [
                {
                  id: 3207,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4219,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5269, value: "ろくじです。", check: false },
                        { id: 5270, value: "あさごはんです。", check: true },
                        { id: 5271, value: "きのうです。", check: false },
                        { id: 5272, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4220,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5273, value: "べんきょうします。", check: false },
                        { id: 5274, value: "たべます。", check: true },
                        { id: 5275, value: "がっこうです。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 1202,
          name: "Đề Thi JLPT N3 Số 3",
          exp:12,
          status:false,
          people: 7100,
          time: 160,
          structure: [
            {
              id: 2206,
              name: "Chữ hán - Từ vựng",
              time: 30,
              quantity: 27,
              score: 0,
              questions: [
                {
                  id: 3208,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4221,
                      name: "、がっこうにいきます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5276, value: "毎朝", check: false },
                        { id: 5277, value: "毎晩", check: true },
                        { id: 5278, value: "毎週", check: false },
                        { id: 5279, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4222,
                      name: "、ともだちとあそびます。",
                      special: "こんしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5280, value: "今週", check: false },
                        { id: 5281, value: "来週", check: true },
                        { id: 5282, value: "先週", check: false }
                      ]
                    },
                    {
                      id: 4223,
                      name: "、えいがをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5283, value: "昨日", check: false },
                        { id: 5284, value: "今日", check: true },
                        { id: 5285, value: "明日", check: false },
                        { id: 5286, value: "先月", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3209,
                  name: "Nhóm câu hỏi 2",
                  problem: "もんだい2",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4224,
                      name: "、かいものにいきます。",
                      special: "らいげつ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5287, value: "今月", check: false },
                        { id: 5288, value: "来月", check: false },
                        { id: 5289, value: "先月", check: true },
                        { id: 5290, value: "昨日", check: false }
                      ]
                    },
                    {
                      id: 4225,
                      name: "、にほんへいきます。",
                      special: "らいねん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5291, value: "今年", check: false },
                        { id: 5292, value: "来年", check: false },
                        { id: 5293, value: "去年", check: true }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2207,
              name: "Ngữ pháp - Đọc hiểu",
              time: 70,
              quantity: 29,
              score: 0,
              questions: [
                {
                  id: 3210,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4226,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5294, value: "はちじです。", check: false },
                        { id: 5295, value: "あさごはんです。", check: true },
                        { id: 5296, value: "きのうです。", check: false },
                        { id: 5297, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4227,
                      name: "これはだれのほんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5298, value: "せんせいのほんです。", check: false },
                        { id: 5299, value: "たべものです。", check: true },
                        { id: 5300, value: "がっこうです。", check: false }
                      ]
                    },
                    {
                      id: 4228,
                      name: "どこでべんきょうしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5301, value: "としょかんでべんきょうします。", check: false },
                        { id: 5302, value: "ともだちといきます。", check: true },
                        { id: 5303, value: "きのうでした。", check: false },
                        { id: 5304, value: "くるまでいきます。", check: false }
                      ]
                    },
                    {
                      id: 4229,
                      name: "なにをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5305, value: "ラーメンをたべます。", check: false },
                        { id: 5306, value: "ほんをよみます。", check: false },
                        { id: 5307, value: "がっこうにいきます。", check: true },
                        { id: 5308, value: "ともだちにあいます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2208,
              name: "Nghe",
              time: 50,
              quantity: 26,
              score: 0,
              questions: [
                {
                  id: 3211,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4230,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5309, value: "こうえんにいます。", check: false },
                        { id: 5310, value: "たべます。", check: true },
                        { id: 5311, value: "きのうでした。", check: false }
                      ]
                    },
                    {
                      id: 4231,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5312, value: "うんどうします。", check: false },
                        { id: 5313, value: "たべます。", check: true },
                        { id: 5314, value: "がっこうです。", check: false },
                        { id: 5315, value: "ほんをよみます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 1203,
          name: "Đề Thi JLPT N3 Số 4",
          exp:12,
          status:false,
          people: 6900,
          time: 160,
          structure: [
            {
              id: 2209,
              name: "Chữ hán - Từ vựng",
              time: 30,
              quantity: 29,
              score: 0,
              questions: [
                {
                  id: 3212,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4232,
                      name: "、かいぎにでます。",
                      special: "こんしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5316, value: "今週", check: false },
                        { id: 5317, value: "来週", check: true },
                        { id: 5318, value: "先週", check: false },
                        { id: 5319, value: "毎週", check: false }
                      ]
                    },
                    {
                      id: 4233,
                      name: "、てがみをかきます。",
                      special: "あした",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5320, value: "昨日", check: false },
                        { id: 5321, value: "今日", check: true },
                        { id: 5322, value: "明日", check: false }
                      ]
                    },
                    {
                      id: 4234,
                      name: "、ともだちとでかけました。",
                      special: "せんしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5323, value: "今週", check: false },
                        { id: 5324, value: "先週", check: false },
                        { id: 5325, value: "来週", check: true },
                        { id: 5326, value: "毎日", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3213,
                  name: "Nhóm câu hỏi 2",
                  problem: "もんだい2",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4235,
                      name: "、にほんごをべんきょうします。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5327, value: "毎朝", check: false },
                        { id: 5328, value: "毎晩", check: true },
                        { id: 5329, value: "毎週", check: false }
                      ]
                    },
                    {
                      id: 4236,
                      name: "、やまにのぼります。",
                      special: "らいげつ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5330, value: "今月", check: false },
                        { id: 5331, value: "来月", check: false },
                        { id: 5332, value: "先月", check: true },
                        { id: 5333, value: "昨日", check: false }
                      ]
                    },
                    {
                      id: 4237,
                      name: "、うみにいきました。",
                      special: "きょねん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5334, value: "今年", check: false },
                        { id: 5335, value: "去年", check: false },
                        { id: 5336, value: "来年", check: true },
                        { id: 5337, value: "今週", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2210,
              name: "Ngữ pháp - Đọc hiểu",
              time: 70,
              quantity: 28,
              score: 0,
              questions: [
                {
                  id: 3214,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4238,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5338, value: "しちじです。", check: false },
                        { id: 5339, value: "ひるごはんです。", check: true },
                        { id: 5340, value: "きのうです。", check: false },
                        { id: 5341, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4239,
                      name: "これはだれのかさですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5342, value: "わたしのものです。", check: false },
                        { id: 5343, value: "たべものです。", check: true },
                        { id: 5344, value: "がっこうです。", check: false }
                      ]
                    },
                    {
                      id: 4240,
                      name: "どこでごはんをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5345, value: "いえでたべます。", check: false },
                        { id: 5346, value: "ともだちといきます。", check: true },
                        { id: 5347, value: "きのうでした。", check: false },
                        { id: 5348, value: "くるまでいきます。", check: false }
                      ]
                    },
                    {
                      id: 4241,
                      name: "なにをのみますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5349, value: "みずをのみます。", check: false },
                        { id: 5350, value: "ほんをよみます。", check: false },
                        { id: 5351, value: "がっこうにいきます。", check: true },
                        { id: 5352, value: "ともだちにあいます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2211,
              name: "Nghe",
              time: 50,
              quantity: 27,
              score: 0,
              questions: [
                {
                  id: 3215,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4242,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5353, value: "かばんです。", check: false },
                        { id: 5354, value: "たべものです。", check: true },
                        { id: 5355, value: "がっこうです。", check: false },
                        { id: 5356, value: "ともだちです。", check: false }
                      ]
                    },
                    {
                      id: 4243,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5357, value: "こうえんにいます。", check: false },
                        { id: 5358, value: "きのうでした。", check: true },
                        { id: 5359, value: "たべます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 1204,
          name: "Đề Thi JLPT N3 Số 5",
          exp:12,
          status:false,
          people: 7000,
          time: 160,
          structure: [
            {
              id: 2212,
              name: "Chữ hán - Từ vựng",
              time: 30,
              quantity: 28,
              score: 0,
              questions: [
                {
                  id: 3216,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4244,
                      name: "、がっこうにいきます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5360, value: "毎朝", check: false },
                        { id: 5361, value: "毎晩", check: true },
                        { id: 5362, value: "毎週", check: false },
                        { id: 5363, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4245,
                      name: "、ともだちとあそびます。",
                      special: "こんしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5364, value: "今週", check: false },
                        { id: 5365, value: "来週", check: true },
                        { id: 5366, value: "先週", check: false }
                      ]
                    },
                    {
                      id: 4246,
                      name: "、えいがをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5367, value: "昨日", check: false },
                        { id: 5368, value: "今日", check: true },
                        { id: 5369, value: "明日", check: false },
                        { id: 5370, value: "先月", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2213,
              name: "Ngữ pháp - Đọc hiểu",
              time: 70,
              quantity: 27,
              score: 0,
              questions: [
                {
                  id: 3217,
                  name: "Nhóm câu hỏi 2",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4247,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5371, value: "いえにいます。", check: false },
                        { id: 5372, value: "たべます。", check: true },
                        { id: 5373, value: "ともだちです。", check: false },
                        { id: 5374, value: "きのうでした。", check: false }
                      ]
                    },
                    {
                      id: 4248,
                      name: "なにをのみますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5375, value: "おちゃをのみます。", check: false },
                        { id: 5376, value: "ほんをよみます。", check: true },
                        { id: 5377, value: "がっこうにいきます。", check: false }
                      ]
                    },
                    {
                      id: 4249,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5378, value: "えんぴつです。", check: false },
                        { id: 5379, value: "たべものです。", check: true },
                        { id: 5380, value: "ともだちです。", check: false },
                        { id: 5381, value: "がっこうです。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3218,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4250,
                      name: "あしたはなにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5382, value: "かいものにいきます。", check: false },
                        { id: 5383, value: "きのうでした。", check: true },
                        { id: 5384, value: "がっこうです。", check: false },
                        { id: 5385, value: "ともだちにあいます。", check: false }
                      ]
                    },
                    {
                      id: 4251,
                      name: "でんしゃでいきますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5386, value: "はい、でんしゃでいきます。", check: false },
                        { id: 5387, value: "いいえ、がっこうです。", check: true },
                        { id: 5388, value: "ともだちといきます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2214,
              name: "Nghe",
              time: 50,
              quantity: 26,
              score: 0,
              questions: [
                {
                  id: 3219,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4252,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5389, value: "ろくじです。", check: false },
                        { id: 5390, value: "あさごはんです。", check: true },
                        { id: 5391, value: "きのうです。", check: false },
                        { id: 5392, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4253,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5393, value: "べんきょうします。", check: false },
                        { id: 5394, value: "たべます。", check: true },
                        { id: 5395, value: "がっこうです。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 1205,
          name: "Đề Thi JLPT N3 Số 6",
          exp:12,
          status:false,
          people: 7300,
          time: 160,
          structure: [
            {
              id: 2215,
              name: "Chữ hán - Từ vựng",
              time: 30,
              quantity: 30,
              score: 0,
              questions: [
                {
                  id: 3220,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4254,
                      name: "、がっこうにいきます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5396, value: "毎朝", check: false },
                        { id: 5397, value: "毎晩", check: true },
                        { id: 5398, value: "毎週", check: false },
                        { id: 5399, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4255,
                      name: "、ともだちとあそびます。",
                      special: "こんしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5400, value: "今週", check: false },
                        { id: 5401, value: "来週", check: true },
                        { id: 5402, value: "先週", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3221,
                  name: "Nhóm câu hỏi 2",
                  problem: "もんだい2",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4256,
                      name: "、えいがをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5403, value: "昨日", check: false },
                        { id: 5404, value: "今日", check: true },
                        { id: 5405, value: "明日", check: false },
                        { id: 5406, value: "先月", check: false }
                      ]
                    },
                    {
                      id: 4257,
                      name: "、かいものにいきます。",
                      special: "らいげつ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5407, value: "今月", check: false },
                        { id: 5408, value: "来月", check: false },
                        { id: 5409, value: "先月", check: true },
                        { id: 5410, value: "昨日", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2216,
              name: "Ngữ pháp - Đọc hiểu",
              time: 70,
              quantity: 29,
              score: 0,
              questions: [
                {
                  id: 3222,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4258,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5411, value: "はちじです。", check: false },
                        { id: 5412, value: "あさごはんです。", check: true },
                        { id: 5413, value: "きのうです。", check: false },
                        { id: 5414, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4259,
                      name: "これはだれのほんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5415, value: "せんせいのほんです。", check: false },
                        { id: 5416, value: "たべものです。", check: true },
                        { id: 5417, value: "がっこうです。", check: false }
                      ]
                    },
                    {
                      id: 4260,
                      name: "どこでべんきょうしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5418, value: "としょかんでべんきょうします。", check: false },
                        { id: 5419, value: "ともだちといきます。", check: true },
                        { id: 5420, value: "きのうでした。", check: false },
                        { id: 5421, value: "くるまでいきます。", check: false }
                      ]
                    },
                    {
                      id: 4261,
                      name: "なにをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5422, value: "ラーメンをたべます。", check: false },
                        { id: 5423, value: "ほんをよみます。", check: false },
                        { id: 5424, value: "がっこうにいきます。", check: true },
                        { id: 5425, value: "ともだちにあいます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2217,
              name: "Nghe",
              time: 50,
              quantity: 25,
              score: 0,
              questions: [
                {
                  id: 3223,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4262,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5426, value: "こうえんにいます。", check: false },
                        { id: 5427, value: "たべます。", check: true },
                        { id: 5428, value: "きのうでした。", check: false }
                      ]
                    },
                    {
                      id: 4263,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5429, value: "うんどうします。", check: false },
                        { id: 5430, value: "たべます。", check: true },
                        { id: 5431, value: "がっこうです。", check: false },
                        { id: 5432, value: "ほんをよみます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 1206,
          name: "Đề Thi JLPT N3 Số 7",
          exp:12,
          status:false,
          people: 7400,
          time: 160,
          structure: [
            {
              id: 2218,
              name: "Chữ hán - Từ vựng",
              time: 30,
              quantity: 27,
              score: 0,
              questions: [
                {
                  id: 3224,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4264,
                      name: "、がっこうにいきます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5433, value: "毎朝", check: false },
                        { id: 5434, value: "毎晩", check: true },
                        { id: 5435, value: "毎週", check: false },
                        { id: 5436, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4265,
                      name: "、ともだちとあそびます。",
                      special: "こんしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5437, value: "今週", check: false },
                        { id: 5438, value: "来週", check: true },
                        { id: 5439, value: "先週", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3225,
                  name: "Nhóm câu hỏi 2",
                  problem: "もんだい2",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4266,
                      name: "、えいがをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5440, value: "昨日", check: false },
                        { id: 5441, value: "今日", check: true },
                        { id: 5442, value: "明日", check: false },
                        { id: 5443, value: "先月", check: false }
                      ]
                    },
                    {
                      id: 4267,
                      name: "、かいものにいきます。",
                      special: "らいげつ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5444, value: "今月", check: false },
                        { id: 5445, value: "来月", check: false },
                        { id: 5446, value: "先月", check: true },
                        { id: 5447, value: "昨日", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2219,
              name: "Ngữ pháp - Đọc hiểu",
              time: 70,
              quantity: 28,
              score: 0,
              questions: [
                {
                  id: 3226,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4268,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5448, value: "はちじです。", check: false },
                        { id: 5449, value: "あさごはんです。", check: true },
                        { id: 5450, value: "きのうです。", check: false },
                        { id: 5451, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4269,
                      name: "これはだれのほんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5452, value: "せんせいのほんです。", check: false },
                        { id: 5453, value: "たべものです。", check: true },
                        { id: 5454, value: "がっこうです。", check: false }
                      ]
                    },
                    {
                      id: 4270,
                      name: "どこでべんきょうしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5455, value: "としょかんでべんきょうします。", check: false },
                        { id: 5456, value: "ともだちといきます。", check: true },
                        { id: 5457, value: "きのうでした。", check: false },
                        { id: 5458, value: "くるまでいきます。", check: false }
                      ]
                    },
                    {
                      id: 4271,
                      name: "なにをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5459, value: "ラーメンをたべます。", check: false },
                        { id: 5460, value: "ほんをよみます。", check: false },
                        { id: 5461, value: "がっこうにいきます。", check: true },
                        { id: 5462, value: "ともだちにあいます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2220,
              name: "Nghe",
              time: 50,
              quantity: 26,
              score: 0,
              questions: [
                {
                  id: 3227,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4272,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5463, value: "かばんです。", check: false },
                        { id: 5464, value: "たべものです。", check: true },
                        { id: 5465, value: "がっこうです。", check: false },
                        { id: 5466, value: "ともだちです。", check: false }
                      ]
                    },
                    {
                      id: 4273,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5467, value: "こうえんにいます。", check: false },
                        { id: 5468, value: "きのうでした。", check: true },
                        { id: 5469, value: "たべます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 103,
      name: "Tiếng Nhật JLPT N4",
      image: "",
      time: 150,
      people: 8000,
      exams: [
        {
          id: 1300,
          name: "Đề Thi JLPT N4 Số 1",
          exp:12,
          status:false,
          people: 7500,
          time: 150,
          structure: [
            {
              id: 2300,
              name: "Chữ hán - Từ vựng",
              time: 20,
              quantity: 20,
              score: 0,
              questions: [
                {
                  id: 3300,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4300,
                      name: "、がっこうにいきます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5500, value: "毎朝", check: true },
                        { id: 5501, value: "毎晩", check: false },
                        { id: 5502, value: "毎週", check: false },
                        { id: 5503, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4301,
                      name: "、ともだちにあいます。",
                      special: "こんばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5504, value: "今朝", check: false },
                        { id: 5505, value: "今晩", check: true },
                        { id: 5506, value: "昨日", check: false }
                      ]
                    },
                    {
                      id: 4302,
                      name: "、えいがをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5507, value: "今日", check: false },
                        { id: 5508, value: "昨日", check: false },
                        { id: 5509, value: "明日", check: true },
                        { id: 5510, value: "先週", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3301,
                  name: "Nhóm câu hỏi 2",
                  problem: "もんだい2",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4303,
                      name: "、かいものにいきます。",
                      special: "あした",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5511, value: "昨日", check: false },
                        { id: 5512, value: "今日", check: false },
                        { id: 5513, value: "明日", check: true },
                        { id: 5514, value: "来週", check: false }
                      ]
                    },
                    {
                      id: 4304,
                      name: "、にほんごをべんきょうします。",
                      special: "まいばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5515, value: "毎朝", check: false },
                        { id: 5516, value: "毎晩", check: true },
                        { id: 5517, value: "毎週", check: false }
                      ]
                    },
                    {
                      id: 4305,
                      name: "、おかしをかいました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5518, value: "昨日", check: true },
                        { id: 5519, value: "今日", check: false },
                        { id: 5520, value: "明日", check: false },
                        { id: 5521, value: "先月", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3302,
                  name: "Nhóm câu hỏi 3",
                  problem: "もんだい3",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4306,
                      name: "、ほんをよみます。",
                      special: "まいばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5522, value: "毎朝", check: false },
                        { id: 5523, value: "毎晩", check: true },
                        { id: 5524, value: "毎週", check: false }
                      ]
                    },
                    {
                      id: 4307,
                      name: "、こうえんにいきます。",
                      special: "らいしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5525, value: "今週", check: false },
                        { id: 5526, value: "来週", check: true },
                        { id: 5527, value: "先週", check: false },
                        { id: 5528, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4308,
                      name: "、いぬをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5529, value: "昨日", check: true },
                        { id: 5530, value: "今日", check: false },
                        { id: 5531, value: "明日", check: false },
                        { id: 5532, value: "先月", check: false }
                      ]
                    },
                    {
                      id: 4309,
                      name: "、てがみをかきます。",
                      special: "あした",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5533, value: "昨日", check: false },
                        { id: 5534, value: "今日", check: false },
                        { id: 5535, value: "明日", check: true },
                        { id: 5536, value: "来月", check: false }
                      ]
                    },
                    {
                      id: 4310,
                      name: "、ねこをかいます。",
                      special: "らいしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5537, value: "今週", check: false },
                        { id: 5538, value: "来週", check: true },
                        { id: 5539, value: "先週", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2301,
              name: "Ngữ pháp - Đọc hiểu",
              time: 70,
              quantity: 22,
              score: 0,
              questions: [
                {
                  id: 3303,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4311,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5540, value: "ごじです。", check: false },
                        { id: 5541, value: "ひるごはんです。", check: true },
                        { id: 5542, value: "あしたです。", check: false },
                        { id: 5543, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4312,
                      name: "これはだれのほんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5544, value: "わたしのほんです。", check: false },
                        { id: 5545, value: "たべものです。", check: true },
                        { id: 5546, value: "がっこうです。", check: false }
                      ]
                    },
                    {
                      id: 4313,
                      name: "どこでべんきょうしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5547, value: "としょかんでべんきょうします。", check: false },
                        { id: 5548, value: "ともだちといきます。", check: true },
                        { id: 5549, value: "きのうでした。", check: false },
                        { id: 5550, value: "くるまでいきます。", check: false }
                      ]
                    },
                    {
                      id: 4314,
                      name: "なにをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5551, value: "すしをたべます。", check: false },
                        { id: 5552, value: "ほんをよみます。", check: false },
                        { id: 5553, value: "がっこうにいきます。", check: true },
                        { id: 5554, value: "ともだちにあいます。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3304,
                  name: "Nhóm câu hỏi 5",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4315,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5555, value: "いえにいます。", check: false },
                        { id: 5556, value: "たべます。", check: true },
                        { id: 5557, value: "ともだちです。", check: false }
                      ]
                    },
                    {
                      id: 4316,
                      name: "なにをのみますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5558, value: "おちゃをのみます。", check: false },
                        { id: 5559, value: "ほんをよみます。", check: true },
                        { id: 5560, value: "がっこうにいきます。", check: false },
                        { id: 5561, value: "ともだちにあいます。", check: false }
                      ]
                    },
                    {
                      id: 4317,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5562, value: "えんぴつです。", check: false },
                        { id: 5563, value: "たべものです。", check: true },
                        { id: 5564, value: "ともだちです。", check: false },
                        { id: 5565, value: "がっこうです。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3305,
                  name: "Nhóm câu hỏi 6",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4318,
                      name: "あしたはなにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5566, value: "かいものにいきます。", check: false },
                        { id: 5567, value: "きのうでした。", check: true },
                        { id: 5568, value: "がっこうです。", check: false },
                        { id: 5569, value: "ともだちにあいます。", check: false }
                      ]
                    },
                    {
                      id: 4319,
                      name: "でんしゃでいきますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5570, value: "はい、でんしゃでいきます。", check: false },
                        { id: 5571, value: "いいえ、がっこうです。", check: true },
                        { id: 5572, value: "ともだちといきます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2302,
              name: "Nghe",
              time: 50,
              quantity: 18,
              score: 0,
              questions: [
                {
                  id: 3306,
                  name: "Nhóm câu hỏi 7",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4320,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5573, value: "ろくじです。", check: false },
                        { id: 5574, value: "あさごはんです。", check: true },
                        { id: 5575, value: "きのうです。", check: false },
                        { id: 5576, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4321,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5577, value: "べんきょうします。", check: false },
                        { id: 5578, value: "たべます。", check: true },
                        { id: 5579, value: "がっこうです。", check: false }
                      ]
                    },
                    {
                      id: 4322,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5580, value: "かばんです。", check: false },
                        { id: 5581, value: "たべものです。", check: true },
                        { id: 5582, value: "がっこうです。", check: false },
                        { id: 5583, value: "ともだちです。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3307,
                  name: "Nhóm câu hỏi 8",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4323,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5584, value: "こうえんにいます。", check: false },
                        { id: 5585, value: "たべます。", check: true },
                        { id: 5586, value: "きのうでした。", check: false }
                      ]
                    },
                    {
                      id: 4324,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5587, value: "うんどうします。", check: false },
                        { id: 5588, value: "たべます。", check: true },
                        { id: 5589, value: "がっこうです。", check: false },
                        { id: 5590, value: "ほんをよみます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 1302,
          name: "Đề Thi JLPT N4 Số 2",
          exp:12,
          status:false,
          people: 7600,
          time: 150,
          structure: [
            {
              id: 2303,
              name: "Chữ hán - Từ vựng",
              time: 20,
              quantity: 24,
              score: 0,
              questions: [
                {
                  id: 3308,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4325,
                      name: "、がっこうにいきます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5591, value: "毎朝", check: false },
                        { id: 5592, value: "毎晩", check: true },
                        { id: 5593, value: "毎週", check: false },
                        { id: 5594, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4326,
                      name: "、ともだちとあそびます。",
                      special: "こんしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5595, value: "今週", check: false },
                        { id: 5596, value: "来週", check: true },
                        { id: 5597, value: "先週", check: false }
                      ]
                    },
                    {
                      id: 4327,
                      name: "、えいがをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5598, value: "昨日", check: false },
                        { id: 5599, value: "今日", check: true },
                        { id: 5600, value: "明日", check: false },
                        { id: 5601, value: "先月", check: false }
                      ]
                    },
                    {
                      id: 4328,
                      name: "、かいものにいきます。",
                      special: "らいげつ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5602, value: "今月", check: false },
                        { id: 5603, value: "来月", check: false },
                        { id: 5604, value: "先月", check: true },
                        { id: 5605, value: "昨日", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3309,
                  name: "Nhóm câu hỏi 2",
                  problem: "もんだい2",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4329,
                      name: "、ほんをかいます。",
                      special: "あした",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5606, value: "昨日", check: false },
                        { id: 5607, value: "今日", check: false },
                        { id: 5608, value: "明日", check: true },
                        { id: 5609, value: "来月", check: false }
                      ]
                    },
                    {
                      id: 4330,
                      name: "、ねこをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5610, value: "昨日", check: true },
                        { id: 5611, value: "今日", check: false },
                        { id: 5612, value: "明日", check: false }
                      ]
                    },
                    {
                      id: 4331,
                      name: "、いぬをかいます。",
                      special: "らいしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5613, value: "今週", check: false },
                        { id: 5614, value: "来週", check: true },
                        { id: 5615, value: "先週", check: false },
                        { id: 5616, value: "毎日", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3310,
                  name: "Nhóm câu hỏi 3",
                  problem: "もんだい3",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4332,
                      name: "、てがみをかきます。",
                      special: "あした",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5617, value: "昨日", check: false },
                        { id: 5618, value: "今日", check: false },
                        { id: 5619, value: "明日", check: true },
                        { id: 5620, value: "来月", check: false }
                      ]
                    },
                    {
                      id: 4333,
                      name: "、こうえんにいきます。",
                      special: "らいしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5621, value: "今週", check: false },
                        { id: 5622, value: "来週", check: true },
                        { id: 5623, value: "先週", check: false }
                      ]
                    },
                    {
                      id: 4334,
                      name: "、ほんをよみます。",
                      special: "まいばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5624, value: "毎朝", check: false },
                        { id: 5625, value: "毎晩", check: true },
                        { id: 5626, value: "毎週", check: false },
                        { id: 5627, value: "毎日", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2304,
              name: "Ngữ pháp - Đọc hiểu",
              time: 70,
              quantity: 22,
              score: 0,
              questions: [
                {
                  id: 3311,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4335,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5628, value: "はちじです。", check: false },
                        { id: 5629, value: "あさごはんです。", check: true },
                        { id: 5630, value: "きのうです。", check: false },
                        { id: 5631, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4336,
                      name: "これはだれのほんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5632, value: "せんせいのほんです。", check: false },
                        { id: 5633, value: "たべものです。", check: true },
                        { id: 5634, value: "がっこうです。", check: false }
                      ]
                    },
                    {
                      id: 4337,
                      name: "どこでべんきょうしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5635, value: "としょかんでべんきょうします。", check: false },
                        { id: 5636, value: "ともだちといきます。", check: true },
                        { id: 5637, value: "きのうでした。", check: false },
                        { id: 5638, value: "くるまでいきます。", check: false }
                      ]
                    },
                    {
                      id: 4338,
                      name: "なにをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5639, value: "ラーメンをたべます。", check: false },
                        { id: 5640, value: "ほんをよみます。", check: false },
                        { id: 5641, value: "がっこうにいきます。", check: true },
                        { id: 5642, value: "ともだちにあいます。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3312,
                  name: "Nhóm câu hỏi 5",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4339,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5643, value: "いえにいます。", check: false },
                        { id: 5644, value: "たべます。", check: true },
                        { id: 5645, value: "ともだちです。", check: false }
                      ]
                    },
                    {
                      id: 4340,
                      name: "なにをのみますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5646, value: "おちゃをのみます。", check: false },
                        { id: 5647, value: "ほんをよみます。", check: true },
                        { id: 5648, value: "がっこうにいきます。", check: false },
                        { id: 5649, value: "ともだちにあいます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2305,
              name: "Nghe",
              time: 50,
              quantity: 20,
              score: 0,
              questions: [
                {
                  id: 3313,
                  name: "Nhóm câu hỏi 6",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4341,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5650, value: "ろくじです。", check: false },
                        { id: 5651, value: "あさごはんです。", check: true },
                        { id: 5652, value: "きのうです。", check: false },
                        { id: 5653, value: "はい、そうです。", check: false }
                      ]
                    },
                    {
                      id: 4342,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5654, value: "べんきょうします。", check: false },
                        { id: 5655, value: "たべます。", check: true },
                        { id: 5656, value: "がっこうです。", check: false }
                      ]
                    },
                    {
                      id: 4343,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5657, value: "かばんです。", check: false },
                        { id: 5658, value: "たべものです。", check: true },
                        { id: 5659, value: "がっこうです。", check: false },
                        { id: 5660, value: "ともだちです。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3314,
                  name: "Nhóm câu hỏi 7",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4344,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5661, value: "こうえんにいます。", check: false },
                        { id: 5662, value: "たべます。", check: true },
                        { id: 5663, value: "きのうでした。", check: false }
                      ]
                    },
                    {
                      id: 4345,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 5664, value: "うんどうします。", check: false },
                        { id: 5665, value: "たべます。", check: true },
                        { id: 5666, value: "がっこうです。", check: false },
                        { id: 5667, value: "ほんをよみます。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 104,
      name: "Tiếng Nhật JLPT N5",
      image: "",
      time: 140,
      people: 9000,
      exams: [
        {
          id: 1400,
          name: "Đề Thi JLPT N5 Số 1",
          exp:12,
          status:false,
          people: 8500,
          time: 140,
          structure: [
            {
              id: 2400,
              name: "Chữ hán - Từ vựng",
              time: 20,
              quantity: 44,
              score: 0,
              questions: [
                {
                  id: 3400,
                  name: "Nhóm câu hỏi 1",
                  problem: "もんだい1",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4400,
                      name: "、がっこうにいきます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6000, value: "毎朝", check: true },
                        { id: 6001, value: "毎晩", check: false },
                        { id: 6002, value: "毎週", check: false },
                        { id: 6003, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4401,
                      name: "、ともだちにあいます。",
                      special: "こんばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6004, value: "今朝", check: false },
                        { id: 6005, value: "今晩", check: true },
                        { id: 6006, value: "昨日", check: false }
                      ]
                    },
                    {
                      id: 4402,
                      name: "、えいがをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6007, value: "今日", check: false },
                        { id: 6008, value: "昨日", check: true },
                        { id: 6009, value: "明日", check: false },
                        { id: 6010, value: "先週", check: false }
                      ]
                    },
                    {
                      id: 4403,
                      name: "、かいものにいきます。",
                      special: "あした",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6011, value: "昨日", check: false },
                        { id: 6012, value: "今日", check: false },
                        { id: 6013, value: "明日", check: true },
                        { id: 6014, value: "来週", check: false }
                      ]
                    },
                    {
                      id: 4404,
                      name: "、にほんごをべんきょうします。",
                      special: "まいばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6015, value: "毎朝", check: false },
                        { id: 6016, value: "毎晩", check: true },
                        { id: 6017, value: "毎週", check: false }
                      ]
                    },
                    {
                      id: 4405,
                      name: "、おかしをかいました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6018, value: "昨日", check: true },
                        { id: 6019, value: "今日", check: false },
                        { id: 6020, value: "明日", check: false },
                        { id: 6021, value: "先月", check: false }
                      ]
                    },
                    {
                      id: 4406,
                      name: "、ほんをよみます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6022, value: "毎朝", check: true },
                        { id: 6023, value: "毎晩", check: false },
                        { id: 6024, value: "毎週", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3401,
                  name: "Nhóm câu hỏi 2",
                  problem: "もんだい2",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4407,
                      name: "、こうえんにいきます。",
                      special: "らいしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6025, value: "今週", check: false },
                        { id: 6026, value: "来週", check: true },
                        { id: 6027, value: "先週", check: false },
                        { id: 6028, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4408,
                      name: "、いぬをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6029, value: "昨日", check: true },
                        { id: 6030, value: "今日", check: false },
                        { id: 6031, value: "明日", check: false }
                      ]
                    },
                    {
                      id: 4409,
                      name: "、てがみをかきます。",
                      special: "あした",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6032, value: "昨日", check: false },
                        { id: 6033, value: "今日", check: false },
                        { id: 6034, value: "明日", check: true },
                        { id: 6035, value: "来月", check: false }
                      ]
                    },
                    {
                      id: 4410,
                      name: "、ねこをかいます。",
                      special: "らいしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6036, value: "今週", check: false },
                        { id: 6037, value: "来週", check: true },
                        { id: 6038, value: "先週", check: false }
                      ]
                    },
                    {
                      id: 4411,
                      name: "、おみずをのみます。",
                      special: "いま",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6039, value: "昨日", check: false },
                        { id: 6040, value: "今", check: true },
                        { id: 6041, value: "明日", check: false },
                        { id: 6042, value: "毎週", check: false }
                      ]
                    },
                    {
                      id: 4412,
                      name: "、ともだちとあそびます。",
                      special: "こんしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6043, value: "今週", check: true },
                        { id: 6044, value: "来週", check: false },
                        { id: 6045, value: "先週", check: false },
                        { id: 6046, value: "毎日", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3402,
                  name: "Nhóm câu hỏi 3",
                  problem: "もんだい3",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4413,
                      name: "、パンをつくります。",
                      special: "あした",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6047, value: "昨日", check: false },
                        { id: 6048, value: "今日", check: false },
                        { id: 6049, value: "明日", check: true }
                      ]
                    },
                    {
                      id: 4414,
                      name: "、てれびをみます。",
                      special: "まいばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6050, value: "毎朝", check: false },
                        { id: 6051, value: "毎晩", check: true },
                        { id: 6052, value: "毎週", check: false },
                        { id: 6053, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4415,
                      name: "、ほんをかいました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6054, value: "昨日", check: true },
                        { id: 6055, value: "今日", check: false },
                        { id: 6056, value: "明日", check: false },
                        { id: 6057, value: "先月", check: false }
                      ]
                    },
                    {
                      id: 4416,
                      name: "、がっこうにいきます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6058, value: "毎朝", check: true },
                        { id: 6059, value: "毎晩", check: false },
                        { id: 6060, value: "毎週", check: false }
                      ]
                    },
                    {
                      id: 4417,
                      name: "、ともだちとでかけます。",
                      special: "らいしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6061, value: "今週", check: false },
                        { id: 6062, value: "来週", check: true },
                        { id: 6063, value: "先週", check: false },
                        { id: 6064, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4418,
                      name: "、みずをのみます。",
                      special: "いま",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6065, value: "昨日", check: false },
                        { id: 6066, value: "今", check: true },
                        { id: 6067, value: "明日", check: false },
                        { id: 6068, value: "毎週", check: false }
                      ]
                    },
                    {
                      id: 4419,
                      name: "、おちゃをのみます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6069, value: "毎朝", check: true },
                        { id: 6070, value: "毎晩", check: false },
                        { id: 6071, value: "毎週", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3403,
                  name: "Nhóm câu hỏi 4",
                  problem: "もんだい4",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4420,
                      name: "、ほんをよみます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6072, value: "毎朝", check: true },
                        { id: 6073, value: "毎晩", check: false },
                        { id: 6074, value: "毎週", check: false },
                        { id: 6075, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4421,
                      name: "、がっこうにいきます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6076, value: "毎朝", check: true },
                        { id: 6077, value: "毎晩", check: false },
                        { id: 6078, value: "毎週", check: false }
                      ]
                    },
                    {
                      id: 4422,
                      name: "、ともだちとあそびます。",
                      special: "こんしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6079, value: "今週", check: true },
                        { id: 6080, value: "来週", check: false },
                        { id: 6081, value: "先週", check: false },
                        { id: 8082, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4423,
                      name: "、えいがをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6083, value: "昨日", check: true },
                        { id: 6084, value: "今日", check: false },
                        { id: 6085, value: "明日", check: false },
                        { id: 6086, value: "先月", check: false }
                      ]
                    },
                    {
                      id: 4424,
                      name: "、かいものにいきます。",
                      special: "あした",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6087, value: "昨日", check: false },
                        { id: 6088, value: "今日", check: false },
                        { id: 6089, value: "明日", check: true },
                        { id: 6090, value: "来週", check: false }
                      ]
                    },
                    {
                      id: 4425,
                      name: "、にほんごをべんきょうします。",
                      special: "まいばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6091, value: "毎朝", check: false },
                        { id: 6092, value: "毎晩", check: true },
                        { id: 6093, value: "毎週", check: false }
                      ]
                    },
                    {
                      id: 4426,
                      name: "、おかしをかいました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6094, value: "昨日", check: true },
                        { id: 6095, value: "今日", check: false },
                        { id: 6096, value: "明日", check: false },
                        { id: 6097, value: "先月", check: false }
                      ]
                    },
                    {
                      id: 4427,
                      name: "、てれびをみます。",
                      special: "こんばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6098, value: "今朝", check: false },
                        { id: 6099, value: "今晩", check: true },
                        { id: 6100, value: "昨日", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3404,
                  name: "Nhóm câu hỏi 5",
                  problem: "もんだい5",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4428,
                      name: "、みずをのみます。",
                      special: "いま",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6101, value: "昨日", check: false },
                        { id: 6102, value: "今", check: true },
                        { id: 6103, value: "明日", check: false },
                        { id: 6104, value: "毎週", check: false }
                      ]
                    },
                    {
                      id: 4429,
                      name: "、ほんをかいます。",
                      special: "あした",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6105, value: "昨日", check: false },
                        { id: 6106, value: "今日", check: false },
                        { id: 6107, value: "明日", check: true },
                        { id: 6108, value: "来月", check: false }
                      ]
                    },
                    {
                      id: 4430,
                      name: "、ねこをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6109, value: "昨日", check: true },
                        { id: 6110, value: "今日", check: false },
                        { id: 6111, value: "明日", check: false }
                      ]
                    },
                    {
                      id: 4431,
                      name: "、いぬをかいます。",
                      special: "らいしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6112, value: "今週", check: false },
                        { id: 6113, value: "来週", check: true },
                        { id: 6114, value: "先週", check: false },
                        { id: 6115, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4432,
                      name: "、てがみをかきます。",
                      special: "あした",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6116, value: "昨日", check: false },
                        { id: 6117, value: "今日", check: false },
                        { id: 6118, value: "明日", check: true },
                        { id: 6119, value: "来月", check: false }
                      ]
                    },
                    {
                      id: 4433,
                      name: "、こうえんにいきます。",
                      special: "らいしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6120, value: "今週", check: false },
                        { id: 6121, value: "来週", check: true },
                        { id: 6122, value: "先週", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3405,
                  name: "Nhóm câu hỏi 6",
                  problem: "もんだい6",
                  text: "下の文の ____ に一番適切な言葉を選んでください。",
                  list: [
                    {
                      id: 4434,
                      name: "、ほんをよみます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6123, value: "毎朝", check: true },
                        { id: 6124, value: "毎晩", check: false },
                        { id: 6125, value: "毎週", check: false },
                        { id: 6126, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4435,
                      name: "、がっこうにいきます。",
                      special: "まいあさ",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6127, value: "毎朝", check: true },
                        { id: 6128, value: "毎晩", check: false },
                        { id: 6129, value: "毎週", check: false }
                      ]
                    },
                    {
                      id: 4436,
                      name: "、ともだちとあそびます。",
                      special: "こんしゅう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6130, value: "今週", check: true },
                        { id: 6131, value: "来週", check: false },
                        { id: 6132, value: "先週", check: false },
                        { id: 6133, value: "毎日", check: false }
                      ]
                    },
                    {
                      id: 4437,
                      name: "、えいがをみました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6134, value: "昨日", check: true },
                        { id: 6135, value: "今日", check: false },
                        { id: 6136, value: "明日", check: false },
                        { id: 6137, value: "先月", check: false }
                      ]
                    },
                    {
                      id: 4438,
                      name: "、かいものにいきます。",
                      special: "あした",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6138, value: "昨日", check: false },
                        { id: 6139, value: "今日", check: false },
                        { id: 6140, value: "明日", check: true },
                        { id: 6141, value: "来週", check: false }
                      ]
                    },
                    {
                      id: 4439,
                      name: "、にほんごをべんきょうします。",
                      special: "まいばん",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6142, value: "毎朝", check: false },
                        { id: 6143, value: "毎晩", check: true },
                        { id: 6144, value: "毎週", check: false }
                      ]
                    },
                    {
                      id: 4440,
                      name: "、おかしをかいました。",
                      special: "きのう",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6145, value: "昨日", check: true },
                        { id: 6146, value: "今日", check: false },
                        { id: 6147, value: "明日", check: false },
                        { id: 6148, value: "先月", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2401,
              name: "Ngữ pháp - Đọc hiểu",
              time: 60,
              quantity: 42,
              score: 0,
              questions: [
                {
                  id: 3406,
                  name: "Nhóm câu hỏi 1",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4441,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6149, value: "ごじです。", check: true },
                        { id: 6150, value: "じゅうじです。", check: false },
                        { id: 6151, value: "はちじです。", check: false },
                        { id: 6152, value: "よじです。", check: false }
                      ]
                    },
                    {
                      id: 4442,
                      name: "これはだれのほんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6153, value: "わたしのほんです。", check: true },
                        { id: 6154, value: "せんせいのほんです。", check: false },
                        { id: 6155, value: "ともだちのほんです。", check: false }
                      ]
                    },
                    {
                      id: 4443,
                      name: "どこでべんきょうしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6156, value: "としょかんでべんきょうします。", check: true },
                        { id: 6157, value: "いえでべんきょうします。", check: false },
                        { id: 6158, value: "がっこうでべんきょうします。", check: false },
                        { id: 6159, value: "こうえんでべんきょうします。", check: false }
                      ]
                    },
                    {
                      id: 4444,
                      name: "なにをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6160, value: "すしをたべます。", check: true },
                        { id: 6161, value: "ほんをよみます。", check: false },
                        { id: 6162, value: "がっこうにいきます。", check: false },
                        { id: 6163, value: "ともだちにあいます。", check: false }
                      ]
                    },
                    {
                      id: 4445,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6164, value: "いえにいます。", check: true },
                        { id: 6165, value: "がっこうにいます。", check: false },
                        { id: 6166, value: "こうえんにいます。", check: false }
                      ]
                    },
                    {
                      id: 4446,
                      name: "なにをのみますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6167 | 0, value: "おちゃをのみます。", check: true },
                        { id: 6168, value: "ほんをよみます。", check: false },
                        { id: 6169, value: "がっこうにいきます。", check: false },
                        { id: 6170, value: "ともだちにあいます。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3407,
                  name: "Nhóm câu hỏi 2",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4447,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6171, value: "えんぴつです。", check: true },
                        { id: 6172, value: "たべものです。", check: false },
                        { id: 6173, value: "ともだちです。", check: false },
                        { id: 6174, value: "がっこうです。", check: false }
                      ]
                    },
                    {
                      id: 4448,
                      name: "あしたはなにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6175, value: "かいものにいきます。", check: true },
                        { id: 6176, value: "がっこうにいきます。", check: false },
                        { id: 6177, value: "ともだちにあいます。", check: false }
                      ]
                    },
                    {
                      id: 4449,
                      name: "でんしゃでいきますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6178, value: "はい、でんしゃでいきます。", check: true },
                        { id: 6179, value: "いいえ、くるまでいきます。", check: false },
                        { id: 6180, value: "いいえ、じてんしゃでいきます。", check: false },
                        { id: 6181, value: "いいえ、ともだちといきます。", check: false }
                      ]
                    },
                    {
                      id: 4450,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6182, value: "こうえんにいます。", check: true },
                        { id: 6183, value: "いえにいます。", check: false },
                        { id: 6184, value: "がっこうにいます。", check: false }
                      ]
                    },
                    {
                      id: 4451,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6185, value: "うんどうします。", check: true },
                        { id: 6186, value: "たべます。", check: false },
                        { id: 6187, value: "ほんをよみます。", check: false },
                        { id: 6188, value: "がっこうにいきます。", check: false }
                      ]
                    },
                    {
                      id: 4452,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6189, value: "かばんです。", check: true },
                        { id: 6190, value: "たべものです。", check: false },
                        { id: 6191, value: "がっこうです。", check: false },
                        { id: 6192, value: "ともだちです。", check: false }
                      ]
                    },
                    {
                      id: 4453,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6193, value: "はちじです。", check: true },
                        { id: 6194, value: "ごじです。", check: false },
                        { id: 6195, value: "じゅうじです。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3408,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4454,
                      name: "これはだれのかさですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6196, value: "わたしのものです。", check: true },
                        { id: 6197, value: "せんせいのものです。", check: false },
                        { id: 6198, value: "ともだちのものです。", check: false },
                        { id: 6199, value: "がっこうのものです。", check: false }
                      ]
                    },
                    {
                      id: 4455,
                      name: "どこでごはんをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6200, value: "いえでたべます。", check: true },
                        { id: 6201, value: "がっこうでたべます。", check: false },
                        { id: 6202, value: "こうえんでたべます。", check: false }
                      ]
                    },
                    {
                      id: 4456,
                      name: "なにをのみますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6203, value: "みずをのみます。", check: true },
                        { id: 6204, value: "ほんをよみます。", check: false },
                        { id: 6205, value: "がっこうにいきます。", check: false },
                        { id: 6206, value: "ともだちにあいます。", check: false }
                      ]
                    },
                    {
                      id: 4457,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6207, value: "がっこうにいます。", check: true },
                        { id: 6208, value: "いえにいます。", check: false },
                        { id: 6209, value: "こうえんにいます。", check: false },
                        { id: 6210, value: "としょかんにいます。", check: false }
                      ]
                    },
                    {
                      id: 4458,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6211, value: "べんきょうします。", check: true },
                        { id: 6212, value: "たべます。", check: false },
                        { id: 6213, value: "ほんをよみます。", check: false }
                      ]
                    },
                    {
                      id: 4459,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6214, value: "ほんです。", check: true },
                        { id: 6215, value: "たべものです。", check: false },
                        { id: 6216, value: "かばんです。", check: false },
                        { id: 6217, value: "ともだちです。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3409,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4460,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6218, value: "じゅうじです。", check: true },
                        { id: 6219, value: "ごじです。", check: false },
                        { id: 6220, value: "はちじです。", check: false },
                        { id: 6221, value: "よじです。", check: false }
                      ]
                    },
                    {
                      id: 4461,
                      name: "これはだれのかばんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6222, value: "わたしのものです。", check: true },
                        { id: 6223, value: "せんせいのものです。", check: false },
                        { id: 6224, value: "ともだちのものです。", check: false }
                      ]
                    },
                    {
                      id: 4462,
                      name: "どこでべんきょうしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6225, value: "がっこうでべんきょうします。", check: true },
                        { id: 6226, value: "いえでべんきょうします。", check: false },
                        { id: 6227, value: "としょかんでべんきょうします。", check: false },
                        { id: 6228, value: "こうえんでべんきょうします。", check: false }
                      ]
                    },
                    {
                      id: 4463,
                      name: "なにをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6229, value: "パンをつくります。", check: true },
                        { id: 6230, value: "ほんをよみます。", check: false },
                        { id: 6231, value: "がっこうにいきます。", check: false },
                        { id: 6232, value: "ともだちにあいます。", check: false }
                      ]
                    },
                    {
                      id: 4464,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6233, value: "としょかんにいます。", check: true },
                        { id: 6234, value: "いえにいます。", check: false },
                        { id: 6235, value: "がっこうにいます。", check: false },
                        { id: 6236, value: "こうえんにいます。", check: false }
                      ]
                    },
                    {
                      id: 4465,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6237, value: "ほんをよみます。", check: true },
                        { id: 6238, value: "たべます。", check: false },
                        { id: 6239, value: "うんどうします。", check: false },
                        { id: 6240, value: "がっこうにいきます。", check: false }
                      ]
                    },
                    {
                      id: 4466,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6241, value: "かさです。", check: true },
                        { id: 6242, value: "たべものです。", check: false },
                        { id: 6243, value: "かばんです。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3410,
                  name: "Nhóm câu hỏi 5",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4467,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6244, value: "よじです。", check: true },
                        { id: 6245, value: "ごじです。", check: false },
                        { id: 6246, value: "じゅうじです。", check: false },
                        { id: 6247, value: "はちじです。", check: false }
                      ]
                    },
                    {
                      id: 4468,
                      name: "これはだれのほんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6248, value: "せんせいのほんです。", check: true },
                        { id: 6249, value: "わたしのほんです。", check: false },
                        { id: 6250, value: "ともだちのほんです。", check: false }
                      ]
                    },
                    {
                      id: 4469,
                      name: "どこでべんきょうしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6251, value: "いえでべんきょうします。", check: true },
                        { id: 6252, value: "がっこうでべんきょうします。", check: false },
                        { id: 6253, value: "としょかんでべんきょうします。", check: false },
                        { id: 6254, value: "こうえんでべんきょうします。", check: false }
                      ]
                    },
                    {
                      id: 4470,
                      name: "なにをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6255, value: "ラーメンをたべます。", check: true },
                        { id: 6256, value: "ほんをよみます。", check: false },
                        { id: 6257, value: "がっこうにいきます。", check: false },
                        { id: 6258, value: "ともだちにあいます。", check: false }
                      ]
                    },
                    {
                      id: 4471,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6259, value: "いえにいます。", check: true },
                        { id: 6260, value: "がっこうにいます。", check: false },
                        { id: 6261, value: "こうえんにいます。", check: false }
                      ]
                    },
                    {
                      id: 4472,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6262, value: "たべます。", check: true },
                        { id: 6263, value: "うんどうします。", check: false },
                        { id: 6264, value: "ほんをよみます。", check: false },
                        { id: 6265, value: "がっこうにいきます。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3411,
                  name: "Nhóm câu hỏi 6",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4473,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6266, value: "たべものです。", check: true },
                        { id: 6267, value: "かばんです。", check: false },
                        { id: 6268, value: "ほんです。", check: false },
                        { id: 6269, value: "ともだちです。", check: false }
                      ]
                    },
                    {
                      id: 4474,
                      name: "あしたはなにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6270, value: "ともだちにあいます。", check: true },
                        { id: 6271, value: "かいものにいきます。", check: false },
                        { id: 6272, value: "がっこうにいきます。", check: false }
                      ]
                    },
                    {
                      id: 4475,
                      name: "でんしゃでいきますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6273, value: "いいえ、じてんしゃでいきます。", check: true },
                        { id: 6274, value: "はい、でんしゃでいきます。", check: false },
                        { id: 6275, value: "いいえ、くるまでいきます。", check: false },
                        { id: 6276, value: "いいえ、ともだちといきます。", check: false }
                      ]
                    },
                    {
                      id: 4476,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6277, value: "がっこうにいます。", check: true },
                        { id: 6278, value: "いえにいます。", check: false },
                        { id: 6279, value: "こうえんにいます。", check: false },
                        { id: 6280, value: "としょかんにいます。", check: false }
                      ]
                    },
                    {
                      id: 4477,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6281, value: "べんきょうします。", check: true },
                        { id: 6282, value: "たべます。", check: false },
                        { id: 6283, value: "うんどうします。", check: false }
                      ]
                    },
                    {
                      id: 4478,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6284, value: "ほんです。", check: true },
                        { id: 6285, value: "たべものです。", check: false },
                        { id: 6286, value: "かばんです。", check: false },
                        { id: 6287, value: "ともだちです。", check: false }
                      ]
                    },
                    {
                      id: 4479,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6288, value: "ごじです。", check: true },
                        { id: 6289, value: "よじです。", check: false },
                        { id: 6290, value: "じゅうじです。", check: false },
                        { id: 6291, value: "はちじです。", check: false }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 2402,
              name: "Nghe",
              time: 50,
              quantity: 41,
              score: 0,
              questions: [
                {
                  id: 3412,
                  name: "Nhóm câu hỏi 1",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4480,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6292, value: "ろくじです。", check: true },
                        { id: 6293, value: "ごじです。", check: false },
                        { id: 6294, value: "じゅうじです。", check: false },
                        { id: 6295, value: "はちじです。", check: false }
                      ]
                    },
                    {
                      id: 4481,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6296, value: "べんきょうします。", check: true },
                        { id: 6297, value: "たべます。", check: false },
                        { id: 6298, value: "がっこうにいきます。", check: false }
                      ]
                    },
                    {
                      id: 4482,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6299, value: "かばんです。", check: true },
                        { id: 6300, value: "たべものです。", check: false },
                        { id: 6301, value: "がっこうです。", check: false },
                        { id: 6302, value: "ともだちです。", check: false }
                      ]
                    },
                    {
                      id: 4483,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6303, value: "こうえんにいます。", check: true },
                        { id: 6304, value: "いえにいます。", check: false },
                        { id: 6305, value: "がっこうにいます。", check: false },
                        { id: 6306, value: "としょかんにいます。", check: false }
                      ]
                    },
                    {
                      id: 4484,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6307, value: "うんどうします。", check: true },
                        { id: 6308, value: "たべます。", check: false },
                        { id: 6309, value: "ほんをよみます。", check: false },
                        { id: 6310, value: "がっこうにいきます。", check: false }
                      ]
                    },
                    {
                      id: 4485,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6311, value: "ほんです。", check: true },
                        { id: 6312, value: "たべものです。", check: false },
                        { id: 6313, value: "かばんです。", check: false }
                      ]
                    },
                    {
                      id: 4486,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6314, value: "はちじです。", check: true },
                        { id: 6315, value: "ごじです。", check: false },
                        { id: 6316, value: "じゅうじです。", check: false },
                        { id: 6317, value: "よじです。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3413,
                  name: "Nhóm câu hỏi 2",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4487,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6318, value: "たべます。", check: true },
                        { id: 6319, value: "べんきょうします。", check: false },
                        { id: 6320, value: "がっこうにいきます。", check: false }
                      ]
                    },
                    {
                      id: 4488,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6321, value: "たべものです。", check: true },
                        { id: 6322, value: "かばんです。", check: false },
                        { id: 6323, value: "ほんです。", check: false },
                        { id: 6324, value: "ともだちです。", check: false }
                      ]
                    },
                    {
                      id: 4489,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6325, value: "いえにいます。", check: true },
                        { id: 6326, value: "がっこうにいます。", check: false },
                        { id: 6327, value: "こうえんにいます。", check: false },
                        { id: 6328, value: "としょかんにいます。", check: false }
                      ]
                    },
                    {
                      id: 4490,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6329, value: "ほんをよみます。", check: true },
                        { id: 6330, value: "たべます。", check: false },
                        { id: 6331, value: "うんどうします。", check: false },
                        { id: 6332, value: "がっこうにいきます。", check: false }
                      ]
                    },
                    {
                      id: 4491,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6333, value: "かさです。", check: true },
                        { id: 6334, value: "たべものです。", check: false },
                        { id: 6335, value: "かばんです。", check: false }
                      ]
                    },
                    {
                      id: 4492,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6336, value: "じゅうじです。", check: true },
                        { id: 6337, value: "ごじです。", check: false },
                        { id: 6338, value: "はちじです。", check: false },
                        { id: 6339, value: "よじです。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3414,
                  name: "Nhóm câu hỏi 3",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4493,
                      name: "これはだれのかさですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6340, value: "わたしのものです。", check: true },
                        { id: 6341, value: "せんせいのものです。", check: false },
                        { id: 6342, value: "ともだちのものです。", check: false },
                        { id: 6343, value: "がっこうのものです。", check: false }
                      ]
                    },
                    {
                      id: 4494,
                      name: "どこでごはんをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6344, value: "いえでたべます。", check: true },
                        { id: 6345, value: "がっこうでたべます。", check: false },
                        { id: 6346, value: "こうえんでたべます。", check: false }
                      ]
                    },
                    {
                      id: 4495,
                      name: "なにをのみますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6347, value: "みずをのみます。", check: true },
                        { id: 6348, value: "ほんをよみます。", check: false },
                        { id: 6349, value: "がっこうにいきます。", check: false },
                        { id: 6350, value: "ともだちにあいます。", check: false }
                      ]
                    },
                    {
                      id: 4496,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6351, value: "がっこうにいます。", check: true },
                        { id: 6352, value: "いえにいます。", check: false },
                        { id: 6353, value: "こうえんにいます。", check: false },
                        { id: 6354, value: "としょかんにいます。", check: false }
                      ]
                    },
                    {
                      id: 4497,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6355, value: "べんきょうします。", check: true },
                        { id: 6356, value: "たべます。", check: false },
                        { id: 6357, value: "ほんをよみます。", check: false }
                      ]
                    },
                    {
                      id: 4498,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6358, value: "ほんです。", check: true },
                        { id: 6359, value: "たべものです。", check: false },
                        { id: 6360, value: "かばんです。", check: false },
                        { id: 6361, value: "ともだちです。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3415,
                  name: "Nhóm câu hỏi 4",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4499,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6362, value: "ごじです。", check: true },
                        { id: 6363, value: "よじです。", check: false },
                        { id: 6364, value: "じゅうじです。", check: false },
                        { id: 6365, value: "はちじです。", check: false }
                      ]
                    },
                    {
                      id: 4500,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6366, value: "たべます。", check: true },
                        { id: 6367, value: "べんきょうします。", check: false },
                        { id: 6368, value: "がっこうにいきます。", check: false }
                      ]
                    },
                    {
                      id: 4501,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6369, value: "たべものです。", check: true },
                        { id: 6370, value: "かばんです。", check: false },
                        { id: 6371, value: "ほんです。", check: false },
                        { id: 6372, value: "ともだちです。", check: false }
                      ]
                    },
                    {
                      id: 4502,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6373, value: "としょかんにいます。", check: true },
                        { id: 6374, value: "いえにいます。", check: false },
                        { id: 6375, value: "がっこうにいます。", check: false },
                        { id: 6376, value: "こうえんにいます。", check: false }
                      ]
                    },
                    {
                      id: 4503,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6377, value: "ほんをよみます。", check: true },
                        { id: 6378, value: "たべます。", check: false },
                        { id: 6379, value: "うんどうします。", check: false },
                        { id: 6380, value: "がっこうにいきます。", check: false }
                      ]
                    },
                    {
                      id: 4504,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6381, value: "かさです。", check: true },
                        { id: 6382, value: "たべものです。", check: false },
                        { id: 6383, value: "かばんです。", check: false }
                      ]
                    },
                    {
                      id: 4505,
                      name: "いま、なんじですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6384, value: "はちじです。", check: true },
                        { id: 6385, value: "ごじです。", check: false },
                        { id: 6386, value: "じゅうじです。", check: false },
                        { id: 6387, value: "よじです。", check: false }
                      ]
                    }
                  ]
                },
                {
                  id: 3416,
                  name: "Nhóm câu hỏi 5",
                  problem: null,
                  text: "次の文に適切な答えを選んでください。",
                  list: [
                    {
                      id: 4506,
                      name: "これはだれのかばんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6388, value: "せんせいのものです。", check: true },
                        { id: 6389, value: "わたしのものです。", check: false },
                        { id: 6390, value: "ともだちのものです。", check: false }
                      ]
                    },
                    {
                      id: 4507,
                      name: "どこでごはんをたべますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6391, value: "がっこうでたべます。", check: true },
                        { id: 6392, value: "いえでたべます。", check: false },
                        { id: 6393, value: "こうえんでたべます。", check: false }
                      ]
                    },
                    {
                      id: 4508,
                      name: "なにをのみますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6394, value: "おちゃをのみます。", check: true },
                        { id: 6395, value: "ほんをよみます。", check: false },
                        { id: 6396, value: "がっこうにいきます。", check: false },
                        { id: 6397, value: "ともだちにあいます。", check: false }
                      ]
                    },
                    {
                      id: 4509,
                      name: "いま、どこにいますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6398, value: "こうえんにいます。", check: true },
                        { id: 6399, value: "いえにいます。", check: false },
                        { id: 6400, value: "がっこうにいます。", check: false },
                        { id: 6401, value: "としょかんにいます。", check: false }
                      ]
                    },
                    {
                      id: 4510,
                      name: "なにをしますか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6402, value: "うんどうします。", check: true },
                        { id: 6403, value: "たべます。", check: false },
                        { id: 6404, value: "ほんをよみます。", check: false },
                        { id: 6405, value: "がっこうにいきます。", check: false }
                      ]
                    },
                    {
                      id: 4511,
                      name: "これはなんですか。",
                      answer: null,
                      point: 1,
                      select: [
                        { id: 6406, value: "たべものです。", check: true },
                        { id: 6407, value: "かばんです。", check: false },
                        { id: 6408, value: "ほんです。", check: false }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];
}

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
      streaks: [
        {
          id: 10,
          date: "2025-04-29",
        },
        {
          id: 11,
          date: "2025-05-05",
        },
        {
          id: 12,
          date: "2025-05-08",
        },
        {
          id: 13,
          date: "2025-05-13",
        }
      ],
      exp: 1,
      studyMankai: [
        {
          id: 10,
          name: "Kaiwa AI",
          nameImg: "/team2-mankai-user/assets/icons/laplanh.svg",
          text: "Luyện tập hội thoại Tiếng Nhật mọi lúc mọi nơi với AI",
          image: "/team2-mankai-user/assets/image/robot.png",
          detail: [],
        },
        {
          id: 11,
          name: "Tiếng Nhật theo chủ đề",
          nameImg: false,
          text: "Học Tiếng Nhật theo chủ đề đa dạng, từ giao tiếp hàng ngày đến chuyên ngành",
          image: "/team2-mankai-user/assets/image/nguoi-1.png",
          detail: listTopic,
        },
        {
          id: 12,
          name: "Thi thử cùng Mankai",
          nameImg: false,
          text: "Kiểm tra trình độ Tiếng Nhật của bạn với các bài thi thử mô phỏng thực tế",
          image: "/team2-mankai-user/assets/image/nguoi-2.png",
          detail: [100,101,102,103,104],
        },
        {
          id: 13,
          name: "Từ điển Tiếng Nhật",
          nameImg: false,
          text: "Cổng tra cứu từ vựng Tiếng Nhật dành riêng cho bạn",
          image: "/team2-mankai-user/assets/image/tuvung.png",
          detail: dictionary
        },
      ],
      course: [11,12,13,14,15,16],
    },
    {
      id: 2,
      name: "Lê Phú Toàn",
      gmail: "letoan12@gmail.com",
      username: "letoan",
      password: "12345678",
      address: "Thường Xuân, Thanh Hóa",
      avatar: "/team2-mankai-user/assets/image/avatar10.jpg",
      level: "N3",
      streaks: [
        {
          id: 10,
          date: "2025-04-29",
        },
        {
          id: 11,
          date: "2025-05-05",
        },
        {
          id: 12,
          date: "2025-05-08",
        },
        {
          id: 13,
          date: "2025-05-13",
        },
        {
          id: 14,
          date: "2025-05-14",
        },
        {
          id: 15,
          date: "2025-05-15",
        },
        {
          id: 17,
          date: "2025-05-17",
        },
        {
          id: 18,
          date: "2025-05-18",
        },
        {
          id: 19,
          date: "2025-05-19",
        },
        {
          id: 20,
          date: "2025-05-20",
        }
      ],
      exp: 20,
      studyMankai: [
        {
          id: 10,
          name: "Kaiwa AI",
          nameImg: "/team2-mankai-user/assets/icons/laplanh.svg",
          text: "Luyện tập hội thoại Tiếng Nhật mọi lúc mọi nơi với AI",
          image: "/team2-mankai-user/assets/image/robot.png",
          detail: [],
        },
        {
          id: 11,
          name: "Tiếng Nhật theo chủ đề",
          nameImg: false,
          text: "Học Tiếng Nhật theo chủ đề đa dạng, từ giao tiếp hàng ngày đến chuyên ngành",
          image: "/team2-mankai-user/assets/image/nguoi-1.png",
          detail: listTopic,
        },
        {
          id: 12,
          name: "Thi thử cùng Mankai",
          nameImg: false,
          text: "Kiểm tra trình độ Tiếng Nhật của bạn với các bài thi thử mô phỏng thực tế",
          image: "/team2-mankai-user/assets/image/nguoi-2.png",
          detail: [100,101,102,103,104],
        },
        {
          id: 13,
          name: "Từ điển Tiếng Nhật",
          nameImg: false,
          text: "Cổng tra cứu từ vựng Tiếng Nhật dành riêng cho bạn",
          image: "/team2-mankai-user/assets/image/tuvung.png",
          detail: dictionary
        },
      ],
      course: [11,12,13,14,15,16],
    },
    {
      id: 3,
      name: "Minh Quang",
      gmail: "minhquang12@gmail.com",
      username: "minhquang123",
      password: "12345678",
      address: "Hà Đông, Hà Nội",
      avatar: "/team2-mankai-user/assets/image/avatar1.jpg",
      level: "N4",
      streaks: [
        { id: 21, date: "2025-04-25" },
        { id: 22, date: "2025-04-26" },
        { id: 23, date: "2025-05-01" },
        { id: 24, date: "2025-05-03" },
        { id: 25, date: "2025-05-10" },
        { id: 26, date: "2025-05-11" },
        { id: 27, date: "2025-05-20" }
      ],
      exp: 15,
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
          detail: listTopic
        },
        {
          id: 12,
          name: "Thi thử cùng Mankai",
          nameImg: false,
          text: "Kiểm tra trình độ Tiếng Nhật của bạn với các bài thi thử mô phỏng thực tế",
          image: "/team2-mankai-user/assets/image/nguoi-2.png",
          detail: [100, 101, 103, 104]
        },
        {
          id: 13,
          name: "Từ điển Tiếng Nhật",
          nameImg: false,
          text: "Cổng tra cứu từ vựng Tiếng Nhật dành riêng cho bạn",
          image: "/team2-mankai-user/assets/image/tuvung.png",
          detail: dictionary
        }
      ],
      course: [11, 12, 15, 16]
    },
    {
      id: 4,
      name: "Trần Văn Minh",
      gmail: "minhtran56@gmail.com",
      username: "minhtran",
      password: "minh789012",
      address: "Nha Trang, Khánh Hòa",
      avatar: "/team2-mankai-user/assets/image/avatar2.jpg",
      level: "N2",
      streaks: [
        { id: 27, date: "2025-05-02" },
        { id: 28, date: "2025-05-03" },
        { id: 29, date: "2025-05-04" },
        { id: 30, date: "2025-05-12" },
        { id: 31, date: "2025-05-13" },
        { id: 32, date: "2025-05-14" },
        { id: 33, date: "2025-05-20" }
      ],
      exp: 35,
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
          detail: listTopic
        },
        {
          id: 12,
          name: "Thi thử cùng Mankai",
          nameImg: false,
          text: "Kiểm tra trình độ Tiếng Nhật của bạn với các bài thi thử mô phỏng thực tế",
          image: "/team2-mankai-user/assets/image/nguoi-2.png",
          detail: [100, 101, 102, 103, 104]
        },
        {
          id: 13,
          name: "Từ điển Tiếng Nhật",
          nameImg: false,
          text: "Cổng tra cứu từ vựng Tiếng Nhật dành riêng cho bạn",
          image: "/team2-mankai-user/assets/image/tuvung.png",
          detail: dictionary
        }
      ],
      course: [11, 12, 13, 14, 15, 16]
    },
    {
      id: 5,
      name: "Phạm Ngọc Anh",
      gmail: "ngocanh78@gmail.com",
      username: "ngocanh",
      password: "anh345678",
      address: "Bình Thạnh, TP.HCM",
      avatar: "/team2-mankai-user/assets/image/avatar3.jpg",
      level: "N3",
      streaks: [
        { id: 34, date: "2025-04-30" },
        { id: 35, date: "2025-05-01" },
        { id: 36, date: "2025-05-07" },
        { id: 37, date: "2025-05-08" },
        { id: 38, date: "2025-05-15" }
      ],
      exp: 18,
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
          detail: listTopic
        },
        {
          id: 12,
          name: "Thi thử cùng Mankai",
          nameImg: false,
          text: "Kiểm tra trình độ Tiếng Nhật của bạn với các bài thi thử mô phỏng thực tế",
          image: "/team2-mankai-user/assets/image/nguoi-2.png",
          detail: [100, 101, 102, 103, 104]
        },
        {
          id: 13,
          name: "Từ điển Tiếng Nhật",
          nameImg: false,
          text: "Cổng tra cứu từ vựng Tiếng Nhật dành riêng cho bạn",
          image: "/team2-mankai-user/assets/image/tuvung.png",
          detail: dictionary
        }
      ],
      course: [11, 12, 13, 14, 15, 16]
    },
    {
      id: 6,
      name: "Hoàng Minh Tuấn",
      gmail: "tuanhoang90@gmail.com",
      username: "minhtuan",
      password: "tuan901234",
      address: "Đà Nẵng, Quảng Nam",
      avatar: "/team2-mankai-user/assets/image/avatar4.jpg",
      level: "N5",
      streaks: [
        { id: 39, date: "2025-05-05" },
        { id: 40, date: "2025-05-06" },
        { id: 41, date: "2025-05-12" },
        { id: 42, date: "2025-05-13" },
        { id: 43, date: "2025-05-14" },
        { id: 44, date: "2025-05-19" }
      ],
      exp: 10,
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
          detail: listTopic
        },
        {
          id: 12,
          name: "Thi thử cùng Mankai",
          nameImg: false,
          text: "Kiểm tra trình độ Tiếng Nhật của bạn với các bài thi thử mô phỏng thực tế",
          image: "/team2-mankai-user/assets/image/nguoi-2.png",
          detail: [100, 101, 102, 103, 104]
        },
        {
          id: 13,
          name: "Từ điển Tiếng Nhật",
          nameImg: false,
          text: "Cổng tra cứu từ vựng Tiếng Nhật dành riêng cho bạn",
          image: "/team2-mankai-user/assets/image/tuvung.png",
          detail: dictionary
        }
      ],
      course: [11, 12, 13, 14, 15, 16]
    },
    {
      id: 7,
      name: "Vũ Thị Lan",
      gmail: "lanvu23@gmail.com",
      username: "lanvu",
      password: "lan567890",
      address: "Vũng Tàu, Bà Rịa",
      avatar: "/team2-mankai-user/assets/image/avatar5.jpg",
      level: "N3",
      streaks: [
        { id: 45, date: "2025-04-28" },
        { id: 46, date: "2025-04-29" },
        { id: 47, date: "2025-05-04" },
        { id: 48, date: "2025-05-10" },
        { id: 49, date: "2025-05-11" },
        { id: 50, date: "2025-05-12" },
        { id: 51, date: "2025-05-18" }
      ],
      exp: 22,
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
          detail: listTopic
        },
        {
          id: 12,
          name: "Thi thử cùng Mankai",
          nameImg: false,
          text: "Kiểm tra trình độ Tiếng Nhật của bạn với các bài thi thử mô phỏng thực tế",
          image: "/team2-mankai-user/assets/image/nguoi-2.png",
          detail: [100, 101, 102, 103, 104]
        },
        {
          id: 13,
          name: "Từ điển Tiếng Nhật",
          nameImg: false,
          text: "Cổng tra cứu từ vựng Tiếng Nhật dành riêng cho bạn",
          image: "/team2-mankai-user/assets/image/tuvung.png",
          detail: dictionary
        }
      ],
      course: [11, 12, 13, 14, 15, 16]
    },
    {
      id: 8,
      name: "Đỗ Quang Huy",
      gmail: "huydo45@gmail.com",
      username: "quanghuy",
      password: "huy123789",
      address: "Cần Thơ, Hậu Giang",
      avatar: "/team2-mankai-user/assets/image/avatar6.jpg",
      level: "N4",
      streaks: [
        { id: 52, date: "2025-05-01" },
        { id: 53, date: "2025-05-02" },
        { id: 54, date: "2025-05-08" },
        { threats: 55, date: "2025-05-09" },
        { id: 56, date: "2025-05-15" },
        { id: 57, date: "2025-05-16" }
      ],
      exp: 17,
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
          detail: listTopic
        },
        {
          id: 12,
          name: "Thi thử cùng Mankai",
          nameImg: false,
          text: "Kiểm tra trình độ Tiếng Nhật của bạn với các bài thi thử mô phỏng thực tế",
          image: "/team2-mankai-user/assets/image/nguoi-2.png",
          detail: [100, 101, 102, 103, 104]
        },
        {
          id: 13,
          name: "Từ điển Tiếng Nhật",
          nameImg: false,
          text: "Cổng tra cứu từ vựng Tiếng Nhật dành riêng cho bạn",
          image: "/team2-mankai-user/assets/image/tuvung.png",
          detail: dictionary
        }
      ],
      course: [11, 12, 13, 14, 15, 16]
    },
    {
      id: 9,
      name: "Lý Thị Mai",
      gmail: "maily67@gmail.com",
      username: "lymai",
      password: "mai456123",
      address: "Huế, Thừa Thiên",
      avatar: "/team2-mankai-user/assets/image/avatar7.jpg",
      level: "N2",
      streaks: [
        { id: 58, date: "2025-04-27" },
        { id: 59, date: "2025-04-28" },
        { id: 60, date: "2025-05-03" },
        { id: 61, date: "2025-05-04" },
        { id: 62, date: "2025-05-10" },
        { id: 63, date: "2025-05-11" },
        { id: 64, date: "2025-05-17" },
        { id: 65, date: "2025-05-18" }
      ],
      exp: 30,
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
          detail: listTopic
        },
        {
          id: 12,
          name: "Thi thử cùng Mankai",
          nameImg: false,
          text: "Kiểm tra trình độ Tiếng Nhật của bạn với các bài thi thử mô phỏng thực tế",
          image: "/team2-mankai-user/assets/image/nguoi-2.png",
          detail: [100, 101, 102, 103, 104]
        },
        {
          id: 13,
          name: "Từ điển Tiếng Nhật",
          nameImg: false,
          text: "Cổng tra cứu từ vựng Tiếng Nhật dành riêng cho bạn",
          image: "/team2-mankai-user/assets/image/tuvung.png",
          detail: dictionary
        }
      ],
      course: [11, 12, 13, 14, 15, 16]
    }
  ];
  renderUsers();
}
let user = localStorage.getItem("user");
if (user) {
  user = JSON.parse(user);
  updateProgressCourse();
} else {
  let currentPath = window.location.pathname;
  let filename = currentPath.split('/').pop();
  if (filename != "signin.html") {
    window.location.href = "/team2-mankai-user/Authentication-StudentManager/pages/signin.html";
  }
}

function checkData(value, type, value2) {
  if (type == "password") {
    if (value == "") {
      return "Mật khẩu không được bỏ trống";
    } else if (value.length < 6) {
      return "Mật khẩu phải từ 6 ký tự trở lên";
    } else {
      return "valid";
    }
  } else if (type == "user") {
    user = users.find((element) => element.gmail == value || element.username == value);
    if (!user) {
      return "Email hoặc tên đăng nhập không tồn tại";
    } else if (user.password != value2) {
      return "Sai mật khẩu";
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      return "valid";
    }
  } else if (type == "text") {
    if (value == "") {
      return "Thông tin không được để trống";
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
    localStorage.setItem("topicId", JSON.stringify(topicId));
    localStorage.setItem("dictionary", JSON.stringify(dictionary));
    localStorage.setItem("courseId", JSON.stringify(courseId));
    localStorage.setItem("listExams", JSON.stringify(listExams));
    localStorage.setItem("courses", JSON.stringify(courses));
  }
}

function startCountdown(durationInSeconds, displayElementId,timeOut, linkHref) {
  let timer = durationInSeconds;
  const display = document.getElementById(displayElementId);

  const interval = setInterval(() => {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
      display.textContent = `Còn lại: ${minutes}'${seconds < 10 ? '0' : ''}${seconds}s`;

      if(timer < 600){
          display.style.color = "red";
      }

      if (--timer < 0) {

          clearInterval(interval);
          display.textContent = 'Hết thời gian!';
          if(timeOut == "submit"){
            checkAnswer();
            scoreExamVocab = parseInt(localStorage.getItem("scoreExamVocab")) || 0;
            scoreExamGrammar = parseInt(localStorage.getItem("scoreExamGrammar")) || 0;
            scoreExamListen = parseInt(localStorage.getItem("scoreExamListen")) || 0;
            modalScore.style.display = "block";
            overlay.style.display = "block";
        
            let totalquestionVocab = user.studyMankai[2].detail[indexExamN].exams[indexExamS].structure[0].questions.length * user.studyMankai[2].detail[indexExamN].exams[indexExamS].structure[0].questions[0].list.length;
            let totalquestionGrammar = user.studyMankai[2].detail[indexExamN].exams[indexExamS].structure[1].questions.length * user.studyMankai[2].detail[indexExamN].exams[indexExamS].structure[1].questions[0].list.length;
            let totalquestionListening = user.studyMankai[2].detail[indexExamN].exams[indexExamS].structure[2].questions.length * user.studyMankai[2].detail[indexExamN].exams[indexExamS].structure[2].questions[0].list.length;
        
            resultVocab.innerHTML = `${scoreExamVocab}/${totalquestionVocab}` ;
            resultGrammar.innerHTML = `${scoreExamGrammar}/${totalquestionGrammar}`;
            resultListen.innerHTML = `${scoreExamListen}/${totalquestionListening}` ;
          }
          else{
            setTimeout(() => {
              document.location.href = linkHref;
            }, timeOut*60*1000);
            
            if(countdown.textContent=="Hết thời gian!"){
              startCountdown(3,'break-time',1, linkHref);
            }
          }
      }
  }, 1000);
}


function updateSvg(id, percentage, color) {
  let percent = Math.min(Math.max(parseFloat(percentage) || 0, 0), 100); 
  let container = document.getElementById(id);

  if (!container) {
    console.error(`Không tìm thấy thẻ với ID: ${id}`);
    return;
  }

  if (percent === 100) {
    container.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M9.99999 1.66675C5.40832 1.66675 1.66666 5.40841 1.66666 10.0001C1.66666 14.5917 5.40832 18.3334 9.99999 18.3334C14.5917 18.3334 18.3333 14.5917 18.3333 10.0001C18.3333 5.40841 14.5917 1.66675 9.99999 1.66675ZM13.9833 8.08341L9.25832 12.8084C9.14166 12.9251 8.98332 12.9917 8.81666 12.9917C8.64999 12.9917 8.49166 12.9251 8.37499 12.8084L6.01666 10.4501C5.77499 10.2084 5.77499 9.80841 6.01666 9.56675C6.25832 9.32508 6.65832 9.32508 6.89999 9.56675L8.81666 11.4834L13.1 7.20008C13.3417 6.95842 13.7417 6.95842 13.9833 7.20008C14.225 7.44175 14.225 7.83341 13.9833 8.08341Z" fill="${color}"/>
      </svg>
    `;
  } else {
    let radius = 7;
    let circumference = 2 * Math.PI * radius;
    let strokeLength = (percent / 100) * circumference;

    container.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="${radius}" 
                stroke="${color}" 
                stroke-width="2" 
                fill="none"
                stroke-dasharray="${circumference} ${circumference}" 
                stroke-dashoffset="${circumference - strokeLength}" 
                stroke-linecap="butt"
                transform="rotate(-90 10 10)"/>
      </svg>
    `;
  }
}

function updateSvgCourse(id, percentage) {
  let percent = percentage;
  let container = document.getElementById(id);
  const defaultColor = "#F37142";
  const backgroundColor = "#CCCCCC";
  const trophyColor = percent === 100 ? "#F37142" : "#CCCCCC";

  if (!container) {
    console.error(`Không tìm thấy thẻ với ID: ${id}`);
    return;
  }

  if (percent === 100) {
    container.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
        <circle cx="22.5" cy="22.5" r="19.5" 
                stroke="${backgroundColor}" 
                stroke-width="2" 
                fill="none"/>
        <circle cx="22.5" cy="22.5" r="19.5" 
                stroke="${defaultColor}" 
                stroke-width="2" 
                fill="none"
                stroke-dasharray="122.522 ${122.522}" 
                stroke-dashoffset="0" 
                stroke-linecap="butt"
                transform="rotate(-90 22.5 22.5)"/>
        <g transform="translate(10.5, 10.5)">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.15 16.5V18.6" stroke="${trophyColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.15002 22H17.15V21C17.15 19.9 16.25 19 15.15 19H9.15002C8.05002 19 7.15002 19.9 7.15002 21V22V22Z" stroke="${trophyColor}" stroke-width="1.5" stroke-miterlimit="10"/>
            <path d="M6.15002 22H18.15" stroke="${trophyColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z" stroke="${trophyColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.47004 11.6501C4.72004 11.4101 4.06004 10.9701 3.54004 10.4501C2.64004 9.4501 2.04004 8.2501 2.04004 6.8501C2.04004 5.4501 3.14004 4.3501 4.54004 4.3501H5.19004C4.99004 4.8101 4.89004 5.3201 4.89004 5.8501V8.8501C4.89004 9.8501 5.10004 10.7901 5.47004 11.6501Z" stroke="${trophyColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.53 11.6501C19.28 11.4101 19.94 10.9701 20.46 10.4501C21.36 9.4501 21.96 8.2501 21.96 6.8501C21.96 5.4501 20.86 4.3501 19.46 4.3501H18.81C19.01 4.8101 19.11 5.3201 19.11 5.8501V8.8501C19.11 9.8501 18.9 10.7901 18.53 11.6501Z" stroke="${trophyColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </g>
      </svg>
    `;
  } else {
    let radius = 19.5;
    let circumference = 2 * Math.PI * radius;
    let strokeLength = (percent / 100) * circumference;

    container.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
        <circle cx="22.5" cy="22.5" r="${radius}" 
                stroke="${backgroundColor}" 
                stroke-width="2" 
                fill="none"/>
        <circle cx="22.5" cy="22.5" r="${radius}" 
                stroke="${defaultColor}" 
                stroke-width="2" 
                fill="none"
                stroke-dasharray="${circumference} ${circumference}" 
                stroke-dashoffset="${circumference - strokeLength}" 
                stroke-linecap="butt"
                transform="rotate(-90 22.5 22.5)"/>
        <g transform="translate(10.5, 10.5)">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.15 16.5V18.6" stroke="${trophyColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.15002 22H17.15V21C17.15 19.9 16.25 19 15.15 19H9.15002C8.05002 19 7.15002 19.9 7.15002 21V22V22Z" stroke="${trophyColor}" stroke-width="1.5" stroke-miterlimit="10"/>
            <path d="M6.15002 22H18.15" stroke="${trophyColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z" stroke="${trophyColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.47004 11.6501C4.72004 11.4101 4.06004 10.9701 3.54004 10.4501C2.64004 9.4501 2.04004 8.2501 2.04004 6.8501C2.04004 5.4501 3.14004 4.3501 4.54004 4.3501H5.19004C4.99004 4.8101 4.89004 5.3201 4.89004 5.8501V8.8501C4.89004 9.8501 5.10004 10.7901 5.47004 11.6501Z" stroke="${trophyColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.53 11.6501C19.28 11.4101 19.94 10.9701 20.46 10.4501C21.36 9.4501 21.96 8.2501 21.96 6.8501C21.96 5.4501 20.86 4.3501 19.46 4.3501H18.81C19.01 4.8101 19.11 5.3201 19.11 5.8501V8.8501C19.11 9.8501 18.9 10.7901 18.53 11.6501Z" stroke="${trophyColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </g>
      </svg>
    `;
  }
}

function updateSvgSidebar(id, color) {
  const container = document.getElementById(id);
  if (!container) return;

  container.innerHTML = '';

  const svgNS = "http://www.w3.org/2000/svg";
  let svg;

  if (id === 'svg-sidebar1') {
      svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('class', 'icon');
      svg.setAttribute('width', '24');
      svg.setAttribute('height', '24');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');

      const path1 = document.createElementNS(svgNS, 'path');
      path1.setAttribute('opacity', '0.4');
      path1.setAttribute('d', 'M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44715 2 1.97 6.47715 1.97 12C1.97 17.5228 6.44715 22 11.97 22Z');
      path1.setAttribute('fill', color);

      const path2 = document.createElementNS(svgNS, 'path');
      path2.setAttribute('d', 'M14.97 10.2291L12.07 8.55914C11.35 8.13914 10.48 8.13914 9.76 8.55914C9.04 8.97914 8.61 9.71914 8.61 10.5591V13.9091C8.61 14.7391 9.04 15.4891 9.76 15.9091C10.12 16.1191 10.52 16.2191 10.91 16.2191C11.31 16.2191 11.7 16.1191 12.06 15.9091L14.96 14.2391C15.68 13.8191 16.11 13.0791 16.11 12.2391C16.13 11.3991 15.7 10.6491 14.97 10.2291Z');
      path2.setAttribute('fill', color);

      svg.appendChild(path1);
      svg.appendChild(path2);
  } else if (id === 'svg-sidebar2') {
      svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('width', '20');
      svg.setAttribute('height', '22');
      svg.setAttribute('viewBox', '0 0 20 22');
      svg.setAttribute('fill', 'none');

      const rect = document.createElementNS(svgNS, 'rect');
      rect.setAttribute('width', '20');
      rect.setAttribute('height', '22');
      rect.setAttribute('rx', '4');
      rect.setAttribute('fill', color);
      rect.setAttribute('fill-opacity', '0.4');

      const path = document.createElementNS(svgNS, 'path');
      path.setAttribute('d', 'M15.9977 8.68156C15.9977 8.69861 15.8629 10.5779 15.6237 12.4364C15.1422 16.1571 14.6796 16.8007 13.8264 16.8411C13.6381 16.8497 13.3964 16.8518 13.1314 16.8518C12.1317 16.8518 10.802 16.803 10.7325 16.8007C10.2836 16.7836 9.93485 16.4363 9.95345 16.025C9.97205 15.6137 10.3556 15.294 10.7999 15.3111C10.8182 15.3111 12.4504 15.3705 13.4059 15.3599C13.7383 14.5437 14.1056 11.8736 14.3146 9.37818H10.4649C9.96508 12.1679 8.72135 15.6606 5.64574 17.229C5.52043 17.2929 5.3856 17.3225 5.25077 17.3225C4.96483 17.3225 4.68818 17.184 4.53917 16.939C4.32088 16.5788 4.46245 16.1249 4.85533 15.9246C7.28002 14.6888 8.34474 11.8077 8.80969 9.37839H4.81349C4.36249 9.37839 3.99983 9.04404 3.99983 8.63254C3.99983 8.22126 4.36249 7.8867 4.81349 7.8867H9.03519C9.19327 6.48663 9.16537 5.47441 9.16537 5.4467C9.15142 5.03542 9.50246 4.6902 9.95113 4.67741C10.3975 4.66889 10.7764 4.98641 10.7904 5.39769C10.795 5.51703 10.8229 6.50794 10.6764 7.8867H15.1864C15.4121 7.8867 15.626 7.97194 15.7818 8.12324C15.935 8.27241 16.014 8.47485 15.9977 8.68156Z');
      path.setAttribute('fill', color);

      svg.appendChild(rect);
      svg.appendChild(path);
  } else if (id === 'svg-sidebar3') {
      svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('width', '20');
      svg.setAttribute('height', '20');
      svg.setAttribute('viewBox', '0 0 20 20');
      svg.setAttribute('fill', 'none');

      const path1 = document.createElementNS(svgNS, 'path');
      path1.setAttribute('opacity', '0.4');
      path1.setAttribute('d', 'M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.19C0 17.83 2.17 20 5.81 20H14.19C17.83 20 20 17.83 20 14.19V5.81C20 2.17 17.83 0 14.19 0Z');
      path1.setAttribute('fill', color);

      const path2 = document.createElementNS(svgNS, 'path');
      path2.setAttribute('d', 'M16.31 6.87012C16.31 7.28012 15.98 7.62012 15.56 7.62012H10.31C9.9 7.62012 9.56 7.28012 9.56 6.87012C9.56 6.46012 9.9 6.12012 10.31 6.12012H15.56C15.98 6.12012 16.31 6.46012 16.31 6.87012Z');
      path2.setAttribute('fill', color);

      const path3 = document.createElementNS(svgNS, 'path');
      path3.setAttribute('d', 'M7.97 5.90006L5.72 8.15006C5.57 8.30006 5.38 8.37006 5.19 8.37006C5 8.37006 4.8 8.30006 4.66 8.15006L3.91 7.40006C3.61 7.11006 3.61 6.63006 3.91 6.34006C4.2 6.05006 4.67 6.05006 4.97 6.34006L5.19 6.56006L6.91 4.84006C7.2 4.55006 7.67 4.55006 7.97 4.84006C8.26 5.13006 8.26 5.61006 7.97 5.90006Z');
      path3.setAttribute('fill', color);

      const path4 = document.createElementNS(svgNS, 'path');
      path4.setAttribute('d', 'M16.31 13.8701C16.31 14.2801 15.98 14.6201 15.56 14.6201H10.31C9.9 14.6201 9.56 14.2801 9.56 13.8701C9.56 13.4601 9.9 13.1201 10.31 13.1201H15.56C15.98 13.1201 16.31 13.4601 16.31 13.8701Z');
      path4.setAttribute('fill', color);

      const path5 = document.createElementNS(svgNS, 'path');
      path5.setAttribute('d', 'M7.97 12.9001L5.72 15.1501C5.57 15.3001 5.38 15.3701 5.19 15.3701C5 15.3701 4.8 15.3001 4.66 15.1501L3.91 14.4001C3.61 14.1101 3.61 13.6301 3.91 13.3401C4.2 13.0501 4.67 13.0501 4.97 13.3401L5.19 13.5601L6.91 11.8401C7.2 11.5501 7.67 11.5501 7.97 11.8401C8.26 12.1301 8.26 12.6101 7.97 12.9001Z');
      path5.setAttribute('fill', color);

      svg.appendChild(path1);
      svg.appendChild(path2);
      svg.appendChild(path3);
      svg.appendChild(path4);
      svg.appendChild(path5);
  } else if (id === 'svg-sidebar4') {
      svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('width', '24');
      svg.setAttribute('height', '24');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');

      const path1 = document.createElementNS(svgNS, 'path');
      path1.setAttribute('opacity', '0.4');
      path1.setAttribute('d', 'M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z');
      path1.setAttribute('fill', color);

      const path2 = document.createElementNS(svgNS, 'path');
      path2.setAttribute('d', 'M18.5 9.25H16.5C14.98 9.25 13.75 8.02 13.75 6.5V4.5C13.75 4.09 14.09 3.75 14.5 3.75C14.91 3.75 15.25 4.09 15.25 4.5V6.5C15.25 7.19 15.81 7.75 16.5 7.75H18.5C18.91 7.75 19.25 8.09 19.25 8.5C19.25 8.91 18.91 9.25 18.5 9.25Z');
      path2.setAttribute('fill', color);

      const path3 = document.createElementNS(svgNS, 'path');
      path3.setAttribute('d', 'M5.61915 17.8984V13.3647H7.31928C7.66757 13.3647 7.95978 13.4297 8.19591 13.5596C8.43352 13.6894 8.61283 13.868 8.73385 14.0953C8.85634 14.3211 8.91759 14.5779 8.91759 14.8656C8.91759 15.1564 8.85634 15.4146 8.73385 15.6404C8.61136 15.8662 8.43057 16.0441 8.19149 16.174C7.95241 16.3023 7.65798 16.3665 7.30821 16.3665H6.18143V15.6914H7.19753C7.40119 15.6914 7.56796 15.6559 7.69783 15.5851C7.8277 15.5143 7.92363 15.4169 7.98561 15.2929C8.04907 15.1689 8.0808 15.0265 8.0808 14.8656C8.0808 14.7048 8.04907 14.5631 7.98561 14.4406C7.92363 14.3181 7.82696 14.2229 7.69561 14.155C7.56574 14.0857 7.39824 14.051 7.1931 14.051H6.44044V17.8984H5.61915Z');
      path3.setAttribute('fill', color);

      const path4 = document.createElementNS(svgNS, 'path');
      path4.setAttribute('d', 'M11.1673 17.8984H9.63096V13.3647H11.1983C11.6484 13.3647 12.0351 13.4555 12.3583 13.637C12.6829 13.8171 12.9323 14.0761 13.1065 14.414C13.2806 14.752 13.3677 15.1564 13.3677 15.6272C13.3677 16.0994 13.2799 16.5053 13.1043 16.8447C12.9301 17.1841 12.6785 17.4446 12.3494 17.6262C12.0218 17.8077 11.6277 17.8984 11.1673 17.8984ZM10.4522 17.1878H11.1274C11.4433 17.1878 11.7067 17.1303 11.9177 17.0152C12.1288 16.8986 12.2874 16.7252 12.3937 16.4949C12.4999 16.2632 12.5531 15.974 12.5531 15.6272C12.5531 15.2803 12.4999 14.9926 12.3937 14.7638C12.2874 14.5336 12.1302 14.3617 11.9222 14.248C11.7155 14.1329 11.4587 14.0753 11.1518 14.0753H10.4522V17.1878Z');
      path4.setAttribute('fill', color);

      const path5 = document.createElementNS(svgNS, 'path');
      path5.setAttribute('d', 'M14.148 17.8984V13.3647H17.0524V14.0532H14.9693V15.284H16.8532V15.9725H14.9693V17.8984H14.148Z');
      path5.setAttribute('fill', color);

      svg.appendChild(path1);
      svg.appendChild(path2);
      svg.appendChild(path3);
      svg.appendChild(path4);
      svg.appendChild(path5);
  } else if (id === 'svg-sidebar5') {
      svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('width', '24');
      svg.setAttribute('height', '24');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');

      const path1 = document.createElementNS(svgNS, 'path');
      path1.setAttribute('opacity', '0.4');
      path1.setAttribute('d', 'M12 5.29994V21.3299C11.83 21.3299 11.65 21.2999 11.51 21.2199L11.47 21.1999C9.55 20.1499 6.2 19.0499 4.03 18.7599L3.74 18.7199C2.78 18.5999 2 17.6999 2 16.7399V4.65994C2 3.46994 2.97 2.56994 4.16 2.66994C6.26 2.83994 9.44 3.89994 11.22 5.00994L11.47 5.15994C11.62 5.24994 11.81 5.29994 12 5.29994Z');
      path1.setAttribute('fill', color);

      const path2 = document.createElementNS(svgNS, 'path');
      path2.setAttribute('d', 'M22 4.67003V16.74C22 17.7 21.22 18.6 20.26 18.72L19.93 18.76C17.75 19.05 14.39 20.16 12.47 21.22C12.34 21.3 12.18 21.33 12 21.33V5.30003C12.19 5.30003 12.38 5.25003 12.53 5.16003L12.7 5.05003C14.48 3.93003 17.67 2.86003 19.77 2.68003H19.83C21.02 2.58003 22 3.47003 22 4.67003Z');
      path2.setAttribute('fill', color);

      const path3 = document.createElementNS(svgNS, 'path');
      path3.setAttribute('d', 'M7.75 9.23999H5.5C5.09 9.23999 4.75 8.89999 4.75 8.48999C4.75 8.07999 5.09 7.73999 5.5 7.73999H7.75C8.16 7.73999 8.5 8.07999 8.5 8.48999C8.5 8.89999 8.16 9.23999 7.75 9.23999Z');
      path3.setAttribute('fill', color);

      const path4 = document.createElementNS(svgNS, 'path');
      path4.setAttribute('d', 'M8.5 12.24H5.5C5.09 12.24 4.75 11.9 4.75 11.49C4.75 11.08 5.09 10.74 5.5 10.74H8.5C8.91 10.74 9.25 11.08 9.25 11.49C9.25 11.9 8.91 12.24 8.5 12.24Z');
      path4.setAttribute('fill', color);

      svg.appendChild(path1);
      svg.appendChild(path2);
      svg.appendChild(path3);
      svg.appendChild(path4);
  } else if (id === 'svg-sidebar6') {
      svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('width', '24');
      svg.setAttribute('height', '24');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');

      const path1 = document.createElementNS(svgNS, 'path');
      path1.setAttribute('opacity', '0.4');
      path1.setAttribute('d', 'M2.75 18.65C2.34 18.65 2 18.31 2 17.9V12.2C1.95 9.49005 2.96 6.93005 4.84 5.01005C6.72 3.10005 9.24 2.05005 11.95 2.05005C17.49 2.05005 22 6.56005 22 12.1V17.8C22 18.21 21.66 18.55 21.25 18.55C20.84 18.55 20.5 18.21 20.5 17.8V12.1C20.5 7.39005 16.67 3.55005 11.95 3.55005C9.64 3.55005 7.5 4.44005 5.91 6.06005C4.31 7.69005 3.46 9.86005 3.5 12.18V17.89C3.5 18.31 3.17 18.65 2.75 18.65Z');
      path1.setAttribute('fill', color);

      const path2 = document.createElementNS(svgNS, 'path');
      path2.setAttribute('d', 'M5.94 12.45H5.81C3.71 12.45 2 14.16 2 16.26V18.14C2 20.24 3.71 21.95 5.81 21.95H5.94C8.04 21.95 9.75 20.24 9.75 18.14V16.26C9.75 14.16 8.04 12.45 5.94 12.45Z');
      path2.setAttribute('fill', color);

      const path3 = document.createElementNS(svgNS, 'path');
      path3.setAttribute('d', 'M18.19 12.45H18.06C15.96 12.45 14.25 14.16 14.25 16.26V18.14C14.25 20.24 15.96 21.95 18.06 21.95H18.19C20.29 21.95 22 20.24 22 18.14V16.26C22 14.16 20.29 12.45 18.19 12.45Z');
      path3.setAttribute('fill', color);

      svg.appendChild(path1);
      svg.appendChild(path2);
      svg.appendChild(path3);
  } else {
      return;
  }

  container.appendChild(svg);
}

function updateProgressCourse(){
  let courses = user.course;
  courses.forEach(course => {
    let lessons = course.lessons;
    let lessonComplete = 0;
    lessons.forEach(lesson => {
      if(lesson.progress == 100){
        lessonComplete++;
      } else {
        if(lesson.status == true){
          lessonComplete++;
        }
      }
    });
    course.progress = (lessonComplete/lessons.length)*100;
    if(course.progress > 99){
      course.progress = 100;
    }
  });
  saveData();
}

let logoContainer = document.querySelector(".logo-container");
if(logoContainer){
  logoContainer.addEventListener("click", () => {
    location.href = "/team2-mankai-user/TopicManager-VocabularyManager/pages/homePage.html";
  });
}


let link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = '/team2-mankai-user/assets/image/logo-mankai-1.jpg';
document.head.insertBefore(link, document.querySelector('title'));

let userAvatarImage = document.querySelector(".user-avatar-image");
if(userAvatarImage && user) {
  userAvatarImage.src = user.avatar;
}

function renderUsers(){
    users.forEach(acc => {
        if(acc.studyMankai.find(study => study.id == 12)){
          let detail = acc.studyMankai.find(study => study.id == 12).detail;
          if(detail.length > 0){
            let newDetail = [];
            detail.forEach(ex => {
              let exam = listExams.find(exam => exam.id == ex);
              if(exam){
                newDetail.push(JSON.parse(JSON.stringify(exam)));
              }
            });
            acc.studyMankai.find(study => study.id == 12).detail = newDetail;
          }
        }
        
        if(acc.course.length > 0){
          let newCourse = [];
          acc.course.forEach(course => {
            let checkCourse = courses.find(element => element.id == course);
            if(checkCourse){
              newCourse.push(JSON.parse(JSON.stringify(checkCourse)));
            }
          });
          acc.course = newCourse;
        }
    });
    localStorage.setItem("users", JSON.stringify(users));
}
