
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateStudentGrade() {
    rl.question('Enter student marks (between 0 and 100): ', (input) => {
      const marks = parseFloat(input);
  
      if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        let grade;
        if (marks > 79) {
          grade = 'A';
        } else if (marks >= 60 && marks <= 79) {
          grade = 'B';
        } else if (marks >= 50 && marks <= 59) {
          grade = 'C';
        } else if (marks >= 40 && marks <= 49) {
          grade = 'D';
        } else {
          grade = 'E';
        }
  
        console.log(`The student grade for ${marks} marks is: ${grade}`);
      } else {
        console.log('Please enter a valid mark between 0 and 100.');
      }
  
      rl.close();
    });
  }
  generateStudentGrade();