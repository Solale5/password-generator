//starts projeect
window.onload = function () {
  document.querySelector(".bt").addEventListener("click", function () {
    console.log("button clicked");
    getWordsFromAPI();
    exampleGenerator();
  });
};

//called by the makePassPhrase function at the bottom of file
function createPassword(Arr, Length) {
  var arr = Arr;
  var pwd = "";

  for (var i = 0; i < Length; i++) {
    pwd += arr[Math.floor(Math.random() * arr.length)];
  }

  return pwd;
}

function checkLength() {
  var input = document.getElementById("length").value;
  var goodLength = true;
  if (input < 8) {
    goodLength = false;
  }
  return goodLength;
}
//this function creates the passWORD
function exampleGenerator() {
  if (checkLength() == false) {
    var msg = "Too short";
    document.getElementById("generatedPwd").innerText = msg;
    return msg;
  } else {
    var value = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,~,`,!,@,#,$,%,^,&,*,(,),-,+,|,_,=,,[,],{,},<,>,?,/,.,;".split(
      ","
    );
    var Length = document.getElementById("length").value;
    var rand = createPassword(value, Length);
    document.getElementById("generatedPwd2").innerText = rand;
    return rand;
  }
}

// gets random words from seperate api
//passes ones that are not too long to the makePassPHRASE function
function getWordsFromAPI() {
  console.log("requested api");
  fetch(`https://random-word-api.herokuapp.com/word?number=100`)
    .then(function (response) {
      return response.json(); //using the json method returns a new Promise so we call then method again
    })
    .then(function (data) {
      let fouror5letterwords = [];

      for (word in data) {
        let element = String(data[word]);

        if (element.length == 4 || element.length == 5) {
          fouror5letterwords.push(element);
        }
      }
      makePassPHRASE(fouror5letterwords);
    });
}
//makes the passPHRASE
function makePassPHRASE(arrayOfRandomWords) {
  //uses the createPassword method written by (placeholder for name)
  let password = createPassword(arrayOfRandomWords, 2);

  //add code here to check if checkboxes are clicked
  document.getElementById("generatedPwd").innerText = password;
}
