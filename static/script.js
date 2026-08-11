document.addEventListener('DOMContentLoaded', function () {
    const logs = Array.from(document.querySelectorAll('.logs-list .log-entry'));
    const prevButton = document.querySelector('.pagination-button.prev');
    const nextButton = document.querySelector('.pagination-button.next');
    const pagesContainer = document.querySelector('.pagination-pages');
    const pageSize = 2;
    let currentPage = 1;
    const pageCount = Math.ceil(logs.length / pageSize);

    function renderPage(page) {
        currentPage = page;
        const start = (page - 1) * pageSize;
        const end = start + pageSize;

        logs.forEach((log, index) => {
        log.style.display = index >= start && index < end ? '' : 'none';
        });

        prevButton.disabled = page === 1;
        nextButton.disabled = page === pageCount;
        pagesContainer.textContent = `Page ${page} / ${pageCount}`;
    }

    prevButton.addEventListener('click', function () {
        if (currentPage > 1) {
        renderPage(currentPage - 1);
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentPage < pageCount) {
        renderPage(currentPage + 1);
        }
    });

    renderPage(1);
    });