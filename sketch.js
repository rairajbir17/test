function setup() {
createCanvas(600,500);
background(200);

}

function draw() {


//******************************************** Robot with Shapes ********************************************//
strokeWeight(2);
// Robot face
//Robot Shadow Color
fill(79,79,85)
//Robot Shadow Area 
quad(96,54,100,50,100,100,96,100)
//Robot Body Color
fill(209,194,194);
//Robot Body Area
rect(100,50,50,50);

// Robot eyes
//Robot Eyes Color
fill(49,62,239);
//Robot Eyes Area(Both Eyes)
ellipse(108,65,6,6);
ellipse(142,65,6,6);

// Robot teeth
//Robot Teeth Color
fill(209,194,194)
//Robot Teeths Area's
rect(113,80,5,6);
rect(120,80,5,6);
rect(127,80,5,6);
rect(134,80,5,6);

//Robot body
fill(79,79,85)
quad(88,104,90,100,90,250,88,254)
fill(90,98,210)
rect(92,100,65,150);

// Robot legs
fill(209,194,194)
rect(97,250,22,100);
rect(130,250,22,100);

// Robot arms
fill(209,194,194)
//Robot right arm
quad(157,109,185,150,185,155,157,114)
//Robot left arm
quad(88,109,70,150,70,155,88,114)




//**************************************************************** Robot with Vertex  **********************************************//



//background  Area
strokeWeight(.1);
beginShape();
vertex(300,0);
vertex(600,0);
vertex(600,500);
vertex(300,500);
endShape(CLOSE);

//Background Color
fill(213,203,211);

//Stroke Size
strokeWeight(2);

//Robot Head
beginShape();
vertex(400,50);
vertex(450,50);
vertex(450,100);
vertex(400,100);
endShape(CLOSE);

//Robot Head Shadow(On Left Side)
//Shadw Color
fill(37,5,16);
//Shaw Area
beginShape();
vertex(400,50);
vertex(400,100);
vertex(395,105);
vertex(395,55);
endShape(CLOSE);

//Robot Eyes:

//Robot Eyes Color
 fill(49,62,239);

//Left Eye
beginShape();
vertex(408,65);
vertex(414,65);
vertex(414,71);
vertex(408,71);
endShape(CLOSE);

//Right Eye
beginShape();
vertex(442,65);
vertex(436,65);
vertex(436,71);
vertex(442,71);
endShape(CLOSE);

//Teeth

//Teeth Color
 fill(243,245,252);
//first teeth
beginShape();
vertex(413,80);
vertex(419,80);
vertex(419,86);
vertex(413,86);
endShape(CLOSE);

//Second teeth
beginShape();
vertex(419,80);
vertex(425,80);
vertex(425,86);
vertex(419,86);
endShape(CLOSE);

//Third teeth
beginShape();
vertex(425,80);
vertex(431,80);
vertex(431,86);
vertex(425,86);
endShape(CLOSE);

//Fourth Teeth
beginShape();
vertex(431,80);
vertex(437,80);
vertex(437,86);
vertex(431,86);
endShape(CLOSE);

//Robot Body

//Robot Body Color
fill(49,62,239);
//Robot Body Shape
beginShape();
vertex(395,100);
vertex(455,100);
vertex(455,250);
vertex(395,250);
endShape(CLOSE);


//Robot Head Shadow(On Left Side)
//Shadw Color
fill(37,5,16);
//Shaw Area
beginShape();
vertex(395,100);
vertex(395,250);
vertex(390,255);
vertex(390,105);
endShape(CLOSE);


//Robot Legs:
//Robot Legs Colors
fill(239,219,226);
//Right Leg
beginShape();
vertex(400,250);
vertex(422,250);
vertex(422,350);
vertex(400,350);
endShape(CLOSE);

//Left Leg
beginShape();
vertex(450,250);
vertex(428,250);
vertex(428,350);
vertex(450,350);
endShape(CLOSE);

//Robot Arms:
//Right Arm
beginShape();
vertex(395,109);
vertex(373,150);
vertex(373,155);
vertex(395,114);
endShape(CLOSE);

//Left Arm
beginShape();
vertex(455,109);
vertex(477,150);
vertex(477,155);
vertex(455,114);
endShape(CLOSE);

}
