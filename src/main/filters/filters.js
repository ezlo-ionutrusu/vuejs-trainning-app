import Vue from 'vue';

Vue.filter('uppercase', text => text.toUpperCase());
Vue.filter('truncate', (text, length, clamp) => {
  clamp = clamp || '...';
  const node = document.createElement('div');
  node.innerHTML = text.replace(/<[^>]+>/g, '');
  const content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
});
