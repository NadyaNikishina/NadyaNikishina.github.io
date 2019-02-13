let bodyLookItems = document.querySelectorAll('.character-look__b-item');
let faceLookItems = document.querySelectorAll('.character-look__f-item');
let imageCharacter = document.querySelector('.image__character');
let faceCharacter = document.querySelector('.image__character-face');

let bodyImages = [
    "url('images/body-blue.png')",
    "url('images/body-green.png')",
    "url('images/body-pink.png')"
];

let faceForBlue = [
        "url('images/face-for-blue3.png')",
        "url('images/face-for-blue2.png')",
        "url('images/face-for-blue1.png')"
    ];
 
let faceForGreen = [
        "url('images/face-for-green3.png')",
        "url('images/face-for-green2.png')",
        "url('images/face-for-green1.png')"
    ];

let faceForPink = [
        "url('images/face-for-pink3.png')",
        "url('images/face-for-pink2.png')",
        "url('images/face-for-pink1.png')"
    ];
    


let faceImages = [
    [
        "0 -124px",
        "0 -60px",
        "0 0"
    ],
    
    [
        "-60px -124px",
        "-60px -60px",
        "-60px 0"
    ],
    
    [
        "-120px -124px",
        "-120px -60px",
        "-120px 0"
    ]
    
];



// табы-переключатель картинок

function addThumbBodyClickHandler (thumbnail, image, face) {
    
thumbnail.addEventListener('click', function() {
                                  
     for (let i =0; i < bodyLookItems.length; i++) {
    bodyLookItems[i].classList.remove('character-look__item_is-active');
}
     thumbnail.classList.add('character-look__item_is-active');    
    
    imageCharacter.style.backgroundImage = image;
    
    for (let i =0; i < faceLookItems.length; i++) {
        faceLookItems[i].style.backgroundPosition = face[i];
    }                      
                              
 });
    
}


for (let i = 0; i < bodyLookItems.length; i++) {
  addThumbBodyClickHandler(bodyLookItems[i], bodyImages[i], faceImages[i]);
}




function addThumbFaceClickHandler (thumbnail, blue, green, pink) {
    
thumbnail.addEventListener('click', function() {
                                  
     for (let i =0; i < faceLookItems.length; i++) {
    faceLookItems[i].classList.remove('character-look__item_is-active');
}
     thumbnail.classList.add('character-look__item_is-active');    
   
    if(bodyLookItems[0].classList.contains('character-look__item_is-active')) {
        faceCharacter.style.backgroundImage = blue;
    }
    
    if(bodyLookItems[1].classList.contains('character-look__item_is-active')) {
        faceCharacter.style.backgroundImage = green;
    }
    
    if(bodyLookItems[2].classList.contains('character-look__item_is-active')) {
        faceCharacter.style.backgroundImage = pink;
    }
              
                              
 });
    
}

for (let i = 0; i < bodyLookItems.length; i++) {
  addThumbFaceClickHandler(faceLookItems[i], faceForBlue[i], faceForGreen[i], faceForPink[i]);
}


                  


// slider

 let sliderElem = document.getElementById('slider');
 let thumbElem = sliderElem.children[0];

    thumbElem.onmousedown = function(e) {
      let thumbCoords = getCoords(thumbElem);
      let shiftX = e.pageX - thumbCoords.left;
      

      let sliderCoords = getCoords(sliderElem);

      document.onmousemove = function(e) {
        
        let newLeft = e.pageX - shiftX - sliderCoords.left;

        // курсор ушёл вне слайдера
        if (newLeft < 0) {
          newLeft = 0;
        }
        let rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        thumbElem.style.left = newLeft + 'px';
          
          
          // добавляем и убираем элементы skills
          
          let elemSkills = document.querySelectorAll('.skills__item');
          const juniorCount = 11; // число блоков в массиве elemSkills на этапе junior
          const middleCount = 14;
          const seniorCount = 17;
          let grup1 = document.querySelector('.skills__grup1');
          let grup2 = document.querySelector('.skills__grup2');
          let grup3 = document.querySelector('.skills__grup3');
          
          
          if(newLeft < sliderElem.offsetWidth/4) {
              
              
              function getJuniorSkills() {
                  
                 if(elemSkills.length === middleCount) { 
                  
                let svg = document.querySelector('.skills__svg');
                svg.remove();
                     
                let bashElem = document.querySelector('.skills__bash');
                bashElem.remove();
                
                let es6Elem = document.querySelector('.skills__es6');
                es6Elem.remove();
                     
                 }
    
          }
               getJuniorSkills();
             
              }
          
              
           if(newLeft > sliderElem.offsetWidth/4 && newLeft < sliderElem.offsetWidth/4*3) {
              
              
              function getMiddleSkills() {
                  
                             
                 if(elemSkills.length === juniorCount) {
                  
                  let svg = document.createElement('div');
                  svg.className = "skills__svg skills__item";
                  svg.innerHTML = "<p>SVG</p>";
                  grup2.insertBefore(svg, grup2.children[1]);
                     
                  let bashElem = document.createElement('div');
                  bashElem.className = "skills__bash skills__item";
                  bashElem.innerHTML = "<p>Bash</p>";
                  grup3.appendChild(bashElem);
                     
                  let es6Elem = document.createElement('div');
                  es6Elem.className = "skills__es6 skills__item";
                  es6Elem.innerHTML = "<p>ES6</p>";
                  grup3.appendChild(es6Elem);
                  
                     
                  }
                  
                  if(elemSkills.length === seniorCount) { 
                      
                let nodeElem = document.querySelector('.skills__node');
                nodeElem.remove();
                      
                let expressElem = document.querySelector('.skills__express');
                expressElem.remove();
                      
                let webglElem = document.querySelector('.skills__webgl');
                webglElem.remove();     
                      
             } 
                 
          }
               getMiddleSkills();
              
          }
          
          
          if(newLeft > sliderElem.offsetWidth/4*3) {
              
              
              function getSeniorSkills() {
                       
                  if(elemSkills.length === middleCount) {
                       
                  
                  let nodeElem = document.createElement('div');
                  nodeElem.className = "skills__node skills__item";
                  nodeElem.innerHTML = "<p>Node</p>";
                  grup1.insertBefore(nodeElem, grup1.firstChild);
                      
                  let expressElem = document.createElement('div');
                  expressElem.className = "skills__express skills__item";
                  expressElem.innerHTML = "<p>Express</p>";
                  grup3.appendChild(expressElem);
                      
                  let webglElem = document.createElement('div');
                  webglElem.className = "skills__webgl skills__item";
                  webglElem.innerHTML = "<p>WebGL</p>";
                  grup3.appendChild(webglElem);
                      
                  }
                       
          }
               getSeniorSkills();
       }  
              
    }
          
          
      

      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
      };

      return false; 
    };

    thumbElem.ondragstart = function() {
      return false;
    };

    function getCoords(elem) { 
      let box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };

    }



