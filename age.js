function calculateAge(){
    let years = document.getElementById("years").value;
    let months = document.getElementById("months").value;
    let days = document.getElementById("days").value;
    
    let date = new Date();
    let d = date.getDate();
    let m = 1 + date.getMonth();
    let y = date.getFullYear();

    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(days > d){
        d = d + month[m-1];
        m = m -1;
    }
    if(months > m){
        m = m + 12;
        y = y - 1;
    }

    let d1 = d - days;
    let m1 = m - months;
    let y1 = y - years;

    document.getElementById('year').innerHTML = y1;
    document.getElementById('month').innerHTML = m1;
    document.getElementById('day').innerHTML = d1;

    console.log(y1);

}

