var gradeError = "GradeError";
var creditHourError = "CreditHour";

/*
  Get elements of all the dropdowns
*/
// Course 1 row
var course1           = "class 1";
var course1GradeError = document.querySelector('.course1-grade');
var course1CHError    = document.querySelector('.course1-ch');
var course1GradeEl    = document.querySelector('#course1-grade');
var course1CHEl       = document.querySelector('#course1-ch');

// Course 2 row
var course2           = "class 2";
var course2GradeError = document.querySelector('.course2-grade');
var course2CHError    = document.querySelector('.course2-ch');
var course2GradeEl    = document.querySelector('#course2-grade');
var course2CHEl       = document.querySelector('#course2-ch');

// Course 3 row
var course3           = "class 3";
var course3GradeError = document.querySelector('.course3-grade');
var course3CHError    = document.querySelector('.course3-ch');
var course3GradeEl    = document.querySelector('#course3-grade');
var course3CHEl       = document.querySelector('#course3-ch');

// Course 4 row
var course4           = "class 4";
var course4GradeError = document.querySelector('.course4-grade');
var course4CHError    = document.querySelector('.course4-ch');
var course4GradeEl    = document.querySelector('#course4-grade');
var course4CHEl       = document.querySelector('#course4-ch');

// Course 5 row
var course5           = "class 5";
var course5GradeError = document.querySelector('.course5-grade');
var course5CHError    = document.querySelector('.course5-ch');
var course5GradeEl    = document.querySelector('#course5-grade');
var course5CHEl       = document.querySelector('#course5-ch');

// Course 6 row
var course6           = "class 6";
var course6GradeError = document.querySelector('.course6-grade');
var course6CHError    = document.querySelector('.course6-ch');
var course6GradeEl    = document.querySelector('#course6-grade');
var course6CHEl       = document.querySelector('#course6-ch');


// Error spans map
var errorSpansMap = new Map();
errorSpansMap.set(course1 + gradeError,       course1GradeError);
errorSpansMap.set(course1 + creditHourError,  course1CHError);
errorSpansMap.set(course2 + gradeError,       course2GradeError);
errorSpansMap.set(course2 + creditHourError,  course2CHError);
errorSpansMap.set(course3 + gradeError,       course3GradeError);
errorSpansMap.set(course3 + creditHourError,  course3CHError);
errorSpansMap.set(course4 + gradeError,       course4GradeError);
errorSpansMap.set(course4 + creditHourError,  course4CHError);
errorSpansMap.set(course5 + gradeError,       course5GradeError);
errorSpansMap.set(course5 + creditHourError,  course5CHError);
errorSpansMap.set(course6 + gradeError,       course6GradeError);
errorSpansMap.set(course6 + creditHourError,  course6CHError);

// get help link
var helpLink = document.querySelector('#help');
helpLink.addEventListener('click', onHelpClick);

// Create new course object
function newCourse(grade, creditHours) {
  var course = new Course(grade, creditHours);
  return course;
}

// Course object
function Course(grade, creditHours) {
  this.grade = grade;
  this.creditHours = creditHours;  
}

// validate course has data
function courseHasData(gradeElement, creditHourElement) {
  var g  = gradeElement[gradeElement.selectedIndex].value;
  var ch = creditHourElement[creditHourElement.selectedIndex].value;
  if (g != 'grade' && ch != 'Credit Hours') {
    return true;
  } else {
    return false;
  }
}

// aggregate form data
var getCourses = function() {
  var coursesArray = aggregateCourseData();
  return coursesArray;
};

