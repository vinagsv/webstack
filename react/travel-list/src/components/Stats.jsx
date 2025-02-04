export function Stats({ items }) {
  const itemsLength = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage =
    itemsLength === 0 ? 0 : Math.round((numPacked / itemsLength) * 100);

  if (itemsLength === 0) {
    return (
      <footer className="stats">
        <em>Your list is empty. Start adding some items!</em>
      </footer>
    );
  }

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go!"
          : `You have ${itemsLength} items on your list, and you've packed ${numPacked} (${percentage}%).`}
      </em>
    </footer>
  );
}
