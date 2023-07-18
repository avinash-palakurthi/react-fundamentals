const App = () => {
  const pets = [
    {
      name: "Dolly",
      type: "cat",
      description: "Dolly is funny and loves to be around people",
      skills: ["fetch", "play dead", "roll over"],
      image:
        "https://images.unsplash.com/photo-1583524505974-6facd53f4597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
    },
    {
      name: "Molly",
      type: "cat",
      description: "Molly is a sweet and cuddly cat stretch a lot!",
      skills: ["play dead", "meow", "purr"],
      image:
        "https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=711&q=80",
    },
    {
      name: "Molly1",
      type: "cat",
      description: "Molly is a sweet and cuddly cat stretch a lot!",
      skills: ["play dead", "meow", "purr"],
      image:
        "https://images.unsplash.com/photo-1570018144715-43110363d70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=731&q=80",
    },
  ];

  return (
    <div className="pets">
      <h1 className="heading">My Pets</h1>
      <ul className="container">
        {pets.map((pet, index) => (
          <li key={index}>
            <h1>{pet.name}</h1>
            <p>{pet.description}</p>
            <img
              src={pet.image}
              alt={pet.name}
              height={"200px"}
              width={"250px"}
            />
            <ul className="skills">
              {pet.skills.map((skill, index) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
