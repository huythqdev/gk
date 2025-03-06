// xử lý nút đăng nhập ở index
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('Login').addEventListener('click', function () {
    var Loginform = document.getElementById('login');
    var modal = document.getElementById('modal_1');
    var loginDisplay = window.getComputedStyle(Loginform).getPropertyValue('display');
    var modalDisplay = window.getComputedStyle(modal).getPropertyValue('display');

    if (loginDisplay === 'none' && modalDisplay === 'none') {
      Loginform.style.display = 'block';
      modal.style.display = 'flex';

    }

  });
});
// xử lý nút chuyển qua đăng ký của form đăng nhập
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('moveRegister').addEventListener('click', function () {
    var Loginform = document.getElementById('login');
    var Registerform = document.getElementById('register');
    var loginDisplay = window.getComputedStyle(Loginform).getPropertyValue('display');
    var RegisterDisplay = window.getComputedStyle(Registerform).getPropertyValue('display');
    if (loginDisplay === 'block' && RegisterDisplay === 'none') {
      Loginform.style.display = 'none';
      Registerform.style.display = 'block';
    }
  });
});

// xử lý nút đăng ký ở index
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('Register').addEventListener('click', function () {
    var Registerform = document.getElementById('register');
    var modal = document.getElementById('modal_1');
    var RegisterDisplay = window.getComputedStyle(Registerform).getPropertyValue('display');
    var modalDisplay = window.getComputedStyle(modal).getPropertyValue('display');

    if (RegisterDisplay === 'none' && modalDisplay === 'none') {
      Registerform.style.display = 'block';
      modal.style.display = 'flex';
    }
  });
});
// xử lý nút chuyển qua đăng nhập của form đăng ký
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('moveLogin').addEventListener('click', function () {
    var Loginform = document.getElementById('login');
    var Registerform = document.getElementById('register');
    var loginDisplay = window.getComputedStyle(Loginform).getPropertyValue('display');
    var RegisterDisplay = window.getComputedStyle(Registerform).getPropertyValue('display');
    if (loginDisplay === 'none' && RegisterDisplay === 'block') {
      Loginform.style.display = 'block';
      Registerform.style.display = 'none';
    }
  });
});

// xử lý nút đăng nhập
//  document.getElementById('btn-login').addEventListener('click', function() {
//      document.getElementById('login').submit();
//  });
// xử lý nút đăng ký
//    document.getElementById('btn-register').addEventListener('click', function() {
//     document.getElementById('register').submit();
// });

// xử lý nút trở lại trong đăng nhập 
document.getElementById('come-back').addEventListener('click', function () {
  window.location.href = "index.php";
  //  window.history.back();
});
// xử lý trở về trong đăng ký
document.getElementById('come-back__register').addEventListener('click', function () {
  window.location.href = "index.php";
});
// xử lý ấn vào sản phẩm

// $(document).ready(function() {

//         $("a#product__item-id").click(function(e) {
//           e.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>

//     // Lấy giá trị của tham số idsp từ href của thẻ <a>
//     var idsp = $(this).attr('href').split('=')[1];

//     var productForm = document.getElementById('detail-id');   
//         var overlay = document.getElementById('detail-overlay'); 
//         var productDisplay = window.getComputedStyle(productForm).getPropertyValue('display');
//         var OverlayDisplay = window.getComputedStyle(overlay).getPropertyValue('display');
//         if(productDisplay === 'none' && OverlayDisplay  === 'none' ){  
//         productForm.style.display = 'block';
//          overlay.style.display = 'flex';
//        }
//     // Thực hiện yêu cầu Ajax để tải chi tiết sản phẩm
//     $.ajax({
//         type: "GET",
//         url: "index.php?idsp=" + idsp, 
//         success: function(data) {              
//         $(".showProduct").html(data);

//         },
//         error: function() {
//         alert("Đã xảy ra lỗi khi tải chi tiết sản phẩm.");
//         }

//     });      
// });  

// });

// xử lý tắt overlay khi hiển thị sản phẩm (cũ)
//   document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('detail-overlay').addEventListener('click',function(){  
//     var productForm = document.getElementById('detail-id');   
//       var overlay = document.getElementById('detail-overlay'); 
//     var productDisplay = window.getComputedStyle(productForm).getPropertyValue('display');
//     var OverlayDisplay = window.getComputedStyle(overlay).getPropertyValue('display');
//     if(productDisplay === 'block' && OverlayDisplay  === 'flex' ){  
//    productForm.style.display = 'none';
//      overlay.style.display = 'none';
//     //  window.location.href = "index.php";
//      history.back();
//  }
//  }); 
// });

// xử lý tăng giảm sản phẩm
var quantityElement = document.getElementById("quantity-id");
function increaseQuantity() {
  var currentQuantity = parseInt(quantityElement.innerText);
  quantityElement.innerText = currentQuantity + 1;
}

