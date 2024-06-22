function toggleChildren(event) {
    const node = event.target.closest('.tree-node');
    if (!node || !node.classList.contains('tree-node')) {
      return;
    }
  
    const children = node.querySelector('.children');
    if (children) {
      children.style.display = children.style.display === 'none' ? 'block' : 'none';
    }
  }