var aggregateCourseData = function() {
  // initialize empty array for courses
  var courses = [];
  var temp, gradeConversion, tempCHValue, chValue;
  // check each form element for data
  // class 1
  if (courseHasData(course1GradeEl, course1CHEl)) {
    gradeConversion = convertGrade(course1GradeEl);
    tempCHValue = getCreditHours(course1CHEl);
    chValue = creditHourToInteger.get(tempCHValue);
    temp = newCourse(gradeConversion, chValue);
    courses.push(temp);
  }
  // class 2
  if (courseHasData(course2GradeEl, course2CHEl)) {
    gradeConversion = convertGrade(course2GradeEl);
    tempCHValue = getCreditHours(course2CHEl);
    chValue = creditHourToInteger.get(tempCHValue);
    temp = newCourse(gradeConversion, chValue);
    courses.push(temp);
  }
  // class 3
  if (courseHasData(course3GradeEl, course3CHEl)) {
    gradeConversion = convertGrade(course3GradeEl);
    tempCHValue = getCreditHours(course3CHEl);
    chValue = creditHourToInteger.get(tempCHValue);
    temp = newCourse(gradeConversion, chValue);
    courses.push(temp);
  }
  // class 4
  if (courseHasData(course4GradeEl, course4CHEl)) {
    gradeConversion = convertGrade(course4GradeEl);
    tempCHValue = getCreditHours(course4CHEl);
    chValue = creditHourToInteger.get(tempCHValue);
    temp = newCourse(gradeConversion, chValue);
    courses.push(temp);
  }
  // class 5
  if (courseHasData(course5GradeEl, course5CHEl)) {
    gradeConversion = convertGrade(course5GradeEl);
    tempCHValue = getCreditHours(course5CHEl);
    chValue = creditHourToInteger.get(tempCHValue);
    temp = newCourse(gradeConversion, chValue);
    courses.push(temp);
  }
  // class 6
  if (courseHasData(course6GradeEl, course6CHEl)) {
    gradeConversion = convertGrade(course6GradeEl);
    tempCHValue = getCreditHours(course6CHEl);
    chValue = creditHourToInteger.get(tempCHValue);
    temp = newCourse(gradeConversion, chValue);
    courses.push(temp);
  }
  return courses;
};

// Convert grade element value to numerical value
function convertGrade(gradeElement) {
  var gradeValue = gradeElement[gradeElement.selectedIndex].value;
  var numericalGrade = gradeToPointsTable.get(gradeValue);
  return numericalGrade;
}

// Get numerical credit hour
function getCreditHours(creditHoursElement) {
  var value = creditHoursElement[creditHoursElement.selectedIndex].value;
  return value;
}

// Row 1 change event handler
var row1ChangeHandler = function() {
  validateCourseRow(course1, course1GradeEl, course1CHEl);
};

// Row 2 change event handler
var row2ChangeHandler = function() {
  validateCourseRow(course2, course2GradeEl, course2CHEl);
};

// Row 3 change event handler
var row3ChangeHandler = function() {
  validateCourseRow(course3, course3GradeEl, course3CHEl);
};

// Row 4 change event handler
var row4ChangeHandler = function() {
  validateCourseRow(course4, course4GradeEl, course4CHEl);
};

// Row 5 change event handler
var row5ChangeHandler = function() {
  validateCourseRow(course5, course5GradeEl, course5CHEl);
};

// Row 6 change event handler
var row6ChangeHanlder = function() {
  validateCourseRow(course6, course6GradeEl, course6CHEl);
};

// Validate course 
function validateCourseRow(courseNumber, gradeEl, creditHourEl) {
  var gradeValue = gradeEl[gradeEl.selectedIndex].value;
  var chValue    = creditHourEl[creditHourEl.selectedIndex].value;

  if (gradeValue != "Grade" && chValue == "Credit Hours") {
    var creditHour = errorSpansMap.get(courseNumber + creditHourError);
    creditHour.innerHTML = "Select credit hours";
    chSelectorError = true;
  } else if (gradeValue == "Grade" && chValue != "Credit Hours") {
    // show message to select grade from dropdown
    gradeSelectorError = true;
    var courseGrade = errorSpansMap.get(courseNumber + gradeError);
    courseGrade.innerHTML = "Select grade";
  } else {
    // clear messages
    var ch = errorSpansMap.get(courseNumber + creditHourError);
    var g  = errorSpansMap.get(courseNumber + gradeError);
    ch.innerHTML = "";
    g.innerHTML = "";
    gradeSelectorError = false;
    chSelectorError  = false;
  }
}

var gpaError = false, chError = false, gradeSelectorError = false, chSelectorError = false;
var infoMessageEl = document.querySelector('.info-message');
var calcButtonErrorEl = document.querySelector('.calc-button-error');
var computedTermGPAElement = document.querySelector('.computed-term-gpa');
var computedCumulativeGPA = document.querySelector('.computed-cumulative-gpa');
var gpaInput = document.getElementById("currentGPA");
var creditHoursInput = document.getElementById("currentCHTotal");
var gpaErrorElement = document.querySelector('.gpa-error');
var creditHourErrorEl = document.querySelector('.ch-error');
var calculate = document.getElementById("calcButton");

