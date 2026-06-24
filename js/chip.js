(function() {
    // ============ DOM元素引用 ============
    const chipWrapper = document.getElementById('chipWrapper');
    const chipInner = document.getElementById('chipInner');
    const chipBody = document.getElementById('chipBody');
    const tooltip = document.getElementById('tooltip');
    const tpPinNum = document.getElementById('tpPinNum');
    const tpPinName = document.getElementById('tpPinName');
    const tpBadge = document.getElementById('tpBadge');
    const tpDesc = document.getElementById('tpDesc');
    const tpAlt = document.getElementById('tpAlt');
    const legend = document.getElementById('legend');
    const tableBody = document.getElementById('tableBody');
    const bgParticles = document.getElementById('bgParticles');

    // ============ 从 categoryConfig 获取当前配色 ============
    const scheme = categoryConfig.activeScheme;
    // 从 pinData 中提取实际使用的类型
    const usedTypes = [...new Set(pinData.map(p => p.type))];
    // 过滤出配置中存在且实际使用了（且未被注释）的类别
    const activeCategories = Object.keys(categoryConfig.categories).filter(function(key) {
        return usedTypes.indexOf(key) !== -1;
    });
    // 引脚数据中用到了但配置中未定义的"漏网"类型
    const unknownTypes = usedTypes.filter(function(type) {
        return !categoryConfig.categories[type];
    });

    // 兜底配色 —— 当引脚使用了未定义类型时，统一使用中性灰色
    var fallbackColor = {
        base: '#888888', light: '#aaaaaa',
        bg: 'rgba(136,136,136,0.3)', bgTag: 'rgba(136,136,136,0.2)', colorTag: '#aaaaaa',
        gradH: 'linear-gradient(180deg, #999999 0%, #666666 70%, #444444 100%)',
        gradV: 'linear-gradient(90deg, #666666 0%, #999999 70%, #666666 100%)',
        gradVR: 'linear-gradient(90deg, #666666 0%, #999999 30%, #666666 100%)',
        glow: '0 0 4px rgba(136,136,136,0.4)',
    };

    function getTypeLabel(type) {
        var cat = categoryConfig.categories[type];
        return cat ? cat.name : ('未定义: ' + type);
    }

    function getTypeColor(type) {
        var cat = categoryConfig.categories[type];
        if (!cat || !cat.colors[scheme]) return fallbackColor;
        return cat.colors[scheme];
    }

    // ============ 动态注入类型配色 CSS ============
    function injectColorCSS() {
        var styleId = 'dynamic-pin-colors';
        var old = document.getElementById(styleId);
        if (old) old.remove();

        var css = '';

        // 已定义的类型
        activeCategories.forEach(function(type) {
            var c = getTypeColor(type);
            css += generateTypeCSS(type, c);
        });

        // 未定义的类型 —— 使用兜底灰色
        unknownTypes.forEach(function(type) {
            css += generateTypeCSS(type, fallbackColor);
        });

        var styleEl = document.createElement('style');
        styleEl.id = styleId;
        styleEl.textContent = css;
        document.head.appendChild(styleEl);
    }

    function generateTypeCSS(type, c) {
        var css = '';
        css += '.pin.type-' + type + ' { background: ' + c.gradH + '; box-shadow: ' + c.glow + '; }\n';
        css += '.pin.type-' + type + '.horizontal { background: ' + c.gradH + '; }\n';
        css += '.pin.type-' + type + '.vertical { background: ' + c.gradV + '; }\n';
        css += '.pin.type-' + type + '.vertical.right-pin { background: ' + c.gradVR + '; }\n';
        css += '.tooltip-type-badge.' + type + ' { background: ' + c.bg + '; color: ' + c.light + '; }\n';
        css += '.type-tag.' + type + ' { background: ' + c.bgTag + '; color: ' + c.colorTag + '; }\n';
        css += '.legend-dot.' + type + ' { background: ' + c.base + '; }\n';
        return css;
    }

    // ============ 动态生成图例 ============
    function buildLegend() {
        legend.innerHTML = '';

        // "全部" 按钮
        var allItem = document.createElement('div');
        allItem.className = 'legend-item active';
        allItem.dataset.filter = 'all';
        allItem.innerHTML = '<span class="legend-dot" style="background:#8899aa;border-radius:50%;"></span> 全部';
        legend.appendChild(allItem);

        // 遍历实际使用的已定义类别
        activeCategories.forEach(function(type) {
            var cat = categoryConfig.categories[type];
            var item = document.createElement('div');
            item.className = 'legend-item';
            item.dataset.filter = type;
            item.innerHTML = '<span class="legend-dot ' + type + '"></span> ' + cat.shortName;
            legend.appendChild(item);
        });

        // 未定义类型的兜底图例（灰色 + 问号标记）
        unknownTypes.forEach(function(type) {
            var item = document.createElement('div');
            item.className = 'legend-item';
            item.dataset.filter = type;
            item.innerHTML = '<span class="legend-dot ' + type + '"></span> ' + type + ' ?';
            item.style.opacity = '0.6';
            legend.appendChild(item);
        });
    }

    // ============ 背景粒子生成 ============
    function createBgParticles() {
        var count = 35;
        var frag = document.createDocumentFragment();
        for (var i = 0; i < count; i++) {
            var particle = document.createElement('div');
            particle.classList.add('bg-particle');
            var size = Math.random() * 3 + 1.5;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 18 + 10) + 's';
            particle.style.animationDelay = (Math.random() * 15) + 's';
            particle.style.opacity = Math.random() * 0.4 + 0.15;
            frag.appendChild(particle);
        }
        bgParticles.appendChild(frag);
    }
    createBgParticles();

    // ============ 引脚元素生成 ============
    var allPinElements = [];
    var pinLabelElements = [];

    function createPinElements() {
        var bodyLeft = chipBody.offsetLeft;
        var bodyTop = chipBody.offsetTop;
        var bodyWidth = chipBody.offsetWidth;
        var bodyHeight = chipBody.offsetHeight;

        var pinExtend = bodyWidth * 0.14;

        var oldPins = chipInner.querySelectorAll('.pin,.pin-label');
        oldPins.forEach(function(el) { el.remove(); });
        allPinElements = [];
        pinLabelElements = [];

        var sides = [
            {
                side: 'bottom',
                pinNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                getX: function(i, total, bw) { return bodyLeft + (bw / (total + 1)) * (i + 1); },
                getY: function() { return bodyTop + bodyHeight; },
                pinWidth: bodyWidth / 14,
                pinHeight: pinExtend,
                className: 'horizontal bottom-pin',
                labelOffsetX: 0,
                labelOffsetY: pinExtend + 4,
            },
            {
                side: 'right',
                pinNums: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                getX: function() { return bodyLeft + bodyWidth; },
                getY: function(i, total, bh) { return bodyTop + bh - (bh / (total + 1)) * (i + 1); },
                pinWidth: pinExtend,
                pinHeight: bodyHeight / 14,
                className: 'vertical right-pin',
                labelOffsetX: pinExtend + 6,
                labelOffsetY: 0,
            },
            {
                side: 'top',
                pinNums: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
                getX: function(i, total, bw) { return bodyLeft + bw - (bw / (total + 1)) * (i + 1); },
                getY: function() { return bodyTop - pinExtend; },
                pinWidth: bodyWidth / 14,
                pinHeight: pinExtend,
                className: 'horizontal',
                labelOffsetX: 0,
                labelOffsetY: -pinExtend - 8,
            },
            {
                side: 'left',
                pinNums: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
                getX: function() { return bodyLeft - pinExtend; },
                getY: function(i, total, bh) { return bodyTop + (bh / (total + 1)) * (i + 1); },
                pinWidth: pinExtend,
                pinHeight: bodyHeight / 14,
                className: 'vertical',
                labelOffsetX: -pinExtend - 4,
                labelOffsetY: 0,
            },
        ];

        var frag = document.createDocumentFragment();
        var labelFrag = document.createDocumentFragment();

        sides.forEach(function(sideData) {
            var total = sideData.pinNums.length;
            sideData.pinNums.forEach(function(pinNum, i) {
                var data = pinData.find(function(p) { return p.num === pinNum; });
                if (!data) return;

                var pinEl = document.createElement('div');
                pinEl.classList.add('pin', 'type-' + data.type);
                sideData.className.split(' ').forEach(function(c) { pinEl.classList.add(c); });
                pinEl.dataset.pinNum = pinNum;
                pinEl.dataset.pinType = data.type;

                var x = sideData.getX(i, total, bodyWidth, bodyHeight);
                var y = sideData.getY(i, total, bodyWidth, bodyHeight);

                pinEl.style.position = 'absolute';
                pinEl.style.left = x + 'px';
                pinEl.style.top = y + 'px';
                pinEl.style.width = sideData.pinWidth + 'px';
                pinEl.style.height = sideData.pinHeight + 'px';

                pinEl._pinData = data;
                pinEl._side = sideData.side;

                pinEl.addEventListener('mouseenter', handlePinEnter);
                pinEl.addEventListener('mouseleave', handlePinLeave);
                pinEl.addEventListener('mousemove', handlePinMove);

                frag.appendChild(pinEl);
                allPinElements.push(pinEl);

                var labelEl = document.createElement('span');
                labelEl.classList.add('pin-label');
                labelEl.textContent = pinNum;
                labelEl.style.position = 'absolute';
                labelEl.style.left = (x + sideData.pinWidth / 2 + sideData.labelOffsetX) + 'px';
                labelEl.style.top = (y + sideData.pinHeight / 2 + sideData.labelOffsetY) + 'px';
                labelEl.style.transform = 'translate(-50%, -50%)';
                labelEl.style.pointerEvents = 'none';
                labelEl.dataset.forPin = pinNum;
                labelFrag.appendChild(labelEl);
                pinLabelElements.push(labelEl);
            });
        });

        chipInner.appendChild(frag);
        chipInner.appendChild(labelFrag);
    }

    // ============ Tooltip处理 ============
    var currentPin = null;
    var tooltipVisible = false;

    function handlePinEnter(e) {
        var pinEl = e.currentTarget;
        var data = pinEl._pinData;
        currentPin = pinEl;

        tpPinNum.textContent = '引脚 #' + data.num;
        tpPinName.textContent = data.name;
        tpBadge.textContent = getTypeLabel(data.type);
        tpBadge.className = 'tooltip-type-badge ' + data.type;
        tpDesc.textContent = data.desc;
        tpAlt.textContent = data.alt || '';

        tooltip.classList.add('visible');
        tooltipVisible = true;

        var labelEl = pinLabelElements.find(function(l) { return parseInt(l.dataset.forPin) === data.num; });
        if (labelEl) labelEl.classList.add('hovered');

        positionTooltip(e);
    }

    function handlePinLeave(e) {
        var pinEl = e.currentTarget;
        var data = pinEl._pinData;
        currentPin = null;
        tooltip.classList.remove('visible');
        tooltipVisible = false;

        var labelEl = pinLabelElements.find(function(l) { return parseInt(l.dataset.forPin) === data.num; });
        if (labelEl) labelEl.classList.remove('hovered');
    }

    function handlePinMove(e) {
        if (tooltipVisible) {
            positionTooltip(e);
        }
    }

    function positionTooltip(e) {
        var tooltipRect = tooltip.getBoundingClientRect();
        var tw = tooltipRect.width;
        var th = tooltipRect.height;
        var vw = window.innerWidth;
        var vh = window.innerHeight;

        var left = e.clientX;
        var top = e.clientY;

        if (currentPin && currentPin._side) {
            switch (currentPin._side) {
                case 'top':    top = e.clientY - th / 2 - 20; break;
                case 'bottom': top = e.clientY + th / 2 + 20; break;
                case 'left':   left = e.clientX - tw / 2 - 20; break;
                case 'right':  left = e.clientX + tw / 2 + 20; break;
            }
        }

        left = Math.max(tw / 2 + 8, Math.min(vw - tw / 2 - 8, left));
        top = Math.max(th / 2 + 8, Math.min(vh - th / 2 - 8, top));

        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
    }

    // ============ 图例筛选功能 ============
    var activeFilter = 'all';

    legend.addEventListener('click', function(e) {
        var item = e.target.closest('.legend-item');
        if (!item) return;

        var filter = item.dataset.filter;
        if (!filter) return;

        legend.querySelectorAll('.legend-item').forEach(function(el) { el.classList.remove('active'); });
        item.classList.add('active');
        activeFilter = filter;

        applyFilter(filter);
    });

    function applyFilter(filter) {
        if (filter === 'all') {
            chipWrapper.classList.remove('dim-unselected');
            allPinElements.forEach(function(pin) { pin.classList.remove('highlighted'); });
        } else {
            chipWrapper.classList.add('dim-unselected');
            allPinElements.forEach(function(pin) {
                if (pin.dataset.pinType === filter) {
                    pin.classList.add('highlighted');
                } else {
                    pin.classList.remove('highlighted');
                }
            });
        }
    }

    // ============ 表格生成 ============
    function generateTable() {
        var frag = document.createDocumentFragment();
        pinData.forEach(function(data) {
            var tr = document.createElement('tr');
            tr.innerHTML =
                '<td class="td-pin">' + data.num + '</td>' +
                '<td class="td-name">' + data.name + '</td>' +
                '<td class="td-type"><span class="type-tag ' + data.type + '">' + getTypeLabel(data.type) + '</span></td>' +
                '<td>' + data.desc + '</td>' +
                '<td style="color:#8899aa;font-size:0.7rem;">' + (data.alt || '—') + '</td>';
            tr.dataset.pinNum = data.num;
            tr.dataset.pinType = data.type;
            tr.style.cursor = 'pointer';
            tr.addEventListener('click', function() {
                var pinEl = allPinElements.find(function(p) { return parseInt(p.dataset.pinNum) === data.num; });
                if (pinEl) {
                    pinEl.style.transition = 'all 0.1s ease';
                    pinEl.style.filter = 'brightness(3)';
                    pinEl.style.boxShadow = '0 0 30px rgba(255,255,255,1)';
                    pinEl.style.zIndex = '200';
                    setTimeout(function() {
                        pinEl.style.filter = '';
                        pinEl.style.boxShadow = '';
                        pinEl.style.zIndex = '';
                    }, 600);
                    document.querySelector('.hero-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
                    var rect = pinEl.getBoundingClientRect();
                    var fakeEvent = {
                        clientX: rect.left + rect.width / 2,
                        clientY: rect.top + rect.height / 2,
                    };
                    currentPin = pinEl;
                    tpPinNum.textContent = '引脚 #' + data.num;
                    tpPinName.textContent = data.name;
                    tpBadge.textContent = getTypeLabel(data.type);
                    tpBadge.className = 'tooltip-type-badge ' + data.type;
                    tpDesc.textContent = data.desc;
                    tpAlt.textContent = data.alt || '';
                    tooltip.classList.add('visible');
                    tooltipVisible = true;
                    positionTooltip(fakeEvent);
                    setTimeout(function() {
                        tooltip.classList.remove('visible');
                        tooltipVisible = false;
                        currentPin = null;
                    }, 1500);
                }
            });
            frag.appendChild(tr);
        });
        tableBody.appendChild(frag);
    }

    // ============ 初始化 ============
    function init() {
        injectColorCSS();
        buildLegend();
        createPinElements();
        generateTable();

        console.log('STM32F103C8T6 芯片展示已就绪');
        console.log('  配色方案: ' + categoryConfig.schemes[scheme]);
        console.log('  活跃类别: ' + activeCategories.map(function(t) { return categoryConfig.categories[t].name; }).join(', '));
        if (unknownTypes.length > 0) {
            console.warn('  未定义类型: ' + unknownTypes.join(', ') + ' —— 已使用灰色兜底，请在 data.js 的 categoryConfig 中补充定义');
        }
        console.log('  ' + pinData.length + ' 个引脚已渲染');
        console.log('  悬停查看引脚详情 | 点击图例筛选 | 点击表格行定位引脚');
        console.log('  修改 data.js 中的 activeScheme 可切换配色: dark / vivid / pastel');

        var resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                createPinElements();
                if (activeFilter !== 'all') {
                    applyFilter(activeFilter);
                }
            }, 300);
        });

        chipWrapper.addEventListener('mouseleave', function() {
            if (tooltipVisible) {
                tooltip.classList.remove('visible');
                tooltipVisible = false;
                currentPin = null;
                pinLabelElements.forEach(function(l) { l.classList.remove('hovered'); });
            }
        });

        document.addEventListener('mousemove', function(e) {
            if (tooltipVisible && currentPin && !e.target.closest('.pin')) {
                var isOnTooltip = e.target.closest('.tooltip-container');
                var isOnPin = e.target.closest('.pin');
                if (!isOnTooltip && !isOnPin) {
                    tooltip.classList.remove('visible');
                    tooltipVisible = false;
                    currentPin = null;
                    pinLabelElements.forEach(function(l) { l.classList.remove('hovered'); });
                }
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();