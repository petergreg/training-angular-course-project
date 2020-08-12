export class Ingredient {
    /** 
     * Cette ecriture permet de se libérer des déclarations d'attribut dans la classe
     * Les attributs sont indiqués dans le constructeur.
     */ 
    constructor (public name: string, public amount: number) {}
}