// Calculate button handler 
var onCalculateClick = function() {
    calcButtonErrorEl.innerHTML = "";
    computedTermGPAElement.innerHTML = "";
    computedCumulativeGPA.innerHTML = "";
    var formClassesArray = [];

    gpa = parseFloat(gpaInput.value);
    ch = parseInt(creditHoursInput.value);
    if (!isNaN(gpa)) {
      gpa = formatGPA(gpaInput.value);
    }

    if (!gpaError && !chError && !isNaN(gpa) && !isNaN(ch) && !gradeSelectorError && !chSelectorError) {
      // Get values from dropdowns and compute cumulative GPA
      // call function to get values from dropdown
      formClassesArray = getCourses();
      if (formClassesArray.length > 0) {
        formClassesArray.length = 0;
        var semesterGPA = getSemesterGPA();
        var totalCumulativeGPA = getCumulativeGPA(gpa, ch);
        computedTermGPAElement.innerHTML = "Semester GPA:&emsp;" + semesterGPA + "\n";
        computedCumulativeGPA.innerHTML  = "Cumulative GPA:&emsp;" + totalCumulativeGPA;
        $('#gradeModal').modal('show');
      }

    } else {
      if (gpaError && chError) {
        calcButtonErrorEl.innerHTML = "Oops! Please enter a valid GPA and total credits earned to date.";
        $('#calcButtonErrorModal').modal('show');
      } else if (gpaError && !chError) {
        calcButtonErrorEl.innerHTML = "Oops! Please enter a valid GPA.";
        $('#calcButtonErrorModal').modal('show');
      } else if (!gpaError && chError) {
        calcButtonErrorEl.innerHTML = "Oops! Please enter a positve whole number for total credits earned to date.";
        $('#calcButtonErrorModal').modal('show');
      } else if (!chSelectorError && gradeSelectorError) {
        calcButtonErrorEl.innerHTML = "Oops! Please select a grade for your course(s).";
        $('#calcButtonErrorModal').modal('show');
      } else if (chSelectorError && !gradeSelectorError) {
        calcButtonErrorEl.innerHTML = "Oops! Please select the credit hours for your course(s).";
        $('#calcButtonErrorModal').modal('show');
      } 
    }

    // Compute Term/Semester GPA
    if (!gpaError && !chError && !gradeSelectorError && !chSelectorError) {
      formClassesArray = getCourses();      
      if (formClassesArray.length > 0) {
        formClassesArray.length = 0;
        var termGPA = getSemesterGPA();
        computedTermGPAElement.innerHTML = "Semester GPA:&emsp;" + termGPA + "\n";
        $('#gradeModal').modal('show');
      } else {
        infoMessageEl.innerHTML = helpMessageText;
        $('#infoMessage').modal('show');
      }
    }
};

var helpMessageText = "To get started: <br><br> &#8226; Select the grade you want (or expect) from the 'grade' drop down menu <br>" +
" &#8226; Select the number of credit/unit hours for that class from the 'credit hours' drop down menu<br>"  +
" &#8226 Click 'Calculate GPA'<br><br>" +
" You can also enter in your current cumulative GPA (4.0-scale) and the number of credit/unit hours" +
" earned to date";

var onHelpClick = function() {

  infoMessageEl.innerHTML = helpMessageText;
        $('#infoMessage').modal('show');
}

// Returns semester/term GPA
function getSemesterGPA() {
  var courses = getCourses();
  var semesterGPA = calculateTermGPA(courses);
  return semesterGPA;
}

// Returns cumulative GPA
function getCumulativeGPA(gpa, creditHours) {
  cumGPA = calculateCumulativeGPA(gpa, creditHours);
  return cumGPA;
}

// Computes semester GPA
function calculateTermGPA(courses) {
  var totalPoints = 0, totalCreditHours = 0, tempGPA = 0;
  for (var i = 0; i < courses.length; i++) {
    var cur = courses[i];
    var currentPoints = cur.creditHours * cur.grade;
    totalPoints += currentPoints;
    totalCreditHours += cur.creditHours;
  }
  tempGPA = totalPoints / totalCreditHours;
  var gpaFormatted = formatGPA(tempGPA);
  return gpaFormatted;
}

