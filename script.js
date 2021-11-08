function createPassword(Arr, Length) {
    var arr = Arr;
    var pwd = "";

    for(var i = 0; i < Length; i++) {
        pwd += arr[Math.floor(Math.random()*arr.length)];
    }

    return pwd;
}

function checkLength() {
    var input = document.getElementById("length").value;
    var goodLength = true;
    if(input < 8) {
        goodLength = false;
    }
    return goodLength;

}

function exampleGenerator(Length) {

        if(checkLength() == false) {
            var msg = "Too short"
            document.getElementById("generatedPwd").innerText = msg;
            return msg;
        }
        else {
            var value = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,~,`,!,@,#,$,%,^,&,*,(,),-,+,|,_,=,\,[,],{,},<,>,?,/,.,;".split(",");

            var rand = createPassword(value, Length);
            document.getElementById("generatedPwd").innerText = rand;
            return rand;
        } 
}
