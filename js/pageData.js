// 主架構 - 下方menu
let ftMenu = [{
        data: 'match',
        href: "#/match",
        img: "images/icon/match.png",
        title: "賽事",
        switch: true
    },
    {
        data: 'promote',
        href: "#/promote",
        img: "images/icon/promote.png",
        title: "廣告",
        switch: true
    },
    {
        data: 'game',
        href: "#/game",
        img: "images/icon/game.png",
        title: "play now",
        switch: true
    },
    {
        data: 'forum',
        href: "#/forum",
        img: "images/icon/forum.png",
        title: "討論區",
        switch: true
    },
    {
        data: 'member',
        href: "#/member",
        img: "images/icon/about.png",
        title: "我的",
        switch: true
    },
]

// 主架構 - 忘記密碼選擇
let forgetList = [
    '電子信箱','手機'
]


// home - 彩票公司推薦
let lottoryLink = {
    main: [{
            href: "https://www.awin77g.com",
            img: "images/bank/tuDienXoSo.png",
            title: 'Tu Dien Xo So',
            txt: "Từ điển xổ số",
            hot: true
        },
        {
            href: "https://www.awin77g.com",
            img: "images/bank/hoChiMinh.png",
            title: 'Ho Chi Minh',
            txt: "CÔNG TY TNHH MTV SỔ XỐ KIẾN THIẾT TP.HỒ CHÍ MINH",
            hot: false
        },
        {
            href: "http://xsktmiennam.vn",
            img: "images/bank/ichNuocLoiNha.png",
            title: 'Ich Nuoc Loi Nha',
            txt: "XỐ SỔ KIẾN THIẾT KHU VỰC MIỀN NAM ÍCH NƯỚC-LỢI NHÀ",
            hot: false
        },
        {
            href: "http://xosophutho.vn",
            img: "images/bank/xoSoKienThiet.png",
            title: 'Xo So Kien Thiet',
            txt: "ỦY BAN NHÂN DÂN TỈNH PHÚ THỌ CÔNG TY TNHH MTV XỔ SỐ KIẾN THIẾT PHÚ THỌ",
            hot: false
        },
        {
            href: "https://xsktdongthap.vn",
            img: "images/bank/dongThap.png",
            title: 'Dong Thap',
            txt: "CÔNG TY TNHH MỘT THÀNH VIÊN XỔ SỐ KIẾN THIẾT TỈNH ĐỒNG",
            hot: false
        },

    ],
    minor: [{
            herf: "http://www.xosodalat.com.vn/",
            txt: "ĐÀ LẠT"
        },
        {
            herf: "https://www.xskthcm.com/",
            txt: "(TP)Hồ Chí Minh"
        },
        {
            herf: "http://www.xosocamau.com/",
            txt: "Cà Mau"
        },
        {
            herf: "http://xosobariavungtau.com.vn/",
            txt: "Vũng Tàu"
        },
        {
            herf: "https://xosobentre.com.vn/",
            txt: "Bạc Liêu"
        },
        {
            herf: "http://xosodongnai.com.vn/",
            txt: "Đồng Nai"
        },
        {
            herf: "http://xsktcantho.com.vn/",
            txt: "Cần Thơ"
        },
        {
            herf: "http://xsktsoctrang.vn/",
            txt: "Sóc Trăng"
        },
        {
            herf: "https://xosotayninh.com.vn/trang-chu",
            txt: "Tây Ninh"
        },
        {
            herf: "http://www.xsktangiang.com.vn/",
            txt: "An Giang"
        },
        {
            herf: "https://www.xosobinhthuan.com.vn/",
            txt: "Bình Thuận"
        },
        {
            herf: "https://xosovinhlong.com.vn/",
            txt: "Vĩnh Long"
        },
        {
            herf: "https://www.xosobinhduong.com.vn/",
            txt: "Bình Dương"
        },
        {
            herf: "http://xosotravinh.vn/trang-chu",
            txt: "Trà Vinh"
        },
        {
            herf: "http://xosolongan.vn/trang-chu",
            txt: "Quốc Dân"
        },
        {
            herf: "https://lienvietpostbank.com.vn/",
            txt: "Long An"
        },
        {
            herf: "https://xosobinhphuoc.vn/",
            txt: "Bình Phước"
        },
        {
            herf: "https://xskthaugiang.vn/",
            txt: "Hậu Giang"
        },
        {
            herf: "http://www.xskttg.com.vn/",
            txt: "Tiền Giang"
        },
        {
            herf: "http://xosokiengiang.vn/",
            txt: "Kiên Giang"
        },
        {
            herf: "https://xsktdongthap.vn/",
            txt: "Đồng Tháp"
        },
        {
            herf: "http://xosogialai.com.vn/",
            txt: "Gia Lai"
        },
        {
            herf: "http://xosogialai.com.vn/",
            txt: "Gia Lai"
        },
        {
            herf: "http://xsktquangnam.vn/",
            txt: "Quảng Nam"
        },
        {
            herf: "http://xosophuyen.vn/",
            txt: "Phú Yên"
        },
        {
            herf: "http://xosoquangngai.com.vn/",
            txt: "Quảng Ngãi"
        },
        {
            herf: "http://www.xosoquangtri.com.vn/",
            txt: "Quảng Trị"
        },
        {
            herf: "http://www.xosokhanhhoa.com.vn/",
            txt: "Khánh Hòa"
        },
        {
            herf: "http://xsktdaklak.vn/",
            txt: "Đắc Lắc"
        },
        {
            herf: "http://xosohue.com.vn/",
            txt: "Thừa Thiên Huế"
        },
        {
            herf: "http://xosobinhdinh.com.vn/",
            txt: "Bình Định"
        },
        {
            herf: "http://xosoquangbinh.vn/",
            txt: "Quảng Bình"
        },
        {
            herf: "http://xosoninhthuan.com.vn/",
            txt: "Ninh Thuận"
        },
        {
            herf: "http://www.xosokontum.vn/",
            txt: "Kon Tum"
        },
        {
            herf: "http://www.xsktdanang.com/",
            txt: "Đà Nẵng"
        },
        {
            herf: "http://xskt.daknong.gov.vn/",
            txt: "Đắk Nông"
        },
        {
            herf: "http://xosomb.com.vn/",
            txt: "Hà Nội"
        },
    ]
}

