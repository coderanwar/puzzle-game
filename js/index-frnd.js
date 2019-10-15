
var defaultTheme ='-webkit-linear-gradient(right bottom , #B10DC9 , #001f3f , #0074D9 , #001f3f , #FF4136 , #85144b , #FF4136 , #001f3f , #B10DC9 , #F012BE, #85144b , #F012BE , #B10DC9, #85144b , #001f3f)';

var backgroundColor ='-webkit-radial-gradient(circle , #B10DC9 , #001f3f , #0074D9 , #001f3f , #FF4136 , #85144b , #FF4136 , #001f3f , #B10DC9 , #F012BE, #85144b , #F012BE , #B10DC9, #85144b , #001f3f)';


//the array with the path to the images
var pathToMyImages = ["kajalPic/kajal1.jpg", "img/kajal2.jpg", "kajalPic/kajal3.jpg", "kajalPic/kajal4.jpg", "kajalPic/kajal5.jpg", "kajalPic/kajal6.jpg", "kajalPic/kajal7.jpg", "kajalPic/kajal8.jpg", "kajalPic/kajal9.jpg", "img/anika2.jpg", "img/m4.jpg","img/m5.jpg", "img/anika3.jpg", "kajalPic/kajal10.jpg", "kajalPic/kajal11.jpg", "kajalPic/kajal12.jpg", "kajalPic/kajal13.jpg", "kajalPic/kajal14.jpg", "kajalPic/kajal15.jpg", "kajalPic/kajal16.jpg", "kajalPic/kajal17.jpg", "kajalPic/kajal18.jpg", "kajalPic/kajal19.jpg", "img/kajal.jpg", "img/kajal2.jpg", "img/m1.jpg", "img/m2.jpg", "img/m3.jpg", "img/anika1.jpg"];

//the array with the path to the images
var kajalAll = ["img/anika4.jpg", "img/m1.jpg", "img/m2.jpg", "img/m3.jpg", "img/anika1.jpg","img/anika2.jpg", "img/anika3.jpg", "img/anika4.jpg", "img/m4.jpg", "img/m5.jpg", "img/m6.jpg", "img/m7.jpg","img/m8.jpg", "img/m9.jpg", "img/m10.jpg", "img/m11.jpg", "k/k1.jpg", "k/k2.jpg", "k/k3.jpg", "k/k4.jpg", "k/k5.jpg", "k/k6.jpg", "k/k7.jpg", "k/k8.jpg", "k/k9.jpg", "k/k10.jpg", "k/k11.jpg", "k/k12.jpg", "k/k13.jpg", "k/k14.jpg", "k/k15.jpg", "k/k16.jpg", "k/k17.jpg", "k/k18.jpg", "k/k19.jpg", "k/k20.jpg", "k/k21.jpg", "k/k22.jpg", "k/k23.jpg", "k/k24.jpg", "k/k25.jpg", "k/k26.jpg", "k/k27.jpg", "k/k28.jpg", "k/k29.jpg", "k/k30.jpg", "k/k31.jpg", "k/k32.jpg", "k/k33.jpg", "k/k34.jpg", "k/k35.jpg", "k/k36.jpg", "k/k37.jpg", "k/k38.jpg", "k/k39.jpg", "k/k40.jpg", "k/k41.jpg", "k/k42.jpg", "k/k43.jpg", "k/k44.jpg", "k/k45.jpg", "k/k46.jpg", "k/k47.jpg", "k/k48.jpg", "k/k49.jpg", "k/k50.jpg"];
                                                
var color = ['white', '#111111', 'red', '#FF00FF', 'purple', 'green', '#4169E1', '#001f3f', '#0074D9', '#7FDBFF', '#2ECC40', '#FF851B', '#F012BE', '#B10DC9', '#69D2E7', '#FA6900', '#00C8F8', '#F07818', '#982395', '#60047A', '#3A0256', '#FF9700', '#FF66CC', '#111111', '#7fdbff', '#00c8f8', '#ff851b', '#b10dc9', 'purple', '#0074d9', '#001f3f', 'green'];

