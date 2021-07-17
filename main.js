function submit()
{
    var display_student_arrray = [];

    for (var j = 1; j <= 4; j++)
    {
        var name_of_the_student = document.getElementById("name_of_the_student"+j).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
    }

    console.log(name_of_the_student_array);

    var length_of_name_of_students_arrray = name_of_the_student_array.lenght;
    console.log(length_of_name_of_students_arrray)

    for (var k = 0; k < length_of_name_of_students_arrray; k++)
    {
        display_student_arrray.push("<h4>Name - "+ name_of_the_student_array[k] "</h4>");
        console.log(display_student_arrray);
    }

    console.log(display_student_arrray);
    document.getElementById("display_name_with_commas").innerHTML = display_student_arrray;

    var remove_commas = display_student_arrray.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none"
    document.getElementById("sort_button").style.display = "inline-block"
}

function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array)

    var display_student_arrray_sorting = [];

    var length_of_name_of_students_arrray = name_of_the_student_array.lenght;
    console.log(length_of_name_of_students_arrray)

    for (var k = 0; k < lenght_of_name_of_students_array; k++) 
    {
        display_student_array_sorting.push("<h4>NAME - " + name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }

    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}