    /* ===== reveal on scroll (works every time you enter/leave) ===== */
    document.addEventListener('DOMContentLoaded', () => {
      const reveals = document.querySelectorAll('.reveal');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      }, { threshold: 0.18 });

      reveals.forEach(el => observer.observe(el));
    });

    /* ===== scroll progress bar ===== */
    window.addEventListener('scroll', () => {
      const top = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = (top / height) * 100;
      const progressBar = document.getElementById('progress');
      if (progressBar) {
        progressBar.style.width = pct + '%';
      }
    });