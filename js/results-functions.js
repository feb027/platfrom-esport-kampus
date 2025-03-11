/**
 * Results Functions
 * 
 * This file contains functions to populate and manage the results page
 * using data from results-data.js
 */

// Wait for document and data to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the results page
    initResultsPage();
});

/**
 * Main initialization function
 */
function initResultsPage() {
    // Populate tournament selector filter options
    populateTournamentOptions();
    
    // Populate main content sections
    populateTournamentResults();
    populateMatchResults();
    populateChampions();
    populateStatistics();
    populateArchive();
    
    // Setup event listeners for filters and pagination
    setupFilterListeners();
}

/**
 * Populate tournament dropdown options in the filter
 */
function populateTournamentOptions() {
    const tournamentSelect = document.getElementById('filter-tournament');
    
    // Clear any existing options except the "All" option
    while (tournamentSelect.options.length > 1) {
        tournamentSelect.remove(1);
    }
    
    // Add options for each tournament
    resultsData.tournaments.forEach(tournament => {
        const option = document.createElement('option');
        option.value = tournament.id;
        option.textContent = tournament.name;
        tournamentSelect.appendChild(option);
    });
}

/**
 * Format a date as DD Month YYYY
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

/**
 * Get date components from a date string
 */
function getDateComponents(dateString) {
    const date = new Date(dateString);
    return {
        day: date.getDate(),
        month: new Intl.DateTimeFormat('id-ID', { month: 'short' }).format(date).toUpperCase(),
        year: date.getFullYear()
    };
}

/**
 * Populate tournament results section
 */
function populateTournamentResults() {
    const tournamentsGrid = document.querySelector('.tournaments-grid');
    
    // Clear loading placeholder
    tournamentsGrid.innerHTML = '';
    
    // Create tournament cards
    resultsData.tournaments.forEach(tournament => {
        const tournamentCard = document.createElement('div');
        tournamentCard.className = 'tournament-card';
        tournamentCard.setAttribute('data-game', tournament.game);
        tournamentCard.setAttribute('data-id', tournament.id);
        
        // Format date range
        const startDate = formatDate(tournament.date.start);
        const endDate = formatDate(tournament.date.end);
        const dateRange = startDate === endDate ? startDate : `${startDate} - ${endDate}`;
        
        tournamentCard.innerHTML = `
            <div class="tournament-banner">
                <img src="${tournament.banner}" alt="${tournament.name}">
                <div class="tournament-status completed">Selesai</div>
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
                        <span>${dateRange}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon">👥</span>
                        <span>${tournament.participants} Peserta</span>
                    </div>
                </div>
                <div class="tournament-podium">
                    <h4 class="podium-title">Pemenang</h4>
                    <div class="podium-winner">
                        <div class="winner-image">
                            <img src="${tournament.winner.image}" alt="${tournament.winner.name}">
                        </div>
                        <div class="winner-details">
                            <div class="winner-name">${tournament.winner.name}</div>
                            <div class="winner-faculty">${tournament.winner.faculty}</div>
                        </div>
                    </div>
                    <div class="podium-winner">
                        <div class="winner-image">
                            <img src="${tournament.runner_up.image}" alt="${tournament.runner_up.name}">
                        </div>
                        <div class="winner-details">
                            <div class="winner-name">${tournament.runner_up.name}</div>
                            <div class="winner-faculty">${tournament.runner_up.faculty}</div>
                        </div>
                    </div>
                </div>
                <div class="tournament-action">
                    <a href="tournament-detail.html?id=${tournament.id}" class="details-button">Lihat Detail</a>
                </div>
            </div>
        `;
        
        tournamentsGrid.appendChild(tournamentCard);
    });
}

/**
 * Populate match results section
 */
