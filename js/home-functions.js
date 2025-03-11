/**
 * Home Page Functions
 * 
 * This file contains functions to populate and manage the home page
 * using data from home-data.js
 */

// Wait for document and data to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the home page
    initHomePage();
});

/**
 * Main initialization function
 */
function initHomePage() {
    // Populate main content sections
    populateFeaturedNews();
    populateRecentNews();
    populateUpcomingMatches();
    populateFeaturedTournaments();
}

/**
 * Format a date as readable format
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

/**
 * Populate featured news slider
 */
function populateFeaturedNews() {
    const newsSlider = document.getElementById('featured-news-slider');
    if (!newsSlider) return;
    
    // Clear existing content
    newsSlider.innerHTML = '';
    
    // Add news items
    homeData.featuredNews.forEach((newsItem, index) => {
        const slideItem = document.createElement('div');
        slideItem.className = 'news-slide' + (index === 0 ? ' active' : '');
        
        slideItem.innerHTML = `
            <div class="news-image">
                <img src="${newsItem.image}" alt="${newsItem.title}">
                <div class="news-category">${newsItem.category}</div>
            </div>
            <div class="news-content">
                <h3>${newsItem.title}</h3>
                <p>${newsItem.excerpt}</p>
                <div class="news-meta">
                    <span class="news-date">${formatDate(newsItem.date)}</span>
                </div>
                <a href="${newsItem.link}" class="read-more">Baca Selengkapnya</a>
            </div>
        `;
        
        newsSlider.appendChild(slideItem);
    });
    
    // Add navigation dots
    const newsDotsContainer = document.getElementById('news-dots');
    if (newsDotsContainer) {
        newsDotsContainer.innerHTML = '';
        
        homeData.featuredNews.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'dot' + (index === 0 ? ' active' : '');
            dot.setAttribute('data-index', index);
            
            dot.addEventListener('click', function() {
                showSlide(parseInt(this.getAttribute('data-index')));
            });
            
            newsDotsContainer.appendChild(dot);
        });
    }
    
    // Setup automatic slider (if needed)
    setupNewsSlider();
}

/**
 * Setup automatic news slider
 */
function setupNewsSlider() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.news-slide');
    const dots = document.querySelectorAll('.news-dots .dot');
    
    if (slides.length === 0) return;
    
    // Auto slide functionality
    setInterval(() => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }, 5000);
    
    // Make showSlide function accessible globally
    window.showSlide = function(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    };
}

/**
 * Populate recent news section
 */
function populateRecentNews() {
    const recentNewsGrid = document.getElementById('recent-news-grid');
    if (!recentNewsGrid) return;
    
    // Clear existing content
    recentNewsGrid.innerHTML = '';
    
    // Add recent news items
    homeData.recentNews.forEach(newsItem => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        
        newsCard.innerHTML = `
            <div class="news-card-image">
                <img src="${newsItem.image}" alt="${newsItem.title}">
                <div class="news-category">${newsItem.category}</div>
            </div>
            <div class="news-card-content">
                <h3><a href="${newsItem.link}">${newsItem.title}</a></h3>
                <p>${newsItem.excerpt}</p>
                <div class="news-meta">
                    <span class="news-date">${formatDate(newsItem.date)}</span>
                </div>
            </div>
        `;
        
        recentNewsGrid.appendChild(newsCard);
    });
}

/**
 * Populate upcoming matches section
 */
function populateUpcomingMatches() {
    const matchesContainer = document.getElementById('upcoming-matches');
    if (!matchesContainer) return;
    
    // Clear existing content
    matchesContainer.innerHTML = '';
    
    // Add match items
    homeData.upcomingMatches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        matchCard.setAttribute('data-game', match.game);
        
        // Format date
        const matchDate = new Date(match.date);
        const formattedDate = formatDate(match.date);
        
        matchCard.innerHTML = `
            <div class="match-header">
                <div class="match-tournament">
                    <span>${match.tournament}</span>
                </div>
                <div class="match-game">
                    <span>${match.gameName}</span>
                </div>
            </div>
            <div class="match-teams">
                <div class="team team-left">
                    <div class="team-logo">
                        <img src="${match.teams.team1.logo}" alt="${match.teams.team1.name}">
                    </div>
                    <div class="team-name">
                        <h4>${match.teams.team1.name}</h4>
                        <p>${match.teams.team1.faculty}</p>
                    </div>
                </div>
                <div class="match-time">
                    <div class="match-date">${formattedDate}</div>
                    <div class="match-vs">VS</div>
                    <div class="match-hour">${match.time} WIB</div>
                </div>
                <div class="team team-right">
                    <div class="team-name">
                        <h4>${match.teams.team2.name}</h4>
                        <p>${match.teams.team2.faculty}</p>
                    </div>
                    <div class="team-logo">
                        <img src="${match.teams.team2.logo}" alt="${match.teams.team2.name}">
                    </div>
                </div>
            </div>
            <div class="match-footer">
                <div class="match-info">
                    <span><i class="fas fa-map-marker-alt"></i> ${match.location}</span>
                </div>
                <div class="match-actions">
                    <a href="${match.streaming}" class="stream-btn">
                        <i class="fas fa-play-circle"></i> Live Stream
                    </a>
                </div>
            </div>
        `;
        
        matchesContainer.appendChild(matchCard);
    });
}

/**
 * Populate featured tournaments section
 */
function populateFeaturedTournaments() {
    const tournamentsGrid = document.getElementById('tournaments-grid');
    if (!tournamentsGrid) return;
    
    // Clear existing content
    tournamentsGrid.innerHTML = '';
    
    // Add tournament items
    homeData.tournaments.forEach(tournament => {
        const tournamentCard = document.createElement('div');
        tournamentCard.className = 'tournament-card';
        tournamentCard.setAttribute('data-game', tournament.game);
        
        // Format dates
        const registrationEndDate = formatDate(tournament.registrationEnd);
        const startDate = formatDate(tournament.startDate);
        const endDate = formatDate(tournament.endDate);
        
        // Create status badge based on tournament status
        let statusBadge = '';
        if (tournament.status === 'registration') {
            statusBadge = `<div class="tournament-status registration">Pendaftaran Dibuka</div>`;
        } else if (tournament.status === 'ongoing') {
            statusBadge = `<div class="tournament-status ongoing">Sedang Berlangsung</div>`;
        } else if (tournament.status === 'completed') {
            statusBadge = `<div class="tournament-status completed">Selesai</div>`;
        }
        
        tournamentCard.innerHTML = `
            <div class="tournament-banner">
                <img src="${tournament.image}" alt="${tournament.name}">
                ${statusBadge}
            </div>
            <div class="tournament-content">
                <h3>${tournament.name}</h3>
                <div class="tournament-meta">
                    <div class="meta-item">
                        <span class="meta-icon">🎮</span>
                        <span>${tournament.gameName}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon">📅</span>
                        <span>${startDate} - ${endDate}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon">🏆</span>
                        <span>Prize: ${tournament.prize}</span>
                    </div>
                </div>
                <div class="tournament-info">
                    <div class="registration-deadline">
                        <span>Pendaftaran ditutup:</span>
                        <strong>${registrationEndDate}</strong>
                    </div>
                    <a href="${tournament.link}" class="details-button">Detail</a>
                </div>
            </div>
        `;
        
        tournamentsGrid.appendChild(tournamentCard);
    });
}
