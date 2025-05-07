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
              image: "/team2-mankai-user/assets/icons/chaohoi.svg",
              vocabulary: [
                { id: 1000, name: "こんにちは", romanized: "Kon ni chi wa", vietsub: "Xin chào" },
                { id: 1001, name: "おはよう", romanized: "O ha you", vietsub: "Chào buổi sáng" },
                { id: 1002, name: "じゃあね", romanized: "Jaa ne", vietsub: "Tạm biệt" },
                { id: 1003, name: "ありがとう", romanized: "A ri ga tou", vietsub: "Cảm ơn" },
                { id: 1004, name: "はじめまして", romanized: "Ha ji me ma shi te", vietsub: "Rất vui được gặp" },
                { id: 1005, name: "お元気ですか", romanized: "O gen ki de su ka", vietsub: "Bạn khỏe không?" },
                { id: 1006, name: "よろしく", romanized: "Yo ro shi ku", vietsub: "Rất mong được giúp đỡ" },
                { id: 1007, name: "さようなら", romanized: "Sa you na ra", vietsub: "Chào tạm biệt" }
              ]
            },
            {
              id: 101,
              name: "Hội thoại",
              image: "/team2-mankai-user/assets/icons/hoithoai.svg",
              vocabulary: [
                { id: 1008, name: "すみません", romanized: "Su mi ma sen", vietsub: "Xin lỗi" },
                { id: 1009, name: "お願いします", romanized: "O ne gai shi ma su", vietsub: "Làm ơn" },
                { id: 1010, name: "わかりました", romanized: "Wa ka ri ma shi ta", vietsub: "Tôi hiểu rồi" },
                { id: 1011, name: "大丈夫", romanized: "Dai jou bu", vietsub: "Không sao" },
                { id: 1012, name: "ちょっと", romanized: "Chot to", vietsub: "Một chút" },
                { id: 1013, name: "どうぞ", romanized: "Dou zo", vietsub: "Mời vào" },
                { id: 1014, name: "待って", romanized: "Mat te", vietsub: "Chờ đã" },
                { id: 1015, name: "もちろん", romanized: "Mo chi ron", vietsub: "Tất nhiên" },
                { id: 1016, name: "問題", romanized: "Mon dai", vietsub: "Vấn đề" },
                { id: 1017, name: "ごめんなさい", romanized: "Go men na sai", vietsub: "Xin lỗi (thân mật)" }
              ]
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
                { id: 1024, name: "万", romanized: "Man", vietsub: "Mười nghìn" },
                { id: 1025, name: "四", romanized: "Shi", vietsub: "Bốn" },
                { id: 1026, name: "五", romanized: "Go", vietsub: "Năm" },
                { id: 1027, name: "六", romanized: "Roku", vietsub: "Sáu" },
                { id: 1028, name: "七", romanized: "Shichi", vietsub: "Bảy" },
                { id: 1029, name: "八", romanized: "Hachi", vietsub: "Tám" },
                { id: 1030, name: "九", romanized: "Kyuu", vietsub: "Chín" }
              ]
            },
            {
              id: 103,
              name: "Ngày và Giờ",
              image: "/team2-mankai-user/assets/icons/ngayvagio.svg",
              vocabulary: [
                { id: 1031, name: "今日", romanized: "Kyou", vietsub: "Hôm nay" },
                { id: 1032, name: "明日", romanized: "A shi ta", vietsub: "Ngày mai" },
                { id: 1033, name: "時間", romanized: "Ji kan", vietsub: "Thời gian" },
                { id: 1034, name: "朝", romanized: "A sa", vietsub: "Buổi sáng" },
                { id: 1035, name: "夜", romanized: "Yo ru", vietsub: "Buổi tối" },
                { id: 1036, name: "月曜日", romanized: "Getsu you bi", vietsub: "Thứ hai" },
                { id: 1037, name: "火曜日", romanized: "Ka you bi", vietsub: "Thứ ba" },
                { id: 1038, name: "水曜日", romanized: "Sui you bi", vietsub: "Thứ tư" },
                { id: 1039, name: "木曜日", romanized: "Moku you bi", vietsub: "Thứ năm" },
                { id: 1040, name: "金曜日", romanized: "Kin you bi", vietsub: "Thứ sáu" },
                { id: 1041, name: "土曜日", romanized: "Do you bi", vietsub: "Thứ bảy" },
                { id: 1042, name: "日曜日", romanized: "Ni chi you bi", vietsub: "Chủ nhật" }
              ]
            },
            {
              id: 104,
              name: "Phương hướng & Địa điểm",
              image: "/team2-mankai-user/assets/icons/phuonghuong.svg",
              vocabulary: [
                { id: 1043, name: "右", romanized: "Mi gi", vietsub: "Bên phải" },
                { id: 1044, name: "左", romanized: "Hi da ri", vietsub: "Bên trái" },
                { id: 1045, name: "前", romanized: "Mae", vietsub: "Phía trước" },
                { id: 1046, name: "後ろ", romanized: "U shi ro", vietsub: "Phía sau" },
                { id: 1047, name: "北", romanized: "Ki ta", vietsub: "Phía bắc" },
                { id: 1048, name: "南", romanized: "Mi na mi", vietsub: "Phía nam" },
                { id: 1049, name: "東", romanized: "Hi ga shi", vietsub: "Phía đông" },
                { id: 1050, name: "西", romanized: "Ni shi", vietsub: "Phía tây" },
                { id: 1051, name: "近く", romanized: "Chi ka ku", vietsub: "Gần" },
                { id: 1052, name: "遠い", romanized: "To oi", vietsub: "Xa" },
                { id: 1053, name: "上", romanized: "Ue", vietsub: "Phía trên" },
                { id: 1054, name: "下", romanized: "Shi ta", vietsub: "Phía dưới" },
                { id: 1055, name: "中", romanized: "Na ka", vietsub: "Bên trong" }
              ]
            },
            {
              id: 105,
              name: "Phương tiện đi lại",
              image: "/team2-mankai-user/assets/icons/phuongtien.svg",
              vocabulary: [
                { id: 1056, name: "車", romanized: "Ku ru ma", vietsub: "Xe hơi" },
                { id: 1057, name: "電車", romanized: "Den sha", vietsub: "Tàu điện" },
                { id: 1058, name: "飛行機", romanized: "Hi kou ki", vietsub: "Máy bay" },
                { id: 1059, name: "自転車", romanized: "Ji ten sha", vietsub: "Xe đạp" },
                { id: 1060, name: "バス", romanized: "Ba su", vietsub: "Xe buýt" },
                { id: 1061, name: "タクシー", romanized: "Ta ku shii", vietsub: "Taxi" },
                { id: 1062, name: "船", romanized: "Fu ne", vietsub: "Tàu thủy" },
                { id: 1063, name: "新幹線", romanized: "Shin kan sen", vietsub: "Tàu cao tốc" },
                { id: 1064, name: "バイク", romanized: "Bai ku", vietsub: "Xe máy" }
              ]
            },
            {
              id: 106,
              name: "Địa điểm nghỉ ngơi",
              image: "/team2-mankai-user/assets/icons/diadiem.svg",
              vocabulary: [
                { id: 1065, name: "ホテル", romanized: "Ho te ru", vietsub: "Khách sạn" },
                { id: 1066, name: "家", romanized: "Ie", vietsub: "Nhà" },
                { id: 1067, name: "旅館", romanized: "Ryo kan", vietsub: "Nhà trọ truyền thống" },
                { id: 1068, name: "民宿", romanized: "Min shu ku", vietsub: "Nhà nghỉ dân dụng" },
                { id: 1069, name: "キャンプ場", romanized: "Kyan pu jou", vietsub: "Khu cắm trại" },
                { id: 1070, name: "別荘", romanized: "Bes sou", vietsub: "Biệt thự" }
              ]
            },
            {
              id: 107,
              name: "Ăn uống",
              image: "/team2-mankai-user/assets/icons/anuong.svg",
              vocabulary: [
                { id: 1071, name: "ご飯", romanized: "Go han", vietsub: "Cơm" },
                { id: 1072, name: "水", romanized: "Mi zu", vietsub: "Nước" },
                { id: 1073, name: "お茶", romanized: "O cha", vietsub: "Trà" },
                { id: 1074, name: "寿司", romanized: "Su shi", vietsub: "Sushi" },
                { id: 1075, name: "ラーメン", romanized: "Raa men", vietsub: "Mì ramen" },
                { id: 1076, name: "うどん", romanized: "U don", vietsub: "Mì udon" },
                { id: 1077, name: "そば", romanized: "So ba", vietsub: "Mì soba" },
                { id: 1078, name: "カレー", romanized: "Ka ree", vietsub: "Cà ri" },
                { id: 1079, name: "天ぷら", romanized: "Ten pu ra", vietsub: "Tôm chiên" },
                { id: 1080, name: "焼き鳥", romanized: "Ya ki to ri", vietsub: "Gà nướng" },
                { id: 1081, name: "おにぎり", romanized: "O ni gi ri", vietsub: "Cơm nắm" },
                { id: 1082, name: "納豆", romanized: "Nat tou", vietsub: "Đậu nành lên men" },
                { id: 1083, name: "味噌汁", romanized: "Mi so shi ru", vietsub: "Súp miso" },
                { id: 1084, name: "お弁当", romanized: "O ben tou", vietsub: "Cơm hộp" },
                { id: 1085, name: "牛丼", romanized: "Gyu don", vietsub: "Cơm bò" }
              ]
            },
            {
              id: 108,
              name: "Mua sắm",
              image: "/team2-mankai-user/assets/icons/muasam.svg",
              vocabulary: [
                { id: 1086, name: "店", romanized: "Mi se", vietsub: "Cửa hàng" },
                { id: 1087, name: "値段", romanized: "Ne dan", vietsub: "Giá cả" },
                { id: 1088, name: "買い物", romanized: "Ka i mo no", vietsub: "Mua sắm" },
                { id: 1089, name: "お金", romanized: "O ka ne", vietsub: "Tiền" },
                { id: 1090, name: "スーパー", romanized: "Suu paa", vietsub: "Siêu thị" },
                { id: 1091, name: "市場", romanized: "Shi jou", vietsub: "Chợ" },
                { id: 1092, name: "割引", romanized: "Wa ri bi ki", vietsub: "Giảm giá" },
                { id: 1093, name: "クレジットカード", romanized: "Ku re jit to kaa do", vietsub: "Thẻ tín dụng" },
                { id: 1094, name: "現金", romanized: "Gen kin", vietsub: "Tiền mặt" },
                { id: 1095, name: "商品", romanized: "Shou hin", vietsub: "Sản phẩm" }
              ]
            },
            {
              id: 109,
              name: "Thành phố & Tỉnh",
              image: "/team2-mankai-user/assets/icons/thanhpho.svg",
              vocabulary: [
                { id: 1096, name: "東京", romanized: "Tou kyou", vietsub: "Tokyo" },
                { id: 1097, name: "大阪", romanized: "O sa ka", vietsub: "Osaka" },
                { id: 1098, name: "京都", romanized: "Kyou to", vietsub: "Kyoto" },
                { id: 1099, name: "北海道", romanized: "Hok kai dou", vietsub: "Hokkaido" },
                { id: 1100, name: "福岡", romanized: "Fu kuo ka", vietsub: "Fukuoka" },
                { id: 1101, name: "広島", romanized: "Hi ro shi ma", vietsub: "Hiroshima" },
                { id: 1102, name: "名古屋", romanized: "Na go ya", vietsub: "Nagoya" },
                { id: 1103, name: "神戸", romanized: "Kou be", vietsub: "Kobe" },
                { id: 1104, name: "横浜", romanized: "Yo ko ha ma", vietsub: "Yokohama" },
                { id: 1105, name: "札幌", romanized: "Sap po ro", vietsub: "Sapporo" }
              ]
            },
            {
              id: 110,
              name: "Quốc gia",
              image: "/team2-mankai-user/assets/icons/quocgia.svg",
              vocabulary: [
                { id: 1106, name: "日本", romanized: "Ni hon", vietsub: "Nhật Bản" },
                { id: 1107, name: "ベトナム", romanized: "Be to na mu", vietsub: "Việt Nam" },
                { id: 1108, name: "アメリカ", romanized: "A me ri ka", vietsub: "Mỹ" },
                { id: 1109, name: "中国", romanized: "Chuu goku", vietsub: "Trung Quốc" },
                { id: 1110, name: "韓国", romanized: "Kan koku", vietsub: "Hàn Quốc" },
                { id: 1111, name: "フランス", romanized: "Fu ran su", vietsub: "Pháp" },
                { id: 1112, name: "イギリス", romanized: "I gi ri su", vietsub: "Anh" },
                { id: 1113, name: "ドイツ", romanized: "Do i tsu", vietsub: "Đức" }
              ]
            },
            {
              id: 111,
              name: "Danh lam thắng cảnh",
              image: "/team2-mankai-user/assets/icons/danhlam.svg",
              vocabulary: [
                { id: 1114, name: "寺", romanized: "Te ra", vietsub: "Chùa" },
                { id: 1115, name: "神社", romanized: "Jin ja", vietsub: "Đền thờ" },
                { id: 1116, name: "富士山", romanized: "Fu ji san", vietsub: "Núi Phú Sĩ" },
                { id: 1117, name: "金閣寺", romanized: "Kin ka ku ji", vietsub: "Chùa Vàng" },
                { id: 1118, name: "清水寺", romanized: "Ki yo mi zu de ra", vietsub: "Chùa Kiyomizu" },
                { id: 1119, name: "厳島神社", romanized: "It su ku shi ma jin ja", vietsub: "Đền Itsukushima" },
                { id: 1120, name: "東京タワー", romanized: "Tou kyou taa waa", vietsub: "Tháp Tokyo" }
              ]
            },
            {
              id: 112,
              name: "Gia đình",
              image: "/team2-mankai-user/assets/icons/giadinh.svg",
              vocabulary: [
                { id: 1121, name: "家族", romanized: "Ka zo ku", vietsub: "Gia đình" },
                { id: 1122, name: "お父さん", romanized: "O tou san", vietsub: "Bố" },
                { id: 1123, name: "お母さん", romanized: "O kaa san", vietsub: "Mẹ" },
                { id: 1124, name: "兄弟", romanized: "Kyou dai", vietsub: "Anh em" },
                { id: 1125, name: "姉妹", romanized: "Shi mai", vietsub: "Chị em" },
                { id: 1126, name: "祖父", romanized: "So fu", vietsub: "Ông" },
                { id: 1127, name: "祖母", romanized: "So bo", vietsub: "Bà" },
                { id: 1128, name: "叔父", romanized: "O ji", vietsub: "Chú" },
                { id: 1129, name: "叔母", romanized: "O ba", vietsub: "Cô" },
                { id: 1130, name: "従兄弟", romanized: "It to ko", vietsub: "Anh em họ" },
                { id: 1131, name: "子供", romanized: "Ko do mo", vietsub: "Con cái" }
              ]
            },
            {
              id: 113,
              name: "Hẹn hò",
              image: "/team2-mankai-user/assets/icons/henho.svg",
              vocabulary: [
                { id: 1132, name: "デート", romanized: "De to", vietsub: "Hẹn hò" },
                { id: 1133, name: "好き", romanized: "Su ki", vietsub: "Thích" },
                { id: 1134, name: "愛", romanized: "Ai", vietsub: "Yêu" },
                { id: 1135, name: "プレゼント", romanized: "Pu re zen to", vietsub: "Quà tặng" },
                { id: 1136, name: "花", romanized: "Ha na", vietsub: "Hoa" },
                { id: 1137, name: "キス", romanized: "Ki su", vietsub: "Nụ hôn" },
                { id: 1138, name: "デートスポット", romanized: "De to su pot to", vietsub: "Địa điểm hẹn hò" }
              ]
            },
            {
              id: 114,
              name: "Khẩn cấp",
              image: "/team2-mankai-user/assets/icons/khancap.svg",
              vocabulary: [
                { id: 1139, name: "助けて", romanized: "Ta su ke te", vietsub: "Cứu giúp" },
                { id: 1140, name: "警察", romanized: "Kei satsu", vietsub: "Cảnh sát" },
                { id: 1141, name: "救急車", romanized: "Kyuu kyuu sha", vietsub: "Xe cứu thương" },
                { id: 1142, name: "火事", romanized: "Ka ji", vietsub: "Cháy" },
                { id: 1143, name: "危険", romanized: "Ki ken", vietsub: "Nguy hiểm" },
                { id: 1144, name: "事故", romanized: "Ji ko", vietsub: "Tai nạn" },
                { id: 1145, name: "緊急", romanized: "Kin kyuu", vietsub: "Khẩn cấp" },
                { id: 1146, name: "避難", romanized: "Hi nan", vietsub: "Sơ tán" }
              ]
            },
            {
              id: 115,
              name: "Bệnh tật",
              image: "/team2-mankai-user/assets/icons/benhtat.svg",
              vocabulary: [
                { id: 1147, name: "病院", romanized: "Byou in", vietsub: "Bệnh viện" },
                { id: 1148, name: "病気", romanized: "Byou ki", vietsub: "Bệnh" },
                { id: 1149, name: "薬", romanized: "Ku su ri", vietsub: "Thuốc" },
                { id: 1150, name: "熱", romanized: "Ne tsu", vietsub: "Sốt" },
                { id: 1151, name: "痛い", romanized: "I tai", vietsub: "Đau" },
                { id: 1152, name: "医者", romanized: "I sha", vietsub: "Bác sĩ" },
                { id: 1153, name: "風邪", romanized: "Ka ze", vietsub: "Cảm lạnh" },
                { id: 1154, name: "頭痛", romanized: "Zu tsuu", vietsub: "Đau đầu" },
                { id: 1155, name: "怪我", romanized: "Ke ga", vietsub: "Thương tích" }
              ]
            },
            {
              id: 116,
              name: "Câu đồng âm, khác nghĩa",
              image: "/team2-mankai-user/assets/icons/caudongam.svg",
              vocabulary: [
                { id: 1156, name: "橋", romanized: "Ha shi", vietsub: "Cây cầu" },
                { id: 1157, name: "箸", romanized: "Ha shi", vietsub: "Đũa" },
                { id: 1158, name: "花", romanized: "Ha na", vietsub: "Hoa" },
                { id: 1159, name: "鼻", romanized: "Ha na", vietsub: "Mũi" },
                { id: 1160, name: "星", romanized: "Ho shi", vietsub: "Ngôi sao" },
                { id: 1161, name: "干し", romanized: "Ho shi", vietsub: "Phơi khô" },
                { id: 1162, name: "絵", romanized: "E", vietsub: "Bức tranh" },
                { id: 1163, name: "柄", romanized: "E", vietsub: "Tay cầm" }
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
          detail: [
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
  // let currentPath = window.location.pathname;
  // let filename = currentPath.split('/').pop();
  // if (filename != "signin.html") {
  //   window.location.href = "../pages/login.html";
  // }
  user ={
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
            image: "/team2-mankai-user/assets/icons/chaohoi.svg",
            vocabulary: [
              { id: 1000, name: "こんにちは", romanized: "Kon ni chi wa", vietsub: "Xin chào" },
              { id: 1001, name: "おはよう", romanized: "O ha you", vietsub: "Chào buổi sáng" },
              { id: 1002, name: "じゃあね", romanized: "Jaa ne", vietsub: "Tạm biệt" },
              { id: 1003, name: "ありがとう", romanized: "A ri ga tou", vietsub: "Cảm ơn" },
              { id: 1004, name: "はじめまして", romanized: "Ha ji me ma shi te", vietsub: "Rất vui được gặp" },
              { id: 1005, name: "お元気ですか", romanized: "O gen ki de su ka", vietsub: "Bạn khỏe không?" },
              { id: 1006, name: "よろしく", romanized: "Yo ro shi ku", vietsub: "Rất mong được giúp đỡ" },
              { id: 1007, name: "さようなら", romanized: "Sa you na ra", vietsub: "Chào tạm biệt" }
            ]
          },
          {
            id: 101,
            name: "Hội thoại",
            image: "/team2-mankai-user/assets/icons/hoithoai.svg",
            vocabulary: [
              { id: 1008, name: "すみません", romanized: "Su mi ma sen", vietsub: "Xin lỗi" },
              { id: 1009, name: "お願いします", romanized: "O ne gai shi ma su", vietsub: "Làm ơn" },
              { id: 1010, name: "わかりました", romanized: "Wa ka ri ma shi ta", vietsub: "Tôi hiểu rồi" },
              { id: 1011, name: "大丈夫", romanized: "Dai jou bu", vietsub: "Không sao" },
              { id: 1012, name: "ちょっと", romanized: "Chot to", vietsub: "Một chút" },
              { id: 1013, name: "どうぞ", romanized: "Dou zo", vietsub: "Mời vào" },
              { id: 1014, name: "待って", romanized: "Mat te", vietsub: "Chờ đã" },
              { id: 1015, name: "もちろん", romanized: "Mo chi ron", vietsub: "Tất nhiên" },
              { id: 1016, name: "問題", romanized: "Mon dai", vietsub: "Vấn đề" },
              { id: 1017, name: "ごめんなさい", romanized: "Go men na sai", vietsub: "Xin lỗi (thân mật)" }
            ]
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
              { id: 1024, name: "万", romanized: "Man", vietsub: "Mười nghìn" },
              { id: 1025, name: "四", romanized: "Shi", vietsub: "Bốn" },
              { id: 1026, name: "五", romanized: "Go", vietsub: "Năm" },
              { id: 1027, name: "六", romanized: "Roku", vietsub: "Sáu" },
              { id: 1028, name: "七", romanized: "Shichi", vietsub: "Bảy" },
              { id: 1029, name: "八", romanized: "Hachi", vietsub: "Tám" },
              { id: 1030, name: "九", romanized: "Kyuu", vietsub: "Chín" }
            ]
          },
          {
            id: 103,
            name: "Ngày và Giờ",
            image: "/team2-mankai-user/assets/icons/ngayvagio.svg",
            vocabulary: [
              { id: 1031, name: "今日", romanized: "Kyou", vietsub: "Hôm nay" },
              { id: 1032, name: "明日", romanized: "A shi ta", vietsub: "Ngày mai" },
              { id: 1033, name: "時間", romanized: "Ji kan", vietsub: "Thời gian" },
              { id: 1034, name: "朝", romanized: "A sa", vietsub: "Buổi sáng" },
              { id: 1035, name: "夜", romanized: "Yo ru", vietsub: "Buổi tối" },
              { id: 1036, name: "月曜日", romanized: "Getsu you bi", vietsub: "Thứ hai" },
              { id: 1037, name: "火曜日", romanized: "Ka you bi", vietsub: "Thứ ba" },
              { id: 1038, name: "水曜日", romanized: "Sui you bi", vietsub: "Thứ tư" },
              { id: 1039, name: "木曜日", romanized: "Moku you bi", vietsub: "Thứ năm" },
              { id: 1040, name: "金曜日", romanized: "Kin you bi", vietsub: "Thứ sáu" },
              { id: 1041, name: "土曜日", romanized: "Do you bi", vietsub: "Thứ bảy" },
              { id: 1042, name: "日曜日", romanized: "Ni chi you bi", vietsub: "Chủ nhật" }
            ]
          },
          {
            id: 104,
            name: "Phương hướng & Địa điểm",
            image: "/team2-mankai-user/assets/icons/phuonghuong.svg",
            vocabulary: [
              { id: 1043, name: "右", romanized: "Mi gi", vietsub: "Bên phải" },
              { id: 1044, name: "左", romanized: "Hi da ri", vietsub: "Bên trái" },
              { id: 1045, name: "前", romanized: "Mae", vietsub: "Phía trước" },
              { id: 1046, name: "後ろ", romanized: "U shi ro", vietsub: "Phía sau" },
              { id: 1047, name: "北", romanized: "Ki ta", vietsub: "Phía bắc" },
              { id: 1048, name: "南", romanized: "Mi na mi", vietsub: "Phía nam" },
              { id: 1049, name: "東", romanized: "Hi ga shi", vietsub: "Phía đông" },
              { id: 1050, name: "西", romanized: "Ni shi", vietsub: "Phía tây" },
              { id: 1051, name: "近く", romanized: "Chi ka ku", vietsub: "Gần" },
              { id: 1052, name: "遠い", romanized: "To oi", vietsub: "Xa" },
              { id: 1053, name: "上", romanized: "Ue", vietsub: "Phía trên" },
              { id: 1054, name: "下", romanized: "Shi ta", vietsub: "Phía dưới" },
              { id: 1055, name: "中", romanized: "Na ka", vietsub: "Bên trong" }
            ]
          },
          {
            id: 105,
            name: "Phương tiện đi lại",
            image: "/team2-mankai-user/assets/icons/phuongtien.svg",
            vocabulary: [
              { id: 1056, name: "車", romanized: "Ku ru ma", vietsub: "Xe hơi" },
              { id: 1057, name: "電車", romanized: "Den sha", vietsub: "Tàu điện" },
              { id: 1058, name: "飛行機", romanized: "Hi kou ki", vietsub: "Máy bay" },
              { id: 1059, name: "自転車", romanized: "Ji ten sha", vietsub: "Xe đạp" },
              { id: 1060, name: "バス", romanized: "Ba su", vietsub: "Xe buýt" },
              { id: 1061, name: "タクシー", romanized: "Ta ku shii", vietsub: "Taxi" },
              { id: 1062, name: "船", romanized: "Fu ne", vietsub: "Tàu thủy" },
              { id: 1063, name: "新幹線", romanized: "Shin kan sen", vietsub: "Tàu cao tốc" },
              { id: 1064, name: "バイク", romanized: "Bai ku", vietsub: "Xe máy" }
            ]
          },
          {
            id: 106,
            name: "Địa điểm nghỉ ngơi",
            image: "/team2-mankai-user/assets/icons/diadiem.svg",
            vocabulary: [
              { id: 1065, name: "ホテル", romanized: "Ho te ru", vietsub: "Khách sạn" },
              { id: 1066, name: "家", romanized: "Ie", vietsub: "Nhà" },
              { id: 1067, name: "旅館", romanized: "Ryo kan", vietsub: "Nhà trọ truyền thống" },
              { id: 1068, name: "民宿", romanized: "Min shu ku", vietsub: "Nhà nghỉ dân dụng" },
              { id: 1069, name: "キャンプ場", romanized: "Kyan pu jou", vietsub: "Khu cắm trại" },
              { id: 1070, name: "別荘", romanized: "Bes sou", vietsub: "Biệt thự" }
            ]
          },
          {
            id: 107,
            name: "Ăn uống",
            image: "/team2-mankai-user/assets/icons/anuong.svg",
            vocabulary: [
              { id: 1071, name: "ご飯", romanized: "Go han", vietsub: "Cơm" },
              { id: 1072, name: "水", romanized: "Mi zu", vietsub: "Nước" },
              { id: 1073, name: "お茶", romanized: "O cha", vietsub: "Trà" },
              { id: 1074, name: "寿司", romanized: "Su shi", vietsub: "Sushi" },
              { id: 1075, name: "ラーメン", romanized: "Raa men", vietsub: "Mì ramen" },
              { id: 1076, name: "うどん", romanized: "U don", vietsub: "Mì udon" },
              { id: 1077, name: "そば", romanized: "So ba", vietsub: "Mì soba" },
              { id: 1078, name: "カレー", romanized: "Ka ree", vietsub: "Cà ri" },
              { id: 1079, name: "天ぷら", romanized: "Ten pu ra", vietsub: "Tôm chiên" },
              { id: 1080, name: "焼き鳥", romanized: "Ya ki to ri", vietsub: "Gà nướng" },
              { id: 1081, name: "おにぎり", romanized: "O ni gi ri", vietsub: "Cơm nắm" },
              { id: 1082, name: "納豆", romanized: "Nat tou", vietsub: "Đậu nành lên men" },
              { id: 1083, name: "味噌汁", romanized: "Mi so shi ru", vietsub: "Súp miso" },
              { id: 1084, name: "お弁当", romanized: "O ben tou", vietsub: "Cơm hộp" },
              { id: 1085, name: "牛丼", romanized: "Gyu don", vietsub: "Cơm bò" }
            ]
          },
          {
            id: 108,
            name: "Mua sắm",
            image: "/team2-mankai-user/assets/icons/muasam.svg",
            vocabulary: [
              { id: 1086, name: "店", romanized: "Mi se", vietsub: "Cửa hàng" },
              { id: 1087, name: "値段", romanized: "Ne dan", vietsub: "Giá cả" },
              { id: 1088, name: "買い物", romanized: "Ka i mo no", vietsub: "Mua sắm" },
              { id: 1089, name: "お金", romanized: "O ka ne", vietsub: "Tiền" },
              { id: 1090, name: "スーパー", romanized: "Suu paa", vietsub: "Siêu thị" },
              { id: 1091, name: "市場", romanized: "Shi jou", vietsub: "Chợ" },
              { id: 1092, name: "割引", romanized: "Wa ri bi ki", vietsub: "Giảm giá" },
              { id: 1093, name: "クレジットカード", romanized: "Ku re jit to kaa do", vietsub: "Thẻ tín dụng" },
              { id: 1094, name: "現金", romanized: "Gen kin", vietsub: "Tiền mặt" },
              { id: 1095, name: "商品", romanized: "Shou hin", vietsub: "Sản phẩm" }
            ]
          },
          {
            id: 109,
            name: "Thành phố & Tỉnh",
            image: "/team2-mankai-user/assets/icons/thanhpho.svg",
            vocabulary: [
              { id: 1096, name: "東京", romanized: "Tou kyou", vietsub: "Tokyo" },
              { id: 1097, name: "大阪", romanized: "O sa ka", vietsub: "Osaka" },
              { id: 1098, name: "京都", romanized: "Kyou to", vietsub: "Kyoto" },
              { id: 1099, name: "北海道", romanized: "Hok kai dou", vietsub: "Hokkaido" },
              { id: 1100, name: "福岡", romanized: "Fu kuo ka", vietsub: "Fukuoka" },
              { id: 1101, name: "広島", romanized: "Hi ro shi ma", vietsub: "Hiroshima" },
              { id: 1102, name: "名古屋", romanized: "Na go ya", vietsub: "Nagoya" },
              { id: 1103, name: "神戸", romanized: "Kou be", vietsub: "Kobe" },
              { id: 1104, name: "横浜", romanized: "Yo ko ha ma", vietsub: "Yokohama" },
              { id: 1105, name: "札幌", romanized: "Sap po ro", vietsub: "Sapporo" }
            ]
          },
          {
            id: 110,
            name: "Quốc gia",
            image: "/team2-mankai-user/assets/icons/quocgia.svg",
            vocabulary: [
              { id: 1106, name: "日本", romanized: "Ni hon", vietsub: "Nhật Bản" },
              { id: 1107, name: "ベトナム", romanized: "Be to na mu", vietsub: "Việt Nam" },
              { id: 1108, name: "アメリカ", romanized: "A me ri ka", vietsub: "Mỹ" },
              { id: 1109, name: "中国", romanized: "Chuu goku", vietsub: "Trung Quốc" },
              { id: 1110, name: "韓国", romanized: "Kan koku", vietsub: "Hàn Quốc" },
              { id: 1111, name: "フランス", romanized: "Fu ran su", vietsub: "Pháp" },
              { id: 1112, name: "イギリス", romanized: "I gi ri su", vietsub: "Anh" },
              { id: 1113, name: "ドイツ", romanized: "Do i tsu", vietsub: "Đức" }
            ]
          },
          {
            id: 111,
            name: "Danh lam thắng cảnh",
            image: "/team2-mankai-user/assets/icons/danhlam.svg",
            vocabulary: [
              { id: 1114, name: "寺", romanized: "Te ra", vietsub: "Chùa" },
              { id: 1115, name: "神社", romanized: "Jin ja", vietsub: "Đền thờ" },
              { id: 1116, name: "富士山", romanized: "Fu ji san", vietsub: "Núi Phú Sĩ" },
              { id: 1117, name: "金閣寺", romanized: "Kin ka ku ji", vietsub: "Chùa Vàng" },
              { id: 1118, name: "清水寺", romanized: "Ki yo mi zu de ra", vietsub: "Chùa Kiyomizu" },
              { id: 1119, name: "厳島神社", romanized: "It su ku shi ma jin ja", vietsub: "Đền Itsukushima" },
              { id: 1120, name: "東京タワー", romanized: "Tou kyou taa waa", vietsub: "Tháp Tokyo" }
            ]
          },
          {
            id: 112,
            name: "Gia đình",
            image: "/team2-mankai-user/assets/icons/giadinh.svg",
            vocabulary: [
              { id: 1121, name: "家族", romanized: "Ka zo ku", vietsub: "Gia đình" },
              { id: 1122, name: "お父さん", romanized: "O tou san", vietsub: "Bố" },
              { id: 1123, name: "お母さん", romanized: "O kaa san", vietsub: "Mẹ" },
              { id: 1124, name: "兄弟", romanized: "Kyou dai", vietsub: "Anh em" },
              { id: 1125, name: "姉妹", romanized: "Shi mai", vietsub: "Chị em" },
              { id: 1126, name: "祖父", romanized: "So fu", vietsub: "Ông" },
              { id: 1127, name: "祖母", romanized: "So bo", vietsub: "Bà" },
              { id: 1128, name: "叔父", romanized: "O ji", vietsub: "Chú" },
              { id: 1129, name: "叔母", romanized: "O ba", vietsub: "Cô" },
              { id: 1130, name: "従兄弟", romanized: "It to ko", vietsub: "Anh em họ" },
              { id: 1131, name: "子供", romanized: "Ko do mo", vietsub: "Con cái" }
            ]
          },
          {
            id: 113,
            name: "Hẹn hò",
            image: "/team2-mankai-user/assets/icons/henho.svg",
            vocabulary: [
              { id: 1132, name: "デート", romanized: "De to", vietsub: "Hẹn hò" },
              { id: 1133, name: "好き", romanized: "Su ki", vietsub: "Thích" },
              { id: 1134, name: "愛", romanized: "Ai", vietsub: "Yêu" },
              { id: 1135, name: "プレゼント", romanized: "Pu re zen to", vietsub: "Quà tặng" },
              { id: 1136, name: "花", romanized: "Ha na", vietsub: "Hoa" },
              { id: 1137, name: "キス", romanized: "Ki su", vietsub: "Nụ hôn" },
              { id: 1138, name: "デートスポット", romanized: "De to su pot to", vietsub: "Địa điểm hẹn hò" }
            ]
          },
          {
            id: 114,
            name: "Khẩn cấp",
            image: "/team2-mankai-user/assets/icons/khancap.svg",
            vocabulary: [
              { id: 1139, name: "助けて", romanized: "Ta su ke te", vietsub: "Cứu giúp" },
              { id: 1140, name: "警察", romanized: "Kei satsu", vietsub: "Cảnh sát" },
              { id: 1141, name: "救急車", romanized: "Kyuu kyuu sha", vietsub: "Xe cứu thương" },
              { id: 1142, name: "火事", romanized: "Ka ji", vietsub: "Cháy" },
              { id: 1143, name: "危険", romanized: "Ki ken", vietsub: "Nguy hiểm" },
              { id: 1144, name: "事故", romanized: "Ji ko", vietsub: "Tai nạn" },
              { id: 1145, name: "緊急", romanized: "Kin kyuu", vietsub: "Khẩn cấp" },
              { id: 1146, name: "避難", romanized: "Hi nan", vietsub: "Sơ tán" }
            ]
          },
          {
            id: 115,
            name: "Bệnh tật",
            image: "/team2-mankai-user/assets/icons/benhtat.svg",
            vocabulary: [
              { id: 1147, name: "病院", romanized: "Byou in", vietsub: "Bệnh viện" },
              { id: 1148, name: "病気", romanized: "Byou ki", vietsub: "Bệnh" },
              { id: 1149, name: "薬", romanized: "Ku su ri", vietsub: "Thuốc" },
              { id: 1150, name: "熱", romanized: "Ne tsu", vietsub: "Sốt" },
              { id: 1151, name: "痛い", romanized: "I tai", vietsub: "Đau" },
              { id: 1152, name: "医者", romanized: "I sha", vietsub: "Bác sĩ" },
              { id: 1153, name: "風邪", romanized: "Ka ze", vietsub: "Cảm lạnh" },
              { id: 1154, name: "頭痛", romanized: "Zu tsuu", vietsub: "Đau đầu" },
              { id: 1155, name: "怪我", romanized: "Ke ga", vietsub: "Thương tích" }
            ]
          },
          {
            id: 116,
            name: "Câu đồng âm, khác nghĩa",
            image: "/team2-mankai-user/assets/icons/caudongam.svg",
            vocabulary: [
              { id: 1156, name: "橋", romanized: "Ha shi", vietsub: "Cây cầu" },
              { id: 1157, name: "箸", romanized: "Ha shi", vietsub: "Đũa" },
              { id: 1158, name: "花", romanized: "Ha na", vietsub: "Hoa" },
              { id: 1159, name: "鼻", romanized: "Ha na", vietsub: "Mũi" },
              { id: 1160, name: "星", romanized: "Ho shi", vietsub: "Ngôi sao" },
              { id: 1161, name: "干し", romanized: "Ho shi", vietsub: "Phơi khô" },
              { id: 1162, name: "絵", romanized: "E", vietsub: "Bức tranh" },
              { id: 1163, name: "柄", romanized: "E", vietsub: "Tay cầm" }
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
        detail: [
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


let topicId = localStorage.getItem("topicId");
if(topicId){
  topicId = JSON.parse(topicId);
} else {
  topicId = -1;
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
  }
}