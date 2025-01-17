import PropTypes from "prop-types"

export default function Stats({ items }) {
    
    Stats.propTypes ={
        items: PropTypes.array
    }

    if (!items.length)
      return ( // The items.length is non existant return this paragraph below.
        <p className="stats">
          <em>Start adding some items to your packing list 🚀</em>
        </p>
      );
      
    const numItems = items.length;
    // Just from the items props  the length is done. (above)
    const numPacked = items.filter((item) => item.packed).length;
    // numpacked is the item.packed number.
    const percentage = Math.round((numPacked / numItems) * 100);
    // percentage is numPacked is / by numItems and given as a percentage.
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything! Ready to go ✈️"
            : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
        </em>
      </footer>
    );
  }
  