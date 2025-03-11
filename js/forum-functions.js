/**
 * Forum Functions
 * 
 * This file contains functions to populate and manage the forum page
 * using data from forum-data.js
 */

// Wait for document and data to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the forum page
    initForumPage();
});

/**
 * Main initialization function
 */
function initForumPage() {
    // Check if current page is a category page
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('category');
    
    // Update breadcrumb if on category page
    if (categoryId) {
        updateBreadcrumb(categoryId);
    }
    
    // Populate forum sidebar
    populateCategories();
    populateForumStats();
    populateOnlineUsers();
    
    // Populate forum content
    populateThreads(categoryId);
    populatePopularDiscussions();
    
    // Setup event listeners
    setupFilterListeners();
    setupSearchFunctionality();
    setupCategorySelector();
    
    // Populate "Create Topic" form category dropdown
    populateTopicCategoryDropdown();
}

/**
 * Format a date relative to now
 */
function formatRelativeDate(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    
    if (diffDays > 0) {
        return diffDays + (diffDays === 1 ? ' hari lalu' : ' hari lalu');
    } else if (diffHours > 0) {
        return diffHours + (diffHours === 1 ? ' jam lalu' : ' jam lalu');
    } else if (diffMinutes > 0) {
        return diffMinutes + (diffMinutes === 1 ? ' menit lalu' : ' menit lalu');
    } else {
        return 'Baru saja';
    }
}

/**
 * Format a date as DD Month YYYY
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

/**
 * Update breadcrumb navigation
 */
function updateBreadcrumb(categoryId) {
    const breadcrumbCategory = document.getElementById('breadcrumb-category');
    if (!breadcrumbCategory) return;
    
    const category = forumData.categories.find(cat => cat.id === categoryId);
    if (category) {
        breadcrumbCategory.textContent = category.name;
    }
}

/**
 * Populate forum categories in sidebar
 */
function populateCategories() {
    const categoryList = document.getElementById('category-list');
    if (!categoryList) return;
    
    // Clear loading placeholder
    categoryList.innerHTML = '';
    
    // Add "All Categories" link
    const allCategoriesItem = document.createElement('li');
    allCategoriesItem.innerHTML = `
        <a href="forum.html" class="${!window.location.search ? 'active' : ''}">
            <span class="category-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
                </svg>
            </span>
            Semua Kategori
            <span class="category-count">${forumData.categories.reduce((acc, cat) => acc + cat.topics, 0)}</span>
        </a>
    `;
    categoryList.appendChild(allCategoriesItem);
    
    // Add category items
    forumData.categories.forEach(category => {
        const categoryItem = document.createElement('li');
        const isActive = new URLSearchParams(window.location.search).get('category') === category.id;
        
        categoryItem.innerHTML = `
            <a href="forum.html?category=${category.id}" class="${isActive ? 'active' : ''}">
                <span class="category-icon">${category.icon}</span>
                ${category.name}
                <span class="category-count">${category.topics}</span>
            </a>
        `;
        
        categoryList.appendChild(categoryItem);
    });
}

/**
 * Populate forum statistics
 */
function populateForumStats() {
    const statsContainer = document.getElementById('stats-container');
    if (!statsContainer) return;
    
    statsContainer.innerHTML = `
        <div class="stat-item">
            <span class="stat-label">Total Topik</span>
            <span class="stat-value">${forumData.stats.total_topics}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Total Komentar</span>
            <span class="stat-value">${forumData.stats.total_posts}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Anggota Terdaftar</span>
            <span class="stat-value">${forumData.stats.registered_users}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">Anggota Baru</span>
            <span class="stat-value">${forumData.stats.newest_member}</span>
        </div>
    `;
}

/**
 * Populate online users
 */
function populateOnlineUsers() {
    const onlineUsers = document.getElementById('online-users');
    if (!onlineUsers) return;
    
    let html = `
        <div class="online-count">
            <span class="online-dot"></span>
            <span class="online-number">${forumData.stats.online_users}</span> Pengguna
        </div>
    `;
    
    if (forumData.stats.online_members && forumData.stats.online_members.length > 0) {
        html += '<div class="online-avatars">';
        forumData.stats.online_members.forEach(member => {
            html += `
                <div class="online-avatar" title="${member.name}">
                    <img src="${member.image}" alt="${member.name}">
                </div>
            `;
        });
        html += '</div>';
    }
    
    onlineUsers.innerHTML = html;
}

/**
 * Populate thread list based on category filter
 */
