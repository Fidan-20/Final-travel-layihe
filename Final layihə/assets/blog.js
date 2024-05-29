fetch('assets/blog.json')
.then(response => response.json())
.then(data => {
  const row1 = document.getElementById('row1');
  const row2 = document.getElementById('row2');

  data.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('picture');
    
    const img = document.createElement('img');
    img.src = item.image;
    div.appendChild(img);
    
    const h3 = document.createElement('h3');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = item.text;
    h3.appendChild(a);
    div.appendChild(h3);

    if (index < data.length - 3) {
      row1.appendChild(div);
    } else {
      row2.appendChild(div);
    }
  });
})
.catch(error => console.error('Error fetching data:', error));
img.style.width = '70%'; // Make these images larger
img.style.height = 'auto';




