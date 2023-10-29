<script>
    import { user } from "$lib/stores/user";
  
    let email = "";
    let password = "";
  </script>
  
  <form>
    <h1>Login or register</h1>
    <input type="email" placeholder="Email" bind:value={email} />
    <input type="password" placeholder="Password" bind:value={password} />
    <button type="button" on:click={() => user.login(email, password)}
      >Login</button
    >
    <button type="button" on:click={() => user.register(email, password)}
      >Register</button
    >
  </form>
  
  <style>
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100dvh;

      gap: 0.25rem;
      /* max-width: 600px; */
    }

    input {
        background-color: #333;
        padding: 8px 20px;
    }
  </style>
  