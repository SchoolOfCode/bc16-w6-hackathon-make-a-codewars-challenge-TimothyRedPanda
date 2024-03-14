import { expect, test } from "vitest";
import frog_contest from "./main.js";

test("Vitest Test", () => {});

test("n = 5", () => {
	//Arrange
	const n = 5;
	const expected = "Chris ate 15 flies, Tom ate 28 flies and Cat ate 946 flies";
	//Act
	const result = frog_contest(n);
	//Assert
	expect(result).toBe(expected);
});

test("n = 8", () => {
	//Arrange
	const n = 8;
	const expected = "Chris ate 36 flies, Tom ate 171 flies and Cat ate 21528 flies";
	//Act
	const result = frog_contest(n);
	//Assert
	expect(result).toBe(expected);
});

test("n = 10", () => {
    //Arrange
    const n = 10;
    const expected = "Chris ate 55 flies, Tom ate 378 flies and Cat ate 93961 flies";
    //Act
    const result = frog_contest(n);
    //Assert
    expect(result).toBe(expected);
});

test("n = 15", () => {
    //Arrange
    const n = 15;
    const expected = "Chris ate 120 flies, Tom ate 1830 flies and Cat ate 1902225 flies";
    //Act
    const result = frog_contest(n);
    //Assert
    expect(result).toBe(expected);
});

test("n = 32", () => {
    //Arrange
    const n = 32;
    const expected = "Chris ate 528 flies, Tom ate 34980 flies and Cat ate 630426786 flies";
    //Act
    const result = frog_contest(n);
    //Assert
    expect(result).toBe(expected);
});
