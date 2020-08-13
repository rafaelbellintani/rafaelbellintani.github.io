'use strict'
            //Javascript

            //Exercicio 1
            var buttonEvent = document.querySelector('#buttonEventOne');
            buttonEventOne.onclick = function() {
                var createBox = document.createElement('div');
                var breakLine = document.createElement('br');
                var hereIsContainerOne = document.querySelector('#firstExercise');

                createBox.setAttribute('class','thebox');
                createBox.style.width = 100;
                createBox.style.height = 100;
                createBox.style.background = '#fc0303';

                hereIsContainerOne.appendChild(breakLine);
                hereIsContainerOne.appendChild(createBox);
                hereIsContainerOne.appendChild(breakLine);
            }

            //Exercicio 2

            var buttonEvent = document.querySelector('#buttonEventTwo');
            var b = 0;
            buttonEventTwo.onclick = function() {
                b++;
                var createBox = document.createElement('div');
                var attr = "changeColor("+b+");";
                createBox.setAttribute('id', 'boxColor'+b);
                createBox.setAttribute('onmouseover', attr);
                createBox.setAttribute('class','thebox');
                var breakLine = document.createElement('br');
                var hereIsContainerTwo = document.querySelector('#twoExercise');
               
               
                createBox.style.width = 100;
                createBox.style.height = 100;
                createBox.style.background = '#fc0303';

                hereIsContainerTwo.appendChild(breakLine);
                hereIsContainerTwo.appendChild(createBox);
                hereIsContainerTwo.appendChild(breakLine);
                
            }

            function changeColor(boxNumber) {
                     //Função de cor aleatória
                    function getRandomColor() {
                    var letters = "0123456789ABCDEF";
                    var color = "#";
                    for (var i = 0; i < 6; i++) {
                        color += letters[Math.floor(Math.random() * 16)];
                        }
                    return color;
                    }
                    
                    var newColor = getRandomColor();
                    document.querySelector('#boxColor'+boxNumber).style.background = newColor;
                    console.log(newColor);
                }
        
                

            //3ª Exercício

            var nomes = ["Diego", "Gabriel", "Lucas"];
            var hereIsContainerThree = document.querySelector('#threeExercise');
            var ulList = document.createElement('ul');
            hereIsContainerThree.appendChild(ulList);
            
            var i = 0;
           do {   
                var liElement = document.createElement('li');
                liElement.textContent = nomes[i];
                ulList.appendChild(liElement);
                i++;
            } while (i<=2);



            //4º Exercício

            var nomes = ["Diego", "Gabriel", "Lucas"];
            var hereIsContainerFour = document.querySelector('#fourExercise');
            var myUl = document.createElement('ul');
            myUl.setAttribute('id', 'nameList');
            hereIsContainerFour.appendChild(myUl);
            
           

           //Função adicionar
            function adicionar() {    
                document.querySelector('#nameList').innerHTML = '';
                var inputName = document.getElementsByName('nome')[0].value;
                  if (inputName != "") {
                        nomes.push(inputName);
                        var nameSize = nomes.length;
                        for (var a=0; a<=nameSize-1; a++) {
                            var myLi = document.createElement('li');
                            var texto = document.createTextNode(nomes[a]);
                            myLi.appendChild(texto);
                            myUl.appendChild(myLi); 
                        } 
                    document.getElementsByName('nome')[0].value = '';  
                    }
                    else {
                        alert("Valor inválido, digite algo dentro da box para adicionar.");
                    }
                    document.getElementsByName('nome')[0].focus();     
            }
        



            //..

            function unHiddenOne(){
                let hereIsContainerOne = document.querySelector('#firstExercise');
                let hereIsContainerTwo = document.querySelector('#twoExercise');
                let hereIsContainerThree = document.querySelector('#threeExercise');
                let hereIsContainerFour = document.querySelector('#fourExercise');
                hereIsContainerOne.removeAttribute('hidden');
                hereIsContainerTwo.setAttribute('hidden', '');
                hereIsContainerThree.setAttribute('hidden', '');
                hereIsContainerFour.setAttribute('hidden', '');
                }

            function unHiddenTwo(){
                let hereIsContainerOne = document.querySelector('#firstExercise');
                let hereIsContainerTwo = document.querySelector('#twoExercise');
                let hereIsContainerThree = document.querySelector('#threeExercise');
                let hereIsContainerFour = document.querySelector('#fourExercise');
                hereIsContainerOne.setAttribute('hidden', '');
                hereIsContainerTwo.removeAttribute('hidden');
                hereIsContainerThree.setAttribute('hidden', '');
                hereIsContainerFour.setAttribute('hidden', '');
                }

            function unHiddenThree(){
                let hereIsContainerOne = document.querySelector('#firstExercise');
                let hereIsContainerTwo = document.querySelector('#twoExercise');
                let hereIsContainerThree = document.querySelector('#threeExercise');
                let hereIsContainerFour = document.querySelector('#fourExercise');
                hereIsContainerOne.setAttribute('hidden', '');
                hereIsContainerTwo.setAttribute('hidden', '');
                hereIsContainerThree.removeAttribute('hidden');
                hereIsContainerFour.setAttribute('hidden', '');
                }

            function unHiddenFour(){
                let hereIsContainerOne = document.querySelector('#firstExercise');
                let hereIsContainerTwo = document.querySelector('#twoExercise');
                let hereIsContainerThree = document.querySelector('#threeExercise');
                let hereIsContainerFour = document.querySelector('#fourExercise');
                hereIsContainerOne.setAttribute('hidden', '');
                hereIsContainerTwo.setAttribute('hidden', '');
                hereIsContainerThree.setAttribute('hidden', '');
                hereIsContainerFour.removeAttribute('hidden');
                }