const textToUpperCase = text => text.toUpperCase();
const truncateText = (text, length, clamp) => {
  clamp = clamp || '...';
  const node = document.createElement('div');
  node.innerHTML = text.replace(/<[^>]+>/g, '');
  const content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

export default { textToUpperCase, truncateText };
