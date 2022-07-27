import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Buttons = ({ tasks, index, list, setTasks }) => {
  return (
    <>
      <div className="check">
        <FontAwesomeIcon
          icon="check"
          onClick={() => {
            // On duplique les tasks
            const oldTask = [...tasks];
            // On enlève l'element du tableau à l'index correspondant au bouton
            const newTab = oldTask.splice(index, 1);

            // Si le status est false (status de base, non rayé)
            !list.status
              ? // Alors on recrée à la fin du tableau l'élément qui contient les données avec un status qui passe en true (ce qui va rayer le contenu)
                oldTask.push({ name: list.name, status: true })
              : // Sinon (donc le status est true, du coup l'élément est déjà rayé), on insère l'élément au début du tableau en repassant son status en false
                oldTask.unshift({ name: list.name, status: false });

            // On met à jour les changements dans la state
            setTasks(oldTask);
          }}
        />
      </div>
      <div className="trash">
        <FontAwesomeIcon
          icon="trash"
          onClick={() => {
            // On clone le tableau
            const otherTab = [...tasks];
            // On se sert d'une constante juste pour 'splice' la copie, otherTab a donc un élément en moins.
            const deleteOne = otherTab.splice(index, 1);

            // On met à jour directement, ce qui fait que l'élement à cet index a été supprimé
            setTasks(otherTab);
          }}
        />
      </div>
    </>
  );
};

export default Buttons;
