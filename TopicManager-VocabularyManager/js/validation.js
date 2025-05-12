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
          detail: [
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
          ],
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
              time: 180,
              people: 5000,
              exams: [
                {
                  id: 1000,
                  name: "Đề Thi JLPT N1 Số 1",
                  people: 9626,
                  time: 180,
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
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 85,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
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
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1001,
                  name: "Đề Thi JLPT N1 Số 2",
                  people: 9626,
                  time: 105,
                  structure: [
                    {
                      id: 2000,
                      name: "Chữ hán - Từ vựng",
                      time: 15,
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
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1002,
                  name: "Đề Thi JLPT N1 Số 3",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1003,
                  name: "Đề Thi JLPT N1 Số 4",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1004,
                  name: "Đề Thi JLPT N1 Số 5",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1005,
                  name: "Đề Thi JLPT N1 Số 6",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                }

              ],
            },
            {
              id: 101,
              name: "Tiếng Nhật JLPT N2",
              time: 170,
              image: "",
              people: 5000,
              exams: [
                {
                  id: 1000,
                  name: "Đề Thi JLPT N2 Số 1",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1001,
                  name: "Đề Thi JLPT N2 Số 2",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1002,
                  name: "Đề Thi JLPT N2 Số 3",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1003,
                  name: "Đề Thi JLPT N2 Số 4",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1004,
                  name: "Đề Thi JLPT N2 Số 5",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1005,
                  name: "Đề Thi JLPT N2 Số 6",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                }

              ],
            },
            {
              id: 102,
              name: "Tiếng Nhật JLPT N3",
              image: "",
              time: 160,
              people: 5000,
              exams: [
                {
                  id: 1000,
                  name: "Đề Thi JLPT N3 Số 1",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1001,
                  name: "Đề Thi JLPT N3 Số 2",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1002,
                  name: "Đề Thi JLPT N3 Số 3",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1003,
                  name: "Đề Thi JLPT N3 Số 4",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1004,
                  name: "Đề Thi JLPT N3 Số 5",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1005,
                  name: "Đề Thi JLPT N3 Số 6",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                }

              ],
            },
            {
              id: 103,
              name: "Tiếng Nhật JLPT N4",
              image: "",
              time: 150,
              people: 5000,
              exams: [
                {
                  id: 1000,
                  name: "Đề Thi JLPT N4 Số 1",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1001,
                  name: "Đề Thi JLPT N4 Số 2",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1002,
                  name: "Đề Thi JLPT N4 Số 3",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1003,
                  name: "Đề Thi JLPT N4 Số 4",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1004,
                  name: "Đề Thi JLPT N4 Số 5",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1005,
                  name: "Đề Thi JLPT N4 Số 6",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                }

              ],
            },
            {
              id: 104,
              name: "Tiếng Nhật JLPT N5",
              image: "",
              time: 140,
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1001,
                  name: "Đề Thi JLPT N5 Số 2",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1002,
                  name: "Đề Thi JLPT N5 Số 3",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1003,
                  name: "Đề Thi JLPT N5 Số 4",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1004,
                  name: "Đề Thi JLPT N5 Số 5",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                },
                {
                  id: 1005,
                  name: "Đề Thi JLPT N5 Số 6",
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
                          list: [
                            {
                              id: 4000,
                              name: "、きょうとにいきました。",
                              special: "せんげつ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先",check: false},
                              ]
                            },
                            {
                              id: 4001,
                              name: "んごをべんきょうしています。",
                              special: "にほ",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5004, value: "英語", check: false},
                                {id: 5005, value: "中国語", check: false},
                                {id: 5006, value: "日本語", check: true},
                                {id: 5007, value: "韓国語", check: false},
                              ],
                            },
                            {
                              id: 4002,
                              name: "、でんしゃにのりました。",
                              special: "きのう",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 5004, value: "昨日", check: true },
                                { id: 5005, value: "明日", check: false },
                                { id: 5006, value: "今朝", check: false },
                                { id: 5007, value: "先週", check: false }
                              ]
                            }
                          ],
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
                                { id: 5013, value: "今週", check: true },
                                { id: 5014, value: "先週", check: false },
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
                                { id: 5017, value: "来年", check: true },
                                { id: 5018, value: "今年", check: false },
                                { id: 5019, value: "来月", check: false }
                              ]
                            }
                          ],
                        }
                      ],
                    },
                    {
                      id: 2001,
                      name: "Ngữ pháp - đọc hiểu",
                      time: 50,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                    {
                      id: 2002,
                      name: "Nghe",
                      time: 30,
                      quantity: 35,
                      score: 0,
                      questions: [
                        {
                          id: 3000,
                          name: "Nội dung nhóm câu hỏi 1",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        },
                        {
                          id: 3001,
                          name: "Nội dung nhóm câu hỏi 2",
                          problem: null,
                          text: "こんにちは こんにちは    A んにち    B んにち  ",
                          list: [
                            {
                              id: 4000,
                              name: "せんげつ、きょうとにいきました。",
                              answer: null,
                              point: 1,
                              select: [
                                {id: 5000, value: "先日", check: false},
                                {id: 5001, value: "先月", check: true},
                                {id: 5002, value: "先目",check: false},
                                {id: 5003, value: "先", check: false},
                              ],
                            },
                            {
                              id: 4001,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4002,
                              name: "あしたはやすみですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6000, value: "はい、やすみです。", check: true }, 
                                { id: 6001, value: "いいえ、いきます。", check: false }, 
                                { id: 6002, value: "はい、いきません。", check: false }, 
                                { id: 6003, value: "いいえ、いきました。", check: false } 
                              ],
                            },
                            {
                              id: 4003,
                              name: "せんせいはどこですか。",
                              answer: null,
                              point: 1,
                              select: [
                                { id: 6004, value: "がっこうです。", check: true },
                                { id: 6005, value: "たべます。", check: false },
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
                                { id: 6008, value: "よじです。", check: true },
                                { id: 6009, value: "あさごはんです。", check: false },
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
                                { id: 6012, value: "いいえ、くるまでいきます。", check: true },
                                { id: 6013, value: "いいえ、がっこうです。", check: false },
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
                                { id: 6016, value: "ほんです。", check: true },
                                { id: 6017, value: "いきます。", check: false },
                                { id: 6018, value: "あしたです。", check: false },
                                { id: 6019, value: "たべものですか。", check: false }
                              ]
                            }
                            
                          ],
                        }
                      ],
                    },
                  ],
                }

              ],
            }
            
          ],
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
      course: [
        {
          id: 11,
          name: "Tiếng Nhật N1",
          image: "/team2-mankai-user/assets/image/image-course.png",
          lessons: [
            {
              id:100,
              name: "Bài 1",
              progress: 0,
              detail: [
                {
                  id:1000,
                  describe: `<h3>Lorem ipsum dolor sit amet consectetur:</h3>
                      <p>
                        Ornare eu elementum felis porttitor nunc tortor. Ornare
                        neque accumsan metus nulla ultricies maecenas rhoncus
                        ultrices cras. Vestibulum varius adipiscing ipsum
                        pharetra. Semper ullamcorper malesuada ut auctor
                        scelerisque. Sit morbi pellentesque adipiscing
                        pellentesque habitant ullamcorper est. In dolor sit
                        platea faucibus ut dignissim pulvinar.
                      </p>`,
                  document: [
                    {
                      id: 500,
                      name: "PDF"
                    },
                    {
                      id: 501,
                      name: "Video"
                    },
                    {
                      id: 502,
                      name: "Text"
                    },
                    {
                      id: 503,
                      name: "Audio"
                    }
                  ],
                  discuss:{
                    id: 600,
                    listComment:[
                      {
                        id: 3000,
                        name: "Thanh",
                        avatar: `/team2-mankai-user/assets/image/avatar3.jpg`,
                        content: "Ornare eu elementum felis porttitor nunc tortor. Ornare neque accumsan metus nulla ultricies maecenas rhoncus ultrices cras.",
                        time: "5:30 1/3/2025",
                      },
                      {
                        id: 3001,
                        name: "Lê Toàn",
                        avatar: `/team2-mankai-user/assets/image/avatar4.jpg`,
                        content: "For more information, please have a look at the link below.",
                        time: "5:50 2/3/2025",
                      }
                    ]
                  }
                },
                {
                  id: 1001,
                  name: "Video",
                  status: false,
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
                  status: false,
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
                  content:"",
                },
                {
                  id: 1005,
                  name: "Audio / Script",
                  status: false,
                  questions:[
                    {
                      id: 2000,
                      text1: "私はグエン・タイ・デュイです。郵政通信技術大学の学生です 私は <br/> エン・タイ・デュはグエン・タイ・デュイです",
                      text2: "私はグエン・タイ・デュイで",
                      answer:"デュイで"
                    }
                  ],
                }
              ]
            }
          ]
        },
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
        {
          id: 13,
          name: "Tiếng Nhật N3",
          image: "/team2-mankai-user/assets/image/image-course.png",
          lessons: []
        },
        {
          id: 14,
          name: "Tiếng Nhật N4",
          image: "/team2-mankai-user/assets/image/image-course.png",
          lessons: []
        },
        {
          id: 15,
          name: "Tiếng Nhật N5",
          image: "/team2-mankai-user/assets/image/image-course.png",
          lessons: []
        },
        {
          id: 16,
          name: "Tiếng Nhật N6",
          image: "/team2-mankai-user/assets/image/image-course.png",
          lessons: []
        },
        {
          id: 17,
          name: "Tiếng Nhật N7",
          image: "/team2-mankai-user/assets/image/image-course.png",
          lessons: []
        },
        {
          id: 18,
          name: "Tiếng Nhật N8",
          image: "/team2-mankai-user/assets/image/image-course.png",
          lessons: []
        }
      ],
    },
    
    {
      id: 4,
      name: "Phạm Minh Tuấn",
      gmail: "MinhTuan2000@gmail.com",
      username: "minhtuan",
      password: "tuantu123",
      address: "Ba Đình, Hà Nội",
      avatar: "/team2-mankai-user/assets/image/avatar1.jpg",
      level: "N2",
      streaks: 5,
      exp: 120,
      studyMankai: []
    },
    {
      id: 5,
      name: "Hoàng Thị Mai",
      gmail: "MaiHoang1998@gmail.com",
      username: "hoangmai",
      password: "mai1998pass",
      address: "Hai Bà Trưng, Hà Nội",
      avatar: "/team2-mankai-user/assets/image/avatar2.jpg",
      level: "N3",
      streaks: 2,
      exp: 45,
      studyMankai: []
    },
    {
      id: 6,
      name: "Lê Quang Huy",
      gmail: "HuyLe2001@gmail.com",
      username: "quanghuy",
      password: "huy2001!",
      address: "Thanh Xuân, Hà Nội",
      avatar: "/team2-mankai-user/assets/image/avatar3.jpg",
      level: "N1",
      streaks: 7,
      exp: 200,
      studyMankai: []
    },
    {
      id: 7,
      name: "Trương Ngọc Ánh",
      gmail: "NgocAnh99@gmail.com",
      username: "ngocanh",
      password: "anhngoc99",
      address: "Long Biên, Hà Nội",
      avatar: "/team2-mankai-user/assets/image/avatar4.jpg",
      level: "N4",
      streaks: 1,
      exp: 30,
      studyMankai: []
    },
    {
      id: 8,
      name: "Đỗ Văn Nam",
      gmail: "NamDo2002@gmail.com",
      username: "vannam",
      password: "namdo1234",
      address: "Hoài Đức, Hà Nội",
      avatar: "/team2-mankai-user/assets/image/avatar5.jpg",
      level: "N2",
      streaks: 4,
      exp: 90,
      studyMankai: []
    },
    {
      id: 9,
      name: "Vũ Thị Lan",
      gmail: "LanVu1997@gmail.com",
      username: "thilan",
      password: "lanvu97@",
      address: "Đống Đa, Hà Nội",
      avatar: "/team2-mankai-user/assets/image/avatar6.jpg",
      level: "N3",
      streaks: 3,
      exp: 65,
      studyMankai: []
    },
    {
      id: 10,
      name: "Bùi Minh Đức",
      gmail: "DucBui2003@gmail.com",
      username: "minhduc",
      password: "duc2003pass",
      address: "Hà Đông, Hà Nội",
      avatar: "/team2-mankai-user/assets/image/avatar7.jpg",
      level: "N5",
      streaks: 0,
      exp: 10,
      studyMankai: []
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
    window.location.href = "/team2-mankai-user/Authentication-StudentManager/pages/signin.html";
  }
  user = users[0];
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

