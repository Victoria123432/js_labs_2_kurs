const container = document.querySelector('.container');
function addBlock() {
    var blockContent = prompt("Enter block content:");
    console.log(blockContent);
    if (blockContent !== null && blockContent.trim() !== "") {
        
        const newBox = document.createElement('div');
        newBox.classList.add('block');
        newBox.textContent = blockContent;
        newBox.style.height = `${Math.floor(Math.random() * 200) + 50}px`;
        newBox.style.width = `${Math.floor(Math.random() * 200) + 50}px`;
        var randomColor = getRandomColor();
        newBox.style.backgroundColor = randomColor;
        newBox.ondblclick = function() {
            newBox.classList.remove('visible');
            setTimeout(function() {
                container.removeChild(newBox);
            }, 500);
        };
        newBox.onclick = function() {
            var rect = newBox.getBoundingClientRect(); // Отримати прямокутник обмежень блоку
            var infoElement = document.getElementById('info');
            infoElement.innerHTML = "Координати блоку:<br>" +
                                    "Верхня границя: " + rect.top + "<br>" +
                                    "Права границя: " + rect.right + "<br>" +
                                    "Нижня границя: " + rect.bottom + "<br>" +
                                    "Ліва границя: " + rect.left + "<br>" +
                                    "Ширина блоку: " + rect.width + "<br>" +
                                    "Висота блоку: " + rect.height;
        };
        
        newBox.onmouseenter = function() {
            newBox.style.backgroundColor = getRandomColor(); // Змінюємо колір при наведенні
        };
        
        
        
        container.appendChild(newBox);
        setTimeout(function() {  
            newBox.classList.add('visible');
            newBox.style.transform = 'translateY(0)'; // Додано трансформацію для зміни положення при додаванні
            scrollToBottom(); 
        }, 100);
    } 
}


const getRandomColor = function() { 
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function scrollToBottom() {
    container.scrollTop = container.scrollHeight - container.clientHeight;
}

document.getElementById('styleSelector').onchange = function() {
    var selectedStyle = this.value;
    if (selectedStyle) {
        applyStyle(selectedStyle);
    }
};

function applyStyle(style) {
    var blocks = document.querySelectorAll('.block');
    blocks.forEach(function(block) {
        block.style.backgroundColor = style;
    });
}
