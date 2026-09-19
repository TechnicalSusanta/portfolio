/**
 * RETRO CLI TERMINAL CONTROLLER (Susanta Gorai Portfolio)
 * Handles section switching, keyboard navigation, dynamic uptime,
 * contribution grid, SVG charts, Web Audio API sound FX, and interactive CLI.
 */

(function () {
  'use strict';

  // --- SECTION TABS CONFIGURATION ---
  const SECTIONS = [
    {
      id: 'about',
      name: 'about.txt',
      cmd: '<span class="text-peach"><span class="text-pink">$</span>cat</span> <span class="text-cream">about.txt</span>'
    },
    {
      id: 'career',
      name: 'career.log',
      cmd: '<span class="text-peach"><span class="text-pink">$</span>tail</span> <span class="text-green">-f</span> <span class="text-cream">career.log</span>'
    },
    {
      id: 'skills',
      name: 'skills.md',
      cmd: '<span class="text-peach"><span class="text-pink">$</span>ls</span> <span class="text-green">-a</span> <span class="text-cream">skills</span>'
    },
    {
      id: 'projects',
      name: 'projects.md',
      cmd: '<span class="text-peach"><span class="text-pink">$</span>tar</span> <span class="text-green">-xvzf</span> <span class="text-cream">projects.tar.gz</span>'
    },
    {
      id: 'achievements',
      name: 'achievements.txt',
      cmd: '<span class="text-peach"><span class="text-pink">$</span>sudo</span> <span class="text-green">apt get</span> <span class="text-cream">achievements</span>'
    },
    {
      id: 'contact',
      name: 'contact.yml',
      cmd: '<span class="text-peach"><span class="text-pink">$</span>vi</span> <span class="text-cream">contact.yml</span>'
    }
  ];

  let currentSectionIdx = 0;
  let soundEnabled = true;

  // --- WEB AUDIO API MECHANICAL CLICK SYNTHESIZER ---
  let audioCtx = null;
  function playKeyClickSound(pitch = 1) {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320 * pitch, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.045);
    } catch (e) {
      // Audio not permitted or supported
    }
  }

  // --- NAVIGATION SYSTEM ---
  function switchSection(idx, playSound = true) {
    if (idx < 0) idx = SECTIONS.length - 1;
    if (idx >= SECTIONS.length) idx = 0;

    currentSectionIdx = idx;
    const activeSection = SECTIONS[idx];

    // 1. Update Desktop Tabs
    document.querySelectorAll('.desktop-header .tab-btn').forEach((btn, i) => {
      if (i === idx) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 2. Update Desktop Command Tag
    const desktopCmdTag = document.getElementById('desktop-active-cmd');
    if (desktopCmdTag) {
      desktopCmdTag.innerHTML = activeSection.cmd;
    }

    // 3. Update Desktop Views
    document.querySelectorAll('.section-view').forEach(view => {
      view.classList.remove('active');
    });
    const targetView = document.getElementById('view-' + activeSection.id);
    if (targetView) {
      targetView.classList.add('active');
    }

    // 4. Update Mobile Tabs
    document.querySelectorAll('.mobile-tab-btn').forEach((btn, i) => {
      if (i === idx) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 5. Update Mobile Command Header
    const mobileCmdTag = document.getElementById('mobile-active-cmd');
    if (mobileCmdTag) {
      mobileCmdTag.innerHTML = activeSection.cmd;
    }

    // 6. Sync Mobile Content Container
    const mobileContainer = document.getElementById('mobile-content-container');
    if (mobileContainer && targetView) {
      mobileContainer.innerHTML = targetView.innerHTML;
      // Re-bind buttons inside mobile view if any
      bindDynamicLinks(mobileContainer);
    }

    // Update URL hash without harsh jump
    if (history.replaceState) {
      history.replaceState(null, null, '#' + activeSection.id);
    }

    if (playSound) playKeyClickSound(1.1);
  }

  function bindDynamicLinks(container = document) {
    container.querySelectorAll('.nav-shortcut').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('data-target');
        const foundIdx = SECTIONS.findIndex(s => s.id === targetId);
        if (foundIdx !== -1) {
          switchSection(foundIdx);
        }
      });
    });

    const avatarBtn = container.querySelector('#avatar-toggle-btn');
    if (avatarBtn) {
      avatarBtn.addEventListener('click', toggleAvatarImage);
    }
  }

  // --- AVATAR TOGGLE (Susanta.gif <-> Real Photo) ---
  let isGifAvatar = true;
  function toggleAvatarImage() {
    isGifAvatar = !isGifAvatar;
    const newSrc = isGifAvatar ? 'Susanta.gif' : 'profile.jpg';
    
    // Update desktop & mobile avatars
    document.querySelectorAll('#avatar-img').forEach(img => {
      img.src = newSrc;
    });

    playKeyClickSound(1.3);
  }

  // --- REAL-TIME LIVE UPTIME COUNTER ---
  function initLiveUptime() {
    // Susanta's date of birth: April 7, 2005
    const birthDate = new Date('2005-04-07T00:00:00');
    const uptimeEl = document.getElementById('live-uptime-val');

    function update() {
      const now = new Date();

      // Calculate precise years, months, days using calendar arithmetic
      let years = now.getFullYear() - birthDate.getFullYear();
      let months = now.getMonth() - birthDate.getMonth();
      let days = now.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
        // Days in previous month
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      if (uptimeEl) {
        uptimeEl.innerHTML = `${years}<span class="text-pink">y</span> ${months}<span class="text-pink">m</span> ${days}<span class="text-pink">d</span>`;
      }
    }

    update();
    // Update once per hour (no need for seconds)
    setInterval(update, 3600000);
  }

  // --- GITHUB CONTRIBUTION GRID GENERATOR ---
  const GRID_COLS = 38;
  const GRID_ROWS = 7;

  function generateContributionGrid() {
    const gridEl = document.getElementById('contrib-grid-desktop');
    if (!gridEl) return;

    gridEl.innerHTML = '';
    const today = new Date();

    for (let c = 0; c < GRID_COLS; c++) {
      for (let r = 0; r < GRID_ROWS; r++) {
        const cell = document.createElement('div');
        cell.className = 'contrib-cell';

        // Weighted activity generation for authentic look
        const rand = Math.random();
        let commits = 0;
        if (rand > 0.88) {
          cell.classList.add('lvl-purple-bright');
          commits = Math.floor(Math.random() * 8) + 7;
        } else if (rand > 0.75) {
          cell.classList.add('lvl-purple');
          commits = Math.floor(Math.random() * 5) + 5;
        } else if (rand > 0.55) {
          cell.classList.add('lvl-3');
          commits = Math.floor(Math.random() * 4) + 3;
        } else if (rand > 0.35) {
          cell.classList.add('lvl-2');
          commits = Math.floor(Math.random() * 3) + 1;
        } else if (rand > 0.20) {
          cell.classList.add('lvl-1');
          commits = 1;
        }

        const pastDays = (GRID_COLS - c) * 7 + (6 - r);
        const cellDate = new Date(today);
        cellDate.setDate(today.getDate() - pastDays);
        const dateStr = cellDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

        cell.title = commits > 0 ? `${commits} commits on ${dateStr}` : `No commits on ${dateStr}`;
        cell.dataset.col = c;
        cell.dataset.row = r;
        gridEl.appendChild(cell);
      }
    }

    // Start the live snake game on the grid after it's built
    startContribSnakeGame(gridEl);
  }

  // --- LIVE SNAKE GAME ON CONTRIBUTION GRID ---
  function startContribSnakeGame(gridEl) {
    // Direction vectors: right, down, left, up
    const DIRS = [
      { dc: 1, dr: 0 },
      { dc: 0, dr: 1 },
      { dc: -1, dr: 0 },
      { dc: 0, dr: -1 }
    ];

    let snake = [
      { c: 5, r: 3 },
      { c: 4, r: 3 },
      { c: 3, r: 3 }
    ];
    let dirIdx = 0;
    let food = placeFood(snake);
    let score = 0;
    const MAX_LENGTH = 10;

    function getCell(c, r) {
      if (c < 0 || c >= GRID_COLS || r < 0 || r >= GRID_ROWS) return null;
      return gridEl.querySelector(`[data-col="${c}"][data-row="${r}"]`);
    }

    function placeFood(snakeArr) {
      let fc, fr;
      do {
        fc = Math.floor(Math.random() * GRID_COLS);
        fr = Math.floor(Math.random() * GRID_ROWS);
      } while (snakeArr.some(s => s.c === fc && s.r === fr));
      return { c: fc, r: fr };
    }

    function renderSnake() {
      // Remove existing snake/food classes
      gridEl.querySelectorAll('.snake-head, .snake-body, .snake-food').forEach(el => {
        el.classList.remove('snake-head', 'snake-body', 'snake-food');
      });

      // Render food
      const foodCell = getCell(food.c, food.r);
      if (foodCell) foodCell.classList.add('snake-food');

      // Render snake body
      snake.forEach((seg, i) => {
        const cell = getCell(seg.c, seg.r);
        if (cell) {
          cell.classList.add(i === 0 ? 'snake-head' : 'snake-body');
        }
      });
    }

    function stepSnake() {
      const head = snake[0];
      const dir = DIRS[dirIdx];
      let newC = head.c + dir.dc;
      let newR = head.r + dir.dr;

      // Wall bounce: reverse axis direction if hitting edge
      if (newC < 0 || newC >= GRID_COLS || newR < 0 || newR >= GRID_ROWS) {
        // Try turning to avoid wall - pick a valid random perpendicular
        const perps = [
          (dirIdx + 1) % 4,
          (dirIdx + 3) % 4
        ];
        // Shuffle
        if (Math.random() > 0.5) perps.reverse();
        let turned = false;
        for (const d of perps) {
          const nd = DIRS[d];
          const nc2 = head.c + nd.dc;
          const nr2 = head.r + nd.dr;
          if (nc2 >= 0 && nc2 < GRID_COLS && nr2 >= 0 && nr2 < GRID_ROWS) {
            dirIdx = d;
            newC = nc2;
            newR = nr2;
            turned = true;
            break;
          }
        }
        if (!turned) {
          // Reverse direction as last resort
          dirIdx = (dirIdx + 2) % 4;
          newC = head.c + DIRS[dirIdx].dc;
          newR = head.r + DIRS[dirIdx].dr;
          if (newC < 0 || newC >= GRID_COLS || newR < 0 || newR >= GRID_ROWS) return;
        }
      }

      // Self-collision: try turning if hitting own body
      const hitSelf = snake.some(s => s.c === newC && s.r === newR);
      if (hitSelf) {
        // Try all other directions
        const allDirs = [0, 1, 2, 3].filter(d => d !== dirIdx);
        allDirs.sort(() => Math.random() - 0.5);
        let found = false;
        for (const d of allDirs) {
          const nd = DIRS[d];
          const nc2 = head.c + nd.dc;
          const nr2 = head.r + nd.dr;
          if (nc2 >= 0 && nc2 < GRID_COLS && nr2 >= 0 && nr2 < GRID_ROWS &&
              !snake.some(s => s.c === nc2 && s.r === nr2)) {
            dirIdx = d;
            newC = nc2;
            newR = nr2;
            found = true;
            break;
          }
        }
        if (!found) {
          // Reset snake if completely stuck
          snake = [{ c: Math.floor(GRID_COLS/2), r: Math.floor(GRID_ROWS/2) }];
          food = placeFood(snake);
          renderSnake();
          return;
        }
      }

      // Add new head
      snake.unshift({ c: newC, r: newR });

      // Ate food?
      if (newC === food.c && newR === food.r) {
        score++;
        food = placeFood(snake);
        // Cap snake length so it doesn't cover the whole grid
        if (snake.length > MAX_LENGTH) snake.pop();
      } else {
        snake.pop();
      }

      // Randomly change direction occasionally for organic movement
      if (Math.random() < 0.2) {
        const perp1 = (dirIdx + 1) % 4;
        const perp2 = (dirIdx + 3) % 4;
        const candidate = Math.random() < 0.5 ? perp1 : perp2;
        const nd = DIRS[candidate];
        const nc3 = head.c + nd.dc;
        const nr3 = head.r + nd.dr;
        if (nc3 >= 0 && nc3 < GRID_COLS && nr3 >= 0 && nr3 < GRID_ROWS) {
          dirIdx = candidate;
        }
      }

      renderSnake();
    }

    // Render initial state immediately
    renderSnake();
    // Run snake at 180ms intervals (lively but readable)
    setInterval(stepSnake, 180);
  }

  // --- SVG PROJECTS DONUT CHART ---
  function generateProjectsChart() {
    const pieChart = document.getElementById('projects-pie-chart');
    const legendEl = document.getElementById('projects-chart-legend');
    if (!pieChart || !legendEl) return;

    const domains = [
      { name: 'Agentic AI & IoT', percent: 0.30, color: '#CBA6F7' },
      { name: 'Drones & SLAM', percent: 0.25, color: '#A6D189' },
      { name: 'Autonomous Robotics', percent: 0.20, color: '#FAB387' },
      { name: 'Embedded / PCB', percent: 0.15, color: '#94E2D5' },
      { name: 'Perception & Vision', percent: 0.10, color: '#F38BA8' }
    ];

    pieChart.innerHTML = '';
    legendEl.innerHTML = '';

    let cumulativePercent = 0;
    function getCoordinatesForPercent(pct) {
      const x = Math.cos(2 * Math.PI * pct);
      const y = Math.sin(2 * Math.PI * pct);
      return [x, y];
    }

    domains.forEach(d => {
      const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
      cumulativePercent += d.percent;
      const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
      const largeArcFlag = d.percent > 0.5 ? 1 : 0;

      const pathData = [
        `M ${startX} ${startY}`,
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
        'L 0 0'
      ].join(' ');

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathData);
      path.setAttribute('fill', d.color);
      pieChart.appendChild(path);

      // Legend Item
      const item = document.createElement('div');
      item.className = 'legend-item';
      item.innerHTML = `
        <span class="legend-color-box" style="background-color: ${d.color}"></span>
        <span>${d.name}</span>
      `;
      legendEl.appendChild(item);
    });
  }

  // --- CONTACT FORM HANDLER ---
  function setupContactForm() {
    const form = document.getElementById('contact-cli-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();
      const status = document.getElementById('form-status');

      if (!name || !email || !message) {
        if (status) {
          status.innerHTML = '<span class="text-pink">[ERR] All arguments are required.</span>';
        }
        return;
      }

      if (status) {
        status.innerHTML = '<span class="text-green">[OK] Preparing email client...</span>';
      }
      playKeyClickSound(1.4);

      // Open mailto with formatted subject and body
      const subject = encodeURIComponent(`Collaboration Inquiry from ${name}`);
      const body = encodeURIComponent(`Hi Susanta,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
      window.location.href = `mailto:susantagorai037@gmail.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        if (status) {
          status.innerHTML = '<span class="text-teal">[OK] Mail client invoked. You can also reach directly at susantagorai037@gmail.com</span>';
        }
      }, 1000);
    });
  }

  // --- INTERACTIVE CLI TERMINAL (MODAL) ---
  function setupCliModal() {
    const modal = document.getElementById('terminal-modal');
    const openBtn = document.getElementById('cli-modal-toggle-desktop');
    const closeBtn = document.getElementById('close-terminal-btn');
    const cliInput = document.getElementById('cli-text-input');
    const cliOutput = document.getElementById('cli-output');

    if (!modal || !cliInput) return;

    function openModal() {
      modal.style.display = 'flex';
      cliInput.focus();
      playKeyClickSound(1.2);
    }

    function closeModal() {
      modal.style.display = 'none';
      playKeyClickSound(0.8);
    }

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    cliInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = cliInput.value.trim();
        cliInput.value = '';
        if (cmd) {
          executeCommand(cmd);
        }
      }
    });

    function executeCommand(commandStr) {
      const line = document.createElement('div');
      line.className = 'cli-log-line';
      line.innerHTML = `<span class="text-pink">susanta$</span> ${escapeHtml(commandStr)}`;
      cliOutput.appendChild(line);

      const parts = commandStr.toLowerCase().split(' ');
      const main = parts[0];

      let resp = '';

      switch (main) {
        case 'help':
          resp = `<span class="text-peach">Available commands:</span>
<br/>- <span class="text-green">about, career, skills, projects, achievements, contact</span>: Jump to section
<br/>- <span class="text-green">ls</span>: List sections
<br/>- <span class="text-green">cat [file]</span>: View file content
<br/>- <span class="text-green">whoami</span>: Display bio
<br/>- <span class="text-green">uptime</span>: Show system uptime
<br/>- <span class="text-green">clear</span>: Clear terminal window
<br/>- <span class="text-green">matrix</span>: Initiate cyber matrix stream
<br/>- <span class="text-green">exit</span>: Close this terminal`;
          break;

        case 'clear':
          cliOutput.innerHTML = '';
          return;

        case 'ls':
          resp = `<span class="text-green">about.txt  career.log  skills.md  projects.md  achievements.txt  contact.yml</span>`;
          break;

        case 'about':
        case 'cat':
          if (main === 'about' || parts[1] === 'about.txt' || !parts[1]) {
            switchSection(0);
            resp = `Switched to <span class="text-green">about.txt</span>`;
          } else if (parts[1] === 'career.log') {
            switchSection(1);
            resp = `Switched to <span class="text-green">career.log</span>`;
          } else if (parts[1] === 'skills.md') {
            switchSection(2);
            resp = `Switched to <span class="text-green">skills.md</span>`;
          } else if (parts[1] === 'projects.md') {
            switchSection(3);
            resp = `Switched to <span class="text-green">projects.md</span>`;
          } else if (parts[1] === 'achievements.txt') {
            switchSection(4);
            resp = `Switched to <span class="text-green">achievements.txt</span>`;
          } else if (parts[1] === 'contact.yml') {
            switchSection(5);
            resp = `Switched to <span class="text-green">contact.yml</span>`;
          } else {
            resp = `<span class="text-pink">cat: ${escapeHtml(parts[1])}: No such file or directory</span>`;
          }
          break;

        case 'career':
          switchSection(1);
          resp = `Switched to <span class="text-green">career.log</span>`;
          break;

        case 'skills':
          switchSection(2);
          resp = `Switched to <span class="text-green">skills.md</span>`;
          break;

        case 'projects':
          switchSection(3);
          resp = `Switched to <span class="text-green">projects.md</span>`;
          break;

        case 'achievements':
        case 'honors':
          switchSection(4);
          resp = `Switched to <span class="text-green">achievements.txt</span>`;
          break;

        case 'contact':
          switchSection(5);
          resp = `Switched to <span class="text-green">contact.yml</span>`;
          break;

        case 'whoami':
          resp = `Susanta Gorai &mdash; Autonomous Robotics & Drone Engineer, Embedded Systems Specialist, Smart India Hackathon 2024 Winner.`;
          break;

        case 'uptime':
          resp = document.getElementById('live-uptime-val')?.innerText || '21y 4m 12d';
          break;

        case 'matrix':
          resp = `<span class="text-green">01010011 01010101 01010011 01000001 01001110 01010100 01000001 &mdash; Wake up, Neo...</span>`;
          break;

        case 'sudo':
          resp = `<span class="text-pink">Permission denied: You are already in user@susanta root space.</span>`;
          break;

        case 'exit':
        case 'quit':
          closeModal();
          return;

        default:
          resp = `<span class="text-pink">command not found: ${escapeHtml(main)}. Type 'help' for instructions.</span>`;
      }

      const respDiv = document.createElement('div');
      respDiv.className = 'cli-log-line';
      respDiv.innerHTML = resp;
      cliOutput.appendChild(respDiv);
      cliOutput.scrollTop = cliOutput.scrollHeight;
    }

    function escapeHtml(text) {
      const div = document.createElement('div');
      div.innerText = text;
      return div.innerHTML;
    }

    // Expose open/close for keyboard handler
    window.toggleCliModal = function () {
      if (modal.style.display === 'flex') {
        closeModal();
      } else {
        openModal();
      }
    };
  }

  // --- KEYBOARD CONTROLS (ARROWS, NUMBERS 1-6, TAB, `~`) ---
  function setupKeyboardControls() {
    window.addEventListener('keydown', (e) => {
      // Don't intercept if user is typing in a form or input
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      const isInput = activeTag === 'input' || activeTag === 'textarea';

      // Backquote ` or ~ toggles terminal modal
      if (e.key === '`' || e.key === '~') {
        if (!isInput) {
          e.preventDefault();
          if (window.toggleCliModal) window.toggleCliModal();
          return;
        }
      }

      // Escape closes modal
      if (e.key === 'Escape') {
        const modal = document.getElementById('terminal-modal');
        if (modal && modal.style.display === 'flex') {
          modal.style.display = 'none';
          playKeyClickSound(0.8);
          return;
        }
      }

      if (isInput) return;

      // 1 to 6: Jump to section
      if (e.key >= '1' && e.key <= '6') {
        e.preventDefault();
        const targetIdx = parseInt(e.key, 10) - 1;
        switchSection(targetIdx);
        return;
      }

      // Left arrow: Prev section
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        switchSection(currentSectionIdx - 1);
        return;
      }

      // Right arrow: Next section
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        switchSection(currentSectionIdx + 1);
        return;
      }

      // Tab: Next section
      if (e.key === 'Tab') {
        e.preventDefault();
        switchSection(currentSectionIdx + 1);
        return;
      }
    });
  }

  // --- SOUND TOGGLE SETUP ---
  function setupSoundToggle() {
    const soundBtn = document.getElementById('sound-toggle-desktop');
    if (!soundBtn) return;

    soundBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundBtn.innerText = soundEnabled ? '[SOUND: ON]' : '[SOUND: OFF]';
      if (soundEnabled) {
        playKeyClickSound(1.5);
      }
    });
  }

  // --- SETUP EVENT LISTENERS ---
  function init() {
    // 1. Desktop Tab clicks
    document.querySelectorAll('.desktop-header .tab-btn').forEach((btn, idx) => {
      btn.addEventListener('click', () => switchSection(idx));
    });

    // 2. Mobile Tab clicks
    document.querySelectorAll('.mobile-tab-btn').forEach((btn, idx) => {
      btn.addEventListener('click', () => switchSection(idx));
    });

    // 3. Mobile Next & Prev buttons
    const prevBtn = document.getElementById('mobile-prev-btn');
    const nextBtn = document.getElementById('mobile-next-btn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => switchSection(currentSectionIdx - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => switchSection(currentSectionIdx + 1));
    }

    // 4. Bind dynamic links & Avatar switcher
    bindDynamicLinks(document);

    // 5. Initializations
    initLiveUptime();
    generateContributionGrid();
    generateProjectsChart();
    setupContactForm();
    setupCliModal();
    setupKeyboardControls();
    setupSoundToggle();
    initScrollingLines();

    // 6. Check initial URL hash
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const hashIdx = SECTIONS.findIndex(s => s.id === hash);
    if (hashIdx !== -1) {
      switchSection(hashIdx, false);
    } else {
      switchSection(0, false);
    }
  }

  // --- SLOWLY SCROLLING LONG HORIZONTAL LINES ANIMATION (about section background) ---
  function initScrollingLines() {
    const canvas = document.getElementById('lines-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Create line definitions
    const lines = [];
    const lineCount = 14;
    for (let i = 0; i < lineCount; i++) {
      lines.push({
        y: Math.random() * canvas.height,
        speed: (Math.random() * 0.3 + 0.05) * (Math.random() < 0.5 ? 1 : -1),
        width: Math.floor(Math.random() * 60 + 20),    // pixel-block width
        offset: Math.random() * 2000,                   // horizontal scroll offset
        scrollSpeed: (Math.random() * 0.4 + 0.1) * (Math.random() < 0.5 ? 1 : -1),
        alpha: Math.random() * 0.12 + 0.03,
        color: ['#A6D189', '#FAB387', '#94E2D5', '#CBA6F7', '#f38ba8'][
          Math.floor(Math.random() * 5)
        ],
        blockSize: Math.floor(Math.random() * 4 + 2)  // pixel block height
      });
    }

    function drawLines() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach(line => {
        // Move line vertically
        line.y += line.speed;
        if (line.y < -4) line.y = canvas.height + 4;
        if (line.y > canvas.height + 4) line.y = -4;

        // Scroll horizontally
        line.offset += line.scrollSpeed;

        // Draw as a row of pixel blocks
        ctx.globalAlpha = line.alpha;
        ctx.fillStyle = line.color;

        let x = (line.offset % (line.width * 2 + canvas.width)) - line.width * 2;
        const totalW = canvas.width + line.width * 4;
        while (x < totalW) {
          // Pixel block: draw a rectangle the size of one "pixel"
          const bw = line.blockSize * 2;
          ctx.fillRect(x, Math.floor(line.y), bw, line.blockSize);
          x += line.width + Math.floor(Math.random() * 30 + 8);
        }
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(drawLines);
    }

    drawLines();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
