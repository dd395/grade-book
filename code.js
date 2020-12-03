$(document).ready(function () {
    $("form").submit(createStudent);

    $("#sortName").click(sortStudentsByName);
   $("#sortPercent").click(sortStudentsByPercent);

console.log("start student");

    var students =[];



    function createStudent(event) {
        event.preventDefault();
        var outputObj = {
            gradeText: "Grade:"
        };


        outputObj.firstName = $("#firstName").val();
        outputObj.lastName = $("#lastName").val();
        outputObj.pointsEarned = $("#pointsEarned").val();
        outputObj.pointsPossible = $("#pointsPossible").val();


        outputObj.percent = ((outputObj.pointsEarned / outputObj.pointsPossible) * 100).toFixed(2);
        outputObj.percentText = outputObj.percent + "%"


        if (outputObj.percent >= 90) {
            outputObj.grade = "A";
        } else if (outputObj.percent >= 80) {
            outputObj.grade = "B";
        } else if (outputObj.percent >= 70) {
            outputObj.grade = "C";
        } else if (outputObj.percent >= 60) {
            outputObj.grade = "D";
        } else {
            outputObj.grade = "F";
        }


        students.push(outputObj)
        var output = ""
        for (var studentItem of students) {
            output += (`${studentItem.firstName} ${studentItem.lastName} "${studentItem.grade}"  ${studentItem.percent}%`)
        }

        $("#outputFirst").text(output)

        $("#first").show()
        $("#last").show()
    }


    function sortStudentsByName(a, b) {

        if (a.name < b.name)
            return -1;
        else if (a.name > b.name)
            return 1;
        else
            return 0;
    }


    students.sort(sortStudentsByName);
    $("#outputSortByName").text(students.sort(sortStudentsByName))


    function sortStudentsByPercent(a, b) {

        if (a.percent < b.percent)
            return -1;
        else if (a.percent > b.percent)
            return 1;
        else
            return 0;

        }

        students.sort(sortStudentsByPercent);

    $("#outputSortByPercent").text(students.sort(sortStudentsByPercent))






        console.log("end student");

    })












