var cornFact = [ 
	"Corn, see Maize (Zea mays)",
	"A mesophytic herb, less drought tolerant compared to sorghum and pearl millet.",
	"Grows two to four meters in height.",
	"Has a diclinous inflorescence.",
	"The silks are elongated stigmas that look like tufts of hair.",
	"The male inflorescence is known as the tassel.",
	"The female inflorescence is known as the cob.",
	"There are two distict types of roots, embryonic and postembryonic.",
	"Thicker roots are advantageous for higher root growth.",
	"The presence of thick cuticle on the epidermis of the leaf reduces transpirational loss."
]




function quoteFact(){

	//var cornFact = Math.floor(Math.random(cornFact) * 10 +1 )
	
	var index = Math.floor(Math.random()*cornFact.length);
	var fact = cornFact[index];

	console.log(fact);
}

module.exports = {
	quoteFact: quoteFact
}