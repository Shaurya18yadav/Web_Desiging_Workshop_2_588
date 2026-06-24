function findLargest() {
    // 1. Grab values
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const n3 = parseFloat(document.getElementById('num3').value);
    const n4 = parseFloat(document.getElementById('num4').value);
    const n5 = parseFloat(document.getElementById('num5').value);
    
    const resultDiv = document.getElementById('result');

    // 2. Validation
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || isNaN(n5)) {
        resultDiv.className = "error";
        resultDiv.style.display = "block";
        resultDiv.innerHTML = "Please enter valid numbers in all fields.";
        return;
    }

    let largest;

    // 3. If-Else logic
    if (n1 >= n2 && n1 >= n3 && n1 >= n4 && n1 >= n5) {
        largest = n1;
    } else if (n2 >= n1 && n2 >= n3 && n2 >= n4 && n2 >= n5) {
        largest = n2;
    } else if (n3 >= n1 && n3 >= n2 && n3 >= n4 && n3 >= n5) {
        largest = n3;
    } else if (n4 >= n1 && n4 >= n2 && n4 >= n3 && n4 >= n5) {
        largest = n4;
    } else {
        largest = n5;
    }

    // 4. Output result
    resultDiv.className = "success";
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `The largest number is: ${largest}`;
}