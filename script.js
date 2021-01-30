// Reading the value from input field
function readValue(classIdName) {
    var readValue = document.getElementById(classIdName)
    if (isNaN(readValue.value) || (readValue.value) == "") {
        return 0
    } else {
        return parseInt(readValue.value)
    }
}

// Calculating Subtotal
function subTotal() {
    var firstClassCost = readValue('firstClassValue') * 150;
    var economyClassCost = readValue('economyClassValue') * 100;
    var subTotal = firstClassCost + economyClassCost;
    return subTotal
}

// Calculating Tax
function taxAmount() {
    var taxAmount = parseInt(subTotal()) * .1;
    return taxAmount;
}

//Calculating Total Cost
function totalCost() {
    var totalCost = parseInt(subTotal()) + parseInt(taxAmount());
    return totalCost;
}

//Print on Subtotal, Tax, Total Cost
function printCost() {
    document.getElementById('subtotalAmount').innerText = subTotal()
    document.getElementById('taxAmount').innerText = taxAmount()
    document.getElementById('totalCost').innerText = totalCost()
}

//Action after "+" or "-" button clicked
function calculation(classIdName, additionOrder) {
    if (additionOrder == true) {
        document.getElementById(classIdName).value = readValue(classIdName) + 1
    } else if (additionOrder == false && readValue(classIdName) > 0) {
        document.getElementById(classIdName).value = readValue(classIdName) - 1
    }
    printCost()
}

//Hide a Section and show another one
function toggleSection(hidingPartId, ShowingPartId) {
    document.querySelector(hidingPartId).style.display = 'none';
    document.querySelector(ShowingPartId).style.display = 'block';
}

//Show data on confirmation section
function confirmData() {
    document.getElementById('confirmSubtotal').innerText = subTotal()
    document.getElementById('confirmTax').innerText = taxAmount()
    document.getElementById('confirmTotalCost').innerText = totalCost()
}

//Hide booking form and data Validation
function hideBookingForm() {
    if (totalCost() == 0) {
        document.getElementById('notification').innerText = 'Please select any seat to go further'
    } else {
        toggleSection('.booking-form', '.confirmation')
        confirmData()
    }
}

//Hide Confirmation Section and book new one with resetting value to 0
function hideConfirmation() {
    toggleSection('.confirmation', '.booking-form')
    document.getElementById('firstClassValue').value = ""
    document.getElementById('economyClassValue').value = ""
    document.getElementById('notification').innerText = ""
    printCost()
}