module RPN

let foldingFunction stack item =
  match (stack, item) with
  | (a::b::xs, "+") -> (b + a)::xs
  | (a::b::xs, "-") -> (b - a)::xs
  | (a::b::xs, "*") -> (b * a)::xs
  | (xs, numberString) -> (int numberString)::xs

(*
  let solveRPN = Array.fold foldingFunction List.empty<int> ("7 12 3 + *".Split(' '))
*)
let solveRPN (eq: string) = List.head <| Array.fold foldingFunction [] (eq.Split(' '))


[<EntryPoint>]
let main argv =
  printfn "should be 105: %d" (solveRPN "7 12 3 + *")
  printfn "should be -30: %d" (solveRPN "7 12 - 6 *")
  printfn "should be 32: %d" (solveRPN "6 2 + 5 3 - 2 * *")
  0