// home - 新聞選擇menu
let newsMenu = [
    { title: '最新消息', data: 'latest', switch: true },
    { title: '首頁', data: 'home', switch: true },
    { title: '投注建議', data: 'lottery', switch: true },
    { title: '新聞', data: 'news', switch: true },
    { title: '足球轉播', data: 'broadcast', switch: true },
    { title: '資源', data: 'resource', switch: true },
]

// game - 遊戲清單
let gameList = [
    { img: 'images/game/gameImg_01.png', title: 'Great Ocean', hot: true, new: false },
    { img: 'images/game/gameImg_02.png', title: '5 Dragons ', hot: true, new: true },
    { img: 'images/game/gameImg_03.png', title: '88 Fortunes ', hot: false, new: true },
    { img: 'images/game/gameImg_04.png', title: 'King of Seven ', hot: false, new: false },
    { img: 'images/game/gameImg_05.png', title: '8 Dragons ', hot: false, new: false },
    { img: 'images/game/gameImg_06.png', title: 'Lucky Leprechaun ', hot: false, new: false },
]

let obviousList = [
    { name: '神準小豪', txt: 'MLB 國際盤近15日52過40' },
    { name: '八豆妖', txt: 'NBA 國際盤近26日44過32' },
    { name: '阿諾瑪', txt: 'MLB 國際盤近21日45過32MLB' },
    { name: '發大財', txt: 'NBA 國際盤近28日50過50' },
]

// 討論區 - 篩選清單
let filterList = {
    match: ['英甲', '英超', '世界盃', '歐洲杯', '法甲', '其他賽事'],
    sort: ['全部', '分析', '感謝', 'Live', '亮單', '新聞'],
    array: ['最新回覆', '最新文章'],
}

// 討論區 - 列表
let forumList = {
    main:['主題','作者'],
    list:[
        {
            tag: '英超',
            title: '6/28 歐洲杯 gogo gogo gogo gogo',
            avatar:'images/avatar/avatar_01.png',
            name: '彭雪兒',
            date: '06-27',
            time: '04:23'
        },
        {
            tag: '閒聊',
            title: '再也看不到這樣的西班牙國家德比了',
            avatar:'images/avatar/avatar_02.png',
            name: '丁一飛',
            date: '06-08',
            time: '22:10'
        },
        {
            tag: '閒聊',
            title: '巔峰狀態的3羅。大羅小羅C羅巔峰狀態最強是否是C羅?',
            avatar:'images/avatar/avatar_03.png',
            name: '全明星庫茲馬',
            date: '06-05',
            time: '10:23'
        },
        {
            tag: '閒聊',
            title: '如果你是國足主教練，你打算怎麼做',
            avatar:'images/avatar/avatar_04.png',
            name: '宋寶寶',
            date: '06-05',
            time: '04:23'
        },
        {
            tag: '英超',
            title: '6/28 歐洲杯 gogo gogo gogo gogo',
            avatar:'images/avatar/avatar_01.png',
            name: '彭雪兒',
            date: '06-27',
            time: '04:23'
        },
        {
            tag: '閒聊',
            title: '再也看不到這樣的西班牙國家德比了',
            avatar:'images/avatar/avatar_02.png',
            name: '丁一飛',
            date: '06-08',
            time: '22:10'
        },
        {
            tag: '閒聊',
            title: '巔峰狀態的3羅。大羅小羅C羅巔峰狀態最強是否是C羅?',
            avatar:'images/avatar/avatar_03.png',
            name: '天才小狗',
            date: '06-05',
            time: '10:23'
        },
        {
            tag: '閒聊',
            title: '如果你是國足主教練，你打算怎麼做',
            avatar:'images/avatar/avatar_04.png',
            name: '宋寶寶',
            date: '06-05',
            time: '04:23'
        },
    ]
}

// 我的 - 列表
let aboutList = [
    {img:'images/icon/my_level.png',title:'我的等級',key:'level'},
    {img:'images/icon/my_love.png',title:'我的最愛',key:'love'},
    {img:'images/icon/my_record.png',title:'帳戶紀錄',key:'record'},
    {img:'images/icon/my_share.png',title:'分享APP',key:'app'},
    {img:'images/icon/my_opinion.png',title:'意見反饋',key:'suggest'},
    {img:'images/icon/my_member.png',title:'個人資料',key:'mbrMsg'},
]

// 意見反饋 - 選擇
let suggestList = ['我要留言','我要建議','我要投訴']

// 個人資料 - 選擇
let mbrSel = [
    {title:'個人資料', switch: true},
    {title:'修改密碼', switch: true}
]