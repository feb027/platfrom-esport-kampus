// News Detail Page functionality
class NewsDetail {
    constructor() {
        this.newsId = this.getNewsIdFromUrl();
        this.newsData = null;
        this.init();
    }

    getNewsIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id');
    }

    init() {
        // Get all news data
        const allNews = [...homeData.featuredNews, ...homeData.recentNews];
        
        // Find the current news
        this.newsData = allNews.find(news => news.id === this.newsId);
        
        if (this.newsData) {
            this.displayNewsDetail();
            this.displayRelatedNews(allNews);
            document.title = `${this.newsData.title} | Unsil E-Sports`;
        } else {
            this.displayError();
        }
    }

    displayNewsDetail() {
        const detailContent = document.getElementById('news-detail-content');
        const date = new Date(this.newsData.date);
        const formattedDate = date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        const currentUrl = window.location.href;
        const shareText = `${this.newsData.title} - Unsil E-Sports`;

        detailContent.innerHTML = `
            <div class="news-header">
                <img src="${this.newsData.image}" alt="${this.newsData.title}">
                <span class="news-category">${this.newsData.category}</span>
            </div>
            <div class="news-body">
                <h1 class="news-title">${this.newsData.title}</h1>
                <div class="news-meta">
                    <span><i class="far fa-calendar"></i> ${formattedDate}</span>
                    <span><i class="far fa-user"></i> Admin</span>
                    <span><i class="far fa-folder"></i> ${this.newsData.category}</span>
                </div>
                <div class="news-content">
                    ${this.newsData.content.map(paragraph => `<p>${paragraph}</p>`).join('')}
                </div>
                <div class="social-share">
                    <h3>Bagikan Berita Ini</h3>
                    <div class="social-buttons">
                        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}" 
                           target="_blank" 
                           class="social-button facebook">
                            <i class="fab fa-facebook-f"></i>
                            Facebook
                        </a>
                        <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}" 
                           target="_blank" 
                           class="social-button twitter">
                            <i class="fab fa-twitter"></i>
                            Twitter
                        </a>
                        <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}" 
                           target="_blank" 
                           class="social-button whatsapp">
                            <i class="fab fa-whatsapp"></i>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        `;

        // Add smooth scroll to top when page loads
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    displayRelatedNews(allNews) {
        const relatedNewsGrid = document.getElementById('related-news-grid');
        
        // Get related news (same category, excluding current news)
        const relatedNews = allNews
            .filter(news => news.category === this.newsData.category && news.id !== this.newsId)
            .slice(0, 3); // Get up to 3 related news

        if (relatedNews.length > 0) {
            const relatedNewsHTML = relatedNews.map(news => {
                const date = new Date(news.date);
                const formattedDate = date.toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });

                return `
                    <div class="related-news-card">
                        <div class="related-news-image">
                            <img src="${news.image}" alt="${news.title}" loading="lazy">
                        </div>
                        <div class="related-news-content">
                            <h3>${news.title}</h3>
                            <div class="news-meta">
                                <span><i class="far fa-calendar"></i> ${formattedDate}</span>
                            </div>
                            <a href="news-detail.html?id=${news.id}" class="read-more">Baca Selengkapnya</a>
                        </div>
                    </div>
                `;
            }).join('');

            relatedNewsGrid.innerHTML = relatedNewsHTML;
        } else {
            document.querySelector('.related-news').style.display = 'none';
        }
    }

    displayError() {
        const detailContent = document.getElementById('news-detail-content');
        detailContent.innerHTML = `
            <div class="news-body">
                <h1 class="news-title">Berita Tidak Ditemukan</h1>
                <p>Maaf, berita yang Anda cari tidak ditemukan.</p>
                <a href="index.html" class="read-more">Kembali ke Beranda</a>
            </div>
        `;
        document.querySelector('.related-news').style.display = 'none';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NewsDetail();
}); 