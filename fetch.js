fetch("http://localhost:3000/users")
  .then((resp) => {
    return resp.ok ? resp.json() : console.log("error");
  })
  .then((data) => {
    // const titre = document.querySelector("h2");
    // titre.innerText = data.name;

    // // const cmontitre = document.createElement("h2");
    // // cmontitre.innerText = titre;

    // const monid = document.querySelector("p");
    // monid.innerText = data.id;

    // const cmonid = document.createElement("p");
    // cmonid.innerText = monid;

    const root = document.querySelector("#root");
    console.log(root);

    const titre = data.title;
    const monid = `Mon ID: ${data.id}`;
    const monnom = `Mon nom est ${data.nom}.`;
    const monage = `J'ai ${data.age} ans.`;
    const monexperience = `J'ai ${data.experience} année(s) d'expérience.`;
    const mesdeceptions = `J'ai ${data.deception}% de taux de déception dans ce que j'entreprend.`;

    const ctitre = document.createElement("h2");
    ctitre.innerText = titre;

    const cmonid = document.createElement("p");
    cmonid.innerText = monid;

    const cmonnom = document.createElement("p");
    cmonnom.innerText = monnom;

    const cmonage = document.createElement("p");
    cmonage.innerText = monage;

    const cmonexperience = document.createElement("p");
    cmonexperience.innerText = monexperience;

    const cmesdeceptions = document.createElement("p");
    cmesdeceptions.innerText = mesdeceptions;

    root.append(
      ctitre,
      cmonid,
      cmonnom,
      cmonage,
      cmonexperience,
      cmesdeceptions
    );
  });