// Computes cumulative GPA
function calculateCumulativeGPA(gpa, creditHours) {
  var totalPoints = 0, totalCreditHours = 0, currentPoints = 0, tempGPA = 0;
  var courses = getCourses();
  // Get points from submitted GPA and total credit hours
  totalPoints = gpa * creditHours;
  totalCreditHours = creditHours;
  for (var i = 0; i < courses.length; i++) {
    var cur = courses[i];
    currentPoints = cur.creditHours * cur.grade;
    totalPoints += currentPoints;
    totalCreditHours += cur.creditHours;
  }
  tempGPA = totalPoints / totalCreditHours;
  var gpaFormatted = formatGPA(tempGPA);
  return gpaFormatted;
}

// Validate GPA format in textbox
var validateGPA = function() {
  var gpaRegex = /^([0-3](\.\d\d?\d?)?|4(.000?)?)$/;
  if (!gpaRegex.test(gpaInput.value) && gpaInput.value != '') {
    gpaError = true;
    gpaErrorElement.innerHTML = "Please input a valid GPA: 0.000 - 4.000";
  } else {
    gpaError = false;
    gpaErrorElement.innerHTML = "";
    calcButtonErrorEl.innerHTML = "";
  }
};


// Validate credit hours format in textbox
var validateCreditHours = function () {
  var creditHourRegex = /^\d*[1-9]\d*$/;
  if (!creditHourRegex.test(creditHoursInput.value) && creditHoursInput.value != '') {
    chError = true;
    creditHourErrorEl.innerHTML = "Please enter a positive whole number.";
  } else {
    chError = false;
    creditHourErrorEl.innerHTML = "";
    calcButtonErrorEl.innerHTML = "";
  }
};

// Returns proper GPA format: [0.000]
function formatGPA(number) {
  return Number.parseFloat(number).toFixed(3);
}

// Disable keypress on both 'Current GPA'
// input and 'Total Credit Hours Earned To Date' input
gpaInput.onkeypress = function(e) {
  if (e.keyCode == 13) {
    e.preventDefault();
  }
};
creditHoursInput.onkeypress = function(e) {
  if (e.keyCode == 13) {
    e.preventDefault();
  }
};

// Grade conversion map:
// Maps letter grade to associated numberical value
var a      = "A",
    aMinus = "A-",
    bPlus  = "B+",
    b      = "B",
    bMinus = "B-",
    cPlus  = "C+",
    c      = "C",
    cMinus = "C-",
    dPlus  = "D+",
    d      = "D",
    f = "F";

var gradeToPointsTable = new Map();
gradeToPointsTable.set(a, 4.0);
gradeToPointsTable.set(aMinus, 3.7);
gradeToPointsTable.set(bPlus, 3.3);
gradeToPointsTable.set(b, 3.0);
gradeToPointsTable.set(bMinus, 2.7);
gradeToPointsTable.set(cPlus, 2.3);
gradeToPointsTable.set(c, 2.0);
gradeToPointsTable.set(cMinus, 1.7);
gradeToPointsTable.set(dPlus, 1.3);
gradeToPointsTable.set(d, 1.0);
gradeToPointsTable.set(f, 0.0);

// Mapping for credit hour to numerical conversion
var creditHourToInteger = new Map();
creditHourToInteger.set("5", 5.00);
creditHourToInteger.set("4", 4.00);
creditHourToInteger.set("3", 3.00);
creditHourToInteger.set("2", 2.00);
creditHourToInteger.set("1", 1.00);

/* 
  Register validation event listeners
  Check for changes in each course/class row
*/

// Course 1
course1GradeEl.addEventListener('input', row1ChangeHandler);
course1CHEl.addEventListener('input', row1ChangeHandler);

// Course 2
course2GradeEl.addEventListener('input', row2ChangeHandler);
course2CHEl.addEventListener('input', row2ChangeHandler);

// Course 3
course3GradeEl.addEventListener('input', row3ChangeHandler);
course3CHEl.addEventListener('input', row3ChangeHandler);

// Course 4
course4GradeEl.addEventListener('input', row4ChangeHandler);
course4CHEl.addEventListener('input', row4ChangeHandler);

// Course 5
course5GradeEl.addEventListener('input', row5ChangeHandler);
course5CHEl.addEventListener('input', row5ChangeHandler);

// Course 6
course6GradeEl.addEventListener('input', row6ChangeHanlder);
course6CHEl.addEventListener('input', row6ChangeHanlder);

// GPA text input and credit hour input
gpaInput.addEventListener('input', validateGPA);
creditHoursInput.addEventListener('input', validateCreditHours);

// get help link
var helpLink = document.querySelector('#help');
helpLink.addEventListener('click', onHelpClick);

// Calculate button event lister
calculate.addEventListener("click", onCalculateClick);
