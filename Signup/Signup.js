let base64 = "";

function encodeImageFileAsURL(element) {
  var file = element.files[0];
  var reader = new FileReader();
  console.log("next");

  reader.onload = function () {
    base64 = reader.result;

    imageBase64Stringsep = base64;

    // alert(imageBase64Stringsep);
    console.log(base64);
  };
  reader.readAsDataURL(file);
}

const signup = async () => {
  const response = await fetch("http://localhost:8080/user/signup", {
    method: "POST",
    body: JSON.stringify({
      email: document.getElementById("useremail").value,
      username: document.getElementById("username").value,
      phoneNumber: document.getElementById("phonenumber").value,
      password: document.getElementById("userpassword").value,
      profilePicture: base64,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const myJson = await response.json();
  console.log(myJson);
  window.location.href = "../Login/Login.html";
};
