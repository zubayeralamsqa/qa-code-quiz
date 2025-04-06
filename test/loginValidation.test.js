import { validateLogin } from '../src/utils/auth'; // Adjust the import based on actual file structure

describe("Login Validation", () => {
  test("should fail when fields are empty", () => {
    const result = validateLogin("", "");
    expect(result).toEqual({ success: false, message: "Fields cannot be empty" });
  });

  test("should fail for incorrect credentials", () => {
    const result = validateLogin("wrongUser", "wrongPass");
    expect(result).toEqual({ success: false, message: "Invalid credentials" });
  });

  test("should pass for valid credentials", () => {
    const result = validateLogin("testUser", "testPass");
    expect(result).toEqual({ success: true, message: "Login successful" });
  });
});
