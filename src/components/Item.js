import Buttons from "./Buttons";

const Item = ({ list, index, setTasks, tasks }) => {
  return (
    <>
      {/* On récupère les props envoyées, puis on affiche le rendu*/}
      <p key={index} style={{ textDecoration: list.status && "line-through" }}>
        {/* Si le status est 'true', alors on raye*/}
        {list.name}
      </p>
      <Buttons tasks={tasks} index={index} list={list} setTasks={setTasks} />
    </>
  );
};

export default Item;
