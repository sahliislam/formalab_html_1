console.log('bienvenue au jeu');
var sol=Math.floor(Math.random()*100)+1;

var tent=0;  // nb a deviner
var nb=Number(prompt('donner un numero '));
while((sol !== nb)&&(tent<8))
{if(nb<sol)
    {console.log('faux! vous avez donner un nbre plus petit');}
else
{console.log('faux! vous avez donner un nbre plus grand');}  
tent++;
var nb=Number(prompt('donner un numero '));
}

if(nb==sol) {console.log('bravo');}
else {console.log('vous ave perdu ');}