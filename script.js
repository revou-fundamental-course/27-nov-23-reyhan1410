function calculate() {
  
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);
  
    
    var area = 0.5 * base * height;
    var perimeter = base + height + Math.sqrt(base*2 + height*2);
  
   
    document.getElementById('areaResult').innerText = area.toFixed(2);
    document.getElementById('perimeterResult').innerText = perimeter.toFixed(2);
  }
