function calculateGrade() {
    let n = parseInt(prompt("Enter number of students:"));
    let result = "";

    for (let i = 1; i <= n; i++) {
        let m1 = parseFloat(prompt(`Enter Subject 1 marks for Student ${i}`));
        let m2 = parseFloat(prompt(`Enter Subject 2 marks for Student ${i}`));
        let m3 = parseFloat(prompt(`Enter Subject 3 marks for Student ${i}`));

        let total = m1 + m2 + m3;
        let avg = total / 3;

        let grade;

        if (avg >= 90)
            grade = "A";
        else if (avg >= 75)
            grade = "B";
        else if (avg >= 60)
            grade = "C";
        else if (avg >= 40)
            grade = "D";
        else
            grade = "F";

        result += `
            <h3>Student ${i}</h3>
            Total: ${total}<br>
            Average: ${avg.toFixed(2)}<br>
            Grade: ${grade}
            <hr>
        `;
    }

    document.getElementById("output").innerHTML = result;
}