
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
