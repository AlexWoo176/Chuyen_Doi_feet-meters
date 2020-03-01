function feetToMetter(feet){
    feet=parseFloat(feet);
    metter = 0.305 * feet;
    // return metter;
    document.getElementById('rs1').innerHTML = metter;
}

function metterToFeet(metter){
    metter = parseFloat (metter);
    feet = 3.279 * metter;
    // return feet;
    document.getElementById('rs2').innerHTML = feet;
}