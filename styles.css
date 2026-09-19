/* ==========================================================================
   RETRO CLI TERMINAL STYLESHEET (Susanta Gorai Portfolio)
   Inspired by sagnik17.page & classic Unix / Catppuccin terminal aesthetic
   ========================================================================== */

:root {
    --bg-dark: #191919;
    --bg-card: #151515;
    --text-cream: #E6E2D1;
    --text-muted: rgba(230, 226, 209, 0.6);
    --text-subtle: rgba(230, 226, 209, 0.4);
    --accent-green: #A6D189;
    --accent-pink: #f38b8b;
    --accent-peach: #FAB387;
    --accent-teal: #94E2D5;
    --accent-purple: #CBA6F7;
    --border-color: rgba(230, 226, 209, 0.2);
    --border-hover: rgba(230, 226, 209, 0.5);
    --shadow-hard: 4px 4px 0px 0px rgba(230, 226, 209, 0.2);
    --shadow-hard-peach: 4px 4px 0px 0px #FAB387;
    --font-mono: 'Fira Code', 'Cascadia Code', monospace;
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,
body {
    width: 100%;
    min-height: 100vh;
    background-color: var(--bg-dark);
    color: var(--text-cream);
    font-family: var(--font-mono);
    font-size: 14px;
    line-height: 1.5;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
}

/* Custom Scrollbars */
::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}

::-webkit-scrollbar-thumb {
    background-color: rgba(230, 226, 209, 0.2);
    border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: var(--accent-green);
}

::-webkit-scrollbar-track {
    background-color: transparent;
}

.scrollbar-white::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}

.scrollbar-white::-webkit-scrollbar-thumb {
    background-color: rgba(230, 226, 209, 0.2);
}

.scrollbar-white::-webkit-scrollbar-track {
    background-color: transparent;
}

/* Base utility text colors */
.text-pink {
    color: var(--accent-pink);
}

.text-peach {
    color: var(--accent-peach);
}

.text-green {
    color: var(--accent-green);
}

.text-teal {
    color: var(--accent-teal);
}

.text-cream {
    color: var(--text-cream);
}

.text-purple {
    color: var(--accent-purple);
}

.text-muted {
    color: var(--text-muted);
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    background: none;
    border: none;
    color: inherit;
    font-family: inherit;
    cursor: pointer;
}

/* ==========================================================================
   DESKTOP SHELL CONTAINER (>= 1035px)
   ========================================================================== */
#desktop-shell {
    display: block;
    height: 100vh;
    max-width: 1450px;
    margin: 0 auto;
    padding: 1.5rem 2rem;
    box-sizing: border-box;
}

@media (min-width: 1400px) {
    #desktop-shell {
        padding: 2rem 3rem;
    }
}

@media (max-height: 720px) and (min-width: 1035px) {
    #desktop-shell {
        height: auto;
        min-height: 100vh;
        padding-bottom: 2rem;
    }

    .outer-terminal-box {
        height: auto !important;
        min-height: 620px;
    }

    .inner-terminal-window {
        height: auto !important;
        min-height: 500px;
    }
}

.outer-terminal-box {
    position: relative;
    height: 100%;
    border: 1px solid var(--border-color);
    padding: 1.5rem 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #191919;
    overflow: visible;
}

/* Top user badge */
.top-user-badge {
    position: absolute;
    top: -12px;
    left: 5%;
    background-color: #191919;
    padding: 0 0.8rem;
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 1.4;
    display: inline-flex;
    align-items: center;
    gap: 0.15rem;
    z-index: 30;
    letter-spacing: 0.5px;
}

/* Header & Tabs Bar */
.desktop-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    flex-shrink: 0;
    position: relative;
    z-index: 10;
}

.cmd-prompt-ls {
    font-size: 1.05rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.35rem;
}

.tabs-navigation {
    display: flex;
    gap: 0.25rem;
    align-items: center;
}

.tab-btn {
    padding: 0.35rem 1rem;
    font-size: 0.95rem;
    color: var(--accent-green);
    transition: all 0.15s ease;
    border: 1px solid transparent;
    border-radius: 2px;
    cursor: pointer;
    white-space: nowrap;
}

