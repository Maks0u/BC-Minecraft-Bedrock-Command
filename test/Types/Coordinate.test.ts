import { expect } from "chai";

describe("Coordinates", () => {
  it("IsCoordinate", () => {
    //Positive integers
    expect(IsCoordinate("^+5")).to.true;
    expect(IsCoordinate("~+5")).to.true;
    expect(IsCoordinate("^5")).to.true;
    expect(IsCoordinate("~5")).to.true;

    //Positive floats
    expect(IsCoordinate("^+5.2")).to.true;
    expect(IsCoordinate("~+5.3")).to.true;
    expect(IsCoordinate("~+0.5")).to.true;
    expect(IsCoordinate("~+.5")).to.true;
    expect(IsCoordinate("^5.2")).to.true;
    expect(IsCoordinate("~5.3")).to.true;
    expect(IsCoordinate("~.5")).to.true;
    expect(IsCoordinate("~0.5")).to.true;

    //Negative integers
    expect(IsCoordinate("^-5")).to.true;
    expect(IsCoordinate("~-5")).to.true;
    expect(IsCoordinate("~-.5")).to.true;

    //Negative floats
    expect(IsCoordinate("^-5.2")).to.true;
    expect(IsCoordinate("~-5.3")).to.true;

    //Other
    expect(IsCoordinate("^")).to.true;
    expect(IsCoordinate("~")).to.true;
    expect(IsCoordinate("^0")).to.true;
    expect(IsCoordinate("~0")).to.true;
  });
});
function IsCoordinate(arg0: string): any {
  throw new Error("Function not implemented.");
}