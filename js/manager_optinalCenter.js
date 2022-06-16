/* --------------------------------------------获取对象 --------------------------------------------*/
const firstNavs = document.querySelectorAll('.first'); //一级导航栏
const secondNavs = document.querySelectorAll('.second'); //二级导航栏
const selectSecondNavs = document.querySelector('.second_active'); //选中的二级导航栏

/* -------------------------------------------- 函数声明 --------------------------------------------*/
// 根据data-id切换页面
function loadInner(sId) {
    var sId = window.location.hash;
    var pathn, i;
    switch (sId) {
        case "#addBook":
            pathn = "addBook.html";
            i = 0;
            break;
        case "#editBook":
            pathn = "editBook.html";
            i = 1;
            break;
        case '#feedback':
            pathn = 'feedback.html';
            i = 2;
            break;
        case '#editViolation':
            pathn = 'editViolation.html';
            i = 3;
            break;
        case '#announcement':
            pathn = 'announcement.html';
            i = 4;
            break;
        case '#editAnnouncement':
            pathn = 'editAnnouncement.html';
            i = 5;
            break;
            // case '#editViolation':
            //     pathn = 'editViolation.html';
            //     i = 3;
            //     break;
        default:
            pathn = "addBook.html";
            i = 0;
            break;
    }
    $("#content").load(pathn); //加载相对应的内容
}

/* -------------------------------------------- 事件注册 --------------------------------------------*/


/* -------------------------------------------- 初始化 --------------------------------------------*/
function init() {
    // 一级导航栏 点击事件注册
    firstNavs.forEach(function (item) {
        // 对所有的一级导航栏增加click事件
        item.addEventListener('click', function () {
            // 清除所有的效果
            firstNavs.forEach(function (i) {
                i.className = 'first';
                i.nextElementSibling.style.display = 'none';
            })

            // 将当前点击的加上active
            // console.log(this.className);
            this.className = 'first first_active';
            item.nextElementSibling.style.display = 'block';
        });
    })

    //二级导航栏 点击事件注册
    secondNavs.forEach(function (item) {
        // 二级导航栏的点击事件
        item.addEventListener('click', function () {
            // 清空所有的高亮效果
            let expandSecondNavs = document.querySelector('.first_active').nextElementSibling.children;
            let arr = Array.from(expandSecondNavs);
            arr.forEach(function (i) {
                i.className = 'second';
            })

            // 设置自己的高亮效果
            this.className = 'second second_active';

            // 跳转页面
            var sId = $(this).data("id"); //获取data-id的值
            window.location.hash = sId; //设置锚点
            loadInner(sId);
        })
    })

    // console.log(selectSecondNavs);
    // 点击二级导航栏一下
    selectSecondNavs.click();
}
init()