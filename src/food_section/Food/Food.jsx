import React from 'react';

const Food = ({data, bookMark}) => {
  // console.log(data.strCategoryThumb);
  const {strCategoryThumb , strCategoryDescription, strCategory} = data

  
    const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "300px",
    margin: "20px",
    padding: "15px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  p: {
    height : '150px',
    overflow: 'hidden',
  }
};
    return (
        <div>
            <div style={styles.card}>
            <img src={strCategoryThumb} alt={strCategory} style={styles.image}></img>
            <h2>{strCategory}</h2>
            <p style={styles.p}>{strCategoryDescription}</p>
            <div style={styles.buttons}>
                <button >Remove</button>
                <button onClick={() => bookMark(data)}>Favorite</button>
            </div>
            </div>
        </div>
    );
};

export default Food;