const depositBtn = document.getElementById('deposit-button')
const withdrawBtn = document.getElementById('withdraw-button')

depositBtn.addEventListener('click', function(){
    /* const depositTotal = document.getElementById('deposit-total')
    const depositTotalText = depositTotal.innerText
    const depositTotalNumber = parseFloat(depositTotalText)
    const newDeposit = document.getElementById('deposit-input')
    const newDepositText = newDeposit.value
    const newDepositNumber = parseFloat(newDepositText)
    depositTotal.innerText = depositTotalNumber + newDepositNumber
    newDeposit.value = ''


    const balanceTotal = document.getElementById('balance-total')
    const balanceTotaltext =balanceTotal.innerText
    const balanceTotalNumber = parseFloat(balanceTotaltext)

    balanceTotal.innerText = balanceTotalNumber + newDepositNumber */

    changeBalance("deposit")

})

withdrawBtn.addEventListener('click', function(){
    /* const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalText = withdrawTotal.innerText
    const withdrawTotalNumber = parseFloat(withdrawTotalText)

    const newWithdraw = document.getElementById('withdraw-input')
    const newWithdrawText = newWithdraw.value
    const newWithdrawNumber = parseFloat(newWithdrawText)
    
    withdrawTotal.innerText = withdrawTotalNumber + newWithdrawNumber
    newWithdraw.value = '';

    const balanceTotal = document.getElementById('balance-total')
    const balanceTotaltext =balanceTotal.innerText
    const balanceTotalNumber = parseFloat(balanceTotaltext)

    balanceTotal.innerText = balanceTotalNumber - newWithdrawNumber */

    changeBalance("withdraw")
})

function changeBalance(type){
    const previousTotal = document.getElementById(`${type}-total`)
    const previousTotalText = previousTotal.innerText
    const previousTotalNumber = parseFloat(previousTotalText)
    const newMoney = document.getElementById(`${type}-input`)
    const newMoneyText = newMoney.value
    if(newMoneyText.length != 0 ) {
        const newMoneyNumber = parseFloat(newMoneyText)
        previousTotal.innerText = previousTotalNumber + newMoneyNumber
        newMoney.value = ''


        const balanceTotal = document.getElementById('balance-total')
        const balanceTotaltext =balanceTotal.innerText
        const balanceTotalNumber = parseFloat(balanceTotaltext)

        balanceTotal.innerText = balanceTotalNumber + newMoneyNumber

        if(type == 'withdraw'){
            balanceTotal.innerText = balanceTotalNumber - newMoneyNumber
        }
        else{
            balanceTotal.innerText = balanceTotalNumber + newMoneyNumber
        }
    }
    else{
        alert('Please Enter a Number')
    }
}