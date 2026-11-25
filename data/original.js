window.DATA=window.DATA||{};window.DATA.original=[
  {
    "id": "O001",
    "title": "正方形を進む2点",
    "category": "平面図形",
    "difficulty": "発展",
    "minutes": 25,
    "question": "1辺12cmの正方形ABCDで、PはAからBを経てCへ毎秒2cm、QはAからDを経てCへ毎秒1cmで進みます。同時に出発し、Cで停止します。",
    "diagram": "square",
    "parts": [
      {
        "question": "4秒後の三角形APQの面積は何cm²ですか。",
        "answer": "16",
        "explanation": "8×4÷2＝16。",
        "points": 5,
        "hint": "底辺と高さを考える。"
      },
      {
        "question": "9秒後の面積は何cm²ですか。",
        "answer": "54",
        "explanation": "AQ＝9cm。Pは辺BC上にあり、直線ADまでの距離は12cm。9×12÷2＝54。",
        "points": 8,
        "hint": "AQを底辺にする。"
      },
      {
        "question": "面積が48cm²になる最初の時刻は何秒後ですか。",
        "answer": "8",
        "explanation": "6秒までは最大36。以後12×時刻÷2なので8秒。",
        "points": 10,
        "hint": "PがBを通る時刻を考える。"
      },
      {
        "question": "面積が48cm²になる最後の時刻は何秒後ですか。",
        "answer": "16",
        "explanation": "12秒以降はCQ＝24−時刻。面積は12×CQ÷2。CQ＝8なので16秒。",
        "points": 12,
        "hint": "CQを底辺にする。"
      },
      {
        "question": "面積が36cm²以上である時間は何秒間ですか。",
        "answer": "12",
        "explanation": "最初は6秒、最後はCQ＝6となる18秒。18−6＝12秒。",
        "points": 15,
        "hint": "増加と減少を分ける。"
      }
    ]
  },
  {
    "id": "O002",
    "title": "数字カードの条件",
    "category": "場合の数",
    "difficulty": "発展",
    "minutes": 25,
    "question": "0、1、2、3、4、5のカードが1枚ずつあります。異なる4枚を並べて4けたの整数を作ります。",
    "diagram": "",
    "parts": [
      {
        "question": "全部で何個できますか。",
        "answer": "300",
        "explanation": "千の位5通り、残り5×4×3通り。",
        "points": 5,
        "hint": "先頭は0以外。"
      },
      {
        "question": "偶数は何個ですか。",
        "answer": "156",
        "explanation": "末尾0なら5×4×3＝60。末尾2または4なら各4×4×3＝48。合計156。",
        "points": 8,
        "hint": "末尾0を分ける。"
      },
      {
        "question": "5の倍数は何個ですか。",
        "answer": "108",
        "explanation": "末尾0は60、末尾5は48。",
        "points": 10,
        "hint": "末尾は0か5。"
      },
      {
        "question": "3の倍数は何個ですか。",
        "answer": "96",
        "explanation": "全カードの和15。除く2枚の和が3の倍数になる組は(0,3),(1,2),(1,5),(4,2),(4,5)。0を除く組は18通り、0を含む組は24通り。24＋4×18＝96。",
        "points": 12,
        "hint": "使わない2枚に注目。"
      },
      {
        "question": "15の倍数は何個ですか。",
        "answer": "38",
        "explanation": "末尾0は除く組4通りで各6個、計24個。末尾5は除く組(0,3)で6個、(1,2),(2,4)で各4個。計38個。",
        "points": 15,
        "hint": "末尾0と5を分ける。"
      }
    ]
  },
  {
    "id": "O003",
    "title": "水そうと排水口",
    "category": "速さ",
    "difficulty": "発展",
    "minutes": 25,
    "question": "底面積600cm²の水そうに毎分1800cm³の水を入れます。水深12cmで排水口を開くと毎分600cm³流出します。初めは空です。",
    "diagram": "",
    "parts": [
      {
        "question": "排水前の毎分の水深の増加は何cmですか。",
        "answer": "3",
        "explanation": "1800÷600＝3。",
        "hint": "体積÷底面積",
        "points": 5
      },
      {
        "question": "排水口を開くのは何分後ですか。",
        "answer": "4",
        "explanation": "12÷3＝4。",
        "hint": "水深12cm",
        "points": 8
      },
      {
        "question": "開いた後の毎分の増加は何cmですか。",
        "answer": "2",
        "explanation": "(1800−600)÷600＝2。",
        "hint": "差を求める",
        "points": 10
      },
      {
        "question": "水深30cmになるのは開始何分後ですか。",
        "answer": "13",
        "explanation": "4＋(30−12)÷2＝13。",
        "hint": "前後を分ける",
        "points": 12
      },
      {
        "question": "その時に給水を止めると、開始何分後に空になりますか。",
        "answer": "43",
        "explanation": "排水で毎分1cm減るので13＋30＝43。",
        "hint": "排水だけの速さ",
        "points": 15
      }
    ]
  },
  {
    "id": "O004",
    "title": "余りの一致",
    "category": "整数",
    "difficulty": "発展",
    "minutes": 25,
    "question": "ある正の整数Nを5で割ると2余り、7で割ると4余ります。",
    "diagram": "",
    "parts": [
      {
        "question": "Nに3を足した数は5の倍数ですか。倍数なら1、違えば0を入力。",
        "answer": "1",
        "explanation": "余り2に3を足すと5になる。",
        "hint": "余りに3を足す",
        "points": 5
      },
      {
        "question": "Nに3を足した数は7の倍数ですか。倍数なら1、違えば0を入力。",
        "answer": "1",
        "explanation": "4＋3＝7。",
        "hint": "同じ操作",
        "points": 8
      },
      {
        "question": "最小のNはいくつですか。",
        "answer": "32",
        "explanation": "5と7の最小公倍数35から3を引く。",
        "hint": "公倍数",
        "points": 10
      },
      {
        "question": "500以下のNは何個ですか。",
        "answer": "14",
        "explanation": "32,67,…,487。 (487−32)÷35＋1＝14。",
        "hint": "35ずつ増える",
        "points": 12
      },
      {
        "question": "さらに3で割ると1余る最小のNはいくつですか。",
        "answer": "67",
        "explanation": "32は余り2、67は余り1。",
        "hint": "候補を順に調べる",
        "points": 15
      }
    ]
  },
  {
    "id": "O005",
    "title": "立方体の色",
    "category": "立体図形",
    "difficulty": "発展",
    "minutes": 25,
    "question": "1辺6cmの立方体の全面を塗り、1辺1cmの小立方体に切り分けます。",
    "diagram": "",
    "parts": [
      {
        "question": "小立方体は全部で何個ですか。",
        "answer": "216",
        "explanation": "6×6×6＝216。",
        "hint": "各方向6個",
        "points": 5
      },
      {
        "question": "3面が塗られたものは何個ですか。",
        "answer": "8",
        "explanation": "頂点に1個ずつ。",
        "hint": "頂点",
        "points": 8
      },
      {
        "question": "2面が塗られたものは何個ですか。",
        "answer": "48",
        "explanation": "12辺それぞれ両端を除く4個。",
        "hint": "辺",
        "points": 10
      },
      {
        "question": "1面だけ塗られたものは何個ですか。",
        "answer": "96",
        "explanation": "6面それぞれ4×4個。",
        "hint": "面の内側",
        "points": 12
      },
      {
        "question": "塗られていないものを除いた小立方体の表面積の合計は何cm²ですか。",
        "answer": "912",
        "explanation": "内部は4³＝64個。残り152個の表面積は各6cm²、152×6＝912。",
        "hint": "各小立方体を別々に数える",
        "points": 15
      }
    ]
  },
  {
    "id": "O006",
    "title": "バスの追いつき",
    "category": "速さ",
    "difficulty": "発展",
    "minutes": 25,
    "question": "Aバスは午前8時に出発し時速36kmで走ります。Bバスは同じ道を8時20分に時速54kmで追います。Aは出発40分後から10分間停車します。",
    "diagram": "",
    "parts": [
      {
        "question": "8時20分の差は何kmですか。",
        "answer": "12",
        "explanation": "36×20÷60＝12。",
        "hint": "時間を時に",
        "points": 5
      },
      {
        "question": "両方走ると1分に何m差が縮まりますか。",
        "answer": "300",
        "explanation": "(54−36)×1000÷60＝300。",
        "hint": "速さの差",
        "points": 8
      },
      {
        "question": "8時40分の差は何kmですか。",
        "answer": "6",
        "explanation": "12−18×20÷60＝6。",
        "hint": "20分間縮まる",
        "points": 10
      },
      {
        "question": "Bが追いつくのは8時何分何秒ですか。8時からの秒数で答えてください。",
        "answer": "2800",
        "explanation": "停車中は毎分900m。6000÷900＝6分40秒。40分＋6分40秒＝2800秒。",
        "hint": "停車中のBの速さ",
        "points": 12
      },
      {
        "question": "9時のBとAの距離の差は何kmですか。",
        "answer": "6",
        "explanation": "Bは54×40÷60＝36km、Aは36×50÷60＝30km。差6km。",
        "hint": "それぞれの距離",
        "points": 15
      }
    ]
  },
  {
    "id": "O007",
    "title": "円と正方形",
    "category": "平面図形",
    "difficulty": "発展",
    "minutes": 25,
    "question": "1辺20cmの正方形の中に、4辺に接する円を描きます。円周率は3.14とします。",
    "diagram": "",
    "parts": [
      {
        "question": "円の半径は何cmですか。",
        "answer": "10",
        "explanation": "直径20÷2＝10。",
        "hint": "直径",
        "points": 5
      },
      {
        "question": "円の面積は何cm²ですか。",
        "answer": "314",
        "explanation": "10×10×3.14＝314。",
        "hint": "半径×半径×円周率",
        "points": 8
      },
      {
        "question": "正方形のうち円の外側の面積は何cm²ですか。",
        "answer": "86",
        "explanation": "400−314＝86。",
        "hint": "差",
        "points": 10
      },
      {
        "question": "円の中心と正方形の隣り合う2頂点を結んだ三角形の面積は何cm²ですか。",
        "answer": "100",
        "explanation": "底辺20、高さ10なので100。",
        "hint": "中心から辺まで",
        "points": 12
      },
      {
        "question": "その三角形のうち円の外側の面積は何cm²ですか。",
        "answer": "21.5",
        "explanation": "中心角90度の扇形は314÷4＝78.5。100−78.5＝21.5。",
        "hint": "扇形を引く",
        "points": 15
      }
    ]
  },
  {
    "id": "O008",
    "title": "食塩水の入れ替え",
    "category": "割合",
    "difficulty": "発展",
    "minutes": 25,
    "question": "8%の食塩水600gがあります。よく混ぜてから150g取り出し、同じ重さの水を加える操作を繰り返します。",
    "diagram": "",
    "parts": [
      {
        "question": "初めの食塩は何gですか。",
        "answer": "48",
        "explanation": "600×0.08＝48。",
        "hint": "濃度",
        "points": 5
      },
      {
        "question": "1回目に取り出す食塩は何gですか。",
        "answer": "12",
        "explanation": "150×0.08＝12。",
        "hint": "取り出す液の濃度",
        "points": 8
      },
      {
        "question": "1回後の濃度は何%ですか。",
        "answer": "6",
        "explanation": "(48−12)÷600×100＝6。",
        "hint": "全体は600g",
        "points": 10
      },
      {
        "question": "2回後の濃度は何%ですか。",
        "answer": "4.5",
        "explanation": "6×450÷600＝4.5。",
        "hint": "残る割合は3/4",
        "points": 12
      },
      {
        "question": "2回後に食塩だけを何g加えると10%になりますか。",
        "answer": "110/3",
        "explanation": "食塩27g。10%にするには加えた食塩の90%が不足分60−27＝33gに当たる。33÷0.9＝110/3。",
        "hint": "全体の重さも増える",
        "points": 15
      }
    ]
  },
  {
    "id": "O009",
    "title": "格子の道順",
    "category": "場合の数",
    "difficulty": "発展",
    "minutes": 25,
    "question": "東西4区画、南北3区画の格子で、南西のAから北東のBへ東または北に1区画ずつ進みます。PはAから東2、北1の交点です。",
    "diagram": "",
    "parts": [
      {
        "question": "最短経路の歩数は何歩ですか。",
        "answer": "7",
        "explanation": "4＋3＝7。",
        "hint": "東と北",
        "points": 5
      },
      {
        "question": "AからPへの経路は何通りですか。",
        "answer": "3",
        "explanation": "3歩のうち北1歩の位置は3通り。",
        "hint": "北の位置",
        "points": 8
      },
      {
        "question": "PからBは何通りですか。",
        "answer": "6",
        "explanation": "東2北2の並べ方は4×3÷2＝6。",
        "hint": "北2歩の位置",
        "points": 10
      },
      {
        "question": "Pを通る経路は何通りですか。",
        "answer": "18",
        "explanation": "3×6＝18。",
        "hint": "積",
        "points": 12
      },
      {
        "question": "Pを通らない経路は何通りですか。",
        "answer": "17",
        "explanation": "全体は7×6×5÷(3×2×1)＝35。35−18＝17。",
        "hint": "全体から引く",
        "points": 15
      }
    ]
  },
  {
    "id": "O010",
    "title": "階段状の積み木",
    "category": "立体図形",
    "difficulty": "発展",
    "minutes": 25,
    "question": "1辺1cmの立方体を、下から5×5、4×4、3×3、2×2、1×1個の正方形の層に積みます。各層は同じ角にそろえます。",
    "diagram": "",
    "parts": [
      {
        "question": "最下層は何個ですか。",
        "answer": "25",
        "explanation": "5×5＝25。",
        "hint": "正方形",
        "points": 5
      },
      {
        "question": "全部で何個ですか。",
        "answer": "55",
        "explanation": "25＋16＋9＋4＋1＝55。",
        "hint": "各層の和",
        "points": 8
      },
      {
        "question": "真上から見える面積は何cm²ですか。",
        "answer": "25",
        "explanation": "最下層の5×5と同じ。",
        "hint": "重なり",
        "points": 10
      },
      {
        "question": "正面から見える面積は何cm²ですか。",
        "answer": "15",
        "explanation": "5＋4＋3＋2＋1＝15。",
        "hint": "階段形",
        "points": 12
      },
      {
        "question": "底面を含む表面積は何cm²ですか。",
        "answer": "110",
        "explanation": "上下は各25、前後左右は各15。50＋60＝110。",
        "hint": "6方向から数える",
        "points": 15
      }
    ]
  },
  {
    "id": "O011",
    "title": "時計の針",
    "category": "速さ",
    "difficulty": "発展",
    "minutes": 25,
    "question": "正確な時計の長針と短針を考えます。午前3時ちょうどからの動きを調べます。",
    "diagram": "",
    "parts": [
      {
        "question": "長針は1分に何度進みますか。",
        "answer": "6",
        "explanation": "360÷60＝6。",
        "hint": "1周",
        "points": 5
      },
      {
        "question": "短針は1分に何度進みますか。",
        "answer": "0.5",
        "explanation": "30÷60＝0.5。",
        "hint": "1時間で30度",
        "points": 8
      },
      {
        "question": "3時10分の小さい方の角は何度ですか。",
        "answer": "35",
        "explanation": "短針95度、長針60度、差35度。",
        "hint": "両方動く",
        "points": 10
      },
      {
        "question": "最初に重なるのは3時から何分後ですか。",
        "answer": "180/11",
        "explanation": "90÷(6−0.5)＝180/11。",
        "hint": "追いつき",
        "points": 12
      },
      {
        "question": "次に直角になるのは3時から何分後ですか。",
        "answer": "360/11",
        "explanation": "初めの90度差から反対側の90度差まで180度縮める。180÷5.5＝360/11。",
        "hint": "長針が追い越す",
        "points": 15
      }
    ]
  },
  {
    "id": "O012",
    "title": "仕事の分担",
    "category": "仕事算",
    "difficulty": "発展",
    "minutes": 25,
    "question": "Aだけなら12日、Bだけなら18日で終わる仕事があります。仕事の速さは一定です。",
    "diagram": "",
    "parts": [
      {
        "question": "全体を36とするとAの1日の仕事量はいくつですか。",
        "answer": "3",
        "explanation": "36÷12＝3。",
        "hint": "全体36",
        "points": 5
      },
      {
        "question": "Bの1日の仕事量はいくつですか。",
        "answer": "2",
        "explanation": "36÷18＝2。",
        "hint": "同じ全体",
        "points": 8
      },
      {
        "question": "2人なら何日で終わりますか。",
        "answer": "7.2",
        "explanation": "36÷5＝7.2。",
        "hint": "合計の速さ",
        "points": 10
      },
      {
        "question": "Aが4日働いた後、Bだけならあと何日ですか。",
        "answer": "12",
        "explanation": "(36−12)÷2＝12。",
        "hint": "残り",
        "points": 12
      },
      {
        "question": "2人で始め、途中からAだけで働いて9日で終了しました。Bは何日働きましたか。",
        "answer": "4.5",
        "explanation": "Aの9日分27を引くとBの分9。9÷2＝4.5。",
        "hint": "Aは全期間",
        "points": 15
      }
    ]
  },
  {
    "id": "O013",
    "title": "数の階段",
    "category": "規則性",
    "difficulty": "発展",
    "minutes": 25,
    "question": "第1群は1、第2群は2,3、第3群は4,5,6というように、自然数を第n群にn個ずつ並べます。",
    "diagram": "",
    "parts": [
      {
        "question": "第5群の最後の数は何ですか。",
        "answer": "15",
        "explanation": "1＋2＋3＋4＋5＝15。",
        "hint": "群の個数の和",
        "points": 5
      },
      {
        "question": "第10群の最初の数は何ですか。",
        "answer": "46",
        "explanation": "9×10÷2＋1＝46。",
        "hint": "前群の最後",
        "points": 8
      },
      {
        "question": "100は第何群ですか。",
        "answer": "14",
        "explanation": "13群末91、14群末105。",
        "hint": "三角数",
        "points": 10
      },
      {
        "question": "100はその群の何番目ですか。",
        "answer": "9",
        "explanation": "100−91＝9。",
        "hint": "前群末との差",
        "points": 12
      },
      {
        "question": "第20群の数の合計はいくつですか。",
        "answer": "4010",
        "explanation": "191から210まで20個。 (191＋210)×20÷2＝4010。",
        "hint": "等差数列の和",
        "points": 15
      }
    ]
  },
  {
    "id": "O014",
    "title": "つるかめと料金",
    "category": "文章題",
    "difficulty": "発展",
    "minutes": 25,
    "question": "大人券800円、子ども券500円の入場券を合わせて40枚購入しました。合計は24800円でした。",
    "diagram": "",
    "parts": [
      {
        "question": "すべて子ども券なら何円ですか。",
        "answer": "20000",
        "explanation": "500×40＝20000。",
        "hint": "仮定",
        "points": 5
      },
      {
        "question": "実際との差は何円ですか。",
        "answer": "4800",
        "explanation": "24800−20000＝4800。",
        "hint": "差",
        "points": 8
      },
      {
        "question": "大人券は何枚ですか。",
        "answer": "16",
        "explanation": "4800÷300＝16。",
        "hint": "1枚の差",
        "points": 10
      },
      {
        "question": "子ども券は何枚ですか。",
        "answer": "24",
        "explanation": "40−16＝24。",
        "hint": "残り",
        "points": 12
      },
      {
        "question": "大人券を20%引き、子ども券を10%引きにすると合計何円ですか。",
        "answer": "21040",
        "explanation": "640×16＋450×24＝21040。",
        "hint": "それぞれ割引",
        "points": 15
      }
    ]
  },
  {
    "id": "O015",
    "title": "回転する長方形",
    "category": "平面図形",
    "difficulty": "発展",
    "minutes": 25,
    "question": "縦6cm、横8cmの長方形ABCD（Aは左上、Bは右上）をAを中心に90度回転させます。円周率3.14。",
    "diagram": "",
    "parts": [
      {
        "question": "対角線ACは10cmです。Bの回転半径は何cmですか。",
        "answer": "8",
        "explanation": "AB＝8。",
        "hint": "中心からの距離",
        "points": 5
      },
      {
        "question": "Dの回転半径は何cmですか。",
        "answer": "6",
        "explanation": "AD＝6。",
        "hint": "中心からの距離",
        "points": 8
      },
      {
        "question": "Bが描く弧の長さは何cmですか。",
        "answer": "12.56",
        "explanation": "2×8×3.14÷4＝12.56。",
        "hint": "4分の1周",
        "points": 10
      },
      {
        "question": "Cが描く弧の長さは何cmですか。",
        "answer": "15.7",
        "explanation": "2×10×3.14÷4＝15.7。",
        "hint": "対角線",
        "points": 12
      },
      {
        "question": "Cの軌跡とAを結ぶ2本の半径で囲む面積からBの同様の面積を引くと何cm²ですか。",
        "answer": "28.26",
        "explanation": "(100−64)×3.14÷4＝28.26。",
        "hint": "扇形の差",
        "points": 15
      }
    ]
  },
  {
    "id": "O016",
    "title": "特別な計算規則",
    "category": "規則性",
    "difficulty": "発展",
    "minutes": 25,
    "question": "2つの数a,bについて、a★bは「aの2倍とbの3倍の和」と定めます。",
    "diagram": "",
    "parts": [
      {
        "question": "4★5はいくつですか。",
        "answer": "23",
        "explanation": "8＋15＝23。",
        "hint": "定義通り",
        "points": 5
      },
      {
        "question": "5★4はいくつですか。",
        "answer": "22",
        "explanation": "10＋12＝22。",
        "hint": "順番に注意",
        "points": 8
      },
      {
        "question": "□★6＝40の□はいくつですか。",
        "answer": "11",
        "explanation": "(40−18)÷2＝11。",
        "hint": "逆算",
        "points": 10
      },
      {
        "question": "(2★3)★4はいくつですか。",
        "answer": "38",
        "explanation": "2★3＝13、13★4＝26＋12＝38。",
        "hint": "内側から",
        "points": 12
      },
      {
        "question": "a★b＝b★aで、a＋b＝30ならaはいくつですか。",
        "answer": "15",
        "explanation": "両式で共通の2a＋2bを除くとb＝a。30÷2＝15。",
        "hint": "共通部分を引く",
        "points": 15
      }
    ]
  },
  {
    "id": "O017",
    "title": "交互に開く蛇口",
    "category": "仕事算",
    "difficulty": "発展",
    "minutes": 25,
    "question": "空の水そうをAだけなら12分、Bだけなら18分で満たします。Aを2分、Bを3分の順に交互に開き、満水になれば止めます。",
    "diagram": "",
    "parts": [
      {
        "question": "全体を36とするとAの毎分の量はいくつですか。",
        "answer": "3",
        "explanation": "36÷12＝3。",
        "hint": "全体36",
        "points": 5
      },
      {
        "question": "Bの毎分の量はいくつですか。",
        "answer": "2",
        "explanation": "36÷18＝2。",
        "hint": "同じ全体",
        "points": 8
      },
      {
        "question": "最初の5分で入る量はいくつですか。",
        "answer": "12",
        "explanation": "3×2＋2×3＝12。",
        "hint": "合計",
        "points": 10
      },
      {
        "question": "満水になるのは何分後ですか。",
        "answer": "15",
        "explanation": "36÷12＝3周期。5×3＝15。",
        "hint": "周期",
        "points": 12
      },
      {
        "question": "Bを先に3分、Aを次に2分とし、容量が全体36のうち30に変わると何分後に満水ですか。",
        "answer": "13",
        "explanation": "10分で24、次のB3分で6。計13分。",
        "hint": "残り6",
        "points": 15
      }
    ]
  },
  {
    "id": "O018",
    "title": "石取りゲーム",
    "category": "場合の数",
    "difficulty": "発展",
    "minutes": 25,
    "question": "石を2人で交互に1〜3個取り、最後の石を取った人が勝ちです。両者は勝つために最善の手を選びます。",
    "diagram": "",
    "parts": [
      {
        "question": "石が3個なら先手は何個取ればすぐ勝てますか。",
        "answer": "3",
        "explanation": "全部取る。",
        "hint": "最後を取る",
        "points": 5
      },
      {
        "question": "石が4個なら勝てるのは先手1、後手2のどちらですか。",
        "answer": "2",
        "explanation": "先手が何個取っても後手が残りを取れる。",
        "hint": "残り1〜3",
        "points": 8
      },
      {
        "question": "石が7個なら先手は最初に何個取るべきですか。",
        "answer": "3",
        "explanation": "4個残す。",
        "hint": "負ける数を渡す",
        "points": 10
      },
      {
        "question": "石が1〜30個のうち先手必敗の個数は何種類ですか。",
        "answer": "7",
        "explanation": "4の倍数4,8,…,28の7種類。",
        "hint": "4個ずつの組",
        "points": 12
      },
      {
        "question": "石が53個で先手が最善手を続けると、先手は何回目の自分の手で勝ちますか。",
        "answer": "14",
        "explanation": "最初に1個、残り52個。以後相手と合わせ4個ずつ取るので13回追加、計14回。",
        "hint": "4の組",
        "points": 15
      }
    ]
  },
  {
    "id": "O019",
    "title": "正多角形の角",
    "category": "平面図形",
    "difficulty": "発展",
    "minutes": 25,
    "question": "正多角形の頂点から中心へ線を引いて、合同な二等辺三角形に分けます。",
    "diagram": "",
    "parts": [
      {
        "question": "正六角形の中心角は何度ですか。",
        "answer": "60",
        "explanation": "360÷6＝60。",
        "hint": "一周",
        "points": 5
      },
      {
        "question": "正八角形の中心角は何度ですか。",
        "answer": "45",
        "explanation": "360÷8＝45。",
        "hint": "同様",
        "points": 8
      },
      {
        "question": "正八角形の内角は何度ですか。",
        "answer": "135",
        "explanation": "180−45＝135。",
        "hint": "二等辺三角形の底角2つ",
        "points": 10
      },
      {
        "question": "内角150度の正多角形は何角形ですか。",
        "answer": "12",
        "explanation": "中心角30度、360÷30＝12。",
        "hint": "180から引く",
        "points": 12
      },
      {
        "question": "正十二角形の対角線は全部で何本ですか。",
        "answer": "54",
        "explanation": "各頂点から自分と両隣を除く9本。12×9÷2＝54。",
        "hint": "重複を除く",
        "points": 15
      }
    ]
  },
  {
    "id": "O020",
    "title": "直方体の展開図",
    "category": "立体図形",
    "difficulty": "発展",
    "minutes": 25,
    "question": "縦3cm、横4cm、高さ12cmの直方体があります。表面を通って向かい合う頂点を結ぶ道を考えます。",
    "diagram": "",
    "parts": [
      {
        "question": "体積は何cm³ですか。",
        "answer": "144",
        "explanation": "3×4×12＝144。",
        "hint": "3辺の積",
        "points": 5
      },
      {
        "question": "表面積は何cm²ですか。",
        "answer": "192",
        "explanation": "2×(12＋48＋36)＝192。",
        "hint": "3種類の面",
        "points": 8
      },
      {
        "question": "縦3と横4の面の対角線は5cmです。この面の面積は何cm²ですか。",
        "answer": "12",
        "explanation": "3×4＝12。",
        "hint": "縦横",
        "points": 10
      },
      {
        "question": "3cmと4cmの幅をつなげて高さ12cmの長方形に展開すると面積は何cm²ですか。",
        "answer": "84",
        "explanation": "(3＋4)×12＝84。",
        "hint": "幅を足す",
        "points": 12
      },
      {
        "question": "3種類の展開でできる長方形の辺は7と12、15と4、16と3です。最短の対角線の長さの2乗は何ですか。",
        "answer": "193",
        "explanation": "各長方形の対角線の2乗は193、241、265。最小193。これは正方形の面積として比較できる。",
        "hint": "各辺を一辺とする正方形の面積を足す",
        "points": 15
      }
    ]
  }
];