.tab-btn .ext {
    color: var(--text-cream);
}

.tab-btn:hover {
    background-color: rgba(230, 226, 209, 0.12);
}

.tab-btn.active {
    background-color: var(--accent-green);
    color: #191919 !important;
    font-weight: 700;
}

.tab-btn.active .ext {
    color: #191919 !important;
}

/* Inner Terminal Window */
.inner-terminal-window {
    position: relative;
    border: 1px solid var(--border-color);
    flex-grow: 1;
    height: calc(100% - 95px);
    padding: 1.5rem;
    overflow: visible;
    /* Ensure floating command tag is not clipped! */
    background-color: #191919;
    display: flex;
    flex-direction: column;
}

.floating-command-tag {
    position: absolute;
    top: -12px;
    left: 1.2rem;
    background-color: #191919;
    padding: 0 0.75rem;
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1.4;
    z-index: 30;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
}

.content-viewport {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}

/* Scrolling pixel-line background canvas */
#lines-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: 1;
}

.section-view {
    display: none;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    position: relative;
    z-index: 1;
}

.section-view.active {
    display: block;
    opacity: 1;
    animation: fadeIn 0.25s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(3px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Desktop Footer */
.desktop-footer {
    margin-top: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    color: var(--text-muted);
    flex-shrink: 0;
}

.footer-shortcuts {
    display: flex;
    align-items: center;
    gap: 1.4rem;
}

.footer-shortcuts span {
    display: inline-flex;
    align-items: center;
    gap: 0.2rem;
}

.footer-credit {
    display: flex;
    align-items: center;
    gap: 0.35rem;
}

.sound-toggle-btn,
.cli-toggle-btn {
    color: var(--accent-peach);
    border: 1px solid rgba(250, 179, 135, 0.4);
    padding: 0.15rem 0.45rem;
    font-size: 0.75rem;
    cursor: pointer;
    transition: all 0.15s ease;
}

.sound-toggle-btn:hover,
.cli-toggle-btn:hover {
    background-color: rgba(250, 179, 135, 0.15);
    border-color: var(--accent-peach);
}

/* ==========================================================================
   MOBILE SHELL CONTAINER (< 1035px)
   ========================================================================== */
#mobile-shell {
    display: none;
    min-height: 100vh;
    background-color: var(--bg-dark);
    flex-direction: column;
}

@media (max-width: 1034px) {
    #desktop-shell {
        display: none !important;
    }

    #mobile-shell {
        display: flex !important;
    }
}

.mobile-header {
    text-align: center;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--border-color);
    font-size: 0.95rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
}

.mobile-body {
    display: flex;
    flex: 1;
    overflow: hidden;
    height: calc(100vh - 120px);
}

/* Vertical Tab Strip */
.mobile-sidebar {
    width: 3.5rem;
    border-right: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    background-color: var(--bg-dark);
}

.mobile-tab-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--border-color);
    transition: background-color 0.15s ease;
    padding: 0.5rem 0;
}

.mobile-tab-btn span {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: 0.85rem;
    letter-spacing: 1px;
    white-space: nowrap;
}

.mobile-tab-btn.active {
    background-color: var(--accent-green);
    color: #191919;
    font-weight: 700;
}

.mobile-tab-btn.active span {
    color: #191919;
}

.mobile-content-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.mobile-cmd-header {
    padding: 0.6rem 0.8rem;
    border-bottom: 1px solid var(--border-color);
    font-size: 0.9rem;
    font-weight: 600;
    flex-shrink: 0;
    background-color: rgba(25, 25, 25, 0.95);
}

.mobile-content-scroll {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
}

/* Mobile Footer with buttons */
.mobile-footer {
    border-top: 1px solid var(--border-color);
    padding: 0.6rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-dark);
    flex-shrink: 0;
}

.mobile-nav-buttons {
    display: flex;
    gap: 0.5rem;
}

.mobile-nav-btn {
    width: 2.75rem;
    height: 2.75rem;
    background-color: var(--accent-peach);
    color: #191919;
    font-weight: 700;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    transition: transform 0.1s ease;
}

