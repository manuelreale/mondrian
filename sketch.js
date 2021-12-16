Counter=0
j=0
let p=[];
let p1=[140,180,0,0]
let p2=[346,300,0,-0]
let p3=[671,230,0,-0]
let p4=[590,530,0,-0]

function setup()
{
  for(i=0;i<100;i++){
    p[i]=0
  }
  noCursor()
}

draw=_=>{
	createCanvas(W=windowWidth,windowHeight)
	Counter+=.003;
	D(0,0,W-1,windowHeight-1,8)
  j=0;

  
  move()
}

function move(){
  //circle(mouseX,mouseY,50);
  
  //circle(p1[0],p1[1],50);
  if(p1[0]>width || p1[0]<0){p1[2]*=-1}
  if(p1[1]>height || p1[1]<0){p1[3]*=-1}
  p1[0]+=p1[2];
  p1[1]+=p1[3];
  
  //circle(p2[0],p2[1],50);
  if(p2[0]>width || p2[0]<0){p2[2]*=-1}
  if(p2[1]>height || p2[1]<0){p2[3]*=-1}
  p2[0]+=p2[2];
  p2[1]+=p2[3];
  
  //circle(p3[0],p3[1],50);
  if(p3[0]>width || p3[0]<0){p3[2]*=-1}
  if(p3[1]>height || p3[1]<0){p3[3]*=-1}
  p3[0]+=p3[2];
  p3[1]+=p3[3];
  
  //circle(p4[0],p4[1],50);
  if(p4[0]>width || p4[0]<0){p4[2]*=-1}
  if(p4[1]>height || p4[1]<0){p4[3]*=-1}
  p4[0]+=p4[2];
  p4[1]+=p4[3];
}


D=(x,y,w,h,step)=>{
  
	if(step>0){
      if(step==1){
        j++;
        if(p1[0]>x-15 && p1[0] < x+w+15 && p1[1]>y-15 && p1[1] < y+h+15){
          p[j]=200;
        }
        if(p2[0]>x-15 && p2[0] < x+w+15 && p2[1]>y-15 && p2[1] < y+h+15){
          p[j]=200;
        }
        if(p3[0]>x-15 && p3[0] < x+w+15 && p3[1]>y-15 && p3[1] < y+h+15){
          p[j]=200;
        }
        if(p4[0]>x-15 && p4[0] < x+w+15 && p4[1]>y-15 && p4[1] < y+h+15){
          p[j]=200;
        }
        if(mouseX>x-10 && mouseX < x+w+10 && mouseY>y-10 && mouseY < y+h+10){
          p[j]=200;
        }
        
        if(p[j]>0){  
          if(j%2==0){fill(27,49,150)}
          if(j%3==0){fill(194,36,25)}
          if(j%4==0){fill(27,49,150)}
          //if(j%5==0){fill(236,236,224)}
          if(j%6==0){fill(240,212,87)}
          //if(j%7==0){fill(236,236,224)}
          //if(j%8==0){fill(236,236,224)}
          //if(j%12==0){fill(236,236,224)}
          //if(j%18==0){fill(236,236,224)}
          if(j%24==0){fill(0)}
          //if(j%36==0){fill(236,236,224)}
          p[j]--
          
        }
        else{fill(236,236,224)}
        
        
        
        
      }
		strokeWeight(step)
		rect(x,y,w,h,0,0)
		let n=noise(x/W*TAU,y/W*TAU,Counter/step)
      //text(j, x+w/2, y+h/2);
      //text(p[j], x+w/2, y+h/2);

        
        stroke(0);
		--step%2?
		D(x,y,w*n,h,step)&D(x+w*n,y,w-w*n,h,step):
		D(x,y,w,h*n,step)&D(x,y+h*n,w,h-h*n,step)
      //text(j,x+w/2,y+h/2)
	}
}