function populateMatchResults() {
    const matchesList = document.querySelector('.matches-list');
    
    // Clear loading placeholder
    matchesList.innerHTML = '';
    
    // Create match items
    resultsData.matches.forEach(match => {
        const matchItem = document.createElement('div');
        matchItem.className = 'match-item';
        matchItem.setAttribute('data-game', match.game);
        matchItem.setAttribute('data-tournament', match.tournament_id);
        
        // Get date components
        const dateComponents = getDateComponents(match.date);
        
        // Determine the winner
        const teamAClass = match.winner === 'team_a' ? 'match-winner' : '';
        const teamBClass = match.winner === 'team_b' ? 'match-winner' : '';
        
        matchItem.innerHTML = `
            <div class="match-date">
                <span class="day">${dateComponents.day}</span>
                <span class="month">${dateComponents.month}</span>
            </div>
            <div class="match-details">
                <div class="match-tournament">${match.tournament_name} - ${match.round}</div>
                <div class="match-teams">
                    <div class="team">
                        <img src="${match.team_a.image}" alt="${match.team_a.name}">
                        <div>
                            <div class="team-name ${teamAClass}">${match.team_a.name}</div>
                            <div class="team-faculty">${match.team_a.faculty}</div>
                        </div>
                    </div>
                    <div class="match-score">
                        <span class="${teamAClass}">${match.team_a.score}</span>
                        <span class="score-divider">:</span>
                        <span class="${teamBClass}">${match.team_b.score}</span>
                    </div>
                    <div class="team">
                        <div>
                            <div class="team-name ${teamBClass}">${match.team_b.name}</div>
                            <div class="team-faculty">${match.team_b.faculty}</div>
                        </div>
                        <img src="${match.team_b.image}" alt="${match.team_b.name}">
                    </div>
                </div>
                <div class="match-info">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>
                        Format: ${match.format}
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                        MVP: ${match.mvp}
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                        </svg>
                        Game: ${match.gameName}
                    </span>
                </div>
            </div>
            <div class="match-action">
                <a href="${match.highlights}" class="highlight-button" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                    </svg>
                    Highlights
                </a>
            </div>
        `;
        
        matchesList.appendChild(matchItem);
    });
}

/**
 * Populate champions section
 */
function populateChampions() {
    const championsSlider = document.getElementById('champions-slider');
    
    // Clear loading placeholder
    championsSlider.innerHTML = '';
    
    // Create champion cards
    resultsData.champions.forEach((champion, index) => {
        const championCard = document.createElement('div');
        championCard.className = 'champion-card';
        
        // Create team members HTML if available
        let teamMembersHtml = '';
        if (champion.team.members && champion.team.members.length > 0) {
            let membersListHtml = '';
            champion.team.members.forEach(member => {
                membersListHtml += `<li>${member}</li>`;
            });
            
            teamMembersHtml = `
                <div class="champion-team-members">
                    <div class="members-title">Anggota Tim</div>
                    <ul class="members-list">
                        ${membersListHtml}
                    </ul>
                </div>
            `;
        }
        
        championCard.innerHTML = `
            <div class="champion-banner">
                <img src="${champion.banner}" alt="${champion.tournament_name}">
            </div>
            <div class="champion-content">
                <div class="champion-badge">🏆</div>
                <div class="champion-team">
                    <div class="team-logo">
                        <img src="${champion.team.image}" alt="${champion.team.name}">
                    </div>
                    <div class="team-info">
                        <h3>${champion.team.name}</h3>
                        <div class="team-faculty">${champion.team.faculty}</div>
                    </div>
                </div>
                <div class="champion-details">
                    <div class="champion-tournament">${champion.tournament_name}</div>
                    <div class="champion-date">${formatDate(champion.date)}</div>
                    <div class="champion-prize">${champion.prize}</div>
                    ${teamMembersHtml}
                </div>
            </div>
        `;
        
        championsSlider.appendChild(championCard);
    });
}

/**
 * Populate statistics section
 */