.mobile-nav-btn:active {
    transform: scale(0.92);
}

/* ==========================================================================
   TAB 1: ABOUT.TXT VIEW
   ========================================================================== */
.about-grid {
    display: flex;
    height: 100%;
    gap: 2.2rem;
    align-items: center;
}

@media (max-width: 1034px) {
    .about-grid {
        flex-direction: column;
        height: auto;
        gap: 1.5rem;
    }
}

.about-avatar-column {
    width: 300px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}

.avatar-frame {
    position: relative;
    width: 250px;
    height: 250px;
    border: 2px solid rgba(230, 226, 209, 0.3);
    box-shadow: var(--shadow-hard);
    background: #111;
    overflow: hidden;
    margin-bottom: 0.9rem;
    image-rendering: pixelated;
}

.avatar-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: opacity 0.2s ease;
}

.avatar-switch-btn {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background: rgba(25, 25, 25, 0.85);
    border: 1px solid var(--accent-peach);
    color: var(--accent-peach);
    padding: 0.2rem 0.5rem;
    font-size: 0.7rem;
    cursor: pointer;
    border-radius: 2px;
}

.avatar-switch-btn:hover {
    background: var(--accent-peach);
    color: #191919;
}

.avatar-name-badge {
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: 3px;
    color: var(--accent-green);
    text-transform: uppercase;
    margin-top: 0.2rem;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.8);
}

.about-info-column {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
    padding-right: 0.5rem;
}

/* Contribution Grid Component */
.contrib-container {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
}

.contrib-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.85rem;
    color: var(--text-muted);
}

.contrib-matrix {
    display: grid;
    grid-template-rows: repeat(7, 10px);
    grid-auto-flow: column;
    grid-auto-columns: 10px;
    gap: 3px;
    overflow-x: auto;
    padding-bottom: 0.2rem;
}

.contrib-cell {
    width: 10px;
    height: 10px;
    border-radius: 1.5px;
    background-color: #262626;
    transition: transform 0.1s ease, filter 0.15s ease;
    position: relative;
}

.contrib-cell:hover {
    transform: scale(1.35);
    z-index: 10;
    filter: brightness(1.3);
}

.contrib-cell.lvl-1 {
    background-color: #1e3a29;
}

.contrib-cell.lvl-2 {
    background-color: #2e7d43;
}

.contrib-cell.lvl-3 {
    background-color: #a6d189;
}

.contrib-cell.lvl-purple {
    background-color: #c026d3;
}

.contrib-cell.lvl-purple-bright {
    background-color: #e879f9;
}

.contrib-cell.snake-head {
    background-color: #f38ba8 !important;
    box-shadow: 0 0 6px #f38ba8;
    z-index: 5;
    border-radius: 2px;
}

.contrib-cell.snake-body {
    background-color: #c026d3 !important;
    box-shadow: 0 0 4px rgba(192, 38, 211, 0.6);
    border-radius: 2px;
}

.contrib-cell.snake-food {
    background-color: #a6d189 !important;
    box-shadow: 0 0 8px #a6d189;
    animation: foodPulse 0.9s ease-in-out infinite alternate;
    z-index: 4;
}

@keyframes foodPulse {
    from {
        transform: scale(0.9);
        filter: brightness(1);
    }
    to {
        transform: scale(1.35);
        filter: brightness(1.5);
    }
}

.contrib-progress-track {
    width: 100%;
    height: 4px;
    background-color: #262626;
    border-radius: 2px;
    overflow: visible;
    position: relative;
    animation: slowUpDown 3.8s ease-in-out infinite alternate;
    box-shadow: 0 0 8px rgba(166, 209, 137, 0.25);
}

@keyframes slowUpDown {
    0% {
        transform: translateY(-5px);
    }
    50% {
        transform: translateY(4px);
    }
    100% {
        transform: translateY(-5px);
    }
}