function populateThreads(categoryId) {
    const threadList = document.getElementById('thread-list');
    if (!threadList) return;
    
    // Clear loading placeholder
    threadList.innerHTML = '';
    
    // Filter threads by category if needed
    let filteredThreads = forumData.threads;
    if (categoryId) {
        filteredThreads = forumData.threads.filter(thread => thread.category_id === categoryId);
    }
    
    // If no threads found
    if (filteredThreads.length === 0) {
        threadList.innerHTML = `
            <div class="no-threads">
                <p>Belum ada topik dalam kategori ini.</p>
                <button id="create-thread-btn" class="btn btn-primary">Buat Topik Baru</button>
            </div>
        `;
        
        // Add event listener to the button
        const createThreadBtn = document.getElementById('create-thread-btn');
        if (createThreadBtn) {
            createThreadBtn.addEventListener('click', function() {
                const newTopicModal = document.getElementById('new-topic-modal');
                if (newTopicModal) {
                    newTopicModal.style.display = 'flex';
                    
                    // Set the category in the dropdown if available
                    const topicCategory = document.getElementById('topic-category');
                    if (topicCategory && categoryId) {
                        topicCategory.value = categoryId;
                    }
                }
            });
        }
        
        return;
    }
    
    // Sort threads by date (newest first)
    filteredThreads.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    
    // Add thread items
    filteredThreads.forEach(thread => {
        const threadItem = document.createElement('div');
        threadItem.className = 'thread-item';
        
        // Find category info
        const category = forumData.categories.find(cat => cat.id === thread.category_id);
        
        // Format relative date
        const relativeDate = formatRelativeDate(thread.created_at);
        
        threadItem.innerHTML = `
            <div class="thread-avatar">
                <img src="${thread.author.image}" alt="${thread.author.name}">
            </div>
            <div class="thread-content">
                <div class="thread-title">
                    <a href="forum-topic.html?id=${thread.id}">${thread.title}</a>
                </div>
                <div class="thread-meta">
                    <span>Oleh <a href="#" class="thread-author">${thread.author.name}</a></span>
                    <span>di <span class="thread-category">${category ? category.name : 'Umum'}</span></span>
                    <span>${relativeDate}</span>
                </div>
                <div class="thread-preview">
                    ${thread.content.substring(0, 150)}${thread.content.length > 150 ? '...' : ''}
                </div>
            </div>
            <div class="thread-stats">
                <div class="stats-replies">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                    </svg>
                    <span class="stats-count">${thread.replies}</span>
                </div>
                <div class="stats-views">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                    <span class="stats-count">${thread.views}</span>
                </div>
            </div>
            <div class="thread-last-post">
                <span>Balasan terakhir</span>
                <div class="last-post-avatar">
                    <img src="${thread.last_reply.author.image}" alt="${thread.last_reply.author.name}">
                    <span class="last-post-author">${thread.last_reply.author.name}</span>
                </div>
                <span>${formatRelativeDate(thread.last_reply.created_at)}</span>
            </div>
        `;
        
        threadList.appendChild(threadItem);
    });
    
    // Add pagination if needed
    if (filteredThreads.length > 10) {
        addPagination(threadList);
    }
}

/**
 * Add pagination to thread list
 */
function addPagination(threadList) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    pagination.innerHTML = `
        <button class="pagination-arrow" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
        </button>
        <a href="#" class="pagination-item active">1</a>
        <a href="#" class="pagination-item">2</a>
        <a href="#" class="pagination-item">3</a>
        <button class="pagination-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </button>
    `;
}

/**
 * Populate popular discussions section
 */
function populatePopularDiscussions() {
    const discussionsGrid = document.getElementById('popular-discussions-grid');
    if (!discussionsGrid) return;
    
    // Clear loading placeholder
    discussionsGrid.innerHTML = '';
    
    // Create discussion cards
    forumData.popular.forEach(discussion => {
        const discussionCard = document.createElement('div');
        discussionCard.className = 'discussion-card';
        
        discussionCard.innerHTML = `
            <div class="discussion-header">
                <div class="discussion-avatar">
                    <img src="${discussion.author.image}" alt="${discussion.author.name}">
                </div>
                <div>
                    <div class="discussion-author">${discussion.author.name}</div>
                    <div class="discussion-date">${formatRelativeDate(discussion.date)}</div>
                </div>
            </div>
            <div class="discussion-content">
                <h3 class="discussion-title">
                    <a href="forum-topic.html?id=${discussion.id}">${discussion.title}</a>
                </h3>
                <div class="discussion-excerpt">
                    ${discussion.excerpt}
                </div>
                <div class="discussion-footer">
                    <div class="discussion-category">${discussion.category}</div>
                    <div class="discussion-stats">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                            </svg>
                            ${discussion.replies}
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                            </svg>
                            ${discussion.views}
                        </span>
                    </div>
                </div>
            </div>
        `;
        
        discussionsGrid.appendChild(discussionCard);
    });
}

/**
 * Setup filter listeners for sorting and category filtering
 */
function setupFilterListeners() {
    const filterSort = document.getElementById('filter-sort');
    const filterCategory = document.getElementById('filter-category');
    
    if (filterSort) {
        filterSort.addEventListener('change', function() {
            const sortBy = this.value;
            sortThreads(sortBy);
        });
    }
    
    if (filterCategory) {
        filterCategory.addEventListener('change', function() {
            const categoryId = this.value;
            if (categoryId === 'all') {
                window.location.href = 'forum.html';
            } else {
                window.location.href = `forum.html?category=${categoryId}`;
            }
        });
    }
}

