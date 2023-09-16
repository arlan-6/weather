


let btn = document.querySelector("#city");
        btn.addEventListener("blur", sendData);

        var sunsetTime;
        var sunriseTime;
        async function sendData() {
            let city = document.querySelector("#city").value;
            let fromPy = await eel.recv_data(city)();  

            sunriseTime =(fromPy[8])
            sunsetTime = (fromPy[9])
            const nowMin =(fromPy[10])
            console.log(nowMin)
            const clockk =(fromPy[11])
            document.getElementById('time').innerHTML = '<span>'+clockk+'</span>⌚'
            document.getElementById('time').className = 'qzz'
            document.getElementById('range').value = nowMin
            document.getElementById('range').max =  1439
            document.getElementById('range').min =  0
            if (nowMin>sunsetTime){
                document.getElementById('range').className = 'range2'
            }
            document.getElementById('range').addEventListener("input", rnge)
            async function rnge(){
              const x = document.getElementById('range').value 
                const y = Math.floor(x/60)
                //console.log(y);
                const z = x-(y*60)
                //  console.log(z);
                
                document.getElementById('time').innerHTML =  '<span>'+String(y) + ':' + String(z)+'</span>⌚'
            }
            document.getElementById('range').addEventListener("click", range)
            async function range(){
              const x = document.getElementById('range').value 
              const y = Math.floor(x/60)
              //console.log(y);
              const z = x-(y*60)
                let fromP = await eel.rec_data( city, y, z)()
                console.log(fromP);
                document.getElementById('fb8').innerHTML = '🌡️ '+fromP[0]+ '°C'
                document.getElementById('fb8').className = 'qzz'
                document.getElementById('fb9').innerHTML = '🧷 '+fromP[1]
                document.getElementById('fb9').className = 'qzz'
                document.getElementById('fb10').innerHTML = '💧'+fromP[2] + '% ' + ' humidity'
                document.getElementById('fb10').className = 'qzz'
            }

            console.log(fromPy[1]);
            document.getElementById('fb').innerHTML = '🌡️ '+fromPy[0] ;
            document.getElementById('fb').className = 'qzz';
            //document.getElementById('fb1').textContent = fromPy[1]+ '🌅';
            document.getElementById('fb1').innerHTML = '🧷 '+'<span class="span">'+fromPy[1]+'</span>';
            document.getElementById('fb1').className = 'qzz';
            document.getElementById('fb2').textContent = '💧'+fromPy[2] + ' humidity';
            document.getElementById('fb2').className = 'qzz';
            document.getElementById('fb3').textContent = '🍃 '+'Wind speed - ' + fromPy[3] + ' m/s';
            document.getElementById('fb3').className = 'qzz';

            document.getElementById('fb4').innerHTML = '🌡️ '+fromPy[4] ;
            document.getElementById('fb4').className = 'qzz';
            document.getElementById('fb5').innerHTML = '💧'+'<span class="span">'+fromPy[5]+'</span>';
            document.getElementById('fb5').className = 'qzz';
            document.getElementById('fb6').textContent = '🧷 '+fromPy[6] + ' humidity';
            document.getElementById('fb6').className = 'qzz';
            document.getElementById('fb7').textContent = '🍃 '+'Wind speed - ' + fromPy[7] + ' m/s';
            document.getElementById('fb7').className = 'qzz';
            console.log(fromPy[12]);
            if('Snow'===fromPy[12]){
                particlesJS("particles-js", {
                    "particles": {
                      "number": {
                        "value": 400,
                        "density": {
                          "enable": true,
                          "value_area": 800
                        }
                      },
                      "color": {
                        "value": "#ffffff"
                      },
                      "shape": {
                        "type": "image",
                        "stroke": {
                          "width": 0,
                          "color": "#fff"
                        },
                        "polygon": {
                          "nb_sides": 5
                        },
                        "image": {
                          "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
                          "width": 100,
                          "height": 100
                        }
                      },
                      "opacity": {
                        "value": 0.7,
                        "random": false,
                        "anim": {
                          "enable": false,
                          "speed": 1,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 10,
                        "random": true,
                        "anim": {
                          "enable": false,
                          "speed": 20,
                          "size_min": 0.1,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": false,
                        "distance": 50,
                        "color": "#ffffff",
                        "opacity": 0.6,
                        "width": 1
                      },
                      "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "bottom",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                          "enable": true,
                          "rotateX": 300,
                          "rotateY": 1200
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": true,
                          "mode":  "bubble"
                        },
                        "onclick": {
                          "enable": true,
                          "mode": "repulse"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 150,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 100,
                          "size": 10,
                          "duration": 2,
                          "opacity": 8,
                          "speed": 3
                        },
                        "repulse": {
                          "distance": 200,
                          "duration": 0.2
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": true
                  });
                      
            }
            if('Rain'===fromPy[12]){
                particlesJS("particles-js", {
                    "particles": {
                      "number": {
                        "value": 400,
                        "density": {
                          "enable": true,
                          "value_area": 800
                        }
                      },
                      "color": {
                        "value": "#ffffff"
                      },
                      "shape": {
                        "type": "image",
                        "stroke": {
                          "width": 0,
                          "color": '#54a8aaff'
                        },
                        "polygon": {
                          "nb_sides": 5
                        },
                        "image": {
                          "src": "http://pngimg.com/uploads/drops/drops_PNG13484.png",
                          "width": 100,
                          "height": 100
                        }
                      },
                      "opacity": {
                        "value": 0.7,
                        "random": false,
                        "anim": {
                          "enable": false,
                          "speed": 1,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 8,
                        "random": true,
                        "anim": {
                          "enable": false,
                          "speed": 20,
                          "size_min": 0.1,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": false,
                        "distance": 50,
                        "color": "#ffffff",
                        "opacity": 0.6,
                        "width": 1
                      },
                      "move": {
                        "enable": true,
                        "speed": 19,
                        "direction": "bottom-left",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                          "enable": true,
                          "rotateX": 3,
                          "rotateY": 1200
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": true,
                          "mode":  "bubble"
                        },
                        "onclick": {
                          "enable": true,
                          "mode": "repulse"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 150,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 100,
                          "size": 10,
                          "duration": 2,
                          "opacity": 8,
                          "speed": 3
                        },
                        "repulse": {
                          "distance": 200,
                          "duration": 0.2
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": true
                  });
                      
            }
        }
        console.log(sunsetTime);
        var today = new Date();
        var month = today.getMonth();
        console.log(month);
        if((month == 11)||(month == 0)||(month == 1)){
            document.getElementById('box1').className = 'winter'
            document.getElementById('box2').className = 'winter'
            document.getElementById('box').className = 'winter'
            document.getElementById('box4').className = 'winter'
        } 
        if((month == 2)||(month == 3)||(month == 4)){
            document.getElementById('box1').className = 'spring'
            document.getElementById('box2').className = 'spring'
            document.getElementById('box').className =  'spring'
            document.getElementById('box4').className =  'spring'
        } 
        if((month == 5)||(month == 6)||(month == 7)){
            document.getElementById('box1').className = 'summer'
            document.getElementById('box2').className = 'summer'
            document.getElementById('box').className =  'summer'
            document.getElementById('box4').className =  'summer'
        } 
        if((month == 8)||(month == 9)||(month == 10)){
            document.getElementById('box1').className = 'fall'
            document.getElementById('box2').className = 'fall'
            document.getElementById('box').className =  'fall'
            document.getElementById('box4').className =  'fall'
        } 
        

        window.addEventListener("resize", function(){
          window.resizeTo(500, 650);
          });

        
       