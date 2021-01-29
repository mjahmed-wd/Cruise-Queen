function calculation(classIdName, additionOrder) {
    if (additionOrder == true) {
        document.getElementById(classIdName).value = readValue(classIdName) + 1
    } else if (additionOrder == false && readValue(classIdName) > 0) {
        document.getElementById(classIdName).value = readValue(classIdName) - 1
    }
    document.getElementById('subtotalAmount').innerText = subTotal()
    document.getElementById('taxAmount').innerText = taxAmount()
    document.getElementById('totalCost').innerText = totalCost()
}

function readValue(classIdName) {
    var readValue = document.getElementById(classIdName)
    var valueToNumber = 0
    if (isNaN(readValue.value) || (readValue.value) == "") {
        return valueToNumber = 0
    } else {
        return valueToNumber = parseInt(readValue.value)
    }
}

function subTotal() {
    var firstClassCost = readValue('firstClassValue') * 150;
    var economyClassCost = readValue('economyClassValue') * 100;
    var subTotal = firstClassCost + economyClassCost;
    return subTotal
}

function taxAmount() {
    var taxAmount = parseInt(subTotal()) * .1;
    return taxAmount;
}

function totalCost() {
    var totalCost = parseInt(subTotal()) + parseInt(taxAmount());
    return totalCost;
}

function hideBookingForm() {
    if (totalCost() == 0) {
        document.getElementById('notification').innerText = 'Please select any seat to go further'
    } else {
        document.querySelector('.booking-form').style.display = 'none';
        document.querySelector('.confirmation').style.display = 'block';
        confirmData()
    }
}

function confirmData() {
    document.getElementById('confirmSubtotal').innerText = subTotal()
    document.getElementById('confirmTax').innerText = taxAmount()
    document.getElementById('confirmTotalCost').innerText = totalCost()

}

function hideConfirmation() {
    document.querySelector('.booking-form').style.display = 'block';
    document.querySelector('.confirmation').style.display = 'none';
    document.getElementById('firstClassValue').value = 0
    document.getElementById('economyClassValue').value = 0
}