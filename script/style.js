class user{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.location = location
    }
    compareAge(otherUser){
        if(this.age > otherUser.age){
            return this.firstName + " è più vecchio di " + otherUser.firstName
        } else if (this.age < otherUser.age){
            return this.firstName + " è più giovane di " + otherUser.firstName
        } else{
            return this.firstName + " e " + otherUser.firstName + " hanno la stessa età "
        }

        
    }
}

const user1 = new User("Mario", "Rossi", 30, "Roma");
const user2 = new User("Emanuele", "Lazzaro", 24, "Milano");

console.log(user1.compareAge(user2))
console.log(user2.compareAge(user1))
//1 esercizio finito







const petName = document.getElementById("petName")
    const ownerName =document.getElementById("ownerName")
    const species = document.getElementById("species")
    const breed = document.getElementById("breed")



    const myForm = document.getElementById("petForm")

class Pet{
    constructor(petName, ownerName, species, breed){
        this.petName = petName
        this.ownerName = ownerName
        this.species = species
        this.breed = breed
    }
    sameOwner(otherPet){
        if(this.ownerName === otherPet.ownerName){
            return true
        }else{
            return false
        }
    }
}

const pet1 = new Pet("Luna", "Mario Rossi", "Cane", "Labrador")
const pet2 = new Pet("Micio", "Anna Salpietro", "Gatto", "Siamese")
const pet3 = new Pet("Bunny", "Francesco Cantale", "Coniglio", "Nano")
const pet4 = new Pet("Rex", "Stefano Meli", "Cane", "Pastore Tedesco")

myForm.addEventListener('submit'), function (e) {
    e.preventDefault()
    const newPet = new Pet(
        petNameInput.value,
        ownerNameInput.value,
        speciesInput.value,
        breedInput.value
    )
    console.log(newPet, pet1)
    console.log(newPet, pet2)
    console.log(newPet, pet3)
    console.log(newPet, pet4)
}





    