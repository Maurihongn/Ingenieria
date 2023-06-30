function Fetch() {
  fetch("https://reqres.in/api/users/2")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error en la solicitud: " + response.status);
      }
    })
    .then((data) => {
      const user = data.data;
      const name = user.first_name;
      const email = user.email;

      document.getElementById("name").innerHTML = name;
      document.getElementById("email").innerHTML = email;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
