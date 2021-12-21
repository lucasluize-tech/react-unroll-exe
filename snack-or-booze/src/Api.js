import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async newDrink(drink) {
    await axios.post(
      `${BASE_API_URL}/drinks`,
      {
        id: drink.id,
        name: drink.name,
        description: drink.description,
        recipe: drink.recipe,
        serve: drink.serve,
      },
      { headers: { "Content-Type": "application/json" } }
    );
  }
  static async newSnack(snack) {
    await axios.post(
      `${BASE_API_URL}/snacks`,
      {
        id: snack.id,
        name: snack.name,
        description: snack.description,
        recipe: snack.recipe,
        serve: snack.serve,
      },
      { headers: { "Content-Type": "application/json" } }
    );
  }
}

export default SnackOrBoozeApi;
