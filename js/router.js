function Router() {
    this.routes = {};
    this.currentUrl = '';
}

Router.prototype.route = function(path, callback) {
    this.routes[path] = callback || function() {};
    //给不同的hash设置不同的回调函数
};
Router.prototype.refresh = function() {
    // 路由清單
    let routerList = ['', 'home', 'match', 'promote', 'game', 'forum', 'member','aboutMe','ann','suggest'];

    for (let i = 0; i < 99; i++) {
        routerList.push(`latest/news?list=${i}`)
        routerList.push(`home/news?list=${i}`)
        routerList.push(`lottery/news?list=${i}`)
        routerList.push(`news/news?list=${i}`)
        routerList.push(`resource/news?list=${i}`)
    }

    // console.log(location.hash.slice(1)); 
    //获取到相应的hash值
    let index = routerList.indexOf(location.hash.slice(2))
    if (index == -1) {
        this.currentUrl = '/home'
        location.href = "#/home"
    } else {
        this.currentUrl = location.hash.slice(1) || '/home';
    }
    // this.currentUrl = location.hash.slice(1) || '/home'; 
    //如果存在hash值则获取到，否则设置hash值为/
    // console.log(this.currentUrl);
    if (this.currentUrl && this.currentUrl != '/') {
        this.routes[this.currentUrl](); //根据当前的hash值来调用相对应的回调函数
    }

};
Router.prototype.init = function() {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}

//给window对象挂载属性
window.Router = new Router();
window.Router.init();

// 路由呼叫路徑
Router.route('/home', function() {
    mainInclude('page/home.html');
    $('#ftMenu li').removeClass('on')
});
Router.route('/match', function() {
    mainInclude('page/match.html');
    menuList_on('match');
});
Router.route('/promote', function() {
    mainInclude('page/promote.html');
    menuList_on('promote');
});
Router.route('/game', function() {
    mainInclude('page/game.html');
    menuList_on('game');
});
Router.route('/forum', function() {
    mainInclude('page/forum.html');
    menuList_on('forum');
});
Router.route('/member', function() {
    mainInclude('page/member.html');
    menuList_on('member');
});
Router.route('/aboutMe', function() {
    mainInclude('page/aboutMe.html');
    $('#ftMenu li').removeClass('on')
});
Router.route('/ann', function() {
    mainInclude('page/ann.html');
    $('#ftMenu li').removeClass('on')
});
Router.route('/suggest', function() {
    mainInclude('page/suggest.html');
    $('#ftMenu li').removeClass('on')
});

// api新聞
for (let i = 0; i < 99; i++){
    // 最新消息
    Router.route(`/latest/news?list=${i}`, function() {  
        newsHref('latest',i);
    });
    // 首頁
    Router.route(`/home/news?list=${i}`, function() {
        newsHref('home',i);       
    });
    // 投注建議
     Router.route(`/lottery/news?list=${i}`, function() {
        newsHref('lottery',i);
    });
    // 新聞
     Router.route(`/news/news?list=${i}`, function() {
        newsHref('news',i);
    });
    // 資源
    Router.route(`/resource/news?list=${i}`, function() {
        newsHref('resource',i);
    });
}

function newsHref(sort,num) {
    $('#ftMenu li').removeClass('on');
    mainInclude('page/newsCnt.html');
    sessionStorage.setItem('news_sort',sort);
    sessionStorage.setItem('news_num',num);
}

function mainInclude(src) {
    window.scrollTo({ top: 0 });
    $.ajax({
        url: src,
        success: function(html) {
            $("#content").html(html);
        },
        // 發送前
        beforeSend: function() {},
        // 完成
        complete: function() {},
        error: function(error) {
            location.href = "#/home"
        }
    });
}

function menuList_on(data) {
    let array = [];
    let list = document.querySelectorAll('#ftMenu li')
    list.forEach(function(item){
        array.push(item.getAttribute('data-name')) 
    })
    $('#ftMenu li').removeClass('on')
    $(`#ftMenu li:eq(${array.indexOf(data)})`).addClass('on');
}
