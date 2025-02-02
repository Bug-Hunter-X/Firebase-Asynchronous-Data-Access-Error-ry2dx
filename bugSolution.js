The corrected code utilizes `.then()` to handle the asynchronous nature of Firebase operations, ensuring data is available before access:

```javascript
getDocs(query)
  .then((querySnapshot) => {
    const cityRef = doc(db, "cities", querySnapshot.docs[0].id);
    return getDoc(cityRef);
  })
  .then((citySnap) => {
    console.log(citySnap.data().name); // Data is guaranteed to be loaded here
  })
  .catch((error) => {
    console.error("Error getting document:", error);
  });
```
This solution uses promises to chain the asynchronous operations, ensuring data is loaded before attempting to access it.  Error handling is also included for robustness.