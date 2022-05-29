'use strict'

// Global variables
var file = document.getElementById("data");
var output_element = document.getElementById("output-content");

// Event executed when the file is selected
file.addEventListener('change', (evt) => {
    let file = evt.target.files[0];
    if (file) {
        //Read the file
        let reader = new FileReader();
        reader.readAsText(file, "UTF-8");

        reader.onload = function (e) {
            // Display the file content
            let data = e.target.result;
            // Genenerate the output
            let result = generateOutPut(data);  
            output_element.innerHTML = result;
        }

        reader.onerror = function (evt) {
            output_element.innerHTML = "<p>error reading file</p>";
        }
    }
});

//Generate output
function generateOutPut(data) {
    let cont = 0;
    let array = data.split("\n");
    let output = "";
   
    for (let i = 0; i < array.length; i++) {
        let subArray = [];
        if (array[i] == "\r") {
            subArray = array.slice(cont, i);
            cont = i + 1;
            if (subArray.length > 0) {
                let employees = generateEmployees(subArray);
                output += "<p>" + generateOutputMessage(employees) + "</p>";
            }
        } else if (i == array.length - 1) {
            subArray = array.slice(cont, array.length);
            let employees = generateEmployees(subArray);
            output += "<p>" + generateOutputMessage(employees) + "</p>";
        }
    }

    return output;
};

//Generate employees with Employee class
function generateEmployees(data) {
    let employees = [];
    data.forEach(function (element) {
        let info = element.split("=");
        let name = info[0];
        let days = generateDay(info[1].split(","));
        let employee = new Employee(name, days);
        employees.push(employee);
    });
    return employees;
}

//Generate days with Day class
function generateDay(data) {
    var days = [];
    data.forEach(function (el) {
        let day = el.substring(0, 2);
        let schedule = el.replace(day, '').split("-");
        let arrival_time = schedule[0];
        let departure_time = schedule[1];
        let day_obj = new Day(day, arrival_time, departure_time);
        days.push(day_obj);
    });

    return days;
}

//Generate output message
function generateOutputMessage(data) {
    let msg = "";
    for (let i = 0; i < data.length; i++) {
        let array = data.filter(el => el.name != data[i].name);
        for (const employee of array) {
            let cont = compareDays(data[i].days, employee.days);
            msg += `<p> ${data[i].name} - ${employee.name}: ${cont} coincidences </p>`;
        }
        data.splice(data[i], 1);
    }
    return msg;
}

//Compare days to determinate if there is coincidence in schedule. It returns the number of coincidence
function compareDays(e1,e2) {
    let cont = 0;
    for (let i = 0; i < e1.length; i++) {
        let day = e1[i];
        let day_obj = e2.find(el => el.day == day.day);
        if (day_obj) {
            let interval_e1 = range(parseInt(day.arrival_time), parseInt(day.departure_time));
            let interval_e2 = range(parseInt(day_obj.arrival_time), parseInt(day_obj.departure_time));
            if (interval_e1.length >= interval_e2.length && interval_e1[0] <= interval_e2[0]) {
                if (interval_e1.includes(parseInt(day_obj.arrival_time)) || interval_e1.includes(parseInt(day_obj.departure_time))) {
                    cont++;
                }  
            } else {
                if (interval_e2.includes(parseInt(day.arrival_time)) || interval_e2.includes(parseInt(day.departure_time))) {
                    cont++;
                }
            }
        }
    }
    return cont;
}

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
  }
