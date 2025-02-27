document.addEventListener("DOMContentLoaded", function() {
    setActiveBox("addMoney-box", "add-money");
});

function setActiveBox(activeBoxId, activeSectionId) {
    const boxes = ["addMoney-box", "cashout-box", "transfer-box", "bonus-box", "pay-box", "transiction-box"];
    const sections = ["add-money", "cashout", "transfer", "bonus", "payBill", "transiction"];

    boxes.forEach((box, index) => {
        const section = sections[index];
        const element = document.getElementById(box);
        const sectionElement = document.getElementById(section);

        if (box === activeBoxId) {
            element.classList.add("bg-[#f3f8fe]", "border-[#0874F2]");
            element.classList.remove("border-[#dadada]");
            sectionElement.style.display = "block";
        } else {
            element.classList.remove("bg-[#f3f8fe]", "border-[#0874F2]");
            element.classList.add("border-[#dadada]");
            sectionElement.style.display = "none";
        }
    });
}

document.getElementById("addMoney-box").addEventListener("click", function() {
    setActiveBox("addMoney-box", "add-money");
});

document.getElementById("cashout-box").addEventListener("click", function() {
    setActiveBox("cashout-box", "cashout");
});

document.getElementById("transfer-box").addEventListener("click", function() {
    setActiveBox("transfer-box", "transfer");
});

document.getElementById("bonus-box").addEventListener("click", function() {
    setActiveBox("bonus-box", "bonus");
});

document.getElementById("pay-box").addEventListener("click", function() {
    setActiveBox("pay-box", "payBill");
});

document.getElementById("transiction-box").addEventListener("click", function() {
    setActiveBox("transiction-box", "transiction");
});
