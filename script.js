function addItem() {
    var itemInput = document.getElementById("itemInput");
    var quantityInput = document.getElementById("quantityInput");
    var item = itemInput.value.trim();
    var quantity = quantityInput.value.trim();

    if (item !== "" && quantity !== "") {
        var li = document.createElement("li");
        li.innerHTML = `
            <span>${item} (الكمية: ${quantity})</span>
            <button class="delete-btn" onclick="deleteItem(this)"><i class="fas fa-trash"></i> حذف</button>
        `;
        document.getElementById("itemsList").appendChild(li);
        itemInput.value = "";
        quantityInput.value = "";
    } else {
        alert("يرجى ملء جميع الحقول.");
    }
}

function deleteItem(button) {
    var li = button.parentElement;
    li.remove();
}

function saveList() {
    var itemsList = [];
    var items = document.querySelectorAll("#itemsList li");
    items.forEach(item => {
        itemsList.push(item.innerText.replace("حذف", "").trim());
    });
    localStorage.setItem("shoppingList", JSON.stringify(itemsList));
    alert("تم حفظ القائمة بنجاح.");
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelectorAll('h2').forEach(h => h.classList.toggle('dark-mode'));

    // حفظ الحالة في LocalStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // التحقق من الوضع المظلم المحفوظ
    if (localStorage.getItem('dark-mode') === 'enabled') {
        toggleDarkMode();
    }

    // إضافة حدث لتبديل الوضع المظلم عند النقر
    document.querySelector('#toggleDarkMode').addEventListener('click', toggleDarkMode);
});
