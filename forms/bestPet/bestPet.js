let bestPetDog = "Dogs are likely the most stereotypical pet for children – and there’s a reason for that. Most average-sized dogs are large enough to avoid being injured by your child, but many breeds are also calm and laidback with children. Dogs easily live to a decade, so you shouldn’t have to worry about having that uncomfortable conversation with your child. This species is also trainable and can usually go anywhere your child can, so they make good everyday companions."
//replaces all mentions of dogs with hamsters and displays an alert
let bestPetHamster = bestPetDog.replace("Dogs","Hamsters")
let bestPetHamsterBoth = bestPetHamster.replace(" Dogs"," Hamsters")
let bestPetHamsterAll= bestPetHamsterBoth.replace("dogs","hamsters")
  alert(`${bestPetHamsterAll}`)
  