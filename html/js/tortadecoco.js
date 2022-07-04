let stock = 200;
const registrarVenta = (cant) => {
    if (stock > cant) {
        stock = stock - cant;
        console.log(`El nuevo stock es de ${stock} unidades.`);
    } else {
        console.log(`No hay stock suficiente, quedan ${stock} unidades`);
    }
}

const reponer = (cant) => {
    stock = stock + cant;
    console.log(`El nuevo stock es de ${stock} unidades`);
}



do {
    let opciones= cual_es(prompt('¿Que quiere hacer?\n\n 1 _ Salir \n 2 _ Comprar una torta de coco \n 3 _ Soy empleado'))
        switch (opciones){
            case 1:
                display_image=("https://pbs.twimg.com/media/EL8VZVAXsAIbCLZ?format=jpg&name=4096x4096") ;
                break;
            case 2:
                do{
                    let opcion12o3 = cualopcion (prompt('¿Que comprara?\n\n 1_Una torta entera($16000) \n 2_Una porcion de torta ($2000) \n 3_ambas ($12000)\n\n Notese que estos precios seran por el aumento que vendra en unos dias'));
                        switch {
                            case 1:
                                console.log("Tendra que pagar cuando pase a retirar $16000")
                                break;
                            case 2:
                                console.log("Tendra que pagar en el local $2000")
                                break;
                                
                            default:
                                console.log("Opcion incorrecta")
                                break;
                        }
                } while (opcion12o3<=2)
            case 3:
                do {
                    opcion = Number(prompt('Ingrese una opción:\n\n1 - Registrar una venta\n2 - Reponer\n3 - Salir'));
                    let cant;
                
                        switch (opcion) {
                            case 1:
                                cant = Number(prompt('Ingrese la cantidad de unidades que se vendieron'));
                                registrarVenta(cant);
                                break;
                            case 2:
                                cant = Number(prompt('Ingrese la cantidad de unidades que ingresaron'));
                                reponer(cant);
                                break;
                            case 3:
                                alert('Hasta luego');
                                break;º
                            default:
                                alert('Opción incorrecta');
                                break;
                        }

            } while(opcion1o2 !== 4)
        default:
                        display_image("https://pbs.twimg.com/media/FLhhK72WUAA9vk5.jpg")
                        break;
    }
 } while(aboc!==E)