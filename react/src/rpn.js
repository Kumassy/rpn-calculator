import List from "fable-core/List";
import { fold } from "fable-core/Seq";
import { split } from "fable-core/String";
export function foldingFunction(stack, item) {
  var matchValue = [stack, item];
  var $var1 = matchValue[0].tail != null ? matchValue[0].tail.tail != null ? matchValue[1] === "+" ? [0, matchValue[0].head, matchValue[0].tail.head, matchValue[0].tail.tail] : matchValue[1] === "-" ? [1, matchValue[0].head, matchValue[0].tail.head, matchValue[0].tail.tail] : matchValue[1] === "*" ? [2, matchValue[0].head, matchValue[0].tail.head, matchValue[0].tail.tail] : [3, matchValue[1], matchValue[0]] : [3, matchValue[1], matchValue[0]] : [3, matchValue[1], matchValue[0]];

  switch ($var1[0]) {
    case 0:
      return new List($var1[2] + $var1[1], $var1[3]);

    case 1:
      return new List($var1[2] - $var1[1], $var1[3]);

    case 2:
      return new List($var1[2] * $var1[1], $var1[3]);

    case 3:
      return new List(Number.parseInt($var1[1]), $var1[2]);
  }
}
export function solveRPN(eq) {
  return fold(function (stack, item) {
    return foldingFunction(stack, item);
  }, new List(), split(eq, " ")).head;
}