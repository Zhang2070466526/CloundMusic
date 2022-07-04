// 当点击时，切换效果
$('.teaser').click(function(){
    // 切换，如果不存在则添加CSS类，如果已设置，则删除
    $('.info,.teaser').toggleClass('active')
})