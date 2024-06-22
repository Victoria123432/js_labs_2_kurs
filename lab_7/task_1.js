const container = document.querySelector('.container');
        const infoBlock = document.getElementById('infoBlock');

        function addNewElement() {
            const newBox = document.createElement('div');
            newBox.classList.add('box');
            newBox.style.height = `${Math.floor(Math.random() * 200) + 50}px`;
            newBox.style.width = `${Math.floor(Math.random() * 200) + 50}px`;
            newBox.textContent = `Блок ${container.children.length + 1}`;
            newBox.setAttribute('data-toggle-id', `block_${container.children.length + 1}`);
            newBox.addEventListener('click', toggleVisibility);
            container.appendChild(newBox);
        }

        function toggleVisibility() {
            console.log('toggle')
            var id = this.getAttribute('data-toggle-id')
            var element = document.querySelector('[data-toggle-id="' + id + '"]')
            console.log(id + ' ' + element)
            if (element) {
              element.classList.toggle('hidden')
            }
          }
          
        function changeBlockSize() {
            const blockNumber = prompt('Введіть номер блоку (від 1 до ' + container.children.length + '):');
            if (blockNumber !== null && !isNaN(blockNumber)) {
                const blockIndex = parseInt(blockNumber) - 1;
                if (blockIndex >= 0 && blockIndex < container.children.length) {
                    const newHeight = prompt('Введіть нову висоту блоку:');
                    const newWidth = prompt('Введіть нову ширину блоку:');
                    if (newHeight !== null && !isNaN(newHeight)) {
                        container.children[blockIndex].style.height = newHeight + 'px';
                        container.children[blockIndex].style.width = newWidth + 'px';
                        getBlocksInfo();
                    }
                } else {
                    alert('Невірний номер блоку!');
                }
            }
        }

        function getBlocksInfo() {
            const containerRect = container.getBoundingClientRect(); 
            const containerScrollTop = container.scrollTop; // Поточна позиція прокрутки контейнера

            const blocks = document.querySelectorAll(".box");
            infoBlock.innerHTML = ""; 

            blocks.forEach((block) => {
                const blockRect = block.getBoundingClientRect(); // Координати блоку відносно вікна браузера
                const blockContainerRect = block.getBoundingClientRect(); // Координати блоку відносно контейнера

                const blockInfo = document.createElement("div");
                blockInfo.innerHTML = `<strong>Блок:</strong> ${block.textContent}<br>
                                           <strong>Висота блоку:</strong> ${
                    blockRect.height
                }px<br>
                                           <strong>Ширина блоку:</strong> ${
                    blockRect.width
                }px<br>
                                           <strong>Координати верхнього лівого кута відносно вікна браузера:</strong> (${
                    blockRect.left
                }px, ${blockRect.top}px)<br>
                                           <strong>Координати верхнього лівого кута відносно контейнера:</strong> (${
                    blockContainerRect.left - containerRect.left
                }px, ${
                    blockContainerRect.top - containerRect.top
                }px)<br>
                                           <hr>`;
                infoBlock.appendChild(blockInfo);
            });

            infoBlock.innerHTML += `<strong>Поточна позиція прокрутки контейнера:</strong> ${containerScrollTop}px`;
        }