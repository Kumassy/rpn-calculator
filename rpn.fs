module RPN

let equation = "7 12 3 + *"

let foldingFunction stack item =
  match (stack, item) with
  | (a::b::xs, "+") -> (b + a)::xs
  | (a::b::xs, "-") -> (b - a)::xs
  | (a::b::xs, "*") -> (b * a)::xs
  | (xs, numberString) -> (int numberString)::xs

(*
  let solveRPN eq = Array.fold foldingFunction List.empty<int> (eq.Split(' '))
*)
let solveRPN = Array.fold foldingFunction List.empty<int> ("7 12 3 + *".Split(' '))

[<EntryPoint>]
let main argv =
  printfn "Hello! %d" (List.head solveRPN)
  0
