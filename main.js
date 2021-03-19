const courses = { "mechT":3,"itcT":3,"thermoT":2,
            "calc":3,"isl":3,"itcL":1,"thermoL":1,
            "mechL":1,"cs":1};
const course_arr = ["mechT","itcT","thermoT","calc","isl","itcL","thermoL","mechL","cs"]
var grade_point = { "mechT":0,"itcT":0,"thermoT":0,
                    "calc":0,"isl":0,"itcL":0,"thermoL":0,
                    "mechL":0,"cs":0};
const CH = 18;

var input = document.getElementsByClassName("input");

function getGPA(gp){
    var average = 0.0;
    //console.log(gp[course_arr[0]]);
    for(var i=0;i<course_arr.length;i++){
        
        average += parseFloat(gp[course_arr[i]]) * parseFloat(courses[course_arr[i]]);
    }
    average = average/CH;
    return average;
}

function main(){
    var course;
    for (var i=0;i<input.length;i++){
    course = input[i].id;
    grade_point[course]= parseFloat( input[i].value);
    }
    var gpa = getGPA(grade_point);
    var s = document.getElementById("gp");
    s.innerHTML = gpa.toFixed(4);
    //console.log(JSON.parse(JSON.stringify(courses)));

}