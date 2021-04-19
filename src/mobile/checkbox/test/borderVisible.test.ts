import { expect, fixture } from "@open-wc/testing";
import { MobileCheckbox } from "../index";

describe("confirm borderVisible default value is true", () => {
  const container = new MobileCheckbox();

  it("confirm borderVisible default value is true", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-mobile-checkbox__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(true);
  });
});

describe("borderVisible constructor set successfully", () => {
  const container = new MobileCheckbox({ borderVisible: false });

  it("borderVisible constructor set successfully", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-mobile-checkbox__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(false);
  });
});

describe("borderVisible prop set to true successfully", () => {
  const container = new MobileCheckbox({ borderVisible: false });
  container.borderVisible = true;

  it("borderVisible prop set to true successfully", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-mobile-checkbox__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(true);
  });
});

describe("borderVisible prop set to false successfully", () => {
  const container = new MobileCheckbox({ borderVisible: true });
  container.borderVisible = false;

  it("borderVisible prop set to false successfully", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-mobile-checkbox__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(false);
  });
});

describe("borderVisible constructor set to null successfully", () => {
  // @ts-expect-error
  const container = new MobileCheckbox({ borderVisible: null });

  it("borderVisible constructor set to null successfully", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-mobile-checkbox__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(false);
  });
});

describe("borderVisible prop set to null successfully", () => {
  const container = new MobileCheckbox({ borderVisible: true });
  // @ts-expect-error
  container.borderVisible = null;

  it("borderVisible prop set to null successfully", async () => {
    const el = await fixture(container);
    const selectMenuEl = el.querySelector(
      ".kuc-mobile-checkbox__group__select-menu"
    ) as HTMLDivElement;
    await expect(selectMenuEl.hasAttribute("borderVisible")).to.be.equal(false);
  });
});
