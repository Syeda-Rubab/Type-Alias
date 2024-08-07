type person1data={
        Name:string,
        FatherName:string,
        institute: string,
        specification:{
            eye_color:string,
            Height:number,
            HairColor:string,
            Complexion:string,
        }
    }


let studentData:person1data={
    Name:"Syeda Rubab",
    FatherName:"Syed Rais",
    institute: "GIACE",
    specification:{
        eye_color:"Dark Brown",
        Height: 5.3,
        HairColor:"Black",
        Complexion:"Caramel"
    }


}

let StudentData:person1data={
    Name:"Malaa",
    FatherName:"Ashfaq",
    institute:"Dow",
    specification:{
        eye_color:"Blue",
        Height:5.7,
        HairColor:"Brown",
        Complexion:"Fair"
    }
}
//console.log(StudentData["specification"]["HairColor"])
//console.log(StudentData)
//console.log(studentData)
console.log(studentData.specification)

//Alias type me 1 hi data type multiple variables main use ho sakta ha 