/**
 * Set up search functionality
 */
function setupSearchFunctionality() {
    const searchInput = document.querySelector('.search-input input');
    const searchButton = document.querySelector('.search-button');
    
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            if (searchTerm) {
                searchThreads(searchTerm);
            }
        });
        
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                const searchTerm = searchInput.value.toLowerCase().trim();
                if (searchTerm) {
                    searchThreads(searchTerm);
                }
            }
        });
    }
}

/**
 * Search threads by term
 */
function searchThreads(term) {
    const threadList = document.getElementById('thread-list');
    if (!threadList) return;
    
    const threadItems = threadList.querySelectorAll('.thread-item');
    let foundAny = false;
    
    threadItems.forEach(item => {
        const threadText = item.textContent.toLowerCase();
        if (threadText.includes(term)) {
            item.style.display = 'flex';
            foundAny = true;
            
            // Highlight search term (basic implementation)
            const titleElement = item.querySelector('.thread-title a');
            const previewElement = item.querySelector('.thread-preview');
            
            if (titleElement && titleElement.textContent.toLowerCase().includes(term)) {
                const originalText = titleElement.textContent;
                const regex = new RegExp('(' + term + ')', 'gi');
                titleElement.innerHTML = originalText.replace(regex, '<span class="highlight">$1</span>');
            }
            
            if (previewElement && previewElement.textContent.toLowerCase().includes(term)) {
                const originalText = previewElement.textContent;
                const regex = new RegExp('(' + term + ')', 'gi');
                previewElement.innerHTML = originalText.replace(regex, '<span class="highlight">$1</span>');
            }
        } else {
            item.style.display = 'none';
        }
    });
    
    // Show message if no results found
    if (!foundAny) {
        threadList.innerHTML = `
            <div class="no-threads">
                <p>Tidak ada hasil yang ditemukan untuk "${term}".</p>
                <button class="btn btn-outline" onclick="resetSearch()">Reset Pencarian</button>
            </div>
        `;
    }
}

/**
 * Reset search
 */
window.resetSearch = function() {
    const searchInput = document.querySelector('.search-input input');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Get category ID from URL if any
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('category');
    
    // Re-populate threads
    populateThreads(categoryId);
};

/**
 * Sort threads by the given criteria
 */
function sortThreads(sortBy) {
    const threadList = document.getElementById('thread-list');
    if (!threadList) return;
    
    // Get current threads
    const threadItems = Array.from(threadList.querySelectorAll('.thread-item'));
    if (threadItems.length === 0) return;
    
    // Clear thread list
    threadList.innerHTML = '';
    
    // Sort based on criteria
    switch (sortBy) {
        case 'latest':
            // Keep original order (already sorted by date)
            break;
        case 'popular':
            threadItems.sort((a, b) => {
                const aViews = parseInt(a.querySelector('.stats-views .stats-count').textContent);
                const bViews = parseInt(b.querySelector('.stats-views .stats-count').textContent);
                return bViews - aViews;
            });
            break;
        case 'most-replies':
            threadItems.sort((a, b) => {
                const aReplies = parseInt(a.querySelector('.stats-replies .stats-count').textContent);
                const bReplies = parseInt(b.querySelector('.stats-replies .stats-count').textContent);
                return bReplies - aReplies;
            });
            break;
        case 'newest':
            // Reverse the order (oldest first)
            threadItems.reverse();
            break;
    }
    
    // Add sorted threads back to the list
    threadItems.forEach(item => threadList.appendChild(item));
}

/**
 * Setup category selector dropdown
 */
function setupCategorySelector() {
    const filterCategory = document.getElementById('filter-category');
    if (!filterCategory) return;
    
    // Clear all options except the first one
    while (filterCategory.options.length > 1) {
        filterCategory.remove(1);
    }
    
    // Add category options
    forumData.categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        
        // Check if this category is currently selected in the URL
        const urlParams = new URLSearchParams(window.location.search);
        const categoryId = urlParams.get('category');
        if (categoryId === category.id) {
            option.selected = true;
        }
        
        filterCategory.appendChild(option);
    });
}

/**
 * Populate the category dropdown in the new topic form
 */
function populateTopicCategoryDropdown() {
    const topicCategory = document.getElementById('topic-category');
    if (!topicCategory) return;
    
    // Clear existing options
    topicCategory.innerHTML = '';
    
    // Add category options
    forumData.categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        
        // Check if a category is specified in the URL
        const urlParams = new URLSearchParams(window.location.search);
        const categoryId = urlParams.get('category');
        if (categoryId === category.id) {
            option.selected = true;
        }
        
        topicCategory.appendChild(option);
    });
}
