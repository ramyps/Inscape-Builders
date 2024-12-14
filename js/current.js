var names = [
  "Avadi","KovilpathagaiAvadi","InfinityKundradhur"
];

$(document).ready(setup);

function setup(){
   for(var i=0; i<names.length; i++){
       $("#imagegrid").append("<img src='images/Current/photo/" + names[i]+".jpg'" + "/>");
       console.log(names[i]);
       // $("#namegrid").append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+names[i]);
       $("#namegrid").append("\t\t"+addCommaBetweenWords(names[i]));
       console.log(names[i]);
       $("#videogrid").append("<video src='images/Current/video/" + names[i]+".mp4'" + "controls>");
       console.log(names[i]);

   }
}

function addCommaBetweenWords(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1,$2');
}

