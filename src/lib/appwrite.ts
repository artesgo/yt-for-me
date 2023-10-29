import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6459ae9f53672478e9ee"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);

export { Databases, client };