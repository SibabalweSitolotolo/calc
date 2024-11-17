



function enter() {
    const bornYear = document.getElementById('date1').value;
    const currentYear = document.getElementById('date2').value;
    results = document.getElementById('results')
   


    let x = currentYear - bornYear
   

    return results.innerHTML = (x)

   
}
// enter()