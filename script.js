function run() {
    const productPrice = parseFloat(document.getElementById('mp').value) || 0;
    const interestRate = parseFloat(document.getElementById('int').value) || 0;
    const installmentPeriod = parseInt(document.getElementById('per').value) || 0;
       document.getElementById("msg1").innerHTML = "";
    document.getElementById("msg2").innerHTML = "";
    document.getElementById("msg3").innerHTML = "";
    document.getElementById("mp").style.border = "";
    document.getElementById("int").style.border = "";     
    document.getElementById("per").style.border = "";  
    
let username=document.getElementById("mp").value
let email=document.getElementById("int").value        
let password=document.getElementById("per").value        

   if (username=="") {
    document.getElementById("msg1").innerHTML="please fill out this field"
    document.getElementById("mp").style='border: 2px solid red'
    return(false);
}    
else if (email=="") {
    document.getElementById("msg2").innerHTML="please fill out this field"
    document.getElementById("int").style='border: 2px solid red'
    return(false);
}  
else if(password==""){
    document.getElementById("msg3").innerHTML="please fill out this field";
    document.getElementById("per").style='border: 2px solid red'
return(false);
}
else if (productPrice !== 0 || interestRate !== 0 || installmentPeriod !== 0) {
        const totalCost = productPrice + interestRate;
        const monthlyCost = installmentPeriod > 0 ? (totalCost / installmentPeriod).toFixed(2) : "0.00";

        document.getElementById('t1').innerText = productPrice.toFixed(2);
        document.getElementById('t2').innerText = interestRate.toFixed(2);
        document.getElementById('t3').innerText = totalCost.toFixed(2) + " RS";
        document.getElementById('t4').innerText = installmentPeriod + " Months";
        document.getElementById('t5').innerText = monthlyCost + " RS";

        document.getElementById('plan-summary').classList.remove('d-none');
        document.getElementById('summary-body').classList.remove('d-none');
    }
return true;
}
   
   
    


function refresh() {
    location.reload();
}
