import { loginUser } from "../src/api/auth";

global.fetch = jest.fn();

describe("loginUser API function", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("should throw error if username or password is missing", async () => {
    await expect(loginUser("", "")).rejects.toThrow("Username and password are required");
  });

  test("should throw error if login fails", async () => {
    fetch.mockResolvedValueOnce({ ok: false });

    await expect(loginUser("user", "wrongpass")).rejects.toThrow("Login failed");
  });

  test("should return user data if login is successful", async () => {
    const mockUser = { id: 1, username: "testUser" };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    });

    const result = await loginUser("testUser", "password123");
    expect(result).toEqual(mockUser);
    expect(fetch).toHaveBeenCalledWith("/api/login", expect.any(Object));
  });
});