function populateStatistics() {
    // Populate teams stats
    populateTeamsStats();
    
    // Populate players stats
    populatePlayersStats();
    
    // Populate games stats
    populateGamesStats();
}

/**
 * Populate teams statistics
 */
function populateTeamsStats() {
    const teamsStatsBody = document.getElementById('teams-stats-body');
    teamsStatsBody.innerHTML = '';
    
    resultsData.stats.teams.forEach(team => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${team.rank}</td>
            <td>
                <div class="stats-team-info">
                    <div class="stats-team-img">
                        <img src="${team.image}" alt="${team.team}">
                    </div>
                    <span>${team.team}</span>
                </div>
            </td>
            <td>${team.faculty}</td>
            <td>${team.tournaments}</td>
            <td class="highlight-cell">${team.championships}</td>
            <td>${team.runner_ups}</td>
            <td class="highlight-cell">${team.points}</td>
        `;
        
        teamsStatsBody.appendChild(row);
    });
}

/**
 * Populate players statistics
 */
function populatePlayersStats() {
    const playersStatsBody = document.getElementById('players-stats-body');
    playersStatsBody.innerHTML = '';
    
    resultsData.stats.players.forEach(player => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${player.rank}</td>
            <td>
                <div class="stats-team-info">
                    <div class="player-img">
                        <img src="${player.image}" alt="${player.player}">
                    </div>
                    <span>${player.player}</span>
                </div>
            </td>
            <td>${player.team}</td>
            <td>${player.game}</td>
            <td class="highlight-cell">${player.mvp}</td>
            <td>${player.matches}</td>
            <td>${player.win_rate}</td>
            <td class="highlight-cell">${player.points}</td>
        `;
        
        playersStatsBody.appendChild(row);
    });
}

/**
 * Populate games statistics
 */
function populateGamesStats() {
    const gameStatsGrid = document.getElementById('game-stats-grid');
    gameStatsGrid.innerHTML = '';
    
    resultsData.stats.games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-stats-card';
        
        gameCard.innerHTML = `
            <div class="game-banner">
                <img src="${game.image}" alt="${game.name}">
                <div class="game-name">${game.name}</div>
            </div>
            <div class="game-stats">
                <div class="game-stat-item">
                    <div class="stat-label">Total Turnamen</div>
                    <div class="stat-value">${game.tournaments}</div>
                </div>
                <div class="game-stat-item">
                    <div class="stat-label">Total Pertandingan</div>
                    <div class="stat-value">${game.total_matches}</div>
                </div>
                <div class="game-stat-item">
                    <div class="stat-label">Total Tim</div>
                    <div class="stat-value">${game.total_teams}</div>
                </div>
                <div class="game-stat-item">
                    <div class="stat-label">Tim Terbaik</div>
                    <div class="stat-value">${game.top_team}</div>
                </div>
                <div class="game-stat-item">
                    <div class="stat-label">Pemain MVP Terbanyak</div>
                    <div class="stat-value">${game.most_mvp}</div>
                </div>
            </div>
        `;
        
        gameStatsGrid.appendChild(gameCard);
    });
}

/**
 * Populate archive section
 */