.contrib-progress-fill {
    height: 100%;
    width: 82%;
    background: linear-gradient(90deg, #1e3a29, #a6d189, #22c55e);
    position: relative;
    overflow: hidden;
}

.contrib-progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    animation: scanGlow 3s ease-in-out infinite;
}

@keyframes scanGlow {
    0% { left: -100%; }
    100% { left: 100%; }
}

/* Neofetch System Information */
.neofetch-table {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin: 0.6rem 0;
    font-size: 0.95rem;
}

.neofetch-row {
    display: flex;
    gap: 0.75rem;
}

.neofetch-key {
    color: var(--accent-peach);
    min-width: 170px;
    font-weight: 500;
}

.neofetch-val {
    color: var(--text-cream);
    font-weight: 400;
}

/* data.json window component */
.data-json-window {
    border: 1px solid var(--border-color);
    background-color: #151515;
    border-radius: 4px;
    padding: 0.8rem 1rem;
    box-shadow: var(--shadow-hard);
    margin-top: 0.4rem;
}

.data-json-header {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 0.6rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid rgba(230, 226, 209, 0.1);
    font-size: 0.8rem;
    color: var(--text-muted);
}

.data-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    display: inline-block;
}

.dot-red {
    background-color: var(--accent-pink);
}

.dot-yellow {
    background-color: var(--accent-peach);
}

.dot-green {
    background-color: var(--accent-green);
}

.json-code {
    font-size: 0.88rem;
    line-height: 1.6;
}

.json-link {
    color: var(--accent-green);
    text-decoration: underline;
    text-underline-offset: 3px;
    cursor: pointer;
    transition: opacity 0.15s ease;
}

.json-link:hover {
    opacity: 0.75;
}

/* ==========================================================================
   TAB 2: CAREER.LOG VIEW
   ========================================================================== */
.split-view-container {
    display: flex;
    height: 100%;
    gap: 1.5rem;
}

@media (max-width: 1034px) {
    .split-view-container {
        flex-direction: column;
        height: auto;
    }
}

.split-left-col {
    flex: 6;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    overflow-y: auto;
    padding-right: 0.5rem;
}

.split-right-col {
    flex: 4;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    overflow-y: auto;
    padding-right: 0.5rem;
}

.retro-card {
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-hard);
    padding: 1.1rem 1.25rem;
    background-color: var(--bg-card);
    transition: all 0.2s ease;
    position: relative;
}

.retro-card:hover {
    border-color: var(--border-hover);
    transform: translate(-1px, -1px);
}

.card-header-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;
}

.card-title {
    color: var(--accent-green);
    font-size: 1.05rem;
    font-weight: 600;
}

.card-org {
    color: var(--text-cream);
    font-size: 0.95rem;
    margin-top: 0.15rem;
}

.card-meta {
    font-size: 0.8rem;
    color: var(--accent-peach);
    font-style: italic;
}

.card-bullets {
    list-style: none;
    margin-top: 0.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    font-size: 0.85rem;
    color: rgba(230, 226, 209, 0.9);
    font-style: italic;
}

.card-bullets li::before {
    content: "• ";
    color: var(--accent-pink);
    margin-right: 0.35rem;
}

/* ==========================================================================
   TAB 3: SKILLS.MD (TECH STACK TREE)
   ========================================================================== */
.skills-container {
    display: flex;
    height: 100%;
    gap: 2rem;
    align-items: stretch;
}

@media (max-width: 1034px) {
    .skills-container {
        flex-direction: column;
        height: auto;
    }
}

.skills-mascot-col {
    flex: 3.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid var(--border-color);
    padding-right: 1.5rem;
}

@media (max-width: 1034px) {
    .skills-mascot-col {
        display: none;
    }
}

.skills-mascot-frame {
    width: 240px;
    height: 240px;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-hard);
    background: #121212;
    overflow: hidden;
    margin-bottom: 1rem;
}

.skills-mascot-frame img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    image-rendering: pixelated;
    animation: floatMascot 4s ease-in-out infinite;
}

@keyframes floatMascot {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-5px);
    }
}

.skills-tree-col {
    flex: 6.5;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-right: 0.5rem;
}

