export async function loginUser(username, password) {
    if (!username || !password) {
      throw new Error("Username and password are required");
    }
  
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  
    if (!response.ok) {
      throw new Error("Login failed");
    }
  
    const data = await response.json();
    return data;
  }
  