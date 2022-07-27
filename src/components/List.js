import Item from "./Item";

const List = (props) => {
  const { tasks, setTasks, filtre } = props;
  return (
    <>
      <div className="list">
        {/* On parcourt la state qui contient toutes les données sous la forme d'un tableau */}
        {tasks.map((list, index) => {
          return (
            <>
              {/* Si le filtre (ce que l'on a crée lors du select) est 'all', on récupère tout */}
              {filtre === "all" ? (
                <div key={index} className="task">
                  <Item
                    list={list}
                    setTasks={setTasks}
                    tasks={tasks}
                    index={index}
                  />
                </div>
              ) : // Sinon, si le filtre est 'end' (correspond à tâche finies) et que le status est true (c'est à dire que l'on a barré la task, on récupère)
              filtre === "end" && list.status === true ? (
                <div key={index} className="task">
                  <Item
                    list={list}
                    setTasks={setTasks}
                    tasks={tasks}
                    index={index}
                  />
                </div>
              ) : (
                // Sinon, si le filtre est 'in' (correspond à tâches en cours) et que le status est false (c'est à dire que la task n'est pas barrée)
                filtre === "in" &&
                list.status === false && (
                  <div key={index} className="task">
                    <Item
                      list={list}
                      setTasks={setTasks}
                      tasks={tasks}
                      index={index}
                    />
                  </div>
                )
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default List;
