    //new date // hora actual
let fecha = new Date();

console.log(new Date()); //Thu Sep 25 2025 20:14:46 GMT+0200 (hora de verano de Europa central)

    //date(milliseconds)

console.log(new Date(1758825174554)); //Thu Sep 25 2025 20:32:54 GMT+0200 (hora de verano de Europa central)

    //date(cadenaFecha)

console.log(new Date("2025-08-25")); //Mon Aug 25 2025 02:00:00 GMT+0200 (hora de verano de Europa central)

    //date(año_num, mes_num, dia_num ,[hor_num,min_num,seg_num,mils_num])

console.log(new Date("2025,08,25")); //Mon Aug 25 2025 00:00:00 GMT+0200 (hora de verano de Europa central)

    // Now

console.log(Date.now()); // 1758824388224 //milliseconds

    // parse !!!

console.log(Date.parse("2025-05-12")); // 1747008000000 //milliseconds

    // getfullyear

console.log(fecha.getFullYear()); // 2025

    // gatday //devuelve dia de la semana siendo domingo el 0

console.log(fecha.getDay()); //4

    // getMonth //devuelve el mes en estilo array el primero es 0

console.log(fecha.getMonth()); //8

    // getDate

console.log(fecha.getDate()); //25

    // getHours

console.log(fecha.getHours()); //20

    // getMinutes

console.log(fecha.getMinutes()); //30

    // getSeconds

console.log(fecha.getSeconds()); //47

    // getMilliseconds

console.log(fecha.getMilliseconds()); //677

    // getTime // devuelve timestamp en milliseconds

console.log(fecha.getTime()); //1758825174554

