try{
    const num = 20;
    num.toUpperCase();
} catch(error){
    console.log(error instanceof TypeError);
    console.log(error.message);
}