var month = ["Jan" , "Feb", "March", "April", "May", "June", "July" , "Aug", "Sep", "Oct", "Nov", "Dec"];

var day =["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];



            function defaultStyle(){
                var theme = document.getElementById('theme');
                theme.style.background= backgroundColor;
                document.getElementById('changeUser').style.background=backgroundColor;
                document.getElementById('txt').style.background="url('img/header2.jpg') no-repeat";
            }
            
            document.getElementById('changeUser').style.background=backgroundColor;
  
            function kajal() {
                document.getElementById("kajal").innerHTML='<img src="img/kajal.jpg" style="width:100%;" >';
            }
            function kajal2() {
                document.getElementById("kajal").innerHTML='<img src="img/kajal2.jpg" style="width:100%;" >';
            }
            
            function imgClose() {
                var img = document.getElementById('kajal');
                img.innerHTML='<p></p>';
                /*var attr = img.getAttribute('style'); 
                if (img.style.match('display')) {
                    img.setAttribute('style' , 'display:none;');
                }*/
            }
         
        
         
            function prompt1 () {
                var fullName = prompt ("What is your name?","");
                if (fullName !== null || "" || undefined) {
                    alert("Thank you " + fullName + ". Have a good day.");
                } else {
                    fullName = prompt("Who are you? Give me your name:" , "");
                }
                document.getElementById('prompt1').innerHTML = fullName;
            }
         

         
            function startTime() {
                var today=new Date();
                var h=today.getHours();
                var m=today.getMinutes();
                var s=today.getSeconds();
                m = checkTime(m);
                s = checkTime(s);
                var myDate = day[today.getDay()] + " Day , " + month[today.getMonth()] + " " + today.getDate() + " , " + today.getFullYear();
                document.getElementById('txt').innerHTML = h+"<span class='timeBlink'>:</span>"+m+"<span class='timeBlink'>:</span>"+s+"&nbsp;&nbsp;<br><p style='font-size:18px;line-height:0.2;'>"+myDate+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>";
                var t = setTimeout(function(){startTime()},500);
            }

            function checkTime(i) {
                if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
                return i;
            }
         
        
         
            function convert(degree) {
                if (degree == "C") {
                    F = document.getElementById("c").value * 9 / 5 + 32;
                    document.getElementById("f").value = Math.round(F);
                    //document.getElementById("f").value = F.toFixed(2);
                } else  {
                    C = (document.getElementById("f").value -32) * 5 / 9;
                    document.getElementById("c").value = Math.round(C);
                    //document.getElementById("c").value = C.toFixed(2);
                }
            }                        
                         
    
            function setFooter() {
                var image=document.getElementById("kajalPic");
                image.setAttribute('src', 'images/footer_graphic.png');  
                //add footer
                var footer = document.getElementById("addFooter");
                var footerHtml = '<div style="width:100%;height:0;float:right;"></div>';
                footer.innerHTML = footerHtml;
                document.getElementById('kajalAll').style.display='none';
                document.getElementById('math').style.display='none';
                
            }
            
            function changeKajal() {
                var image=document.getElementById("kajalPic");
                
                
        
                var min = 1 , max = pathToMyImages.length;
                var rand = Math.floor(Math.random() * (max - min + 1)) + min;
                
                //control which image is being used
                currentImage = rand - 1;
            
                //sets the image's path
                image.setAttribute('src', pathToMyImages[currentImage]);
                
                
                //add footer
                var footer = document.getElementById("addFooter");
                var footerHtml = '<br><div style="width:100%;height:100px;float:right;"></div>';
                footer.innerHTML = footerHtml;
            }
            
            function changeTheme(){
                var theme = document.getElementById('theme');
                var theme2 = document.getElementById('theme2');
                
                var min = 1 , max = color.length - 8;
                var rand = Math.floor(Math.random() * (max - min + 1)) + min;
                var current = rand - 1;
                
                var ranbow = '-webkit-linear-gradient(left top, '+color[current]+' , '+color[current + 3]+' , '+color[current + 2]+' , '+color[current + 4]+' , '+color[current + 1]+' , '+color[current + 6]+'  , '+color[current + 5]+')';

                var ranbow2 = '-webkit-linear-gradient(right bottom, '+color[current]+' , '+color[current + 3]+' , '+color[current + 2]+' , '+color[current + 4]+' , '+color[current + 1]+' , '+color[current + 6]+'  , '+color[current + 5]+')'
                
                var ranbow3 = '-webkit-radial-gradient(circle , '+color[current]+' , '+color[current + 3]+' , '+color[current + 2]+' , '+color[current + 4]+' , '+color[current + 1]+' , '+color[current + 6]+'  , '+color[current + 5]+')'
                
                
                theme.style.background= ranbow ;//'-webkit-linear-gradient(left top, '+color[current]+' , '+color[current + 3]+' , '+color[current + 2]+' , '+color[current + 4]+' , '+color[current + 1]+' , '+color[current + 6]+'  , '+color[current + 5]+')';
                theme2.style.background = ranbow3;
                if (rand === 1) {
                    theme.style.color=color[current + 3];
                }
                /*else {
                    theme.style.color='white';
                }*/
                //theme.style.color='white';
                var user = document.getElementById('changeUser');
                var message = document.getElementById('message');
                var time = document.getElementById('txt');
                var anwar = document.getElementById('prompt1');
                var header = document.getElementById('txt');
                var content = document.getElementById('hide');
                var setName = document.getElementById('setName');
                var footer = document.getElementById('footer');
                var contact = document.getElementById('contact');
                if (rand > 2 && rand < max - 4){
                    user.style.background=ranbow3;//color[current + 2];
                    user.style.color=color[current + 3];
                    message.style.color=color[current - 2];
                    //message.style.background= ranbow;//'-webkit-linear-gradient(left top, '+color[current]+' , '+color[current + 3]+' , '+color[current + 2]+' , '+color[current + 4]+' , '+color[current + 1]+' , '+color[current + 6]+'  , '+color[current + 5]+')';
                    theme.style.color=color[rand - 2];
                    time.style.color=color[current +  4];
                    //anwar.style.background=ranbow;
                    header.style.background = ranbow;
                    //content.style.background = ranbow;
                    //setName.style.background=ranbow;
                    //footer.style.background = ranbow;
                    //contact.style.background = ranbow;
                    //document.querySelector(div.button).style.background=color[current+2];
                }
                
                if (rand > 5 && rand < 8){
                    theme.style.background=backgroundColor;
                }
                
                if (rand > 8 && rand < max - 6){
                    header.style.background=ranbow3;
                    //message.style.background=ranbow3;
                    userstyle.background=ranbow3;
                }
                
                if (rand > 8 && rand < max - 2){
                    theme.style.background=ranbow3;
                    header.style.background=backgroundColor;
                    //message.style.background=ranbow3;
                    userstyle.background=ranbow3;
                }
                // to change input backgroundColor
                if (rand <= max) {
                    document.getElementById('primeInput').style.background= color[current];
                    document.getElementById('d').style.background= color[current+1];
                    document.getElementById('h').style.background= color[current+3];
                    document.getElementById('o').style.background= color[current+2];
                    document.getElementById('b').style.background= color[current+7];
                    document.getElementById('c').style.background= color[current+5];
                    document.getElementById('f').style.background= color[current+9];
                    document.getElementById('birthDay').style.background= color[current + 4];
                    document.getElementById('getAge').style.background= color[current + 6];
                }
            } // end changeTheme()
            
            function kajalSmall() {
                document.getElementById('kajalAll').style.display='block';
                var image = document.getElementById("kajalAll");
                
                
                
                var min = 1 , max = kajalAll.length;
                var rand = Math.floor(Math.random() * (max - min + 1)) + min;
                
                //control which image is being used
                currentImage = rand - 1;
            
                //sets the image's path
                image.setAttribute('src', kajalAll[currentImage]);
            }
            function anika() {
                document.getElementById("anikaRed").innerHTML='<img src="img/anika4.jpg" style="width:100%">';
            }
            function kajalSmallStarter(){
                document.getElementById('anikaRed').innerHTML='<p></p>';
                kajalSmall();
            }
            
        
