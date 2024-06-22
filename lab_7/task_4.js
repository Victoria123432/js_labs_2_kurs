function createTabs(containerNode) {
    // Створюємо контейнер для кнопок закладок
    const tabButtonsContainer = document.createElement('div');
  
    // Проходимось по всіх дочірніх елементах контейнера
    for (let i = 0; i < containerNode.children.length; i++) {
      const childNode = containerNode.children[i];
  
      const tabName = childNode.getAttribute('data-tabname');
      if (tabName) {
       
        const tabButton = document.createElement('button');
        tabButton.textContent = tabName;
  
        tabButton.addEventListener('click', function() {
          // Перед показом вмісту, сховуємо всі дочірні елементи, крім контейнера кнопок
          for (let j = 0; j < containerNode.children.length; j++) {
            if (containerNode.children[j] !== tabButtonsContainer) {
              containerNode.children[j].style.display = 'none';
            }
          }
          
        
          childNode.style.display = 'block';
          setTimeout(function() {
            childNode.classList.remove('slide-up');
          }, 100);
  
          childNode.classList.add('slide-up');
          // Зняти клас .active з усіх кнопок
          const tabButtons = tabButtonsContainer.querySelectorAll('button');
          tabButtons.forEach(button => button.classList.remove('active'));
  
          tabButton.classList.add('active');
        });
  
       
        tabButtonsContainer.appendChild(tabButton);
  
      
        if (i !== 0) {
          childNode.style.display = 'none';
        }
      }
    }
  
    // Вставляємо контейнер з кнопками закладок перед контейнером з дочірніми елементами
    containerNode.insertBefore(tabButtonsContainer, containerNode.firstChild);
  }
  
  
  const tabsContainer = document.getElementById('tabsContainer');
  createTabs(tabsContainer);
  