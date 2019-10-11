/*function Calculate_Area() {
    const s1 = parseInt(document.getElementById("length").value);
    const s2 = parseInt(document.getElementById("breadth").value);
    

    const area=(s1*s2);
  
    console.log(s1);
    console.log(s2);
    console.log(area);
 
    document.getElementById("solution").innerHTML = area;

}*/

function Calculate_Area() {
    const s1 = parseInt(document.getElementById("length").value);
    const s2 = parseInt(document.getElementById("breadth").value);
    const area=(s1*s2);
    document.getElementById("solution").innerHTML = area;
}
 window.addEventListener('load', (event) => {


if(localStorage.getItem('length'))
     {
      document.getElementById('length').value=localStorage.getItem('length');
     }
     if(localStorage.getItem('breadth'))
     {
      document.getElementById('breadth').value=localStorage.getItem('breadth');
     }
    }

    )

     document.getElementById('button').addEventListener('click',() =>
     {
     const count = parseInt(localStorage.getItem('counting')) || 0
     const c = count + 1 
     const q = `${c} `
     document.getElementById('click_count').innerHTML = q;
     localStorage.setItem('counting', c);


     })

     document.getElementById('clear').addEventListener('click' , () =>
{
    localStorage.removeItem('counting')
}

     )
     
     function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
           document.getElementById("demo").innerHTML = this.responseText;
          }
        };
        xhttp.open("GET", "ajax_info.txt", true);
        xhttp.send();
      }