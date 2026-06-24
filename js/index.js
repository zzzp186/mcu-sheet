<<<<<<< HEAD
(function() {
    var chipListEl = document.getElementById('chipList');
    if (!chipListEl || typeof chipCatalog === 'undefined') return;

    if (!Array.isArray(chipCatalog) || chipCatalog.length === 0) {
        chipListEl.textContent = '当前暂无可查看的芯片。';
        return;
    }

    chipCatalog.forEach(function(chip) {
        var card = document.createElement('a');
        card.className = 'chip-card';
        card.href = chip.page || '#';
        card.innerHTML = '<div class="chip-card-title">' + chip.title + '</div>' +
                         '<div class="chip-card-subtitle">' + chip.subtitle + '</div>' +
                         '<div class="chip-card-tags">' + (chip.tags ? chip.tags.join(' · ') : '') + '</div>';
        chipListEl.appendChild(card);
    });
})();
=======
(function() {
    var chipListEl = document.getElementById('chipList');
    if (!chipListEl || typeof chipCatalog === 'undefined') return;

    if (!Array.isArray(chipCatalog) || chipCatalog.length === 0) {
        chipListEl.textContent = '当前暂无可查看的芯片。';
        return;
    }

    chipCatalog.forEach(function(chip) {
        var card = document.createElement('a');
        card.className = 'chip-card';
        card.href = chip.page || '#';
        card.innerHTML = '<div class="chip-card-title">' + chip.title + '</div>' +
                         '<div class="chip-card-subtitle">' + chip.subtitle + '</div>' +
                         '<div class="chip-card-tags">' + (chip.tags ? chip.tags.join(' · ') : '') + '</div>';
        chipListEl.appendChild(card);
    });
})();
>>>>>>> 53609b4b186f5c5178629d93f4e4c170b42854c9