function populateArchive() {
    const yearTabs = document.getElementById('year-tabs');
    const archiveContent = document.getElementById('archive-content');
    
    yearTabs.innerHTML = '';
    archiveContent.innerHTML = '';
    
    // Create year tabs and content
    Object.keys(resultsData.archive).forEach((year, index) => {
        // Create year tab
        const yearTab = document.createElement('button');
        yearTab.className = `year-tab ${index === 0 ? 'active' : ''}`;
        yearTab.setAttribute('data-year', year);
        yearTab.textContent = year;
        yearTabs.appendChild(yearTab);
        
        // Create year content
        const yearContent = document.createElement('div');
        yearContent.className = `archive-tournaments ${index === 0 ? 'active' : ''}`;
        yearContent.id = `archive-${year}`;
        
        // Create tournaments list
        const tournamentsList = document.createElement('ul');
        tournamentsList.className = 'archive-list';
        
        resultsData.archive[year].tournaments.forEach(tournament => {
            const tournamentItem = document.createElement('li');
            tournamentItem.className = 'archive-item';
            
            tournamentItem.innerHTML = `
                <div class="archive-tournament">
                    <div class="archive-tournament-name">${tournament.name}</div>
                    <div class="archive-tournament-date">${formatDate(tournament.date)}</div>
                </div>
                <div class="archive-winner">${tournament.winner}</div>
            `;
            
            tournamentsList.appendChild(tournamentItem);
        });
        
        yearContent.appendChild(tournamentsList);
        archiveContent.appendChild(yearContent);
        
        // Add event listener to year tab
        yearTab.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            document.querySelectorAll('.year-tab').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.archive-tournaments').forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(`archive-${this.getAttribute('data-year')}`).classList.add('active');
        });
    });
}

/**
 * Setup event listeners for filters and pagination
 */
function setupFilterListeners() {
    // Filter form handling
    const filterApply = document.querySelector('.filter-apply');
    const filterReset = document.querySelector('.filter-reset');
    
    // Apply filter
    filterApply.addEventListener('click', function() {
        applyFilters();
    });
    
    // Reset filters
    filterReset.addEventListener('click', function() {
        resetFilters();
    });
    
    // Load more button
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // In a real application, this would load more matches
            // For now, we'll just show an alert
            alert('This would load more matches in a real application.');
        });
    }
}

/**
 * Apply selected filters
 */
function applyFilters() {
    const gameFilter = document.getElementById('filter-game').value;
    const tournamentFilter = document.getElementById('filter-tournament').value;
    const periodFilter = document.getElementById('filter-period').value;
    const searchFilter = document.getElementById('filter-search').value.toLowerCase();
    
    // Filter tournament cards
    const tournamentCards = document.querySelectorAll('.tournament-card');
    tournamentCards.forEach(card => {
        let show = true;
        
        // Game filter
        if (gameFilter !== 'all' && card.getAttribute('data-game') !== gameFilter) {
            show = false;
        }
        
        // Tournament filter
        if (tournamentFilter !== 'all' && card.getAttribute('data-id') !== tournamentFilter) {
            show = false;
        }
        
        // Simple text search in card content
        if (searchFilter && !card.textContent.toLowerCase().includes(searchFilter)) {
            show = false;
        }
        
        // Period filter would require more complex date comparison
        // Not implemented for this simple example
        
        card.style.display = show ? 'block' : 'none';
    });
    
    // Filter match items
    const matchItems = document.querySelectorAll('.match-item');
    matchItems.forEach(item => {
        let show = true;
        
        // Game filter
        if (gameFilter !== 'all' && item.getAttribute('data-game') !== gameFilter) {
            show = false;
        }
        
        // Tournament filter
        if (tournamentFilter !== 'all' && item.getAttribute('data-tournament') !== tournamentFilter) {
            show = false;
        }
        
        // Simple text search in item content
        if (searchFilter && !item.textContent.toLowerCase().includes(searchFilter)) {
            show = false;
        }
        
        // Period filter would require more complex date comparison
        // Not implemented for this simple example
        
        item.style.display = show ? 'flex' : 'none';
    });
}

/**
 * Reset all filters to default
 */
function resetFilters() {
    // Reset filter form
    document.getElementById('filter-game').value = 'all';
    document.getElementById('filter-tournament').value = 'all';
    document.getElementById('filter-period').value = 'all';
    document.getElementById('filter-search').value = '';
    
    // Show all tournament cards
    document.querySelectorAll('.tournament-card').forEach(card => {
        card.style.display = 'block';
    });
    
    // Show all match items
    document.querySelectorAll('.match-item').forEach(item => {
        item.style.display = 'flex';
    });
}
