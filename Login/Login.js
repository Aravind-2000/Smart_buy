const login = async () => {
  const response = await fetch("http://localhost:8080/user/logindetails", {
    method: "POST",
    body: JSON.stringify({
      email: document.getElementById("useremail").value,
      password: document.getElementById("userpassword").value,
    }), // string or object
    headers: {
      "Content-Type": "application/json",
    },
  });
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  if (myJson.role == 1) {
    localStorage.setItem("userid", myJson.userId);
    localStorage.setItem("username", myJson.userName);
    localStorage.setItem("role", myJson.roleFlag);
    localStorage.setItem("dp", myJson.profilePicture);
    window.location.href = "";
  } else {
    localStorage.setItem("userid", myJson.userId);
    localStorage.setItem("username", myJson.userName);
    localStorage.setItem("role", myJson.roleFlag);
    localStorage.setItem("dp", myJson.profilePicture);
    window.location.href = "./Main.html";
  }
};
