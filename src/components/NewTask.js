import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewTask = (props) => {
  const { task, setTask, tasks, setTasks, setFiltre } = props;

  // On récupère les props et avec le destructuring, on peut les réutiliser rapidement

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ceci prévient le fait de recharger la page
  };
  return (
    <>
      <div className="box">
        <div className="newTask">
          {/* Ici c'est un formulaire basique, un input et un select */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={task}
              placeholder="Nouvelle tâche"
              status="false"
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
          </form>
          <button
            className="button-plus"
            onClick={() => {
              // la state tasks est sous la forme d'un tableau.
              // tab est un clone de tasks sur lequel on va faire les modifications
              const tab = [...tasks];
              // On ajoute au début du tableau un nouveau objet qui a comme key  :
              //    - name (le contenu récupéré de l'input)
              //    - status (une clé dont l'utilité sera d'imposer un filtre de style)
              tab.unshift({ name: task, status: false });
              // On change la valeur de tasks (qui correspond à l'ensemble des données)
              setTasks(tab);
              // On réinitialise l'input pour qu'il redevienne vide au submit du formulaire
              setTask("");
            }}
          >
            {/* Voici un exemple d'utilisation de Fontawesome */}
            <FontAwesomeIcon className="plus" icon="plus" />
          </button>
        </div>
        <div className="filter">
          <select name="" onChange={(e) => setFiltre(e.target.value)}>
            {/* La value que l'on récupère dans ce select servira plus tard pour filtrer le rendu */}
            <option value="all">Toutes</option>
            <option value="end">Terminées</option>
            <option value="in">En cours</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default NewTask;
