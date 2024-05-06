// site_interactions.js

// 切换显示'关于'页面的额外内容
function toggleAboutContent() {
    var content = document.getElementById('about-extra-content');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';  // 如果内容是隐藏的，显示它
    } else {
        content.style.display = 'none';  // 如果内容是显示的，隐藏它
    }
}
