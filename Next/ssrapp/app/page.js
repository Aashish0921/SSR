// app/page.js

export default async function UserPage() {
    const data = await (await fetch("https://dummyjson.com/users")).json();
  
    return (
      <div>
        <h1>Users (SSR)</h1>
        <ul>
          {data.users.map((user) => (
            <li key={user.id}>{user.firstName}</li>
          ))}
        </ul>
      </div>
    );
  }
  