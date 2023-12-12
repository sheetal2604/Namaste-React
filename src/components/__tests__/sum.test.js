import {sum} from "../sum";

test("sum of two numbers",()=>{
    const result=sum(4,3);
    expect(result).toBe(7)
});