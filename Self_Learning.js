// Lưu ý 1
var a = 2
var b = "2"
if (a == b){
    console.log("Kết quả trả ra: 2 = \"2\"")
} else {
    console.log("Không trả ra kết quả")
}
if(a === b){
    console.log("Kết quả trả ra: 2 = \"2\"")
} else {
    console.log("Không trả ra kết quả vì int không bằng String")
}

// Lưu ý 2: (Xét dữ liệu xem có 0, '', null, undefined, NaN, false)
var result = "A" && "B" && "C"
var result2 = "A" && null && "C"

var result3 = "A" || "B" || "C"
var result4 = "A" || NaN || "C"
var result5 = undefined || false || "C"
console.log(result) // Trả ra C, xét dữ liệu từ đầu đến cuối
console.log(result2) // Trả ra null, xét dữ liệu từ đầu đến null và ngưng xét thêm
console.log(result3) // Trả ra A
console.log(result4) // Trả ra A
console.log(result5) // Trả ra C

// Lưu ý 3: More of String
var myString = 'Hoc JS tai F8'
// Length
console.log(myString.length)
// Find Index
console.log(myString.indexOf('JS'))
// Advance Find Index
var myString2 = 'Hoc JS tai JS JS F8'
console.log(myString2.indexOf('JS', 6)) // Bắt đầu đếm từ vị trí thứ 6, bỏ qua chữ JS đầu và tìm chữ JS thứ hai và ngưng
console.log(myString2.lastIndexOf('JS')) // Bắt đầu dò từ dưới lên nhưng mà đếm vẫn từ trên xuống
// Cut String
console.log(myString.slice(4)) // "JS tai F8"
console.log(myString.slice(4,6)) // "JS"
// Replace
console.log(myString.replace('JS', 'JavaScript')) // 'Hoc JavaScript tai F8'
console.log(myString2.replace('JS', 'JavaScript')) // 'Hoc JavaScript tai JS JS F8'
console.log(myString2.replace(/JS/g, 'JavaScript')) // Thay thế toàn bộ JS bằng JavaScript
// Convert to LowerCase
console.log(myString.toLowerCase())
// Convert to UpperCase
console.log(myString.toUpperCase())
// Trim
var myString3 = '     Hello   '
console.log(myString3.trim()) // Loại bỏ khoảng trắng
// Split (Liên quan tới Array)
var languages = 'JS, Java, Python'
console.log(languages.split(', ')) // Cắt từng câu
console.log(languages.split('')) // Cắt từng chữ cái một
// Get a character by index
const myString4 = 'Son Dang'
console.log(myString4.charAt(2)) // ra chữ "n"

// Lưu ý 4: Checking "NaN"
var b = 'abc'
var a = 20
var result = a/b
console.log(result) // Kết quả trả ra là số không hợp lệ
console.log(isNaN(result)) // Kiểm tra xem nếu kết quả là NaN

// Lưu ý 5: Hàm toFixed (làm tròn)
var Pi = 3.14
var randomNum = 3.4132342532
console.log(Pi.toFixed())
console.log(randomNum.toFixed(3)) // Trả ra 3.413

// Lưu ý 6: Arrays
var languages = ["Java", "JavaScript", "Python", "Ruby"]
// Join 
console.log(languages.join(", ")) // Ngăn cách nhau bởi dấu phẩy -> Java, JavaScript, Python, Ruby
// Pop
console.log(languages.pop()) // Xóa elements cuối mảng, và trả về phần tử đã xóa. Khi đã xóa hết mà còn dùng thêm hàm thì trả về Undefined
// Push
console.log(languages.push("CSS")) // Thêm elements vào cuối mảng, và trả về chiều dài mảng sau khi thêm
// Shift
console.log(languages.shift()) // Xóa elements đầu mảng, và trả về phần tử đã xóa. Khi đã xóa hết mà còn dùng thêm hàm thì trả về Undefined
// Unshift
console.log(languages.unshift("HTML")) // Thêm elements vào đầu mảng, và trả về chiều dài mảng sau khi thêm
// Concat 
var languages2 = ["HTML", "ReactJS"]
console.log(languages.concat(languages2)) // Nối arrays thành 1
// Slice
console.log(languages.slice(1, 2)) // Cắt ra mỗi phần tử thứ 2 và ko cắt phần tử thứ 3
console.log(languages.slice(1)) // Cắt ra từ phần tử thứ 2 đến hết mảng

// Lưu ý 7: Key Value Object
var myInfor = {
    name: "John Doe",
    age: 30,
    city: "New York"
}
var emailKey = 'jukisyuri@edu.vn'
console.log(myInfor.name)
delete myInfor.name // để xóa key và cả value

// Lưu ý 8: Date Object
var date = new Date()
var day = date.getDate()
var month = date.getMonth() + 1 // Vì tháng bắt đầu từ 0 -> 11 nên phải +1
var year = date.getFullYear()
console.log(day + '/' + month + '/' + year)

// Lưu ý 9: Switch - Case
var date = 2
switch(date){ // Sẽ trả về từng giá trị
    case 2:
        console.log("Today is Monday");
        break;
    case 3:
        console.log("Today is Tuesday");
        break;
    case 4:
        console.log("Today is Wednesday");
        break;
    default:
        console.log("Unknown day");
        break;
}

switch(date){ // Khi date có giá trị bất kì từ số 2 đến số 4 sẽ trả về tương tự console.log
    case 2:
    case 3:
    case 4:
        console.log("Today is a weekday");
        break;
    default:
        console.log("Unknown day");
        break;
}
