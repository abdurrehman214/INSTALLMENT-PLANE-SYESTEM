
function run() {
    const productPrice = parseFloat(document.getElementById('mp').value) || 0;
    const interestRate = parseFloat(document.getElementById('int').value) || 0;
    const installmentPeriod = parseInt(document.getElementById('per').value) || 0;

    if(productPrice===0 || installmentPeriod===0 || interestRate===0) {
        alert("please fill out the empty fields")
        
    }else{

    const totalCost = productPrice + interestRate;
    const monthlyCost = installmentPeriod > 0 ? (totalCost / installmentPeriod).toFixed(2) : 0;

    document.getElementById('t1').innerText = productPrice.toFixed(2);
    document.getElementById('t2').innerText = interestRate.toFixed(2);
    document.getElementById('t3').innerText = totalCost.toFixed(2)+"RS";
    document.getElementById('t4').innerText = installmentPeriod+" Months";
    document.getElementById('t5').innerText = monthlyCost+"RS";

    document.getElementById('plan-summary').classList.remove('d-none');
    document.getElementById('summary-body').classList.remove('d-none');
  }
}
function refresh() {
    location.href=location.href;
    
}
    
