const etaCalc = () => {
    const distance = prompt("Enter the distance to your destination in miles: ");
    const speed = prompt("Enter your speed in MPH: ");
    const timeInHours = distance / speed;
    const timeInMinutes = timeInHours * 60;
    alert(`It will take you ${timeInMinutes} minutes or ${timeInHours} hours`);
}

etaCalc();