function decreaseQuantity() {
  var currentQuantity = parseInt(quantityElement.innerText);
  if (currentQuantity > 1) {
    quantityElement.innerText = currentQuantity - 1;
  }
}

// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('detail-id').addEventListener('click',function(){  
//     var productForm = document.getElementById('detail-id');   
//       var overlay = document.getElementById('detail-overlay'); 
//     var productDisplay = window.getComputedStyle(productForm).getPropertyValue('display');
//     var OverlayDisplay = window.getComputedStyle(overlay).getPropertyValue('display');
//     if(productDisplay === 'block' && OverlayDisplay  === 'flex' ){  
//    productForm.style.display = 'block';
//      overlay.style.display = 'flex';
//  }
//  }); 
// });

// xử lý hiển thị hình trái tim trong sản phẩm
//  document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('icon_heart').addEventListener('click',function() {     
//         var heartEmpty = document.getElementById('heart_empty');   
//         var heartedFull = document.getElementById('hearted'); 
//         var heartEmptyDisplay = window.getComputedStyle(heartEmpty).getPropertyValue('display');
//         var heartedFullDisplay = window.getComputedStyle(heartedFull).getPropertyValue('display');
//           if(heartEmptyDisplay === 'inline-block'  && heartedFullDisplay === 'none' ){    
//             heartEmpty.style.display = 'none';
//             heartedFull.style.display = 'inline-block';
//           }else if(heartEmptyDisplay === 'none'  && heartedFullDisplay === 'inline-block'){
//             heartEmpty.style.display = 'inline-block';
//             heartedFull.style.display = 'none';
//           }             
//        });
//  document.getElementById('hearted').addEventListener('click',function() {     
//   var heartEmpty = document.getElementById('heart_empty');   
//   var heartedFull = document.getElementById('hearted'); 
//   var heartEmptyDisplay = window.getComputedStyle(heartEmpty).getPropertyValue('display');
//   var heartedFullDisplay = window.getComputedStyle(heartedFull).getPropertyValue('display');
//     if(heartEmptyDisplay === 'none'  && heartedFullDisplay === 'inline-block'){    
//       heartEmpty.style.display = 'inline-block';
//       heartedFull.style.display = 'none';
//     }              
//  });
// });



// hàm lấy giá trị của 1 cookie
function getCookie(name) {
  // Tạo chuỗi chứa tên cookie cùng với dấu '=' ví dụ ở đây là truyền vào customer_id nên thành customer_id=
  var cookieName = name + '=';
  // Giải mã chuỗi cookie để lấy được tất cả các cookie đã được lưu vì khi gửi đến máy chủ sẽ có khả năng bị mã hoá để bảo mật
  var decodedCookie = decodeURIComponent(document.cookie);

  var cookieArray = decodedCookie.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
    // Lấy một cookie từ mảng và loại bỏ khoảng trắng ở đầu và cuối chuỗi
    var cookie = cookieArray[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      // cookieName.length là độ dài của của tên cookie truyền vào như customer_id=
      // cookie.length: bao gồm cả cookieName.length + thêm giá trị cookie như customer_id=1
      // substring cắt điểm đầu và điểm cuối  trả về giá trị của cookie như 1 hay 2
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return null;
}
// hàm truyền tên của cookie mà hàm getcookie muốn lấy và lưu giá trị của cookie lại
function isLoggedIn() {
  var loggedInCookie = getCookie('customer_id');
  return loggedInCookie;
}

// xử lý hiện form đăng nhập khi chưa đăng ký mà thêm giỏ hàng
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn-addcartid').addEventListener('click', function () {
    var Loginform = document.getElementById('login');
    var modal = document.getElementById('modal_1');

    var loginDisplay = window.getComputedStyle(Loginform).getPropertyValue('display');
    var modalDisplay = window.getComputedStyle(modal).getPropertyValue('display');

    if (isLoggedIn() === null && loginDisplay === 'none' && modalDisplay === 'none') {
      Loginform.style.display = 'block';
      modal.style.display = 'flex';
      event.preventDefault();
    }
  });
});
//  document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('added-id').addEventListener('click',function() { 
//     var addedCartForm = document.getElementById('added-cart-id');
//     var addedCartDisplay = window.getComputedStyle(addedCartForm).getPropertyValue('display');
//     if(addedCartDisplay ==='none' && isLoggedIn() !== null ){
//       addedCartForm.style.display = 'flex';
//       event.preventDefault();
//      }
//   });
// });

// hiển thị form địa chỉ
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('add-address').addEventListener('click', function () {
    var adressForm = document.getElementById('address-Id');
    var adressDisplay = window.getComputedStyle(adressForm).getPropertyValue('display');
    if (adressDisplay === 'none') {
      adressForm.style.display = 'flex';
    }
  });
});