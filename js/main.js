async function loadData() {
    const responseDoc=await fetch("./data/doctors.json");
    const responsePatient=await fetch("./data/patients.json");
    
    const DocsData= await responseDoc.json();
    const patData=await responsePatient.json();

    console.log(DocsData);
    console.log(patData);
    // console.log(responseDoc);
    // console.log(responsePatient);


}

loadData();