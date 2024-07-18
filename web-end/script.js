function goToPage(pageNumber)
{
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => 
    {
        page.style.display = 'none';
    });
    const cover = document.querySelector('.cover');
    if (pageNumber === 0)
    {
        cover.style.display = 'block';
    } 
    else 
    {
        cover.style.display = 'none';
        document.getElementById(`page-${pageNumber}`).style.display = 'block';
    }
}

// 初期状態で表紙を表示するための設定
document.addEventListener('DOMContentLoaded', () =>
{
    document.querySelector('.cover').style.display = 'block';
});
