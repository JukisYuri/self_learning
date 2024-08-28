// For loops
var myArray = ['a', 'b', 'c', 'd', 'e']

for(var i = 0; i < myArray.length; i++){
    console.log(myArray[i])
}
for(var i = 100; i >= 0; i -= 5){ // Extends Loop: Chạy từ 100 về 0, nhưng cách nhau 5 đơn vị
    console.log(i)
}

// For in & of loops
var myObject = {
    user: "Jukis Yuri",
    age: 18,
    id: 102,
    address: "Di An city"
}
for(var key in myObject){
    console.log(key) // Trả về tên các thuộc tính (keys) của đối tượng
    console.log(myObject[key]) // Trả về các giá trị (values) tương ứng với các thuộc tính
}
for(var key of Object.keys(myObject)){
    console.log(key) // Trả về tên các thuộc tính (keys) của đối tượng
    console.log(myObject[key]) // Trả về các giá trị (values) tương ứng với các thuộc tính
}

// While loops
var i = 1
while(i <= 5){
    console.log(i)
    i++
}

// Continue loops
// Bài toán: cho từ 0 đến 10, lấy số chẵn
for(var i = 0; i <= 10; i++) {
    if(i%2!==0){
        continue
    }
    console.log(i)
}

// For loops part 2
var courses = [{
    id: 1,
    name: 'Basic JavaScript',
    price: 0
},{
    id: 2,
    name: 'Advance JavaScript',
    price: 20
},{
    id: 3,
    name: "Basic Java",
    price: 0
},{
    id: 4,
    name: "Advance Java",
    price: 15
}]

courses.forEach(function(index, course){ // Hàm trả ra từng phần tử
    console.log(index, course)
})

var isEveryFree = courses.every(function(index, course){ // Tất cả trong mảng phải miễn phí thì trả về
    console.log(index)
    return course.price === 0
})
var isSomeFree = courses.some(function(index, course){ // Một cái trong mảng thỏa điều kiện thì trả về
    console.log(index)
    return course.price === 0
})
var findCourse = courses.find(function(course){ // Hàm để tìm
    return course.name === "Basic Java"
})
var filterCourse = courses.filter(function(course){ // Hàm để lọc
    return course.name === "Advance Java"
})
console.log(isEveryFree)
console.log(isSomeFree)
console.log(findCourse)
console.log(filterCourse)