.tree-section-title {
    color: var(--accent-teal);
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.tree-title-line {
    flex: 1;
    height: 1px;
    background-color: var(--border-color);
}

.skills-tree-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}

@media (max-width: 768px) {
    .skills-tree-columns {
        grid-template-columns: 1fr;
    }
}

.tree-category {
    margin-bottom: 1.2rem;
}

.tree-cat-label {
    color: var(--accent-green);
    font-weight: 700;
    font-size: 0.92rem;
    margin-bottom: 0.4rem;
    display: flex;
    align-items: center;
    gap: 0.35rem;
}

.tree-item {
    color: var(--text-cream);
    font-size: 0.85rem;
    padding-left: 1.2rem;
    position: relative;
    line-height: 1.8;
    display: flex;
    align-items: center;
}

.tree-item::before {
    content: "├── ";
    color: #666;
    position: absolute;
    left: 0;
    font-family: monospace;
}

.tree-item:last-child::before {
    content: "└── ";
}

/* ==========================================================================
   TAB 4: PROJECTS.MD VIEW
   ========================================================================== */
.projects-container {
    display: flex;
    height: 100%;
    gap: 1.5rem;
}

@media (max-width: 1034px) {
    .projects-container {
        flex-direction: column;
        height: auto;
    }
}

.projects-stats-col {
    flex: 3.5;
    border: 1px solid var(--border-color);
    padding: 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-card);
    box-shadow: var(--shadow-hard);
}

@media (max-width: 1034px) {
    .projects-stats-col {
        display: none;
    }
}

.chart-wrapper {
    width: 150px;
    height: 150px;
    position: relative;
}

.chart-legend {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem 1rem;
    font-size: 0.8rem;
    width: 100%;
    margin: 1rem 0;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.legend-color-box {
    width: 10px;
    height: 10px;
    flex-shrink: 0;
}

.stats-table {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    font-size: 0.85rem;
}

.stats-row {
    display: flex;
    justify-content: space-between;
    color: var(--accent-green);
    font-weight: 700;
}

.stats-row span:last-child {
    color: var(--text-cream);
    font-weight: 400;
}

.projects-list-col {
    flex: 6.5;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    overflow-y: auto;
    padding-right: 0.5rem;
}

.project-card {
    border: 1px solid var(--border-color);
    border-left: 3px solid var(--accent-teal);
    box-shadow: var(--shadow-hard);
    padding: 1.2rem;
    background-color: var(--bg-card);
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    transition: all 0.2s ease;
}

.project-card:hover {
    border-color: var(--border-hover);
    border-left-color: var(--accent-green);
    transform: translate(-1px, -1px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.project-title-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.project-title {
    color: var(--accent-green);
    font-size: 1.1rem;
    font-weight: 700;
}

.project-sub {
    color: var(--accent-peach);
    font-size: 0.82rem;
    font-style: italic;
}

.project-desc {
    font-size: 0.85rem;
    color: rgba(230, 226, 209, 0.88);
    line-height: 1.5;
}

.project-tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 0.2rem;
}

.tech-tag-badge {
    background-color: rgba(230, 226, 209, 0.08);
    border: 1px solid rgba(230, 226, 209, 0.15);
    color: var(--accent-teal);
    padding: 0.15rem 0.45rem;
    font-size: 0.75rem;
    transition: all 0.15s ease;
}

.tech-tag-badge:hover {
    border-color: var(--accent-teal);
    background-color: rgba(148, 226, 213, 0.12);
}

.project-links-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 0.4rem;
    font-size: 0.82rem;
}

.project-action-link {
    color: var(--accent-peach);
    text-decoration: underline;
    text-underline-offset: 3px;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    transition: color 0.15s ease;
}

.project-action-link:hover {
    color: var(--accent-green);
}

.project-action-link.live-btn {
    color: var(--accent-teal);
}

.project-action-link.live-btn:hover {
    color: var(--accent-green);
}

/* ==========================================================================
   TAB 5: ACHIEVEMENTS.TXT VIEW
   ========================================================================== */
.achievements-container {
    display: flex;
    height: 100%;
    gap: 1.5rem;
}

@media (max-width: 1034px) {
    .achievements-container {
        flex-direction: column;
        height: auto;
    }
}

.achievements-list-col {
    flex: 6;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
    padding-right: 0.5rem;
}

.achievements-quotes-col {
    flex: 4;
    min-width: 0;
    position: relative;
    border: 1px solid var(--border-color);
    background-color: var(--bg-card);
    padding: 0;
    box-shadow: none;
    overflow-y: auto;
    display: block;
}

.achievement-box {
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-hard);
    padding: 1rem 1.2rem;
    background-color: var(--bg-card);
    transition: all 0.2s ease;
}

