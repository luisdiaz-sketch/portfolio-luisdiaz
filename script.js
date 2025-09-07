document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.kpi');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;
      const speed = 100; // menor = más rápido
      const inc = target / speed;
      if(count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 40);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});
