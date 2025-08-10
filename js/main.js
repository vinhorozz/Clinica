async function loadData() {
    const responseDoc=await fetch("./data/doctors.json");
    const responsePatient=await fetch("./data/patients.json");
    
    console.log(responseDoc);
    console.log(responsePatient)
}