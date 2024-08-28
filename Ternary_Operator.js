// Gọi cách khác là toán tử ba ngôi
var userInfor = {
    name: "Jukis Yuri",
    ID: 102
}
// Xét biến result, nếu ID của User = 102 thì trả về ID hợp lệ, còn không thì trả về ID không trùng
var result = userInfor.ID == 102 ? console.log("ID hợp lệ") : console.log("ID không trùng")
console.log(result)

var resultName = userInfor.name == "Jukis Yuri" ? console.log("Trùng tên") : console.log("Không trùng tên")