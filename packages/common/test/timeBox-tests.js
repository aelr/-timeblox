import { createTimBox, decodeTimeBox, encodeTimeBox } from "../src/timeBox";
test("Sunday at midnight for 5 minutes", () => {
    const block = createTimBox(0, 0, 0, 0, 5);
    const encodedBlock = encodeTimeBox(block);
    expect(encodedBlock).toBe(1);
    const parsed = decodeTimeBox(encodedBlock);
    expect(parsed).toEqual(block);
});
test("Sunday at midnight for 1 hour", () => {
    const block = createTimBox(0, 0, 0, 1, 0);
    const encodedBlock = encodeTimeBox(block);
    expect(encodedBlock).toBe(12);
    const parsed = decodeTimeBox(encodedBlock);
    expect(parsed).toEqual(block);
});
test("Tuesday at midnight for 35 minutes", () => {
    const block = createTimBox(2, 0, 0, 0, 35);
    const encodedBlock = encodeTimeBox(block);
    expect(encodedBlock).toBe(294919);
    const parsed = decodeTimeBox(encodedBlock);
    expect(parsed).toEqual(block);
});
test("Saturday at 11:55PM for 10 minutes", () => {
    const block = createTimBox(6, 23, 55, 0, 10);
    const encodedBlock = encodeTimeBox(block);
    expect(encodedBlock).toBe(1031682);
    const parsed = decodeTimeBox(encodedBlock);
    expect(parsed).toEqual(block);
});
