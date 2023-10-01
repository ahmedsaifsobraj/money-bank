document.getElementById('calculate').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input');
    const incomeInputAmount = parseInt(incomeInput.value);


    const foodExpense = document.getElementById('food-expense-input');
    const foodExpenseAmount = parseInt(foodExpense.value);

    const rentExpense = document.getElementById('rent-expense-input');
    const rentExpenseAmount = parseInt(rentExpense.value);

    const clothesExpense = document.getElementById('cloth-expense-input');
    const clothesExpenseAmount = parseInt(clothesExpense.value);

    const newExpense = foodExpenseAmount + rentExpenseAmount + clothesExpenseAmount;

    const expenseTotal = document.getElementById('expenses-total');
    const previousExpense = parseInt(expenseTotal.innerText);

    const updateExpenseAmount = previousExpense + newExpense;


    if (incomeInputAmount > 0 && updateExpenseAmount > 0 && updateExpenseAmount < incomeInputAmount) {
        expenseTotal.innerText = updateExpenseAmount;
        const newBalance = incomeInputAmount - updateExpenseAmount;
        const balanceTotal = document.getElementById('balance-total');
        balanceTotal.innerText = newBalance;
    }
    else {
        expenseTotal.innerText = "Error";
        const balanceTotal = document.getElementById('balance-total');
        balanceTotal.innerText = "Eror";
    }
})

document.getElementById('calculate-saving').addEventListener('click', function () {
    const savingInput = document.getElementById('saving-input');
    const savingInputAmount = parseInt(savingInput.value);

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = parseInt(balanceTotal.innerText);

    const savingAmount = (savingInputAmount * balanceTotalAmount) / 100;
    const savingTotal = document.getElementById("saving-total");
    savingTotal.innerText = savingAmount;

    const remainingTotal = document.getElementById('remaining-total');
    const newRemainingTotal = balanceTotalAmount - savingAmount;
    remainingTotal.innerText = newRemainingTotal;

})