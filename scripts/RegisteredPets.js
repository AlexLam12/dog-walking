import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

const walkers = getWalkers()
const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

  
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        console.log(clickEvent)
        if (itemClicked.id.startsWith("pet")) {
            const [,petId] = itemClicked.id.split("--")

            for (const pet of pets) {
                if (pet.id === parseInt(petId)) {

                    let assignedWalker = {name: ""};

                    for (const walker of walkers) {
                        if (walker.id === parseInt(pet.walkerId)) {
                            assignedWalker.name = walker.name

                        }
                    }
                    window.alert(`${pet.name} is being walked by ${assignedWalker.name}`)
                }
            }
        }
    }
)