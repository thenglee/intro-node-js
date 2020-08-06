// write some tests
const { findUser, deleteUser, fixId } = require("./users");

describe("users", () => {
  describe("fixId", () => {
    test("converts param id string to id integer", () => {
      expect(fixId("9")).toBe(9);
    });
  });

  describe("findUser", () => {
    test("finds user by id if user exists", async () => {
      const user = await findUser(1);
      expect(user.id).toBe(1);
    });

    test("returns no user found if user does not exists", async () => {
      await expect(findUser(9999)).rejects.toThrow(`No user with id "9999"`);
    });
  });

  describe("deleteUser", () => {
    test("delete user by id if user exists", async () => {
      const user = await findUser(2);
      const deletedUser = await deleteUser(user.id);
      expect(deletedUser.id).toBe(2);

      try {
        await findUser(2);
      } catch (e) {
        expect(e).toBeTruthy();
      }
    });
  });
});
