var choices =[
    { q: 'strings', a: 't' },
    { q: 'boxes', a: 't' },
    { q: 'character', a: 'f' },
    { q: 'boolean', a: 'f' },
];

choices.forEach(doThis);

function doThis() {
    //return value;
    //x = choices[i].a;
    //return x;
        // var text = "a: " + choices[i].q;
        // document.getElementById(choices[i].q).innerHTML = text;
        // console.log(a);
}

function printBtn() {
    for (var i = 0; i < choices.length; i++) {        
        var btn = document.createElement("button");
        var t = document.createTextNode(choices[i].q);
            //var ans = document.getElementById(choices[i].a);
        btn.appendChild(t);
        document.body.appendChild(btn); 
            //var text = '';
            //document.getElementById(choices[i].q).innertHTML = text;

        //text += choices[i].a + "<br>";
        //document.getElementById("button").innerHTML = text;
        
        //var t = onclick.doThis(choices[i].q);
        
    //    var answer = confirm(choices[i].q);
    //     //Compare answers
    //         if (
    //         (answer === true && choices[i].a === 't') ||
    //         (answer === false && choices[i].a === 'f')
    //         ) {
    //     //Increase score
    //         score++;
    //         alert('Correct!');
    //         } else {
    //         alert('Wrong!');
    //         }
    }
    
}

printBtn();