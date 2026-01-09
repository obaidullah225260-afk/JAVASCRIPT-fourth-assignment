                      //JavaScript Assignment (14)
                     //Start Of The Chapter (14) 
                       //Chapter Name ()
                             // Chapter 14 Q (01, 02 , 03, 04, 05, 06,)
                              let emptyArray = [];                                                     // 1
                              let emptyArrayObjectNotation = new Array();                              // 2
                              let stringArray = ["Value1", "Value2", "Value3", "Value4"];              // 3
                              let numberArray = [0, 1, 0, 1, 0]                                        // 4
                              let booleanArray = [true, false, false, true];                           // 5
                              let mixedArray = ["Value", false, 0, 1]                                  // 6
                        // Chapter 14 Q (07)
                      let edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]
                      document.getElementById("one").innerHTML =
                           "<h2>Qualifications in Pakistan</h2>" +
                           "<ul>" +
                           "<li>" + edu[0] + "</li>" +
                           "<li>" + edu[1] + "</li>" +
                           "<li>" + edu[2] + "</li>" +
                           "<li>" + edu[3] + "</li>" +
                           "<li>" + edu[4] + "</li>" +
                           "<li>" + edu[5] + "</li>" +
                           "<li>" + edu[6] + "</li>" +
                           "<li>" + edu[7] + "</li>" +
                           "</ul>";
                           //End Of The Chapter (14)

                      //JavaScript Assignment (15)
                     //Start Of The Chapter (15) 
                       //Chapter Name ()
                        // Chapter 15 Q (01)
                      let stu = ["Obaid", "Rafa", "Aliyan"]
                      let score = [400, 390, 470]
                      let total = 500;
                      let percOf1 = score[0] / total * 100
                      let percOf2 = score[1] / total * 100
                      let percOf3 = score[2] / total * 100
                      document.getElementById('two').innerHTML = "<p> " + stu[0] + " Scored " + score[0] + " With percentage of " + percOf1 + "%! <br> " +
                      "<p> " + stu[1] + " Scored " + score[1] + " With percentage of " + percOf2 + "%! <br>" +
                      "<p> " + stu[2] + " Scored " + score[2] + " With percentage of " + percOf3 + "%! <br> ";
                          // Chapter 15 Q (02)
                         let color = ["Red", "Green", "Blue"]
                         document.getElementById('threeA').innerHTML = color;
                         function add() {
                              let add = prompt("Enter a color to add!")
                              color.unshift(add)
                              document.getElementById('threeA').innerHTML = color;
                         }
                         // Chapter 15 Q (03)
                         function addE() {
                              let addE = prompt("Enter a color to add!")
                              color.push(addE)
                              document.getElementById('threeA').innerHTML = color;
                         }
                                               function addR() {
                              color.unshift("Orange", "purple")
                              document.getElementById('threeA').innerHTML = color;
                         }
                         // Chapter 15 Q (04)
                         function delF() {
                              color.shift();
                              document.getElementById('threeA').innerHTML = color;
                         }
                         // Chapter 15 Q (05)
                         function delL() {
                              color.pop();
                              document.getElementById('threeA').innerHTML = color;
                         }
                         // Chapter 15 Q (06)
                         function customAdd() {
                              let indexC = prompt("Enter color to Add!")
                              let addC = +prompt("Enter Index number where to start it?")
                                color.splice(addC, 0, indexC)
                             document.getElementById('threeA').innerHTML = color;
                         }
                         // Chapter 15 Q (07)
                         function customDel() {
                               let ind = +prompt("From which Index u wanted to delete?")
                               let quan = +prompt("How many cell u wanted to delete?")
                               color.splice(ind, quan)
                               document.getElementById('threeA').innerHTML = color;
                         }
                             //End Of The Chapter (15)

                      //JavaScript Assignment (16)
                     //Start Of The Chapter (16) 
                       //Chapter Name ()
                        // Chapter 16 Q (01)
                         let score1 = [320, 220, 480, 120]
                         document.getElementById('tenA').innerHTML = "<br>" + score1;
                         score1.sort()
                         document.getElementById('tenB').innerHTML = score1;
                        // Chapter 16 Q (01)
                         let city = ["Karachi", "France", "Germany", "Dubai"]
                         let copy = city.slice(2, 4)
                         document.getElementById('ele').innerHTML = "<br>" + copy;
                          // Chapter 16 Q (02)
                         let arr = ["This", "is", "my", "Cat!"];
                         document.getElementById('tewA').innerHTML = "<br><h1>Array</h1>" + arr;
                         let arrJ = arr.join(" ")
                         document.getElementById('tewB').innerHTML = "<br> <h1>String</h1>" + arrJ;
                          // Chapter 16 Q (03)
                         let queue = [];

                         queue.push("Keyboard");
                         queue.push("Mouse");
                         queue.push("Printer");
 
                          document.getElementById('tteenA').innerHTML = "<br>" + queue.shift();
                          document.getElementById('tteenB').innerHTML = queue.shift();
                           // Chapter 16 Q (04)
                    let stack = [];
                         
                           stack.push("Biryani");
                           stack.push("Sushi");
                           stack.push("Beefroll");
                                       //  lets output
                        document.getElementById('fteenA').innerHTML = "<br>" + stack.pop();
                        document.getElementById('fteenA').innerHTML = stack.pop();
                          // Chapter 16 Q (05)
                         let phones = ["Apple", "Samsung", "Realme", "Lava", "Oneplus", "Googlepixel"];
                                        // lets output                              
                         document.getElementById("fteen").innerHTML =
                         '<option selected>Open this select menu</option>' +
                         '<option value="1">' + phones[0] + '</option>' +
                         '<option value="2">' + phones[1] + '</option>' +
                         '<option value="3">' + phones[2] + '</option>' +
                         '<option value="4">' + phones[3] + '</option>' +
                         '<option value="5">' + phones[4] + '</option>' +
                         '<option value="6">' + phones[5] + '</option>';
                            //End Of The Chapter (16)