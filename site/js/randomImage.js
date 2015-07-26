var imageURLs = [
	"tune01.gif"
	, "tune02.gif"
	, "tune03.gif"
	, "tune04.gif"
	, "tune05.gif"
	, "tune06.gif"
	, "tune07.gif"
	, "tune08.gif"
	, "tune09.gif"
	, "tune10.gif"
	, "tune11.gif"
	, "tune12.gif"
	, "tune13.gif"
	, "tune14.gif"
	, "tune15.gif"
	, "tune16.gif"
	, "tune17.gif"
	, "tune18.gif"
	, "tune19.gif"
	, "tune20.gif"
	, "tune21.gif"
	, "tune22.gif"
	, "tune23.gif"
	, "tune24.gif"
	, "tune25.gif"
	, "tune26.gif"
	, "tune27.gif"
	, "tune28.gif"
	, "tune29.gif"
	, "tune30.gif"
	, "tune31.gif"
	, "tune32.gif"
	, "tune33.gif"
	];

function getRandomImage(imgAr, path) {
	path = path || 'images/'; // default path here
	var num = Math.floor( Math.random() * imgAr.length );
	var img = imgAr[ num ];
	var imgStr = '<img src="' + path + img + '" alt="" width="368px" height="245px">';
	document.write(imgStr); document.close();
}