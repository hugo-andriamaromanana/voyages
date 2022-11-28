const hiddenElements = document.querySelectorAll('.blank-hidden');
hiddenElements.forEach((el) => observer.observe(el));