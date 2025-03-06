
// xử lý tăng giảm sản phẩm
var quantityElement = document.getElementById("qty-id");

function increaseQuantity() {
    var currentQuantity = parseInt(quantityElement.value);
    quantityElement.value = currentQuantity + 1;
}

function decreaseQuantity() {
    var currentQuantity = parseInt(quantityElement.value);
    if (currentQuantity > 1) {
        quantityElement.value = currentQuantity - 1;
       
    }
}



