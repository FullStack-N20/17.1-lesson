function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        document.getElementById('result').innerText = "Please enter your birth date!";
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();

    let years = today.getFullYear() - birthDateObj.getFullYear();
    let months = today.getMonth() - birthDateObj.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result').innerHTML = `You are <strong>${years} years ${months} months</strong> old`;
}
