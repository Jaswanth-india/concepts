let globalDelay=0;
let localDelay=0;
let parent=document.querySelector("section:nth-of-type(2) div div:nth-of-type(1)");
setTimeout(()=>{
    document.querySelector("h1").classList.add("transperence");
},1000);
setTimeout(()=>{
    document.querySelector("h1").style.display="none";
},1900)
setTimeout(()=>{
    document.querySelector("article").style="display:flex;justify-content:center;align-items:center;"
    document.querySelector("section div").style="border:5px solid green";
    setTimeout(()=>{
        document.querySelector("section div").style="border:2px solid";
        document.querySelector("section:nth-of-type(2) div").style="border:5px solid green";
        function inIfAboveRecursor(number){
            setTimeout(()=>{
                if(number>0){
                    currentElement=document.createElement("span");
                    parent.appendChild(currentElement);
                    currentElement.innerHTML=number;
                    currentElement.classList.add("animate");
                    inIfAboveRecursor(number-1);
                }
            },200);
        }
        inIfAboveRecursor(10);
        setTimeout(()=>{
            document.querySelector("section:nth-of-type(2) div").style="border:2px solid";
            document.querySelector("section div").style="border:5px solid green";
            setTimeout(()=>{
                document.querySelector("section div div:nth-of-type(4)").innerHTML="";
                document.querySelector("section div div:nth-of-type(2)").classList.add("transperenceRemoval");
                document.querySelector("section div div:nth-of-type(2)").innerHTML="console.log(number);";
                setTimeout(()=>{
                    document.querySelector("section div").style="border:2px solid";
                    document.querySelector("section:nth-of-type(2) div").style="border:5px solid green";
                    parent=document.querySelector("section:nth-of-type(2) div div:nth-of-type(2)");
                    function outIfAboveRecursor(number){
                        setTimeout(()=>{
                            currentElement=document.createElement("span");
                            parent.appendChild(currentElement);
                            currentElement.innerHTML=number;
                            currentElement.classList.add("animate");
                            if(number>0){
                                outIfAboveRecursor(number-1);
                            }
                        },200);
                    }
                    outIfAboveRecursor(10);
                    setTimeout(()=>{
                        document.querySelector("section:nth-of-type(2) div").style="border:2px solid";
                        document.querySelector("section div").style="border:5px solid green";
                        setTimeout(()=>{
                            document.querySelector("section div div:nth-of-type(2)").innerHTML="";
                            document.querySelector("section div div:nth-of-type(6)").classList.add("transperenceRemoval");
                            document.querySelector("section div div:nth-of-type(6)").innerHTML="console.log(number);";
                            setTimeout(()=>{
                                document.querySelector("section:nth-of-type(2) div").style="border:5px solid green";
                                document.querySelector("section div").style="border:2px solid";
                                parent=document.querySelector("section:nth-of-type(2) div div:nth-of-type(3)");
                                function inIfBelowRecursor(number){
                                    setTimeout(()=>{
                                        if(number<11){
                                            currentElement=document.createElement("span");
                                            parent.appendChild(currentElement);
                                            currentElement.innerHTML=number;
                                            currentElement.classList.add("animate");
                                            inIfBelowRecursor(number+1);
                                        }
                                    },200);
                                }
                                inIfBelowRecursor(1);
                                setTimeout(()=>{
                                    document.querySelector("section:nth-of-type(2) div").style="border:2px solid";
                                    document.querySelector("section div").style="border:5px solid green";
                                    setTimeout(()=>{
                                        document.querySelector("section div div:nth-of-type(6)").innerHTML="";
                                        document.querySelector("section div div:nth-of-type(8)").classList.add("transperenceRemoval");
                                        document.querySelector("section div div:nth-of-type(8)").innerHTML="console.log(number);";
                                        setTimeout(()=>{
                                            document.querySelector("section:nth-of-type(2) div").style="border:5px solid green";
                                            document.querySelector("section div").style="border:2px solid";
                                            parent=document.querySelector("section:nth-of-type(2) div div:nth-of-type(4)");
                                            function outIfBelowRecursor(number){
                                                setTimeout(()=>{
                                                    if(number<11){
                                                        currentElement=document.createElement("span");
                                                        parent.appendChild(currentElement);
                                                        currentElement.innerHTML=number;
                                                        currentElement.classList.add("animate");
                                                        outIfBelowRecursor(number+1);
                                                    }
                                                },200);
                                            }
                                            outIfBelowRecursor(0);
                                            setTimeout(()=>{
                                                document.querySelector("section:nth-of-type(2) div").style="border:2px solid";
                                            },3000);
                                        },1500);
                                    },500);
                                },3000);
                            },1500);
                        },500);
                    },3000);
                },1500);
            },500);
        },3000);
    },1500);
},2500);