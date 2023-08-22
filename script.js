const quoteElement=document.getElementById("quote"),inputArea=document.getElementById("inputArea"),startButton=document.getElementById("startButton"),resultElement=document.getElementById("result");let currentQuote="",startTime;async function fetchRandomQuote(){try{let t=await fetch("https://api.quotable.io/random"),e=await t.json();currentQuote=e.content,quoteElement.textContent=currentQuote,inputArea.value="",resultElement.textContent="",startButton.disabled=!0,inputArea.disabled=!1,inputArea.focus(),startTime=new Date}catch(n){console.error("Error fetching quote:",n),quoteElement.textContent="An error occurred while fetching the quote."}}function checkTyping(){let t=inputArea.value.trim();if(t===currentQuote){let e=new Date,n=(e-startTime)/1e3,r=t.split(" ").length;resultElement.textContent=`Kecepatan mengetik kamu adalah : ${Math.round(r/(n/60))} WPM`,startButton.disabled=!1,inputArea.disabled=!0}else resultElement.textContent=""}startButton.addEventListener("click",fetchRandomQuote),inputArea.addEventListener("input",checkTyping);