.achievement-box.featured-box {
    border-color: rgba(166, 209, 137, 0.4);
}

.achievement-box:hover {
    border-color: var(--border-hover);
}

.achievement-box-link {
    display: block;
    color: inherit;
    cursor: pointer;
    text-decoration: none;
}

.achievement-box-link:focus-visible {
    outline: 2px solid var(--accent-peach);
    outline-offset: 3px;
}

.achievement-tag {
    color: var(--accent-pink);
    font-size: 0.78rem;
    margin-bottom: 0.2rem;
}

.achievement-title {
    color: var(--accent-green);
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.35rem;
}

.achievement-desc {
    font-size: 0.85rem;
    color: rgba(230, 226, 209, 0.85);
    line-height: 1.45;
}

.achievement-title-link {
    color: var(--accent-green);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: rgba(166, 209, 137, 0.35);
    cursor: pointer;
    transition: color 0.2s ease, text-decoration-color 0.2s ease;
}

.achievement-title-link:hover {
    color: var(--accent-peach);
    text-decoration-color: var(--accent-peach);
}

.achievement-box-link:hover .achievement-title-link,
.achievement-box-link:focus-visible .achievement-title-link {
    color: var(--accent-peach);
    text-decoration-color: var(--accent-peach);
}

/* Endorsements terminal: offset speech bubbles with author labels outside. */
.endorsements-heading {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.endorsements-stage {
    min-height: 100%;
    padding: 2.5rem;
}

.endorsement-card {
    position: relative;
    width: 100%;
    margin: 0 0 2rem;
}

.endorsement-bubble {
    position: relative;
    width: 75%;
    min-height: 10.15rem;
    padding: 1rem 1.35rem 0.8rem;
    border: 1px solid var(--border-color);
    background-color: var(--bg-card);
    box-shadow: 6px 7px 0 rgba(230, 226, 209, 0.2);
}

.endorsement-bubble::after {
    content: "";
    position: absolute;
    right: -29px;
    bottom: -8px;
    width: 30px;
    height: 30px;
    background-color: rgba(230, 226, 209, 0.2);
    clip-path: polygon(0 0, 0 100%, 100% 100%);
    z-index: 0;
}

.endorsement-bubble > * {
    position: relative;
    z-index: 1;
}

.endorsement-card--left .endorsement-bubble {
    margin-left: auto;
    min-height: 11.5rem;
    box-shadow: -6px 7px 0 rgba(230, 226, 209, 0.2);
}

.endorsement-card--left .endorsement-bubble::after {
    right: auto;
    left: -29px;
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
}

.endorsement-mark {
    display: block;
    color: var(--accent-peach);
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.15rem;
}

.endorsement-mark--open {
    margin-bottom: 0.7rem;
}

.endorsement-mark--close {
    margin-top: 0.7rem;
    text-align: right;
}

.endorsement-copy {
    color: var(--text-cream);
    font-size: 0.86rem;
    font-weight: 700;
    line-height: 1.45;
}

.endorsement-author {
    position: absolute;
    bottom: -0.35rem;
    width: 6.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-style: normal;
    text-align: center;
    line-height: 1.25;
}

.endorsement-card--right .endorsement-author {
    left: calc(75% + 2rem);
}

.endorsement-card--left .endorsement-author {
    right: calc(75% + 2rem);
}

.endorsement-author-name {
    color: var(--accent-green);
    font-size: 1rem;
    font-weight: 700;
}

.endorsement-author-role {
    color: var(--accent-peach);
    font-size: 0.82rem;
}

@media (max-width: 1280px) {
    .endorsement-bubble {
        width: calc(100% - 1.25rem);
    }

    .endorsement-author {
        position: static;
        width: auto;
        margin-top: 1rem;
    }

    .endorsement-card--right .endorsement-author {
        margin-left: auto;
        text-align: right;
    }

    .endorsement-card--left .endorsement-author {
        margin-right: auto;
        text-align: left;
    }
}

@media (max-width: 1034px) {
    .achievements-quotes-col {
        overflow: visible;
    }

    .endorsements-stage {
        min-height: 0;
        padding: 1.5rem 0.75rem 0.5rem;
    }

    .endorsement-card {
        margin-bottom: 2.25rem;
    }

    .endorsement-bubble {
        min-height: 0;
    }
}

/* ==========================================================================
   TAB 6: CONTACT.YML VIEW
   ========================================================================== */
.contact-container {
    display: flex;
    height: 100%;
    gap: 1.5rem;
}

@media (max-width: 1034px) {
    .contact-container {
        flex-direction: column;
        height: auto;
    }
}

.contact-yaml-col {
    flex: 5;
    border: 1px solid var(--border-color);
    background-color: var(--bg-card);
    box-shadow: var(--shadow-hard);
    padding: 1.4rem;
    overflow-y: auto;
}

.contact-interactive-col {
    flex: 5;
    border: 1px solid var(--border-color);
    background-color: var(--bg-card);
    box-shadow: var(--shadow-hard);
    padding: 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.yaml-code-block {
    font-size: 0.9rem;
    line-height: 1.8;
}

.yaml-key {
    color: var(--accent-peach);
}

.yaml-str {
    color: var(--accent-green);
}

.yaml-punct {
    color: var(--text-muted);
}

.cli-form-group {
    margin-bottom: 0.9rem;
}

.cli-form-label {
    display: block;
    color: var(--accent-peach);
    font-size: 0.85rem;
    margin-bottom: 0.25rem;
}

.cli-form-input,
.cli-form-textarea {
    width: 100%;
    background-color: #111;
    border: 1px solid var(--border-color);
    color: var(--text-cream);
    padding: 0.5rem 0.75rem;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    outline: none;
    transition: border-color 0.2s ease;
}

.cli-form-input:focus,
.cli-form-textarea:focus {
    border-color: var(--accent-green);
    box-shadow: 0 0 5px rgba(166, 209, 137, 0.3);
}

.cli-submit-btn {
    background-color: var(--accent-green);
    color: #191919;
    font-weight: 700;
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    border-radius: 2px;
    transition: opacity 0.15s ease, transform 0.1s ease;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
}

.cli-submit-btn:hover {
    opacity: 0.9;
}

.cli-submit-btn:active {
    transform: scale(0.98);
}

.form-status-msg {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    min-height: 1.2rem;
}

/* ==========================================================================
   CLI TERMINAL MODAL (EASTER EGG `~` KEY)
   ========================================================================== */
#terminal-modal {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
    z-index: 9999;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

.modal-terminal-box {
    width: 100%;
    max-width: 750px;
    height: 480px;
    background-color: #121212;
    border: 1px solid var(--border-color);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.9), var(--shadow-hard);
    display: flex;
    flex-direction: column;
}

.modal-terminal-header {
    background-color: #1a1a1a;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    font-size: 0.85rem;
}

.modal-terminal-body {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
    font-size: 0.88rem;
    line-height: 1.6;
}

.cli-log-line {
    margin-bottom: 0.35rem;
    word-break: break-word;
}

.modal-terminal-input-row {
    display: flex;
    align-items: center;
    padding: 0.6rem 1rem;
    background-color: #161616;
    border-top: 1px solid var(--border-color);
}

.terminal-prompt-sym {
    color: var(--accent-pink);
    margin-right: 0.5rem;
    font-weight: 700;
}

.terminal-real-input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: var(--text-cream);
    font-family: var(--font-mono);
    font-size: 0.9rem;
}
