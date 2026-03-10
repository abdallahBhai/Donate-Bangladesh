function donate(inputId, cardBalanceId, cause) {

const totalBalanceElement = document.getElementById("balance");
let totalBalance = parseFloat(totalBalanceElement.textContent);

const donationInput = document.getElementById(inputId);
let donationAmount = parseFloat(donationInput.value);

const cardBalanceElement = document.getElementById(cardBalanceId);
let cardBalance = parseFloat(cardBalanceElement.textContent);


if (isNaN(donationAmount) || donationAmount <= 0) {
alert("Enter a valid donation amount");
return;
}

if (donationAmount > totalBalance) {
alert("Not enough balance");
return;
}


totalBalance -= donationAmount;
cardBalance += donationAmount;

totalBalanceElement.textContent = totalBalance;
cardBalanceElement.textContent = cardBalance;

donationInput.value = "";


document.getElementById("successModal").classList.add("modal-open");


const historyList = document.getElementById("history-list");

const li = document.createElement("li");

li.textContent =
donationAmount + " BDT donated to " + cause;

historyList.appendChild(li);

}



function closeModal() {
document.getElementById("successModal")
.classList.remove("modal-open");
}



function showDonation() {

document.getElementById("donation-section")
.classList.remove("hidden");

document.getElementById("history-section")
.classList.add("hidden");

}



function showHistory() {

document.getElementById("history-section")
.classList.remove("hidden");

document.getElementById("donation-section")
.classList.add("hidden");

}