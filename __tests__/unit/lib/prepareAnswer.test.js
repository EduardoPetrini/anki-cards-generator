import { prepareContent } from "../../../lib/prepareAnswer";

describe("test prepareContent", () => {
  it("should return the file content", async () => {
    const { json: responseSample } = await import("../../../lib/sample/response");

    const results = prepareContent(responseSample);

    expect(results).toBeDefined();
    
  });
});
