import Header from "./components/Header";
import List from "./components/List";
import NewTask from "./components/NewTask";

// Pour l'import de FontAwesome, on ne va pas importer toute la librairie car c'est trop volumineux et ça prendrait trop de temps
// On ne va importer que les icones dont on va se servir
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

// Ceci permet d'utiliser les icones n'importe où dans le projet
library.add(faCheck, faTrash, faPlus);

function App() {
  // Quand on souhaite utiliser des states dans plusieurs composants, il ne peut y avoir un transfert que du parent à l'enfant
  // On doit donc les définir dans le parent, et envoyer les states et leur setter dans les composants qui en ont besoin
  // Dans certains, ce sera juste le state tout seul, pour d'autres, ce sera juste le setter

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [filtre, setFiltre] = useState("all");
  return (
    <div className="container">
      {console.log(filtre)}

      <Header />
      <NewTask
        tasks={tasks}
        setTasks={setTasks}
        task={task}
        setTask={setTask}
        setFiltre={setFiltre}
      />
      <List tasks={tasks} setTasks={setTasks} filtre={filtre} />
    </div>
  );
}

export default App;
