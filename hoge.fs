module HelloWorld

let square x = x * x

[<EntryPoint>]
let main argv = 
  printfn "Hello! %d" (square 5)
  0


